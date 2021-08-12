const numbers = [12, 33, 32, 36, 23, 24, 34, 76, 36, 23, 24, 35, 42, 24, 56, 46, 78, 54, 12, 33];
const unique = [];
for (const item of numbers) {
    if (unique.indexOf(item) == -1) {
        unique.push(item);
    }
}

console.log(numbers + "\n" + unique);