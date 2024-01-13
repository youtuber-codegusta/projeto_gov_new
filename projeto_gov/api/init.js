const User = require("./models/user");
const sequelize = require("./config/db");
const bcryptjs = require("bcryptjs");

const initializeApp = async () => {
    try {
        await sequelize.sync({ force: true });
        // Verifique se o usuário padrão já existe
        const existingUser = await User.findOne({ where: { email: 'admin@example.com' } });
  
        if (!existingUser) {
            // Crie o usuário padrão se não existir
            const hashedPassword = await bcryptjs.hash('Infinity2024@', 10);
            try {await User.create({
                name: 'Admin',
                email: 'administrador@gov.com',
                password: hashedPassword,
                age: "20",
                rg:  "000.000.000.00",
                "type": "admin"
                // outros campos necessários
            });
        }catch (error) {
            console.log("Usuario criado com sucesso")
        }
            
            
            console.log('Usuário padrão criado com sucesso.');
        } else {
            console.log('Usuário padrão já existe.');
        }
    } catch (error) {
        console.error('Erro durante a inicialização:', error);
    }
  };
  initializeApp();