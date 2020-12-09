// function tellFortune(numChild, jobTitle, partner, location){
//     var future = "You will be a" + jobTitle + "in" + location + "and married to " + partner + "with" + numChild + "kids";
// console.log(future);
// }

// tellFortune(3,"teacher", "lettuce", "denver" );
// tellFortune(2,"Engineer", "someone famous", "utah" );
// tellFortune(0,"student", "letnooneuce", "your moms basement" );


var fortunes = [
    "You will definitely do something",
    "It's best to learn a new skill. Now.",
    "You will fight a spider. He will win." ,
    "Don't ever glance over your shoulder walking at nights.",
    "Be wary of reflections",


];

function tellFortune(){
var randomNumber = Math.floor(Math.random() * fortunes.length );
console.log("Youre Future:" + randomNumber)


console.log("random number:" + randomNumber);


document.getElementById("btn").innerHTML = fortunes[randomNumber];

}
// var fortunes = new Array(
// math.rand(*5)
// )