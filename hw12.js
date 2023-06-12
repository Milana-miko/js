function addFullname(arr) {
    return arr.map((item) => {
        item.fullname = item.name + " " + item.lastname;
        return item;
    });
}

console.log(addFullname(persons));
