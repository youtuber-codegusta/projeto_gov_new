const { DataTypes } = require("sequelize");
const db = require('../config/db');

const User = db.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  age: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  gender: {
    type: DataTypes.STRING,
    defaultValue: "Prefiro não dizer",
  },
  rg: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING,
    defaultValue: "user",
  },
  address: {
    type: DataTypes.STRING,
    defaultValue: "",
  },
  maritalStatus: {
    type: DataTypes.STRING,
    defaultValue: "",
  },
  familyMembers: {
    type: DataTypes.STRING,
    defaultValue: "",
  },
  familyIncome: {
    type: DataTypes.STRING,
    defaultValue: "",
  },
  monthlyExpenses: {
    type: DataTypes.STRING,
    defaultValue: "",
  },
  educationLevel: {
    type: DataTypes.STRING,
    defaultValue: "",
  },
  jobLevel: {
    type: DataTypes.STRING,
    defaultValue: "",
  },
  healthStatus: {
    type: DataTypes.STRING,
    defaultValue: "",
  },
  housingType: {
    type: DataTypes.STRING,
    defaultValue: "",
  },
  transportAccess: {
    type: DataTypes.STRING,
    defaultValue: "",
  },
  specialNeeds: {
    type: DataTypes.STRING,
    defaultValue: "",
  },
  governmentSupport: {
    type: DataTypes.STRING,
    defaultValue: "",
  },
  NGOSupport: {
    type: DataTypes.STRING,
    defaultValue: "",
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: "pendente",
  },
},{
  timestamps: true
});

module.exports = User;