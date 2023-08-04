var details = document.getElementById("details")
var info = [{
        id: 0,
        img: "img/adapter.jpg",
        name: "Travel Adapter",
        price: "Rs.1,599",
        desc: "Maybe if all these heads of state and government just agree upon one shape of input/output plug, we'd have less international conflicts? Before then, grab one—or more—of these all-in-one."
    },
    {
        id: 1,
        img: "img/AirFly.jpg",
        name: "Twelve South AirFly",
        price: "Rs.1,499",
        desc: "Simply put, it's a TikTok viral gadget that'll connect your AirPods—or any wireless headphones and earbuds—to the airplane TV. A godsend for your inevitably long, dull flight across the country.."
    },
    {
        id: 2,
        img: "img/bottle.jpg",
        name: "Self-Cleaning Bottle",
        price: "Rs.2,599",
        desc: " LARQ's auto-bacterial-killing bottle will come in handy to purify 99 percent of bio-contaminants out of your water. (Or simply use it because different countries have different standards"
    },
    {
        id: 3,
        img: "img/glasses.jpg",
        name: "Alto Audio Sunglasses",
        price: "Rs.2,299",
        desc: " Bose's classic-cool smart sunglasses, with open-ear audio built in to play music only for you, will save you a pair of headphones at that, while letting you stay alert of those pickpockets."



    },
    {
        id: 4,
        img: "img/light.jpg",
        name: " Portable UV Light ",
        price: "Rs.999",
        desc: "Just in case your voyage takes place during the cusp of yet another pandemic, this handy sanitizing light wand you can fit in a pocket will be able to rapidly sterilize those surfaces frequented by many before you."
    },
    {
        id: 5,
        img: "img/camera.jpg",
        name: "I-Type Instant Camera",
        price: "Rs.19,999",
        desc: "For the true lifetime traveler who wants nothing but the excitement of capturing beautiful sights, retouch-not-needed instant camera will render perhaps the best film photographs."
    },
    {
        id: 6,
        img: "img/flask-kit.jpg",
        name: "Adventure Flask Kit",
        price: "Rs.499",
        desc: "More than just a drinking vessel kit for passing around whiskey to your traveling mates during a makeshift happy hour, though that's definitely its main purpose. VSSL adds an LED light."
    },
    {
        id: 7,
        img: "img/speaker.jpg",
        name: "JBL 4 Portable Speaker",
        price: "Rs.3,999",
        desc: "Speaker convenient enough that you can clip onto your backpack or pant's belt loop is one that'll soundtrack your excursion. Not to mention JBL's Clip 4 is one with a durability rating of IP67 and surprisingly punchy audio."
    },
    {
        id: 8,
        img: "img/power-bank.jpg",
        name: " Omni 20+ Power Bank",
        price: "Rs.4,999",
        desc: "A portable 20000Mah charger on the road. The Omni 20+ is one almighty power bank capable of charging your cameras, drones, laptops, and phones simultaneously, at up to 100W"
    },
    {
        id: 9,
        img: "img/hotspot.jpg",
        name: " Solis Lite",
        price: "Rs.1,999",
        desc: "The last thing you need while traveling is to go offline—especially if you don't speak the local language. Thus, a WiFi hotspot, like the Solis, which is one of the easiest to operate."
    },
    {
        id: 10,
        img: "img/Travel-mug.jpg",
        name: " Travel Mug",
        price: "Rs.3,999",
        desc: "Hot coffee isn't just for homebodies who stay still and attached to a seat; travelers and adventurers alike also deserve the heat. Ember's travel mug will keep the contents inside hot at the precise temperature."
    },
    {
        id: 11,
        img: "img/watch.jpg",
        name: " Solar GPS Watch",
        price: "Rs.8,999",
        desc: "Garmin's GPS watch beats Apple's latest release the Ultra—to the punch at something any outdoorsman can appreciate: It's solar-powered. I.e. Instinct 2 has unlimited battery life as long as you keep the lights on."
    },
    {
    id: 12,
    img: "img/headphone.jpg",
    name: " Sony WH-1000XM5",
    price: "Rs.5,999",
    desc: "On the flight, the tried-and-true WH-1000XM5—an undisputed upgrade from its predecessor in both comfort and noise-cancelling—is a clutch at extinguishing clamors of babies crying or air conditioners."
},
{
id: 13,
img: "img/led.png",
name: " Sony WH-1000XM5",
price: "Rs.4,999",
desc: "comes alive both under the sky and inside the four-walls, since it's main thing is mood-setting. It'll glow like a candle light to elevate your private romantic dinner near La Seineor maybe shine a light to show your way"
},
{
id: 13,
img: "img/headphone.jpg",
name: " Sony WH-1000XM5",
price: "Rs.5,999",
desc: "On the flight, the tried-and-true WH-1000XM5—an undisputed upgrade from its predecessor in both comfort and noise-cancelling—is a clutch at extinguishing clamors of babies crying or air conditioners."
},
{
id: 14,
img: "img/led.png",
name: " Sony WH-1000XM5",
price: "Rs.4,999",
desc: "comes alive both under the sky and inside the four-walls, since it's main thing is mood-setting. It'll glow like a candle light to elevate your private romantic dinner near La Seineor maybe shine a light to show your way"
}

]

