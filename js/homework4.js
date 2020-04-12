let arr = [1, 4, 5, 6, 7, 2, 9, 3, 7, 4, 5,2,9,4,7];

for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === 7) {
            console.log(i, j);
        }
    }
}