function LoadUser(){
    let url = "https://randomuser.me/api/"

    fetch(url)
    .then((response) => response.json())
    .then(data => {
        let fn = document.getElementById("firstName")
        let ln = document.getElementById("lastname")
        let phone = document.getElementById("phone")
        let img = document.getElementById("userImg") //html must img not div 

        fn.innerHTML = data.results[0].name.first
        ln.innerHTML = data.results[0].name.last
        phone.innerHTML = data.results[0].phone
        img.src = data.results[0].picture.large

    })
}

let elLoadUser = document.getElementById("getRandomUser")
elLoadUser.addEventListener("click", function(){
    LoadUser()
})

//create listeners 1st
let elLoadMultipleUsers = document.getElementById("getMultipleUser")
elLoadMultipleUsers.addEventListener("click",function(){
    let userCount = document.getElementById("userCount")
    LoadMultipleUsers(userCount.value)
})

function LoadMultipleUsers(userCount){ //masukkn userCount sini dlu ma tuk dia get data tu
    let url = "https://randomuser.me/api/?results=" + userCount //remember ?results= tnda soal lu bru =
    let temp = ""

    fetch(url)
    .then ((response) => response.json())
    .then(anyvar => {
        let allUsers = document.getElementById("allUsers")

        //azad.data[0].category_list.name
        for(let i = 0; i<anyvar.results.length; i++){
            let fn = '<div>' + anyvar.results[i].name.first + '<div>'
            let ln = '<div>' + anyvar.results[i].name.last + '<div>'
            let phone = '<div>' + anyvar.results[i].phone + '<div>'
            let img = '<img src = "' + anyvar.results[i].picture.large + '">'

            temp = temp + fn + ln + phone + img
        }
        allUsers.innerHTML = temp
    })
}

let elLoadGender = document.getElementById("getGenderUser")
elLoadGender.addEventListener("click", function(){
    console.log("Load Gender clicked!")

    //get the gender
    let gender = document.getElementById("userGender")
    console.log("Selected Gender: "+ gender.value)

    //get the number of result
    let userGCount = document.getElementById("userGenderCount")
    loadGender(userGCount.value)
    console.log("Count" + userGCount.value)

    //call loadGender() and pass gender and number of result
    loadGender(gender.value,userGCount.value)
})

function loadGender(gender,userCount){ //gender,userCount xkisah nk declare apa
    let url = "https://randomuser.me/api/?results=" + userCount + "&gender=" + gender
    console.log(url)
    
     //call fetch, loop the result, and change the innerHTML for allGenders

    fetch(url)
    .then ((response) => response.json())
    .then(data => {
        let allGUsers = document.getElementById("allGenderUsers")
        let temp = "" //luar dlm pon boleh

        for(let i = 0; i<data.results.length; i++){
            let fn = '<div>' + data.results[i].name.first + '<div>'
            let ln = '<div>' + data.results[i].name.last + '<div>'
            let phone = '<div>' + data.results[i].phone + '<div>'
            let img = '<img src = "' + data.results[i].picture.large + '">'
            let gdr = '<div>' + data.results[i].gender + '<div>'

            temp = temp + fn + ln + gdr + phone + img
        }
        //console.log(temp)
        allGUsers.innerHTML = temp
    })
}

