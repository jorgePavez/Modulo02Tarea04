let boton = document.getElementById('botton');
boton.addEventListener('click', function(event) {
    event.preventDefault();
    let nombre = document.getElementById('nombre');
    let asunto = document.getElementById('asunto');
    let mensaje = document.getElementById('mensaje');

    //REGLAS PARA LAS DISTINTAS PARTES
    let regexNombre = /^[a-zA-Z]+$/gm;
    let regexAsunto = /^[a-zA-Z]+$/gm;
    let regexMensaje = /^[a-zA-Z\s]+$/gm; //EN ESTE CASO EL RESULTADO DE LA IMAGEN ACEPTA ESPACIO

    //ESTO ES PARA LIMPIAR LOS CAMPOS Y EJECUTAR EL BOTON VARIAS VECES
    document.getElementById("errorNombre").innerHTML = "";
    document.getElementById("errorAsunto").innerHTML = "";
    document.getElementById("errorMensaje").innerHTML = "";
    document.getElementById("exitoEnvio").innerHTML = "";

    //iniciar las variables en cero
    let numNombre = 0;
    let numAsunto = 0;
    let numMensaje = 0;

    //verifica si el texto está bien escrito
    let validaNombre = regexNombre.test(nombre.value)
        //según dicha verificación se realiza la consulta if
    if (validaNombre == true) {
        numNombre = 1;
    } else {
        document.getElementById("errorNombre").innerHTML = "Ingrese Nombre";
        // let numNombre = 0; también se podrían agregar aquí
    };

    let validaAsunto = regexAsunto.test(asunto.value)
    if (validaAsunto == true) {
        numAsunto = 1;
    } else {
        document.getElementById("errorAsunto").innerHTML = "Ingrese asunto";
    };

    let validaMensaje = regexMensaje.test(mensaje.value)
    if (validaMensaje == true) {
        numMensaje = 1;
    } else {
        document.getElementById("errorMensaje").innerHTML = "Ingrese menaje";
    };
    //en esta consulta se verifica que los 3 elementos cumplan para mostrar el mensaje de éxito
    if ((numNombre + numAsunto + numMensaje) == 3) {
        document.getElementById("exitoEnvio").innerHTML = "Mensaje enviado con éxito";
    };

});


//------------------ sin acortar las expresiones
/* let boton = document.getElementById('botton');
boton.addEventListener('click', function(event) {
    event.preventDefault();
    let nombre = document.getElementById('nombre');
    let asunto = document.getElementById('asunto');
    let mensaje = document.getElementById('mensaje');

    //REGLAS PARA LAS DISTINTAS PARTES
    let regexNombre = /^[a-zA-Z]+$/gm;
    let regexAsunto = /^[a-zA-Z]+$/gm;
    let regexMensaje = /^[a-zA-Z\s]+$/gm; //EN ESTE CASO EL RESULTADO DE LA IMAGEN ACEPTA ESPACIO

    //ESTO ES PARA LIMPIAR LOS CAMPOS Y EJECUTAR EL BOTON VARIAS VECES
    document.getElementById("errorNombre").innerHTML = "";
    document.getElementById("errorAsunto").innerHTML = "";
    document.getElementById("errorMensaje").innerHTML = "";
    document.getElementById("exitoEnvio").innerHTML = "";


    let suma = 0;

    let validaNombre = regexNombre.test(nombre.value)
    if (validaNombre == true) {
        numNombre = 1;
    } else {
        document.getElementById("errorNombre").innerHTML = "Ingrese Nombre";
        numNombre = 0;
    };

    let validaAsunto = regexAsunto.test(asunto.value)
    if (validaAsunto == true) {
        numAsunto = 1;
    } else {
        document.getElementById("errorAsunto").innerHTML = "Ingrese asunto";
        numAsunto = 1;
    };

    let validaMensaje = regexMensaje.test(mensaje.value)
    if (validaMensaje == true) {
        numMensaje = 1;
    } else {
        document.getElementById("errorMensaje").innerHTML = "Ingrese menaje";
        numMensaje = 0;
    };
    if ((numNombre + numAsunto + numMensaje) == 3) {
        document.getElementById("exitoEnvio").innerHTML = "Mensaje enviado con éxito";
    };

})
 */