function transformUppercase(_val){ //function expextng value
    return _val.toUpperCase();
}

// DOM event listener
let elNamaPengguna = document.getElementById('namaPengguna'); //ingt getElementById
elNamaPengguna.addEventListener("keyup", function(){
    elNamaPengguna.value = transformUppercase(elNamaPengguna.value)
}) //attaching event listener 1st type

function  checkPassword(){
    //fetch element first
    let elKataLaluan = document.getElementById("kataLaluan")
    let pass_val = elKataLaluan.value

    //check length pswd
    if(pass_val.length>5){
        alert("Password check...OK!")
    }else {
        alert("Password too short ma!")
    }
}

//tradional DOM event handler
let elKl = document.getElementById("kataLaluan")
elKl.onblur = checkPassword //onblur bila offfocus bila tekan kt luar pswd area tu dia check