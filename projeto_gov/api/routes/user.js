const User = require("../models/user");
const auth = require("../middlewares/auth");
const express = require("express");
const userRoutes = express.Router();

userRoutes.put('/api', auth, async (req, res) => {
    try {
        const userId = req.user;
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
            NGOSupport
        } = req.body;

        // Use Sequelize para encontrar o usuário pelo ID
        const user = await User.findByPk(userId);

        if (!user) {
            return res.status(404).json({ msg: "Usuário não encontrado" });
        }

        // Atualize os campos do usuário usando Sequelize
        const updatedUser = await user.update({
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

        res.status(200).json(updatedUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});

module.exports = userRoutes;
