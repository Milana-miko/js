


//   auth: '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'


async function seePullRequestList() {
    const res = await fetch("https://api.github.com/repos/Milana-miko/js/pulls",
        {
            headers: {
                'Authorization': 'Token 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',
                'Accept': 'application/vnd.github+json', 'X-GitHub-Api-Version': '2022-11-28'
            }
        });
    return res.json();
}

seePullRequestList().then((result) => {
    console.log(result);
});



