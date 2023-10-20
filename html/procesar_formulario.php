<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST["nombre"];
    $email = $_POST["email"];
    $telefono = $_POST["telefono"];
    $asunto = $_POST["asunto"];
    $mensaje = $_POST["mensaje"];

    // Configurar el correo electrónico
    $destinatario = "admin@irina-ichim.com";
    $asuntoCorreo = "Nuevo mensaje de contacto desde el sitio web";
    $mensajeCorreo = "Nombre: $nombre\n";
    $mensajeCorreo .= "Email: $email\n";
    $mensajeCorreo .= "Teléfono: $telefono\n";
    $mensajeCorreo .= "Asunto: $asunto\n";
    $mensajeCorreo .= "Mensaje:\n$mensaje";

    // Enviar el correo electrónico
    mail($destinatario, $asuntoCorreo, $mensajeCorreo);

    // Redirigir de vuelta al formulario con un mensaje de éxito
    header("Location: index.html?enviado=1");
} else {
    // Si no se accede mediante POST, redirigir a la página de inicio
    header("Location: index.html");
}
?>


