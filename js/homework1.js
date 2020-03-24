/* Задача на if else
Дана переменная sum (сумма покупки).  В зависимости от значения переменной sum рассчитать персональную скидку и 
вывести в консоль сумму к оплате с учетом скидки:
    сумма до 1000 - скидка не предусмотрена 
    сумма от 1000 до 2000 - скидка 5%
    сумма от 2000 до 3000 - скидка 10%
    сумма от 3000 - скидка 10% + подарок */


let purchase = 2500;
if (purchase <= 1000) {
    console.log("skidka ne predusmotrena");
}
if (purchase >= 1000 && purchase <= 2000) {
    console.log("skidka 5%");
}
if (purchase >= 2000 && purchase <= 3000) {
    console.log("skidka 10%");
}
if (purchase >= 3000){
    console.log("skidka 10%+podarok");
}


