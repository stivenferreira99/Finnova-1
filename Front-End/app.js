const nombre = document.getElementById("name")
const email = document.getElementById("email")
const forms = document.getElementById("forms")
const parrafo = document.getElementById("warningg")



forms.addEventListener("submit", e => {
    e.preventDefault();
    let warnings = "";
    let entrar = false;
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    if (nombre.value.length < 6) {
        warnings += 'El nombre no es válido <br>';
        entrar = true;
    }
    if (!regexEmail.test(email.value)) {
        warnings += 'El Email no es válido <br>';
        entrar = true;
    }

    if (entrar) {
        parrafo.innerHTML = warnings;
    } else {
        // Simulación de envío exitoso del correo
        mostrarMensaje("¡Correo enviado!");
    }
});

function mostrarMensaje(mensaje) {
    // Crear un elemento de mensaje
    const mensajeElemento = document.createElement("div");
    mensajeElemento.textContent = mensaje;
    mensajeElemento.classList.add("mensaje-enviado");

    // Agregar el mensaje al DOM
    forms.appendChild(mensajeElemento);

    // Eliminar el mensaje después de 3 segundos
    setTimeout(() => {
        mensajeElemento.remove();
    }, 3000);
}











/*
forms.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    if(nombre.value.length <6){
        warnings += 'El nombre no es Valido <br>'
        entrar = true  
    }
    if(!regexEmail.test(email.value)){
        warnings += 'El Email no es Valido <br>'
        entrar = true     
    }

    if(entrar){
        parrafo.innerHTML = warnings
    } else {
        // Envío del formulario
        enviarCorreo(nombre.value, email.value);
    }
})

function enviarCorreo(nombre, correo) {
    // Aquí deberías hacer una llamada a una API de correo electrónico como SendGrid
    // para enviar el correo electrónico con los datos del formulario
    // Por ejemplo:
    // fetch('URL_DE_LA_API_DE_CORREO', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'Authorization': 'Bearer TU_API_KEY'
    //     },
    //     body: JSON.stringify({
    //         nombre: nombre,
    //         correo: correo
    //     })
    // })
    // .then(response => {
    //     if (response.ok) {
    //         // El correo se envió correctamente
    //         console.log('Correo enviado correctamente');
    //         mostrarMensaje("¡Correo enviado!");
    //     } else {
    //         // Hubo un error al enviar el correo
    //         console.error('Error al enviar el correo');
    //     }
    // })
    // .catch(error => {
    //     console.error('Error de red:', error);
    // });

    // Simulación de envío exitoso del correo
    setTimeout(() => {
        mostrarMensaje("¡Correo enviado!");
    }, 2000); // Esto simula un retraso de 2 segundos antes de mostrar el mensaje
}

function mostrarMensaje(mensaje) {
    // Crear un elemento de mensaje
    const mensajeElemento = document.createElement("div");
    mensajeElemento.textContent = mensaje;
    mensajeElemento.classList.add("mensaje-enviado");

    // Agregar el mensaje al DOM
    forms.appendChild(mensajeElemento);

    // Eliminar el mensaje después de 3 segundos
    setTimeout(() => {
        mensajeElemento.remove();
    }, 3000);
}
*/