
let factNo = document.getElementById("theNum");
factNo.addEventListener('input', function () {
    console.log(factNo.value)
})


function fact() {
    num = document.getElementById("theNum").value;

    if (num < 0) {
        alert("Input a valid number")
    } else {
        console.clear();
        var i, num, totalFact;
        totalFact = 1;

        for (i = 1; i <= num; i++) {
            totalFact = totalFact * i;
            console.log("fact result :" + totalFact)

        }
        i = i - 1;

        var text = "";
        while (i > 1) {
            if (i == 1) {
                text += i + "  ";
            } else {
                text += i + " x ";
            }
            i--
        }
        alert("factorial(" + num + ") = " + text + "1 = " + totalFact)

        document.getElementById("res1").innerHTML = "For factorial(" + num + ") = " + text + "1";

        document.getElementById("res").innerHTML = num + "! is equal to " + totalFact;

    }
}

