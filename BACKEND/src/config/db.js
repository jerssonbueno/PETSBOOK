const { Sequelize } = require('sequelize');
require('dotenv').config();

// Inicialización de la instancia de conexión con las variables de entorno
const sequelize = new Sequelize(
    process.env.DB_NAME, 
    process.env.DB_USER, 
    process.env.DB_PASS, 
    {
        host: process.env.DB_HOST,
        dialect: 'mysql',
        logging: false 
    }
);

// Función principal para conectar y sincronizar el sistema
const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('¡Conectado a MySQL con éxito!');

        // Importamos los modelos justo en el momento de la sincronización para evitar dependencias circulares
        const User = require('../models/User');
        const Pet = require('../models/Pet');
        const Post = require('../models/Post');

        // Configuración de llaves foráneas y relaciones entre los componentes
        User.hasMany(Pet, { foreignKey: 'userId' });
        Pet.belongsTo(User, { foreignKey: 'userId' });

        User.hasMany(Post, { foreignKey: 'userId' });
        Post.belongsTo(User, { foreignKey: 'userId' });

        // Sincronización de las tablas en la base de datos aplicando los cambios de estructura
        await sequelize.sync({ alter: true });
        console.log('Tablas y relaciones sincronizadas correctamente');

    } catch (error) {
        console.error('Error al conectar o sincronizar la base de datos:', error);
    }
};

module.exports = { sequelize, connectDB };