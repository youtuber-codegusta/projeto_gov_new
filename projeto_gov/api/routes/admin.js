const auth = require("../middlewares/auth");
const User = require("../models/user");
const express = require("express");
const adminRoutes = express.Router();

adminRoutes.get("/users", async (req, res) => {
    try {
        // Use Sequelize para encontrar todos os usuários
        const users = await User.findAll();

        res.json(users);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});


adminRoutes.put("/users/:id", auth, async (req, res) => {
    try {
        const { id } = req.params;
        const {
            address,
            maritalStatus,
            familyMembers,
            familyIncome,
            monthlyExpenses,
            educationLevel,
            jobLevel,
            healthStatus,
            housingType,
            transportAccess,
            specialNeeds,
            governmentSupport,
            NGOSupport,
            status
        } = req.body;

        // Use Sequelize para encontrar o usuário pelo ID
        const user = await User.findByPk(id);

        if (!user) {
            return res
                .status(404)
                .json({ msg: "Usuário não encontrado" });
        }

        const admin = await User.findByPk(req.user);

        if (admin.type === "admin") {
            // Atualize os campos do usuário usando Sequelize
            const updatedUser = await user.update({
                status,
                address,
                maritalStatus,
                familyMembers,
                familyIncome,
                monthlyExpenses,
                educationLevel,
                jobLevel,
                healthStatus,
                housingType,
                transportAccess,
                specialNeeds,
                governmentSupport,
                NGOSupport
            });

            res.json(updatedUser);
        } else {
            res
                .status(403)
                .json({ msg: "Você não é um administrador" });
        }
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

module.exports = adminRoutes;
