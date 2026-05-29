package com.mycompany.petsbook_web.conexion;

import java.sql.Connection;
import java.sql.DriverManager;

/**
 * Clase Conexion: Gestiona el enlace entre la aplicación Java y la base de datos MySQL.
 * @author Jersson Bueno
 */
public class conexion {

    /**
     * Método estático para establecer la conexión con el servidor de base de datos.
     * @return Connection objeto de conexión activa.
     */
    public static Connection conectar() {
        Connection con = null;

        // Datos de configuración de tu base de datos local
        String url = "jdbc:mysql://localhost:3306/petsbook_java";
        String user = "root";
        String password = "Julitabravo1001*";

        try {
            // Carga el Driver de MySQL (necesario para que Java reconozca la base de datos)
            Class.forName("com.mysql.cj.jdbc.Driver");
            
            // Intenta realizar la conexión usando las credenciales
            con = DriverManager.getConnection(url, user, password);

            System.out.println("¡Éxito! Conexión establecida con la base de datos.");

        } catch (ClassNotFoundException e) {
            System.out.println("Error: No se encontró el Driver de MySQL. " + e.getMessage());
        } catch (Exception e) {
            System.out.println("Error de conexión: " + e.getMessage());
        }

        return con;
    }
}