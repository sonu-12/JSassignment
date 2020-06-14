var num1=prompt("enter fisrt number")
var a=parseInt(num1)
var num2=prompt("enter second number")
var b=parseInt(num2)
var func=prompt("+ , - , / , * ??")
var ans;

if(func=='+'){

ans=a+b;

document.write(a+" "+func+" "+b +" = "+ans)
}

else if(func=='-'){

    ans=a-b;
    
    document.write(a+" "+func+" "+b +" = "+ans)
    }

    else if(func=='*'){

        ans=a*b;
        
        document.write(a+" "+func+" "+b +" = "+ans)
        }

        else if(func=='/'){

            ans=a/b;
            
            document.write(a+" "+func+" "+b +" = "+ans)
            }

            else{
                document.write("error")
            }