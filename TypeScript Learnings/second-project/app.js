function add(num1, num2, printResult) {
    if (printResult)
        return num1 + num2;
    else
        console.log(num1 + num2);
}
var a = 5;
var b = 2.8;
var printResult = false;
console.log(add(a, b, printResult));
