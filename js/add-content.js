
function showGreeting() {

    var today = new Date();
    var hourNow = today.getHours();
    var greeting;

    if (hourNow > 18) {
        greeting = 'Be sure to turn off your candle before bed';
    }

    else if (hourNow > 12) {
        greeting = 'You should light a scented candle!';
    }

    else if (hourNow > 0) {
        greeting = 'Wake up to one of our scented candles!';
    }

    else {
        greeting = 'Welcome!';
    }

    return ('<h3>' + greeting + '</h3>');
}


function playMusic() {

var xmas = prompt("Would you like some Christmas music?");

if (xmas === "yes") {
    document.getElementById('bgMusic').play();
} 

else {
 alert("Boooooo you Scrooge McDuck!")

}

}

