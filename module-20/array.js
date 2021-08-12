function sum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

const result = sum([23, 5435, 56, 456, 7, 567]);
console.log("total sum", result);