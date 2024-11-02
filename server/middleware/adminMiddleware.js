require('dotenv').config();
const jwt = require('jsonwebtoken');

module.exports = function(role) {
    return function (req, res, next) {
        if(req.method === 'OPTIONS') {
            next();
        };
        try{
            const token = req.headers.authorization.split(' ')[1];
            if(!token) {
                return res.status(402).json({message: 'Не авторизован'})
            };
            const decoded = jwt.verify(token, process.env.SECRET_KEY);
            if(decoded.role !== role) {
                return res.status(403).json({message: 'Не достаточно прав'})
            }
            req.user = decoded;
            next();
        } catch(e) {
            return res.status(402).json({message: 'Не авторизован'});
        };
    };
};