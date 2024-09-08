function add(num1: number, num2: number, printResult: boolean) {
  if (printResult) return num1 + num2;
  else console.log(num1 + num2);
}

const a = 5;
const b = 2.8;
const printResult = false;
console.log(add(a, b, printResult));
