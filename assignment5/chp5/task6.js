var a=prompt("enter temperature")
var unit= prompt("celcius or  Fahrenheit")
var temp=parseInt(a)
 
if(unit=='f')
{

    var c= (temp-32)*5/9;

    document.write(temp +" Fahrenheit is " +c +" celcius")
}

else if(unit=='c')
{

    var f= (temp*9/5)+32;

    document.write(temp +" celcius is " +f +" Fahrenheit")
}

else{
    document.write("error")
}