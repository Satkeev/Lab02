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