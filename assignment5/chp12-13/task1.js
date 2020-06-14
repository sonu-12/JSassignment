var a=prompt("press any key")


var n = a.charCodeAt(a.length-1);

if (n>=65 && n<=90)
{

    document.write("the key you've pressed is captial letter")
}

else if (n>=97 && n<=122)
{

    document.write("the key you've pressed is is small letter")
}

else{
    document.write("the key you've pressed is numeric or special character")
}