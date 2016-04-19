# Introduction

This tutorial will cover basic call operations using the JavaScript SDK. After completing this tutorial, you will be able to get a user's current calls, identify information about the call's participants, and place outbound calls.

# Prerequisites

1. Complete the _conversations-1_ tutorial
2. Have a PureCloud org with an edge, outbound line, and a physical or remote phone

# Lab Steps

## Invoke OAuth Implicit Grant flow

Invoke the Implicit Grant authorization flow. Specify the client ID and redirect URI of your OAuth client.

```
pureCloudSession.authorize(clientId, redirectUri).done(function(){
    // Do stuff
});
```

## Subscribe to notifications

To see what notification topics are available, call `GET /api/v2/notifications/availabletopics` or see the documentation at https://developer.mypurecloud.com/api/rest/v2/notifications/available_topics.html. To subscribe to a notification, first create a notification channel using `POST /api/v2/notifications/channels`. A notification channel is akin to a TV channel in that there are multiple instances and each provides unique content. Each channel has its own set of notification subscriptions that can be managed independently. 

```
notificationsapi.postChannels().done(function(data){
    // Do stuff
});
```

After creating a channel in PureCloud, use the channel's connect URI to create a [WebSocket](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications) object. Then provide handler functions for the _onopen_ and _onmessage_ properties.

```
webSocket = new WebSocket(data.connectUri);
```

The function for _onopen_ will make Platform API calls to subscribe to the desired topics using `POST /api/v2/notifications/channels/{channelId}/subscriptions`. 

```
webSocket.onopen = function(){
    userPresenceTopic = 'v2.users.' + user.id + '.presence';
    notificationsapi.postChannelsChannelIdSubscriptions(data.id, [{"id": userPresenceTopic}]);
};
```

## Handle incoming messages

The function for the websocket's _onmessage_ will handle notifications sent to the websocket and process them according to the needs of the application.

```
webSocket.onmessage = function(message) {
    // Parse string message into JSON object
    var data = JSON.parse(message.data);
    if (data.topicName == userPresenceTopic){
		// Do stuff
    }
};
```

In addition to notifications that are subscribed to, PureCloud will automatically send a heartbeat message every 30 seconds.

```
if (data.topicName == 'channel.metadata') {
    console.log('thump... THUMP...');
}
```
