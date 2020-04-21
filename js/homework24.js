/* �������� �������, ������� ��������� �� ���� 3 ��������
 * (usersArr, from � to), ��� usersArr - ������ �������������,
 * from - ����������� ������� � to - ������������ �������
 * (���� to �� �����, ������������ ������� �� ���������).
 * ������� ���������� ������ ������������� �� ������� usersArr, 
 * ������� ������� ��������� � ��������� [from; to) */

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

function fullPack(userArr, from, to = 100) {
    let Log = [];
    for (let el of users) {
        if (el.age >= from && el.age < to)
            Log.push(el.Log);
    }
    return Log;
}

let to = 50;
let from = 18;
let Log = fullPack(users, from, to);
for (let el of Log)
    console.log(`${el} - prohod`);



