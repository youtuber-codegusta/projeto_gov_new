const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
    try {
        const token = req.header("x-auth-token");

        if (!token)
            return res.status(401).json({ msg: "Token de autenticação ausente, acesso negado." });

        const decoded = jwt.verify(token, "passwordKey");

        if (!decoded)
            return res.status(401).json({ msg: "Falha na verificação do token, acesso negado." });

        req.user = decoded.id;
        req.token = token;
        next();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = auth;
