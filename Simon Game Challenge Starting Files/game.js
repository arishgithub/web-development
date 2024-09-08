var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = -1;
var userClickedIndex = 0;

function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);

    var randomChosenColour = buttonColours[randomNumber];

    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);

    userClickedPattern = [];
    userClickedIndex = 0;

    level++;
    $("h1").text("Level " + level);
}

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");
    setTimeout(function () {
        $("#" + currentColour).removeClass("pressed");
    }, 100);
}

function checkAnswer(currentLevel) {
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
        console.log("Success");
    } else {
        var gameOverSound = new Audio("sounds/wrong.mp3");
        gameOverSound.play();

        $("body").addClass("game-over");
        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);

        $("h1").text("Game over, Press any key to restart");
        startOver();
    }
}

function startOver() {
    gamePattern = [];

    level = -1;
}

$(".btn").on("click", function () {

    if ($("h1").text() === "Press A Key to Start" || $("h1").text() === "Game over, Press any key to restart") {
        return;
    }

    var userChosenColour = $(this).attr("id");

    userClickedPattern.push(userChosenColour);

    animatePress(userChosenColour);
    playSound(userChosenColour);

    checkAnswer(userClickedIndex);
    userClickedIndex++;

    if (userClickedIndex === level + 1) {
        setTimeout(nextSequence, 1000);
    }
});

$(document).on("keypress", function () {
    if (level === -1) {
        nextSequence();
    }
});