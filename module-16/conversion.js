var price = '23.34';
var price2 = '54.34';
// string to int convert

var sum = parseInt(price) + parseInt(price2);
console.log(sum);

// string to float conversion

var result = parseFloat(price) + parseFloat(price2);
console.log(result);
// boolean
var coming = true;

// determine of data types

console.log(typeof price, typeof result, typeof coming);
// fixed fractional number

price = 0.10004;
price2 = 0.2;
var newSum = price + price2;
// fixed type will be string we must convert it to number again

console.log(newSum.toFixed(3));
console.log(parseFloat(newSum.toFixed(5)));
console.log(17 % 5);