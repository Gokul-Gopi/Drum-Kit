
window.addEventListener('keydown', function (e) {
    let keyCode = e.keyCode;
    let audio = document.querySelector(`audio[data-key="${keyCode}"]`);
    if (audio === null) return;
    let key = document.querySelector(`.key[data-key="${keyCode}"]`)
    audio.play();
    audio.currentTime = 0;
    key.classList.add('playing')

    function removeTransition(e) {
        if (e.propertyName !== 'transform') return;
        this.classList.remove('playing')
    }

    let keys = document.querySelectorAll('.key');
    keys.forEach(key =>
        key.addEventListener('transitionend', removeTransition)
    )
})