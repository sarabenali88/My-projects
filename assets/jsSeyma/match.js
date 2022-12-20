import FYSCloud from "https://cdn.fys.cloud/fyscloud/0.0.4/fyscloud.es6.min.js";


    let button = document.getElementById("buttonForm")
    button.onclick = function (event) {
        event.preventDefault();

        // function submit() {
        const land = document.getElementById("country").value
        const month = document.getElementById("months").value
        const hobby = document.getElementById("hobby").value

        console.log(land);
        console.log(month);
        console.log(hobby);

        FYSCloud.API.queryDatabase(
            "UPDATE antwoord SET antwoord1 = ?, antwoord2 = ?, antwoord3 = ? WHERE (`idAntwoord` = '3') AND (`idGebruiker` = '1')",
            [land, month, hobby]
        ).then(function (data) {
            console.log(data);
            FYSCloud.URL.redirect("friendrequest.html");
        }).catch(function (reason) {
            console.log(reason);
        });

    }







