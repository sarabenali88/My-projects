import FYSCloud from "https://cdn.fys.cloud/fyscloud/0.0.4/fyscloud.es6.min.js";



const submit = document.getElementById("submit");
submit.onclick = function (event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("passid").value;
    let passwordcf = document.getElementById("newpass").value;
    let birthdate = document.getElementById("date").value;
    let gender = document.querySelector(".gender-category").value;
    console.log(name);
    console.log(email);
    console.log(password);
    console.log(passwordcf);
    console.log(birthdate);
    console.log(gender);

    if (name === '' && email === '' && password === '' && passwordcf === '' && birthdate === ''){
        alert("You have not entered your information");
        return false;
    }
    if (name === ''){
        alert("You have not entered your name");
        return false;
    }

    if (email === ''){
        alert("You have not entered your email");
        return false;
    }

    if (password === ''){
        alert("You have not entered a password")
        return false;
    }
    if (passwordcf === ''){
        alert("Enter password in confirm password");
        return false;
    }

    if (birthdate === ''){
        alert("You have not entered your birthdate");
        return false;
    }

    if (password !== passwordcf) {
        alert("Passwords do not match.");
        return false;
    }


    if (gender === "Select your gender"){
        alert("Select your gender");
        return false;
    }else {
        FYSCloud.API.queryDatabase("INSERT INTO gebruiker(naam, email, wachtwoord, wachtwoordcf, geboortedatum, gender) VALUES(?, ?, ?, ?, ?, ?)", [name, email, password, passwordcf, birthdate, gender])
            .then(function (data) {
                console.log(data);
                FYSCloud.URL.redirect("profile.html");
            }).catch(function (reason) {
            console.log(reason);
        });
    }
};







