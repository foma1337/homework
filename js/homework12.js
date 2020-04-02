/* Пользователь вводит с клавиатуры натуральное число
большее 3, которое сохраняется в переменную n.
Если пользователь ввёл не подходящее число,
то программа должна просить пользователя повторить ввод.
Создать массив из n случайных целых чисел из отрезка[0; n]
и вывести его на экран.Создать второй массив только
из чётных элементов первого массива, если они там есть,
и вывести его в консоль. */


let user = prompt("vvedite chislo");
while (user < 3) {
	user = prompt("povtorite");
}
if (user > 3) {
	console.log(user);
}

let arr1 = [];
let arr2 = [];
for (let i = 0; i < user; i++) {
	let rand = Math.floor(Math.random() * user+1);
	arr1[i] = rand;
}
console.log(arr1);
for (i = 0; i < arr1.length; i++) {
	if (arr1[i] % 2) {
		arr2.push(arr1[i]);
	}
}
console.log(arr2);