/* Напишите функцию, которая в зависимости от переданного
в нее целочисленного аргумента count, будет выводить
слово «товар»
в нужной форме(«12 товаров», но «22 товара» и тд). */


function echo(text) {
    if (text % 10 === 1 && text % 100 !== 11) {
        console.log(`${text} tovar`);
    } else if (text % 10 >= 2 && 10 <= 4 && (text % 100 < 10 || text % 100 >= 20)) {
        console.log(`${text} tovara`)
    } else console.log(`${text} tovarov`)
    }

echo(15);
