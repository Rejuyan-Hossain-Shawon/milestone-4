function smallest(numbers) {
    let small = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < small) {
            small = numbers[i];
        }
    }
    return small;
}

const n = [24, 5346, -5, 34566, 8, -134, 765, 8];

const result = smallest(n);
console.log(result);