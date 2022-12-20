import FYSCloud from "https://cdn.fys.cloud/fyscloud/0.0.4/fyscloud.es6.min.js";

const submit = document.getElementById("submitprofile");
submit.onclick= function (event){
    event.preventDefault();

    const naam = document.getElementById("volledigenaam").value
    const leeftijd = document.getElementById("leeftijd").value
    const land = document.getElementById("land").value
    const interesses = document.getElementById("interesses").value
    const biografie = document.getElementById("biografie").value
    console.log(naam);
    console.log(leeftijd);
    console.log(land);
    console.log(interesses);
    console.log(biografie);

    FYSCloud.API.queryDatabase("INSERT INTO profiel ( roepnaam, land, biografie, leeftijd, interesses) VALUES (?,?,?,?,?)",
        [naam, land, biografie,leeftijd, interesses]
    ).then(function(data) {
        console.log(data);
        FYSCloud.URL.redirect("match.html");
    }).catch(function(reason) {
        console.log(reason);
    });
}
