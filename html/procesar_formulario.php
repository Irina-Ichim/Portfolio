<?php
error_reporting(E_ALL);
ini_set('display_errors', '1');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST["nombre"];
    $email = $_POST["email"];
    $telefono = $_POST["telefono"];
    $asunto = $_POST["asunto"];
    $mensaje = $_POST["mensaje"];
    
    $destino = $_POST["destino"] ?? "correo@example.com";

    $mensajeCorreo = "Nombre: $nombre\n";
    $mensajeCorreo .= "Email: $email\n";
    $mensajeCorreo .= "Teléfono: $telefono\n";
    $mensajeCorreo .= "Asunto: $asunto\n";
    $mensajeCorreo .= "Mensaje:\n$mensaje";

    $asuntoCorreo = "Nuevo mensaje del formulario";

    $enviado = mail($destino, $asuntoCorreo, $mensajeCorreo);

    if ($enviado) {
        echo "Mensaje enviado correctamente";
    } else {
        echo "Error al enviar el correo: " . error_get_last()['message'];
    }
} else {
    echo "Acceso no autorizado";
}
?>

