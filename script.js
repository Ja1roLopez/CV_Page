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
  