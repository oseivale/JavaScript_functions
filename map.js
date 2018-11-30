// Practicing the map function on an array

const myArray = [1,2,3,4];

const myArrayTimestwo = myArray.map((value, index, array) => {
	return value * 2;
});

console.log(myArray); //[1,2,3,4];
console.log(myArrayTimestwo); // [2,4,6,8];

// Another map function

const valArray = ['val', 'child', 'blue', 'hello'];

const valArrayChar = valArray.map((value, index, array) => {
	return value.length;
});

console.log(valArray);
console.log(valArrayChar);

// Another map function

const words = ['hello', 'goodbye', 'love', 'movies'];

const wordsUpcase = words.map((value, index, array) => {
	return value.toUpperCase(words);
});

console.log(words);
console.log(wordsUpcase);