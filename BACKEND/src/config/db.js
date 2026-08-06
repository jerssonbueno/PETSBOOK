const { Sequelize } = require('sequelize');
require('dotenv').config();

// Inicialización de la instancia de conexión con las variables de entorno
const sequelize = new Sequelize(
    process.env.DB_NAME, 
    process.env.DB_USER, 
    process.env.DB_PASS, 
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT || 4000,
        dialect: 'mysql',
        logging: false,
        dialectOptions: {
            ssl: {
                rejectUnauthorized: true
            }
        }
    }
);

// Función principal para conectar y sincronizar el sistema
const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('¡Conectado a TiDB Cloud / MySQL con éxito!');

        // Importamos los modelos justo en el momento de la sincronización para evitar dependencias circulares
        const User = require('../models/user');
        const Pet = require('../models/pet');
        const Post = require('../models/post');

        // Configuración de llaves foráneas y relaciones entre los componentes
        User.hasMany(Pet, { foreignKey: 'userId' });
        Pet.belongsTo(User, { foreignKey: 'userId' });

        User.hasMany(Post, { foreignKey: 'userId' });
        Post.belongsTo(User, { foreignKey: 'userId' });

        // Sincronización de las tablas en la base de datos (force: false para evitar errores de ALTER TABLE en TiDB)
        await sequelize.sync({ force: false });
        console.log('Tablas y relaciones sincronizadas correctamente');

    } catch (error) {
        console.error('Error al conectar o sincronizar la base de datos:', error);
    }
};

module.exports = { sequelize, connectDB };