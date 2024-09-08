const fetchUser = (username, callback) => {
  setTimeout(() => {
    console.log("Now we have the user.");
    callback({ username });
  }, 2000);
};

fetchUser("John", (user) => {
  console.log(`Your user has a name of ${user.username}`);
});

const fetchPhotos = (username, callback) => {
  setTimeout(() => {
    console.log(`${username} photos are: `);
    callback(["Photo1", "Photo2"]);
  }, 2000);
};

fetchPhotos("John", (photos) => {
  console.log(`${photos}`);
});

const fetchPhotosDetails = (user, callback) => {
  setTimeout(() => {
    callback(`${user}`);
  }, 2000);
};

fetchPhotosDetails("John", (details) => {
  console.log(`Here are the photo details: ${details}`);
});
