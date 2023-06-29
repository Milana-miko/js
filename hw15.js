// 1. Cat breed - maine coon

async function catsAsync() {
    const res = await fetch("https://api.api-ninjas.com/v1/cats?name=maine coon", 
    {headers: {'X-Api-Key': 'n2kREa3o9YwFZ/vSbZl3ug==d6iO5vkzjKNjMi5o'}});
    return res.json();
}

catsAsync().then((result) =>{
   console.log(result); 
});


// 2. Jokes - limit = 3

async function jokesAsync() {
    const res1 = await fetch("https://api.api-ninjas.com/v1/jokes?limit=3", 
    {headers: {'X-Api-Key': 'n2kREa3o9YwFZ/vSbZl3ug==d6iO5vkzjKNjMi5o'}});
    return res1.json();
}

jokesAsync().then((result1) => {
    console.log(result1);
});

// 3. Recipe - tiramisu

async function recipeAsync() {
    const res2 = await fetch("https://api.api-ninjas.com/v1/recipe?query=tiramisu", 
    {headers: {'X-Api-Key': 'n2kREa3o9YwFZ/vSbZl3ug==d6iO5vkzjKNjMi5o'}});
    return res2.json();
}

recipeAsync().then((result2) => {
    console.log(result2);
});