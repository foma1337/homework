/* ƒана переменна€ month (название мес€ца), в зависимости от названи€ мес€ца вывести в косоль:
    декабрь / €нварь / февраль  -> console.log("зима")
    март / апрель / май  -> console.log("весна")
    июнь / июль / август  -> console.log("лето")
    сент€брь / окр€брь / но€брь  -> console.log("осень")
 */

let mouth = "any";
switch(mouth) {
    case "december":
    case "january":
    case "february":
    console.log("winter");
    break;
    case "march":
    case "april":
    case "may":
    console.log("spring");
    break;
    case "june":
    case "july":
    case "august":
    console.log("summer");
    break;
    case "september":
    case "october":
    case "november":
    console.log("autumn");
        break;
    default:
        console.log("retry please");
}