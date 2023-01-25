const value = prompt('Сколько будет 7 + 15 или 7 - 15 ?');

let toPrint;

switch (value) {
	case '22':
	case '-8':
	case 'Я не робот':
		toPrint = 'Успех';
		break;
	default:
		toPrint = 'Вы робот!';
}

console.log(toPrint);
const a = 5;
switch(a) {
    case '5':
        console.log('1');
    case 5:
        console.log('2');
    case 4:
        console.log('2');
}