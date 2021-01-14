"use strict";

let disableElement = document.querySelector('.disable');
let mailContainer = document.querySelector('.form-container');
let mailForm = document.forms.mailForm;

function disable() {
    if (disableElement.style.display === "none" || disableElement.style.display === "") {
        mailContainer.style.display = "flex";
        disableElement.style.display = "flex";
    } else {
        mailContainer.style.display = "none";
        disableElement.style.display = "none";
    }
}

function send(e) {
    e.preventDefault()

    console.log({
        email: mailForm['email'].value,
        message: mailForm['message'].value,
    });

    mailForm['email'].value = '';
    mailForm['message'].value = '';

    if (disableElement !== null) {
        disable();
    }
}

mailForm.addEventListener('submit', send);
