
async function findAllUsers(){
    const users = await fetch("https://reqres.in/api/users?per_page=100"); //ete GET enk anum apa arajin parametric heto dnum enk? erkrordy & orinak  &id=3
    return users.json();
}

findAllUsers().then((res) => {
    console.log(res);
});

/*
async function getUsersFullnames(){
    const usersFullnames = await fetch("https://reqres.in/api/users?per_page=12"); 
    return usersFullnames.json();
}

getUsersFullnames().then((res) => {
    const names = res.data.map((item) => {
        return `${item.first_name} ${item.last_name}`;
    });
    console.log(names);
});
*/
/*{
    "name": "morpheus",
    "job": "leader"
}
*/
/*
async function craetePostRequeste() {
    const user = await fetch("https://reqres.in/api/users",
        {
            method: 'POST',
            body: JSON.stringify({
                firstName: 'Milana',
                lastName: 'Amelyan',
                job: "QA"
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
    return user.json();
}

craetePostRequeste().then((res) => {
    console.log(res);
})
*/