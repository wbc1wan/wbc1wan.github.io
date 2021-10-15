console.clear();


let factNo = document.getElementById("theNum");
factNo.addEventListener('input', function () {
    console.log(factNo.value)
})

function fact() {
    var i, num, f;
    f = 1;
    num = document.getElementById("theNum").value;
    for (i = 1; i <= num; i++) {
        f = f * i;
        console.log(i)
        
    }
    i = i - 1;
    
    var text = "";
  var k = 0;
  while (k < num) {
    text +=   k +"!";
    k++;
  }
    document.getElementById("res1").innerHTML = text;
  
    document.getElementById("res").innerHTML = "The result factorial for the number " + i + " is: " + f + "!";
   
}
    
