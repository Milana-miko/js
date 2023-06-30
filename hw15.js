// 1. Cat breed - maine coon - "cats?name=maine coon"
// 2. Jokes - limit = 3 - "jokes?limit=3"
// 3. Recipe - tiramisu - "recipe?query=tiramisu"
async function useOppenApiAsync(url) {
    const res = await fetch("https://api.api-ninjas.com/v1/" + url,
    {headers: {'X-Api-Key': 'n2kREa3o9YwFZ/vSbZl3ug==d6iO5vkzjKNjMi5o'}});
    return res.json();
}
useOppenApiAsync("jokes?limit=3").then((result) =>{
   console.log(result);
});