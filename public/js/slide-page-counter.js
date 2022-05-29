const up_button = document.querySelector('#up-arrow');
const down_button = document.querySelector('#down-arrow');
const counter_sect = document.querySelector('#counter');

let counter = null;
let slides = null;

document.onkeydown = (event) => {
    switch (event.keyCode) {
        case 37:
        case 38:    // up key pressed
            if (counter !== 0) {
                counter--;
                slides[counter].scrollIntoView();
                counter_sect.innerHTML = (counter + 1) + "/" + slides.length;
            }
        
            buttonOpacity();
            break;

        case 39:
        case 40:    // down key pressed
            if (counter !== slides.length) {
                counter++;
                slides[counter].scrollIntoView();
                counter_sect.innerHTML = (counter + 1) + "/" + slides.length;
            }
        
            buttonOpacity();
            break;
    }
}

function buttonOpacity() {
    if (counter == 0) {
        up_button.children[0].style.opacity = "0.5";
    } else {
        up_button.children[0].style.opacity = "1";
    }
    if (counter == slides.length - 1) {
        down_button.children[0].style.opacity = "0.5";
    } else {
        down_button.children[0].style.opacity = "1";
    }
}

window.onload = () => {
    if (window.location.href.includes('#links')) {
        counter = 3;
        slides = document.getElementsByTagName("section");
        slides[counter].scrollIntoView();
        counter_sect.innerHTML = (counter + 1) + "/" + slides.length;
        buttonOpacity();
    } else {
        counter = 0;
        slides = document.getElementsByTagName("section");
        slides[counter].scrollIntoView();
        counter_sect.innerHTML = (counter + 1) + "/" + slides.length;
        buttonOpacity();
    }
}

up_button.addEventListener("click", () => {
    if (counter !== 0) {
        counter--;
        slides[counter].scrollIntoView();
        counter_sect.innerHTML = (counter + 1) + "/" + slides.length;
    }

    buttonOpacity();

});

down_button.addEventListener("click", () => {
    if (counter !== slides.length - 1) {
        counter++;
        slides[counter].scrollIntoView();
        counter_sect.innerHTML = (counter + 1) + "/" + slides.length;
    }

    buttonOpacity();

});
