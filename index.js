//change image function
function changeImage()
{
  var randomNumber1, randomNumber2;
  randomNumber1 = Math.floor(Math.random()*10)%6 + 1;
  randomNumber2 = Math.floor(Math.random()*6) + 1;
  
  // var image1 = document.querySelector("#playerImg1");
  // var image2 = document.querySelector("#playerImg2");
  //images/
  var sourceImage1 = "images/dice" + randomNumber1 + ".png";
  var sourceImage2 = "images/dice" + randomNumber2 + ".png";

  var image1 = document.querySelector("#playerImg1");
  var image2 = document.querySelector("#playerImg2");

  image1.setAttribute("src", sourceImage1);
  image2.setAttribute("src", sourceImage2);

  checkWinner(randomNumber1, randomNumber2);
  // reset();
}

function checkWinner(n1, n2)
{
  reset();
  if(n1>n2) {
    document.querySelector("#verse").textContent = "👈";
    document.querySelector("#player1").textContent = "'Winner'";
  }
  else if(n2>n1) {
    document.querySelector("#verse").textContent = "👉";
    document.querySelector("#player2").textContent = "'Winner'";
  }else {
    document.querySelector("#verse").textContent = "v/s";
    document.querySelector(".game_title").textContent = "It's a Draw!";
  }
}

function reset() {
  // document.querySelector("#toss_btn").classList().toggle("tossed");
  document.querySelector(".game_title").textContent = "The Dice Toss";
  document.querySelector("#player1").textContent = "PLayer: 1";
  document.querySelector("#player2").textContent = "PLayer: 2";
}
