// Speech Object
let speech;
let said =[];
let index = 0; // the index of the character!
 
function setup() {
    let canvas = createCanvas(400, 400);
    canvas.parent('c1');

    // Create a Speech Recognition object with callback
    speechRec = new p5.SpeechRec('en-US', gotSpeech);
    // "Continuous recognition" (as opposed to one time only)
    let continuous = true;
    // If you want to try partial recognition (faster, less accurate)
    let interimResults = true;
    // This must come after setting the properties
    speechRec.start(continuous, interimResults);

    // DOM element to display results
    let output = select('#speech');

    // Speech recognized event
    function gotSpeech() {
    // Something is there
    // Get it as a string, you can also get JSON with more info
    // console.log(speechRec);
    if (speechRec.resultValue) {
        said = speechRec.resultString;
        // Show user
        output.html(said);
    }
  }
  background(240);
}

function draw(){
    //option1
    background(240);
    fill(0);
    rect(10, 100, said.length * 5, 20);
    
    for (let i = index; i < said.length; i++) {
        x = said.charCodeAt(i);
        x = map(said.charCodeAt(i), 97, 122, 10, 250);
        let y = said.length;
        y = map(said.length, 0, 50, 10, 400 );
        background(x,y,255);
        ellipse(x, y, 30, 30);
    }   
}