// TODO:: каждый элемент вложенного массива больше 0


let arr = [
    [-90, 12, -12],
    [3, 7, 9],
    [-90, 12, -12]
];

let zero = (num, i, nums) => num > 0;

arr.forEach(function (num, i, nums) {
    nums[i] = num.filter(zero);
    console.log(arr);
});


// TODO:: каждый элемент вложенного массива увеличить на 2

let arr = [
    [-90, 12, -12],
    [3, 7, 9],
    [-90, 12, -12]
];
for (let item of arr) {
    console.log(item);
}

let newArr = [];

zero = (num, j, nums) => {
    // console.log(`индекс ${index}`};
    for (let i = 0; i < nums[j].length; i++) {
        nums[j][i] = num[i] + 2;
    }
    return num;
};
console.log('Получилось');
newArr = arr.map(zero);
console.log(newArr);



let arr = [
    {
        name: "qwe",
        age: 19
    },
    {
        name: "qwe",
        age: 45
    },
    {
        name: "qwe",
        age: 16
    }
];


let privet = (num, i, nums) => num.age > 18;
if (arr.every(privet)) console.log('vsem > 18');
else console.log('ne vsem > 18');
