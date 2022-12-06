import FYSCloud from "https://cdn.fys.cloud/fyscloud/0.0.4/fyscloud.es6.min.js";

window.onload = test;

function test() {
    FYSCloud.API.queryDatabase(
        "SELECT * FROM message"
    ).then(function (data) {
        console.log(data);
    }).catch(function (reason) {
        console.log(reason);
    });
    let name = document.getElementById("name").value;
    console.log(name);
    let email = document.getElementById("e-mail").value;
    console.log(email);
    let phonenumber = document.getElementById("phonenumber").value;
    console.log(phonenumber);
    let password = document.getElementById("passid").value;
    console.log(password);
    let birthdate = document.getElementById("date").value;
    console.log(birthdate);
    let gender = document.querySelector('input[name= "gender"]:checked').value;



    const form = document.getElementById("signup");
    console.log(form);
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        console.log(name);
    });
}
    function getDataFromInput() {
    console.log("hallo");
    document.getElementById("Male")

    }





// // show a message with a type of the input
// function showMessage(input, message, type) {
//     // get the small element and set the message
//     const msg = input.parentNode.querySelector("small");
//     msg.innerText = message;
//     // update the class for the input
//     input.className = type ? "success" : "error";
//     return type;
// }
//
// function showError(input, message) {
//     return showMessage(input, message, false);
// }
//
// function showSuccess(input) {
//     return showMessage(input, "", true);
// }
//
// function hasValue(input, message) {
//     if (input.value.trim() === "") {
//         return showError(input, message);
//     }
//     return showSuccess(input);
// }
//
// function validateEmail(input, requiredMsg, invalidMsg) {
//     // check if the value is not empty
//     if (!hasValue(input, requiredMsg)) {
//         return false;
//     }
//     // validate email format
//     const emailRegex =
//         /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//
//     const email = input.value.trim();
//     if (!emailRegex.test(email)) {
//         return showError(input, invalidMsg);
//     }
//     return true;
// }
//
// const form = document.querySelector("#signup");
//
// const NAME_REQUIRED = "Please enter your name";
// const EMAIL_REQUIRED = "Please enter your email";
// const EMAIL_INVALID = "Please enter a correct email address format";
// const PHONENUMBER_REQUIRED = "Please enter your phone number";
// const GENDER_REQUIRED = "Please enter your gender";
// const PASSWORD_REQUIRED = "Please enter a password";
// const BIRTHDATE_REQUIRED = "Please enter your birthdate";
//
// form.addEventListener("submit", function (event) {
//     // stop form submission
//     event.preventDefault();
//
//     // validate the form
//     let nameValid = hasValue(form.elements["name"], NAME_REQUIRED);
//     let emailValid = validateEmail(form.elements["email"], EMAIL_REQUIRED, EMAIL_INVALID);
//     let phoneValid = validateEmail(form.elements["phonenumber"], PHONENUMBER_REQUIRED);
//     let genderValid = validateEmail(form.elements["gender-option"], GENDER_REQUIRED);
//     let passwordValid = validateEmail(form.elements["passid"], PASSWORD_REQUIRED);
//     let birthdateValid = validateEmail(form.elements["date"], BIRTHDATE_REQUIRED);
//     // if valid, submit the form.
//     if (nameValid && emailValid && phoneValid && genderValid && passwordValid && birthdateValid) {
//         alert("send data");
//     }
// });




