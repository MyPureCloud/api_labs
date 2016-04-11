var pureCloudSession = new PureCloudSession( 'inindca.com');
var usersapi = new UsersApi(pureCloudSession);

redirectUrl = "http://localhost:8080/index.html"

function loadUsers(){
    //Only gets the first page of users, increase/decrease
    // the page size or better yet use paging to get more users.
    usersapi.getUsers(25).done(function(userData){
        var source   = $("#entry-template").html();
        var template = Handlebars.compile(source);

        $("#results").html(template(userData));
    });
}

//TODO: update this call with your client id.
pureCloudSession.authorize('<INSERT CLIENT ID HERE>', redirectUrl)
    .done(function() {
        loadUsers();
    });

function createUser(){

    //TODO: Update the new user's data
    var userData = {
       "name": "",
       "department": "",
       "email": "",
       "title": "",
       "password": "",
       "version": "1"
    }
}

$(document).ready(function(){
    $("#createUser").click(function(){
        createUser();
    });
});
