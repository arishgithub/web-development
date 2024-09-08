var randomNumber1 = Math.floor(6 * Math.random()) + 1;
var nam = "images/dice".concat(randomNumber1, ".png");
document.querySelector(".img1").setAttribute("src", nam);

var randomNumber2 = Math.floor(6 * Math.random()) + 1;
nam = "images/dice" + randomNumber2 + ".png";
document.querySelector(".img2").setAttribute("src", nam);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins";
}
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins🚩";
}
else {
    document.querySelector("h1").innerHTML = "🚩Draw🚩";
}
