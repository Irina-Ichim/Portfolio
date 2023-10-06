function validarAsunto() {
  let inputAsunto = document.getElementById('asunto');
  let mensajeError = document.getElementById('mensaje-asunto-error');
  
  let palabras = inputAsunto.value.trim().split(/\s+/);
  let cantidadPalabras = palabras.length;

  if (cantidadPalabras > 30) {
      mensajeError.textContent = 'El asunto no debe exceder las 30 palabras.';
  } else {
      mensajeError.textContent = '';
  }
}

function validarTelefono() {
  let inputTelefono = document.getElementById('telefono');
  let mensajeError = document.getElementById('mensaje-telefono-error'); 

  if (!/^[0-9]{9,}$/.test(inputTelefono.value.trim())) {
      mensajeError.textContent = 'El teléfono debe tener al menos 9 números.';
  } else {
      mensajeError.textContent = '';
  }
}

function enviarFormulario() {
  let nombre = document.getElementById('nombre').value.trim();
  let email = document.getElementById('email').value.trim();
  let telefono = document.getElementById('telefono').value.trim();
  let asunto = document.getElementById('asunto').value.trim();

  if (nombre === '' || email === '' || telefono === '' || asunto === '') {
      mostrarAlerta('Por favor, completa todos los campos requeridos.');
      return;
  }

  let modal = document.getElementById('myModal');
  modal.style.display = 'block';

  document.getElementById('mensaje-confirmacion').style.display = 'block';
  document.getElementById('texto-confirmacion').style.display = 'block';

  cerrarAlerta();
}

function mostrarAlerta(mensaje) {
  let alerta = document.getElementById('custom-alert');
  let mensajeAlerta = document.getElementById('alert-message');

  mensajeAlerta.textContent = mensaje;
  alerta.style.display = 'block';
}

function cerrarAlerta() {
  let alerta = document.getElementById('custom-alert');
  alerta.style.display = 'none';
}

function cerrarModal() {
  let modal = document.getElementById('myModal');
  let alerta = document.getElementById('custom-alert');

  modal.style.display = 'none';
  alerta.style.display = 'none';
}

