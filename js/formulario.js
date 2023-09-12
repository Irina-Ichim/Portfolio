function validarFormulario() {
    // Obtener los valores de los campos
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var telefono = document.getElementById("telefono").value;
    var asunto = document.getElementById("asunto").value;
    var mensaje = document.getElementById("mensaje").value;

    // Verificar si el mensaje tiene al menos 10 palabras
    var palabras = mensaje.split(" ");
    if (palabras.length < 10) {
        // Mostrar el mensaje de error para el campo de mensaje
        document.getElementById("mensaje-error").innerHTML = "El mensaje debe tener al menos 10 palabras.";

        // Devolver false para detener el envío del formulario
        return false;
    }

    // Si todas las validaciones pasan, se puede enviar el formulario
    return true;
}

// Limpiar el mensaje de error para el campo de mensaje cuando se cambia el valor del campo
document.getElementById("mensaje").addEventListener("input", function() {
    document.getElementById("mensaje-error").innerHTML = "";
});






  
   
  

  










  