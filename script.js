const vid = document.getElementById('vid');
const button = document.getElementById('btn');
const title = document.querySelector('h1');

vid.volume = 0;

button.addEventListener('click', e => {
    vid.play();
    button.classList.add('hidden')
    title.classList.add('hidden')
})