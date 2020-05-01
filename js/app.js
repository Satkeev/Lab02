'use strict';

var userName = prompt('What is your name?');
   document.write('<h3>' + 'Hello, ' + userName + '<h3');

var correctAnswer = 0;

// Question 1 is working ok

function education(){   
    var educationName = prompt('Did I graduate from Kiev Technical University in Kiev?');
    if(educationName.toLowerCase() === 'yes'){
        alert('Correct! This is the best university!');
        correctAnswer++;
    }  else {
        if(educationName.toLowerCase() === 'no'){
            alert('Ohh, sorry');
        } else {
            prompt('please answer with yes or no');
        }
    }
}

// Question 2 is working ok

function city(){
    var cityName = prompt('Is this University located in Kiev?');
        if(cityName.toUpperCase() === 'YES'){
        alert('That\'s true! Kiev is a beautiful city!');
        correctAnswer++;
    }   else {
        if(cityName.toUpperCase() ==='NO'){
         alert('Ohh, sorry, but it actually is in Kiev.');
        }
    }
}

// Question 3 we had a problem here. Entering 'in ukraine' doesn't register as correct

function country(){
    var countryName = prompt('Where is Kiev?').toLowerCase();
    if(countryName === 'ukraine'){
        alert('Yes. It\'s a great country.');
        correctAnswer++;
    }   else {
        alert('Ohh, no');
    }
}

// Question 4 worked ok

function degree(){
    var degreeName = prompt('Do I have a masters degree?');
        if(degreeName.toLowerCase() === 'yes'){
        alert('Thats correct! I have a masters degree in automatic process.');
        correctAnswer++;
    }  else {
        if(educationName.toLowerCase() === 'no'){
        alert('Ohh, sorry');
    }  else {
        prompt('please answer with yes or no');
    } 
    }
}

// Question 5 WAS working ok, but tried to fix the final Alert which was playing at the wrong time and then broke the JS.

function numberGame(){
    var  i=0;
    while(i<=3) { 
        var numberGuesGame = prompt('I am thinking of a number between 1 and 75. Can you guess it? You have four tries.'); 
        numberGuesGame = parseInt(numberGuesGame);
        if (numberGuesGame === 50){
             alert('Correct!');
             correctAnswer++;
             break;
        }  else {
            if (numberGuesGame<50){
                alert('too low'); 
                i=i+1;   
            }  else {
                alert('too high');
                i=i+1;
            }  
        } // else {
        // alert('The correct number was 50');
    //     }
    }   
}

// Question 6 There are 6 World Wonders. Can you name one?

function miracles() {

    var worldWonder = ['taj mahal', 'pyramids', 'petra', 'grand canyon', 'stonehenge', 'niagara falls'];
  
    for(var i = 0; i < 6; i++){
  
      var wonderGuess = prompt('There are six world wonders. Can you name one? You get six tries.');
  
    if (wonderGuess.toLowerCase() === 'taj mahal') {
  
      alert('Correct! The six world wonders include the Taj Mahal, the Pyramids, Petra, the Grand Canyon, Stonehenge and Niagara Falls. I hope to visit them all.');
  
      correctAnswer ++;
  
      break;
  
    } else if (wonderGuess.toLowerCase() === 'pyramids') {
  
      alert('Correct! The six world wonders include the Taj Mahal, the Pyramids, Petra, the Grand Canyon, Stonehenge and Niagara Falls. I hope to visit them all.');
  
      correctAnswer ++;
  
      break;
  
    } else if (wonderGuess.toLowerCase() === 'petra') {
  
      alert('Correct! The six world wonders include the Taj Mahal, the Pyramids, Petra, the Grand Canyon, Stonehenge and Niagara Falls. I hope to visit them all.');
  
      correctAnswer ++;
  
      break;

    } else if (wonderGuess.toLowerCase() === 'stonehenge') {
  
        alert('Correct! The six world wonders include the Taj Mahal, the Pyramids, Petra, the Grand Canyon, Stonehenge and Niagara Falls. I hope to visit them all.');
    
        correctAnswer ++;
    
        break;
    
      } else if (wonderGuess.toLowerCase() === 'grand canyon') {
    
        alert('Correct! The six world wonders include the Taj Mahal, the Pyramids, Petra, the Grand Canyon, Stonehenge and Niagara Falls. I hope to visit them all.');
    
        correctAnswer ++;
    
        break;
  
    } else if (wonderGuess.toLowerCase() === 'niagara falls') {
  
      alert('Correct! The six world wonders include the Taj Mahal, the Pyramids, Petra, the Grand Canyon, Stonehenge and Niagara Falls. I hope to visit them all.');
  
      correctAnswer ++;
  
      break;
  
    } else {
  
      alert('Sorry, please try again!');
  
    } if (i == '5') {
  
      alert('Sorry! The six world wonders include the Taj Mahal, the Pyramids, Petra, the Grand Canyon, Stonehenge and Niagara Falls. I hope to visit them all.')
  
    }
  
    }
  
  }

education();
city();
country();
degree();
numberGame();
miracles();

alert('Congratulations! Your score is ' + correctAnswer + '. Continue now to see the rest of the site.');


    