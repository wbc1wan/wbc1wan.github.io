console.clear()

function  minMaxAvg(textBox1, textBox2, textBox3){
    var x=document.getElementById(textBox1).value;
    var y=document.getElementById(textBox2).value;
    var z=document.getElementById(textBox3).value;

    var sum=0;
    input=[Number(x),Number(y),Number(z)];

    if (x == null || x == "", y == null || y == "", z == null || z == "") {
        alert("Please Fill All Required Field");
        return false;
      }

      else if(isNaN(x||y||z)){
        alert("Insert Digits Only (0-9)");
      }

      else{

        for (let i = 0; i < input.length; i++) {        
            sum += input[i];     
        }
    
        let avg = sum / input.length;      
        console.log("Average Number is : " + avg)

        console.log("Maximum Number is &nbsp: "+Math.max(...input))
        console.log("Smallest Number is : "+Math.min(...input))
        console.log("For List Number : "+input)
        

        document.getElementById("display_message").innerHTML = "<br> Maximum Number is &nbsp: "+Math.max(...input);
        document.getElementById("display_message2").innerHTML = "<br> Smallest Number is : "+Math.min(...input);
        document.getElementById("display_message3").innerHTML = "<br> Total Number is &nbsp &nbsp: "+sum;
        document.getElementById("display_message4").innerHTML = "<br> Average Number is &nbsp: "+avg.toFixed(2);
      }
}

function validateNumber(e) {
    var specialKeys = new Array();  
    specialKeys.push(8);
    var keyCode = e.which ? e.which : e.keyCode  
    var ret = ((keyCode >= 48 && keyCode <= 57) || specialKeys.indexOf(keyCode) != -1);  
    document.getElementById("error").style.display = ret ? "none" : "inline";  
    return ret;  
}

function clearInput()  
{
    document.getElementById('textIn1').value = "";
    document.getElementById('textIn2').value = "";
    document.getElementById('textIn3').value = "";
    document.getElementById("x").innerHTML = "";
} 

        var specialKeys = new Array();  
        specialKeys.push(8);  
        function IsNumeric(e) 
        {  
            var keyCode = e.which ? e.which : e.keyCode  
            var ret = ((keyCode >= 48 && keyCode <= 57) || specialKeys.indexOf(keyCode) != -1);  
            document.getElementById("error").style.display = ret ? "none" : "inline";  
            return ret;  
        } 


