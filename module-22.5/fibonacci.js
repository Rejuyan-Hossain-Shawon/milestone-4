// function factorial(n) {
//     const fibo = [];
//     if (n == 1) {
//         return 1;
//     } else if (n == 0) {
//         return 0;
//     }
//     return n = factorial(n - 1) + factorial(n - 2);
// }




function factorial(n) {

    if (n == 1) {
        return [0, 1];
    } else if (n == 0) {
        return [0];
    }
    const fibo = factorial(n - 1);
    fibo[n] = fibo[n - 1] + fibo[n - 2];
    return fibo;
}
const result = factorial(3);
console.log(result);