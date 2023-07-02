// callback

function testAsync() {
    setTimeout(() => {   // eto govorit podojdi, sdelay chto nado chtoby vipolnit funkciyu? a potom kogda budet gotovo sdelay. sdelay vse chto nije, a potom kogda stek osvoboditsya sdelay
        //console.log("Barev Dzez");
    }, 2000); // spasum e minimum 200 milisekund

    //console.log("Yes taki gracn em"); 
}

testAsync();

async function testAsync1() {
    const res = await fetch("https://dog.ceo/api/breeds/list/all");
    return res.json();
}
// esli sdelat console.log(testAsync1()) na etoy strochke vyvod budet [object Promise]
testAsync1().then((result) =>{
    if(result.status === "success") {
        console.log(Object.keys(result.message));
        console.log("API returned successfully!");
    }else {
        console.log("Request failed");

    }
   // esli bez if else console.log(result); //gago.message
});




