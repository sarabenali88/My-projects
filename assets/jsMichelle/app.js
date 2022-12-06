window.onload = test;

function test() {

    // document.getElementById("theForm").submit();
    // console.log("test");

    const form = document.getElementById('privacyAgreement');

    function checkAll() {
        document.getElementById('privacyAgreement').checked = true;
        document.getElementById('userAgreement').checked = true;
    }

    function unCheckAll() {
        document.getElementById('privacyAgreement').checked = false;
        document.getElementById('userAgreement').checked = false;
    }

    if (document.getElementById('agreeEverything').checked !== true) {
        document.getElementById('agreeEverything').onclick = function () {
            checkAll()
        };
    } else {
        document.getElementById('agreeEverything').onclick = function () {
            unCheckAll()
        };
    }

    document.getElementById('privacyPage').addEventListener('click',
        whenClick);

    function whenClick() {
        window.location.assign("about.html");
    }

    document.getElementById('userPage').addEventListener('click',
        onClick);

    function onClick() {
        window.location.assign("about.html");
    }


    document.getElementById('verderButton').addEventListener('click',
        ifClicked);

    function ifClicked() {
        if (document.getElementById('privacyAgreement').checked !== true || document.getElementById
        ('userAgreement').checked !== true) {
            alert("Please check all boxes to continue!");
        }
    }
}
