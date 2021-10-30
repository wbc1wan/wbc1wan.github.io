
let url = "https://api.sheety.co/25b6c0e528b49f106cc5ee4112e0ccd7/bookingApp/bookings";
let temp = "";
fetch(url)
    .then((response) => response.json())
    .then(anyvar => {
        let bookingNameList = document.getElementById("allUsers")
        let bookingIds = []

        // console.log(data)

        for (let i = 0; i < anyvar.bookings.length; i++) {
            let fn = anyvar.bookings[i].name
            ln = anyvar.bookings[i].email
            phone = anyvar.bookings[i].pax
            img = anyvar.bookings[i].remarks
            let gId = anyvar.bookings[i].id
            let btnId = "delete" + gId;


            temp = temp + fn + ln + phone + img
            let row = bookingNameList.insertRow(bookingNameList.rows.length)
            row.insertCell(0).innerHTML = gId
            row.insertCell(1).innerHTML = fn
            row.insertCell(2).innerHTML = ln
            row.insertCell(3).innerHTML = phone
            row.insertCell(4).innerHTML = img
            row.insertCell(5).innerHTML = "<button id='" + btnId + "' type='button' class='btn btn-danger'>Delete</button>"

            bookingIds.push(btnId)
        }

        for (let j = 0; j < bookingIds.length; j++) {
            let el = document.getElementById(bookingIds[j])
            el.addEventListener("click", function () {
                let theId = el.id.replace("delete", "")
                console.log(theId)
                var r = confirm("Are you sure to cancel your order?");
                if (r == true) {
                    DeleteBooking(theId)
                } else {
                    alert('Great, please look forward to your order!!');
                }

            })
        }

    });


function DeleteBooking(id) {
    let url = 'https://api.sheety.co/25b6c0e528b49f106cc5ee4112e0ccd7/bookingApp/bookings/' + id;
    fetch(url, {
        method: 'DELETE',
    })
        //.then((response) => response.json()) no need sbb server x return in json so delete this line
        .then(() => {
            alert("Your order id(" + id + ") has been deleted!")
            location.reload();
            return false;

        });
}


var refreshNowBtn = document.getElementById('reset');
if(refreshNowBtn){
  el.addEventListener('click',function () {
    console.log("Refresh/Reset Now Btn Clicked")
    Reset()
})
}

function Reset() {
    document.getElementById("search").value = "";
    location.reload();
    return false;
}



