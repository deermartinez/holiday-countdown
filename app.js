console.log("Henlo");


// alert("My name is Dest"); //gives a pop up with information to user//
// confirm("Are you at least 18?");  //Asks a yes or no//
// prompt("Are you....?"); //allows user to type//

// this will get the time//
// var used to store data/information that we can use again--diff data types//  
// var name="Dest";  //string data type//
// var age=20;         //number-doesnt need quotations//
// var favFood="HotPot";       //string//
// var isHungry=true;          //boolean=true/false//
// var dayOfWeek=["Monday", "Tuesday", "Wednesday", "Thursday"];           //array list of items//

// console.log(name+age+favFood);
// alert('Welcome' + ' ' + name + '' + age + '' + favFood);
// console.log(dayOfWeek[3]);
var currentTime = new Date();
console.log(currentTime);

var currentDate = new Date();
console.log(currentDate);

var time = document.getElementById("time");
time.innerHTML = currentTime.toLocaleTimeString();




// this will get the date//
var date = document.getElementById("date");
date.innerHTML = currentTime.toLocaleDateString();


// this will get the day of the week//
var daysOfTheWeek = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
var dow = document.getElementById("day");
dow.innerHTML = daysOfTheWeek[currentTime.getDay()];




var quote = "Home is where the heart is";

console.log(quote.strike());

var yes = true;
var no = false;
if (yes) {
    console.log
}


// Write an expression that uses at least 3 different arithmetic operators.

// The expression should equal 42.

// Hint: +, -, *, /, and % are possible arithmetic operators

// Your Code:


console.log(5 * 4 * 2 + 2);


// Create a string with the name of your favorite food. The first letter of the string should be capitalized.

// Your Code:

var favFood = "Hot Pot because I am fat";
console.log(favFood);

// Create an array called egFamily and add "Julia", "James", and your name to the array. Then, print the udaciFamily to the console using console.log.

// Your Code:

var egFamily = ["Julia", "James", "Kevin"];
console.log(egFamily)

var egFamily2 = new Array("Julia", "James", "Kevin", "Destynee");
console.log(egFamily2)


// Fix the right side expression so it evaluates to true.
// "ALL Strings are CrEaTeD equal" == "All STRINGS are CrEaTED Equal"

// Your Code:

"ALL Strings are CrEaTeD equal" != "All STRINGS are CrEaTED Equal"


// Use this equation and the variables fahrenheit and celsius to print the Fahrenheit equivalent of 12°C.
//  Use the Celsius-to-Fahrenheit formula to set the fahrenheit varible:
//F = C x 1.8 + 32
//Log the fahrenheit variable to the console.

// Your Code:
var c = 12
var fToC = c * 1.8 + 32

console.log(fToC);

// Build a string using concatenation by combining the lines from this famous haiku poem by Yosa Buson.

// Blowing from the west
// Fallen leaves gather
// In the east.
// Each string should be printed on its own line.

// Hint: You will need to use special characters to produce the following output. For a refresher, feel free to review the previous Escaping Strings topic in this lesson.

// Your Code:

var haiku = "Blowing from the west" + "\nFallen leaves gather" + "\nIn the east." + "\nEach string should be printed on its own line.";
// var place= document.getElementById("testing");
// place.innerHTML = haiku.toUpperCase();
console.log(haiku);



// Define two variables called thingOne and thingTwo and assign them values. 
// Print the values of both variables in one console.log statement using concatenation. For example,

// red blue
// where "red" is the value of thingOne and "blue" is the value of thingTwo. 
// Don't forget to use semicolon at the end of each statement!

// Your Code:

var thingOne = "red";
var thingTwo = "blue";
console.log(thingOne + thingTwo);


// Create a variable called fullName and assign it your full name as a string.

// Your Code:

var fullName = "Destynee Martinez";
console.log(fullName.big());

// Create a variable called bill and assign it the result of 10.25 + 3.99 + 7.15 (don't perform the 
// calculation yourself, let JavaScript do it!). Next, create a variable called tip and assign it the 
// result of multiplying bill by a 15% tip rate. Finally, add the bill and tip together and store it into 
// a variable called total.

// Print the total to the JavaScript console.

// Hint: 15% in decimal form is written as 0.15_._

// TIP: To print out the total with a dollar sign ( $ ) use string concatenation. 
// To round total up by two decimal points use the toFixed() method. To use toFixed() pass it 
// the number of decimal points you want to use. For example, if total equals 3.9860, then total.toFixed(2) 
// would return 3.99.

// Your Code:

var bill = 10.25 + 7.15 + 3.99
var tip = bill * .15;
var total = bill + tip;
console.log(total.toFixed(2));


 // "Hi, my name is Julia. I love cats. In my spare time, I like to play video games."
// "Hi, my name is James. I love baseball. In my spare time, I like to read."
// Declare and assign values to three variables for each part of the sentence that changes 
// (firstName, interest, and hobby).

// Use your variables and string concatenation to create your own awesome message and store 
// it in an awesomeMessage variable. Finally, print your awesome message to the JavaScript console.

// Your Code:

var myName = "Julia";
var love = "cats";
var time = "play video games";
var bio = "Hi, my name is " + myName + ". I love " + love + ". In my spare time, I like to " + time + "."
console.log(bio);


//Create 2 variables one called big and one called small. Set the strings to each: "I am Big like a elepant!" 
// "I am Small like a mouse!". Use string methods to make the 
//'small' variable lowercase and the 'big' variable capital.
//console.log out the results

var big = "I am Big like an elephant!";
var small = "I am small like a mouse";

console.log(big.toUpperCase());
console.log(small.toLowerCase());












