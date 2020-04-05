/* Найдите самое длинное слово в предложении,
при условии,
что в предложении все слова разной длины.*/

let answer = "The quick brown fox jumped over the lazy dog".split(' ');
let poisk = 0;

for (i = 0; i < answer.length; i++) {
    if (answer[i].length > poisk) {
        poisk = answer[i].length;
    }
}
console.log(poisk);
