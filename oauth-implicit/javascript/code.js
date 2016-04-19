//helper method to get the access_token value out of the hash
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\#&]" + name + "=([^&#]*)"),
      results = regex.exec(location.hash);
    return results === null ? null : decodeURIComponent(results[1].replace(/\+/g, " "));
}

//get the access token if it is available, otherwise return null;
function getAccessTokenFromUrl(){
    var currentUrlHash = window.location.hash;

    //TODO: check if the hash contains an access_token by using teh getParameterByName
    // and passing in "access_token"

    //TODO: return the access_token if it exists, otherwise return null
}

function issueRedirect(){
    //TODO: update this hash with your client id and your redirect url
    var queryStringData = {
        response_type : "token",
        client_id : "UPDATE ME!!",
        redirect_uri : "UPDATE ME!!"
    }

    //TODO: update if not using mypurecloud.com
    window.location.replace("https://login.mypurecloud.com/authorize?" + jQuery.param(queryStringData));
}

function getCurrentUserData(authToken){

    //TODO: Update this request with the url to https://api.mypurecloud.com/api/v2/users/me
    //TODO: Set the proper authorization header
    $.ajax({
            url: "UPDATE ME!!",
            type: "GET",
            beforeSend: function(xhr){xhr.setRequestHeader('Authorization', "UPDATE ME!!");},
            success: function(data) {
                displayUserInfo(data);
            }
        });
}

//This function is provided for you, nothing to change here
function displayUserInfo(userInfo){
    var source   = $("#entry-template").html();
    var template = Handlebars.compile(source);

    userInfo.picture = userInfo.images[0].imageUri;
    $("#results").html(template(userInfo))
}

//this method is called after the page loads
function startApp(){
    var accessToken = getAccessTokenFromUrl();

    if(accessToken === null){
        issueRedirect();
        return;
    }

    var me = getCurrentUserData(accessToken);
}
$(document).ready(startApp);
