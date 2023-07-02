async function catsAsync() {
    try {
      const res = await fetch("https://api.api-ninjas.com/v1/catsssss?name=maine coon",
      {headers: {'X-Api-Key': 'n2kREa3o9YwFZ/vSbZl3ug==d6iO5vkzjKNjMi5o'}});
      return res.json();

    } catch(err) {
    	console.log(`I am here ${err}`);
    }
}
catsAsync().then((result) =>{
   console.log(result);
}).catch((err) => {
    console.log(`This is catch from ${err}`)
});