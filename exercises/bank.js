

class Bank{
	constructor( name ){
		this.name = name;
		this.allAccounts = {};
	}
	makeAccount( accountNumber ){
		if (this.checkForAccount(accountNumber) == true){
			return false;
		} 
		this.allAccounts[accountNumber] =  new Account();
		return this.allAccounts[accountNumber]
	}
	checkForAccount( accountNumber ){
		if (this.allAccounts[accountNumber]){
			return true;
		}
		return false;
	}
	removeAccount( accountNumber ){
		if (this.checkForAccount(accountNumber) == false){
			return `account ${accountNumber} does not exist`;
		} else if ( this.allAccounts[accountNumber].getAmount() > 0 ) {
			return `account is not empty`;
		} else {
			delete this.allAccounts[accountNumber];
			return `account ${accountNumber} deleted`;
		}

	}
	deposit( accountNumber, amount ){
		if (this.checkForAccount(accountNumber) == false){
			return `account does not exist`;
		}
		this.allAccounts[accountNumber].add(amount);
		return `account ${accountNumber} now has ${this.allAccounts[accountNumber].getAmount()}`;
	}
	withdraw( accountNumber, amount ){
		if (this.checkForAccount(accountNumber) == false){
			return `account does not exist`;
		}
		var withdrawn = this.allAccounts[accountNumber].remove(amount);
		return `removed ${withdrawn} from account ${accountNumber}. It now has ${this.allAccounts[accountNumber].getAmount()}`;
	}
}