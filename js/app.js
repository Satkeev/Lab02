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