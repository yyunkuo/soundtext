// Speech Object
let speech;
let said =[];
let index = 0; // the index of the character!
 
function setup() {
    createCanvas(1200,1200);
  
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
}

function draw(){
    background(240);
    fill(0);
    rect(10, 100, said.length * 5, 20);
    // looping through each index!
    for (let i = index; i < said.length; i++) {
        let x = said.charCodeAt(i);
        x = map(said.charCodeAt(i), 97, 122, 10, 200 );
        ellipse(x, 10 + said.length, 10, 10);
        console.log(x);
    }
}