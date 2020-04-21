/*
* 2. Написать функцию проверки на спам. Функция принимает на вход текст и спам - слова. Определить по 5ти бальной шкале,
*  насколько часто в тексте встречается спам. Результат вернуть из функции*/
//спамом считаем слово spam в любом регистре

let count = 0; i = 0;

let text = 'buy drug drug drug drug drug drug now';
let spam = 'drug';

console.log(text);
x = getSpam(text);
console.log(`getSpam = ${x}`);

function getSpam(text) {
    let newStr = text.toUpperCase();
    while (1) {
        let y = newStr.indexOf(spam, i);
        if (y === -1) break;
        count++;
        i = y + 1;
    }
    let p = (count / text.split(" ").length) <= 0.2 ? 1 : (count / text.split(" ").length) <= 0.4 ?
        2 : (count / text.split(" ").length) <= 0.6 ? 3 : (count / text.split(" ").length) <= 0.8 ? 4 : 5;
    return p;
}

