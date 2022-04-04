var screen_width = 0;
var screen_height = 0;
var speak_data = "";
var to_number = 0;
var draw_apple = false;

var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
document.getElementById("Status").innerHTML = "Click on draw button to start";

function Start() {
    document.getElementById("Status").innerHTML = "The system is Listening Please Speak";
    recognition.start();
}

recognition.onresult = function (event) {
    console.log(event);
    var content = event.results[0][0].transcript;
    console.log("The Speech has been recognized as: " + content);
    to_number = Number(content);
    document.getElementById("Status").innerHTML = "The Speech has been recognized as: " + content;
    if (Number.isInteger(to_number)) {
        document.getElementById("Status").innerHTML = "Started Drawing Apple";
        var draw_apple = true;
        console.log("The value of draw_apple is: " + draw_apple);
    }else {
        document.getElementById("Status").innerHTML = "The system is not recognized as number";
    }

    if (draw_apple == true) {
        for (var i = 1; i <= to_number; i++) {
            x = Math.floor(Math.random() * 1400);
            y = Math.floor(Math.random() * 400);
            image(apple, x, y, 50, 50);
            document.getElementById("Status").innerHTML = to_number + "Apples are drawn";
            var speak_data = to_number + " " + "Apples drawn";
            // speak(speak_data);
        }
    }
}

function preload() {
    img = loadImage('bg.jpg');
    apple = loadImage("apple.png");
}

function setup() {
    screen_width = window.innerWidth;
    screen_height = window.innerHeight;
    console.log("The heght of the screen is :" + screen_height);
    console.log("The width of the screen is :" + screen_width);
    canvas = createCanvas(screen_width - 100, screen_height - 50);
}

function draw() {
    
}