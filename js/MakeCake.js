let idNumber = 1;

export const MakeCake = (name, season, color, type, flavor) => {
	const cakeObj = {
		cakename: name,
		season: season,
		color: color,
		type: type,
		flavor: flavor,
		id: idNumber++
	}
	
	return cakeObj;
}

// MakeCake("chrismas tree", "summer", "white", "cake", "vanilla");