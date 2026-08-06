const User = require('../models/user');

// Verificación de credenciales para el inicio de sesión
const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const usuario = await User.findOne({ where: { email } });

        if (!usuario || usuario.password !== password) {
            return res.status(401).json({ 
                mensaje: 'Datos de inicio de sesión incorrectos' 
            });
        }

        res.status(200).json({ 
            mensaje: 'Sesión iniciada correctamente',
            usuario: {
                id: usuario.id,
                nombre: usuario.nombre,
                email: usuario.email,
                rol: usuario.rol
            }
        });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error en el servidor al iniciar sesión', error: error.message });
    }
};

// Creación de nuevas cuentas de usuario con los tipos de documentos y nuevos roles del sistema
const registrar = async (req, res) => {
    try {
        const { nombre, apellido, tipoDocumento, numeroDocumento, email, password, rol } = req.body;

        // Comprobación para evitar la duplicación de correos electrónicos o números de documento de identidad
        const existeEmail = await User.findOne({ where: { email } });
        const existeDocumento = await User.findOne({ where: { numeroDocumento } });

        if (existeEmail) {
            return res.status(400).json({ mensaje: 'El correo electrónico ya se encuentra registrado' });
        }
        if (existeDocumento) {
            return res.status(400).json({ mensaje: 'El número de documento ya se encuentra registrado' });
        }

        // Almacenamiento del registro con los campos extendidos y el rol seleccionado en el formulario
        const nuevoUsuario = await User.create({
            nombre,
            apellido,
            tipoDocumento,
            numeroDocumento,
            email,
            password,
            rol: rol || 'usuario'
        });

        res.status(201).json({ 
            mensaje: 'Usuario registrado con éxito', 
            usuario: { id: nuevoUsuario.id, nombre: nuevoUsuario.nombre } 
        });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error en el servidor al registrar usuario', error: error.message });
    }
};

module.exports = {
    login,
    registrar
}; 