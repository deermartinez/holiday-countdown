console.log("Henlo");


// alert("My name is Dest"); //gives a pop up with information to user//
// confirm("Are you at least 18?");  //Asks a yes or no//
// prompt("Are you....?"); //allows user to type//

// this will get the time//
// var used to store data/information that we can use again--diff data types//  
 var name="Dest";  //string data type//
 var age=20;         //number-doesnt need quotations//
var favFood="HotPot";       //string//
var isHungry=true;          //boolean=true/false//
var dayOfWeek=["Monday", "Tuesday", "Wednesday", "Thursday"];           //array list of items//

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




//Counting down to
var countDownDate = new Date("Dec 31, 2021 12:00:00").getTime();

//seconds
var x = setInterval(function() {

//today date and time
var now = new Date().getTime();
  
// distance between now and the count down date
var distance = countDownDate - now;
  
// days, hours, minutes and seconds
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  

  
// Text when countdown complete
if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "HAPPY";
    }else{
// result in the element with id="demo"
 document.getElementById("demo").innerHTML = days + " days " + hours + " hours "
+ minutes + " minutes " + seconds + " seconds. " + "Not yet!";
    }
}, 1000);

var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);



