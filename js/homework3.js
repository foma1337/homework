/* ��������� ���������� ����� �� [1 �� 7] (���������� ���������� ��� Math.random()).
� ������ ������������ ������� ��� ����� �� ��� ���, ���� ������������ �� ������� ��� �� ������ 0 ��� ������.
������� ��������� �� ���������������� ����:
    1. 0 - ����� � ������� "�����" � ���������� �����
    2. ������������ ������ ����� - ����� � ������� "�� �������" � ���������� �����
    3. ������������ ���� ����� ������ ����������� - ����� � ������� "���������� ����� ������", ������� ������� ����� �����������
    4. ������������ ���� ����� ������ ����������� - ����� � ������� "���������� ����� ������", ������� ������� ����� �����������*/

let answer = Math.floor(Math.random()*7 + 1);
for (let i = 1; answer; i = 1) {
	let user_data = prompt("vvedite chislo");
	if (parseInt(user_data) === 0) {
		console.log("Quit");
		break;
	}
	if (parseInt(user_data) === 5) {
		console.log("Vi ygadali");
		break;
	}
	if (parseInt(user_data) > answer) {
		console.log("zagadannoe chislo menshe");
		continue;
	}
	if (parseInt(user_data) < answer) {
		console.log("zagadannoe chislo bolshe");
		continue;
	}
}