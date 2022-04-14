const loader = document.querySelector('.loader');

const loadTimeout = setTimeout(() => loader.classList.add('loading-out'), 5000);

window.onload = loadTimeout();

