let app1 = new Vue({
    el: "#app1",
    data: { //bila ad {} dia jd obj
        message: "Hello Vue!"

    }
})

let app2 = new Vue ({
    el: "#app2",
    data: {
        message: "Loaded on " + new Date().toLocaleString(),
        linkUrl: "https://bbc.in/2LAnJs8",
        linkText: "Google is Down!"
    }
})

let app3 = new Vue({
    el: "#app3",
    data: {
        showIt: true,
        //showIt: false //xview
        notshowIt: false
    },
    methods: {
        toggleMsg: function(){
            if(this.showIt){
                this.showIt= false
            }else{
                this.showIt= true
            }
        }
    }
})

let app4 = new Vue ({
    el: "#app4",
    data: {
        theList: [ //theList is array
            { text: "Learn in HTML" },
            { text: "Learn in CSS" },
            { text: "Learn in Learn Javascript" }
        ]
    }
})

let app5 = new Vue({
    el: "#app5",
    data: { //bila ad {} dia jd obj
        message: "biinnndd msg!",
        groceryList:[
            {
                id: 1,
                desc: "Rocket Salad",
            },
            {
                id: 2,
                desc: "Cheese",
            },
            {
                id: 3,
                desc: "Ramen",
            },
            {
                id: 4,
                desc: "Ice Lemon Tea",
            }
        ],
        orderList:[
            {
                id: 1,
                desc: "Nasi Lemak"
            },
            {
                id: 2,
                desc: "Nasi Krabu"
            },
            {
                id: 3,
                desc: "Rojak Ayam"
            }
        ]

    }
})