import FYSCloud from "https://cdn.fys.cloud/fyscloud/0.0.4/fyscloud.es6.min.js";



const submit = document.getElementById("submit");
submit.onclick = function (event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("passid").value;
    let passwordcf = document.getElementById("newpass").value;
    let birthdate = document.getElementById("date").value;
    let gender = document.querySelector(".gender-info-box").value;
    console.log(name);
    console.log(email);
    console.log(password);
    console.log(passwordcf);
    console.log(birthdate);
    console.log(gender);


    FYSCloud.API.queryDatabase("INSERT INTO gebruiker(naam, email, wachtwoord, wachtwoordcf, geboortedatum, gender, land, biografie, roepnaam) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)",[name,email,password,passwordcf, birthdate, gender, 'spanje', 'hoi ik ben', 'roep'])
        .then(function (data) {
            console.log(data);
            FYSCloud.URL.redirect("profile.html");
        }).catch(function (reason) {
        console.log(reason);
    });
};







