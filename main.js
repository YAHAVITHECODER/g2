x = 0;
y = 0;

screen_height = 0;
screen_width = 0;

draw_apple = "";

apple = "";

speak_data = "";

to_number = 0;

function preload()
{
  apple = loadImage("apple.png");
}

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {
  
 console.log(event); 

 content = event.results[0][0].transcript;

 to_number = Number(content);

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 

    if(Number.isInteger(to_number))
    {
      document.getElementById("status").innerHTML = "Started drawing apple";

      draw_apple = "set"
    }
    else
    {
      document.getElementById("status").innerHTML = "The speech has not recognized a number";
    }

}

function setup() {
  screen_width = window.innerWidth;
  screen_height = window.innerHeight;

  canvas = createCanvas(screen_width, screen_height-150);
  canvas.position(0, 150);
}

function draw() {
  if(draw_apple == "set")
  {
    for()

    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}
