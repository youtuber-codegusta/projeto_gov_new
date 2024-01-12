const User = require("../models/user");
const express = require("express");
const pdfRoutes = express.Router();
const fs = require('fs');
const PDFDocument = require('pdfkit');
const path = require('path');
const auth = require("../middlewares/auth");


pdfRoutes.get('/generate-pdf', auth, async (req, res) => {
    try {
        const userId = req.user;

        // Use Sequelize para encontrar o usuário pelo ID
        const user = await User.findByPk(userId);

        if (!user) {
            return res.status(404).json({ msg: "Usuário não encontrado" });
        }

        const doc = new PDFDocument();
        const pdfName = 'usuario.pdf';
        doc.pipe(fs.createWriteStream(pdfName));
        doc.fontSize(20).text('Formulário Socioeconômico', 50, 20);

        let yPosition = 150;

        doc.fontSize(14).text(`Nome: ${user.name}`, 50, yPosition - 100);
        doc.fontSize(14).text(`Idade: ${user.age}`, 50, yPosition - 80);
        doc.fontSize(14).text(`Gênero: ${user.gender}`, 50, yPosition - 60);
        doc.fontSize(14).text(`RG: ${user.rg}`, 50, yPosition - 40);
        doc.fontSize(14).text(`Email: ${user.email}`, 50, yPosition - 20);
        doc.fontSize(14).text(`Endereço: ${user.address}`, 50, yPosition);
        doc.fontSize(14).text(`Estado Civil: ${user.maritalStatus}`, 50, yPosition + 20);
        doc.fontSize(14).text(`Membros da Família: ${user.familyMembers}`, 50, yPosition + 40);
        doc.fontSize(14).text(`Renda Familiar: ${user.familyIncome}`, 50, yPosition + 60);
        doc.fontSize(14).text(`Despesas Mensais: ${user.monthlyExpenses}`, 50, yPosition + 80);
        doc.fontSize(14).text(`Nível de Educação: ${user.educationLevel}`, 50, yPosition + 100);
        doc.fontSize(14).text(`Nível de Emprego: ${user.jobLevel}`, 50, yPosition + 120);
        doc.fontSize(14).text(`Estado de Saúde: ${user.healthStatus}`, 50, yPosition + 140);
        doc.fontSize(14).text(`Tipo de Moradia: ${user.housingType}`, 50, yPosition + 160);
        doc.fontSize(14).text(`Acesso ao Transporte: ${user.transportAccess}`, 50, yPosition + 180);
        doc.fontSize(14).text(`Necessidades Especiais: ${user.specialNeeds}`, 50, yPosition + 200);
        doc.fontSize(14).text(`Apoio Governamental: ${user.governmentSupport}`, 50, yPosition + 220);
        doc.fontSize(14).text(`Apoio de ONGs: ${user.NGOSupport}`, 50, yPosition + 240);
        doc.fontSize(14).text(`Estatus de aprovação: ${user.status}`, 50, yPosition + 300);


        yPosition += 60;




        doc.end();

        res.status(200).send({ message: 'PDF gerado com sucesso' });
    } catch (e) {
        console.error(e);
        res.status(500).json({ error: e.message });
    }
});

pdfRoutes.get('/download', (req, res) => {
    const filePath = path.join(__dirname, '../', 'usuario.pdf');
    const stat = fs.statSync(filePath);

    res.writeHead(200, {
        'Content-Type': 'application/pdf',
        'Content-Length': stat.size,
        'Content-Disposition': 'attachment; filename=usuario.pdf',
    });

    const readStream = fs.createReadStream(filePath);
    readStream.pipe(res);
});

module.exports = pdfRoutes;
