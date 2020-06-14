var a=prompt("subject 1 marks")
var sub1=parseInt(a)
var b=prompt("subject 2 marks")
var sub2=parseInt(b)
var c=prompt("subject 3 marks")
var sub3=parseInt(c)

var total=300;
var ob_tot=sub1+sub2+sub3;
var per=(ob_tot/total)*100;

document.write("<h4> Mark sheet </h4>")
document.write("<br>")
document.write("total marks:  " +total)
document.write("<br>")
document.write("obtained marks:  " +ob_tot)
document.write("<br>")
document.write("percentage:  " +per+"%")
document.write("<br>")
document.write("<br>")

if(per >= 80 && per <=100){

document.write("Remarks:    Excellent")

}

else if(per >= 70 && per <80){

    document.write("Remarks:    Good")
    
    }

    else if(per >= 60 && per <70){

        document.write("Remarks:    You need to improve")
        
        }

        else if(per < 60){

            document.write("Remarks:    Fail")
            
            }


