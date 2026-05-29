const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

// Definición de la tabla de usuarios con sus atributos principales y validaciones de identidad
const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    apellido: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tipoDocumento: {
        type: DataTypes.ENUM('CC', 'TI'),
        allowNull: false,
        defaultValue: 'CC'
    },
    numeroDocumento: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    rol: {
        type: DataTypes.ENUM('administrador', 'usuario', 'entrenador', 'veterinario', 'petshop'),
        defaultValue: 'usuario'
    }
}, {
    timestamps: true // Crea automáticamente columnas de fecha de creación y actualización
});

module.exports = User;