let elLocate = document.getElementById("btnLocate")
elLocate.addEventListener("click",function(position){
    
    //check browser support x geo
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function(position){

            let elLat = document.getElementById("lat")
            let elLong = document.getElementById("long")

            //change value tulisan putih tu
            elLat.innerHTML = "Latitide : " + position.coords.latitude
            elLong.innerHTML = "Longitude : " + position.coords.longitude 

        })
    }else{
        alert("Geolocation is not supported!")
    }
})