/* �������� ������ �� 11 ��������� ����� ����� �� 
�������[-1; 1], �������� ������ � �������.���������� 
����� ������� ����������� � ������� ���� ����� � ��������
�� ���� � �������. ���� ��������� ��������� �����������
���������� ���������� ���, �� �� �������� ������. */

let arr = [];
let x = [];
for (let i = 0; i < 11; i++) {
    arr[i] = Math.floor(Math.random() * (1 - (-1) + 1) + (-1));
for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++)
            if (arr[i] == arr[j]);
    }
    console.log(arr)

}
console.log(arr); 