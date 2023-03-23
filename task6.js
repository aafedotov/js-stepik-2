const macBookPrice = 2000;

function creditAmmount(age, isEmployed) {
	switch (true) {
		case age > 24 && isEmployed:
			return 500;
		case age > 24:
			return 100;
		default:
			return 0;
	};
}

function canBuy(age, isEmployed, money, price) {
	return (money >= price) || 
	(money + creditAmmount(age, isEmployed)) >= price;
}

console.log(canBuy(10, false, 2000, macBookPrice));
console.log(canBuy(25, false, 1900, macBookPrice));
console.log(canBuy(25, true, 1500, macBookPrice));
console.log(canBuy(25, false, 1850, macBookPrice));
console.log(canBuy(22, true, 1900, macBookPrice));
console.log('vasa' + undefined);