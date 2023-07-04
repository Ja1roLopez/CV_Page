// Obtener los botones de la navbar
const navbarButtons = document.querySelectorAll('.navbar a');

// Función para resaltar el botón activo
function resaltarBotonActivo() {
  // Obtener la posición vertical actual de la ventana
  const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  // Iterar sobre los botones de la navbar
  navbarButtons.forEach((button) => {
    const targetSectionId = button.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetSectionId);

    // Verificar si la sección está visible en la ventana
    if (targetSection.offsetTop <= scrollPosition && targetSection.offsetTop + targetSection.offsetHeight > scrollPosition) {
      // Remover la clase activa de todos los botones
      navbarButtons.forEach((btn) => btn.classList.remove('active'));

      // Agregar la clase activa al botón correspondiente
      button.classList.add('active');
    }
  });
}

// Escuchar el evento scroll
window.addEventListener('scroll', resaltarBotonActivo);

// Smooth scroll al hacer clic en los botones de la navbar
navbarButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    event.preventDefault(); // Evitar el comportamiento de desplazamiento predeterminado

    const targetSectionId = button.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetSectionId);

    // Calcular la posición de desplazamiento objetivo
    const targetOffset = targetSection.offsetTop;

    // Animar el desplazamiento suave
    window.scrollTo({
      top: targetOffset,
      behavior: 'smooth'
    });
  });
});
document.getElementById('circle-button').addEventListener('click', function(event) {
    event.preventDefault(); // Evita el comportamiento predeterminado del enlace
  
    // Obtiene la sección de perfil
    var perfilSection = document.getElementById('perfil');
  
    // Realiza el desplazamiento suave hacia la sección de perfil
    perfilSection.scrollIntoView({
      behavior: 'smooth'
    });
  });

  //Envio de datos de Formulario
function mostrarToast(){
  M.toast({html:'Enviado correctamente'});
}
function saveContact(event) {
  event.preventDefault(); // Previene el comportamiento predeterminado de envío del formulario

  let nameContact = document.getElementById("name");
  let emailContact = document.getElementById("email")
  let subjectContact = document.getElementById("subject")
  let messageContact = document.getElementById("message")

  let contact = {
    name: nameContact.value,
    email: emailContact.value,
    subject: subjectContact.value,
    message: messageContact.value,
  }
  console.log(contact)

  let url = "http://127.0.0.1:8000/api/formulario-contacto";

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(contact),
  }).then(response => {
    if (response.ok) {
      mostrarToast();
    console.log(response);
    }
  });
}

// Obtén el formulario por su ID o cualquier otro selector
const form = document.getElementById('my-form');

// Agrega un controlador de eventos para el evento "submit" del formulario
form.addEventListener('submit', saveContact);
