import React, { useState } from 'react';
import Login from './components/Login';
import Registro from './components/Registro';
import Muro from './components/Muro';
import Sugerencias from './components/Sugerencias'; 
import './App.css';

const App = () => {
    // Estado para controlar qué pantalla se visualiza ('login', 'registro', 'feed')
    const [pantallaActual, setPantallaActual] = useState('login');
    
    // Estado para almacenar la información del usuario autenticado en la sesión
    const [usuarioLogueado, setUsuarioLogueado] = useState(null);

    // Manejador para el inicio de sesión exitoso
    const manejarLoginExitoso = (datosUsuario) => {
        setUsuarioLogueado(datosUsuario);
        setPantallaActual('feed'); // Redirección directa al feed de la red social
    };

    // Manejador tras completar el registro de forma correcta
    const manejarRegistroExitoso = () => {
        setPantallaActual('login'); // Retorno automático al login para ingresar credenciales
    };

    // Cierre de sesión y limpieza de estados correspondientes
    const manejarCerrarSesion = () => {
        setUsuarioLogueado(null);
        setPantallaActual('login');
    };

    return (
        <div className="app-main-container">
            {/* Control de renderizado condicional según el estado de la navegación */}
            {pantallaActual === 'login' && (
                <Login 
                    onLoginSuccess={manejarLoginExitoso} 
                    onSwitchToRegister={() => setPantallaActual('registro')} 
                />
            )}

            {pantallaActual === 'registro' && (
                <Registro 
                    onRegisterSuccess={manejarRegistroExitoso} 
                    onSwitchToLogin={() => setPantallaActual('login')} 
                />
            )}

            {pantallaActual === 'feed' && (
                <div className="feed-layout">
                    {/* Barra de navegación superior */}
                    <header className="feed-header">
                        <div className="header-content">
                            <h1 className="logo-brand">Petsbook</h1>
                            <div className="user-nav-info">
                                <span>Bienvenido, <strong>{usuarioLogueado?.nombre}</strong></span>
                                <button onClick={manejarCerrarSesion} className="btn-logout">Cerrar Sesión</button>
                            </div>
                        </div>
                    </header>

                    {/* Estructura tricolumna diseñada para el centrado del muro */}
                    <div className="main-content-grid">
                        {/* Columna Izquierda: Información de Perfil / Accesos */}
                        <aside className="column-side side-left">
                            <div className="panel-card">
                                <h3>Mi Perfil</h3>
                                <p>Rol: {usuarioLogueado?.rol || 'Dueño de mascota'}</p>
                            </div>
                        </aside>

                        {/* Columna Central: Vinculación del Muro Dinámico del Proyecto */}
                        <main className="column-center">
                            <Muro usuarioLogueado={usuarioLogueado} />
                        </main>

                        {/* Columna Derecha: Comunidad / Recomendaciones Dinámicas */}
                        <aside className="column-side side-right">
                            <Sugerencias />
                        </aside>
                    </div>
                </div>
            )}
        </div>
    );
};

export default App;