let refreshNowBtn = document.getElementById("refreshNow")
refreshNowBtn.addEventListener("click", function () {
    console.log("refreshNowBtn Clicked")
    GetBooking()
})


function GetBooking() {
    //open sheety and copy get
    let url = 'https://api.sheety.co/e605e885f5f282dff0485448c92b7ff3/bookingApp/bookings';
    fetch(url)
        .then((response) => response.json())
        .then(json => {
            // Do something with the data
            console.log(json.bookings);
            // below is add edited 
            let bookingNameList = document.getElementById("bookingNameList")

            //delete all rows in the table
            for(let k = bookingNameList.rows.length - 1; k > 0; k--){
                bookingNameList.deleteRow(k)
            }

            //load all rows from Sheety API
            for(let i = 0; i <json.bookings.length; i++){
                let gName = json.bookings[i].name;
                let gEmail = json.bookings[i].email;
                let gPax = json.bookings[i].pax;
                let gRemarks = json.bookings[i].remarks;
                let gId = json.bookings[i].id;

                let row = bookingNameList.insertRow(bookingNameList.rows.length)
                row.insertCell(0).innerHTML = gId
                row.insertCell(1).innerHTML = gName
                row.insertCell(2).innerHTML = gEmail
                row.insertCell(3).innerHTML = gPax
                row.insertCell(4).innerHTML = gRemarks
                row.insertCell(5).innerHTML = ""
            }
        });
}