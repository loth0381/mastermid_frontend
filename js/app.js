
//inicializacion de var,objetos,DOM
const nickInput = document.getElementById("nick");
const tamanoInput = document.getElementById("tamano");
const formEntrada = document.getElementById("formEntrada");
const error = document.getElementById("error");
//Funcione de eventos
function comprobarForm(event) {
    //comprobar cambios
    if (nickInput.value.length == 0) {
        console.log("pon tu nick baboso");
        nickInput.focus();
        event.preventDefault();
        error.innerText="el campo de nombre no puede estar vacio"
        return false;

    } else if (tamanoInput.value == "0") {
        console.log("no se seleccion el tamaño del panel");
        tamanoInput.focus();
        event.preventDefault();
        error.innerText="debe seleccionar un tamaño de panel"
        return false;
    }
    return true

}

//inicio de cargas de eventos
formEntrada.addEventListener("submit", comprobarForm)