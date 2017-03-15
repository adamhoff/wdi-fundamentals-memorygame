console.log("JS file is connected to HTML! Woo!")

var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [ ];
var gameBoard = document.getElementById('game-board');

function createCards() {
	for (var i=0; i < cards.length; i ++) {
		var cardElement = document.createElement('div');
		cardElement.className = 'card';
		gameBoard.appendChild(cardElement);
	}
}
createCards();