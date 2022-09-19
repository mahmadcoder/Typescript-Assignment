// Question 9 ;
var num = 2;
for (var i = 0; i <= 10; i++) {
    var result = num * i;
    console.log("".concat(num, " * ").concat(i, " = ").concat(result));
}
// Question 10;
var count = 123456;
console.log("The length of any number is ", count, "=", "".concat(count).length);
// Question 11 ;
var a = 123456;
var firstDigit = a;
var lastDigit = a % 10;
while (firstDigit >= 10) {
    firstDigit = Math.floor(firstDigit / 10);
}
console.log("First Digit is =" + firstDigit);
console.log("Last Digit is =" + lastDigit);
// Question 12
var b = 1234;
var digit1;
var digit2 = b % 10;
var len = b.toString().length - 1;
digit1 = b / Math.pow(10, len);
var sum = Math.floor(digit1 + digit2);
console.log("Sum of First and last digit is = ", sum);
// Question 13
var count = 1234;
var total = 0;
while (count > 0) {
    var rem = count % 10;
    total = total + rem;
    /* Dividing the number by 10. */
    count = Math.floor(count / 10);
}
console.log(total);
// Question 14
function getProduct(n) {
    var product = 1;
    while (n != 0) {
        product *= n % 10;
        n = Math.floor(n / 10);
    }
    return product;
}
console.log("The product is =", getProduct(123));
// Question 16 (swap element)
function swap(a, b) {
    return [b, a];
}
;
console.log("Swap", swap(9, 4));
