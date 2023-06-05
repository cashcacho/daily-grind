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
return `<p>
    		 <img src="${coffee.pic}" alt="${coffee.alt}" id="coffee" />
            <strong class="feature">${coffee.day} Coffee Special:</strong> ${coffee.day} daily coffee special is <strong class="feature">Pumpkin Spice Latte</strong>, which makes us wish it was always Fall, as this is one of our top sellers!</p>

  `;

  
}

myDate = new Date();

today = myDate.getDay();

//today=3;

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
    break;

    case 3:
        today = "Wednesday";
    break;

    default:
        today = "Not sure what day it is!";

}

document.getElementById("coffee-cup").innerHTML = coffeeTemplate(coffee);


//alert(today);
console.log(coffee);
