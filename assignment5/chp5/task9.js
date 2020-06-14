var a=prompt("how much dollars you  have?")
var b=prompt("how much ryals you  have?")
var dollars=parseInt(a)
var ryals=parseInt(b)

var pkr=(dollars*104.84)+(ryals*28);

document.write("<h3>currency in PKR </h3>")

document.write("total currency " +pkr +"PKR")