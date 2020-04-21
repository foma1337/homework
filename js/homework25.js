/* �������� �������, ������� ��������� �� ���� 2 ������������ ��������
 * (usersArr, favouriteLang), ��� usersArr - ������ �������������, 
 * favouriteLang - �������������� ���� ���������������� (�������� 
 * ���������� �������). ������� ���������� ������ ������������� �� 
 * ������� usersArr, 
 * � ������� � ������ �������������� ������ ���� favouriteLang */

let users = [
    {
        login: "qwe",
        age: 34,
        city: "������",
        favouriteLangs: ["php", "js"]
    },
    {
        login: "asd",
        age: 23,
        city: "������",
        favouriteLangs: ["python", "javascript"]
    },
    {
        login: "rty56",
        age: 58,
        city: "�����",
        favouriteLangs: ["java", "c"]
    },
    {
        login: "rty56",
        age: 58,
        city: "�����",
        favouriteLangs: ["java", "scala"]
    },
    {
        login: "ght",
        age: 45,
        city: "�����������",
        favouriteLangs: ["php", "ruby"]
    },
];

function searchLogin(userArr, favouriteLangs) {
    let logins = [];
    for (let el of userArr) {
        if (el.favouriteLangs.includes(favouriteLangs)) {
            logins.push(el.login);
        }
    }
    return logins;
    }
let favouriteLangs = 'scala';
let logins = searchLogin(users, favouriteLangs);
for (let el of logins) {
    console.log(`���� ���� ������� � ������������ ${el}`)
}
