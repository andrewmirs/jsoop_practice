

class Account{
	constructor(){
		this.account = null;
	}
	add( amount ){
		return this.account += amount

	}
	remove( amount ){
		if ( amount > this.account){
			var withdrawn = this.account;
			this.account = 0;
			return withdrawn;
		} else {
			this.account -= amount;
			return amount;
		}
	}
	getAmount(){
		return this.account
	}
}