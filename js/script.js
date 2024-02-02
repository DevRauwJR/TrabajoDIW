//archivo javascript para traducir del ingles al español


//funcion javascript donde leemos la clase en el checkbox del idioma
// y por medio de una funcion activamos el cambio de idioma 
document.addEventListener("DOMContentLoaded", function() {
    var check = document.querySelector(".check");
    check.addEventListener('click', idioma);

    function idioma() {
        let id = check.checked;
        if (id) {
            location.href = "/esp/aceite.html";
        } else {
            location.href = "home.html";
        }
    }
});











