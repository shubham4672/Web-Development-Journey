"use strict";
const birthYear = 2003;
function age(birthYear) {
  return 2024 - birthYear;
}
// console.log(typeof age);

const age2 = function (birthYear) {
  return 2024 - birthYear;
};
// console.log(typeof age2);

const age3 = (birthYear) => {
  return 2024 - birthYear;
};
// console.log(typeof age3);

const employeesData = [
  { name: "Sebastian", overtime: 5 },
  { name: "Cardi Vee", overtime: 10 },
  { name: "George Lopez", overtime: 12 },
];

const requiredAnswer = employeesData.filter((data) => data.overtime >= 7);
// console.log(requiredAnswer);
const employeeNames = requiredAnswer.map((data) => data.name);
employeeNames.forEach((emp) => {
  // console.log(`${emp} gets a reward`);
});
// console.log(employeeNames);
let fruits = ["banana", "aaple", "apple", "cherry"];
fruits.sort();
// console.log(fruits);

const groceryList = [29, 12, 45, 35, 87, 110];
let sum = 0;
groceryList.forEach((groceryEl) => {
  sum += groceryEl;
});
// console.log(sum);

const nums = [1, 2, 3, 4, 5, 6];
const total = nums.reduce((acc, val) => {
  return acc + val;
}, 0);
console.log(total);
