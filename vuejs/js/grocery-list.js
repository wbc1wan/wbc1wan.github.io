Vue.component("grocery-list",{
    props:["todo"],
    template:"<li>{{todo.desc}}</li>" 
    //letak {{}} bru dia amik data todo.desc tu
})