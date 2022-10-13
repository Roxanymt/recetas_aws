var loginForm = document.getElementById('loginForm');

loginForm.onsubmit = function (event) {
    /*event se refiere al evento que estoy escuchando*/
    event.preventDefault(); //previene el comportamiento defaulr de mi formulario

    //obtener datos formulario
    var formulario = new FormData (loginForm); /* formulario = {email:... password:...*/

    fetch('/login', {method:'POST', body: formulario})
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if(data.message == 'correcto'){
                //todo esta correcto y redirige a dashboarda
                window.location.href = "/dashboard";
            } else {
                var mensajeAlerta = document.getElementById('mensajeAlerta');
                mensajeAlerta.innerHTML = data.message;

                mensajeAlerta.classList.add('alert');
                mensajeAlerta.classList.add('alert-danger');
            }
        })
}
