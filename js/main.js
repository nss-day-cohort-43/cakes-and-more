console.log("Let's eat cake!");
import { MakeCake } from "./MakeCake.js";
import { doTheBaking, readyCakes } from "./Bakery.js";
import {CakeList} from "./CakeList.js";

//lets pretend that we just filled out some input box 
//with the following information

//MakeCake = (name, season, color, type, flavor)
const cake2 = MakeCake("Super Bowl Brownies", "Winter", "brown","brownie", "fudge");
console.log("the cake is", cake2);
const cake1 = MakeCake("Chirstmas In July", "Summer", "white","cake", "vanilla");
console.log("the cake is", cake1);

doTheBaking(cake2, false);

console.log("the cakes that are ready", readyCakes());

doTheBaking(cake1, true);

const cakeDisplayElement = document.querySelector("#cakeDisplay");
cakeDisplayElement.innerHTML = CakeList();