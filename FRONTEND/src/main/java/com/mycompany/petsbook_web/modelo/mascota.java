package com.mycompany.petsbook_web.modelo;

/**
 * Clase mascota: Representa la entidad Mascota del sistema.
 * @author Jersson Bueno
 */
public class mascota {
    private int id;
    private String nombre;
    private int edad;
    private String tipo;

    /**
     * Constructor vacío (necesario por estándar)
     */
    public mascota() {
    }

    /**
     * Constructor con 3 parámetros (se usa para crear mascotas nuevas, sin ID aún)
     */
    public mascota(String nombre, int edad, String tipo) {
        this.nombre = nombre;
        this.edad = edad;
        this.tipo = tipo;
    }

    /**
     * Constructor con 4 parámetros (se usa para EDITAR y ELIMINAR, donde ya tenemos un ID)
     * ESTE ES EL QUE TE ESTÁ PIDIENDO EL ERROR DE COMPILACIÓN.
     */
    public mascota(int id, String nombre, int edad, String tipo) {
        this.id = id;
        this.nombre = nombre;
        this.edad = edad;
        this.tipo = tipo;
    }

    // --- Métodos Getter y Setter (Estándares de Codificación) ---

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public int getEdad() {
        return edad;
    }

    public void setEdad(int edad) {
        this.edad = edad;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }
}