const persons = [
    {
      id: 325326,
      firstname: "Dan",
      lastname: "Tiger",
      image: "url",
      birthday: "03.18.1990",
      gender: "Male",
      hobbie: ["Football", "Reading"],
      nationality: "switzerland",
      friends: [325330, 325334],
      residence: 10041
    },
    {
      id: 325326,
      firstname: "Fan",
      lastname: "Tiger",
      image: "url",
      birthday: "03.18.2005",
      gender: "Female",
      hobbie: ["Football", "Reading"],
      nationality: "switzerland",
      friends: [325330, 325334],
      residence: 10041
    },
    {
      id: 325330,
      firstname: "Frank",
      lastname: "Lion",
      image: "url",
      birthday: "10.05.1991",
      gender: "Male",
      hobbie: ["walking", "basketball"],
      nationality: "syria",
      friends: ["", "", ""],
      residence: 10041
    },
    {
      id: 325334,
      firstname: "Bilal",
      lastname: "Zakki",
      image: "url",
      birthday: "08.19.1999",
      gender: "Female",
      hobbie: ["swimming", "walking"],
      nationality: "canda",
      friends: [325330, 325326],
      residence: 10012
    }
  ];


  // function genderFilter(arr, personeGender){
  //   return arr.filter((item) => {
  //       if(item.gender === personeGender) {
  //           return item;
  //       } 
    
  //   });

  // } 

  // console.log(genderFilter(persons, "Female"));


  // function changeGender(arr) {
  //   return arr.map((item) => {
  //     if(item.gender === "Male") {
  //       item.gender = "Txamard";
  //     } else {
  //       item.gender = "Kin";
  //     }
  //     return item;
  //   });
  // }

  // console.log(changeGender(persons));


// function changeID(arr) {
//     return arr.map((item) => {
//       item.id = "ID - " + item.id;
//       return item;
//     });
// }

// console.log(changeID(persons));

function changeRes (arr) {
  return arr.map((item) => {
    if(Math.round(Math.random()) === 1) {
      item.residence = true;
    } else {
      item.residence = false;
    }
    return item;
  })
}

console.log(changeRes(persons));