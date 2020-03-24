/* Программа загадывает число от [1 до 7] (необходимо посмотреть про Math.random()).
И просит пользователя угадать это число до тех пор, пока пользователь не угадает или не введет 0 для выхода.
Реакция программы на пользовательский ввод:
    1. 0 - вывод в консоль "Выход" и завершение цикла
    2. пользователь угадал число - вывод в консоль "Вы угадали" и завершение цикла
    3. пользователь ввел число больше загадонного - вывод в консоль "Загаданное число меньше", просьба угадать число повторяется
    4. пользователь ввел число меньше загадонного - вывод в консоль "Загаданное число больше", просьба угадать число повторяется*/

let answer = Math.floor(Math.random()*7 + 1);
for (let i = 1; answer; i = 1) {
	let user_data = prompt("vvedite chislo");
	if (parseInt(user_data) === 0) {
		console.log("Quit");
		break;
	}
	if (parseInt(user_data) === 5) {
		console.log("Vi ygadali");
		break;
	}
	if (parseInt(user_data) > answer) {
		console.log("zagadannoe chislo menshe");
		continue;
	}
	if (parseInt(user_data) < answer) {
		console.log("zagadannoe chislo bolshe");
		continue;
	}
}