var gamePattern=[];
var userClickedPattern=[];
var gameon=false;
var level=0;

var buttonColours=["red", "blue", "green", "yellow"];

function playSound(name){
    var sound = new Audio("sounds/" + name + ".mp3");
    sound.play();
}

function nextSequence(){
    var randomNum=Math.floor(Math.random()*4);//range 0-3 

    var randomChosenColour=buttonColours[randomNum];
    gamePattern.push(randomChosenColour);
    console.log(gamePattern);
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
    level++;
    $("h1").text("Level "+level);
};

function animatePress(currentColour) {
    $(currentColour).addClass("pressed");
    setTimeout(function() {
        $(currentColour).removeClass("pressed");
    }, 100);
};

$(".btn").on("click",function() {
    var userChosenColour = $(this).attr("id");
    animatePress(this);
    playSound(userChosenColour);
    if(gameon===true){
        userClickedPattern.push(userChosenColour);
        console.log(userClickedPattern);
    }
    if(userClickedPattern.length===gamePattern.length){
        checkSequence();
    }
});

$(document).on("keydown", function() {
    if(gameon===false){
        gameon=true;
        $("h1").text("Level 0");
        setTimeout(function(){
            nextSequence();
        },500);
    }
    
});

function checkSequence(){
    if(JSON.stringify(gamePattern) === JSON.stringify(userClickedPattern)){
        console.log(true);
        userClickedPattern=[];
        setTimeout(function(){
            nextSequence();
        },1000);
    }else{
        console.log(false);
        var WrongSound= new Audio("sounds/wrong.mp3");
        WrongSound.play();
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },200);
        $("h1").text("Game Over, Press Any Key to Restart");
        startOver();
    }
}

function startOver(){
    gamePattern=[];
    userClickedPattern=[];
    gameon=false;
    level=0;
    console.log(gameon);
}



// var randomChosenColour = $("#" + randomChosenColour);

// $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

// var $red = $("#red");
// $red.click(function() {
//     alert("clicked");
//     $red.fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
// });