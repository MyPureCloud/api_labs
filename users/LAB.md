This tutorial will use the Javascript SDK to query and create users.  It assumes that you already have a Implicit Grant client id with a redirect url of http://localhost:8080/index.html.  Instructions for creating a client id can be found at https://developer.mypurecloud.com/api/rest/authorization/create-oauth-client-id.html

1. Start by modifying the pureCloudSession.authorize method call, by adding the client id of your OAuth client as the first parameter. The .authorize method will do the leg work of of the authentication by issuing a redirect automatically if needed. The .done method is called after the page has an auth token.

2. Next, inspect the loadUsers function.  usersapi.getUsers is being called with a page size of 25. This will return the first 25 users alphabetically. The returned data set will also contain information on the current page and the url to get the next page of users so that you can continue to get pages until you have all the users.  

Paging is recommended instead of setting the page size to a large number like 9999 to speed up loading times.

3. Now we can implement the createUser method to supply the information to be able to create a user. Update the newUserData object to set the specific fields on the new user.

The value of version must be 1 when creating a user, the version field is used to ensure data integrity between systems so that if two updates to a user at the same time, that the second update won't overwrite the changes made by the first update. When the second update happens, if it has the same version the API will return an error and the second application will have to bump the version to acknowledge that there was another change.

After the user is created, the first page of users in the system is reloaded.

4. Start your web server and navigate to http://localhost:8080/index.html
