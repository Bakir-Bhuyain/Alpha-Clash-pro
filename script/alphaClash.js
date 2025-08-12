// function play(){
//       //hide the all screen. to hide the screen add the class to the home screen
//       const homeScreen = document.getElementById('home-screen');
//       homeScreen.classList.add('hidden');
//       //show the play ground
//       const playGroundSection = document.getElementById('play-ground');
//       playGroundSection.classList.remove('hidden');
//       // console.log(playGroundSection.classList);
// }

function handleKeyboardButtonPress (event){
      const playerPressed = event.key;
      console.log('player pressed', playerPressed);

      //get the expected pressed 
      const currentAlphabetElement = document.getElementById('current-alphabet');
      const currentAlphabet = currentAlphabetElement.innerText;
      const expectedAlphabet = currentAlphabet.toLowerCase();
      console.log(playerPressed,expectedAlphabet);
      // console.log(currentAlphabetElement);

      //check matched or not 
      if(playerPressed=== expectedAlphabet){
            console.log('you get a point ');
            //update score
            //1. get the correct score 
            const currentScoreElement = document.getElementById("current-score");
            const currentScoreText = currentScoreElement.innerText;
            const currentScore = parseInt(currentScoreText);
            console.log(currentScore);
            //2. increase the score by one
            const newScore = currentScore + 1 ;
            //3.show the updated score
            currentScoreElement.innerText = newScore;



            //start a new round
            removeBackgroundColorById(expectedAlphabet);
            continueGame();
      }else{
            console.log('you missed a life');
            //step -1 : get the current life number
            const currentLifeElement = document.getElementById('current-life');
            const currentLifeText = currentLifeElement.innerText;
            const currentLife = parseInt(currentLifeText);

            //step -2 : reduce the life count 
            const newLife = currentLife  -1;
            //step-3 : display the updated life county
            currentLifeElement.innerText = newLife;
            }
}
//capture keyboard key press
document.addEventListener('keyup', handleKeyboardButtonPress);



function continueGame(){
      //step 01 :- generate a random alphabet
      const alphabet = getARandomAlphabet();
      console.log('your random alphabet :',alphabet);


      //set randomly generated alphabet to the screen(show it)
      const currentAlphabetElement = document.getElementById('current-alphabet');
      currentAlphabetElement.innerText = alphabet;
      
      //set bg color
      setBackgroundColorById(alphabet);
      //rmv bg color
      // removeBackgroundColorById(alphabet);
}



function play(){
      hideElementById('home-screen');
      showElementById('play-ground');
      continueGame();
}