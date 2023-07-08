// gtnel dog anunov kino - grel t=dog
// gtnel bolor kinonery dog  barov
/*
async function workWithMovie(key, searchParam) {
    const res = await fetch(`http://www.omdbapi.com/?apikey=${key}&s=${searchParam}`)

    return res.json();
}

workWithMovie("219023ee", "dog").then((result) => {
    console.log(result);
});
*/

// gtnel kinonery

async function findSeries(apiKey, serchPar, movieType, releaseYear, numbersOfPage) {
    const res1 = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${serchPar}&type=${movieType}&y=${releaseYear}&page=${numbersOfPage}`);
    return res1.json();
}

findSeries("219023ee", "love", "movie", "2010", "5").then((result1) => {
    console.log(result1);
});
