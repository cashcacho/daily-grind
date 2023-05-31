    /*
        Here are the items we believe we'll need for each day's coffee

        pic - image src
        alt - the alt tag for the image
        color - color to match image
        desc - description of coffee
        name - name of the coffee
        day - the day of the week

    */


myDate = new Date();

today = myDate.getDay();

//today=3;

switch(today){

    case 2:
        today = "Tuesday";
    break;

    case 3:
        today = "Wednesday";
    break;

    default:
        today = "Not sure what day it is!";

}

coffee = {
    name:"Bubble Tea",
    color: "pink",
    pic: "images/bubble-tea.jpg",
    alt: "A picture of a bubble tea",
    day: "Wednesday",
    desc: 'I like me some bubble tea!'
}





//alert(today);
console.log(coffee);
