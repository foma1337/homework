/*
Задача 3
Дана переменная author (значение переменной вводит пользователь через prompt).
На основе массива books создать новый массив, в который войдут все книги указанного автора,
если такого автора нет, вывести информацию в консоль
*/

let books = [
    { author: 'Пушкин', title: 'Пир во время чумы' },
    { author: 'Толстой', title: 'Война и мир' },
    { author: 'Лермонтов', title: 'Тамань' },
    { author: 'Гончаров', title: 'Обломов' },
    { author: 'Лермонтов', title: 'Герой Нашего Времени' },
    { author: 'Пушкин', title: 'Руслан и Людмила' },
    { author: 'Лермонтов', title: 'И скучно, и грустно' },

];

let author = prompt('Автор');
author = author.trim();
let arr = [];
let i = 0;
let l = false;
for (let el of books) {
    if (el.author === author) {
        arr[i] = el;
        i++;
        l = true;
    }
}

if (l) { console.log(arr);}
else console.log('Книг данного автора нет')