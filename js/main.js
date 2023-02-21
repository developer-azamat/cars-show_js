let right = document.querySelector(".right")
let form = document.querySelector(".form")
let submit = document.querySelector("#submit")


let names = document.querySelector("#name")
let price = document.querySelector("#price")
let url = document.querySelector("#url")
let speed = document.querySelector("#speed")
let color = document.querySelector("#color")
let btn = document.querySelector(".add-card")


// loader

window.addEventListener("DOMContentLoaded", () => {
    const load = document.querySelector(".load")
    setTimeout(()=>{
        setTimeout(() => {
            load.classList.add("one")
        },100)
        setTimeout(() => {
            load.classList.add("second")
        },200)
        setTimeout(() => {
            load.classList.add("three")
        },300)
        setTimeout(() => {
            load.classList.add("zero")
        },600)
    },1300)
})

btn.addEventListener("click", ()=>{
    form.classList.toggle("active")
    if (btn.textContent== "+ add card"){
        btn.textContent= "Close"
    } else {
        btn.textContent= "+ add card"
    }
})

let cars = JSON.parse(localStorage.getItem("cars")) ? JSON.parse(localStorage.getItem("cars")) : []

const setData = function (){
    let ism = names.value.trim()
    let narx = price.value
    let manzil = url.value.trim()
    let tezlik = speed.value
    let rang = color.value
    const id = Math.random()
    if (!ism =="" && narx > 0 && !manzil=="" && tezlik > 0 ){
        let obj ={
            name: ism,
            speed: tezlik,
            price: narx,
            color: rang,
            url: manzil, 
            id: id
        }
        cars.push(obj)  
        localStorage.setItem("cars",JSON.stringify(cars))
    }else{
        alert("Please enter information")
    }
    getData()
    names.value = ""
    price.value= ""
    url.value= ""
    speed.value= ""
    color.value= "#ff0000"
}

const getData = function(){
    let useData = JSON.parse(localStorage.getItem("cars"))
    
    right.innerHTML = ""
    useData.forEach((item, i) => {
        right.innerHTML += `
        <div class="card" data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000">
                <img src="${item.url}" alt="">
            <div class="card-body">
                <h1>name: ${item.name}</h1>
                <h2>speed&nbsp;: ${item.speed} km/h</h2>
                <h2>price&nbsp; : $${item.price}</h2>
                <h2 style="background: ${item.color}; padding:2px 4px; border-radius:10px;">color&nbsp; :  ${item.color}</h2>
                <i class="fa-solid fa-trash" onclick="del(${i})"></i>
            </div>
        </div>`
        })
    }

    
    
    submit.addEventListener("click", ()=>{
      
        setData()
    })
    
    
    getData()

    function del(id){
        const delTodo = cars.filter((item, i) =>{
            return  i !== id
        })
        cars = delTodo
        localStorage.setItem('cars', JSON.stringify(cars))
        getData()
     }






