/* ������������ ������ � ���������� ����������� �����
������� 3, ������� ����������� � ���������� n.
���� ������������ ��� �� ���������� �����,
�� ��������� ������ ������� ������������ ��������� ����.
������� ������ �� n ��������� ����� ����� �� �������[0; n]
� ������� ��� �� �����.������� ������ ������ ������
�� ������ ��������� ������� �������, ���� ��� ��� ����,
� ������� ��� � �������. */


let user = prompt("vvedite chislo");
while (user < 3) {
	user = prompt("povtorite");
}
if (user > 3) {
	console.log(user);
}

let arr1 = [];
let arr2 = [];
for (let i = 0; i < user; i++) {
	let rand = Math.floor(Math.random() * user+1);
	arr1[i] = rand;
}
console.log(arr1);
for (i = 0; i < arr1.length; i++) {
	if (arr1[i] % 2) {
		arr2.push(arr1[i]);
	}
}
console.log(arr2);