console.log("Hello, World!");
let a = 5;
b = a;
b = 10;
console.log(a);
console.log(b);

const person = {
  firstName: "Emma",
  car: {
    brand: "BMW",
    color: "blue",
    wheels: 4,
  },
};
console.log(JSON.parse(JSON.stringify(person)));
// document.getElementByID, document.getElementsByTagName
// document.getElementsByClassName
// document.querySelectorAll('tag.className || .className || IdName ')

const btn = document.querySelector("button").addEventListener("click", (e) => {
  alert("Clicked");
  console.log(e.key === "enter");
});
