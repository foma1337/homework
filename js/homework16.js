const someArr =
    [5, 6, 12, -90, 9, 0]; // 6 элементов

console.log(someArr);

let sum = 0;

for (let i = 0; i < someArr.length; i++) {
    sum = sum + someArr[i];
}

console.log(sum)