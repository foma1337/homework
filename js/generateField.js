/* Написать функцию generateField(n) по генерации игрового поля размером n x n.
Значение n не может быть меньше 3.
Для 3х ячеек поля(для выбора конкретной ячейки использовать random) 
добавить атрибут prise.Значения атрибута prise устанавливаются из массива.
Для 1й ячейки значение атрибута prise="cat",
для 2й ячейки значение атрибута prise="book",
для 3й ячейки значение атрибута prise="car" */

let getPrice = () => {
    return {
    cat: "Кот",
    book: "Книга",
    car: "Машина",
    }
}

function generateField(n) {
    let field = document.getElementById("price");
    let present1 = 0;
    let present2 = 0;
    let present3 = 0;
    while (true) {
        present1 = Math.floor(Math.random() * (n));
        present2 = Math.floor(Math.random() * (n));
        present3 = Math.floor(Math.random() * (n));
        if ((present1 !== present2) && (present1 !== present3) && (present2 !== present3)) break;
    }
    for (let i = 0; i < n; i++) {
        cell = document.createElement("div");
        if (i === present1) cell.setAttribute("data-prize", "cat");
        if (i === present2) cell.setAttribute("data-prize", "book");
        if (i === present3) cell.setAttribute("data-prize", "car");
        cell.classList.add("cell");
        field.append(cell);
    }
 }

generateField(15);

/* Продолжение задачи lesson 6: пользователю дается какое - то
количество попыток, чтобы найти приз, если ему удается
найти спрятанный приз за указанное количество попыток,
то отобразить пользователю его приз, если не удалось,
то вывести информацию об этом.После каждой попытки
отображать, сколько попыток осталось.Если пользователь
получил приз или закончились попытки, он не может
продолжить игру(удалить обработчик события). */

let x = prompt('сыграем в игру? у тебя 5 попыток');

price = document.getElementById("price");
price.addEventListener("click", showPrice);

function showPrice(event) {
    let clickElem = event.target;
    let present = clickElem.dataset.prize;
    console.log("present= " + present);
    if (present) {
        clickElem.innerText = getPrice()[present];
        clickElem.classList.add("present");
        this.removeEventListener("click", showPrice);
    }

}

