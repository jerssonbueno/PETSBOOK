const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Post = sequelize.define('Post', {
    // El mensaje que escribe el usuario
    contenido: {
        type: DataTypes.TEXT,
        allowNull: false
    }
    // Sequelize añade automáticamente createdAt y updatedAt
});

module.exports = Post;