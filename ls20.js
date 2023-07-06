// const myObj = {
//     eyeColor: "Blue",
//     height: 165,
//     gender: "Female",
//     marriedStatus: false,
//     childrenName: ["Tigran", "Alex"],
//     education: {
//         higher: "MESI",
//         secondary: "School N69"
//     }
// };

// const keys = Object.keys(myObj);
// const values = Object.values(myObj);

// // console.log(keys);

// console.log(values);

// console.log(myObj.education.secondary);

// for(let i = 0; i < keys.length; i++) {
//     console.log(keys[i]);
//     const myKey = keys[i];
//     console.log(myObj[myKey]);
//     console.log(myObj[keys[i]]); // nuyn e vonc ev 24 ev 25 toxery
// }

// const aniiHamar = "childrenName";
// // console.log(myObj[aniiHamar]);
// // console.log(myObj.childrenName); // nuyn e vonc 30 toxy

// if(myObj.hasOwnProperty("marriedStatus")) {
//     console.log("Key value: " + myObj.marriedStatus);
// }

// // console.log(myObj.hasOwnProperty("gender"));
// // console.log(myObj.hasOwnProperty("eee"));

// const myVar1 = "Barev";
// const myVar2 = "Joxovurd";

// console.log(myVar1 + " " + myVar2);

// console.log(`${myVar1} sireli ${myVar2} jan!`);


const menuItems = {
	"id": "0001",
	"type": "donut",
	"name": "Cake",
	"ppu": 0.55,
	"batters":
		{
			"batter":
				[
					{ "id": "1001", "type": "Regular" },
					{ "id": "1002", "type": "Chocolate" },
					{ "id": "1003", "type": "Blueberry" },
					{ "id": "1004", "type": "Devil's Food" }
				]
		},
	        "topping":
		[
			{ "id": "5001", "type": "None" },
			{ "id": "5002", "type": "Glazed" },
			{ "id": "5005", "type": "Sugar" },
			{ "id": "5007", "type": "Powdered Sugar" },
			{ "id": "5006", "type": "Chocolate with Sprinkles" },
			{ "id": "5003", "type": "Chocolate" },
			{ "id": "5004", "type": "Maple" }
		]
};

function findValues(obj) {
    const batterValues = obj.batters.batter.map((item) => {
        
        return Object.values(item);
        
        
    });

    return batterValues;
}

//console.log(findValues(menuItems));  

//batter contein i perechislit vse value topping contayn...


const myObj = {
    id: 1,
    age: 35,
    name: "Ani",
    surname: "Sargsyan"
};

const myObj2 = {
    hasChildren: true,
    single: false,
    education: "higher"
};

const miavorum = {...myObj, ...myObj2, ...{salary: 3000}}; //spred da concati nman mi ban e
//ete stex popoxel inch vor ban myObj1/2 mej apa da chi azdelu miavorum obj vra
//console.log(miavorum);


