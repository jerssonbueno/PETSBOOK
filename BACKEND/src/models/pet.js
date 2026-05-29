const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');
const User = require('./User'); // Importamos al dueño

const Pet = sequelize.define('Pet', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    especie: {
        type: DataTypes.STRING, // Ejemplo: Perro, Gato, Ave
        allowNull: false
    },
    raza: {
        type: DataTypes.STRING,
        allowNull: true
    },
    edad: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    // Aqui conectamos la mascota con el ID de un usuario
    userId: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'id'
        }
    }
});

// Definimos que un Usuario tiene muchas Mascotas
User.hasMany(Pet, { foreignKey: 'userId' });
Pet.belongsTo(User, { foreignKey: 'userId' });

module.exports = Pet;