import React, { useState } from 'react';
import './Login.css';

const Login = ({ onLoginSuccess, onSwitchToRegister }) => {
    // Estados para capturar las credenciales ingresadas por el usuario
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    // Estados para el manejo de alertas de validación y mensajes de éxito
    const [error, setError] = useState('');
    const [mensajeExito, setMensajeExito] = useState('');

    // Manejador del envío del formulario hacia el backend
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setMensajeExito('');

        // Validación básica del formato de correo electrónico requerido por la interfaz
        if (!email.includes('@')) {
            setError('Por favor, introduce una dirección de correo electrónico válida (ejemplo: usuario@correo.com)');
            return;
        }

        try {
            const respuesta = await fetch('https://petsbook-xrtr.onrender.com/api/auth/login', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
});
            
            const datos = await respuesta.json();

            if (!respuesta.ok) {
                // Captura el mensaje de error definido en el controlador del backend
                setError(datos.mensaje || 'Datos de inicio de sesión incorrectos');
                return;
            }

            // Almacenamiento del token o datos de sesión si la respuesta es correcta
            setMensajeExito('Sesión iniciada correctamente');
            
            // Simulación de transición al feed después de un inicio exitoso
            setTimeout(() => {
                onLoginSuccess(datos.usuario);
            }, 1500);

        } catch (err) {
            setError('Error de conexión con el servidor. Inténtelo más tarde.');
        }
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <h1 className="login-logo">Petsbook</h1>
                <h2 className="login-welcome">¡Bienvenido a Petsbook!</h2>
                <p className="login-subtitle">Inicia sesión para unirte a nuestra comunidad de amantes de las mascotas</p>

                <form onSubmit={handleSubmit} className="login-form">
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Correo electrónico o Nombre de usuario"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type="password"
                            placeholder="Contraseña"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    {/* Renderizado condicional de los mensajes de error según el prototipo */}
                    {error && <div className="alert-error">{error}</div>}
                    
                    {/* Renderizado condicional de la alerta verde de éxito */}
                    {mensajeExito && <div className="alert-success">{mensajeExito}</div>}

                    <button type="submit" className="btn-login">Iniciar Sesión</button>
                </form>

                <div className="login-links">
                    <a href="#olvido" className="link-forgot">¿Olvidaste tu contraseña?</a>
                    <p className="register-prompt">
                        ¿No tienes una cuenta? <span onClick={onSwitchToRegister} className="link-register">Registrarse</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;