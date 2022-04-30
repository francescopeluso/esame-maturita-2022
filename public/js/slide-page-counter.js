const up_button = document.querySelector('#up-arrow');
const down_button = document.querySelector('#down-arrow');

let counter = null;
let slides = null;

window.onload = () => {
    counter = 0;
    slides = document.getElementsByTagName("section");
    slides[counter].scrollIntoView();
}

up_button.addEventListener("click", () => {
    if (counter === 0) {
        slides[counter].scrollIntoView();
    } else {
        counter--;
        slides[counter].scrollIntoView();
    }

})

down_button.addEventListener("click", () => {
    if (counter === slides.length) {
        slides[counter].scrollIntoView();
    } else {
        counter++;
        slides[counter].scrollIntoView();
    }

})