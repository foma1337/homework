/*
Задача 2
Даны 2 переменные title и countToCart (значения переменных вводит пользователь через prompt).
Необходимо найти товар с указанным названием (title):
если количество позволяет, то уменьшить количество товара в объекте goods на countToCart,
если не позволяет, то вывести информацию об этом в консоль
 */


let tittle = prompt("Введите название товара");
let countToCart = prompt("Введите желаемое кол-во");

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

title = title.trim();
countToCart = countToCart.trim();



for (let i in goods) {
    if (title === goods[i].title) {
        if (countToCart <= goods[i].count) {
            goods[i].count -= countToCart;
        }
        else console.log('Кол-во товара на складе меньше желаемого');
    }
}
console.log(goods);