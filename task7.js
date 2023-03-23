const tasks = ['Задача 1'];

function addToEnd(arr, item) {
	arr.push(item);
};

function deleteByName(arr, name) {
	const index = arr.indexOf(name);
	if (index === -1) {
		console.log('Такого элемента нет! Удаление невозможно!')
		return;
	};
	return arr.splice(arr.indexOf(name), 1);
};
	

function moveToStart(arr, name) {

	if (!deleteByName(arr, name)){
		console.log('Такого элемента нет! Перемещение невозможно!')
		return;
	};
	arr.unshift(name);
};


console.log(tasks);
addToEnd(tasks, 'new');
addToEnd(tasks, 'new2');
addToEnd(tasks, 'new3');
console.log(tasks);
deleteByName(tasks, 'new2');
console.log(tasks);
moveToStart(tasks, 'new3');
console.log(tasks);
moveToStart(tasks, 'new2');
moveToStart(tasks, 'Задача 1');
console.log(tasks);
