package com.mycompany.petsbook.conexion;

import java.sql.Connection;
import java.sql.DriverManager;

public class ConexionBD {

    private static final String URL = "jdbc:mysql://localhost:3306/petsbook_java";
    private static final String USER = "root";
    private static final String PASSWORD = "Julitabravo1001*";

    public static Connection conectar() {
        Connection conexion = null;

        try {
            conexion = DriverManager.getConnection(URL, USER, PASSWORD);
            System.out.println("Conexión exitosa");
        } catch (Exception e) {
            System.out.println("Error de conexión: " + e.getMessage());
        }

        return conexion;
    }
}