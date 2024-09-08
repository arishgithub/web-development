$("h1").css("color", "blue");

$(document).keypress(function (event) {
    $("h1").text(event.key);
})