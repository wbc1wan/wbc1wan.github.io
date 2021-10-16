console.clear();


let factNo = document.getElementById("theNum");
factNo.addEventListener('input', function () {
    console.log(factNo.value)
})


function fact() {


    num = document.getElementById("theNum").value;

    if ("theNum" < 0) {
        alert("Input a valid number")
    } else {

        var i, num, f;
        f = 1;

        for (i = 1; i <= num; i++) {
            f = f * i;
            console.log(i)

        }
        i = i - 1;

        var text = "";
        while (i > 0) {
            text += i + "!";
            i--;

        }
        alert("factorial(" + num + ") = " + text + " = " + f)

        document.getElementById("res1").innerHTML = "For factorial(" + num + ") = " + text;

        document.getElementById("res").innerHTML = num + "! is equal to " + f;

    }
}

