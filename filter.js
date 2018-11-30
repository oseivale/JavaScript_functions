// Practicing filter function on array, similar to map function

const myArray = [1,2,3,4];

const myEvenArray = myArray.filter((value, index, array) => {
	return value % 2 === 0;
});

console.log(myArray);
console.log(myEvenArray);

const myArray2 = [1, 23, 6, 45, 9, 32, 2, 11];

const myStringArray = myArray2.filter((value, index, array) => {
	return value % 2 != 0
})

console.log(myArray2)
console.log(myStringArray)

// Filtering an array for even numbers

var numbers = [1,2,3,4,5,6,7,8,9,10];

var evenNumbers = numbers.filter(function (num) {
	return num % 2 === 0;
});

console.log(evenNumbers)

var oddNumbers = numbers.filter(function(num){
	return num % 2 != 0;
});

console.log(oddNumbers)

// Using filter to perform a simple string search

var strings = ["hello", "Matt", "Mastodon", "Cat", "Dog"];

var filtered = strings.filter(function (str) {
	return str.includes("at");
});

console.log(strings);
console.log(filtered);

// Filtering names that have a "v"

var vNames = ["valerie", "victor", "laura", "catherine", "marie", "vanessa"]

var filteredNames = vNames.filter(function(name) {
	return name.includes("v");
});

console.log(vNames);
console.log(filteredNames);

// Filtering arrays of objects

var songs = [
{ id: 1, name: "No Tears Left to Cry", artist: "Ariana Grande"},
{ id: 2, name: "If Tonight Is My Last", artist: "Laura Izibor"},
{ id: 3, name: "You Don't Do It For My Anymore", artist: "Demi Lovato"},
{ id: 4, name: "Abena", artist: "Kuame Eugene"}

];

var mastodonSongs = songs.filter(function (song) {
	return song.artist.toLowerCase() === "ariana grande";
});

console.log(mastodonSongs);