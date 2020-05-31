/* Написать функцию generateTable, которая принимает на вход 
 * массив объектов и создает таблицу.При нажатии на заголовок ячейки
 * должна происходить сортировка по соответствующему столбцу: */

let goods = [
    {
        title: "Пианино",
        price: 3000,
        count: 25
    },
    {
        title: "Гитара",
        price: 1200,
        count: 40
    },
    {
        title: "Барабаны",
        price: 2700,
        count: 12
    },
    {
        title: "Флейта",
        price: 900,
        count: 50
    },
    {
        title: "Арфа",
        price: 3400,
        count: 5
    }
];

function generateTable(array) {
    let tableArea = document.getElementById("users-block");
    let table = document.createElement("table");
    table.setAttribute("id", "myTable");
    table.setAttribute("border", 1);

    let row = table.insertRow(0);
    for (let i in array[0]) {
        row.insertCell(-1).innerText = i;
        
    }
    for (let j in array) {
        row = table.insertRow(-1);
        for (let i in array[j])
            row.insertCell(-1).innerText = array[j][i];
        row.setAttribute("data-sort", "");
    }
        tableArea.append(table);
}

generateTable(goods);

let sort = document.querySelector('tbody');


console.log(sort);

let replacedNode = sort.replaceChild(sort.children[1], sort.children[5]);
sort.appendChild(replacedNode);
