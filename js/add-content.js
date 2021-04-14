
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

    return document.write('<h3>' + greeting + '</h3>');
}


let playMusic = function () {
    
var xmas = prompt("Would you like some Christmas music?");

while (xmas !== "yes" && xmas !== "no") {
    xmas = prompt('Please enter "yes" or "no".' );   
} 

if (xmas === 'yes') {
    document.getElementById('bgMusic').play();
}
else if (xmas === 'no') {
    alert("Boooooo you Scrooge McDuck!")
}

}

function addUsername () {
    var name = prompt("What is your name?")
    var message = "Hello, " + name;
    
    return document.write('<h3>' + message + '</h3>');

}

let buyCandles = function () {
    let whichCandle = prompt('Which candle would you like? joy, holiday, or magic?')
    let candle;
    
    while (whichCandle !== 'joy' && whichCandle !== 'holiday'  && whichCandle !== 'magic')
    whichCandle = prompt('Please enter a valid option')

    if (whichCandle === 'joy') {
        candle = '<img src="https://www.candlecrest.com/wp-content/uploads/2019/11/Joy-Holiday-Jar-Candles-by-Candle-Crest-Soy-Candles-Inc.jpg">';
    }

    else if (whichCandle === 'holiday') {
        candle = '<img src="https://images.unsplash.com/photo-1574772049816-306b6b24e002?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2139&q=80">';
    }

     else if (whichCandle === 'magic') {
        candle = '<img src="https://images.unsplash.com/photo-1606008628744-31c2fc22bf95?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80">';
    }

    return candle;
}

let getAmount = function () {
    let addAmount = prompt('How many candles would you like?');
    
    while (addAmount === '' || isNaN(addAmount)) {
        addAmount = prompt('Please enter a valid number.');
    }
    return Number(addAmount);
}

let displayAmount = function () {
    let candle = buyCandles();
    let total = getAmount();
    let result = '';

    for (let i = 0; i < total; i++) {
    result = result + '<p>CandleType' + i + '' + candle + '<p>';
    }

    return document.write(result);
}

