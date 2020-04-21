

/* Написать функцию generateField(n) по генерации игрового поля размером n x n.
Значение n не может быть меньше 3.
Для 3х ячеек поля(для выбора конкретной ячейки использовать random) 
добавить атрибут prise.Значения атрибута prise устанавливаются из массива.
Для 1й ячейки значение атрибута prise="cat",
для 2й ячейки значение атрибута prise="book",
для 3й ячейки значение атрибута prise="car" */

let Obj = {
    cat: "Кот",
    book: "Книга",
    car: "Машина",
    generateField: function (n) {
        let price = ['cat', 'book', 'car'];
        let a = Math.floor(Math.random() * (n * n));
        let b = Math.floor(Math.random() * (n * n));
        let c = Math.floor(Math.random() * (n * n));
        let j = 0;

        let title;

        console.log(a, b, c);

        let still = document.getElementById('express');
        still.style.cssText = `grid-template-columns: repeat(${n},1fr); grid-template-rows: repeat(${n},1fr);`;

        for (let i = 0; i < n * n; i++) {
            let div = document.createElement('div');
            div.classList.add('card');

            switch (i) {

                case a:
                    div.setAttribute('price', `${price[j]}`);
                    title = document.createElement('h2');
                    title.innerText = this[price[j]];
                    j++;
                    div.append(title);
                    break;
                case b:
                    div.setAttribute('price', `${price[j]}`);
                    title = document.createElement('h2');
                    title.innerText = this[price[j]];
                    div.append(title);
                    j++;
                    break;
                case c:
                    div.setAttribute('price', `${price[j]}`);
                    title = document.createElement('h2');
                    title.innerText = this[price[j]];
                    div.append(title);
                    j++;
            }
            still.append(div);
        }

    }
};
let n = 6;
Obj.generateField(n);