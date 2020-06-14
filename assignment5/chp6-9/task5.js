var a=prompt("enter number for table")
var i=0;
var b=0;
if(a=='undefined')
{
  for(i=1; i++; i<=10)
  
 b=5*i;

document.write("5 x "+i+" = "+b)
document.write("<br>")

}

else if(!isNaN(a)){

    for(i=1; i++; i<=10)
  
    b=a*i;
   
   document.write(a+" x "+i+" = "+b)
   document.write("<br>")
   

}

else{

    document.write("error")
}