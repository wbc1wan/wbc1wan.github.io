//calculate location
function calculateDistances(lat,long){
    let dpulze = haversine(lat,long,2.922561,101.650965) //2.922561,101.650965 ==> depluze
    let pyramid = haversine(lat,long,3.073065,101.607787)
    let klcc = haversine(lat,long,3.158761,101.714524)
    
    return [dpulze,pyramid,klcc]
}

let elLocate = document.getElementById("locate")
elLocate.addEventListener("click", function(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function(position){
            let elLat = document.getElementById("lat")
            let elLong = document.getElementById("long")
            let elDpulze = document.getElementById("dpulze")
            let elKlcc = document.getElementById("klcc")
            let elSunway = document.getElementById("sunway")

            let userLat = position.coords.latitude
            let userLong = position.coords.longitude

            let distances = calculateDistances(userLat,userLong)

            elLat.innerHTML = "Your latitude is : " + userLat
            elLong.innerHTML = "Your longitude is : " + userLong
            elDpulze.innerHTML = "Distance to Dpulze,Cyberjaya is : " + distances[0] + "km"
            elKlcc.innerHTML = "Distance to KLCC is is : " + distances[2] + "km"
            elSunway.innerHTML = "Distance to Sunway Pyramid is is : " + distances[1] + "km"
            //distance to beza ikut return[] position tu

        })

    }else{
        alert("Geolocation is not supported")
    }
})