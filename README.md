body{
background: linear-gradient(#d2e0d6, #5e937e);
}
.backgroundNav{
margin: 30px;
}
/*styling the main menu*/
.mainMenu {
border-radius: 2px;
background-color: white;
color: black;
font-size: 30px;
cursor: pointer;
transform: translate(1300px, 5px);
}
.button span {
cursor: pointer;
display: inline-block;
position: relative;
transition: 0.5s;
}

.button span:after {
content: '\00bb';
position: absolute;
opacity: 0;
top: 0;
right: -20px;
transition: 0.5s;
}

.button:hover span {
padding-right: 25px;
}

.button:hover span:after {
opacity: 1;
right: 0;
}

.spacing1 {
margin: 35px;
}
.spacing2 {
margin: 35px;
}

/*styling the main navbalk*/
.navbalkOption {
padding: 10px;
color: black;
font-size: 25px;
display: inline;
font-family: sans-serif;
border-radius: 25px;
border: black solid 3px;
margin: 60px;
}
.line {
border: solid black; border-width: 5px 0 0; clear: both; margin: 20px 0 21px; height: 1px;
}

/*styling the last navbalk*/
.navbalkEnd {
background-color: black;
display: block;
border-radius: 10px;
}


/*styling the links*/
.start {
color: black;
text-decoration: none;
}
.endLink{
text-decoration: none;
color:white;
}


/*styling the chat interface*/
.chatInterface {
width: 1050px;
border: solid 10px white;
border-radius: 20px;
outline-style: solid;
outline-color: black;
padding-bottom: 3px;
margin: 50px;
background: black;
height: 700px;
display: flex;
transform: translate(11%, 0%);
}

/*styling the chat selector*/
.chatSelector {
color: white;
font-family: "Berlin Sans FB";
font-size: 25px;
padding-left: 30px;
transform: translate(15% ,1%);
}

/*styling vertical line that will serve as border between chat selector and active chat*/
.verticalLine{
border: solid black;
padding-left: 12px;
height: 700px;
background: white;
margin-left: 20px;
}

/*styling profile chatperson*/
.profile {
font-size: 20px;
font-family: "Berlin Sans FB";
}

/*styling the layout of the active chat*/
.activeChat {
color: white;
left: 1000px;
padding-bottom: 500px;
padding-left: 50px;
}

/*styling the input bars*/
.inputOne {
width: 60%;
padding: 12px 20px;
margin: 8px 0;
box-sizing: border-box;
border-radius: 20px;
}
.inputTwo {
width: 100%;
padding: 12px 20px;
margin: 8px 0;
transform: translate(50%);
box-sizing: border-box;
border-radius: 20px;
}

/*styling chat bars*/
.pieter {
border: solid; fill: #5e937e;
border-radius: 20px;
background: #293a34;
margin: 5px;
height: 40px;
text-align: center;
font-family: "Georgia";
}

.me {
border: solid; fill: #5e937e;
border-radius: 20px;
background: #5e937e;
margin: 5px;
height: 40px;
transform: translate(90%);
text-align: center;
}
.profileButton {
transform: translate(100%);
background-color: white;
border: none;
color: black;
padding: 5px 11px;
text-align: center;
text-decoration: none;
display: inline-block;
position: relative; bottom: 45px;
}