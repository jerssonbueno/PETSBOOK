import React, { useState } from 'react';
import axios from 'axios';
import './Registro.css';

const Registro = ({ onRegisterSuccess, onSwitchToLogin }) => {
    // Estado estructurado para capturar los campos de inscripción
    const [datos, setDatos] = useState({
        nombre: '',
        apellido: '',
        tipoDocumento: 'CC',
        numeroDocumento: '', 
        email: '',
        password: '',
        rol: 'usuario'
    });

    // Estados para el control y despliegue de notificaciones internas en la tarjeta
    const [error, setError] = useState('');
    const [mensajeExito, setMensajeExito] = useState('');

    // Actualiza las propiedades específicas del estado según el input que detecta escritura
    const manejarCambio = (e) => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        });
    };

    // Gestiona el envío de la información hacia el endpoint de autenticación del backend
    const manejarEnvio = async (e) => {
        e.preventDefault();
        setError('');
        setMensajeExito('');

        // Validación del formato básico de correo electrónico requerido por la interfaz
        if (!datos.email.includes('@')) {
            setError('Por favor, introduce una dirección de correo electrónico válida (ejemplo: usuario@correo.com)');
            return;
        }

        try {
            // Petición asíncrona mediante axios hacia la ruta de autenticación organizada
            await axios.post('https://petsbook-xrtr.onrender.com/api/auth/register', datos);
            
            // Confirmación operativa y actualización de alertas de éxito en la vista
            setMensajeExito('Usuario registrado con éxito');

            // Retraso controlado para realizar la transición automática de pantalla
            setTimeout(() => {
                onRegisterSuccess();
            }, 1500);

        } catch (err) {
            console.error('Error al registrar:', err);
            // Captura de mensajes personalizados definidos en el controlador del servidor o caída general
            if (err.response && err.response.data && err.response.data.mensaje) {
                setError(err.response.data.mensaje);
            } else {
                setError('Error al conectar con el servidor. Inténtelo más tarde.');
            }
        }
    };

    return (
        <div className="registro-container">
            <div className="registro-card">
                <h1 className="registro-logo">Petsbook</h1>
                <h2 className="registro-welcome">¡Únete a Petsbook!</h2>
                <p className="registro-subtitle">Crea tu cuenta y sé parte de la comunidad de amantes de las mascotas</p>

                <form onSubmit={manejarEnvio} className="registro-form">
                    <div className="form-group-row">
                        <div className="form-group">
                            <input
                                name="nombre"
                                type="text"
                                placeholder="Nombre"
                                value={datos.nombre}
                                onChange={manejarCambio}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                name="apellido"
                                type="text"
                                placeholder="Apellido"
                                value={datos.apellido}
                                onChange={manejarCambio}
                                required
                            />
                        </div>
                    </div>

                    {/* Fila paralela para Tipo y Número de Documento */}
                    <div className="form-group-row">
                        <div className="form-group" style={{ flex: '0 0 110px' }}>
                            <select 
                                name="tipoDocumento" 
                                value={datos.tipoDocumento} 
                                onChange={manejarCambio} 
                                className="select-rol"
                            >
                                <option value="CC">C.C.</option>
                                <option value="TI">T.I.</option>
                            </select>
                        </div>
                        <div className="form-group" style={{ flex: 1 }}>
                            <input
                                name="numeroDocumento"
                                type="text"
                                placeholder="Número de documento"
                                value={datos.numeroDocumento}
                                onChange={manejarCambio}
                                required
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <input
                            name="email"
                            type="email"
                            placeholder="Correo electrónico"
                            value={datos.email}
                            onChange={manejarCambio}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <input
                            name="password"
                            type="password"
                            placeholder="Crear contraseña"
                            value={datos.password}
                            onChange={manejarCambio}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <select name="rol" value={datos.rol} onChange={manejarCambio} className="select-rol">
                            <option value="usuario">Dueño de Mascota</option>
                            <option value="entrenador">Entrenador profesional</option>
                            <option value="veterinario">Médico Veterinario</option>
                            <option value="petshop">Tienda de mascotas (PetShop)</option>
                            <option value="administrador">Administrador del sistema</option>
                        </select>
                    </div>

                    {/* Renderizado condicional de alertas operativas basado en el prototipo */}
                    {error && <div className="alert-error">{error}</div>}
                    {mensajeExito && <div className="alert-success">{mensajeExito}</div>}

                    <button type="submit" className="btn-registro">Registrarse</button>
                </form>

                <div className="registro-links">
                    <p className="login-prompt">
                        ¿Ya tienes una cuenta? <span onClick={onSwitchToLogin} className="link-login-btn">Iniciar Sesión</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Registro;