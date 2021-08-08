function startFan() {
    console.log("walk to the switch");
    console.log("hit the switch");
}
startFan();

// singara function
function singara(taka) {
    unitPrice = 5;
    quantity = taka / unitPrice;
    return quantity;
}

console.log(singara(200));
// addig two variable function
function add(num1, num2) {
    var result = num1 + num2;
    return result;
}
// subtract
function sub(num1, num2) {
    var result = num1 - num2;
    return result;
}
// multiplication
function multiply(num1, num2) {
    var result = num1 * num2;
    return result;
}
// division
function division(num1, num2) {
    var result = num1 / num2;
    return result;
}


console.log(add(122, 4));
console.log(sub(122, 4));
console.log(multiply(122, 4));
console.log(division(122, 4));