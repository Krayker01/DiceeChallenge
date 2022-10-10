// first die
var randomNumber1 = Math.random();
randomNumber1 = (randomNumber1 * 6) + 1;
randomNumber1 = Math.floor(randomNumber1);
var x = "images/dice" + randomNumber1 + ".png";
document.querySelector(".img1").setAttribute("src", x);

// second die
var randomNumber2 = Math.random();
randomNumber2 = (randomNumber2 * 6) + 1;
randomNumber2 = Math.floor(randomNumber2);
var y = "images/dice" + randomNumber2 + ".png";
document.querySelector(".img2").setAttribute("src", y);

// wins
if (randomNumber1 === randomNumber2){
  document.querySelector("h1").textContent = "Draw!";
}
else if (randomNumber1 > randomNumber2){
  document.querySelector("h1").textContent = "🚩 Player 1 Wins!";
}
else if (randomNumber1 < randomNumber2){
  document.querySelector("h1").textContent = "Player 2 Wins! 🚩";
}
