// «аполните массив на n элементов случайным числами 
// и выведете максимальное, минимальное и среднее значение.
// –азмер массива(n) вводит пользователь



let dlina = prompt("vvedite dliny massiva");
let arr = [];

let total = 0;
for (i = 0; i < dlina; i++) {
    let rand = (Math.round(Math.random() * 100));
    arr[i] = rand;
    total = (total + arr[i]) / dlina;
}
console.log(arr);
console.log(Math.min.apply(null, arr));
console.log(Math.max.apply(null, arr));
console.log(total);
