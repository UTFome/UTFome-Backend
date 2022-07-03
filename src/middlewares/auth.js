const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');
const { promisify } = require('util');

// middleware de autenticação

exports.autenticar = async function (req, res, next) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        const msg = { error: 'Token não informado' }
        console.log(msg)
        return res.status(401).json(msg);
    }

    const [, token] = authHeader.split(' ');

    try {
        const decoded = await promisify(jwt.verify)(token, authConfig.secret);
        req.userId = decoded.id;

        next();
    } catch (err) {
        return res.status(401).json({ error: 'Token inválido' });
    }

}