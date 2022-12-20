import FYSCloud from "https://cdn.fys.cloud/fyscloud/0.0.4/fyscloud.es6.min.js";

const submit = document.getElementById("submitForm");
submit.onclick = function (event) {
    event.preventDefault();


    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    console.log(email);
    console.log(password);

    FYSCloud.API.queryDatabase("SELECT * FROM gebruiker WHERE email = ? AND wachtwoord = ?", [email, password])
        .then(function (data) {
            console.log(data);
            if (data.length > 0) {
                FYSCloud.Session.set("userId", data[0]["idGebruiker"]);
                FYSCloud.Session.set("email", email);
                FYSCloud.URL.redirect("assets/html/homepage.html");
            }
        }).catch(function (reason) {
        console.log(reason);
    });
    FYSCloud.Session.get("userId");
    FYSCloud.Session.get("email");
}




