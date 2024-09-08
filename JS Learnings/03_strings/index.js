// Guests
const guestList = "Our guests are: emma, jacob, isabella, ethan";
// 1. Get a length of the string. Store it in a variable called length
const length = guestList.length;
console.log(length); // 44г

// 2. Uppercase the entire string.
//Store the result in a variable called uppercasedGuestList.
const uppercasedGuestList = guestList.toUpperCase();
console.log(uppercasedGuestList); // OUR GUESTS ARE: EMMA, JACOB, ISABELLA, ETHAN

// 3. Check whether 'ETHAN' is on the uppercasedGuestList.
// I Store the answer in a variable called isEthanOnTheList.
// The data type of the variable must be a boolean.
let isEthanOnTheList = guestList.includes("ethan");
console.log(isEthanOnTheList); // true

// 4. Create a substring that only contains the following:
// 'EMMA, JACOB, ISABELLA, ETHAN'.
// Store the answer in a variable called substringGuests.
let substringGuests = guestList.substring(16, 45).toUpperCase();
console.log(substringGuests); // 'EMMA, JACOB, ISABELLA, ETHAN'

// 5. Out of the substring you just created,
//create an array of names of people that are on the list.
// Store that array in a variable called guests.
const guest = substringGuests.split(" ");
const guests = new Array();
for (let i = 0; i < guest.length; i++) {
  guests.push(guest[i]);
}
console.log(guests); // [ 'EMMA', 'JACOB', 'ISABELLA', 'ETHAN ' 7|
