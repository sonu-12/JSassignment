var p1=1000;
var p2= 1500;
var a=prompt("quantity of product 1 you want")
var q1=parseInt(a)
var b=prompt("quantity of product 2 you want")
var q2=parseInt(b)
var shipcharges=200;

var total= (p1*q1)+(p2*q2)+shipcharges;


document.write("<h3>Shopping cart </h3>")

document.write("price of product 1 is " +p1)
document.write("<br>")
document.write("price of product 2 is " +p2)
document.write("<br>")
document.write("quantity of product 1 is " +q1)
document.write("<br>")
document.write("quantity of product 2 is " +q2)
document.write("<br>")
document.write("shipping charges " +shipcharges)
document.write("<br>")
document.write("total charges " +total)
document.write("<br>")