const operations = [1000, -700, 300, -500, 10000];

const balance = 100;

function getBalance(balance, operations) {
	for (i of operations) {
		balance += i;
		if (balance < 0) {
			return false;
		};
	};
	return balance;
};

function getAverage(operations) {
	let expAverage = [0, 0];
	let incAverage = [0, 0];
	for (i of operations) {
		if (i > 0) {
			incAverage[0] += i;
			incAverage[1] += 1;
			continue;
		};
		expAverage[0] += -i;
		expAverage[1] += 1;
	};

	return [expAverage[0] / expAverage[1],
			incAverage[0] / incAverage[1]];

}

let averages = getAverage(operations);
console.log(`Итоговый баланс: ${getBalance(balance, operations)}`);
console.log(`Средний доход: ${averages[1].toFixed(2)} \n
Средний расход: ${averages[0].toFixed(2)}`);
