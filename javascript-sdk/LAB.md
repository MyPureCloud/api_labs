# Introduction

This tutorial will cover the basic steps required to use the JavaScript SDK. After completing this tutorial, you should be able to use the SDK to authenticate and make an API call.

# Prerequisites

Obtain the _purecloud-api.js_ file from one of the following locations:

* Install with Bower

  `bower install purecloud-api`

* Install with NPM

  `npm install purecloud`

* Use without a package manager
  * Download from https://github.com/MyPureCloud/purecloud_api_sdk_javascript/tree/master/dist

* Build or use from source
  * https://github.com/MyPureCloud/purecloud_api_sdk_javascript

# Lab Steps

## Reference the SDK and jQuery

Add _script_ tags to reference the SDK downloaded in the previous step and jQuery from the CDN.

```
<script type="text/javascript" src="javascript/purecloud-api-min.js"></script>
<script src="https://code.jquery.com/jquery-1.12.3.min.js" integrity="sha256-aaODHAgvwQW1bFOGXMeX+pC4PZIPsvn2h1sArYOhgXQ=" crossorigin="anonymous"></script>
```

## Create SDK instances

Create an instance of PureCloudSession and any desired API classes.

```
var pureCloudSession = new PureCloudSession();
var usersApi = new UsersApi(pureCloudSession);
var presenceApi = new PresenceApi(pureCloudSession);
```

## Invoke OAuth Implicit Grant flow

Invoke the Implicit Grant authorization flow. Specify the _client ID_ and _redirect URI_ of your OAuth client.

```
pureCloudSession.authorize(clientId, redirectUri).done(function(){
    // Do stuff
});
```

## Invoke the API

After authentication is complete, use the API classes to make API calls

```
// Invoke GET /api/v2/users/me
usersApi.getMe('presence').done(function(me) {
	// Write formatted response to body
	$('div#output').append('<pre>'+JSON.stringify(me, null, 2)+'</pre>');
});
```