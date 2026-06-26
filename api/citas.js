const { Client } = require('pg');

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  if (!process.env.DATABASE_URL) {
    console.error('DATABASE_URL no configurada');
    return res.status(500).json({ error: 'Configuración de base de datos faltante' });
  }
  try {
    const _u = new URL(process.env.DATABASE_URL);
    console.log('DB host:', _u.hostname, '| user:', _u.username);
  } catch (e) {
    console.error('DATABASE_URL inválida:', e.message);
  }

  // Vercel parsea req.body automáticamente para application/json
  let body = req.body;
  if (typeof body === 'string') {
    try { body = JSON.parse(body); } catch { body = null; }
  }
  if (!body || typeof body !== 'object') {
    return res.status(400).json({ error: 'Body inválido' });
  }

  const { cliente_nombre, telefono, barbero_nombre, servicio, fecha, hora, notas } = body;

  if (!cliente_nombre || !fecha || !hora) {
    return res.status(400).json({ error: 'Nombre, fecha y hora son requeridos' });
  }

  const notasFinal = [
    servicio ? `Servicio: ${servicio}` : null,
    notas || null
  ].filter(Boolean).join('\n') || null;

  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
  });

  try {
    await client.connect();
    const result = await client.query(
      `INSERT INTO citas (cliente_nombre, telefono, barbero_nombre, fecha, hora, notas, appointment_source)
       VALUES ($1, $2, $3, $4, $5, $6, 'PUBLIC_WEB') RETURNING id`,
      [cliente_nombre, telefono || null, barbero_nombre || null, fecha, hora, notasFinal]
    );
    await client.end();
    console.log('Cita guardada id:', result.rows[0].id);
    return res.status(201).json({ success: true, id: result.rows[0].id });
  } catch (err) {
    console.error('Error DB:', err.message, '| code:', err.code);
    try { await client.end(); } catch {}
    return res.status(500).json({ error: 'Error al registrar la cita.', debug: err.message, code: err.code });
  }
};
