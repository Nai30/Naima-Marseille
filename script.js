//Add your global variables here
//Global Variables
let tonePlaying=false;
let volume=0.5;
let pattern = [2, 2, 4, 1, 1 ,3 ,4, 1];
let progress = 0; //keep track of the computer's pattern index
let gamePlaying = false;
let guessCounter=0;//keep track of where the user is in the pattern
const clueHoldTime =1000;//how long to hold each clue's light/sound
const cluePauseTime=333;//how long to pause in between clues
const nextClueWaitTime=1000;//how long to wait before starting playback of the clue sequence

const startBtn = document.getElementById("startBtn");
const stopBtn=document.getElementById ("stopBtn");
//Swap buttons



// Add your functions here
function startGame () {
   progress=0;
   playClueSequence();
  gamePlaying=true;
  startBtn.classList.add ("hidden");
  stopBtn.classList.remove ("hidden"); 
}
function stopGame() {
  gamePlaying=false;
  startBtn.classList.remove("hidden");
  stopBtn.classList.add("hidden")
}
function lightButton (btn){
  document.getElementById("button"+btn).classList.add("lit");
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit");
}
//Play the computer clue
function playingSingleClue (btn){
  if(gamePlaying){
    lightButton (btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime,btn)
}
}
function playClueSequence(){
  guessCounter=0;
  context.resume()
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
setTimeout(playingSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
}
function loseGame(){
  stopGame();
  alert("You lost! Press start to play again.");
  
}
function winGame(){
  stopGame();
  alert("You win! Press start to play again.");
  
}
function guess(btn){
  console.log("the user:"+btn);
  if (!gamePlaying){
    return;
  }
  if (pattern [guessCounter]==btn){
    //guess is correct
    if(progress==guessCounter){
      //YAY the user guessed the game sequence right
      if (pattern.length - 1==guessCounter){
        //YAY the user guessed the whole pattern
        winGame();
      }else{
        //Onto the next clue
        progress++;
        playClueSequence();
      
      }
    }else{
      guessCounter++;
    }
  }else{
    // Guess was incorrect
    loseGame();
  }
}





// Sound Synthesis Functions for Steps 6-8
// You do not need to edit the below code
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}
function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
let AudioContext = window.AudioContext || window.webkitAudioContext 
let context = new AudioContext()
let o = context.createOscillator()
let g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)