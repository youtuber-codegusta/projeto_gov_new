const express = require("express");
const User = require("../models/user");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fs = require('fs');
const PDFDocument = require('pdfkit');
const path = require('path');
const auth = require("../middlewares/auth");
const authRouter = express.Router();


authRouter.post("/api/signup", async (req, res) => {
    try {
      const { name, age, gender, rg, email, password } = req.body;
  
      if (!name || !age || !rg || !email || !password) {
        return res.status(400).json({ msg: "Por favor, preencha todos os campos obrigatórios." });
      }
  
      const existingUser = await User.findOne({ where: { email } });
  
      if (existingUser) {
        return res.status(400).json({ msg: "Usuário com o mesmo endereço de email já cadastrado!" });
      }
  
      const hashedPassword = await bcryptjs.hash(password, 8);
  
      const newUser = await User.create({
        age,
        gender,
        rg,
        email,
        password: hashedPassword,
        name,
      });
  
      res.json(newUser);
    } catch (e) {
      console.error(e);
      res.status(500).json({ error: e.message });
    }
  });
  authRouter.post("/api/signin", async (req, res) => {
    try {
        const { email, password } = req.body;

        // Use Sequelize para encontrar o usuário pelo e-mail
        const user = await User.findOne({
            where: { email }
        });

        if (!user) {
            return res
                .status(400)
                .json({ msg: "Email não cadastrado!" });
        }

        // Use bcryptjs para comparar as senhas
        const isMatch = await bcryptjs.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ msg: "Senha incorreta" });
        }

        // Gere um token usando jwt
        const token = jwt.sign({ id: user.id }, "passwordKey");

        res.json({ token, ...user.toJSON() });
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});


authRouter.get("/", auth, async (req, res) => {
  try {
      const user = await User.findByPk(req.user, {
          attributes: { exclude: ['password'] }, // Exclude sensitive information like passwords
      });

      if (!user) {
          return res.status(404).json({ error: 'User not found' });
      }

      res.json(user);
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
  }
});
module.exports = authRouter;
