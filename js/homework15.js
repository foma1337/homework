/* ���� ������, ������� �������� ����� � �����, ��������,
    "����� ���������� ��� 9 ������ 1 ���� 1120".
���������� ������� ������, �������� ������� �����
����� ������, �������� ��� ������ ������ ������ ����� ����
[9, 1, 1120] */

let single = "ylica lomonosova dom 8 korpus 1 office 1120".split(' ');
let arr = [];


for (i = 0; i < single.length; i++) {
    if (single[i] > 0) {
        arr.push(single[i]);
        console.log(arr);
    }
}
