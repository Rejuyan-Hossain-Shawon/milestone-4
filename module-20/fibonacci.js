/* const fibo = [0, 1];
for (let i = 2; i < 15; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
}

console.log(fibo); */

// function with Error handling fibonacci series

function fibonacciSeries(nth) {

    if (typeof nth != 'number') {
        return "PLease Enter the Number type input";
    } else if (nth < 2) {
        return "please enter the input value greater than 2 Default value is 0,1 in fibonacci series";

    }
    const fibo = [0, 1];
    for (let i = 2; i < nth; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }

    return fibo;
}

const result = fibonacciSeries(7);
console.log(result);