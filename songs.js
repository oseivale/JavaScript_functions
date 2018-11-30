// Playing with an array of objects, mapping over them

// ES6 syntax
const songs = [
{ id: 1, name: "No Tears Left to Cry", artist: "Ariana Grande"},
{ id: 2, name: "If Tonight Is My Last", artist: "Laura Izibor"},
{ id: 3, name: "You Don't Do It For My Anymore", artist: "Demi Lovato"},
{ id: 4, name: "Abena", artist: "Kuame Eugene"}

];

const allSongNames = songs.map(song => {
	return song.name;
});

console.log(songs)
console.log(allSongNames);

// Another map over an array of objects

const groceryList = [
	{id: 1, name: "apples", price: 1.00},
	{id: 2, name: "bananas", price: 0.57},
	{id: 3, name: "cereal", price: 4.00},
	{id: 4, name: "chips", price: 2.00}
];

const allPrices = groceryList.map(item => {
	return item.price
})

console.log(groceryList);
console.log(allPrices);

const pricesWithTax = groceryList.map(item => {
	return item.price * 1.13
});

console.log(pricesWithTax);

// using an util function with map to lower case all song names

// ES6
const mySongFunc = song => {
	return song.name.toLowerCase();
};

const lowerCaseSongs = songs.map(mySongFunc);

console.log(lowerCaseSongs);

// Transforming the given array and adding and removing properties from each object

var mapped = songs.map(function(song) {
	

	var newSong = _.omit(song, "artist");

	return Object.assign(newSong, {
		scrobbleCount: 0,
		spotifyUrl: "let's just imagine these properties make sense for now",
	});
});

// ES6



console.log(mapped)