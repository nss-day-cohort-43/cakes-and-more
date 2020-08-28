import {readyCakes} from "./Bakery.js"

//name, season, color, type, flavor
const makeCakeHTML = (cakeObj) => {
	return `
		<h2>${cakeObj.cakename}</h2>
		<p>${cakeObj.season}</p>
		<p>${cakeObj.color}</p>
		<p>${cakeObj.baked}</p>
	`
}

export const CakeList = () => {
	const theListOfCakes = readyCakes();
	let cakeHTML = "";
	for(const oneCake of theListOfCakes){
		cakeHTML += makeCakeHTML(oneCake);
	}
	return cakeHTML;
}