package com.mycompany.petsbook_web.servlet;

import java.io.IOException;
import java.util.List;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.*;
import com.mycompany.petsbook_web.dao.mascotaDAO;
import com.mycompany.petsbook_web.modelo.mascota;

/**
 * Clase MascotaServlet: Es el controlador principal del módulo.
 * Se encarga de recibir las órdenes del usuario y comunicarse con el DAO.
 * @author Jersson Bueno
 */
@WebServlet("/MascotaServlet")
public class mascotaServlet extends HttpServlet {

    private mascotaDAO dao = new mascotaDAO();

    /**
     * Método doPost: Recibe la información de los formularios (Guardar y Editar).
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        // Recibimos los datos que el usuario escribió en las cajas de texto
        String idParam = request.getParameter("id");
        String nombre = request.getParameter("nombre");
        String edadStr = request.getParameter("edad");
        String tipo = request.getParameter("tipo");

        // VALIDACIÓN: Verificamos que la edad sea un número válido y mayor a cero
        if (edadStr == null || edadStr.isEmpty() || Integer.parseInt(edadStr) <= 0) {
            request.setAttribute("error", "La edad debe ser mayor a 0");
            // Si hay error, nos regresamos al formulario inicial (index.jsp)
            request.getRequestDispatcher("index.jsp").forward(request, response);
            return; 
        }

        int edad = Integer.parseInt(edadStr);

        // Lógica para decidir si creamos una nueva mascota o actualizamos una existente
        if (idParam != null && !idParam.isEmpty()) {
            // Caso: ACTUALIZAR registro
            int id = Integer.parseInt(idParam);
            mascota m = new mascota(id, nombre, edad, tipo);
            dao.actualizar(m);
            request.setAttribute("mensaje", "Mascota actualizada correctamente");
        } else {
            // Caso: GUARDAR nuevo registro
            mascota m = new mascota(nombre, edad, tipo);
            dao.guardar(m);
            request.setAttribute("mensaje", "Mascota guardada correctamente");
        }

        // Al terminar, llamamos al doGet para mostrar la lista actualizada
        doGet(request, response);
    }

    /**
     * Método doGet: Maneja las acciones de navegación (Listar, Editar y Eliminar).
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        String accion = request.getParameter("accion");

        // Acción para cargar los datos en el formulario de edición
        if (accion != null && accion.equals("editar")) {
            int id = Integer.parseInt(request.getParameter("id"));
            mascota m = dao.buscarPorId(id);
            request.setAttribute("mascota", m);
            request.getRequestDispatcher("editar.jsp").forward(request, response);
        } 
        // ACCIÓN NUEVA: Eliminar una mascota de la base de datos
        else if (accion != null && accion.equals("eliminar")) {
            int id = Integer.parseInt(request.getParameter("id"));
            dao.eliminar(id); // Llamamos al método eliminar del DAO
            request.setAttribute("mensaje", "Mascota eliminada correctamente");
            // Redirigimos a la lista para ver los cambios
            response.sendRedirect("MascotaServlet");
        } 
        // Acción por defecto: Mostrar la lista de todas las mascotas
        else {
            List<mascota> lista = dao.listar();
            request.setAttribute("datos", lista);
            request.getRequestDispatcher("listar.jsp").forward(request, response);
        }
    }
}