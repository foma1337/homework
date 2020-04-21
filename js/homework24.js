/* Напишите функцию, которая принимает на вход 3 аргумета
 * (usersArr, from и to), где usersArr - массив пользователей,
 * from - минимальный возраст и to - максимальный возраст
 * (если to не задан, максимальный возраст не ограничен).
 * Функция возвращает логины пользователей из массива usersArr, 
 * возраст которых находится в диапазоне [from; to) */

let users = [
    {
        login: "qwe",
        age: 34,
        city: "Москва",
        favouriteLangs: ["php", "js"]
    },
    {
        login: "asd",
        age: 23,
        city: "Москва",
        favouriteLangs: ["python", "javascript"]
    },
    {
        login: "rty56",
        age: 58,
        city: "Тверь",
        favouriteLangs: ["java", "c"]
    },
    {
        login: "rty56",
        age: 58,
        city: "Тверь",
        favouriteLangs: ["java", "scala"]
    },
    {
        login: "ght",
        age: 45,
        city: "Владивосток",
        favouriteLangs: ["php", "ruby"]
    },
];

function fullPack(userArr, from, to = 100) {
    let Log = [];
    for (let el of users) {
        if (el.age >= from && el.age < to)
            Log.push(el.Log);
    }
    return Log;
}

let to = 50;
let from = 18;
let Log = fullPack(users, from, to);
for (let el of Log)
    console.log(`${el} - prohod`);



