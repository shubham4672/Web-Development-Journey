const myPromise = new Promise((resolve, reject) => {
  res.addEventListener("click", () => {
    resolve("resolved");
  });
  rej.addEventListener("click", () => {
    reject("rejected");
  });
});
myPromise
  .then((msg) => {
    console.log(msg);
  })
  .catch((err) => {
    console.log(err);
  });

export { myPromise };
