<%@ page import="java.util.List" %>
<%@ page import="com.mycompany.petsbook_web.modelo.mascota" %>
<%@page contentType="text/html" pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Lista de Mascotas - PetsBook</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="container mt-5">

    <div class="d-flex justify-content-between align-items-center">
        <h2>Lista de Mascotas Registradas</h2>
        <a href="index.jsp" class="btn btn-primary">Registrar Nueva</a>
    </div>

    <%
        // Capturamos mensajes de éxito o error enviados desde el MascotaServlet
        String mensaje = (String) request.getAttribute("mensaje");
        if (mensaje != null) {
    %>
        <div class="alert alert-success alert-dismissible fade show mt-3" role="alert">
            <strong>Notificación:</strong> <%= mensaje %>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    <%
        }
    %>

    <table class="table table-hover table-bordered mt-4 text-center">
        <thead class="table-dark">
            <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Edad (Años)</th>
                <th>Tipo de Mascota</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody>
        <%
            // Obtenemos la lista que el Servlet preparó
            List<mascota> lista = (List<mascota>) request.getAttribute("datos");
            if (lista != null && !lista.isEmpty()) {
                for (mascota m : lista) {
        %>
            <tr>
                <td><%= m.getId() %></td>
                <td><%= m.getNombre() %></td>
                <td><%= m.getEdad() %></td>
                <td><%= m.getTipo() %></td>
                <td>
                    <a href="MascotaServlet?accion=editar&id=<%= m.getId() %>" 
                       class="btn btn-warning btn-sm">Editar</a>
                    
                    <a href="MascotaServlet?accion=eliminar&id=<%= m.getId() %>" 
                       class="btn btn-danger btn-sm" 
                       onclick="return confirm('¿Estás seguro de que deseas eliminar a esta mascota?');">
                       Eliminar
                    </a>
                </td>
            </tr>
        <%
                }
            } else {
        %>
            <tr>
                <td colspan="5">No hay mascotas registradas actualmente.</td>
            </tr>
        <%
            }
        %>
        </tbody>
    </table>

    <br>
    <a href="index.jsp" class="btn btn-secondary">Volver al Inicio</a>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>