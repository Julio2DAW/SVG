'use strick'

window.onload = iniciar

function iniciar() {
    setTimeout(cambiar, 100)
}

function cambiar() {
    let c1 = document.getElementById('circulo1')
    c1.setAttribute('fill', 'lime')
}