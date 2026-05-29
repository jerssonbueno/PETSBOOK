package com.mycompany.petsbook.modelo;

public class Mascota {

    private int id;
    private String nombre;
    private String tipo;
    private int edad;

    public Mascota() {}

    public Mascota(String nombre, String tipo, int edad) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.edad = edad;
    }

    // Getters y Setters
    public int getId() { return id; }
    public void setId(int id) { this.id = id; }

    public String getNombre() { return nombre; }
    public void setNombre(String nombre) { this.nombre = nombre; }

    public String getTipo() { return tipo; }
    public void setTipo(String tipo) { this.tipo = tipo; }

    public int getEdad() { return edad; }
    public void setEdad(int edad) { this.edad = edad; }
}