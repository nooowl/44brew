"use strict";

let scrollUpButton = document.querySelector('.scrollUp')
let navigationSize = document.querySelector('.sticky').offsetHeight

window.addEventListener('scroll', trackScroll)

function trackScroll() {
    let scrolled = document.documentElement.scrollTop;

    if (scrolled > navigationSize) {
        scrollUpButton.style.display = "block";
    }
    else {
        scrollUpButton.style.display = "none";
    }
}

function scrollUp() {
    window.scrollTo({top: 0, behavior: 'smooth'})
}
