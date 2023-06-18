const menuItems = {
	id: "0001",
	type: "donut",
	name: "Cake",
	ppu: 0.55,
	batters:
		{
			batter:
				[
					{ id: "1001", type: "Regular" },
					{ id: "1002", type: "Chocolate" },
					{ id: "1003", type: "Blueberry" },
					{ id: "1004", type: "Devil's Food"}
				]
		},
	topping:
		[
			{ id: "5001", type: "None" },
			{ id: "5002", type: "Glazed" },
			{ id: "5005", type: "Sugar" },
			{ id: "5007", type: "Powdered Sugar" },
			{ id: "5006", type: "Chocolate with Sprinkles" },
			{ id: "5003", type: "Chocolate" },
			{ id: "5004", type: "Maple" }
		]
};

// Tarberak 1

function findValues(obj) {

	const batters = obj.batters.batter;

	const topping = obj.topping;

	const batersStr = batters.map((item) => {
		return item.type;
	});

	const toppingStr = topping.map((item) => {
		return item.type;
	});

	return `
		Batter contains: ${batersStr.join(", ")}. 
		Topping contains: ${toppingStr.join(", ")}.
		`;
	
}

console.log(findValues(menuItems));  

//Tarberak 2

function returnString(obj) {
	return `
	Batter contains: ${obj.batters.batter.map((item) => item.type).join(", ")}. 
	Batter contains: ${obj.topping.map((item) => item.type).join(", ")}. 
	`;
}

console.log(returnString(menuItems));  