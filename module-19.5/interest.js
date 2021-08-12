function calculation(pricipal, rate, time) {
    const total = ((pricipal * rate * time) + pricipal).toFixed(3);
    return total;
}

const result = calculation(1222, .03, 5);
console.log(result);