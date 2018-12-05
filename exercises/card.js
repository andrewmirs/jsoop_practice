
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
		this.cards = [];
	}
	addCard( suite, faceValue ){
		this.cards.push( new Card(suite, faceValue) );
		return this.getCardCount();

	}
	shuffle(){
		var newShuffle = [];
		for (var i=0; i<this.cards.length; i++){
			var random = Math.floor(Math.random() * this.cards.length);
			newShuffle.push(this.cards[random]);
		}
	}
	getCardCount(){
		return this.cards.length;
	}
	dealCards( number ){
		var dealtCards = [];
		for (var x=0, i=this.cards.length-1; x<number; i--, x++){
			dealtCards.push(this.cards[i]);
			this.cards.splice(i, 1);
		}
		return dealtCards;
	}
}