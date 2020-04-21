/* Напишите функцию, которая принимает на вход 2 обязательных аргумета
 * (usersArr, favouriteLang), где usersArr - массив пользователей, 
 * favouriteLang - предпочитаемый язык программирования (агрумент 
 * передается строкой). Функция возвращает логины пользователей из 
 * массива usersArr, 
 * у которых в списке предпочитаемых языков есть favouriteLang */

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

function searchLogin(userArr, favouriteLangs) {
    let logins = [];
    for (let el of userArr) {
        if (el.favouriteLangs.includes(favouriteLangs)) {
            logins.push(el.login);
        }
    }
    return logins;
    }
let favouriteLangs = 'scala';
let logins = searchLogin(users, favouriteLangs);
for (let el of logins) {
    console.log(`этот язык любимый у пользователя ${el}`)
}
