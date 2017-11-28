window.addEventListener('keydown', e => {
    const keyCode = e.keyCode;
    const audioEl = document.querySelector(`audio[data-key="${keyCode}"`);
    audioEl.play();
})
