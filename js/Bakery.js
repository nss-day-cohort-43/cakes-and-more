let bakedCakes = [];

export const readyCakes = () => {
	return bakedCakes.slice();
}

export const doTheBaking = (obj, cold) => {
	
	if (cold === true){
		obj.baked = false;
	}else {
		obj.baked = true;
	}
	console.log("the object is:", obj);
	bakedCakes.push(obj);
}