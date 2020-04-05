/* Дана строка, которая содержит буквы и числа, например,
    "улица Ломоносова дом 9 корпус 1 офис 1120".
Необходимо создать массив, элементы которго будут
числа строки, например для данной строки массив будет вида
[9, 1, 1120] */

let single = "ylica lomonosova dom 8 korpus 1 office 1120".split(' ');
let arr = [];


for (i = 0; i < single.length; i++) {
    if (single[i] > 0) {
        arr.push(single[i]);
        console.log(arr);
    }
}
