



var alphabetLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = [];
var userGuess = null;
var letterToBeGuessed = alphabetLetters[Math.floor(Math.random() * alphabetLetters.length)];

document.onkeyup = function(event) {

	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();


		if (guessesSoFar.indexOf(userGuess) < 0 && alphabetLetters.indexOf(userGuess) >= 0) {
		guessesSoFar[guessesSoFar.length]=userGuess;
		guessesLeft--;

	}

		if (letterToBeGuessed == userGuess) {
		wins++;
		guessesLeft = 9;
		guessesSoFar = [];
		letterToBeGuessed = alphabetLetters[Math.floor(Math.random() * alphabetLetters.length)];
	
	}

		if (guessesLeft == 0) {
		losses++;
		guessesLeft = 9;
		guessesSoFar = [];
		letterToBeGuessed = alphabetLetters[Math.floor(Math.random() * alphabetLetters.length)];
		
	}

	var html = "<p><h1>The Psychic Game</h1></p>" + "<p><h2>Guess what letter I\'m thinking of</h2></p>" + "<p><h2>Wins: " + wins + "</h2></p>" + "<p><h2>Losses: " + losses + "</h2></p>" + "<p><h2>Guesses Left: " + guessesLeft + "</h2></p>" + "<p><h2>Your guesses so far: " + guessesSoFar + "</h2></p>";
	document.querySelector("#game").innerHTML = html;

}