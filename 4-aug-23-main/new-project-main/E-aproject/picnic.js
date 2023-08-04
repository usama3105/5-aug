var catagory = document.getElementById("catagory")
var catagoryinfo = [{

        id: 0,
        name1: "Sea Sides",
        img1: "img/beach.jfif"
    },
    {
        id: 1,
        name1: "Parks",
        img1: "img/park.jfif"
    },
    {
        id: 2,
        name1: "Museums",
        img1: "img/museum.jfif"
    },
    {
        id: 3,
        name1: "Northen Area",
        img1: "img/skardu.jfif"
    }
]

catagoryinfo.forEach((cat) => {
    catagory.innerHTML += `<div class="card cat mx-2 mt-5 mb-5 product-card" style="width: 18rem; height: 60vh;"data-aos="zoom-out-down">
  <a " href="#"><img src="${cat.img1}" class="card-img-top cardimg" alt="..."style="height:40vh;"></a>
  <div class="card-body card2">
    <h2 class="card-text travelcat ">${cat.name1}</h2>
  </div>
</div>`
});




var details = document.getElementById("details")
var info = [{
        id: 0,
        img: "img/naran.webp",
        name: "Naran Khagan Shugran",
        price: "7 Days Stay (Rs.25,000)",
        desc: "Naran Kaghan Valley is a breathtakingly beautiful and serene valley in Pakistan that attracts thousands of tourists, photographers, trekkers, and nature-lovers each year."
    },
    {
        id: 1,
        img: "img/hunza.webp",
        name: "Hunza Valley",
        price: "7 Days Stay (Rs.25,000)",
        desc: "The Hunza valley is popular for its snow-capped and rough mountains. Many people came to Hunza just to get a few glimpses of the shining ice wall of the Rakaposhi Mountain."
    },
    {
        id: 2,
        img: "img/neelum.webp",
        name: "Neelum valley",
        price: "5 Days Stay (Rs.19,000)",
        desc: "The district of Neelum is situated 43 kilometres away from Muzaffarabad and the area is famous for its minerals. Local fruits like Apples, Apricots, Walnuts"
    },
    {
        id: 3,
        img: "img/swat.webp",
        name: "District Swat",
        price: "7 Days Stay (Rs.21,000)",
        desc: " Swat is famous for its natural wonders which include its breathtaking diverse landscape and natural wildlife. Swat has numerous scenic countryside."



    },
    {
        id: 4,
        img: "img/murree.webp",
        name: " Murree ",
        price: "10 Days Stay (Rs.25,000)",
        desc: "The town also serves as a transit point for tourists visiting Azad Kashmir and Abbottabad. The town is noted for its Tudorbethan and neo-gothic architecture."
    },
    {
        id: 5,
        img: "img/kumrat.webp",
        name: "Kumrat Valley",
        price: "7 Days Stay (Rs.29,000)",
        desc: "Kumrat Valley is a beautiful valley located in the Upper Dir district of Khyber Pakhtunkhwa province in Pakistan. It is known for its stunning natural beauty, including lush green forests."
    },
    {
        id: 6,
        img: "img/gawadar.webp",
        name: "Gawadar ",
        price: "7 Days Stay (Rs.19,000)",
        desc: "Gwadar, town and seaport, southwestern Balochistan province, southwestern Pakistan. Located on the sandy Nuh headland that juts southward into the Arabian Sea."
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
desc: "comes alive both under the sky and inside the four-walls, since it's main thing is mood-setting. It'll glow like a candle light to elevate your private romantic dinner near La Seineor maybe shine a light to show your way "
},

]

info.forEach((val) => {

    details.innerHTML += `<div class="card mx-2 mt-5 mb-5 product-card " style="width: 18rem;height:90vh;border:2px solid greenyellow;" data-aos="zoom-out-down">
        <img src="${val.img}" class="card-img-top mt-2 text-center"style="height:40vh;alt="...">
        <div class="card-body ">
          <h5 class="card-title  title ">${val.name} <br> <span class="rate">${val.price}</span></h5>
          <p class="card-text">${val.desc}</p>
          <a href="#" class=" btn btn1 btn-primary"> Show More</a>
        </div>
      </div>`});
