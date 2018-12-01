
class Calculator{
	constructor(){
		this.op = null;
		this.num1 = null;
		this.num2 = null;
	}
	loadOperator( op ){
		if ( op === "+" || "-" || "*" || "/"){
			this.op = op;
			return true;
		} 
		return false;
	}
	loadNumber( num ){
		if (typeof num === 'number' && (this.num1 === null || this.num2 === null)){
				if (this.num1 === null){
					this.num1 = num;
					return 1;
				} else {
					this.num2 = num
					return 2;
				}
			}
			return false;
		}

	calculate(){
		if (this.op === "+"){
			var result = this.num1 + this.num2
		} else if (this.op === "-"){
			var result = this.num1 - this.num2
		} else if (this.op === "*"){
			var result = this.num1 * this.num2
		} else if (this.op === "/"){
			var result = this.num1 / this.num2
		}
		this.num1 = null;
		this.op = null;
		this.num2 = null;
		return result
	}
}