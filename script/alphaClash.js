// function play(){
//       //hide the all screen. to hide the screen add the class to the home screen
//       const homeScreen = document.getElementById('home-screen');
//       homeScreen.classList.add('hidden');
//       //show the play ground
//       const playGroundSection = document.getElementById('play-ground');
//       playGroundSection.classList.remove('hidden');
//       // console.log(playGroundSection.classList);
// }

function continueGame(){
      //step 01 :- generate a random alphabet
      const alphabet = getARandomAlphabet();
      console.log('your random alphabet :',alphabet);


      //set randomly generated alphabet to the screen(show it)
      const currentAlphabetElement = document.getElementById('current-alphabet');
      currentAlphabetElement.innerText = alphabet;
      
      //set bg color
      setBackgroundColorById(alphabet);
}



function play(){
      hideElementById('home-screen');
      showElementById('play-ground');
      continueGame();
}