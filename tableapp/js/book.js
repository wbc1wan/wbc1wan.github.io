let bookNowBtn = document.getElementById("bookNow")
bookNowBtn.addEventListener("click", function () {
    let userName = document.getElementById("userName")
    let userNameVal = userName.value

    let userEmail = document.getElementById("userEmail")
    let userEmailVal = userEmail.value

    let userPax = document.getElementById("userPax")
    let userPaxVal = userPax.value

    let userRemarks = document.getElementById("userRemarks")
    let userRemarksVal = userRemarks.value

    if(userEmailVal==""){
        alert("Please complete all the field to submit")
    }else if(userEmailVal==""){
        alert("Please complete all the field to submit")
    }else if(userRemarksVal==""){
        alert("Please complete all the field to submit")
    }else{

    BookNow(userNameVal, userEmailVal, userPaxVal, userRemarksVal)
    //make sure name fx same as bwh ma
   
}
})

function BookNow(userName, userEmail, userPax, userRemarks) {
    // console.log(userName)
    // console.log(userEmail)
    // console.log(userPax)
    // console.log(userRemarks)


    let url = 'https://api.sheety.co/25b6c0e528b49f106cc5ee4112e0ccd7/bookingApp/bookings';
    let body = {
        booking: {
            name: userName,
            email: userEmail,
            pax: userPax,
            remarks: userRemarks
        }
    }
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then((response) => response.json())
        .then(json => {
            // Do something with object
            console.log(json.booking);
            alert(json.booking.name + " your order has been taken!")
            location.reload();
            return false;

        });
}

