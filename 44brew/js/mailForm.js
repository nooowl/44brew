"use strict";

let disableElement = document.querySelector('.disable');

function disable() {
    if (disableElement.style.display === "none" || disableElement.style.display === "") {
        disableElement.style.display = "flex"
    } else {
        disableElement.style.display = "none";
    }
}