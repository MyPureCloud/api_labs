var pureCloudSession = new PureCloudSession( 'inindca.com');
var routingapi = new RoutingApi(pureCloudSession);

redirectUrl = "http://localhost:8080/index.html"

//TODO: update this call with your client id.
pureCloudSession.authorize('<INSERT CLIENT ID HERE>', redirectUrl)
    .done(function() {

        //TODO: Fill in the name of your queue.
        routingapi.getQueues(null, null, null, "<UPDATE QUEUE NAME>").done(function(queueData){
            var queueId = queueData.entities[0].id;

            var query = {
                    filter: {
                        type: "and",
                        clauses: [
                          {
                            type: "or",
                            predicates: [
                              {
                                dimension: "queueId",
                                value: queueId
                              }
                            ]
                          }
                        ]
                    }
                };

            var analyticsapi = new AnalyticsApi(pureCloudSession);
            analyticsapi.postQueuesObservationsQuery(query).done(function(queryResult){
                var source   = $("#entry-template").html();
                var template = Handlebars.compile(source);

                $("#results").html(template(queryResult))
            });

        });

    });
