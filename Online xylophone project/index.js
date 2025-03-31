var gameColor = ["c", "d", "e", "f", "g", "a", "b", "c1"]
var randomPatter = [];
var userChosenColor = [];
var started = false;
var level = 0;



$(document).keypress(function (event) {
    var pressedKey = event.key;
    console.log(pressedKey);
    tone(pressedKey);

});

function tone(notes) {
    if (notes == "a") {
        music("c");
    } else if (notes == "s") {
        music("d");
    } else if (notes == "d") {
        music("e");
    } else if (notes == "f") {
        music("f");
    } else if (notes == "h") {
        music("g");
    } else if (notes == "j") {
        music("a");
    } else if (notes == "k") {
        music("b");
    } else if (notes == "l") {
        music("c1");
    }

}
$(".btn").click(function () {
    var clickedButton = this.id;
    userChosenColor.push(clickedButton);
    // $(body).addclass("pressed");
    music(clickedButton);
    animatePress(clickedButton);
    // checkAnswer(userChosenColor.length - 1);
})


function music(clickedButton) {

    var audio = new Audio("./sounds/" + clickedButton + ".wav");
    audio.play();
    $("#" + clickedButton).fadeIn(100).fadeOut(100).fadeIn(100);
}


function animatePress(currentButton) {
    $("#" + currentButton).addClass("pressed");
    setTimeout(function () {
        $("#" + currentButton).removeClass("pressed");
    }, 100)
}
