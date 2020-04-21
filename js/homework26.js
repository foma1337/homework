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

function tabel(mas) {
    let someArr = [];
    let tabel = [];
    for (let i = 0; i < mas.length; i++)
        someArr[i] = mas[i].city[0];
    someArr.sort();
    for (let i = 0; i < someArr.length; i++)
        for (let j = 0; j < mas.length; j++)
            if (mas[j].city[0] === someArr[i]) {
                tabel[i] = mas[j];
            }
    return tabel;
}
tabel(users);
console.log(users);