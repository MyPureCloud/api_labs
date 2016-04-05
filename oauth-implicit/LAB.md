This tutorial will go over the steps to authenticate using implicit authentication without using a client library and make a call to /users/me.  It assumes that you already have a Implicit Grant client id with a redirect url of http://localhost:8080/index.html.  Instructions for creating a client id can be found at https://developer.mypurecloud.com/api/rest/authorization/create-oauth-client-id.html

When the page loads, the startApp function is first called.  It will try to get an authentication token from the url and if it doesn't get one will redirect the user to the login page.  If it does find one then it will get the current user's data.

1. Start by modifying the getAccessTokenFromUrl function. If you app has an access token, the url will look something like:

    ``` 
    http://localhost:8080/index.html#access_token=<token>&expires_in=86399&token_type=bearer
    ```

    We want to get the access_token token out of there.  If your url doesn't contain the string "access_token" return null.  If it does, return the value of the access_token, you can use the getParameterByName method and pass in "access_token" to the function call and it will return your token.

2. Next in the issueRedirect we need to complete the logic to do the redirect to PureCloud to handle the login. In the queryStringData map, update the value of client_id with your apps' client id and the value of redirect_uri to the redirect uri you used when you created your client id.

3. Finally, once we have our authentication token, we need to make an outbound request to get the current user's information. In the getCurrentUserData method there is an ajax call to get that information.  Update the url parameter with the api endpoint to call (https://api.mypurecloud.com/api/v2/users/me)  and update the beforeSend value to include your authorization token in the header. The value of the authorization header needs to contain the token type, for OAuth, that is bearer so the value would look like "Bearer AUTHTOKENVALUE"

4. Start your web server and navigate to http://localhost:8080/index.html
