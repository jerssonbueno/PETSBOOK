import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Muro = ({ usuarioLogueado }) => {
    // Definición de estados lógicos para el almacenamiento de publicaciones y texto del nuevo post
    const [posts, setPosts] = useState([]);
    const [nuevoPost, setNuevoPost] = useState("");

    // Efecto inicial para cargar las publicaciones del backend apenas se monte el componente
    useEffect(() => {
        obtenerPosts();
    }, []);

    // Función asíncrona para consultar el listado cronológico de posts en la API del servidor
    const obtenerPosts = async () => {
        try {
            const res = await axios.get('http://localhost:3000/api/posts');
            setPosts(res.data);
        } catch (err) {
            console.error("Error al traer el muro", err);
        }
    };

    // Controlador para gestionar el envío del formulario y registrar una nueva publicación
    const publicar = async (e) => {
        e.preventDefault();
        if (!nuevoPost.trim()) return;

        try {
            // Envío de datos al backend en inglés respetando la clave foránea de la relación con User
            await axios.post('http://localhost:3000/api/posts', {
                contenido: nuevoPost,
                userId: usuarioLogueado?.id // Mapea directamente el ID del usuario con sesión activa
            });
            setNuevoPost(""); // Limpieza del cuadro de texto tras completarse el registro en el servidor
            obtenerPosts();   // Llamado de actualización automática para refrescar el feed de inmediato
        } catch (err) {
            console.error("Error al publicar", err);
        }
    };

    return (
        <div className="glass-card" style={{ padding: '20px', borderRadius: '12px', background: '#fff', border: '1px solid #e0dbd5' }}>
            <h3 style={{ color: '#333', marginBottom: '15px' }}>Muro de Mascotas 🐾</h3>
            
            {/* Formulario adaptado al diseño de red social del prototipo */}
            <form onSubmit={publicar} style={{ marginBottom: '20px' }}>
                <textarea
                    placeholder={`¿Qué está haciendo tu mascota hoy, ${usuarioLogueado?.nombre || 'Usuario'}?`}
                    value={nuevoPost}
                    onChange={(e) => setNuevoPost(e.target.value)}
                    style={{
                        width: '100%',
                        padding: '12px',
                        borderRadius: '10px',
                        border: '1px solid #dddfe2',
                        fontFamily: 'inherit',
                        resize: 'none',
                        boxSizing: 'border-box'
                    }}
                    rows="3"
                />
                <button 
                    type="submit" 
                    style={{
                        marginTop: '10px',
                        backgroundColor: '#ff6f00',
                        color: '#fff',
                        border: 'none',
                        padding: '8px 20px',
                        borderRadius: '20px',
                        fontWeight: 'bold',
                        cursor: 'pointer'
                    }}
                >
                    Publicar
                </button>
            </form>

            <hr style={{ border: '0', borderTop: '1px solid #f0f2f5', margin: '20px 0' }} />

            {/* Mapeo de publicaciones recuperadas dinámicamente de la base de datos */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                {posts.map(post => (
                    <div key={post.id} className="profile-card" style={{ backgroundColor: '#fff', border: '1px solid #eee', padding: '15px', borderRadius: '8px', display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                        
                        {/* Avatar autogenerado dinámicamente con la inicial del autor del post */}
                        <div className="avatar" style={{ 
                            backgroundColor: '#ff6f00', 
                            width: '40px', 
                            height: '40px', 
                            borderRadius: '50%', 
                            display: 'flex', 
                            justifyContent: 'center', 
                            alignItems: 'center', 
                            color: '#fff', 
                            fontWeight: 'bold',
                            flexShrink: 0
                        }}>
                            {post.User?.nombre?.charAt(0).toUpperCase() || 'U'}
                        </div>
                        
                        <div style={{ flex: 1 }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <div>
                                    <strong style={{ color: '#333' }}>{post.User?.nombre || 'Usuario'} {post.User?.apellido || ''}</strong>
                                    <span style={{ 
                                        marginLeft: '10px', 
                                        fontSize: '0.75rem', 
                                        backgroundColor: '#f5f0eb', 
                                        color: '#666666', 
                                        padding: '2px 8px', 
                                        borderRadius: '12px',
                                        textTransform: 'capitalize'
                                    }}>
                                        {post.User?.rol || 'Usuario'}
                                    </span>
                                </div>
                                <small style={{ color: '#95a5a6' }}>
                                    {new Date(post.createdAt).toLocaleDateString()}
                                </small>
                            </div>
                            <p style={{ margin: '8px 0 0', color: '#444', lineHeight: '1.4', whiteSpace: 'pre-wrap' }}>
                                {post.contenido}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Muro;