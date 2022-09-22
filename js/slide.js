let slides = document.querySelectorAll(".slide-container");
let index = 0;

function next(){
    slides[index].classList.remove('ativo');
    index = (index + 1) % slides.length;
    slides[index].classList.add('ativo');

}

function prev(){
    slides[index].classList.remove('ativo');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('ativo');

}
setInterval(next, 5000);