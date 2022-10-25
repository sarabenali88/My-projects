<!DOCTYPE html>
<html lang="en">
<head>
  <title>Chat</title>
  <link rel="stylesheet" href="css/main.css">
  <link rel="stelesheet" href="">
</head>

<body>

<div class="mainMenuNavbalk">
  <!-- The 1st nav balk-->
  <button type="button" class="mainMenu"> <a class="start" href=""/>
    <ion-icon name="home-outline"></ion-icon> </button>
  <button type="button" class="mainMenu"> <a class="start" href=""/>
    <ion-icon name="log-out-outline"></ion-icon> </button>
  <p>
<hr class="line">
  </p>
</div>

<p class="spacing1">

  <!--Paragraph to create some space in between main menu and main navbalk-->
</p>


<div class="backgroundNav">
  <!-- The 2nd nav balk-->
  <nav class="navbalkMenu">
    <ul class="navblakOptions">
      <strong>
      <li class="navbalkOption"> <a class="start" href=""> My profile </a> </li>
      <li class="navbalkOption"> <a class="start" href=""> Match test </a> </li>
      <li class="navbalkOption"> <a class="start" href=""> Chat </a> </li>
      <li class="navbalkOption"> <a class="start" href=""> Help </a> </li>
      <li class="navbalkOption"> <a class="start" href="">
        <ion-icon name="search-outline"></ion-icon> </a> </li>
      </strong>
    </ul>
  </nav>
</div>

<p class="spacing2">
</p>
<hr class="line">

  <!--This is the chat interface-->
<div class="chatInterface" >


<div class="chatSelector">
  <!--chat selector-->
  <h3>My chats</h3>
  <input class="inputOne" type="text" placeholder="Search chat"/>
</div>

  <!--vertical line for border-->
  <div class="verticalLine">

  </div>


<div class="activeChat">

  <div class="profile">
  <p><ion-icon name="person-circle-outline"></ion-icon>Avatar</p>
    <button class="profileButton"> View Profile <ion-icon name="eye-outline"></ion-icon> </button>
  </div>


  <!-- active chat -->
  <br>
  <p class="pieter">Hey, how are you!</p> <br>

  <p class="me">I'm fine thanks for asking! How are you by the way</p> <br>

  <p class="pieter">Unfortunately I'm not doing so well at the moment.</p> <br>


  <p class="me">What a shame! How come?</p> <br>


  <p class="pieter">I'm ill.</p> <br>


  <p class="me">Hope you get well soon!</p> <br>

  <p class="pieter">Thank you!</p> <br>


  <input class="inputTwo" type="text" placeholder="Type message"/>

</div>
</div>


<div class="navbalkEnd">
  <!--informatie balk onderaan-->
  <ul>
    <li><h2><a class="endLink" href="">FAQ</a></h2></li>
    <li><h2><a class="endLink" href="">About us</a></h2></li>
  </ul>
</div>

<script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>

</body>
</html>
