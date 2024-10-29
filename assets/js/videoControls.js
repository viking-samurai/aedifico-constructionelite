const videoOne = document.getElementById("videoOne");
const videoTwo = document.getElementById("videoTwo");
const videoThree = document.getElementById("videoThree");
const videoFour = document.getElementById("videoFour");
const resetButtons = document.querySelectorAll(".reset");


function playPauseOne() {
    if(videoOne.paused) {
        document.getElementById("button1").innerHTML = "Pause";
        videoOne.play();
        document.getElementById("button2").innerHTML = "Play";
        videoTwo.pause();
        videoTwo.currentTime = 0;
        document.getElementById("button3").innerHTML = "Play";
        videoThree.pause();
        videoThree.currentTime = 0;
        document.getElementById("button4").innerHTML = "Play";
        videoFour.pause();
        videoFour.currentTime = 0;
    } else {
        document.getElementById("button1").innerHTML = "Play";
        videoOne.pause();
    }
}

function playPauseTwo() {
    if(videoTwo.paused) {
        document.getElementById("button2").innerHTML = "Pause";
        videoTwo.play();
        document.getElementById("button1").innerHTML = "Play";
        videoOne.pause();
        videoOne.currentTime = 0;
        document.getElementById("button3").innerHTML = "Play";
        videoThree.pause();
        videoThree.currentTime = 0;
        document.getElementById("button4").innerHTML = "Play";
        videoFour.pause();
        videoFour.currentTime = 0;
    } else {
        document.getElementById("button2").innerHTML = "Play";
        videoTwo.pause();
    }
}

function playPauseThree() {
    if(videoThree.paused) {
        document.getElementById("button3").innerHTML = "Pause";
        videoThree.play();
        document.getElementById("button1").innerHTML = "Play";
        videoOne.pause();
        videoOne.currentTime = 0;
        document.getElementById("button2").innerHTML = "Play";
        videoTwo.pause();
        videoTwo.currentTime = 0;
        document.getElementById("button4").innerHTML = "Play";
        videoFour.pause();
        videoFour.currentTime = 0;
    } else {
        document.getElementById("button3").innerHTML = "Play";
        videoThree.pause();
    }
}

function playPauseFour() {
    if(videoFour.paused) {
        document.getElementById("button4").innerHTML = "Pause";
        videoFour.play();
        document.getElementById("button1").innerHTML = "Play";
        videoOne.pause();
        videoOne.currentTime = 0;
        document.getElementById("button2").innerHTML = "Play";
        videoTwo.pause();
        videoTwo.currentTime = 0;
        document.getElementById("button3").innerHTML = "Play";
        videoThree.pause();
        videoThree.currentTime = 0;
    } else {
        document.getElementById("button4").innerHTML = "Play";
        videoFour.pause();
    }
}

function resetVideoOne() {
    videoOne.pause();
    videoOne.currentTime = 0;
    document.getElementById("button1").innerHTML = "Play";
}

function resetVideoTwo() {
    videoTwo.pause();
    videoTwo.currentTime = 0;
    document.getElementById("button2").innerHTML = "Play";
}

function resetVideoThree() {
    videoThree.pause();
    videoThree.currentTime = 0;
    document.getElementById("button3").innerHTML = "Play";
}

function resetVideoFour() {
    videoFour.pause();
    videoFour.currentTime = 0;
    document.getElementById("button4").innerHTML = "Play";
}
