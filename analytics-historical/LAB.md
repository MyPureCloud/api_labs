This tutorial will query the Javascript SDK to query the Analytics endpoint to get information about a queue for the past day.  It assumes that you already have a Implicit Grant client id with a redirect url of http://localhost:8080/index.html.  Instructions for creating a client id can be found at https://developer.mypurecloud.com/api/rest/authorization/create-oauth-client-id.html

1. Start by modifying the pureCloudSession.authorize method call, by adding the client id of your OAuth client as the first parameter. The .authorize method will do the leg work of of the authentication by issuing a redirect automatically if needed. The .done method is called after the page has an auth token.

2. Next we will use the routing API to get the queue Id given the name of the Queue.  Update this function with your queue name.

3. We will then compose our analytics query. A default query has been specified already which will request the statistics tHandle and tTalkComplete for voice calls and only in the queue we specified.  Metric definitions can be found at https://developer.mypurecloud.com/api/rest/v2/analytics/metrics.html. More information on building a query can be found at https://developer.mypurecloud.com/api/rest/v2/analytics/aggregate.html.  Run the lab as is, but then come back to this query to tweak the parameters to see how the results change. The default interval is created by the getIntervalString method which will create an interval for the past 24 hours, this method can also be adjusted. The analyticsapi.postConversationsAggregatesQuery will send the query to PureCloud.

4. Start your web server and navigate to http://localhost:8080/index.html

5. The preexisting code will handle displaying the data using a [Handlebars.js](http://handlebarsjs.com/) template.
