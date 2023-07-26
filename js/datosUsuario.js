/*
js gestion de los datos de usuatio
*/
var nick;

function datosUsuario(nick) {
    sessionStorage.setItem('nick', nick.value);
    //a borrar en otros videos
}

function getDatosUsuario() {
    let nick = sessionStorage.getItem('nick');
    console.log(nick);
    //a borrar en otros videos 
}

function comprobaciónDatosUsuario() {
    if (nick == null) {
        sessionStorage.setItem('error','no se ha rellenado correcta el formulario');
        return false;
    }
    return true;
}