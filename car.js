var details = document.getElementById("details")
var info = [{
        id: 0,
        img: "img/corolla.jpg",
        name: "Travel Adapter",
        price: "Rs.1,599",
        desc: ""
    },
    {
        id: 1,
        img: "img/thunder-car.webp",
        name: "Twelve South AirFly",
        price: "Rs.1,499",
        desc: ""
    },
    {
        id: 2,
        img: "img/jeep.jpg",
        name: "Self-Cleaning Bottle",
        price: "Rs.2,599",
        desc: ""
    },
    {
        id: 3,
        img: "img/glasses.jpg",
        name: "Alto Audio Sunglasses",
        price: "Rs.2,299",
        desc: " "



    },
   

]

info.forEach((val) => {

    details.innerHTML += `<div class="card mx-2 mt-5 product-card container-fluid " style="width: 18rem;height:58vh;border:greenyellow solid 2px;" data-aos="zoom-out-down">
        <img src="${val.img}" class="card-img-top mt-2 ml-2" alt="..."style="height:40vh">
        <div class="card-body  ">
          <h5 class="card-title text-primary ">${val.name} <br> <span>${val.price}</span></h5>
          <p class="card-text">${val.desc}</p>
          <a href="#" class=" btn btn1 btn-primary"> Show More</a>
        </div>
      </div>`})