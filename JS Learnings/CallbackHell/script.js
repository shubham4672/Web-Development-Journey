const fetchUser = (username, callback) => {
  setTimeout(() => {
    console.log("Fetching the user name");
    callback({ username });
  }, 2000);
};

const fetchPhotos = (username, callback) => {
  setTimeout(() => {
    console.log("Fetching the photos");
    callback(["Photo1", "Photo2"]);
  }, 2000);
};

const fetchPhotosDetails = (photos, callback) => {
  setTimeout(() => {
    console.log(`The photos details are: `);
    callback(`${photos}...`);
  });
};

fetchUser("Java", (user) => {
  console.log(`user is ${user.username}`);
  fetchPhotos(user.username, (userPhotos) => {
    console.log(`Your photos are ${userPhotos}`);
    fetchPhotosDetails(userPhotos[0], (details) => {
      console.log(`${details}`);
    });
  });
});
