const btnMobile = document.getElementById('btn-mobile')

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault()
    const nav = document.getElementById('nav')
    nav.classList.toggle('active')
}

btnMobile.addEventListener('click', toggleMenu)
btnMobile.addEventListener('touchstart', toggleMenu)

var button = document.getElementById('read_button')

button.addEventListener('click', function() {
    var card = document.querySelector('.card')
    card.classList.toggle('active')

    if (card.classList.contains('active')) {
        return button.textContent = 'Leia Menos'
    }

    button.textContent = 'Leia Mais'
})