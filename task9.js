const words = ['!', 'JS', 'люблю', 'Я'];

let result = '';

for (i = words.length - 1; i >= 0; i--) {
	result += words[i] + ' ';
};

console.log(result);
