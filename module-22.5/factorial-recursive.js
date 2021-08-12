function factorial(num) {
    if (num == 1) {
        return 1;
    }

    const result = num * factorial(num - 1);
    return result;
}

const result = factorial(6);
console.log(result);