const { Client } = require('pg');

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  const { cliente_nombre, telefono, servicio, fecha, hora, notas } = req.body;

  if (!cliente_nombre || !fecha || !hora) {
    return res.status(400).json({ error: 'Nombre, fecha y hora son requeridos' });
  }

  // Guarda el servicio elegido dentro del campo notas de la tabla
  const notasFinal = [
    servicio ? `Servicio: ${servicio}` : null,
    notas ? notas : null
  ].filter(Boolean).join('\n') || null;

  // Usa el Session-mode pooler de Supabase (puerto 5432) para compatibilidad
  // con prepared statements. Configura DATABASE_URL en Vercel Environment Variables.
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
  });

  if (!process.env.DATABASE_URL) {
    console.error('DATABASE_URL no está configurada en las variables de entorno de Vercel');
    return res.status(500).json({ error: 'Configuración de base de datos faltante' });
  }

  try {
    await client.connect();
    const result = await client.query(
      `INSERT INTO citas (cliente_nombre, telefono, fecha, hora, notas, appointment_source)
       VALUES ($1, $2, $3, $4, $5, 'PUBLIC_WEB') RETURNING id`,
      [cliente_nombre, telefono || null, fecha, hora, notasFinal]
    );
    await client.end();
    return res.status(201).json({ success: true, id: result.rows[0].id });
  } catch (err) {
    console.error('Error al guardar cita:', err.message, '| código:', err.code);
    try { await client.end(); } catch {}
    return res.status(500).json({ error: 'Error al registrar la cita. Intenta de nuevo.' });
  }
};
