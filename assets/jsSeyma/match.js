FYSCloud.API.queryDatabase(
    "SELECT * FROM message"
).then(function(data) {
    console.log(data);
}).catch(function(reason) {
    console.log(reason);
});

window.onload = test;
function test(){

}

$connection = FYSCloud.API.queryDatabase("#","#")
$db = FYSCloud($connection, "#")

if(isset($_post['insert'])){
    $radio = $_post ['radio']

}
