window.onload = test;

//naam uit de console halen en aan <ul> toevoegen
function test() {
    //eerst checken in de database welke matches er zijn, en hiervan de namen ophalen

    let naamValue = document.getElementById(//dit moet dus uit de database).value;
        ;

    let deleteButton = document.createElement("button");
    deleteButton.setAttribute("class", "btn");
    deleteButton.appendChild(document.createTextNode("Delete"));

    let li = document.createElement("li");
    let matchNaam = document.createTextNode(naamValue);

    li.appendChild(matchNaam, deleteButton);
    document.getElementById("matches").appendChild(li);
}

function DeleteMatch(){

}