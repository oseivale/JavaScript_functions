// The reduce function takes an array and reduces it into a single value
// e.g. with an array of numbers, you can easily find the avg of all values

const myArray = [1,2,3,4];

const sum = myArray.reduce((acc, currValue, currIndex, array) => {
	return acc + currValue;
}, 0); // --> this is the accumulator value ( initialized at 0)

const avg = sum / myArray.length;

console.log(avg);

// acc = accumulator --> accumulates all returned values
// acc (accumulator is initilazed typically at 0, but you can set this value to whatever you like)
// currValue = current value
// currIndex = current Index
// array = whole array

// Using reduce function to form a word

const myLetters = ["h", "e", "l", "l", "o"];

const hello = myLetters.reduce((acc, currValue, currIndex, array) => {
	return acc + currValue
}, ""); // --> initialized acc at empty string, so that letters can be added in at each iteration

console.log(hello)

// Using reduce function, given an array --> finding the sum

const numbers = [2,10,11,5,16];

// ES6
const sum2 = numbers.reduce((acc, currValue) => {
	return acc + currValue;
}, 0);

console.log(sum2);

//using the same setup to find the product

const prod = numbers.reduce((acc, currValue) => {
	return acc * currValue;
}, 1);

console.log(prod);

// Build an object from an array

const songs = [
{ id: 1, name: "No Tears Left to Cry", artist: "Ariana Grande"},
{ id: 2, name: "If Tonight Is My Last", artist: "Laura Izibor"},
{ id: 3, name: "You Don't Do It For My Anymore", artist: "Demi Lovato"},
{ id: 4, name: "Abena", artist: "Kuame Eugene"}

];

var obj = songs.reduce((acc, currValue) => {
	var artist = currValue.artist;
	var artistCount = acc[artist] ? acc[artist] + 1 : 1;

	var newObj = {};
	newObj[artist] = artistCount;

	return Object.assign(acc, newObj);
	
}, {});

console.log(obj);

// Turn an array of arrays into a single one

const mult = [songs, [{id: 112, name: "Chop Suey", artist: "System of a Down"}]];

// ES6
const flatMult = mult.reduce((acc, currValue) => {
	return acc.concat(currValue);
}, []);

console.log(flatMult);