/* ������ ��������� ������ �� 3 ��������� ��������, � ������ ��������� �������
 * �� 6 ����� �����. ������� ������ � �������. ���������� � ������� �� ����� ������
 * ������ � ���������� �� ������ ������������� ���������. ���� ����� ����� ���������,
 * �� ������� ������ ������ ������������� �� ���. */

let arr = [];
let sum;
let arrSum = [];

for (let i = 0; i < 3; i++) {
    arr[i] = [];
    sum = 1;
    for (let j = 0; j < 6; j++) {
        arr[i][j] = parseInt(random(-99, 99));
        sum *= arr[i][j];
    }
    arrSum[i] = sum;
}
let index, max = 0;
console.log(arrSum);
for (i = 0; i < arrSum.length; i++) {
    if (arrSum[i] > max) {
        index = i;
        max = arrSum[i];
    }
}

console.log(arr);
console.log('���������� ������������ ������� � ������ � �������� = ' + index);

function random(min, max) {
    return Math.random() * (max - min) + min;
}