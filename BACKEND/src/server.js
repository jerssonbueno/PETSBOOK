const express = require('express');
const cors = require('cors'); 
const { connectDB } = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const petRoutes = require('./routes/petRoutes');
const postRoutes = require('./routes/postRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();

// Middlewares globales
app.use(cors());
app.use(express.json());

// Registro de rutas en la aplicacion
app.use('/api/users', userRoutes);
app.use('/api/pets', petRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/auth', authRoutes);

connectDB();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor en funcionamiento en el puerto ${PORT}`);
}); 