function toggleMenu() {
    const nav=document.getElementById('menu')
    nav.classList.toggle('hidden')
}

let slideIndex=0;

function slideLeft() {
    if (slideIndex === 1) {
        slideIndex = 3
    }
    else {
        slideIndex--
    }
}

function slideRight() {
    if (slideIndex === 3) {
        slideIndex = 1
    }
    else {
        slideIndex++;
    }
}

function slideChange(val) {
    let slides = document.getElementsByClassName('slide')
    if (slideIndex + val > 2) {
        slideIndex = 0
    }
    else if (slideIndex + val < 0) {
        slideIndex = 2
    }
    else {
        slideIndex += val
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.add('hidden')
        slides[i].classList.remove('flex')
    }
    slides[slideIndex].classList.remove('hidden')
    slides[slideIndex].classList.add('flex')
}
