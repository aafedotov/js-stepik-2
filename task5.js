function toPower(num, power) {
	const result = num ** power;
	return result;
};

console.log(toPower(2, 3));

const toPowerArrow = (num, power) => num ** power;

console.log(toPowerArrow(2, 3));
