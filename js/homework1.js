/* ������ �� if else
���� ���������� sum (����� �������).  � ����������� �� �������� ���������� sum ���������� ������������ ������ � 
������� � ������� ����� � ������ � ������ ������:
    ����� �� 1000 - ������ �� ������������� 
    ����� �� 1000 �� 2000 - ������ 5%
    ����� �� 2000 �� 3000 - ������ 10%
    ����� �� 3000 - ������ 10% + ������� */


let purchase = 2500;

if (purchase <= 1000) {
    let money = purchase;
    console.log(purchase + " - skidka ne predusmotrena");
} 
else if (purchase >= 1000 && purchase <= 2000) {
    let money = purchase - (purchase * 5 / 100); 
    console.log(money + " - skidka 5%");
}
else if (purchase >= 2000 && purchase <= 3000) {
    let money = purchase -(purchase * 10 / 100); 
    console.log(money + " - skidka 10%");
}
else if (purchase >= 3000) {
    let money = purchase - (purchase * 10 / 100); 
    console.log(money + " - skidka 10%+podarok");
}


