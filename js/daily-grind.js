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
            <strong class="feature">${coffee.day} Coffee Special:</strong> ${coffee.day}'s daily coffee special is <strong class="feature">${coffee.name}</strong></p>

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
            day: "Monday",
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
        today = "Friday";
        coffee = {
            name:"frappaccino",
            color: "brown",
            pic: "images/frappaccino.jpg",
            alt: "A picture of a frappaccino",
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

    case 0:
        today = "Sunday";
        coffee = {
            name:"Mocha",
            color: "brown",
            pic: "images/mocha.jpg", 
            alt: "A picture of a mocha",
            day: "Sunday",
            desc: `Espresso, chocolate powder, followed by cream and milk!`
    };
    break;


    default:
        today = "Not sure what day it is!";

}

document.getElementById("coffee-cup").innerHTML = coffeeTemplate(coffee);

document.querySelector("html").style.backgroundColor = coffee.color;

//alert(today);
console.log(coffee);