info.forEach((val) => {

    details.innerHTML += `<div class="card mx-2 mt-5 product-card container-fluid " style="width: 18rem;height:78vh;border:greenyellow solid 2px;" data-aos="zoom-out-down">
        <img src="${val.img}" class="card-img-top mt-2" alt="...">
        <div class="card-body  ">
          <h5 class="card-title text-primary ">${val.name} <br> <span>${val.price}</span></h5>
          <p class="card-text">${val.desc}</p>
          <a href="#" class=" btn btn1 btn-primary"> Show More</a>
        </div>
      </div>`
        //   details.innerHTML += `<div class="col-3 container-fluid row-cols-sm-1" data-aos="zoom-out-down">
        // <div class="card mt-5 box" style="width: 18rem;height:72vh">
        //   <img src="${val.img}" class="card-img-top product image img-fluid" alt="...">
        //   <div class="card-body">
        //     <ha5 class="card-title text-center product-name">${val.name} <br> <span class="rate"> ${val.price}</span></h5>
        //     <p clss="card-text img-card">${val.desc}</p>
        //     <a href="#" class="btn btn-primary button">Visit</a>
        //   </div>
        // </div>
        // </div>`
    });
    const eachCard = (e) => {
        let eachArrayObject = info.id[0]
        document.getElementById("modelContentData").innerHTML = `      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">${eachArrayObject.name}</h1>
        <img src='${eachArrayObject.img}' />
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
        ...
    </div>
    <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Understood</button>
    </div>`
    

};


var catagory = document.getElementById("catagory")
var catagoryinfo = [{

        id: 0,
        name1: "Mobile Accessories",
        img1: "img/mobile accessories.jfif"
        
    },
    {
        id: 1,
        name1: "Beach Gadgets",
        img1: "img/paddle board.webp"
    },
    {
        id: 2,
        name1: "Tour Gadgets",
        img1: "img/camp.jfif"
    },
    {
        id: 3,
        name1: "Influential Accessories",
        img1: "img/influential.jfif"
    }
]

catagoryinfo.forEach((cat) => {
    catagory.innerHTML += `<div class="card cat mx-2 mt-5 mb-5 product-card" style="width: 18rem; height: 60vh;"data-aos="zoom-out-down">
  <a " href=""><img src="${cat.img1}" class="card-img-top cardimg" alt="..."></a>
  <div class="card-body card2">
    <h2 class="card-text travelcat ">${cat.name1}</h2>
  </div>
</div>`
});