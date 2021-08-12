// series with only output number

// function fibonacci(n) {
//     if (n == 1) {
//         return 1;
//     }
//     if (n == 0) {
//         return 0;
//     }
//     return fibonacci(n - 1) + fibonacci(n - 2);
// }

// const result = fibonacci(6);
// console.log(result);


// fibonacci series with the array number
function fibonacciSeries(n) {
    if (n == 1) {
        return [0, 1];
    }
    if (n == 0) {
        return [0];
    }

    const fibo = fibonacciSeries(n - 1);
    fibo[n] = fibo[n - 1] + fibo[n - 2];
    return fibo;
}

const resut = fibonacciSeries(6);
console.log(resut);