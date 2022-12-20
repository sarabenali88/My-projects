import FYSCloud from "https://cdn.fys.cloud/fyscloud/0.0.4/fyscloud.es6.min.js";

const submit = document.getElementById("send");
submit.onclick = function (event) {
    event.preventDefault();

    FYSCloud.API.sendEmail({
        from: {
            name: "DFMS",
            address: "d.fmsfys@gmail.com "
        },
        to: [
            {
                name: "",
                address: ""
            }
        ],
        subject: "Reset your password",
        html: "<h1>Hello!</h1><p>Hello! To reset your password, click on the link below. If you wish to not reset your password then ignore this email.</p>"
    }).then(function(data) {
        console.log(data);
    }).catch(function(reason) {
        console.log(reason);
    });
















}


