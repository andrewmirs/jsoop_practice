
class Card{
	constructor(suite, faceValue){
		this.suite = suite;
		this.faceValue = faceValue;
	}
	getSuite(){
		return this.suite;
	}
	getFaceValue(){
		return this.faceValue;
	}
}

class Deck{
	constructor(){
		//takes in nothing
		//make storage for your card objects
		this.cards = [];
	}
	addCard( suite, faceValue ){
		//adds a card to the deck
		//takes in a string suite and faceValue
		//makes a new card Object from the Card template
		//adds the card object to the storage in the constructor
		//returns the amount of cards currently stored
		this.cards.push( new Card(suite, faceValue) );
		return this.getCardCount();

	}
	shuffle(){
		//reorders the cards in the storage array in a random order
		//takes in nothing
		//returns nothing
		var newShuffle = [];
		for (var i=0; i<this.cards.length; i++){

		}
	}
	getCardCount(){
		//gets the current amount of cards stored
		//takes in nothing
		//returns the amount of cards stored in the array in the constructor
		return this.cards.length;
	}
	dealCards( number ){
		//deals out a number of cards
		//takes in the number of cards to deal
		//removes that many cards from the deck
		//returns an array with that many cards in it
		//cannot return more cards than the deck has
		var dealtCards = [];
		for (var i=0; i<number; i++){
			dealtCards.push(this.cards[i]);
			this.cards.splice(i, 1);
		}
		return dealtCards;
	}
}