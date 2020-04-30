'use strict';

var userName = prompt('What is your name?');
   document.write('<h3>' + 'Hello, ' + userName + '<h3');

var educationName = prompt('Did you graduated Kiev Technical university in Kiev?');
if(educationName.toLowerCase() === 'yes'){
    alert('This is the best university!');
}  else {
    if(educationName.toLowerCase() === 'no'){
        alert('Ohh, sorry');
    } else {
        prompt('please answer with yes or no');
    }
}

var cityName = prompt('What city this university located? in Kiev');
    if(cityName.toUpperCase() === 'YES'){
     alert('Its the beautiful city!');
    }   else {
        if(cityName.toUpperCase() ==='NO'){
         alert('Ohh, sorry, but I think in Kiev');
        }

    }

    var countryName= prompt('Where is Kiev?');
    if(countryName === 'In Ukraine'){
     alert('Yes');
    }   else {
        alert('Ohh, no');
        }

    var degreeName = prompt('Did you graduated masters program or no?');
        if(degreeName.toLowerCase() === 'yes'){
            alert('Oo, nice!');
    }  else {
            if(educationName.toLowerCase() === 'no'){
                alert('Ohh, sorry');
    }  else {
                prompt('please answer with yes or no');   

    } 
    }
   
     var  i=0;
    while(i<=3) { 
        var numberGuesGame = prompt('Guess number?'); 
        numberGuesGame = parseInt(numberGuesGame);
        if (numberGuesGame === 50){
             alert('Your number 50');
             break;
        }  else {
            if (numberGuesGame<50){
                alert('too low'); 
                i=i+1;   
            }  else {
                alert('too high');
                i=i+1;
            }  
         }
    }   
    alert('Your number 50');

    var a=0;
    var i=0;
    var b=0;
    var miraclePlaces = ["Taj Mahal","Petra","Piramids","Grand Canyon","Niagara Falls","Stonehenge"];
    while(a<6) {
        var onePlace = prompt('Do you know the one of 6 miracle places in the world?');
        for (i=0; i<6; i++){
            if (onePlace === miraclePlaces[i]){
            alert('Its correct answer');
            b=b+1;
            i=i+1;
        } else {
            i=i+1;
        }    
        }
        a=a+1;
        alert('Try again pls');
    }  
        alert('Wow! Your score is ' + b);
    

    