const balance = 900;
const bonusBalance = 90;
const isBanned = false;
const isExist = false;
const isSelling = true;

let canBuy = (balance > 1000 || bonusBalance > 100)
&& !isBanned && !isExist && isSelling;

toPrint = canBuy ? 'Вы можете купить игру!' : 'Вы не можете купить игру!';

console.log(toPrint);
