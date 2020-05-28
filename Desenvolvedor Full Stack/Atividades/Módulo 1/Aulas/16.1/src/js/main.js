document.addEventListener('DOMContentLoaded', function () {
    loadData();
});

function loadData(params) {
    const rrgomideAPI = fetch('https://api.github.com/users/rrgomide')
    .then( response => {
        response.json()
        .then( data => showUser(data) )
        .catch(function (error) {
            console.log(error);
        });
    })
    .catch(function (error) {
        console.log(error);
    });   
}

function showUser(user) {
    ElementFill.load(user);
}