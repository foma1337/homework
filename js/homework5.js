/* ������ ��������� ������ �� 3 ��������� ��������, � ������ ��������� ������� �� 6 ����� �����
������ ��������� �������:
��������,
    let someArr = [
        [5, 6, 12, -90, 9, 0], // 6 ���������
        [34, 67, 45, -40, 10, 98], // 6 ���������
        [-77, 88, 99, -99, 1, 3], // 6 ���������
    ];
��� ����������(random) ������� �� �������[-99; 99].
������� ������ � �������.
����� ������� c ������������ ���������(������� ��� ������ � ��������) */

let someArr = [
    [5, 6, 12, -90, 9, 0], // 6 ���������
    [34, 67, 45, -40, 10, 98], // 6 ���������
    [-77, 88, 99, -99, 1, 3], // 6 ���������
];

for (let i = 0; i < someArr.length; i++) {
    for (let j = 0; j < someArr.length;j++) 
        console.log(Math.max.apply(null, someArr[i], [j]));
}
