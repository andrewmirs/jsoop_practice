

class RandomGenerator{
	constructor(min, max){ 
		this.min = min;
		this.max = max;
		this.randomNum = null;
	}
	generate(){
		var minMax = this.getRange();
		return Math.floor(Math.random() * minMax.max) + minMax.min

	}
	getRange(){
		var minmax={
			min: this.min,
			max: this.max
		}
		return minmax
	}
	getNum(){
		return this.generate();
	}
}