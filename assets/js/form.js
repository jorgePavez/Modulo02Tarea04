let boton = document.getElementById('botton');
boton.addEventListener('click', function(event) {
    event.preventDefault();
    let nombre = document.getElementById('nombre');
    let asunto = document.getElementById('asunto');
    let mensaje = document.getElementById('mensaje');
    let regex = /^[a-zA-Z]+$/gm;
    let regexMensaje = /^[a-zA-Z\s]+$/gm;


    let validaNombre = regex.test(nombre.value)
    if (validaNombre = true) {
        console.log('no cumple')
    } else {
        console.log('cumple')
    };

    let validaAsunto = regex.test(asunto.value)
    if (validaAsunto = true) {
        console.log('no cumple')
    } else {
        console.log('cumple')
    };
    console.log(regex.test(asunto.value));
    let validaMensaje = regexMensaje.test(mensaje.value)
    if (validaApellido = true) {
        console.log('no cumple')
    } else {
        console.log('cumple')
    };

})




/* console.log(nombre);
console.log(asunto);
console.log(mensaje); */