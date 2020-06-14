var b=6;
var a=prompt("Guess the secret number")

if (a==b){
    document.write("Bingo! you guess it right")
}
else if(a==7 && a==5){
    document.write("you were close enough")
}

else{
    document.write("Sorry! You didn't guess it right")
}