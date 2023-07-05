
const navbarButtons = document.querySelectorAll('.navbar a');


function resaltarBotonActivo() {
  
  const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  
  navbarButtons.forEach((button) => {
    const targetSectionId = button.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetSectionId);

    
    if (targetSection.offsetTop <= scrollPosition && targetSection.offsetTop + targetSection.offsetHeight > scrollPosition) {
      
      navbarButtons.forEach((btn) => btn.classList.remove('active'));

      
      button.classList.add('active');
    }
  });
}


window.addEventListener('scroll', resaltarBotonActivo);


navbarButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    event.preventDefault(); // Evitar el comportamiento de desplazamiento predeterminado

    const targetSectionId = button.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetSectionId);

    const targetOffset = targetSection.offsetTop;

    
    window.scrollTo({
      top: targetOffset,
      behavior: 'smooth'
    });
  });
});
document.getElementById('circle-button').addEventListener('click', function(event) {
    event.preventDefault(); 
  
    
    var perfilSection = document.getElementById('perfil');
  
    
    perfilSection.scrollIntoView({
      behavior: 'smooth'
    });
  });

  //Envio de datos de Formulario
function mostrarToast(){
  M.toast({html:'Enviado correctamente'});
}
function saveContact(event) {
  event.preventDefault(); 

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


const form = document.getElementById('my-form');


form.addEventListener('submit', saveContact);
