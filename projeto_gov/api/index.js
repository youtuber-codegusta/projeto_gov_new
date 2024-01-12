// IMPORTS FROM PACKAGES
const express = require("express");
const dotenv = require("dotenv");
const mysql = require('mysql2');
const authRouter = require("./routes/auth");
const adminRoutes = require("./routes/admin");
const pdfRoutes = require("./routes/pdf");
const userRoutes = require("./routes/user");
const User = require("./models/user");
const app = express();

const PORT = 3000

dotenv.config();


app.use(express.json());
app.use(authRouter);
app.use(adminRoutes);
app.use(pdfRoutes);
app.use(userRoutes);
app.listen(process.env.PORT || PORT, () => {
  console.log(`connected at port ${PORT}`);
});
