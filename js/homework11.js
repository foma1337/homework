// ��������� ������ �� n ��������� ��������� ������� 
// � �������� ������������, ����������� � ������� ��������.
// ������ �������(n) ������ ������������



let dlina = prompt("vvedite dliny massiva");
let arr = [];

let total = 0;
for (i = 0; i < dlina; i++) {
    let rand = (Math.round(Math.random() * 100));
    arr[i] = rand;
    total = (total + arr[i]) / dlina;
}
console.log(arr);
console.log(Math.min.apply(null, arr));
console.log(Math.max.apply(null, arr));
console.log(total);
