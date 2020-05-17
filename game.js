
var start;
var stop;
do{start = parseInt(window.prompt("Enter the start point for range of nymbers"))}
while(isNaN(start));
do{stop = parseInt(window.prompt("Enter the stop number for range"))} while(isNaN(stop)&&(start<stop));

var correctnumber = Math.floor(Math.random() * (stop - start) + start);
var won = false;
var limit = 5;
var guessnumber;
var arrayofguesses = [];

for (i=1; i <= limit; i++) {
    do{
        guessnumber = parseInt(prompt("Guess a number"));
    } while(isNaN(guessnumber) || isPreviousGuess(guessnumber));  
if (guessnumber == correctnumber) 
{document.write("Your guess is correct. This number is " + correctnumber);
won = true;
break;
}
else {
    arrayofguesses[i] = guessnumber;
    alert(" You are incorrect. \n You have guessed: " + arrayofguesses.toString() + "Try again.\n Number of tries remained: "+(limit-i))
if (guessnumber>correctnumber) {alert("Your guess is too high")}
else {alert("You guess is too low.")};    
}
}
    

if (!won) {
    document.write("Game is over. The right number is "+ correctnumber)
}
function isPreviousGuess(){
    for (t=0; i <arrayofguesses.length; t++){
        if (arrayofguesses[t] == guessnumber){
          
            return true;
        }
    }
    return false

}
document.write(" Your guesses are: "+arrayofguesses);
