var fruit = ["apple", "banana", "grape"];

console.log(fruit);

for(var i = 0; i<fruit.length; i++){
	console.log(fruit[i]);
}

console.log(fruit[2]);


var presidents = ['Kennedy', 'FDR', 'Clinton'];

console.log('My first choice is ' + presidents[0]);
console.log('My second choice is ' + presidents[1]);
console.log('My third choice is ' + presidents[2]);


for(var i = 0; i< presidents.length; i++){
	var choiceNum = i+1
	var choiceSuffix;
	if (i === 0){
		choiceSuffix = "st";
	}
	else if (i === 1){
		choiceSuffix = "nd";
	}
	else if (i === 2){
		choiceSuffix = "rd";
	}
	else{
		choiceSuffix = "th";
	}
	console.log('My ' + choiceNum + choiceSuffix + ' choice is ' + presidents[i]);
}

// OBJECT

var aboutMe = {
	hometown: 'Santo Domingo',
	hair: 'brown',
	isAwesome: 'true',
	job: {
		name: 'Google',
		address: 'NY',
	}
}

aboutMe.gender = 'male';

console.log(aboutMe);
console.log(aboutMe.hometown);
console.log(aboutMe.isAwesome);
console.log(aboutMe.job.name);


//Array of Object


var myCats = [	//ARRAY FORMAT
	{name: 'Liz', age: 18},
	{name: 'Dae', age: 1},
]

console.log(myCats);

for(var i = 0; i < myCats.length; i++){
	var cat = myCats[i];
	console.log('Cat name is ' + cat.name);
}

var myCat = {name: 'Mit', age: 18} //OBJECT FORMAT


function printCat(cat){
	console.log('Cat name is ' + cat.name + ' age is ' + cat.age);
}

printCat(myCat);



// Recipe Card

var favoriteRecipe = {
	title: 'Taco',
	serves: 2,
	ingredients: ['corn', 'tomatoes', 'lettuce']
}

console.log(favoriteRecipe.title);
console.log('serves: ' + favoriteRecipe.serves);
console.log('Ingredients:');
for (var i = 0; i < favoriteRecipe.ingredients.length; i++){
	console.log(favoriteRecipe.ingredients[i]);
}


// Reading List

var myBooks = [
	{title: 'Hobbit', author: 'Tolkien', alreadyRead: true},
	{title: 'Harry Potter', author: 'Rowling', alreadyRead: true},
	{title: 'Game of Thrones', author: 'Martin', alreadyRead: false}
]

console.log(myBooks);

for (var i = 0; i < myBooks.length; i++){
	var myBook = myBooks[i];
	console.log(myBook.title + ' by ' + myBook.author);
	var fullBook = myBook.title + ' by ' + myBook.author
	if (myBook.alreadyRead === true){
		console.log('You already read ' + fullBook);
	}
	else{
		console.log('You still need to read ' + fullBook);
	}
}


// Movie Database

var myMovie = {
	title: 'LOTR',
	duration: 360,
	stars: ['McKellen', 'Wood', 'Bloom']
}

function movieInfo(myMovie){
	var starString = "";
	for (var i = 0; i < myMovie.stars.length; i++){
		starString = starString + myMovie.stars[i] + ', ';
	}
	console.log(myMovie.title + ' lasts for ' + myMovie.duration + ' minutes. Stars: ' + starString);

	// console.log(myMovie.title + ' lasts for ' + myMovie.duration + ' minutes. Stars: ' + myMovie.stars[0] + ', ' + myMovie.stars[1] + ', ' + myMovie.stars[2]);
}

movieInfo(myMovie);


// Constructor

function Person(name, age){
	this.name = name;
	this.age = age;
}

var nicole = new Person('Nicole', 100);
console.log(nicole.age);

var jenni = new Person('Jenni', 50);
console.log(jenni);






