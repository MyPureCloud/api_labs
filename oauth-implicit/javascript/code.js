//get the access token if it is available, otherwise return null;
function getAccessTokenFromUrl(){
    var currentUrlHash = window.location.hash;

    //TODO: check if the hash contains an access_token

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

    //TODO: Update this request with the url to /api/v1/users/me
    //TODO: Set the proper authorization header
    $.ajax({
            url: "UPDATE ME!!",
            type: "GET",
            beforeSend: function(xhr){xhr.setRequestHeader('Authorization', "UPDATE ME!!");},
            success: function(data) {
                displayUserInfo(JSON.parse(data));
            }
        });
}

function displayUserInfo(userInfo){

}

//this method is called after the page loads
$(document).ready(function(){
    var accessToken = getAccessTokenFromUrl();

    if(accessToken === null){
        issueRedirect();
        return;
    }

    var me = getCurrentUserData(authToken);
});
