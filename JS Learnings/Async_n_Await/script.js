// Async functions always returns a promise
const fetchUser = async (username) => {
  setTimeout(() => {
    const user = await(username);
    console.log(user);
  }, 2000);
};

fetchUser("Mia");
