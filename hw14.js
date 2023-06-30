const singers = ["Maître Gims", "Soprano", "PROJECT LA", "Aram MP3"];
const songs = ["Brisé", "Roule", "Who Shall I Meet", "Kuzes"];

// Task 1

function returnSingerAndSong (arr1, arr2) {
    arr1.map((item, i) => {
        console.log(`${item} ergum e ${arr2[i]}`);
    });
}
returnSingerAndSong(singers, songs);


// Task 2 

function makeObj(arr3, arr4) {
    
    return arr3.map((item, i) => {
        let obj = {};
        obj.singer = item; 
        obj.song = arr4[i];
        return obj;
    }); 
}

console.log(makeObj(singers, songs));
