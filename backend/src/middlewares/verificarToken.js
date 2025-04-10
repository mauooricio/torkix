const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET || 'chave_secreta_torkix';

const verificarToken = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) return res.status(401).json({ erro: 'Token ausente' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.usuario = { id: decoded.id }; // ← isso aqui é ESSENCIAL
    next();
  } catch (error) {
    return res.status(403).json({ erro: 'Token inválido' });
  }
};


module.exports = verificarToken;
