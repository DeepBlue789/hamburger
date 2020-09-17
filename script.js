let btn = document.getElementById('button');
let nav = document.getElementById('nav');

btn.addEventListener('click', () => {
    btn.classList.toggle('active');
    nav.classList.toggle('active');
});



