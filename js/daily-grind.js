    /*
       
        Here are the items we believe we'll need for each day's coffee

        pic - image src
        alt - the alt tag for the image
        color - color to match image
        desc - description of coffee
        name - name of the coffee
        day - the day of the week

    */

function coffeeTemplate(coffee){
return `
<p>
    		 <img src="${coffee.pic}" alt="${coffee.alt}" id="coffee" />
            <strong class="feature">${coffee.day} Coffee Special:</strong> ${coffee.day} daily coffee special is <strong class="feature">Pumpkin Spice Latte</strong>, which makes us wish it was always Fall, as this is one of our top sellers!</p>

  `;
}

let myDate = new Date ();

let coffee = "";

let today = myDate.getDay();

//use location object to access querystring (address bar)
const queryString = window.location.search;
    
//output to console    
console.log(queryString);
    
//separate query string parameters
const urlParams = new URLSearchParams(queryString);


myDate = new Date();

today = myDate.getDay();

//today=3;

if(urlParams.has("day")){//from querystring
    today = urlParams.get("day");
 }

today = parseInt(today);

 //console.log(today);

switch(today){

    case 1:
        today = "Monday";
        coffee = {
            name:"Bubble Tea",
            color: "pink",
            pic: "images/bubble-tea.jpg",
            alt: "A picture of a bubble tea",
            day: "Wednesday",
            desc: `I like me some bubble tea!`
      };
    break;
    
    case 2:
        today = "Tuesday";
        coffee = {
            name:"Drip",
            color: "black",
            pic: "images/drip.jpg",
            alt: "A picture of a drip coffee",
            day: "Tuesday",
            desc: `No cream no sugar!`
        };
      break;

    case 3:
        today = "Wednesday";
        coffee = {
            name:"Caramel-latte",
            color: "yellow",
            pic: "images/caramel-latte.jpg",
            alt: "A picture of a caramel latte",
            day: "Wednesday",
            desc: `Espresso, frothed milk, and caramel sauce!`
        };
    break;

    case 4:
        today = "Thursday";
        coffee = {
            name:"cold-brew",
            color: "purple",
            pic: "images/cold-brew.jpg",
            alt: "A picture of a cold brew",
            day: "Thursday",
            desc: `Cold pressed coffee! Sweet and smooth`
        };
    break;

    case 5:
        today = "Friday;
        coffee = {
            name:"frappaccino",
            color: "brown",
            pic: "images/frappacino.jpg",
            alt: "A picture of a frappacino",
            day: "Friday",
            desc: `Blended iced coffee topped with whip cream!`
        };
    break;

    case 6:
        today = "Saturday";
        coffee = {
            name:"pumpkin-spice-latte",
            color: "orange",
            pic: "images/pumpkin-spice-latte.jpg",
            alt: "A picture of a pumpkin-spice-latte",
            day: "Saturday",
            desc: `A mix of pumpkin flavors, steamed milk, and espresso topped with whip cream!`
        };
    break;

    case 7:
        today = "Sunday";
        coffee = {
            name:"mocha",
            color: "yellow",
            pic: "images/caramel-latte.jpg",
            alt: "A picture of a caramel latte",
            day: "Wednesday",
            desc: `Espresso, frothed milk, and caramel sauce!`
        };
    break;

    case 3:
        today = "Wednesday";
        coffee = {
            name:"Caramel-latte",
            color: "yellow",
            pic: "images/caramel-latte.jpg",
            alt: "A picture of a caramel latte",
            day: "Wednesday",
            desc: `Espresso, frothed milk, and caramel sauce!`
        };
    break;


    default:
        today = "Not sure what day it is!";

}

document.getElementById("coffee-cup").innerHTML = coffeeTemplate(coffee);

document.querySelector("html").style.backgroundColor = coffee.color;

//alert(today);
console.log(coffee);
