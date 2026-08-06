const Post = require('../models/post');
const User = require('../models/user');

// Obtener todas las publicaciones para mostrarlas en el muro
const obtenerPosts = async (req, res) => {
    try {
        const posts = await Post.findAll({
            include: [{
                model: User,
                attributes: ['nombre', 'apellido'] // Traemos el nombre del creador
            }],
            order: [['createdAt', 'DESC']] // Las mas recientes primero
        });
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener las publicaciones', error: error.message });
    }
};

// Crear una nueva publicacion en el muro
const crearPost = async (req, res) => {
    try {
        const { contenido, userId } = req.body;

        if (!contenido) {
            return res.status(400).json({ mensaje: 'El contenido no puede estar vacio' });
        }

        const nuevoPost = await Post.create({
            contenido,
            userId
        });

        res.status(201).json({ mensaje: 'Publicacion creada con exito', nuevoPost });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al crear la publicacion', error: error.message });
    }
};

module.exports = {
    obtenerPosts,
    crearPost
};