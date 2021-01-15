"use strict";

let disableElement = document.querySelector('.disable');
let mailContainer = document.querySelector('.form-container');
let mailForm = document.forms.mailForm;

function disable(form= mailContainer) {
    if (disableElement.style.display === "none" || disableElement.style.display === "") {
        form.style.display = "flex";
        disableElement.style.display = "flex";
    } else {
        form.style.display = "none";
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
        disable(mailContainer);
    }
}

mailForm.addEventListener('submit', send);
