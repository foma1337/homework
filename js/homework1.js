/* ������ �� if else
���� ���������� sum (����� �������).  � ����������� �� �������� ���������� sum ���������� ������������ ������ � 
������� � ������� ����� � ������ � ������ ������:
    ����� �� 1000 - ������ �� ������������� 
    ����� �� 1000 �� 2000 - ������ 5%
    ����� �� 2000 �� 3000 - ������ 10%
    ����� �� 3000 - ������ 10% + ������� */


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


