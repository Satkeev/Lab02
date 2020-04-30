'use strict';

var userName = prompt('What is your name?');
   document.write('<h3>' + 'Hello, ' + userName + '<h3');

var correctAnswer = 0;

// Question 1 is working ok

function education(){   
    var educationName = prompt('Did you graduated Kiev Technical university in Kiev?');
    if(educationName.toLowerCase() === 'yes'){
        alert('This is the best university!');
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
    var cityName = prompt('What city this university located? in Kiev');
        if(cityName.toUpperCase() === 'YES'){
        alert('Its the beautiful city!');
        correctAnswer++;
    }   else {
        if(cityName.toUpperCase() ==='NO'){
         alert('Ohh, sorry, but I think in Kiev');
        }
    }
}

// Question 3 we had a problem here. Entering 'in ukraine' doesn't register as correct

function country(){
    var countryName = prompt('Where is Kiev?').toLowerCase();
    if(countryName === 'in ukraine'){
        alert('Yes');
        correctAnswer++;
    }   else {
        alert('Ohh, no');
    }
}

// Question 4 worked ok

function degree(){
    var degreeName = prompt('Did you graduated masters program or no?');
        if(degreeName.toLowerCase() === 'yes'){
        alert('Oo, nice!');
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
        var numberGuesGame = prompt('Guess number?'); 
        numberGuesGame = parseInt(numberGuesGame);
        if (numberGuesGame === 50){
             alert('Your number 50');
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

// Question 6 we had a problem. Entering correct answer didn't register as correct

function miracle(){
    var attempts=0;
    // var i=0;
    var onePlace = prompt('Do you know the one of 6 miracle places in the world?');
    var miraclePlaces = ['Taj Mahal','Petra','Pyramids','Grand Canyon','Niagara Falls', 'Stonehenge']
    while(onePlace !== miraclePlaces && attempts < 6) {
      attempts++;
    } alert('Good job!');
    correctAnswer++;
} 

education();
city();
country();
degree();
numberGame();
miracle();

alert('Wow! Your score is ' + correctAnswer);


    