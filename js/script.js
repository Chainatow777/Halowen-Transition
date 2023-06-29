// menu

function buttonClick() {
    document.getElementById('sound1').play()

    const splash =  document.getElementById('splash')
    splash.style.opacity=0
    setTimeout(() => {
        splash.remove();
      }, 1000);
}