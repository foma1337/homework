
/*
* 1. Дано натуральное число N. Вычислите сумму его цифр, используя рекурсию 
 * (строки, массивы и циклы использовать запрещено
* */

let N = 302;

function summa(num) {
    if (num <= 0) return 0;
    return Math.floor(num % 10) + summa(Math.floor(num / 10));
}

let x = summa(N);
console.log(`summa = ${x} (N=${N})`);