const { Client } = require('pg');

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Método no permitido' });

  let body = req.body;
  if (typeof body === 'string') { try { body = JSON.parse(body); } catch { body = null; } }
  if (!body) return res.status(400).json({ error: 'Body inválido' });

  const { barbero_nombre, fecha, hora } = body;
  if (!barbero_nombre || !fecha || !hora) {
    return res.status(400).json({ error: 'barbero_nombre, fecha y hora son requeridos' });
  }

  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
  });

  try {
    await client.connect();
    const result = await client.query(
      `SELECT COUNT(*) AS total FROM citas
       WHERE fecha = $1 AND barbero_nombre = $2 AND hora = $3
       AND estado NOT IN ('CANCELADA', 'NO_ASISTIO')`,
      [fecha, barbero_nombre, hora]
    );
    await client.end();
    const total = parseInt(result.rows[0].total, 10);
    return res.status(200).json({ disponible: total === 0 });
  } catch (err) {
    try { await client.end(); } catch {}
    return res.status(500).json({ error: 'Error al verificar disponibilidad', debug: err.message });
  }
};
