var screen_width = 0;
var screen_height = 0;
var speak_data  = "";
var to_number = 0;

function preload() {
    img = loadImage('bg.jpg');
    apple = loadImage("apple.png");
}

var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function Start(){
    document.getElementById("Status").innerHTML = "The system is Listening Please Speak";
    recognition.start();
}

recognition.onresult = function(event) {
    console.log(event);
    var content = event.results[0][0].transcript;
    console.log(content);
    to_number = Number(content);
    document.getElementById("Status").innerHTML = "The Speech has been recognized as: " + content;
    if (Number.isInteger(to_number)){
        var draw_apple = "set";
        for (var i = 1; i<= to_number; i++){
            x = Math.floor(Math.random()*700);
            y = Math.floor(Math.random()*400);
            image(apple,x,y,50,50);
            var speak_data = to_number + "Apples drawn";
            speak()
        }
    } else{
        DocumentFragment.getElementById("Status").innerHTML = "The system is not recognized as number";
    }
}

function setup(){
    screen_width = window.innerWidth;
    screen_height = window.innerHeight;
    canvas = createCanvas(screen_width,screen_height);
}

function draw(){}
