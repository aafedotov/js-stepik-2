const userName = 'Вася';
const deposit = 12000;
const rate = 0.07;
const period = 24;
const cost = 13500;

// сложный процент с ежемесячной капитализацией (/12)
let result = ((1 + rate / 12) ** period) * deposit; 

let canBuy = result >= cost;
let toPrint;
if (canBuy) {
	toPrint = `${userName} сможет купить дом. \n`;
	let remains = (result - cost).toFixed(2);
	toPrint += `Остаток на вкладе: ${remains}`
} else {
	toPrint = `${userName} не сможет купить дом.`;
}

console.log(toPrint);

const age = 19;
toPrint = age > 17 ? "Совершеннолетний": "Несовершеннолетний";
console.log(toPrint);