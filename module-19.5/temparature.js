function fahrenheit(fahrenheit) {
    const celcius = ((fahrenheit - 32) * (5 / 9)).toFixed(4);
    return celcius;
}

function celcius(celcius) {
    const farenheit = (celcius * (9 / 5) + 32).toFixed(4);
    return farenheit;
}

const result = celcius(45);
console.log(result);