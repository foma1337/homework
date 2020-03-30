/* Найти все вхождения подстроки в строку.
Строку и подстроку вводит пользователь(через prompt).
Не забывайте про метод trim и тд
*/

let stroka = prompt("vvedite stroku");
let podstroka = prompt("vvedite podstroku");
let pos = 0;

while (true) {
    let foundPos = stroka.indexOf(podstroka, pos);
    if (foundPos == -1) break;
    console.log('naideno: ${foundPos}');
    pos = foundPos + 1;
}