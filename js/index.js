let button = document.getElementById('btn-mostrar');
button.addEventListener('click', mostrarMais)

function mostrarMais(){
    document.querySelector('.mais-noticias').style.display = "block"
}