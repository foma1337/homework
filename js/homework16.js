/* —одать двумерный массив из 3 вложенных массивов, в каждом вложенном массиве
 * по 6 целых чисел. ¬ывести массив в консоль. ќпределить и вывести на экран индекс
 * строки с наибольшим по модулю произведением элементов. ≈сли таких строк несколько,
 * то вывести индекс первой встретившейс€ из них. */

let arr = [];
let sum;
let arrSum = [];

for (let i = 0; i < 3; i++) {
    arr[i] = [];
    sum = 1;
    for (let j = 0; j < 6; j++) {
        arr[i][j] = parseInt(random(-99, 99));
        sum *= arr[i][j];
    }
    arrSum[i] = sum;
}
let index, max = 0;
console.log(arrSum);
for (i = 0; i < arrSum.length; i++) {
    if (arrSum[i] > max) {
        index = i;
        max = arrSum[i];
    }
}

console.log(arr);
console.log('Ќаибольшее произведение найдено в строке с индексом = ' + index);

function random(min, max) {
    return Math.random() * (max - min) + min;
}