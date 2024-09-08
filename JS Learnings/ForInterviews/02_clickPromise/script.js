import { myPromise } from "./backUp";
const rej = document.querySelector("#reject");
const res = document.querySelector("#resolve");

new Promise((resolve, reject) => {
  res.addEventListener("click", () => {
    resolve("resolved");
  });
  rej.addEventListener("click", () => {
    reject("rejected");
  });
})
  .then((msg) => {
    console.log(msg);
  })
  .catch((err) => {
    console.log(err);
  });
