const fetchUser = (username) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Getting the user...");
      resolve({ username });
    }, 2000);
  });
};
// fetchUser("Human").then((user) => console.log(`${user.username}`));

const fetchPhotos = (photos) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Getting the photos...");
      resolve(photos);
    }, 2000);
  });
};
// fetchPhotos(["Photo1, Photo2"]).then((photos) => console.log(`${photos}`));

const fetchPhotosDetails = (photo) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Getting the photo detail...");
      resolve(photo);
    }, 2000);
  });
};

fetchUser("Dorax").then((user) => {
  console.log(`${user.username}`);
  fetchPhotos(["Photo1", "Photo2"]).then((photos) => {
    console.log(`${photos}`);
    fetchPhotosDetails(photos[0]).then((details) => {
      console.log(`${details}`);
    });
  });
});
