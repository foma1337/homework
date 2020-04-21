/*
Даны переменные from и to, значения переменных вводит пользователь через prompt.
Пользователь должен вводить числа.
Но если пользователь вводит не числа, его нужно попросить повторить ввод, пользователь может ввести exit для выхода.
На основе объекта goods создать новый объект с товарами,
цены которых лежат в диапазоне от значения from до значения to*/

let goods = {
    piano: {
        title: "Пианино",
        price: 3000,
        count: 25
    },
    guitar: {
     title: "Гитара",
        price: 1200,
        count: 40
    },
    drum: {
        title: "Барабаны",
        price: 2700,
        count: 12
    },
    flute: {
        title: "Флейта",
        price: 900,
        count: 50
    },
    harp: {
        title: "Арфа",
        price: 3400,
        count: 5
    }
};

let from = prompt("введите значение 'от'; для выхода введите 'exit'");
from = from.trim();
while ((isNaN(Number(from)) && from !== 'exit') || !from.length) {
    from = prompt("Введите верное значение (число); для выхода введите 'exit'");
    from = from.trim();
}

let to = prompt("введите значение 'до'; для выхода введите 'exit'");
to = to.trim();
while ((isNaN(Number(to)) && to !== 'exit') || !to.length) {
    to = prompt("Введите верное значение (число); для выхода введите 'exit'");
    to = to.trim();
}

from = Number(from);
to = Number(to);
let filter = {};
for (let i in goods) {
    if (goods[i].price >= from && goods[i].price <= to) {
        filter[i] = goods[i];
    }
}
console.log(filter);