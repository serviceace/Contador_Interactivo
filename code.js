const btnAumentar = document.querySelector('.botonAumentar')
const span = document.getElementById('span')
const btnDisminuir = document.querySelector('.botonDisminuir')
let contador = 0

btnAumentar.addEventListener('click', () => {
	console.log('me diste click aumentar')
	contador++
	span.textContent = contador
})

btnDisminuir.addEventListener('click', () => {
	contador--
	span.textContent = contador
})