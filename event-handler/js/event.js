function transformUppercase(_val){ //function expextng value
    return _val.toUpperCase();
}

let elNamaPengguna = document.getElementById('namaPengguna'); //ingt getElementById
elNamaPengguna.addEventListener("keyup", function(){
    elNamaPengguna.value = transformUppercase(elNamaPengguna.value)
})