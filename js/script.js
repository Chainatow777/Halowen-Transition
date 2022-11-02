// header

const btnMobile = document.getElementById('btn-mobile')

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault()
    const nav = document.getElementById('nav')
    nav.classList.toggle('active')
}

// header

// menu

function buttonClick() {
    document.getElementById('sound1').play()

    const splash =  document.getElementById('splash')
    splash.style.opacity=0
    setTimeout(() => {
        // After the transition is ended the showSplash will be hidden
        splash.remove();
      }, 1000);
}

// card

btnMobile.addEventListener('click', toggleMenu)
btnMobile.addEventListener('touchstart', toggleMenu)

var buttons = document.getElementsByClassName('read_button')

for (var i = 0; i < buttons.length; i ++) { 

buttons[i].addEventListener('click', function(evt) {
    var card = evt.currentTarget.parentElement
    card.classList.toggle('active')

    if (card.classList.contains('active')) {
        return evt.currentTarget.textContent = 'Leia Menos'
    }

    evt.currentTarget.textContent = 'Leia Mais'
})

}

// buttons.forEach(button => {
//     button.addEventListener('click', function(evt) {
//         var card = evt.currentTarget.parentElement
//         card.classList.toggle('active')
    
//         if (card.classList.contains('active')) {
//             return evt.currentTarget.textContent = 'Leia Menos'
//         }
    
//         evt.currentTarget.textContent = 'Leia Mais'
//     }) 
// });

// card