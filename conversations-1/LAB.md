# Introduction

This tutorial will cover basic call operations using the JavaScript SDK. After completing this tutorial, you will be able to get a user's current calls, identify information about the call's participants, and place outbound calls.

# Prerequisites

1. Complete the _javascript-sdk_ tutorial
2. Have a PureCloud org with an edge, outbound line, and a physical or remote phone

# Lab Steps

## Invoke OAuth Implicit Grant flow

Invoke the Implicit Grant authorization flow. Specify the client ID and redirect URI of your OAuth client.

```
pureCloudSession.authorize(clientId, redirectUri).done(function(){
    // Do stuff
});
```

## Poll the user's queue

Use the [setInterval(...)](http://www.w3schools.com/jsref/met_win_setinterval.asp) function to check the queue every second (1000ms). The `GET /api/v2/conversations/calls` resource returns an object containing all active voice calls on the user's queue. Each call object will contain an array with a list of participants in the conversation. Each participant is an object that has properties about the participant, including their ID.

```
setInterval(checkQueue, 1000);
function checkQueue() {
	conversationsApi.getCalls().done(function(calls) {
	    // Process queue contents
	    console.debug(calls);
	}).error(function(err){
		console.error(err);
	});
}
```

## Perform operations on the participants

Implement functions to hold, mute, record, and disconnect participants using the `PATCH /api/v2/conversations/calls/{callId}/participants/{participantId}` resource. The call ID and participant ID will come from the object returned when getting the queue's contents.

```
function mute(callId, participantId, muteOn) {
	// Create request body
	var body = {
		"muted": muteOn
	};

	// Invoke API
	conversationsApi.patchCallsCallIdParticipantsParticipantId(callId, participantId, body).done(function(result) {
		// result will always be empty
	}).error(function(err){
		console.error(err);
	});
}
```

## Place a call

Implement a function to place a call by using the `POST /api/v2/conversations/calls` resource. The example code below only shows placing a call to a phone number, but additional options can be specified to call a queue, dial on behalf of a queue, and more.

```
// Create request body
var body = {
	"phoneNumber": "3172222222"
};

// Invoke API
conversationsApi.postCalls(body)
	.done(function(result) {
		// Call successful
	}).error(function(err){
		console.error(err);
	});
```