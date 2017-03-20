console.log("JS file is connected to HTML! Woo!")

var cards = ['queen', 'queen', 'king', 'king', 'jack', 'jack'];
var cardsInPlay = [];
var board = document.getElementById('game-board');

function createBoard() {

	shuffle(cards);
	// loops through the length of the cards
	for (var i=0; i < cards.length; i ++) {
		var cardElement = document.createElement('div');
		cardElement.className = 'card';
		cardElement.innerHTML = '<img src="card-back.jpg"/>';
		// sets card's 'data-card' to be the element of array
		cardElement.setAttribute('data-card', cards[i]);
		// when card is clicked, isTwoCards is executed
		cardElement.addEventListener('click', isTwoCards);
		// appends card to board
		board.appendChild(cardElement);
	}
}
// checks to see if there are cards in play
function isTwoCards() {
	// add cards to array of cards in play
	//'this' refers to the CURRENT element being called on
	cardsInPlay.push(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') == 'king') {
			this.innerHTML = '<img src="cards-157644_640.png" alt="King"/>';
		}
		else if (this.getAttribute('data-card') == 'queen') {
			this.innerHTML = '<img src="cards-157650_640.png" alt="Queen"/>';
		}
		else {
			this.innerHTML = '<img src="jack-28251_640.png" alt="Jack"/>'; 
		}
	if (cardsInPlay.length == 2) {
		// pass the cardsInPlay to the isMatch function
		isMatch(cardsInPlay);
		// clear cards in play array for next attempt
		cardsInPlay = [];
	}
}
// checks for matches and sends user an alert
function isMatch(cards) {
	if (cards[0] == cards[1]) {
		alert("You found a match!");	}
	else{
		alert("No match found, try again.");
	}
}
// shuffles cards so they're never in the same spot twice
function shuffle(array) {
    var i;
    var rand;
    var x;
    for (i = array.length; i; i--) {
        rand = Math.floor(Math.random() * i);
        x = array[i - 1];
        array[i - 1] = array[rand];
        array[rand] = x;
    }
}

createBoard();