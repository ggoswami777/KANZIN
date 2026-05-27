import jwt from 'jsonwebtoken';


const whitelist = new Set(["/", "/test", "/api/user/login", "/api/user/register"]);

const requireAuthExcept = (req, res, next) => {

  if (req.method === 'OPTIONS') return next();

  if (whitelist.has(req.path)) return next();

 
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ success: false, message: 'Not authorized' });
  }

  try {
    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id;
    return next();
  } catch (err) {
    return res.status(401).json({ success: false, message: 'Invalid token' });
  }
};

export default requireAuthExcept;
