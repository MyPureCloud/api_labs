//API VERSION - 
/**
* @class
* @example
* var api = new AlertingApi(pureCloudSession);
*/
var AlertingApi = function (pureCloudSession) {
	if(!pureCloudSession){
		throw "PureCloudSession is not valid.";
    }

	var self = this;
	/**
     * @summary Get interaction stats alert list.
	 * @memberOf AlertingApi#
	*/
	function getInteractionstatsAlerts(){
		var apipath = '/api/v2/alerting/interactionstats/alerts';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getInteractionstatsAlerts = getInteractionstatsAlerts;
	/**
     * @summary Gets user unread count of interaction stats alerts.
	 * @memberOf AlertingApi#
	*/
	function getInteractionstatsAlertsUnread(){
		var apipath = '/api/v2/alerting/interactionstats/alerts/unread';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getInteractionstatsAlertsUnread = getInteractionstatsAlertsUnread;
	/**
     * @summary Get an interaction stats alert
	 * @memberOf AlertingApi#
	* @param {string} alertId - Alert ID
	*/
	function getInteractionstatsAlertsAlertId(alertId){
		var apipath = '/api/v2/alerting/interactionstats/alerts/{alertId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{alertId}', alertId);

        if(alertId === undefined && alertId !== null){
			throw 'Missing required  parameter: alertId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getInteractionstatsAlertsAlertId = getInteractionstatsAlertsAlertId;
	/**
     * @summary Update an interaction stats alert read status
	 * @memberOf AlertingApi#
	* @param {string} alertId - Alert ID
	* @param {} body - InteractionStatsAlert
	 * @example
	 * Body Example:
	 * {
   "unread": true
}
	*/
	function putInteractionstatsAlertsAlertId(alertId, body){
		var apipath = '/api/v2/alerting/interactionstats/alerts/{alertId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{alertId}', alertId);

        if(alertId === undefined && alertId !== null){
			throw 'Missing required  parameter: alertId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putInteractionstatsAlertsAlertId = putInteractionstatsAlertsAlertId;
	/**
     * @summary Delete an interaction stats alert
	 * @memberOf AlertingApi#
	* @param {string} alertId - Alert ID
	*/
	function deleteInteractionstatsAlertsAlertId(alertId){
		var apipath = '/api/v2/alerting/interactionstats/alerts/{alertId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{alertId}', alertId);

        if(alertId === undefined && alertId !== null){
			throw 'Missing required  parameter: alertId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteInteractionstatsAlertsAlertId = deleteInteractionstatsAlertsAlertId;
	/**
     * @summary Get an interaction stats rule list.
	 * @memberOf AlertingApi#
	*/
	function getInteractionstatsRules(){
		var apipath = '/api/v2/alerting/interactionstats/rules';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getInteractionstatsRules = getInteractionstatsRules;
	/**
     * @summary Create an interaction stats rule.
	 * @memberOf AlertingApi#
	* @param {} body - AlertingRule
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "dimension": "",
   "dimensionValue": "",
   "metric": "",
   "mediaType": "",
   "numericRange": "",
   "statistic": "",
   "value": {},
   "enabled": true,
   "notificationUsers": [],
   "alertTypes": []
}
	*/
	function postInteractionstatsRules(body){
		var apipath = '/api/v2/alerting/interactionstats/rules';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postInteractionstatsRules = postInteractionstatsRules;
	/**
     * @summary Get an interaction stats rule.
	 * @memberOf AlertingApi#
	* @param {string} ruleId - Rule ID
	*/
	function getInteractionstatsRulesRuleId(ruleId){
		var apipath = '/api/v2/alerting/interactionstats/rules/{ruleId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{ruleId}', ruleId);

        if(ruleId === undefined && ruleId !== null){
			throw 'Missing required  parameter: ruleId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getInteractionstatsRulesRuleId = getInteractionstatsRulesRuleId;
	/**
     * @summary Update an interaction stats rule
	 * @memberOf AlertingApi#
	* @param {string} ruleId - Rule ID
	* @param {} body - AlertingRule
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "dimension": "",
   "dimensionValue": "",
   "metric": "",
   "mediaType": "",
   "numericRange": "",
   "statistic": "",
   "value": {},
   "enabled": true,
   "notificationUsers": [],
   "alertTypes": []
}
	*/
	function putInteractionstatsRulesRuleId(ruleId, body){
		var apipath = '/api/v2/alerting/interactionstats/rules/{ruleId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{ruleId}', ruleId);

        if(ruleId === undefined && ruleId !== null){
			throw 'Missing required  parameter: ruleId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putInteractionstatsRulesRuleId = putInteractionstatsRulesRuleId;
	/**
     * @summary Delete an interaction stats rule.
	 * @memberOf AlertingApi#
	* @param {string} ruleId - Rule ID
	*/
	function deleteInteractionstatsRulesRuleId(ruleId){
		var apipath = '/api/v2/alerting/interactionstats/rules/{ruleId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{ruleId}', ruleId);

        if(ruleId === undefined && ruleId !== null){
			throw 'Missing required  parameter: ruleId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteInteractionstatsRulesRuleId = deleteInteractionstatsRulesRuleId;

    return self;
};

//API VERSION - 
/**
* @class
* @example
* var api = new AnalyticsApi(pureCloudSession);
*/
var AnalyticsApi = function (pureCloudSession) {
	if(!pureCloudSession){
		throw "PureCloudSession is not valid.";
    }

	var self = this;
	/**
     * @summary Query for conversation aggregates
	 * @memberOf AnalyticsApi#
	* @param {} body - query
	 * @example
	 * Body Example:
	 * {
   "interval": "",
   "granularity": "",
   "groupBy": [],
   "filter": {
      "type": "",
      "clauses": [],
      "predicates": []
   },
   "metrics": [],
   "flattenMultivaluedDimensions": true
}
	*/
	function postConversationsAggregatesQuery(body){
		var apipath = '/api/v2/analytics/conversations/aggregates/query';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postConversationsAggregatesQuery = postConversationsAggregatesQuery;
	/**
     * @summary Query for conversation details
	 * @memberOf AnalyticsApi#
	* @param {} body - query
	 * @example
	 * Body Example:
	 * {
   "interval": "",
   "conversationFilters": [],
   "evaluationFilters": [],
   "segmentFilters": [],
   "aggregations": [],
   "paging": {
      "pageSize": 0,
      "pageNumber": 0
   },
   "order": "",
   "orderBy": ""
}
	*/
	function postConversationsDetailsQuery(body){
		var apipath = '/api/v2/analytics/conversations/details/query';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postConversationsDetailsQuery = postConversationsDetailsQuery;
	/**
     * @summary Get a conversation by id
	 * @memberOf AnalyticsApi#
	* @param {string} conversationId - conversationId
	*/
	function getConversationsConversationIdDetails(conversationId){
		var apipath = '/api/v2/analytics/conversations/{conversationId}/details';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{conversationId}', conversationId);

        if(conversationId === undefined && conversationId !== null){
			throw 'Missing required  parameter: conversationId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getConversationsConversationIdDetails = getConversationsConversationIdDetails;
	/**
     * @summary Index conversation properties
	 * @memberOf AnalyticsApi#
	* @param {string} conversationId - conversationId
	* @param {} body - request
	 * @example
	 * Body Example:
	 * {
   "sessionId": "",
   "timestamp": 0,
   "properties": []
}
	*/
	function postConversationsConversationIdDetailsProperties(conversationId, body){
		var apipath = '/api/v2/analytics/conversations/{conversationId}/details/properties';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{conversationId}', conversationId);

        if(conversationId === undefined && conversationId !== null){
			throw 'Missing required  parameter: conversationId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postConversationsConversationIdDetailsProperties = postConversationsConversationIdDetailsProperties;
	/**
     * @summary Query for evaluation aggregates
	 * @memberOf AnalyticsApi#
	* @param {} body - query
	 * @example
	 * Body Example:
	 * {
   "interval": "",
   "granularity": "",
   "groupBy": [],
   "filter": {
      "type": "",
      "clauses": [],
      "predicates": []
   },
   "metrics": [],
   "flattenMultivaluedDimensions": true
}
	*/
	function postEvaluationsAggregatesQuery(body){
		var apipath = '/api/v2/analytics/evaluations/aggregates/query';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postEvaluationsAggregatesQuery = postEvaluationsAggregatesQuery;
	/**
     * @summary Query for queue observations
	 * @memberOf AnalyticsApi#
	* @param {} body - query
	 * @example
	 * Body Example:
	 * {
   "filter": {
      "type": "",
      "clauses": [],
      "predicates": []
   },
   "metrics": []
}
	*/
	function postQueuesObservationsQuery(body){
		var apipath = '/api/v2/analytics/queues/observations/query';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postQueuesObservationsQuery = postQueuesObservationsQuery;
	/**
     * @summary Get list of reporting metadata.
	 * @memberOf AnalyticsApi#
	* @param {integer} pageNumber - Page number
	* @param {integer} pageSize - Page size
	* @param {string} locale - Locale
	*/
	function getReportingMetadata(pageNumber, pageSize, locale){
		var apipath = '/api/v2/analytics/reporting/metadata';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(locale !== undefined && locale !== null){
			queryParameters.locale = locale;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getReportingMetadata = getReportingMetadata;
	/**
     * @summary Get a list of report formats
	 * @description Get a list of report formats.
	 * @memberOf AnalyticsApi#
	*/
	function getReportingReportformats(){
		var apipath = '/api/v2/analytics/reporting/reportformats';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getReportingReportformats = getReportingReportformats;
	/**
     * @summary Get a list of scheduled report jobs
	 * @description Get a list of scheduled report jobs.
	 * @memberOf AnalyticsApi#
	* @param {integer} pageNumber - Page number
	* @param {integer} pageSize - Page size
	*/
	function getReportingSchedules(pageNumber, pageSize){
		var apipath = '/api/v2/analytics/reporting/schedules';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getReportingSchedules = getReportingSchedules;
	/**
     * @summary Create a scheduled report job
	 * @description Create a scheduled report job.
	 * @memberOf AnalyticsApi#
	* @param {} body - ReportSchedule
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "quartzCronExpression": "",
   "nextFireTime": "",
   "dateCreated": "",
   "dateModified": "",
   "description": "",
   "timeZone": "",
   "timePeriod": "",
   "interval": "",
   "reportFormat": "",
   "locale": "",
   "enabled": true,
   "reportId": "",
   "parameters": {},
   "lastRun": {
      "name": "",
      "reportId": "",
      "runTime": "",
      "runStatus": "",
      "errorMessage": "",
      "runDurationMsec": 0,
      "reportUrl": "",
      "reportFormat": "",
      "scheduleUri": ""
   }
}
	*/
	function postReportingSchedules(body){
		var apipath = '/api/v2/analytics/reporting/schedules';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postReportingSchedules = postReportingSchedules;
	/**
     * @summary Get a scheduled report job.
	 * @memberOf AnalyticsApi#
	* @param {string} scheduleId - Schedule ID
	*/
	function getReportingSchedulesScheduleId(scheduleId){
		var apipath = '/api/v2/analytics/reporting/schedules/{scheduleId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{scheduleId}', scheduleId);

        if(scheduleId === undefined && scheduleId !== null){
			throw 'Missing required  parameter: scheduleId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getReportingSchedulesScheduleId = getReportingSchedulesScheduleId;
	/**
     * @summary Update a scheduled report job.
	 * @memberOf AnalyticsApi#
	* @param {string} scheduleId - Schedule ID
	* @param {} body - ReportSchedule
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "quartzCronExpression": "",
   "nextFireTime": "",
   "dateCreated": "",
   "dateModified": "",
   "description": "",
   "timeZone": "",
   "timePeriod": "",
   "interval": "",
   "reportFormat": "",
   "locale": "",
   "enabled": true,
   "reportId": "",
   "parameters": {},
   "lastRun": {
      "name": "",
      "reportId": "",
      "runTime": "",
      "runStatus": "",
      "errorMessage": "",
      "runDurationMsec": 0,
      "reportUrl": "",
      "reportFormat": "",
      "scheduleUri": ""
   }
}
	*/
	function putReportingSchedulesScheduleId(scheduleId, body){
		var apipath = '/api/v2/analytics/reporting/schedules/{scheduleId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{scheduleId}', scheduleId);

        if(scheduleId === undefined && scheduleId !== null){
			throw 'Missing required  parameter: scheduleId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putReportingSchedulesScheduleId = putReportingSchedulesScheduleId;
	/**
     * @summary Delete a scheduled report job.
	 * @memberOf AnalyticsApi#
	* @param {string} scheduleId - Schedule ID
	*/
	function deleteReportingSchedulesScheduleId(scheduleId){
		var apipath = '/api/v2/analytics/reporting/schedules/{scheduleId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{scheduleId}', scheduleId);

        if(scheduleId === undefined && scheduleId !== null){
			throw 'Missing required  parameter: scheduleId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteReportingSchedulesScheduleId = deleteReportingSchedulesScheduleId;
	/**
     * @summary Get list of completed scheduled report jobs.
	 * @memberOf AnalyticsApi#
	* @param {string} scheduleId - Schedule ID
	* @param {integer} pageNumber - 
	* @param {integer} pageSize - 
	*/
	function getReportingSchedulesScheduleIdHistory(scheduleId, pageNumber, pageSize){
		var apipath = '/api/v2/analytics/reporting/schedules/{scheduleId}/history';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{scheduleId}', scheduleId);

        if(scheduleId === undefined && scheduleId !== null){
			throw 'Missing required  parameter: scheduleId';
        }


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getReportingSchedulesScheduleIdHistory = getReportingSchedulesScheduleIdHistory;
	/**
     * @summary Get most recently completed scheduled report job.
	 * @memberOf AnalyticsApi#
	* @param {string} scheduleId - Schedule ID
	*/
	function getReportingSchedulesScheduleIdHistoryLatest(scheduleId){
		var apipath = '/api/v2/analytics/reporting/schedules/{scheduleId}/history/latest';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{scheduleId}', scheduleId);

        if(scheduleId === undefined && scheduleId !== null){
			throw 'Missing required  parameter: scheduleId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getReportingSchedulesScheduleIdHistoryLatest = getReportingSchedulesScheduleIdHistoryLatest;
	/**
     * @summary A completed scheduled report job
	 * @description A completed scheduled report job.
	 * @memberOf AnalyticsApi#
	* @param {string} runId - Run ID
	* @param {string} scheduleId - Schedule ID
	*/
	function getReportingSchedulesScheduleIdHistoryRunId(runId, scheduleId){
		var apipath = '/api/v2/analytics/reporting/schedules/{scheduleId}/history/{runId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{runId}', runId);

        if(runId === undefined && runId !== null){
			throw 'Missing required  parameter: runId';
        }

        apipath = apipath.replace('{scheduleId}', scheduleId);

        if(scheduleId === undefined && scheduleId !== null){
			throw 'Missing required  parameter: scheduleId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getReportingSchedulesScheduleIdHistoryRunId = getReportingSchedulesScheduleIdHistoryRunId;
	/**
     * @summary Place a scheduled report immediately into the reporting queue
	 * @memberOf AnalyticsApi#
	* @param {string} scheduleId - Schedule ID
	*/
	function postReportingSchedulesScheduleIdRunreport(scheduleId){
		var apipath = '/api/v2/analytics/reporting/schedules/{scheduleId}/runreport';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{scheduleId}', scheduleId);

        if(scheduleId === undefined && scheduleId !== null){
			throw 'Missing required  parameter: scheduleId';
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postReportingSchedulesScheduleIdRunreport = postReportingSchedulesScheduleIdRunreport;
	/**
     * @summary Get a list of report time periods.
	 * @memberOf AnalyticsApi#
	*/
	function getReportingTimeperiods(){
		var apipath = '/api/v2/analytics/reporting/timeperiods';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getReportingTimeperiods = getReportingTimeperiods;
	/**
     * @summary Get a reporting metadata.
	 * @memberOf AnalyticsApi#
	* @param {string} reportId - Report ID
	* @param {string} locale - Locale
	*/
	function getReportingReportIdMetadata(reportId, locale){
		var apipath = '/api/v2/analytics/reporting/{reportId}/metadata';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{reportId}', reportId);

        if(reportId === undefined && reportId !== null){
			throw 'Missing required  parameter: reportId';
        }


		if(locale !== undefined && locale !== null){
			queryParameters.locale = locale;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getReportingReportIdMetadata = getReportingReportIdMetadata;
	/**
     * @summary Query for user aggregates
	 * @memberOf AnalyticsApi#
	* @param {} body - query
	 * @example
	 * Body Example:
	 * {
   "interval": "",
   "granularity": "",
   "groupBy": [],
   "filter": {
      "type": "",
      "clauses": [],
      "predicates": []
   },
   "metrics": [],
   "flattenMultivaluedDimensions": true
}
	*/
	function postUsersAggregatesQuery(body){
		var apipath = '/api/v2/analytics/users/aggregates/query';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postUsersAggregatesQuery = postUsersAggregatesQuery;
	/**
     * @summary Query for user observations
	 * @memberOf AnalyticsApi#
	* @param {} body - query
	 * @example
	 * Body Example:
	 * {
   "filter": {
      "type": "",
      "clauses": [],
      "predicates": []
   },
   "metrics": []
}
	*/
	function postUsersObservationsQuery(body){
		var apipath = '/api/v2/analytics/users/observations/query';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postUsersObservationsQuery = postUsersObservationsQuery;

    return self;
};

//API VERSION - 
/**
* @class
* @example
* var api = new AttributesApi(pureCloudSession);
*/
var AttributesApi = function (pureCloudSession) {
	if(!pureCloudSession){
		throw "PureCloudSession is not valid.";
    }

	var self = this;
	/**
     * @summary Gets a list of existing attributes.
	 * @memberOf AttributesApi#
	* @param {integer} pageNumber - Page number
	* @param {integer} pageSize - Page size
	*/
	function getAttributes(pageNumber, pageSize){
		var apipath = '/api/v2/attributes';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getAttributes = getAttributes;
	/**
     * @summary Create an attribute.
	 * @memberOf AttributesApi#
	* @param {} body - Attribute
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "version": 0,
   "description": "",
   "createdBy": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "dateCreated": "",
   "modifiedBy": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "dateModified": ""
}
	*/
	function postAttributes(body){
		var apipath = '/api/v2/attributes';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postAttributes = postAttributes;
	/**
     * @summary Query attributes
	 * @memberOf AttributesApi#
	* @param {} body - query
	 * @example
	 * Body Example:
	 * {
   "query": "",
   "pageSize": 0,
   "pageNumber": 0
}
	*/
	function postQuery(body){
		var apipath = '/api/v2/attributes/query';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postQuery = postQuery;
	/**
     * @summary Get details about an existing attribute.
	 * @memberOf AttributesApi#
	* @param {string} attributeId - Attribute ID
	*/
	function getAttributeId(attributeId){
		var apipath = '/api/v2/attributes/{attributeId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{attributeId}', attributeId);

        if(attributeId === undefined && attributeId !== null){
			throw 'Missing required  parameter: attributeId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getAttributeId = getAttributeId;
	/**
     * @summary Update an existing attribute.
	 * @description Fields that can be updated: name, description. The most recent version is required for updates.
	 * @memberOf AttributesApi#
	* @param {string} attributeId - Attribute ID
	* @param {} body - Attribute
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "version": 0,
   "description": "",
   "createdBy": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "dateCreated": "",
   "modifiedBy": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "dateModified": ""
}
	*/
	function putAttributeId(attributeId, body){
		var apipath = '/api/v2/attributes/{attributeId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{attributeId}', attributeId);

        if(attributeId === undefined && attributeId !== null){
			throw 'Missing required  parameter: attributeId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putAttributeId = putAttributeId;
	/**
     * @summary Delete an existing Attribute.
	 * @description This will remove attribute.
	 * @memberOf AttributesApi#
	* @param {string} attributeId - Attribute ID
	*/
	function deleteAttributeId(attributeId){
		var apipath = '/api/v2/attributes/{attributeId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{attributeId}', attributeId);

        if(attributeId === undefined && attributeId !== null){
			throw 'Missing required  parameter: attributeId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteAttributeId = deleteAttributeId;

    return self;
};

//API VERSION - 
/**
* @class
* @example
* var api = new AuthorizationApi(pureCloudSession);
*/
var AuthorizationApi = function (pureCloudSession) {
	if(!pureCloudSession){
		throw "PureCloudSession is not valid.";
    }

	var self = this;
	/**
     * @summary Get all permissions.
	 * @description Retrieve a list of all permission defined in the system.
	 * @memberOf AuthorizationApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	*/
	function getPermissions(pageSize, pageNumber){
		var apipath = '/api/v2/authorization/permissions';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getPermissions = getPermissions;
	/**
     * @summary Get the list of enabled products
	 * @description Gets the list of enabled products. Some example product names are: collaborateFree, collaboratePro, communicate, and engage.
	 * @memberOf AuthorizationApi#
	*/
	function getProducts(){
		var apipath = '/api/v2/authorization/products';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getProducts = getProducts;
	/**
     * @summary Retrieve a list of all roles defined for the organization
	 * @memberOf AuthorizationApi#
	* @param {integer} pageSize - The total page size requested
	* @param {integer} pageNumber - The page number requested
	* @param {string} sortBy - variable name requested to sort by
	* @param {array} expand - variable name requested by expand list
	* @param {string} nextPage - next page token
	* @param {string} previousPage - Previous page token
	* @param {array} permission - 
	* @param {boolean} userCount - 
	*/
	function getRoles(pageSize, pageNumber, sortBy, expand, nextPage, previousPage, permission, userCount){
		var apipath = '/api/v2/authorization/roles';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		if(nextPage !== undefined && nextPage !== null){
			queryParameters.nextPage = nextPage;
		}


		if(previousPage !== undefined && previousPage !== null){
			queryParameters.previousPage = previousPage;
		}


		if(permission !== undefined && permission !== null){
			queryParameters.permission = permission;
		}


		if(userCount !== undefined && userCount !== null){
			queryParameters.userCount = userCount;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getRoles = getRoles;
	/**
     * @summary Create an organization role.
	 * @memberOf AuthorizationApi#
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "description": "",
   "defaultRoleId": "",
   "permissions": [],
   "permissionPolicies": [],
   "userCount": 0,
   "roleNeedsUpdate": true,
   "default": true
}
	*/
	function postRoles(body){
		var apipath = '/api/v2/authorization/roles';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postRoles = postRoles;
	/**
     * @summary Restores all default roles
	 * @description This endpoint serves several purposes. 1. It provides the org with default roles. This is important for default roles that will be added after go-live (they can retroactively add the new default-role). Note: When not using a query param of force=true, it only adds the default roles not configured for the org; it does not overwrite roles. 2. Using the query param force=true, you can restore all default roles. Note: This does not have an effect on custom roles.
	 * @memberOf AuthorizationApi#
	* @param {boolean} force - Restore default roles
	*/
	function postRolesDefault(force){
		var apipath = '/api/v2/authorization/roles/default';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(force !== undefined && force !== null){
			queryParameters.force = force;
		}


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postRolesDefault = postRolesDefault;
	/**
     * @summary Restore specified default roles
	 * @memberOf AuthorizationApi#
	* @param {} body - 
	*/
	function putRolesDefault(body){
		var apipath = '/api/v2/authorization/roles/default';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putRolesDefault = putRolesDefault;
	/**
     * @summary Get an org role to default role comparison comparison
	 * @description Compares any organization role to a default role id and show differences
	 * @memberOf AuthorizationApi#
	* @param {string} leftRoleId - Left Role ID
	* @param {string} rightRoleId - Right Role id
	*/
	function getRolesLeftroleIdComparedefaultRightroleId(leftRoleId, rightRoleId){
		var apipath = '/api/v2/authorization/roles/{leftRoleId}/comparedefault/{rightRoleId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{leftRoleId}', leftRoleId);

        if(leftRoleId === undefined && leftRoleId !== null){
			throw 'Missing required  parameter: leftRoleId';
        }

        apipath = apipath.replace('{rightRoleId}', rightRoleId);

        if(rightRoleId === undefined && rightRoleId !== null){
			throw 'Missing required  parameter: rightRoleId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getRolesLeftroleIdComparedefaultRightroleId = getRolesLeftroleIdComparedefaultRightroleId;
	/**
     * @summary  Get an unsaved org role to default role comparison
	 * @description Allows users to compare their existing roles in an unsaved state to its default role
	 * @memberOf AuthorizationApi#
	* @param {string} leftRoleId - Left Role ID
	* @param {string} rightRoleId - Right Role id
	* @param {} body - Allows users to compare their existing roles in an unsaved state to its default role
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "description": "",
   "defaultRoleId": "",
   "permissions": [],
   "permissionPolicies": [],
   "userCount": 0,
   "roleNeedsUpdate": true,
   "default": true
}
	*/
	function postRolesLeftroleIdComparedefaultRightroleId(leftRoleId, rightRoleId, body){
		var apipath = '/api/v2/authorization/roles/{leftRoleId}/comparedefault/{rightRoleId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{leftRoleId}', leftRoleId);

        if(leftRoleId === undefined && leftRoleId !== null){
			throw 'Missing required  parameter: leftRoleId';
        }

        apipath = apipath.replace('{rightRoleId}', rightRoleId);

        if(rightRoleId === undefined && rightRoleId !== null){
			throw 'Missing required  parameter: rightRoleId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postRolesLeftroleIdComparedefaultRightroleId = postRolesLeftroleIdComparedefaultRightroleId;
	/**
     * @summary Get a single organization role.
	 * @description Get the organization role specified by its ID.
	 * @memberOf AuthorizationApi#
	* @param {string} roleId - Role ID
	*/
	function getRolesRoleId(roleId){
		var apipath = '/api/v2/authorization/roles/{roleId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{roleId}', roleId);

        if(roleId === undefined && roleId !== null){
			throw 'Missing required  parameter: roleId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getRolesRoleId = getRolesRoleId;
	/**
     * @summary Update an organization role.
	 * @description Update
	 * @memberOf AuthorizationApi#
	* @param {string} roleId - Role ID
	* @param {} body - Update
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "description": "",
   "defaultRoleId": "",
   "permissions": [],
   "permissionPolicies": [],
   "userCount": 0,
   "roleNeedsUpdate": true,
   "default": true
}
	*/
	function putRolesRoleId(roleId, body){
		var apipath = '/api/v2/authorization/roles/{roleId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{roleId}', roleId);

        if(roleId === undefined && roleId !== null){
			throw 'Missing required  parameter: roleId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putRolesRoleId = putRolesRoleId;
	/**
     * @summary Delete an organization role.
	 * @memberOf AuthorizationApi#
	* @param {string} roleId - Role ID
	*/
	function deleteRolesRoleId(roleId){
		var apipath = '/api/v2/authorization/roles/{roleId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{roleId}', roleId);

        if(roleId === undefined && roleId !== null){
			throw 'Missing required  parameter: roleId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteRolesRoleId = deleteRolesRoleId;
	/**
     * @summary Patch Organization Role for needsUpdate Field
	 * @description Patch Organization Role for needsUpdate Field
	 * @memberOf AuthorizationApi#
	* @param {string} roleId - Role ID
	* @param {} body - Patch Organization Role for needsUpdate Field
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "description": "",
   "defaultRoleId": "",
   "permissions": [],
   "permissionPolicies": [],
   "userCount": 0,
   "roleNeedsUpdate": true,
   "default": true
}
	*/
	function patchRolesRoleId(roleId, body){
		var apipath = '/api/v2/authorization/roles/{roleId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{roleId}', roleId);

        if(roleId === undefined && roleId !== null){
			throw 'Missing required  parameter: roleId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PATCH', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.patchRolesRoleId = patchRolesRoleId;
	/**
     * @summary Sets the users for the role
	 * @memberOf AuthorizationApi#
	* @param {string} roleId - Role ID
	* @param {} body - 
	*/
	function putRolesRoleIdUsersAdd(roleId, body){
		var apipath = '/api/v2/authorization/roles/{roleId}/users/add';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{roleId}', roleId);

        if(roleId === undefined && roleId !== null){
			throw 'Missing required  parameter: roleId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putRolesRoleIdUsersAdd = putRolesRoleIdUsersAdd;
	/**
     * @summary Removes the users from the role
	 * @memberOf AuthorizationApi#
	* @param {string} roleId - Role ID
	* @param {} body - 
	*/
	function putRolesRoleIdUsersRemove(roleId, body){
		var apipath = '/api/v2/authorization/roles/{roleId}/users/remove';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{roleId}', roleId);

        if(roleId === undefined && roleId !== null){
			throw 'Missing required  parameter: roleId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putRolesRoleIdUsersRemove = putRolesRoleIdUsersRemove;
	/**
     * @summary Returns a listing of roles and permissions for a user.
	 * @memberOf AuthorizationApi#
	* @param {string} userId - User ID
	*/
	function getUserIdRoles(userId){
		var apipath = '/api/v2/users/{userId}/roles';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{userId}', userId);

        if(userId === undefined && userId !== null){
			throw 'Missing required  parameter: userId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getUserIdRoles = getUserIdRoles;
	/**
     * @summary Sets the user's roles
	 * @memberOf AuthorizationApi#
	* @param {string} userId - User ID
	* @param {} body - 
	*/
	function putUserIdRoles(userId, body){
		var apipath = '/api/v2/users/{userId}/roles';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{userId}', userId);

        if(userId === undefined && userId !== null){
			throw 'Missing required  parameter: userId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putUserIdRoles = putUserIdRoles;
	/**
     * @summary Removes all the roles from the user.
	 * @memberOf AuthorizationApi#
	* @param {string} userId - User ID
	*/
	function deleteUserIdRoles(userId){
		var apipath = '/api/v2/users/{userId}/roles';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{userId}', userId);

        if(userId === undefined && userId !== null){
			throw 'Missing required  parameter: userId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteUserIdRoles = deleteUserIdRoles;

    return self;
};

//API VERSION - 
/**
* @class
* @example
* var api = new ConfigurationApi(pureCloudSession);
*/
var ConfigurationApi = function (pureCloudSession) {
	if(!pureCloudSession){
		throw "PureCloudSession is not valid.";
    }

	var self = this;
	/**
     * @summary Get encryption key list
	 * @memberOf ConfigurationApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	*/
	function getRecordingkeys(pageSize, pageNumber){
		var apipath = '/api/v2/recording/recordingkeys';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getRecordingkeys = getRecordingkeys;
	/**
     * @summary Create encryption key
	 * @memberOf ConfigurationApi#
	*/
	function postRecordingkeys(){
		var apipath = '/api/v2/recording/recordingkeys';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postRecordingkeys = postRecordingkeys;
	/**
     * @summary Get key rotation schedule
	 * @memberOf ConfigurationApi#
	*/
	function getRecordingkeysRotationschedule(){
		var apipath = '/api/v2/recording/recordingkeys/rotationschedule';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getRecordingkeysRotationschedule = getRecordingkeysRotationschedule;
	/**
     * @summary Update key rotation schedule
	 * @memberOf ConfigurationApi#
	* @param {} body - KeyRotationSchedule
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "period": ""
}
	*/
	function putRecordingkeysRotationschedule(body){
		var apipath = '/api/v2/recording/recordingkeys/rotationschedule';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putRecordingkeysRotationschedule = putRecordingkeysRotationschedule;

    return self;
};

//API VERSION - 
/**
* @class
* @example
* var api = new ContentManagementApi(pureCloudSession);
*/
var ContentManagementApi = function (pureCloudSession) {
	if(!pureCloudSession){
		throw "PureCloudSession is not valid.";
    }

	var self = this;
	/**
     * @summary Query audits
	 * @memberOf ContentManagementApi#
	* @param {} body - Allows for a filtered query returning facet information
	 * @example
	 * Body Example:
	 * {
   "queryPhrase": "",
   "pageNumber": 0,
   "pageSize": 0,
   "facetNameRequests": [],
   "sort": [],
   "filters": [],
   "attributeFilters": []
}
	*/
	function postAuditquery(body){
		var apipath = '/api/v2/contentmanagement/auditquery';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }

        if(body === undefined && body !== null){
			throw 'Missing required  parameter: body';
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postAuditquery = postAuditquery;
	/**
     * @summary Get a list of documents.
	 * @memberOf ContentManagementApi#
	* @param {string} workspaceId - Workspace ID
	* @param {string} name - Name
	* @param {string} expand - Expand some document fields
	acl,
	workspace,
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} sortBy - name or dateCreated
	* @param {string} sortOrder - ascending or descending
	*/
	function getDocuments(workspaceId, name, expand, pageSize, pageNumber, sortBy, sortOrder){
		var apipath = '/api/v2/contentmanagement/documents';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(workspaceId !== undefined && workspaceId !== null){
			queryParameters.workspaceId = workspaceId;
		}

        if(workspaceId === undefined && workspaceId !== null){
			throw 'Missing required  parameter: workspaceId';
        }


		if(name !== undefined && name !== null){
			queryParameters.name = name;
		}


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		if(sortOrder !== undefined && sortOrder !== null){
			queryParameters.sortOrder = sortOrder;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getDocuments = getDocuments;
	/**
     * @summary Add a document.
	 * @memberOf ContentManagementApi#
	* @param {} body - Document
	* @param {string} copySource - Copy a document within a workspace or to a new workspace. Provide a document ID as the copy source.
	* @param {string} moveSource - Move a document to a new workspace. Provide a document ID as the move source.
	* @param {boolean} override - Override any lock on the source document
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "workspace": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "tags": [],
   "tagIds": []
}
	*/
	function postDocuments(body, copySource, moveSource, override){
		var apipath = '/api/v2/contentmanagement/documents';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		if(copySource !== undefined && copySource !== null){
			queryParameters.copySource = copySource;
		}


		if(moveSource !== undefined && moveSource !== null){
			queryParameters.moveSource = moveSource;
		}


		if(override !== undefined && override !== null){
			queryParameters.override = override;
		}


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postDocuments = postDocuments;
	/**
     * @summary Get a document.
	 * @memberOf ContentManagementApi#
	* @param {string} documentId - Document ID
	* @param {string} expand - Expand some document fields
	lockInfo,
	acl,
	workspace,
	*/
	function getDocumentsDocumentId(documentId, expand){
		var apipath = '/api/v2/contentmanagement/documents/{documentId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{documentId}', documentId);

        if(documentId === undefined && documentId !== null){
			throw 'Missing required  parameter: documentId';
        }


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getDocumentsDocumentId = getDocumentsDocumentId;
	/**
     * @summary Update a document.
	 * @memberOf ContentManagementApi#
	* @param {string} documentId - Document ID
	* @param {} body - Document
	* @param {string} expand - Expand some document fields
	acl,
	* @param {boolean} override - Override any lock on the document
	 * @example
	 * Body Example:
	 * {
   "changeNumber": 0,
   "name": "",
   "read": true,
   "addTags": [],
   "removeTags": [],
   "addTagIds": [],
   "removeTagIds": [],
   "updateAttributes": [],
   "removeAttributes": []
}
	*/
	function postDocumentsDocumentId(documentId, body, expand, override){
		var apipath = '/api/v2/contentmanagement/documents/{documentId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{documentId}', documentId);

        if(documentId === undefined && documentId !== null){
			throw 'Missing required  parameter: documentId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		if(override !== undefined && override !== null){
			queryParameters.override = override;
		}


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postDocumentsDocumentId = postDocumentsDocumentId;
	/**
     * @summary Delete a document.
	 * @memberOf ContentManagementApi#
	* @param {string} documentId - Document ID
	* @param {boolean} override - Override any lock on the document
	*/
	function deleteDocumentsDocumentId(documentId, override){
		var apipath = '/api/v2/contentmanagement/documents/{documentId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{documentId}', documentId);

        if(documentId === undefined && documentId !== null){
			throw 'Missing required  parameter: documentId';
        }


		if(override !== undefined && override !== null){
			queryParameters.override = override;
		}


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteDocumentsDocumentId = deleteDocumentsDocumentId;
	/**
     * @summary Get a list of audits for a document.
	 * @memberOf ContentManagementApi#
	* @param {string} documentId - Document ID
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} transactionFilter - Transaction filter
	* @param {string} level - level
	* @param {string} sortBy - Sort by
	* @param {string} sortOrder - Sort order
	*/
	function getDocumentsDocumentIdAudits(documentId, pageSize, pageNumber, transactionFilter, level, sortBy, sortOrder){
		var apipath = '/api/v2/contentmanagement/documents/{documentId}/audits';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{documentId}', documentId);

        if(documentId === undefined && documentId !== null){
			throw 'Missing required  parameter: documentId';
        }


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(transactionFilter !== undefined && transactionFilter !== null){
			queryParameters.transactionFilter = transactionFilter;
		}


		if(level !== undefined && level !== null){
			queryParameters.level = level;
		}


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		if(sortOrder !== undefined && sortOrder !== null){
			queryParameters.sortOrder = sortOrder;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getDocumentsDocumentIdAudits = getDocumentsDocumentIdAudits;
	/**
     * @summary Download a document.
	 * @memberOf ContentManagementApi#
	* @param {string} documentId - Document ID
	* @param {string} disposition - Request how the content will be downloaded: attached as a file or inline. Default is attachment.
	attachment,
	inline,
	* @param {string} contentType - The requested format for the specified document. If supported, the document will be returned in that format. Example contentType=audio/wav
	*/
	function getDocumentsDocumentIdContent(documentId, disposition, contentType){
		var apipath = '/api/v2/contentmanagement/documents/{documentId}/content';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{documentId}', documentId);

        if(documentId === undefined && documentId !== null){
			throw 'Missing required  parameter: documentId';
        }


		if(disposition !== undefined && disposition !== null){
			queryParameters.disposition = disposition;
		}


		if(contentType !== undefined && contentType !== null){
			queryParameters.contentType = contentType;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getDocumentsDocumentIdContent = getDocumentsDocumentIdContent;
	/**
     * @summary Replace the contents of a document.
	 * @memberOf ContentManagementApi#
	* @param {string} documentId - Document ID
	* @param {} body - Replace Request
	* @param {boolean} override - Override any lock on the document
	 * @example
	 * Body Example:
	 * {
   "changeNumber": 0,
   "name": "",
   "authToken": ""
}
	*/
	function postDocumentsDocumentIdContent(documentId, body, override){
		var apipath = '/api/v2/contentmanagement/documents/{documentId}/content';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{documentId}', documentId);

        if(documentId === undefined && documentId !== null){
			throw 'Missing required  parameter: documentId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		if(override !== undefined && override !== null){
			queryParameters.override = override;
		}


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postDocumentsDocumentIdContent = postDocumentsDocumentIdContent;
	/**
     * @summary Query content
	 * @memberOf ContentManagementApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} sortBy - name or dateCreated
	* @param {string} sortOrder - ascending or descending
	* @param {string} queryPhrase - Phrase tokens are ANDed together over all searchable fields
	* @param {string} expand - Expand some document fields
	acl,
	workspace,
	*/
	function getQuery(pageSize, pageNumber, sortBy, sortOrder, queryPhrase, expand){
		var apipath = '/api/v2/contentmanagement/query';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		if(sortOrder !== undefined && sortOrder !== null){
			queryParameters.sortOrder = sortOrder;
		}


		if(queryPhrase !== undefined && queryPhrase !== null){
			queryParameters.queryPhrase = queryPhrase;
		}

        if(queryPhrase === undefined && queryPhrase !== null){
			throw 'Missing required  parameter: queryPhrase';
        }


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getQuery = getQuery;
	/**
     * @summary Query content
	 * @memberOf ContentManagementApi#
	* @param {} body - Allows for a filtered query returning facet information
	* @param {string} expand - Expand some document fields
	acl,
	workspace,
	 * @example
	 * Body Example:
	 * {
   "queryPhrase": "",
   "pageNumber": 0,
   "pageSize": 0,
   "facetNameRequests": [],
   "sort": [],
   "filters": [],
   "attributeFilters": []
}
	*/
	function postQuery(body, expand){
		var apipath = '/api/v2/contentmanagement/query';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }

        if(body === undefined && body !== null){
			throw 'Missing required  parameter: body';
        }


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postQuery = postQuery;
	/**
     * @summary Get a List of Security Profiles
	 * @memberOf ContentManagementApi#
	*/
	function getSecurityprofiles(){
		var apipath = '/api/v2/contentmanagement/securityprofiles';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getSecurityprofiles = getSecurityprofiles;
	/**
     * @summary Get a Security Profile
	 * @memberOf ContentManagementApi#
	* @param {string} securityProfileId - Security Profile Id
	*/
	function getSecurityprofilesSecurityprofileId(securityProfileId){
		var apipath = '/api/v2/contentmanagement/securityprofiles/{securityProfileId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{securityProfileId}', securityProfileId);

        if(securityProfileId === undefined && securityProfileId !== null){
			throw 'Missing required  parameter: securityProfileId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getSecurityprofilesSecurityprofileId = getSecurityprofilesSecurityprofileId;
	/**
     * @summary Get shared documents. Securely download a shared document.
	 * @description This method requires the download sharing URI obtained in the get document response (downloadSharingUri). Documents may be shared between users in the same workspace. Documents may also be shared between any user by creating a content management share.
	 * @memberOf ContentManagementApi#
	* @param {string} sharedId - Shared ID
	* @param {boolean} redirect - Turn on or off redirect
	* @param {string} disposition - Request how the share content will be downloaded: attached as a file or inline. Default is attachment.
	attachment,
	inline,
	none,
	* @param {string} contentType - The requested format for the specified document. If supported, the document will be returned in that format. Example contentType=audio/wav
	* @param {string} expand - Expand some document fields
	document.acl,
	*/
	function getSharedSharedId(sharedId, redirect, disposition, contentType, expand){
		var apipath = '/api/v2/contentmanagement/shared/{sharedId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{sharedId}', sharedId);

        if(sharedId === undefined && sharedId !== null){
			throw 'Missing required  parameter: sharedId';
        }


		if(redirect !== undefined && redirect !== null){
			queryParameters.redirect = redirect;
		}


		if(disposition !== undefined && disposition !== null){
			queryParameters.disposition = disposition;
		}


		if(contentType !== undefined && contentType !== null){
			queryParameters.contentType = contentType;
		}


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getSharedSharedId = getSharedSharedId;
	/**
     * @summary Gets a list of shares.  You must specify at least one filter (e.g. entityId).
	 * @description Failing to specify a filter will return 400.
	 * @memberOf ContentManagementApi#
	* @param {string} entityId - Filters the shares returned to only the entity specified by the value of this parameter.
	* @param {string} expand - Expand share fields
	member,
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	*/
	function getShares(entityId, expand, pageSize, pageNumber){
		var apipath = '/api/v2/contentmanagement/shares';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(entityId !== undefined && entityId !== null){
			queryParameters.entityId = entityId;
		}


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getShares = getShares;
	/**
     * @summary Creates a new share or updates an existing share if the entity has already been shared
	 * @memberOf ContentManagementApi#
	* @param {} body - CreateShareRequest - entity id and type and a single member or list of members are required
	 * @example
	 * Body Example:
	 * {
   "sharedEntityType": "",
   "sharedEntity": {
      "id": ""
   },
   "memberType": "",
   "member": {
      "id": ""
   },
   "members": []
}
	*/
	function postShares(body){
		var apipath = '/api/v2/contentmanagement/shares';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postShares = postShares;
	/**
     * @summary Retrieve details about an existing share.
	 * @memberOf ContentManagementApi#
	* @param {string} shareId - Share ID
	* @param {string} expand - Expand share fields
	member,
	*/
	function getSharesShareId(shareId, expand){
		var apipath = '/api/v2/contentmanagement/shares/{shareId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{shareId}', shareId);

        if(shareId === undefined && shareId !== null){
			throw 'Missing required  parameter: shareId';
        }


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getSharesShareId = getSharesShareId;
	/**
     * @summary Deletes an existing share.
	 * @description This revokes sharing rights specified in the share record
	 * @memberOf ContentManagementApi#
	* @param {string} shareId - Share ID
	*/
	function deleteSharesShareId(shareId){
		var apipath = '/api/v2/contentmanagement/shares/{shareId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{shareId}', shareId);

        if(shareId === undefined && shareId !== null){
			throw 'Missing required  parameter: shareId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteSharesShareId = deleteSharesShareId;
	/**
     * @summary Get a list of statuses for pending operations
	 * @memberOf ContentManagementApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	*/
	function getStatus(pageSize, pageNumber){
		var apipath = '/api/v2/contentmanagement/status';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getStatus = getStatus;
	/**
     * @summary Get a status.
	 * @memberOf ContentManagementApi#
	* @param {string} statusId - Status ID
	*/
	function getStatusStatusId(statusId){
		var apipath = '/api/v2/contentmanagement/status/{statusId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{statusId}', statusId);

        if(statusId === undefined && statusId !== null){
			throw 'Missing required  parameter: statusId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getStatusStatusId = getStatusStatusId;
	/**
     * @summary Cancel the command for this status
	 * @memberOf ContentManagementApi#
	* @param {string} statusId - Status ID
	*/
	function deleteStatusStatusId(statusId){
		var apipath = '/api/v2/contentmanagement/status/{statusId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{statusId}', statusId);

        if(statusId === undefined && statusId !== null){
			throw 'Missing required  parameter: statusId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteStatusStatusId = deleteStatusStatusId;
	/**
     * @summary Get a list of workspaces.
	 * @description Specifying 'content' access will return all workspaces the user has document access to, while 'admin' access will return all group workspaces the user has administrative rights to.
	 * @memberOf ContentManagementApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} access - Requested access level
	content,
	admin,
	document:create,
	document:viewContent,
	document:viewMetadata,
	document:download,
	document:delete,
	document:update,
	document:share,
	document:shareView,
	document:email,
	document:print,
	document:auditView,
	document:replace,
	document:tag,
	tag:create,
	tag:view,
	tag:update,
	tag:apply,
	tag:remove,
	tag:delete,
	* @param {string} expand - Expand some workspace fields
	summary,
	acl,
	*/
	function getWorkspaces(pageSize, pageNumber, access, expand){
		var apipath = '/api/v2/contentmanagement/workspaces';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(access !== undefined && access !== null){
			queryParameters.access = access;
		}


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getWorkspaces = getWorkspaces;
	/**
     * @summary Create a group workspace
	 * @memberOf ContentManagementApi#
	* @param {} body - Workspace
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "bucket": ""
}
	*/
	function postWorkspaces(body){
		var apipath = '/api/v2/contentmanagement/workspaces';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postWorkspaces = postWorkspaces;
	/**
     * @summary Get a workspace.
	 * @memberOf ContentManagementApi#
	* @param {string} workspaceId - Workspace ID
	* @param {string} expand - Expand some workspace fields
	summary,
	acl,
	*/
	function getWorkspacesWorkspaceId(workspaceId, expand){
		var apipath = '/api/v2/contentmanagement/workspaces/{workspaceId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{workspaceId}', workspaceId);

        if(workspaceId === undefined && workspaceId !== null){
			throw 'Missing required  parameter: workspaceId';
        }


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getWorkspacesWorkspaceId = getWorkspacesWorkspaceId;
	/**
     * @summary Update a workspace
	 * @memberOf ContentManagementApi#
	* @param {string} workspaceId - Workspace ID
	* @param {} body - Workspace
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "type": "",
   "isCurrentUserWorkspace": true,
   "user": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "bucket": "",
   "dateCreated": "",
   "dateModified": "",
   "summary": {
      "totalDocumentCount": 0
   },
   "acl": []
}
	*/
	function putWorkspacesWorkspaceId(workspaceId, body){
		var apipath = '/api/v2/contentmanagement/workspaces/{workspaceId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{workspaceId}', workspaceId);

        if(workspaceId === undefined && workspaceId !== null){
			throw 'Missing required  parameter: workspaceId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putWorkspacesWorkspaceId = putWorkspacesWorkspaceId;
	/**
     * @summary Delete a workspace
	 * @memberOf ContentManagementApi#
	* @param {string} workspaceId - Workspace ID
	* @param {string} moveChildrenToWorkspaceId - New location for objects in deleted workspace.
	*/
	function deleteWorkspacesWorkspaceId(workspaceId, moveChildrenToWorkspaceId){
		var apipath = '/api/v2/contentmanagement/workspaces/{workspaceId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{workspaceId}', workspaceId);

        if(workspaceId === undefined && workspaceId !== null){
			throw 'Missing required  parameter: workspaceId';
        }


		if(moveChildrenToWorkspaceId !== undefined && moveChildrenToWorkspaceId !== null){
			queryParameters.moveChildrenToWorkspaceId = moveChildrenToWorkspaceId;
		}


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteWorkspacesWorkspaceId = deleteWorkspacesWorkspaceId;
	/**
     * @summary Get a list workspace members
	 * @memberOf ContentManagementApi#
	* @param {string} workspaceId - Workspace ID
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} expand - Expand workspace member fields
	member,
	*/
	function getWorkspacesWorkspaceIdMembers(workspaceId, pageSize, pageNumber, expand){
		var apipath = '/api/v2/contentmanagement/workspaces/{workspaceId}/members';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{workspaceId}', workspaceId);

        if(workspaceId === undefined && workspaceId !== null){
			throw 'Missing required  parameter: workspaceId';
        }


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getWorkspacesWorkspaceIdMembers = getWorkspacesWorkspaceIdMembers;
	/**
     * @summary Get a workspace member
	 * @memberOf ContentManagementApi#
	* @param {string} workspaceId - Workspace ID
	* @param {string} memberId - Member ID
	* @param {string} expand - Expand workspace member fields
	member,
	*/
	function getWorkspacesWorkspaceIdMembersMemberId(workspaceId, memberId, expand){
		var apipath = '/api/v2/contentmanagement/workspaces/{workspaceId}/members/{memberId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{workspaceId}', workspaceId);

        if(workspaceId === undefined && workspaceId !== null){
			throw 'Missing required  parameter: workspaceId';
        }

        apipath = apipath.replace('{memberId}', memberId);

        if(memberId === undefined && memberId !== null){
			throw 'Missing required  parameter: memberId';
        }


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getWorkspacesWorkspaceIdMembersMemberId = getWorkspacesWorkspaceIdMembersMemberId;
	/**
     * @summary Add a member to a workspace
	 * @memberOf ContentManagementApi#
	* @param {string} workspaceId - Workspace ID
	* @param {string} memberId - Member ID
	* @param {} body - Workspace
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "workspace": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "memberType": "",
   "member": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "user": {
      "name": "",
      "chat": {},
      "department": "",
      "email": "",
      "addresses": [],
      "title": "",
      "username": "",
      "images": []
   },
   "group": {
      "name": "",
      "description": "",
      "dateModified": "",
      "memberCount": 0,
      "state": "",
      "version": {},
      "images": [],
      "addresses": []
   },
   "securityProfile": {
      "name": "",
      "permissions": []
   }
}
	*/
	function putWorkspacesWorkspaceIdMembersMemberId(workspaceId, memberId, body){
		var apipath = '/api/v2/contentmanagement/workspaces/{workspaceId}/members/{memberId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{workspaceId}', workspaceId);

        if(workspaceId === undefined && workspaceId !== null){
			throw 'Missing required  parameter: workspaceId';
        }

        apipath = apipath.replace('{memberId}', memberId);

        if(memberId === undefined && memberId !== null){
			throw 'Missing required  parameter: memberId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putWorkspacesWorkspaceIdMembersMemberId = putWorkspacesWorkspaceIdMembersMemberId;
	/**
     * @summary Delete a member from a workspace
	 * @memberOf ContentManagementApi#
	* @param {string} workspaceId - Workspace ID
	* @param {string} memberId - Member ID
	*/
	function deleteWorkspacesWorkspaceIdMembersMemberId(workspaceId, memberId){
		var apipath = '/api/v2/contentmanagement/workspaces/{workspaceId}/members/{memberId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{workspaceId}', workspaceId);

        if(workspaceId === undefined && workspaceId !== null){
			throw 'Missing required  parameter: workspaceId';
        }

        apipath = apipath.replace('{memberId}', memberId);

        if(memberId === undefined && memberId !== null){
			throw 'Missing required  parameter: memberId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteWorkspacesWorkspaceIdMembersMemberId = deleteWorkspacesWorkspaceIdMembersMemberId;
	/**
     * @summary Get a list of workspace tags
	 * @memberOf ContentManagementApi#
	* @param {string} workspaceId - Workspace ID
	* @param {string} value - filter the list of tags returned
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} expand - Expand some document fields
	acl,
	*/
	function getWorkspacesWorkspaceIdTagvalues(workspaceId, value, pageSize, pageNumber, expand){
		var apipath = '/api/v2/contentmanagement/workspaces/{workspaceId}/tagvalues';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{workspaceId}', workspaceId);

        if(workspaceId === undefined && workspaceId !== null){
			throw 'Missing required  parameter: workspaceId';
        }


		if(value !== undefined && value !== null){
			queryParameters.value = value;
		}


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getWorkspacesWorkspaceIdTagvalues = getWorkspacesWorkspaceIdTagvalues;
	/**
     * @summary Create a workspace tag
	 * @memberOf ContentManagementApi#
	* @param {string} workspaceId - Workspace ID
	* @param {} body - tag
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "inUse": true,
   "acl": []
}
	*/
	function postWorkspacesWorkspaceIdTagvalues(workspaceId, body){
		var apipath = '/api/v2/contentmanagement/workspaces/{workspaceId}/tagvalues';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{workspaceId}', workspaceId);

        if(workspaceId === undefined && workspaceId !== null){
			throw 'Missing required  parameter: workspaceId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postWorkspacesWorkspaceIdTagvalues = postWorkspacesWorkspaceIdTagvalues;
	/**
     * @summary Perform a prefix query on tags in the workspace
	 * @memberOf ContentManagementApi#
	* @param {string} workspaceId - Workspace ID
	* @param {} body - query
	* @param {string} expand - Expand some document fields
	acl,
	 * @example
	 * Body Example:
	 * {
   "query": "",
   "pageNumber": 0,
   "pageSize": 0
}
	*/
	function postWorkspacesWorkspaceIdTagvaluesQuery(workspaceId, body, expand){
		var apipath = '/api/v2/contentmanagement/workspaces/{workspaceId}/tagvalues/query';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{workspaceId}', workspaceId);

        if(workspaceId === undefined && workspaceId !== null){
			throw 'Missing required  parameter: workspaceId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postWorkspacesWorkspaceIdTagvaluesQuery = postWorkspacesWorkspaceIdTagvaluesQuery;
	/**
     * @summary Get a workspace tag
	 * @memberOf ContentManagementApi#
	* @param {string} workspaceId - Workspace ID
	* @param {string} tagId - Tag ID
	* @param {string} expand - Expand some document fields
	acl,
	*/
	function getWorkspacesWorkspaceIdTagvaluesTagId(workspaceId, tagId, expand){
		var apipath = '/api/v2/contentmanagement/workspaces/{workspaceId}/tagvalues/{tagId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{workspaceId}', workspaceId);

        if(workspaceId === undefined && workspaceId !== null){
			throw 'Missing required  parameter: workspaceId';
        }

        apipath = apipath.replace('{tagId}', tagId);

        if(tagId === undefined && tagId !== null){
			throw 'Missing required  parameter: tagId';
        }


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getWorkspacesWorkspaceIdTagvaluesTagId = getWorkspacesWorkspaceIdTagvaluesTagId;
	/**
     * @summary Update a workspace tag. Will update all documents with the new tag value.
	 * @memberOf ContentManagementApi#
	* @param {string} workspaceId - Workspace ID
	* @param {string} tagId - Tag ID
	* @param {} body - Workspace
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "inUse": true,
   "acl": []
}
	*/
	function putWorkspacesWorkspaceIdTagvaluesTagId(workspaceId, tagId, body){
		var apipath = '/api/v2/contentmanagement/workspaces/{workspaceId}/tagvalues/{tagId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{workspaceId}', workspaceId);

        if(workspaceId === undefined && workspaceId !== null){
			throw 'Missing required  parameter: workspaceId';
        }

        apipath = apipath.replace('{tagId}', tagId);

        if(tagId === undefined && tagId !== null){
			throw 'Missing required  parameter: tagId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putWorkspacesWorkspaceIdTagvaluesTagId = putWorkspacesWorkspaceIdTagvaluesTagId;
	/**
     * @summary Delete workspace tag
	 * @description Delete a tag from a workspace. Will remove this tag from all documents.
	 * @memberOf ContentManagementApi#
	* @param {string} workspaceId - Workspace ID
	* @param {string} tagId - Tag ID
	*/
	function deleteWorkspacesWorkspaceIdTagvaluesTagId(workspaceId, tagId){
		var apipath = '/api/v2/contentmanagement/workspaces/{workspaceId}/tagvalues/{tagId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{workspaceId}', workspaceId);

        if(workspaceId === undefined && workspaceId !== null){
			throw 'Missing required  parameter: workspaceId';
        }

        apipath = apipath.replace('{tagId}', tagId);

        if(tagId === undefined && tagId !== null){
			throw 'Missing required  parameter: tagId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteWorkspacesWorkspaceIdTagvaluesTagId = deleteWorkspacesWorkspaceIdTagvaluesTagId;

    return self;
};

//API VERSION - 
/**
* @class
* @example
* var api = new ConversationsApi(pureCloudSession);
*/
var ConversationsApi = function (pureCloudSession) {
	if(!pureCloudSession){
		throw "PureCloudSession is not valid.";
    }

	var self = this;
	/**
     * @summary Query for conversation aggregates
	 * @memberOf ConversationsApi#
	* @param {} body - query
	 * @example
	 * Body Example:
	 * {
   "interval": "",
   "granularity": "",
   "groupBy": [],
   "filter": {
      "type": "",
      "clauses": [],
      "predicates": []
   },
   "metrics": [],
   "flattenMultivaluedDimensions": true
}
	*/
	function postConversationsAggregatesQuery(body){
		var apipath = '/api/v2/analytics/conversations/aggregates/query';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postConversationsAggregatesQuery = postConversationsAggregatesQuery;
	/**
     * @summary Query for conversation details
	 * @memberOf ConversationsApi#
	* @param {} body - query
	 * @example
	 * Body Example:
	 * {
   "interval": "",
   "conversationFilters": [],
   "evaluationFilters": [],
   "segmentFilters": [],
   "aggregations": [],
   "paging": {
      "pageSize": 0,
      "pageNumber": 0
   },
   "order": "",
   "orderBy": ""
}
	*/
	function postConversationsDetailsQuery(body){
		var apipath = '/api/v2/analytics/conversations/details/query';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postConversationsDetailsQuery = postConversationsDetailsQuery;
	/**
     * @summary Get a conversation by id
	 * @memberOf ConversationsApi#
	* @param {string} conversationId - conversationId
	*/
	function getConversationsConversationIdDetails(conversationId){
		var apipath = '/api/v2/analytics/conversations/{conversationId}/details';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{conversationId}', conversationId);

        if(conversationId === undefined && conversationId !== null){
			throw 'Missing required  parameter: conversationId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getConversationsConversationIdDetails = getConversationsConversationIdDetails;
	/**
     * @summary Index conversation properties
	 * @memberOf ConversationsApi#
	* @param {string} conversationId - conversationId
	* @param {} body - request
	 * @example
	 * Body Example:
	 * {
   "sessionId": "",
   "timestamp": 0,
   "properties": []
}
	*/
	function postConversationsConversationIdDetailsProperties(conversationId, body){
		var apipath = '/api/v2/analytics/conversations/{conversationId}/details/properties';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{conversationId}', conversationId);

        if(conversationId === undefined && conversationId !== null){
			throw 'Missing required  parameter: conversationId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postConversationsConversationIdDetailsProperties = postConversationsConversationIdDetailsProperties;
	/**
     * @summary Get conversations
	 * @memberOf ConversationsApi#
	* @param {string} communicationType - Call or Chat communication filtering
	*/
	function getConversations(communicationType){
		var apipath = '/api/v2/conversations';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(communicationType !== undefined && communicationType !== null){
			queryParameters.communicationType = communicationType;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getConversations = getConversations;
	/**
     * @summary Get callback conversations
	 * @memberOf ConversationsApi#
	*/
	function getCallbacks(){
		var apipath = '/api/v2/conversations/callbacks';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getCallbacks = getCallbacks;
	/**
     * @summary Get callback conversation
	 * @memberOf ConversationsApi#
	* @param {string} callbackId - 
	*/
	function getCallbacksCallbackId(callbackId){
		var apipath = '/api/v2/conversations/callbacks/{callbackId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{callbackId}', callbackId);

        if(callbackId === undefined && callbackId !== null){
			throw 'Missing required  parameter: callbackId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getCallbacksCallbackId = getCallbacksCallbackId;
	/**
     * @summary Update conversation participant
	 * @memberOf ConversationsApi#
	* @param {string} callbackId - 
	* @param {string} participantId - 
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "wrapup": {
      "code": "",
      "name": "",
      "notes": "",
      "tags": [],
      "durationSeconds": 0,
      "endTime": "",
      "provisional": true
   },
   "state": "",
   "recording": true,
   "muted": true,
   "confined": true,
   "held": true,
   "wrapupSkipped": true
}
	*/
	function patchCallbacksCallbackIdParticipantsParticipantId(callbackId, participantId, body){
		var apipath = '/api/v2/conversations/callbacks/{callbackId}/participants/{participantId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{callbackId}', callbackId);

        if(callbackId === undefined && callbackId !== null){
			throw 'Missing required  parameter: callbackId';
        }

        apipath = apipath.replace('{participantId}', participantId);

        if(participantId === undefined && participantId !== null){
			throw 'Missing required  parameter: participantId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PATCH', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.patchCallbacksCallbackIdParticipantsParticipantId = patchCallbacksCallbackIdParticipantsParticipantId;
	/**
     * @summary Update the attributes on a conversation participant.
	 * @memberOf ConversationsApi#
	* @param {string} callbackId - 
	* @param {string} participantId - 
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "attributes": {}
}
	*/
	function patchCallbacksCallbackIdParticipantsParticipantIdAttributes(callbackId, participantId, body){
		var apipath = '/api/v2/conversations/callbacks/{callbackId}/participants/{participantId}/attributes';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{callbackId}', callbackId);

        if(callbackId === undefined && callbackId !== null){
			throw 'Missing required  parameter: callbackId';
        }

        apipath = apipath.replace('{participantId}', participantId);

        if(participantId === undefined && participantId !== null){
			throw 'Missing required  parameter: participantId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PATCH', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.patchCallbacksCallbackIdParticipantsParticipantIdAttributes = patchCallbacksCallbackIdParticipantsParticipantIdAttributes;
	/**
     * @summary Replace this participant with the specified user and/or address
	 * @memberOf ConversationsApi#
	* @param {string} callbackId - 
	* @param {string} participantId - 
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "userId": "",
   "address": "",
   "userName": "",
   "queueId": "",
   "voicemail": true
}
	*/
	function postCallbacksCallbackIdParticipantsParticipantIdReplace(callbackId, participantId, body){
		var apipath = '/api/v2/conversations/callbacks/{callbackId}/participants/{participantId}/replace';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{callbackId}', callbackId);

        if(callbackId === undefined && callbackId !== null){
			throw 'Missing required  parameter: callbackId';
        }

        apipath = apipath.replace('{participantId}', participantId);

        if(participantId === undefined && participantId !== null){
			throw 'Missing required  parameter: participantId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postCallbacksCallbackIdParticipantsParticipantIdReplace = postCallbacksCallbackIdParticipantsParticipantIdReplace;
	/**
     * @summary Get the wrap-up for this conversation participant. 
	 * @memberOf ConversationsApi#
	* @param {string} callbackId - 
	* @param {string} participantId - 
	* @param {boolean} provisional - Indicates if the wrap-up code is provisional.
	*/
	function getCallbacksCallbackIdParticipantsParticipantIdWrapup(callbackId, participantId, provisional){
		var apipath = '/api/v2/conversations/callbacks/{callbackId}/participants/{participantId}/wrapup';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{callbackId}', callbackId);

        if(callbackId === undefined && callbackId !== null){
			throw 'Missing required  parameter: callbackId';
        }

        apipath = apipath.replace('{participantId}', participantId);

        if(participantId === undefined && participantId !== null){
			throw 'Missing required  parameter: participantId';
        }


		if(provisional !== undefined && provisional !== null){
			queryParameters.provisional = provisional;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getCallbacksCallbackIdParticipantsParticipantIdWrapup = getCallbacksCallbackIdParticipantsParticipantIdWrapup;
	/**
     * @summary Get list of wrapup codes for this conversation participant
	 * @memberOf ConversationsApi#
	* @param {string} callbackId - 
	* @param {string} participantId - 
	*/
	function getCallbacksCallbackIdParticipantsParticipantIdWrapupcodes(callbackId, participantId){
		var apipath = '/api/v2/conversations/callbacks/{callbackId}/participants/{participantId}/wrapupcodes';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{callbackId}', callbackId);

        if(callbackId === undefined && callbackId !== null){
			throw 'Missing required  parameter: callbackId';
        }

        apipath = apipath.replace('{participantId}', participantId);

        if(participantId === undefined && participantId !== null){
			throw 'Missing required  parameter: participantId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getCallbacksCallbackIdParticipantsParticipantIdWrapupcodes = getCallbacksCallbackIdParticipantsParticipantIdWrapupcodes;
	/**
     * @summary Get recent conversations
	 * @memberOf ConversationsApi#
	*/
	function getCalls(){
		var apipath = '/api/v2/conversations/calls';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getCalls = getCalls;
	/**
     * @summary Create a call conversation
	 * @memberOf ConversationsApi#
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "phoneNumber": "",
   "callFromQueueId": "",
   "callQueueId": "",
   "callUserId": "",
   "priority": 0,
   "languageId": "",
   "routingSkillsIds": [],
   "conversationIds": [],
   "participants": []
}
	*/
	function postCalls(body){
		var apipath = '/api/v2/conversations/calls';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postCalls = postCalls;
	/**
     * @summary Get the maximum number of participants that this user can have on a conference
	 * @memberOf ConversationsApi#
	*/
	function getCallsMaximumconferenceparties(){
		var apipath = '/api/v2/conversations/calls/maximumconferenceparties';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getCallsMaximumconferenceparties = getCallsMaximumconferenceparties;
	/**
     * @summary Get call conversation
	 * @memberOf ConversationsApi#
	* @param {string} callId - 
	*/
	function getCallsCallId(callId){
		var apipath = '/api/v2/conversations/calls/{callId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{callId}', callId);

        if(callId === undefined && callId !== null){
			throw 'Missing required  parameter: callId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getCallsCallId = getCallsCallId;
	/**
     * @summary Add a new call to a conversation
	 * @memberOf ConversationsApi#
	* @param {string} callId - 
	* @param {} body - Conversation
	 * @example
	 * Body Example:
	 * {
   "callNumber": ""
}
	*/
	function postCallsCallId(callId, body){
		var apipath = '/api/v2/conversations/calls/{callId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{callId}', callId);

        if(callId === undefined && callId !== null){
			throw 'Missing required  parameter: callId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postCallsCallId = postCallsCallId;
	/**
     * @summary Update conversation
	 * @memberOf ConversationsApi#
	* @param {string} callId - 
	* @param {} body - Conversation
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "startTime": "",
   "endTime": "",
   "address": "",
   "participants": [],
   "conversationIds": [],
   "maxParticipants": 0,
   "recordingState": ""
}
	*/
	function patchCallsCallId(callId, body){
		var apipath = '/api/v2/conversations/calls/{callId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{callId}', callId);

        if(callId === undefined && callId !== null){
			throw 'Missing required  parameter: callId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PATCH', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.patchCallsCallId = patchCallsCallId;
	/**
     * @summary Add participants to a conversation
	 * @memberOf ConversationsApi#
	* @param {string} callId - 
	* @param {} body - Conversation
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "startTime": "",
   "endTime": "",
   "address": "",
   "participants": [],
   "conversationIds": [],
   "maxParticipants": 0,
   "recordingState": ""
}
	*/
	function postCallsCallIdParticipants(callId, body){
		var apipath = '/api/v2/conversations/calls/{callId}/participants';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{callId}', callId);

        if(callId === undefined && callId !== null){
			throw 'Missing required  parameter: callId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postCallsCallIdParticipants = postCallsCallIdParticipants;
	/**
     * @summary Update conversation participant
	 * @memberOf ConversationsApi#
	* @param {string} callId - 
	* @param {string} participantId - 
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "wrapup": {
      "code": "",
      "name": "",
      "notes": "",
      "tags": [],
      "durationSeconds": 0,
      "endTime": "",
      "provisional": true
   },
   "state": "",
   "recording": true,
   "muted": true,
   "confined": true,
   "held": true,
   "wrapupSkipped": true
}
	*/
	function patchCallsCallIdParticipantsParticipantId(callId, participantId, body){
		var apipath = '/api/v2/conversations/calls/{callId}/participants/{participantId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{callId}', callId);

        if(callId === undefined && callId !== null){
			throw 'Missing required  parameter: callId';
        }

        apipath = apipath.replace('{participantId}', participantId);

        if(participantId === undefined && participantId !== null){
			throw 'Missing required  parameter: participantId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PATCH', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.patchCallsCallIdParticipantsParticipantId = patchCallsCallIdParticipantsParticipantId;
	/**
     * @summary Update the attributes on a conversation participant.
	 * @memberOf ConversationsApi#
	* @param {string} callId - 
	* @param {string} participantId - 
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "attributes": {}
}
	*/
	function patchCallsCallIdParticipantsParticipantIdAttributes(callId, participantId, body){
		var apipath = '/api/v2/conversations/calls/{callId}/participants/{participantId}/attributes';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{callId}', callId);

        if(callId === undefined && callId !== null){
			throw 'Missing required  parameter: callId';
        }

        apipath = apipath.replace('{participantId}', participantId);

        if(participantId === undefined && participantId !== null){
			throw 'Missing required  parameter: participantId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PATCH', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.patchCallsCallIdParticipantsParticipantIdAttributes = patchCallsCallIdParticipantsParticipantIdAttributes;
	/**
     * @summary Initiate and update consult transfer
	 * @memberOf ConversationsApi#
	* @param {string} callId - 
	* @param {string} participantId - 
	* @param {} body - Destination address & initial speak to
	 * @example
	 * Body Example:
	 * {
   "speakTo": "",
   "destination": {
      "address": "",
      "name": "",
      "userId": "",
      "queueId": ""
   }
}
	*/
	function postCallsCallIdParticipantsParticipantIdConsult(callId, participantId, body){
		var apipath = '/api/v2/conversations/calls/{callId}/participants/{participantId}/consult';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{callId}', callId);

        if(callId === undefined && callId !== null){
			throw 'Missing required  parameter: callId';
        }

        apipath = apipath.replace('{participantId}', participantId);

        if(participantId === undefined && participantId !== null){
			throw 'Missing required  parameter: participantId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postCallsCallIdParticipantsParticipantIdConsult = postCallsCallIdParticipantsParticipantIdConsult;
	/**
     * @summary Cancel the transfer
	 * @memberOf ConversationsApi#
	* @param {string} callId - 
	* @param {string} participantId - 
	*/
	function deleteCallsCallIdParticipantsParticipantIdConsult(callId, participantId){
		var apipath = '/api/v2/conversations/calls/{callId}/participants/{participantId}/consult';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{callId}', callId);

        if(callId === undefined && callId !== null){
			throw 'Missing required  parameter: callId';
        }

        apipath = apipath.replace('{participantId}', participantId);

        if(participantId === undefined && participantId !== null){
			throw 'Missing required  parameter: participantId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteCallsCallIdParticipantsParticipantIdConsult = deleteCallsCallIdParticipantsParticipantIdConsult;
	/**
     * @summary Change who can speak
	 * @memberOf ConversationsApi#
	* @param {string} callId - 
	* @param {string} participantId - 
	* @param {} body - new speak to
	 * @example
	 * Body Example:
	 * {
   "speakTo": ""
}
	*/
	function patchCallsCallIdParticipantsParticipantIdConsult(callId, participantId, body){
		var apipath = '/api/v2/conversations/calls/{callId}/participants/{participantId}/consult';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{callId}', callId);

        if(callId === undefined && callId !== null){
			throw 'Missing required  parameter: callId';
        }

        apipath = apipath.replace('{participantId}', participantId);

        if(participantId === undefined && participantId !== null){
			throw 'Missing required  parameter: participantId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PATCH', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.patchCallsCallIdParticipantsParticipantIdConsult = patchCallsCallIdParticipantsParticipantIdConsult;
	/**
     * @summary Listen in on the conversation from the point of view of a given participant.
	 * @memberOf ConversationsApi#
	* @param {string} callId - 
	* @param {string} participantId - 
	*/
	function postCallsCallIdParticipantsParticipantIdMonitor(callId, participantId){
		var apipath = '/api/v2/conversations/calls/{callId}/participants/{participantId}/monitor';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{callId}', callId);

        if(callId === undefined && callId !== null){
			throw 'Missing required  parameter: callId';
        }

        apipath = apipath.replace('{participantId}', participantId);

        if(participantId === undefined && participantId !== null){
			throw 'Missing required  parameter: participantId';
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postCallsCallIdParticipantsParticipantIdMonitor = postCallsCallIdParticipantsParticipantIdMonitor;
	/**
     * @summary Replace this participant with the specified user and/or address
	 * @memberOf ConversationsApi#
	* @param {string} callId - 
	* @param {string} participantId - 
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "userId": "",
   "address": "",
   "userName": "",
   "queueId": "",
   "voicemail": true
}
	*/
	function postCallsCallIdParticipantsParticipantIdReplace(callId, participantId, body){
		var apipath = '/api/v2/conversations/calls/{callId}/participants/{participantId}/replace';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{callId}', callId);

        if(callId === undefined && callId !== null){
			throw 'Missing required  parameter: callId';
        }

        apipath = apipath.replace('{participantId}', participantId);

        if(participantId === undefined && participantId !== null){
			throw 'Missing required  parameter: participantId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postCallsCallIdParticipantsParticipantIdReplace = postCallsCallIdParticipantsParticipantIdReplace;
	/**
     * @summary Get the wrap-up for this conversation participant. 
	 * @memberOf ConversationsApi#
	* @param {string} callId - 
	* @param {string} participantId - 
	* @param {boolean} provisional - Indicates if the wrap-up code is provisional.
	*/
	function getCallsCallIdParticipantsParticipantIdWrapup(callId, participantId, provisional){
		var apipath = '/api/v2/conversations/calls/{callId}/participants/{participantId}/wrapup';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{callId}', callId);

        if(callId === undefined && callId !== null){
			throw 'Missing required  parameter: callId';
        }

        apipath = apipath.replace('{participantId}', participantId);

        if(participantId === undefined && participantId !== null){
			throw 'Missing required  parameter: participantId';
        }


		if(provisional !== undefined && provisional !== null){
			queryParameters.provisional = provisional;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getCallsCallIdParticipantsParticipantIdWrapup = getCallsCallIdParticipantsParticipantIdWrapup;
	/**
     * @summary Get list of wrapup codes for this conversation participant
	 * @memberOf ConversationsApi#
	* @param {string} callId - 
	* @param {string} participantId - 
	*/
	function getCallsCallIdParticipantsParticipantIdWrapupcodes(callId, participantId){
		var apipath = '/api/v2/conversations/calls/{callId}/participants/{participantId}/wrapupcodes';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{callId}', callId);

        if(callId === undefined && callId !== null){
			throw 'Missing required  parameter: callId';
        }

        apipath = apipath.replace('{participantId}', participantId);

        if(participantId === undefined && participantId !== null){
			throw 'Missing required  parameter: participantId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getCallsCallIdParticipantsParticipantIdWrapupcodes = getCallsCallIdParticipantsParticipantIdWrapupcodes;
	/**
     * @summary Get recent chat conversations
	 * @memberOf ConversationsApi#
	*/
	function getChats(){
		var apipath = '/api/v2/conversations/chats';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getChats = getChats;
	/**
     * @summary Get chat conversation
	 * @memberOf ConversationsApi#
	* @param {string} chatId - 
	*/
	function getChatsChatId(chatId){
		var apipath = '/api/v2/conversations/chats/{chatId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{chatId}', chatId);

        if(chatId === undefined && chatId !== null){
			throw 'Missing required  parameter: chatId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getChatsChatId = getChatsChatId;
	/**
     * @summary Update conversation participant
	 * @memberOf ConversationsApi#
	* @param {string} chatId - 
	* @param {string} participantId - 
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "wrapup": {
      "code": "",
      "name": "",
      "notes": "",
      "tags": [],
      "durationSeconds": 0,
      "endTime": "",
      "provisional": true
   },
   "state": "",
   "recording": true,
   "muted": true,
   "confined": true,
   "held": true,
   "wrapupSkipped": true
}
	*/
	function patchChatsChatIdParticipantsParticipantId(chatId, participantId, body){
		var apipath = '/api/v2/conversations/chats/{chatId}/participants/{participantId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{chatId}', chatId);

        if(chatId === undefined && chatId !== null){
			throw 'Missing required  parameter: chatId';
        }

        apipath = apipath.replace('{participantId}', participantId);

        if(participantId === undefined && participantId !== null){
			throw 'Missing required  parameter: participantId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PATCH', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.patchChatsChatIdParticipantsParticipantId = patchChatsChatIdParticipantsParticipantId;
	/**
     * @summary Update the attributes on a conversation participant.
	 * @memberOf ConversationsApi#
	* @param {string} chatId - 
	* @param {string} participantId - 
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "attributes": {}
}
	*/
	function patchChatsChatIdParticipantsParticipantIdAttributes(chatId, participantId, body){
		var apipath = '/api/v2/conversations/chats/{chatId}/participants/{participantId}/attributes';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{chatId}', chatId);

        if(chatId === undefined && chatId !== null){
			throw 'Missing required  parameter: chatId';
        }

        apipath = apipath.replace('{participantId}', participantId);

        if(participantId === undefined && participantId !== null){
			throw 'Missing required  parameter: participantId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PATCH', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.patchChatsChatIdParticipantsParticipantIdAttributes = patchChatsChatIdParticipantsParticipantIdAttributes;
	/**
     * @summary Replace this participant with the specified user and/or address
	 * @memberOf ConversationsApi#
	* @param {string} chatId - 
	* @param {string} participantId - 
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "userId": "",
   "address": "",
   "userName": "",
   "queueId": "",
   "voicemail": true
}
	*/
	function postChatsChatIdParticipantsParticipantIdReplace(chatId, participantId, body){
		var apipath = '/api/v2/conversations/chats/{chatId}/participants/{participantId}/replace';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{chatId}', chatId);

        if(chatId === undefined && chatId !== null){
			throw 'Missing required  parameter: chatId';
        }

        apipath = apipath.replace('{participantId}', participantId);

        if(participantId === undefined && participantId !== null){
			throw 'Missing required  parameter: participantId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postChatsChatIdParticipantsParticipantIdReplace = postChatsChatIdParticipantsParticipantIdReplace;
	/**
     * @summary Get the wrap-up for this conversation participant. 
	 * @memberOf ConversationsApi#
	* @param {string} chatId - 
	* @param {string} participantId - 
	* @param {boolean} provisional - Indicates if the wrap-up code is provisional.
	*/
	function getChatsChatIdParticipantsParticipantIdWrapup(chatId, participantId, provisional){
		var apipath = '/api/v2/conversations/chats/{chatId}/participants/{participantId}/wrapup';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{chatId}', chatId);

        if(chatId === undefined && chatId !== null){
			throw 'Missing required  parameter: chatId';
        }

        apipath = apipath.replace('{participantId}', participantId);

        if(participantId === undefined && participantId !== null){
			throw 'Missing required  parameter: participantId';
        }


		if(provisional !== undefined && provisional !== null){
			queryParameters.provisional = provisional;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getChatsChatIdParticipantsParticipantIdWrapup = getChatsChatIdParticipantsParticipantIdWrapup;
	/**
     * @summary Get list of wrapup codes for this conversation participant
	 * @memberOf ConversationsApi#
	* @param {string} chatId - 
	* @param {string} participantId - 
	*/
	function getChatsChatIdParticipantsParticipantIdWrapupcodes(chatId, participantId){
		var apipath = '/api/v2/conversations/chats/{chatId}/participants/{participantId}/wrapupcodes';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{chatId}', chatId);

        if(chatId === undefined && chatId !== null){
			throw 'Missing required  parameter: chatId';
        }

        apipath = apipath.replace('{participantId}', participantId);

        if(participantId === undefined && participantId !== null){
			throw 'Missing required  parameter: participantId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getChatsChatIdParticipantsParticipantIdWrapupcodes = getChatsChatIdParticipantsParticipantIdWrapupcodes;
	/**
     * @summary Get recent email conversations
	 * @memberOf ConversationsApi#
	*/
	function getEmails(){
		var apipath = '/api/v2/conversations/emails';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getEmails = getEmails;
	/**
     * @summary Get email conversation
	 * @memberOf ConversationsApi#
	* @param {string} emailId - 
	*/
	function getEmailsEmailId(emailId){
		var apipath = '/api/v2/conversations/emails/{emailId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{emailId}', emailId);

        if(emailId === undefined && emailId !== null){
			throw 'Missing required  parameter: emailId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getEmailsEmailId = getEmailsEmailId;
	/**
     * @summary Get conversation messages
	 * @memberOf ConversationsApi#
	* @param {string} emailId - 
	*/
	function getEmailsEmailIdMessages(emailId){
		var apipath = '/api/v2/conversations/emails/{emailId}/messages';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{emailId}', emailId);

        if(emailId === undefined && emailId !== null){
			throw 'Missing required  parameter: emailId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getEmailsEmailIdMessages = getEmailsEmailIdMessages;
	/**
     * @summary Send an email reply
	 * @memberOf ConversationsApi#
	* @param {string} emailId - 
	* @param {} body - Reply
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "to": [],
   "cc": [],
   "bcc": [],
   "from": {
      "email": "",
      "name": ""
   },
   "subject": "",
   "attachments": [],
   "textBody": "",
   "htmlBody": "",
   "time": ""
}
	*/
	function postEmailsEmailIdMessages(emailId, body){
		var apipath = '/api/v2/conversations/emails/{emailId}/messages';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{emailId}', emailId);

        if(emailId === undefined && emailId !== null){
			throw 'Missing required  parameter: emailId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postEmailsEmailIdMessages = postEmailsEmailIdMessages;
	/**
     * @summary Get conversation draft reply
	 * @memberOf ConversationsApi#
	* @param {string} emailId - 
	*/
	function getEmailsEmailIdMessagesDraft(emailId){
		var apipath = '/api/v2/conversations/emails/{emailId}/messages/draft';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{emailId}', emailId);

        if(emailId === undefined && emailId !== null){
			throw 'Missing required  parameter: emailId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getEmailsEmailIdMessagesDraft = getEmailsEmailIdMessagesDraft;
	/**
     * @summary Update conversation draft reply
	 * @memberOf ConversationsApi#
	* @param {string} emailId - 
	* @param {} body - Draft
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "to": [],
   "cc": [],
   "bcc": [],
   "from": {
      "email": "",
      "name": ""
   },
   "subject": "",
   "attachments": [],
   "textBody": "",
   "htmlBody": "",
   "time": ""
}
	*/
	function putEmailsEmailIdMessagesDraft(emailId, body){
		var apipath = '/api/v2/conversations/emails/{emailId}/messages/draft';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{emailId}', emailId);

        if(emailId === undefined && emailId !== null){
			throw 'Missing required  parameter: emailId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putEmailsEmailIdMessagesDraft = putEmailsEmailIdMessagesDraft;
	/**
     * @summary Delete attachment from draft
	 * @memberOf ConversationsApi#
	* @param {string} emailId - 
	* @param {string} attachmentId - 
	*/
	function deleteEmailsEmailIdMessagesDraftAttachmentsAttachmentId(emailId, attachmentId){
		var apipath = '/api/v2/conversations/emails/{emailId}/messages/draft/attachments/{attachmentId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{emailId}', emailId);

        if(emailId === undefined && emailId !== null){
			throw 'Missing required  parameter: emailId';
        }

        apipath = apipath.replace('{attachmentId}', attachmentId);

        if(attachmentId === undefined && attachmentId !== null){
			throw 'Missing required  parameter: attachmentId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteEmailsEmailIdMessagesDraftAttachmentsAttachmentId = deleteEmailsEmailIdMessagesDraftAttachmentsAttachmentId;
	/**
     * @summary Get conversation message
	 * @memberOf ConversationsApi#
	* @param {string} emailId - 
	* @param {string} messageId - 
	*/
	function getEmailsEmailIdMessagesMessageId(emailId, messageId){
		var apipath = '/api/v2/conversations/emails/{emailId}/messages/{messageId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{emailId}', emailId);

        if(emailId === undefined && emailId !== null){
			throw 'Missing required  parameter: emailId';
        }

        apipath = apipath.replace('{messageId}', messageId);

        if(messageId === undefined && messageId !== null){
			throw 'Missing required  parameter: messageId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getEmailsEmailIdMessagesMessageId = getEmailsEmailIdMessagesMessageId;
	/**
     * @summary Update conversation participant
	 * @memberOf ConversationsApi#
	* @param {string} emailId - 
	* @param {string} participantId - 
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "wrapup": {
      "code": "",
      "name": "",
      "notes": "",
      "tags": [],
      "durationSeconds": 0,
      "endTime": "",
      "provisional": true
   },
   "state": "",
   "recording": true,
   "muted": true,
   "confined": true,
   "held": true,
   "wrapupSkipped": true
}
	*/
	function patchEmailsEmailIdParticipantsParticipantId(emailId, participantId, body){
		var apipath = '/api/v2/conversations/emails/{emailId}/participants/{participantId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{emailId}', emailId);

        if(emailId === undefined && emailId !== null){
			throw 'Missing required  parameter: emailId';
        }

        apipath = apipath.replace('{participantId}', participantId);

        if(participantId === undefined && participantId !== null){
			throw 'Missing required  parameter: participantId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PATCH', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.patchEmailsEmailIdParticipantsParticipantId = patchEmailsEmailIdParticipantsParticipantId;
	/**
     * @summary Update the attributes on a conversation participant.
	 * @memberOf ConversationsApi#
	* @param {string} emailId - 
	* @param {string} participantId - 
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "attributes": {}
}
	*/
	function patchEmailsEmailIdParticipantsParticipantIdAttributes(emailId, participantId, body){
		var apipath = '/api/v2/conversations/emails/{emailId}/participants/{participantId}/attributes';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{emailId}', emailId);

        if(emailId === undefined && emailId !== null){
			throw 'Missing required  parameter: emailId';
        }

        apipath = apipath.replace('{participantId}', participantId);

        if(participantId === undefined && participantId !== null){
			throw 'Missing required  parameter: participantId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PATCH', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.patchEmailsEmailIdParticipantsParticipantIdAttributes = patchEmailsEmailIdParticipantsParticipantIdAttributes;
	/**
     * @summary Replace this participant with the specified user and/or address
	 * @memberOf ConversationsApi#
	* @param {string} emailId - 
	* @param {string} participantId - 
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "userId": "",
   "address": "",
   "userName": "",
   "queueId": "",
   "voicemail": true
}
	*/
	function postEmailsEmailIdParticipantsParticipantIdReplace(emailId, participantId, body){
		var apipath = '/api/v2/conversations/emails/{emailId}/participants/{participantId}/replace';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{emailId}', emailId);

        if(emailId === undefined && emailId !== null){
			throw 'Missing required  parameter: emailId';
        }

        apipath = apipath.replace('{participantId}', participantId);

        if(participantId === undefined && participantId !== null){
			throw 'Missing required  parameter: participantId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postEmailsEmailIdParticipantsParticipantIdReplace = postEmailsEmailIdParticipantsParticipantIdReplace;
	/**
     * @summary Get the wrap-up for this conversation participant. 
	 * @memberOf ConversationsApi#
	* @param {string} emailId - 
	* @param {string} participantId - 
	* @param {boolean} provisional - Indicates if the wrap-up code is provisional.
	*/
	function getEmailsEmailIdParticipantsParticipantIdWrapup(emailId, participantId, provisional){
		var apipath = '/api/v2/conversations/emails/{emailId}/participants/{participantId}/wrapup';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{emailId}', emailId);

        if(emailId === undefined && emailId !== null){
			throw 'Missing required  parameter: emailId';
        }

        apipath = apipath.replace('{participantId}', participantId);

        if(participantId === undefined && participantId !== null){
			throw 'Missing required  parameter: participantId';
        }


		if(provisional !== undefined && provisional !== null){
			queryParameters.provisional = provisional;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getEmailsEmailIdParticipantsParticipantIdWrapup = getEmailsEmailIdParticipantsParticipantIdWrapup;
	/**
     * @summary Get list of wrapup codes for this conversation participant
	 * @memberOf ConversationsApi#
	* @param {string} emailId - 
	* @param {string} participantId - 
	*/
	function getEmailsEmailIdParticipantsParticipantIdWrapupcodes(emailId, participantId){
		var apipath = '/api/v2/conversations/emails/{emailId}/participants/{participantId}/wrapupcodes';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{emailId}', emailId);

        if(emailId === undefined && emailId !== null){
			throw 'Missing required  parameter: emailId';
        }

        apipath = apipath.replace('{participantId}', participantId);

        if(participantId === undefined && participantId !== null){
			throw 'Missing required  parameter: participantId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getEmailsEmailIdParticipantsParticipantIdWrapupcodes = getEmailsEmailIdParticipantsParticipantIdWrapupcodes;
	/**
     * @summary Create Fax Conversation
	 * @memberOf ConversationsApi#
	* @param {} body - Fax
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "addresses": [],
   "originalFilename": "",
   "contentType": "",
   "workspace": {
      "name": "",
      "type": "",
      "isCurrentUserWorkspace": true,
      "user": {},
      "bucket": "",
      "dateCreated": "",
      "dateModified": "",
      "summary": {},
      "acl": []
   },
   "coverSheet": {
      "notes": "",
      "locale": ""
   }
}
	*/
	function postFaxes(body){
		var apipath = '/api/v2/conversations/faxes';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postFaxes = postFaxes;
	/**
     * @summary Get recent video conversations
	 * @memberOf ConversationsApi#
	*/
	function getVideos(){
		var apipath = '/api/v2/conversations/videos';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getVideos = getVideos;
	/**
     * @summary Get video conversation
	 * @memberOf ConversationsApi#
	* @param {string} videoId - 
	*/
	function getVideosVideoId(videoId){
		var apipath = '/api/v2/conversations/videos/{videoId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{videoId}', videoId);

        if(videoId === undefined && videoId !== null){
			throw 'Missing required  parameter: videoId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getVideosVideoId = getVideosVideoId;
	/**
     * @summary Update conversation participant
	 * @memberOf ConversationsApi#
	* @param {string} videoId - 
	* @param {string} participantId - 
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "wrapup": {
      "code": "",
      "name": "",
      "notes": "",
      "tags": [],
      "durationSeconds": 0,
      "endTime": "",
      "provisional": true
   },
   "state": "",
   "recording": true,
   "muted": true,
   "confined": true,
   "held": true,
   "wrapupSkipped": true
}
	*/
	function patchVideosVideoIdParticipantsParticipantId(videoId, participantId, body){
		var apipath = '/api/v2/conversations/videos/{videoId}/participants/{participantId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{videoId}', videoId);

        if(videoId === undefined && videoId !== null){
			throw 'Missing required  parameter: videoId';
        }

        apipath = apipath.replace('{participantId}', participantId);

        if(participantId === undefined && participantId !== null){
			throw 'Missing required  parameter: participantId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PATCH', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.patchVideosVideoIdParticipantsParticipantId = patchVideosVideoIdParticipantsParticipantId;
	/**
     * @summary Update the attributes on a conversation participant.
	 * @memberOf ConversationsApi#
	* @param {string} videoId - 
	* @param {string} participantId - 
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "attributes": {}
}
	*/
	function patchVideosVideoIdParticipantsParticipantIdAttributes(videoId, participantId, body){
		var apipath = '/api/v2/conversations/videos/{videoId}/participants/{participantId}/attributes';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{videoId}', videoId);

        if(videoId === undefined && videoId !== null){
			throw 'Missing required  parameter: videoId';
        }

        apipath = apipath.replace('{participantId}', participantId);

        if(participantId === undefined && participantId !== null){
			throw 'Missing required  parameter: participantId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PATCH', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.patchVideosVideoIdParticipantsParticipantIdAttributes = patchVideosVideoIdParticipantsParticipantIdAttributes;
	/**
     * @summary Replace this participant with the specified user and/or address
	 * @memberOf ConversationsApi#
	* @param {string} videoId - 
	* @param {string} participantId - 
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "userId": "",
   "address": "",
   "userName": "",
   "queueId": "",
   "voicemail": true
}
	*/
	function postVideosVideoIdParticipantsParticipantIdReplace(videoId, participantId, body){
		var apipath = '/api/v2/conversations/videos/{videoId}/participants/{participantId}/replace';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{videoId}', videoId);

        if(videoId === undefined && videoId !== null){
			throw 'Missing required  parameter: videoId';
        }

        apipath = apipath.replace('{participantId}', participantId);

        if(participantId === undefined && participantId !== null){
			throw 'Missing required  parameter: participantId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postVideosVideoIdParticipantsParticipantIdReplace = postVideosVideoIdParticipantsParticipantIdReplace;
	/**
     * @summary Get the wrap-up for this conversation participant. 
	 * @memberOf ConversationsApi#
	* @param {string} videoId - 
	* @param {string} participantId - 
	* @param {boolean} provisional - Indicates if the wrap-up code is provisional.
	*/
	function getVideosVideoIdParticipantsParticipantIdWrapup(videoId, participantId, provisional){
		var apipath = '/api/v2/conversations/videos/{videoId}/participants/{participantId}/wrapup';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{videoId}', videoId);

        if(videoId === undefined && videoId !== null){
			throw 'Missing required  parameter: videoId';
        }

        apipath = apipath.replace('{participantId}', participantId);

        if(participantId === undefined && participantId !== null){
			throw 'Missing required  parameter: participantId';
        }


		if(provisional !== undefined && provisional !== null){
			queryParameters.provisional = provisional;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getVideosVideoIdParticipantsParticipantIdWrapup = getVideosVideoIdParticipantsParticipantIdWrapup;
	/**
     * @summary Get list of wrapup codes for this conversation participant
	 * @memberOf ConversationsApi#
	* @param {string} videoId - 
	* @param {string} participantId - 
	*/
	function getVideosVideoIdParticipantsParticipantIdWrapupcodes(videoId, participantId){
		var apipath = '/api/v2/conversations/videos/{videoId}/participants/{participantId}/wrapupcodes';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{videoId}', videoId);

        if(videoId === undefined && videoId !== null){
			throw 'Missing required  parameter: videoId';
        }

        apipath = apipath.replace('{participantId}', participantId);

        if(participantId === undefined && participantId !== null){
			throw 'Missing required  parameter: participantId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getVideosVideoIdParticipantsParticipantIdWrapupcodes = getVideosVideoIdParticipantsParticipantIdWrapupcodes;
	/**
     * @summary Get conversation
	 * @memberOf ConversationsApi#
	* @param {string} conversationId - conversation ID
	*/
	function getConversationId(conversationId){
		var apipath = '/api/v2/conversations/{conversationId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{conversationId}', conversationId);

        if(conversationId === undefined && conversationId !== null){
			throw 'Missing required  parameter: conversationId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getConversationId = getConversationId;
	/**
     * @summary Update a participant.
	 * @description Update conversation participant.
	 * @memberOf ConversationsApi#
	* @param {string} conversationId - conversation ID
	* @param {string} participantId - participant ID
	* @param {} body - Update conversation participant.
	 * @example
	 * Body Example:
	 * {
   "wrapup": {
      "code": "",
      "name": "",
      "notes": "",
      "tags": [],
      "durationSeconds": 0,
      "endTime": "",
      "provisional": true
   },
   "state": "",
   "recording": true,
   "muted": true,
   "confined": true,
   "held": true,
   "wrapupSkipped": true
}
	*/
	function patchConversationIdParticipantsParticipantId(conversationId, participantId, body){
		var apipath = '/api/v2/conversations/{conversationId}/participants/{participantId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{conversationId}', conversationId);

        if(conversationId === undefined && conversationId !== null){
			throw 'Missing required  parameter: conversationId';
        }

        apipath = apipath.replace('{participantId}', participantId);

        if(participantId === undefined && participantId !== null){
			throw 'Missing required  parameter: participantId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PATCH', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.patchConversationIdParticipantsParticipantId = patchConversationIdParticipantsParticipantId;
	/**
     * @summary Update the attributes on a conversation participant.
	 * @memberOf ConversationsApi#
	* @param {string} conversationId - conversation ID
	* @param {string} participantId - participant ID
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "attributes": {}
}
	*/
	function patchConversationIdParticipantsParticipantIdAttributes(conversationId, participantId, body){
		var apipath = '/api/v2/conversations/{conversationId}/participants/{participantId}/attributes';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{conversationId}', conversationId);

        if(conversationId === undefined && conversationId !== null){
			throw 'Missing required  parameter: conversationId';
        }

        apipath = apipath.replace('{participantId}', participantId);

        if(participantId === undefined && participantId !== null){
			throw 'Missing required  parameter: participantId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PATCH', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.patchConversationIdParticipantsParticipantIdAttributes = patchConversationIdParticipantsParticipantIdAttributes;
	/**
     * @summary Create a new callback for the specified participant on the conversation.
	 * @memberOf ConversationsApi#
	* @param {string} conversationId - conversation ID
	* @param {string} participantId - participant ID
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "scriptId": "",
   "queueId": "",
   "callbackUserName": "",
   "callbackNumbers": [],
   "countryCode": "",
   "skipEnabled": true
}
	*/
	function postConversationIdParticipantsParticipantIdCallbacks(conversationId, participantId, body){
		var apipath = '/api/v2/conversations/{conversationId}/participants/{participantId}/callbacks';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{conversationId}', conversationId);

        if(conversationId === undefined && conversationId !== null){
			throw 'Missing required  parameter: conversationId';
        }

        apipath = apipath.replace('{participantId}', participantId);

        if(participantId === undefined && participantId !== null){
			throw 'Missing required  parameter: participantId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postConversationIdParticipantsParticipantIdCallbacks = postConversationIdParticipantsParticipantIdCallbacks;
	/**
     * @summary Replace this participant with the specified user and/or address
	 * @memberOf ConversationsApi#
	* @param {string} conversationId - conversation ID
	* @param {string} participantId - participant ID
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "userId": "",
   "address": "",
   "userName": "",
   "queueId": "",
   "voicemail": true
}
	*/
	function postConversationIdParticipantsParticipantIdReplace(conversationId, participantId, body){
		var apipath = '/api/v2/conversations/{conversationId}/participants/{participantId}/replace';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{conversationId}', conversationId);

        if(conversationId === undefined && conversationId !== null){
			throw 'Missing required  parameter: conversationId';
        }

        apipath = apipath.replace('{participantId}', participantId);

        if(participantId === undefined && participantId !== null){
			throw 'Missing required  parameter: participantId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postConversationIdParticipantsParticipantIdReplace = postConversationIdParticipantsParticipantIdReplace;
	/**
     * @summary Get the wrap-up for this conversation participant. 
	 * @memberOf ConversationsApi#
	* @param {string} conversationId - conversation ID
	* @param {string} participantId - participant ID
	* @param {boolean} provisional - Indicates if the wrap-up code is provisional.
	*/
	function getConversationIdParticipantsParticipantIdWrapup(conversationId, participantId, provisional){
		var apipath = '/api/v2/conversations/{conversationId}/participants/{participantId}/wrapup';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{conversationId}', conversationId);

        if(conversationId === undefined && conversationId !== null){
			throw 'Missing required  parameter: conversationId';
        }

        apipath = apipath.replace('{participantId}', participantId);

        if(participantId === undefined && participantId !== null){
			throw 'Missing required  parameter: participantId';
        }


		if(provisional !== undefined && provisional !== null){
			queryParameters.provisional = provisional;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getConversationIdParticipantsParticipantIdWrapup = getConversationIdParticipantsParticipantIdWrapup;
	/**
     * @summary Get list of wrapup codes for this conversation participant
	 * @memberOf ConversationsApi#
	* @param {string} conversationId - conversation ID
	* @param {string} participantId - participant ID
	*/
	function getConversationIdParticipantsParticipantIdWrapupcodes(conversationId, participantId){
		var apipath = '/api/v2/conversations/{conversationId}/participants/{participantId}/wrapupcodes';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{conversationId}', conversationId);

        if(conversationId === undefined && conversationId !== null){
			throw 'Missing required  parameter: conversationId';
        }

        apipath = apipath.replace('{participantId}', participantId);

        if(participantId === undefined && participantId !== null){
			throw 'Missing required  parameter: participantId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getConversationIdParticipantsParticipantIdWrapupcodes = getConversationIdParticipantsParticipantIdWrapupcodes;

    return self;
};

//API VERSION - 
/**
* @class
* @example
* var api = new ExternalContactsApi(pureCloudSession);
*/
var ExternalContactsApi = function (pureCloudSession) {
	if(!pureCloudSession){
		throw "PureCloudSession is not valid.";
    }

	var self = this;
	/**
     * @summary Search for External Contacts
	 * @memberOf ExternalContactsApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} q - User supplied search keywords (no special syntax is currently supported)
	* @param {string} sortOrder - Sort order
	* @param {array} expand - which fields, if any, to expand
	*/
	function getContacts(pageSize, pageNumber, q, sortOrder, expand){
		var apipath = '/api/v2/externalcontacts/contacts';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(q !== undefined && q !== null){
			queryParameters.q = q;
		}


		if(sortOrder !== undefined && sortOrder !== null){
			queryParameters.sortOrder = sortOrder;
		}


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getContacts = getContacts;
	/**
     * @summary Create an ExternalContact
	 * @memberOf ExternalContactsApi#
	* @param {} body - ExternalContact
	 * @example
	 * Body Example:
	 * {
   "firstName": "",
   "middleName": "",
   "lastName": "",
   "salutation": "",
   "title": "",
   "workPhone": {
      "display": "",
      "extension": 0,
      "acceptsSMS": true,
      "userInput": "",
      "e164": "",
      "countryCode": ""
   },
   "cellPhone": {
      "display": "",
      "extension": 0,
      "acceptsSMS": true,
      "userInput": "",
      "e164": "",
      "countryCode": ""
   },
   "homePhone": {
      "display": "",
      "extension": 0,
      "acceptsSMS": true,
      "userInput": "",
      "e164": "",
      "countryCode": ""
   },
   "otherPhone": {
      "display": "",
      "extension": 0,
      "acceptsSMS": true,
      "userInput": "",
      "e164": "",
      "countryCode": ""
   },
   "workEmail": "",
   "personalEmail": "",
   "otherEmail": "",
   "address": {
      "address1": "",
      "address2": "",
      "city": "",
      "state": "",
      "postalCode": "",
      "countryCode": ""
   },
   "modifyDate": "",
   "createDate": "",
   "externalOrganization": {
      "name": "",
      "companyType": "",
      "industry": "",
      "primaryContactId": "",
      "address": {},
      "phoneNumber": {},
      "faxNumber": {},
      "employeeCount": 0,
      "revenue": 0,
      "tags": [],
      "websites": [],
      "tickers": [],
      "modifyDate": "",
      "createDate": ""
   }
}
	*/
	function postContacts(body){
		var apipath = '/api/v2/externalcontacts/contacts';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postContacts = postContacts;
	/**
     * @summary Fetch a ExternalContact
	 * @memberOf ExternalContactsApi#
	* @param {string} contactId - ExternalContact ID
	* @param {array} expand - which fields, if any, to expand
	*/
	function getContactsContactId(contactId, expand){
		var apipath = '/api/v2/externalcontacts/contacts/{contactId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{contactId}', contactId);

        if(contactId === undefined && contactId !== null){
			throw 'Missing required  parameter: contactId';
        }


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getContactsContactId = getContactsContactId;
	/**
     * @summary Update a externalContact
	 * @memberOf ExternalContactsApi#
	* @param {string} contactId - ExternalContact ID
	* @param {} body - ExternalContact
	 * @example
	 * Body Example:
	 * {
   "firstName": "",
   "middleName": "",
   "lastName": "",
   "salutation": "",
   "title": "",
   "workPhone": {
      "display": "",
      "extension": 0,
      "acceptsSMS": true,
      "userInput": "",
      "e164": "",
      "countryCode": ""
   },
   "cellPhone": {
      "display": "",
      "extension": 0,
      "acceptsSMS": true,
      "userInput": "",
      "e164": "",
      "countryCode": ""
   },
   "homePhone": {
      "display": "",
      "extension": 0,
      "acceptsSMS": true,
      "userInput": "",
      "e164": "",
      "countryCode": ""
   },
   "otherPhone": {
      "display": "",
      "extension": 0,
      "acceptsSMS": true,
      "userInput": "",
      "e164": "",
      "countryCode": ""
   },
   "workEmail": "",
   "personalEmail": "",
   "otherEmail": "",
   "address": {
      "address1": "",
      "address2": "",
      "city": "",
      "state": "",
      "postalCode": "",
      "countryCode": ""
   },
   "modifyDate": "",
   "createDate": "",
   "externalOrganization": {
      "name": "",
      "companyType": "",
      "industry": "",
      "primaryContactId": "",
      "address": {},
      "phoneNumber": {},
      "faxNumber": {},
      "employeeCount": 0,
      "revenue": 0,
      "tags": [],
      "websites": [],
      "tickers": [],
      "modifyDate": "",
      "createDate": ""
   }
}
	*/
	function putContactsContactId(contactId, body){
		var apipath = '/api/v2/externalcontacts/contacts/{contactId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{contactId}', contactId);

        if(contactId === undefined && contactId !== null){
			throw 'Missing required  parameter: contactId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putContactsContactId = putContactsContactId;
	/**
     * @summary Delete a contact
	 * @memberOf ExternalContactsApi#
	* @param {string} contactId - ExternalContact ID
	*/
	function deleteContactsContactId(contactId){
		var apipath = '/api/v2/externalcontacts/contacts/{contactId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{contactId}', contactId);

        if(contactId === undefined && contactId !== null){
			throw 'Missing required  parameter: contactId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteContactsContactId = deleteContactsContactId;
	/**
     * @summary List Notes for an ExternalContact
	 * @memberOf ExternalContactsApi#
	* @param {string} contactId - ExternalContact Id
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} sortOrder - Sort order
	*/
	function getContactsContactIdNotes(contactId, pageSize, pageNumber, sortOrder){
		var apipath = '/api/v2/externalcontacts/contacts/{contactId}/notes';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{contactId}', contactId);

        if(contactId === undefined && contactId !== null){
			throw 'Missing required  parameter: contactId';
        }


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(sortOrder !== undefined && sortOrder !== null){
			queryParameters.sortOrder = sortOrder;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getContactsContactIdNotes = getContactsContactIdNotes;
	/**
     * @summary Create a Note for an ExternalContact
	 * @memberOf ExternalContactsApi#
	* @param {string} contactId - ExternalContact Id
	* @param {} body - ExternalContact
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "noteText": "",
   "modifyDate": "",
   "createDate": ""
}
	*/
	function postContactsContactIdNotes(contactId, body){
		var apipath = '/api/v2/externalcontacts/contacts/{contactId}/notes';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{contactId}', contactId);

        if(contactId === undefined && contactId !== null){
			throw 'Missing required  parameter: contactId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postContactsContactIdNotes = postContactsContactIdNotes;
	/**
     * @summary Fetch a note for a contact
	 * @memberOf ExternalContactsApi#
	* @param {string} contactId - ExternalContact Id
	* @param {string} noteId - Note Id
	*/
	function getContactsContactIdNotesNoteId(contactId, noteId){
		var apipath = '/api/v2/externalcontacts/contacts/{contactId}/notes/{noteId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{contactId}', contactId);

        if(contactId === undefined && contactId !== null){
			throw 'Missing required  parameter: contactId';
        }

        apipath = apipath.replace('{noteId}', noteId);

        if(noteId === undefined && noteId !== null){
			throw 'Missing required  parameter: noteId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getContactsContactIdNotesNoteId = getContactsContactIdNotesNoteId;
	/**
     * @summary Update a note for a contact
	 * @memberOf ExternalContactsApi#
	* @param {string} contactId - ExternalContact Id
	* @param {string} noteId - Note Id
	* @param {} body - Note
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "noteText": "",
   "modifyDate": "",
   "createDate": ""
}
	*/
	function putContactsContactIdNotesNoteId(contactId, noteId, body){
		var apipath = '/api/v2/externalcontacts/contacts/{contactId}/notes/{noteId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{contactId}', contactId);

        if(contactId === undefined && contactId !== null){
			throw 'Missing required  parameter: contactId';
        }

        apipath = apipath.replace('{noteId}', noteId);

        if(noteId === undefined && noteId !== null){
			throw 'Missing required  parameter: noteId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putContactsContactIdNotesNoteId = putContactsContactIdNotesNoteId;
	/**
     * @summary Delete a note for a contact
	 * @memberOf ExternalContactsApi#
	* @param {string} contactId - ExternalContact Id
	* @param {string} noteId - Note Id
	*/
	function deleteContactsContactIdNotesNoteId(contactId, noteId){
		var apipath = '/api/v2/externalcontacts/contacts/{contactId}/notes/{noteId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{contactId}', contactId);

        if(contactId === undefined && contactId !== null){
			throw 'Missing required  parameter: contactId';
        }

        apipath = apipath.replace('{noteId}', noteId);

        if(noteId === undefined && noteId !== null){
			throw 'Missing required  parameter: noteId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteContactsContactIdNotesNoteId = deleteContactsContactIdNotesNoteId;
	/**
     * @summary Search for External Organizations
	 * @memberOf ExternalContactsApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} q - Search query
	* @param {string} sortOrder - Sort order
	*/
	function getOrganizations(pageSize, pageNumber, q, sortOrder){
		var apipath = '/api/v2/externalcontacts/organizations';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(q !== undefined && q !== null){
			queryParameters.q = q;
		}


		if(sortOrder !== undefined && sortOrder !== null){
			queryParameters.sortOrder = sortOrder;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getOrganizations = getOrganizations;
	/**
     * @summary Create an External Organization
	 * @memberOf ExternalContactsApi#
	* @param {} body - ExternalOrganization
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "companyType": "",
   "industry": "",
   "primaryContactId": "",
   "address": {
      "address1": "",
      "address2": "",
      "city": "",
      "state": "",
      "postalCode": "",
      "countryCode": ""
   },
   "phoneNumber": {
      "display": "",
      "extension": 0,
      "acceptsSMS": true,
      "userInput": "",
      "e164": "",
      "countryCode": ""
   },
   "faxNumber": {
      "display": "",
      "extension": 0,
      "acceptsSMS": true,
      "userInput": "",
      "e164": "",
      "countryCode": ""
   },
   "employeeCount": 0,
   "revenue": 0,
   "tags": [],
   "websites": [],
   "tickers": [],
   "modifyDate": "",
   "createDate": ""
}
	*/
	function postOrganizations(body){
		var apipath = '/api/v2/externalcontacts/organizations';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postOrganizations = postOrganizations;
	/**
     * @summary Fetch an External Organization
	 * @memberOf ExternalContactsApi#
	* @param {string} externalOrganizationId - External Organization ID
	*/
	function getOrganizationsExternalorganizationId(externalOrganizationId){
		var apipath = '/api/v2/externalcontacts/organizations/{externalOrganizationId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{externalOrganizationId}', externalOrganizationId);

        if(externalOrganizationId === undefined && externalOrganizationId !== null){
			throw 'Missing required  parameter: externalOrganizationId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getOrganizationsExternalorganizationId = getOrganizationsExternalorganizationId;
	/**
     * @summary Update an External Organization
	 * @memberOf ExternalContactsApi#
	* @param {string} externalOrganizationId - External Organization ID
	* @param {} body - ExternalOrganization
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "companyType": "",
   "industry": "",
   "primaryContactId": "",
   "address": {
      "address1": "",
      "address2": "",
      "city": "",
      "state": "",
      "postalCode": "",
      "countryCode": ""
   },
   "phoneNumber": {
      "display": "",
      "extension": 0,
      "acceptsSMS": true,
      "userInput": "",
      "e164": "",
      "countryCode": ""
   },
   "faxNumber": {
      "display": "",
      "extension": 0,
      "acceptsSMS": true,
      "userInput": "",
      "e164": "",
      "countryCode": ""
   },
   "employeeCount": 0,
   "revenue": 0,
   "tags": [],
   "websites": [],
   "tickers": [],
   "modifyDate": "",
   "createDate": ""
}
	*/
	function putOrganizationsExternalorganizationId(externalOrganizationId, body){
		var apipath = '/api/v2/externalcontacts/organizations/{externalOrganizationId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{externalOrganizationId}', externalOrganizationId);

        if(externalOrganizationId === undefined && externalOrganizationId !== null){
			throw 'Missing required  parameter: externalOrganizationId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putOrganizationsExternalorganizationId = putOrganizationsExternalorganizationId;
	/**
     * @summary Delete an External Organization
	 * @memberOf ExternalContactsApi#
	* @param {string} externalOrganizationId - External Organization ID
	*/
	function deleteOrganizationsExternalorganizationId(externalOrganizationId){
		var apipath = '/api/v2/externalcontacts/organizations/{externalOrganizationId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{externalOrganizationId}', externalOrganizationId);

        if(externalOrganizationId === undefined && externalOrganizationId !== null){
			throw 'Missing required  parameter: externalOrganizationId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteOrganizationsExternalorganizationId = deleteOrganizationsExternalorganizationId;
	/**
     * @summary Search for External Contacts
	 * @memberOf ExternalContactsApi#
	* @param {string} externalOrganizationId - External Organization ID
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} q - User supplied search keywords (no special syntax is currently supported)
	* @param {string} sortOrder - Sort order
	* @param {array} expand - which fields, if any, to expand
	*/
	function getOrganizationsExternalorganizationIdContacts(externalOrganizationId, pageSize, pageNumber, q, sortOrder, expand){
		var apipath = '/api/v2/externalcontacts/organizations/{externalOrganizationId}/contacts';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{externalOrganizationId}', externalOrganizationId);

        if(externalOrganizationId === undefined && externalOrganizationId !== null){
			throw 'Missing required  parameter: externalOrganizationId';
        }


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(q !== undefined && q !== null){
			queryParameters.q = q;
		}


		if(sortOrder !== undefined && sortOrder !== null){
			queryParameters.sortOrder = sortOrder;
		}


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getOrganizationsExternalorganizationIdContacts = getOrganizationsExternalorganizationIdContacts;
	/**
     * @summary List Notes for an External Organization
	 * @memberOf ExternalContactsApi#
	* @param {string} externalOrganizationId - External Organization Id
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} sortOrder - Sort order
	*/
	function getOrganizationsExternalorganizationIdNotes(externalOrganizationId, pageSize, pageNumber, sortOrder){
		var apipath = '/api/v2/externalcontacts/organizations/{externalOrganizationId}/notes';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{externalOrganizationId}', externalOrganizationId);

        if(externalOrganizationId === undefined && externalOrganizationId !== null){
			throw 'Missing required  parameter: externalOrganizationId';
        }


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(sortOrder !== undefined && sortOrder !== null){
			queryParameters.sortOrder = sortOrder;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getOrganizationsExternalorganizationIdNotes = getOrganizationsExternalorganizationIdNotes;
	/**
     * @summary Create a Note for an External Organization
	 * @memberOf ExternalContactsApi#
	* @param {string} externalOrganizationId - External Organization Id
	* @param {} body - ExternalContact
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "noteText": "",
   "modifyDate": "",
   "createDate": ""
}
	*/
	function postOrganizationsExternalorganizationIdNotes(externalOrganizationId, body){
		var apipath = '/api/v2/externalcontacts/organizations/{externalOrganizationId}/notes';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{externalOrganizationId}', externalOrganizationId);

        if(externalOrganizationId === undefined && externalOrganizationId !== null){
			throw 'Missing required  parameter: externalOrganizationId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postOrganizationsExternalorganizationIdNotes = postOrganizationsExternalorganizationIdNotes;
	/**
     * @summary Fetch a note
	 * @memberOf ExternalContactsApi#
	* @param {string} externalOrganizationId - External Organization Id
	* @param {string} noteId - Note Id
	*/
	function getOrganizationsExternalorganizationIdNotesNoteId(externalOrganizationId, noteId){
		var apipath = '/api/v2/externalcontacts/organizations/{externalOrganizationId}/notes/{noteId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{externalOrganizationId}', externalOrganizationId);

        if(externalOrganizationId === undefined && externalOrganizationId !== null){
			throw 'Missing required  parameter: externalOrganizationId';
        }

        apipath = apipath.replace('{noteId}', noteId);

        if(noteId === undefined && noteId !== null){
			throw 'Missing required  parameter: noteId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getOrganizationsExternalorganizationIdNotesNoteId = getOrganizationsExternalorganizationIdNotesNoteId;
	/**
     * @summary Update a note
	 * @memberOf ExternalContactsApi#
	* @param {string} externalOrganizationId - External Organization Id
	* @param {string} noteId - Note Id
	* @param {} body - Note
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "noteText": "",
   "modifyDate": "",
   "createDate": ""
}
	*/
	function putOrganizationsExternalorganizationIdNotesNoteId(externalOrganizationId, noteId, body){
		var apipath = '/api/v2/externalcontacts/organizations/{externalOrganizationId}/notes/{noteId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{externalOrganizationId}', externalOrganizationId);

        if(externalOrganizationId === undefined && externalOrganizationId !== null){
			throw 'Missing required  parameter: externalOrganizationId';
        }

        apipath = apipath.replace('{noteId}', noteId);

        if(noteId === undefined && noteId !== null){
			throw 'Missing required  parameter: noteId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putOrganizationsExternalorganizationIdNotesNoteId = putOrganizationsExternalorganizationIdNotesNoteId;
	/**
     * @summary Delete a note
	 * @memberOf ExternalContactsApi#
	* @param {string} externalOrganizationId - External Organization Id
	* @param {string} noteId - Note Id
	*/
	function deleteOrganizationsExternalorganizationIdNotesNoteId(externalOrganizationId, noteId){
		var apipath = '/api/v2/externalcontacts/organizations/{externalOrganizationId}/notes/{noteId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{externalOrganizationId}', externalOrganizationId);

        if(externalOrganizationId === undefined && externalOrganizationId !== null){
			throw 'Missing required  parameter: externalOrganizationId';
        }

        apipath = apipath.replace('{noteId}', noteId);

        if(noteId === undefined && noteId !== null){
			throw 'Missing required  parameter: noteId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteOrganizationsExternalorganizationIdNotesNoteId = deleteOrganizationsExternalorganizationIdNotesNoteId;
	/**
     * @summary Fetch an External Organization
	 * @memberOf ExternalContactsApi#
	* @param {string} externalOrganizationId - External Organization ID
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} sortOrder - Sort order
	*/
	function getOrganizationsExternalorganizationIdRelationships(externalOrganizationId, pageSize, pageNumber, sortOrder){
		var apipath = '/api/v2/externalcontacts/organizations/{externalOrganizationId}/relationships';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{externalOrganizationId}', externalOrganizationId);

        if(externalOrganizationId === undefined && externalOrganizationId !== null){
			throw 'Missing required  parameter: externalOrganizationId';
        }


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(sortOrder !== undefined && sortOrder !== null){
			queryParameters.sortOrder = sortOrder;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getOrganizationsExternalorganizationIdRelationships = getOrganizationsExternalorganizationIdRelationships;
	/**
     * @summary Create a relationship
	 * @memberOf ExternalContactsApi#
	* @param {} body - Relationship
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "user": {
      "name": "",
      "chat": {},
      "department": "",
      "email": "",
      "addresses": [],
      "title": "",
      "username": "",
      "images": []
   },
   "externalOrganization": {
      "name": "",
      "companyType": "",
      "industry": "",
      "primaryContactId": "",
      "address": {},
      "phoneNumber": {},
      "faxNumber": {},
      "employeeCount": 0,
      "revenue": 0,
      "tags": [],
      "websites": [],
      "tickers": [],
      "modifyDate": "",
      "createDate": ""
   },
   "relationship": ""
}
	*/
	function postRelationships(body){
		var apipath = '/api/v2/externalcontacts/relationships';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postRelationships = postRelationships;
	/**
     * @summary Fetch a relationship
	 * @memberOf ExternalContactsApi#
	* @param {string} relationshipId - Relationship Id
	*/
	function getRelationshipsRelationshipId(relationshipId){
		var apipath = '/api/v2/externalcontacts/relationships/{relationshipId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{relationshipId}', relationshipId);

        if(relationshipId === undefined && relationshipId !== null){
			throw 'Missing required  parameter: relationshipId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getRelationshipsRelationshipId = getRelationshipsRelationshipId;
	/**
     * @summary Update a relationship
	 * @memberOf ExternalContactsApi#
	* @param {string} relationshipId - Relationship Id
	* @param {} body - Relationship
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "user": {
      "name": "",
      "chat": {},
      "department": "",
      "email": "",
      "addresses": [],
      "title": "",
      "username": "",
      "images": []
   },
   "externalOrganization": {
      "name": "",
      "companyType": "",
      "industry": "",
      "primaryContactId": "",
      "address": {},
      "phoneNumber": {},
      "faxNumber": {},
      "employeeCount": 0,
      "revenue": 0,
      "tags": [],
      "websites": [],
      "tickers": [],
      "modifyDate": "",
      "createDate": ""
   },
   "relationship": ""
}
	*/
	function putRelationshipsRelationshipId(relationshipId, body){
		var apipath = '/api/v2/externalcontacts/relationships/{relationshipId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{relationshipId}', relationshipId);

        if(relationshipId === undefined && relationshipId !== null){
			throw 'Missing required  parameter: relationshipId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putRelationshipsRelationshipId = putRelationshipsRelationshipId;
	/**
     * @summary Delete a relationship
	 * @memberOf ExternalContactsApi#
	* @param {string} relationshipId - Relationship Id
	*/
	function deleteRelationshipsRelationshipId(relationshipId){
		var apipath = '/api/v2/externalcontacts/relationships/{relationshipId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{relationshipId}', relationshipId);

        if(relationshipId === undefined && relationshipId !== null){
			throw 'Missing required  parameter: relationshipId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteRelationshipsRelationshipId = deleteRelationshipsRelationshipId;

    return self;
};

//API VERSION - 
/**
* @class
* @example
* var api = new FaxApi(pureCloudSession);
*/
var FaxApi = function (pureCloudSession) {
	if(!pureCloudSession){
		throw "PureCloudSession is not valid.";
    }

	var self = this;
	/**
     * @summary Get a list of fax documents.
	 * @memberOf FaxApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	*/
	function getDocuments(pageSize, pageNumber){
		var apipath = '/api/v2/fax/documents';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getDocuments = getDocuments;
	/**
     * @summary Get a document.
	 * @memberOf FaxApi#
	* @param {string} documentId - Document ID
	*/
	function getDocumentsDocumentId(documentId){
		var apipath = '/api/v2/fax/documents/{documentId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{documentId}', documentId);

        if(documentId === undefined && documentId !== null){
			throw 'Missing required  parameter: documentId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getDocumentsDocumentId = getDocumentsDocumentId;
	/**
     * @summary Update a fax document.
	 * @memberOf FaxApi#
	* @param {string} documentId - Document ID
	* @param {} body - Document
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "contentUri": "",
   "workspace": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "createdBy": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "contentType": "",
   "contentLength": 0,
   "filename": "",
   "read": true,
   "pageCount": 0,
   "callerAddress": "",
   "receiverAddress": "",
   "thumbnails": [],
   "sharingUri": "",
   "downloadSharingUri": ""
}
	*/
	function putDocumentsDocumentId(documentId, body){
		var apipath = '/api/v2/fax/documents/{documentId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{documentId}', documentId);

        if(documentId === undefined && documentId !== null){
			throw 'Missing required  parameter: documentId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putDocumentsDocumentId = putDocumentsDocumentId;
	/**
     * @summary Delete a fax document.
	 * @memberOf FaxApi#
	* @param {string} documentId - Document ID
	*/
	function deleteDocumentsDocumentId(documentId){
		var apipath = '/api/v2/fax/documents/{documentId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{documentId}', documentId);

        if(documentId === undefined && documentId !== null){
			throw 'Missing required  parameter: documentId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteDocumentsDocumentId = deleteDocumentsDocumentId;
	/**
     * @summary Download a fax document.
	 * @memberOf FaxApi#
	* @param {string} documentId - Document ID
	*/
	function getDocumentsDocumentIdContent(documentId){
		var apipath = '/api/v2/fax/documents/{documentId}/content';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{documentId}', documentId);

        if(documentId === undefined && documentId !== null){
			throw 'Missing required  parameter: documentId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getDocumentsDocumentIdContent = getDocumentsDocumentIdContent;
	/**
     * @summary Get fax summary
	 * @memberOf FaxApi#
	*/
	function getSummary(){
		var apipath = '/api/v2/fax/summary';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getSummary = getSummary;

    return self;
};

//API VERSION - 
/**
* @class
* @example
* var api = new GeolocationApi(pureCloudSession);
*/
var GeolocationApi = function (pureCloudSession) {
	if(!pureCloudSession){
		throw "PureCloudSession is not valid.";
    }

	var self = this;
	/**
     * @summary Get a organization's GeolocationSettings
	 * @memberOf GeolocationApi#
	*/
	function getSettings(){
		var apipath = '/api/v2/geolocations/settings';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getSettings = getSettings;
	/**
     * @summary Patch a organization's GeolocationSettings
	 * @memberOf GeolocationApi#
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "enabled": true
}
	*/
	function patchSettings(body){
		var apipath = '/api/v2/geolocations/settings';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PATCH', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.patchSettings = patchSettings;
	/**
     * @summary Get a user's Geolocation
	 * @memberOf GeolocationApi#
	* @param {string} userId - user Id
	* @param {string} clientId - client Id
	*/
	function getUserIdGeolocationsClientId(userId, clientId){
		var apipath = '/api/v2/users/{userId}/geolocations/{clientId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{userId}', userId);

        if(userId === undefined && userId !== null){
			throw 'Missing required  parameter: userId';
        }

        apipath = apipath.replace('{clientId}', clientId);

        if(clientId === undefined && clientId !== null){
			throw 'Missing required  parameter: clientId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getUserIdGeolocationsClientId = getUserIdGeolocationsClientId;
	/**
     * @summary Patch a user's Geolocation
	 * @description The geolocation object can be patched one of three ways. Option 1: Set the 'primary' property to true. This will set the client as the user's primary geolocation source.  Option 2: Provide the 'latitude' and 'longitude' values.  This will enqueue an asynchronous update of the 'city', 'region', and 'country', generating a notification. A subsequent GET operation will include the new values for 'city', 'region' and 'country'.  Option 3:  Provide the 'city', 'region', 'country' values.  Option 1 can be combined with Option 2 or Option 3.  For example, update the client as primary and provide latitude and longitude values.
	 * @memberOf GeolocationApi#
	* @param {string} userId - user Id
	* @param {string} clientId - client Id
	* @param {} body - The geolocation object can be patched one of three ways. Option 1: Set the 'primary' property to true. This will set the client as the user's primary geolocation source.  Option 2: Provide the 'latitude' and 'longitude' values.  This will enqueue an asynchronous update of the 'city', 'region', and 'country', generating a notification. A subsequent GET operation will include the new values for 'city', 'region' and 'country'.  Option 3:  Provide the 'city', 'region', 'country' values.  Option 1 can be combined with Option 2 or Option 3.  For example, update the client as primary and provide latitude and longitude values.
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "type": "",
   "primary": true,
   "latitude": {},
   "longitude": {},
   "country": "",
   "region": "",
   "city": ""
}
	*/
	function patchUserIdGeolocationsClientId(userId, clientId, body){
		var apipath = '/api/v2/users/{userId}/geolocations/{clientId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{userId}', userId);

        if(userId === undefined && userId !== null){
			throw 'Missing required  parameter: userId';
        }

        apipath = apipath.replace('{clientId}', clientId);

        if(clientId === undefined && clientId !== null){
			throw 'Missing required  parameter: clientId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PATCH', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.patchUserIdGeolocationsClientId = patchUserIdGeolocationsClientId;

    return self;
};

//API VERSION - 
/**
* @class
* @example
* var api = new GreetingsApi(pureCloudSession);
*/
var GreetingsApi = function (pureCloudSession) {
	if(!pureCloudSession){
		throw "PureCloudSession is not valid.";
    }

	var self = this;
	/**
     * @summary Gets an Organization's Greetings
	 * @memberOf GreetingsApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	*/
	function getGreetings(pageSize, pageNumber){
		var apipath = '/api/v2/greetings';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getGreetings = getGreetings;
	/**
     * @summary Create a Greeting for an Organization
	 * @memberOf GreetingsApi#
	* @param {} body - The Greeting to create
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "type": "",
   "ownerType": "",
   "owner": {
      "name": ""
   },
   "audioFile": {
      "durationMilliseconds": 0,
      "sizeBytes": 0,
      "selfUri": ""
   },
   "audioTTS": "",
   "createdDate": "",
   "createdBy": "",
   "modifiedDate": "",
   "modifiedBy": ""
}
	*/
	function postGreetings(body){
		var apipath = '/api/v2/greetings';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }

        if(body === undefined && body !== null){
			throw 'Missing required  parameter: body';
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postGreetings = postGreetings;
	/**
     * @summary Get an Organization's DefaultGreetingList
	 * @memberOf GreetingsApi#
	*/
	function getDefaults(){
		var apipath = '/api/v2/greetings/defaults';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getDefaults = getDefaults;
	/**
     * @summary Update an Organization's DefaultGreetingList
	 * @memberOf GreetingsApi#
	* @param {} body - The updated defaultGreetingList
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "owner": {
      "name": ""
   },
   "ownerType": "",
   "greetings": {},
   "createdDate": "",
   "createdBy": "",
   "modifiedDate": "",
   "modifiedBy": ""
}
	*/
	function putDefaults(body){
		var apipath = '/api/v2/greetings/defaults';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }

        if(body === undefined && body !== null){
			throw 'Missing required  parameter: body';
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putDefaults = putDefaults;
	/**
     * @summary Get a Greeting with the given GreetingId
	 * @memberOf GreetingsApi#
	* @param {string} greetingId - Greeting ID
	*/
	function getGreetingId(greetingId){
		var apipath = '/api/v2/greetings/{greetingId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{greetingId}', greetingId);

        if(greetingId === undefined && greetingId !== null){
			throw 'Missing required  parameter: greetingId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getGreetingId = getGreetingId;
	/**
     * @summary Updates the Greeting with the given GreetingId
	 * @memberOf GreetingsApi#
	* @param {string} greetingId - Greeting ID
	* @param {} body - The updated Greeting
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "type": "",
   "ownerType": "",
   "owner": {
      "name": ""
   },
   "audioFile": {
      "durationMilliseconds": 0,
      "sizeBytes": 0,
      "selfUri": ""
   },
   "audioTTS": "",
   "createdDate": "",
   "createdBy": "",
   "modifiedDate": "",
   "modifiedBy": ""
}
	*/
	function putGreetingId(greetingId, body){
		var apipath = '/api/v2/greetings/{greetingId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{greetingId}', greetingId);

        if(greetingId === undefined && greetingId !== null){
			throw 'Missing required  parameter: greetingId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }

        if(body === undefined && body !== null){
			throw 'Missing required  parameter: body';
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putGreetingId = putGreetingId;
	/**
     * @summary Deletes a Greeting with the given GreetingId
	 * @memberOf GreetingsApi#
	* @param {string} greetingId - Greeting ID
	*/
	function deleteGreetingId(greetingId){
		var apipath = '/api/v2/greetings/{greetingId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{greetingId}', greetingId);

        if(greetingId === undefined && greetingId !== null){
			throw 'Missing required  parameter: greetingId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteGreetingId = deleteGreetingId;
	/**
     * @summary Get media playback URI for this greeting
	 * @memberOf GreetingsApi#
	* @param {string} greetingId - Greeting ID
	* @param {string} formatId - The desired format (WAV, etc.)
	WAV,
	*/
	function getGreetingIdMedia(greetingId, formatId){
		var apipath = '/api/v2/greetings/{greetingId}/media';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{greetingId}', greetingId);

        if(greetingId === undefined && greetingId !== null){
			throw 'Missing required  parameter: greetingId';
        }


		if(formatId !== undefined && formatId !== null){
			queryParameters.formatId = formatId;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getGreetingIdMedia = getGreetingIdMedia;
	/**
     * @summary Get a list of the User's Greetings
	 * @memberOf GreetingsApi#
	* @param {string} userId - User ID
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	*/
	function getUserIdGreetings(userId, pageSize, pageNumber){
		var apipath = '/api/v2/users/{userId}/greetings';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{userId}', userId);

        if(userId === undefined && userId !== null){
			throw 'Missing required  parameter: userId';
        }


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getUserIdGreetings = getUserIdGreetings;
	/**
     * @summary Creates a Greeting for a User
	 * @memberOf GreetingsApi#
	* @param {string} userId - User ID
	* @param {} body - The Greeting to create
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "type": "",
   "ownerType": "",
   "owner": {
      "name": ""
   },
   "audioFile": {
      "durationMilliseconds": 0,
      "sizeBytes": 0,
      "selfUri": ""
   },
   "audioTTS": "",
   "createdDate": "",
   "createdBy": "",
   "modifiedDate": "",
   "modifiedBy": ""
}
	*/
	function postUserIdGreetings(userId, body){
		var apipath = '/api/v2/users/{userId}/greetings';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{userId}', userId);

        if(userId === undefined && userId !== null){
			throw 'Missing required  parameter: userId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }

        if(body === undefined && body !== null){
			throw 'Missing required  parameter: body';
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postUserIdGreetings = postUserIdGreetings;
	/**
     * @summary Grabs the list of Default Greetings given a User's ID
	 * @memberOf GreetingsApi#
	* @param {string} userId - User ID
	*/
	function getUserIdGreetingsDefaults(userId){
		var apipath = '/api/v2/users/{userId}/greetings/defaults';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{userId}', userId);

        if(userId === undefined && userId !== null){
			throw 'Missing required  parameter: userId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getUserIdGreetingsDefaults = getUserIdGreetingsDefaults;
	/**
     * @summary Updates the DefaultGreetingList of the specified User
	 * @memberOf GreetingsApi#
	* @param {string} userId - User ID
	* @param {} body - The updated defaultGreetingList
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "owner": {
      "name": ""
   },
   "ownerType": "",
   "greetings": {},
   "createdDate": "",
   "createdBy": "",
   "modifiedDate": "",
   "modifiedBy": ""
}
	*/
	function putUserIdGreetingsDefaults(userId, body){
		var apipath = '/api/v2/users/{userId}/greetings/defaults';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{userId}', userId);

        if(userId === undefined && userId !== null){
			throw 'Missing required  parameter: userId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }

        if(body === undefined && body !== null){
			throw 'Missing required  parameter: body';
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putUserIdGreetingsDefaults = putUserIdGreetingsDefaults;

    return self;
};

//API VERSION - 
/**
* @class
* @example
* var api = new GroupsApi(pureCloudSession);
*/
var GroupsApi = function (pureCloudSession) {
	if(!pureCloudSession){
		throw "PureCloudSession is not valid.";
    }

	var self = this;
	/**
     * @summary Get a group list
	 * @memberOf GroupsApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} sortOrder - Ascending or descending sort order
	[ascending,
	descending],
	*/
	function getGroups(pageSize, pageNumber, sortOrder){
		var apipath = '/api/v2/groups';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(sortOrder !== undefined && sortOrder !== null){
			queryParameters.sortOrder = sortOrder;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getGroups = getGroups;
	/**
     * @summary Search using q64
	 * @memberOf GroupsApi#
	* @param {string} q64 - 
	* @param {array} expand - 
	*/
	function getSearch(q64, expand){
		var apipath = '/api/v2/groups/search';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(q64 !== undefined && q64 !== null){
			queryParameters.q64 = q64;
		}


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getSearch = getSearch;
	/**
     * @summary Search
	 * @memberOf GroupsApi#
	* @param {} body - Search request options
	 * @example
	 * Body Example:
	 * {
   "types": [],
   "sortOrder": "",
   "query": [],
   "sortBy": "",
   "pageSize": 0,
   "pageNumber": 0,
   "returnFields": [],
   "aggregations": [],
   "expand": []
}
	*/
	function postSearch(body){
		var apipath = '/api/v2/groups/search';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postSearch = postSearch;
	/**
     * @summary Get group
	 * @memberOf GroupsApi#
	* @param {string} groupId - Group ID
	*/
	function getGroupId(groupId){
		var apipath = '/api/v2/groups/{groupId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{groupId}', groupId);

        if(groupId === undefined && groupId !== null){
			throw 'Missing required  parameter: groupId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getGroupId = getGroupId;
	/**
     * @summary Get group members
	 * @memberOf GroupsApi#
	* @param {string} groupId - Group ID
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} sortOrder - Ascending or descending sort order
	[ascending,
	descending],
	*/
	function getGroupIdMembers(groupId, pageSize, pageNumber, sortOrder){
		var apipath = '/api/v2/groups/{groupId}/members';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{groupId}', groupId);

        if(groupId === undefined && groupId !== null){
			throw 'Missing required  parameter: groupId';
        }


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(sortOrder !== undefined && sortOrder !== null){
			queryParameters.sortOrder = sortOrder;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getGroupIdMembers = getGroupIdMembers;

    return self;
};

//API VERSION - 
/**
* @class
* @example
* var api = new LanguagesApi(pureCloudSession);
*/
var LanguagesApi = function (pureCloudSession) {
	if(!pureCloudSession){
		throw "PureCloudSession is not valid.";
    }

	var self = this;
	/**
     * @summary Get the list of supported languages.
	 * @memberOf LanguagesApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} sortOrder - Ascending or descending sort order
	[ascending,
	descending],
	*/
	function getLanguages(pageSize, pageNumber, sortOrder){
		var apipath = '/api/v2/languages';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(sortOrder !== undefined && sortOrder !== null){
			queryParameters.sortOrder = sortOrder;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getLanguages = getLanguages;
	/**
     * @summary Create Language
	 * @memberOf LanguagesApi#
	* @param {} body - Language
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "dateModified": "",
   "state": "",
   "version": ""
}
	*/
	function postLanguages(body){
		var apipath = '/api/v2/languages';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postLanguages = postLanguages;
	/**
     * @summary Get language
	 * @memberOf LanguagesApi#
	* @param {string} languageId - Language ID
	*/
	function getLanguageId(languageId){
		var apipath = '/api/v2/languages/{languageId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{languageId}', languageId);

        if(languageId === undefined && languageId !== null){
			throw 'Missing required  parameter: languageId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getLanguageId = getLanguageId;
	/**
     * @summary Update Language
	 * @memberOf LanguagesApi#
	* @param {string} languageId - Language ID
	* @param {} body - Language
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "dateModified": "",
   "state": "",
   "version": ""
}
	*/
	function putLanguageId(languageId, body){
		var apipath = '/api/v2/languages/{languageId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{languageId}', languageId);

        if(languageId === undefined && languageId !== null){
			throw 'Missing required  parameter: languageId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putLanguageId = putLanguageId;
	/**
     * @summary Delete Language
	 * @memberOf LanguagesApi#
	* @param {string} languageId - Language ID
	*/
	function deleteLanguageId(languageId){
		var apipath = '/api/v2/languages/{languageId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{languageId}', languageId);

        if(languageId === undefined && languageId !== null){
			throw 'Missing required  parameter: languageId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteLanguageId = deleteLanguageId;

    return self;
};

//API VERSION - 
/**
* @class
* @example
* var api = new LocationsApi(pureCloudSession);
*/
var LocationsApi = function (pureCloudSession) {
	if(!pureCloudSession){
		throw "PureCloudSession is not valid.";
    }

	var self = this;
	/**
     * @summary Get the list of locations.
	 * @memberOf LocationsApi#
	* @param {string} state - Location state
	ACTIVE,
	DELETED,
	* @param {string} name - Location name
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	*/
	function getLocations(state, name, pageSize, pageNumber){
		var apipath = '/api/v2/locations';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(state !== undefined && state !== null){
			queryParameters.state = state;
		}


		if(name !== undefined && name !== null){
			queryParameters.name = name;
		}


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getLocations = getLocations;
	/**
     * @summary Get Location by ID.
	 * @memberOf LocationsApi#
	* @param {string} locationId - Location ID
	*/
	function getLocationId(locationId){
		var apipath = '/api/v2/locations/{locationId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{locationId}', locationId);

        if(locationId === undefined && locationId !== null){
			throw 'Missing required  parameter: locationId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getLocationId = getLocationId;

    return self;
};

//API VERSION - 
/**
* @class
* @example
* var api = new NotificationsApi(pureCloudSession);
*/
var NotificationsApi = function (pureCloudSession) {
	if(!pureCloudSession){
		throw "PureCloudSession is not valid.";
    }

	var self = this;
	/**
     * @summary Get available notification topics.
	 * @memberOf NotificationsApi#
	*/
	function getAvailabletopics(){
		var apipath = '/api/v2/notifications/availabletopics';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getAvailabletopics = getAvailabletopics;
	/**
     * @summary The list of existing channels
	 * @memberOf NotificationsApi#
	*/
	function getChannels(){
		var apipath = '/api/v2/notifications/channels';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getChannels = getChannels;
	/**
     * @summary Create a new channel
	 * @description There is a limit of 10 channels. Creating an 11th channel will remove the channel with oldest last used date.
	 * @memberOf NotificationsApi#
	*/
	function postChannels(){
		var apipath = '/api/v2/notifications/channels';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postChannels = postChannels;
	/**
     * @summary The list of all subscriptions for this channel
	 * @memberOf NotificationsApi#
	* @param {string} channelId - Channel ID
	*/
	function getChannelsChannelIdSubscriptions(channelId){
		var apipath = '/api/v2/notifications/channels/{channelId}/subscriptions';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{channelId}', channelId);

        if(channelId === undefined && channelId !== null){
			throw 'Missing required  parameter: channelId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getChannelsChannelIdSubscriptions = getChannelsChannelIdSubscriptions;
	/**
     * @summary Add a list of subscriptions to the existing list of subscriptions
	 * @memberOf NotificationsApi#
	* @param {string} channelId - Channel ID
	* @param {} body - Topic
	*/
	function postChannelsChannelIdSubscriptions(channelId, body){
		var apipath = '/api/v2/notifications/channels/{channelId}/subscriptions';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{channelId}', channelId);

        if(channelId === undefined && channelId !== null){
			throw 'Missing required  parameter: channelId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postChannelsChannelIdSubscriptions = postChannelsChannelIdSubscriptions;
	/**
     * @summary Replace the current list of subscriptions with a new list.
	 * @memberOf NotificationsApi#
	* @param {string} channelId - Channel ID
	* @param {} body - Topic
	*/
	function putChannelsChannelIdSubscriptions(channelId, body){
		var apipath = '/api/v2/notifications/channels/{channelId}/subscriptions';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{channelId}', channelId);

        if(channelId === undefined && channelId !== null){
			throw 'Missing required  parameter: channelId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putChannelsChannelIdSubscriptions = putChannelsChannelIdSubscriptions;
	/**
     * @summary Remove all subscriptions
	 * @memberOf NotificationsApi#
	* @param {string} channelId - Channel ID
	*/
	function deleteChannelsChannelIdSubscriptions(channelId){
		var apipath = '/api/v2/notifications/channels/{channelId}/subscriptions';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{channelId}', channelId);

        if(channelId === undefined && channelId !== null){
			throw 'Missing required  parameter: channelId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteChannelsChannelIdSubscriptions = deleteChannelsChannelIdSubscriptions;

    return self;
};

//API VERSION - 
/**
* @class
* @example
* var api = new OAuthApi(pureCloudSession);
*/
var OAuthApi = function (pureCloudSession) {
	if(!pureCloudSession){
		throw "PureCloudSession is not valid.";
    }

	var self = this;
	/**
     * @summary The list of identity providers
	 * @memberOf OAuthApi#
	*/
	function getIdentityproviders(){
		var apipath = '/api/v2/identityproviders';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getIdentityproviders = getIdentityproviders;
	/**
     * @summary Get Okta Identity Provider
	 * @memberOf OAuthApi#
	*/
	function getOkta(){
		var apipath = '/api/v2/identityproviders/okta';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getOkta = getOkta;
	/**
     * @summary Update/Create Okta Identity Provider
	 * @memberOf OAuthApi#
	* @param {} body - Provider
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "certificate": "",
   "issuerURI": "",
   "ssoTargetURI": ""
}
	*/
	function putOkta(body){
		var apipath = '/api/v2/identityproviders/okta';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putOkta = putOkta;
	/**
     * @summary Delete Okta Identity Provider
	 * @memberOf OAuthApi#
	*/
	function deleteOkta(){
		var apipath = '/api/v2/identityproviders/okta';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteOkta = deleteOkta;
	/**
     * @summary Get OneLogin Identity Provider
	 * @memberOf OAuthApi#
	*/
	function getOnelogin(){
		var apipath = '/api/v2/identityproviders/onelogin';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getOnelogin = getOnelogin;
	/**
     * @summary Update/Create OneLogin Identity Provider
	 * @memberOf OAuthApi#
	* @param {} body - Provider
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "certificate": "",
   "issuerURI": "",
   "ssoTargetURI": ""
}
	*/
	function putOnelogin(body){
		var apipath = '/api/v2/identityproviders/onelogin';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putOnelogin = putOnelogin;
	/**
     * @summary Delete OneLogin Identity Provider
	 * @memberOf OAuthApi#
	*/
	function deleteOnelogin(){
		var apipath = '/api/v2/identityproviders/onelogin';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteOnelogin = deleteOnelogin;
	/**
     * @summary Get PureCloud Identity Provider
	 * @memberOf OAuthApi#
	*/
	function getPurecloud(){
		var apipath = '/api/v2/identityproviders/purecloud';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getPurecloud = getPurecloud;
	/**
     * @summary Update/Create PureCloud Identity Provider
	 * @memberOf OAuthApi#
	* @param {} body - Provider
	 * @example
	 * Body Example:
	 * {
   "name": ""
}
	*/
	function putPurecloud(body){
		var apipath = '/api/v2/identityproviders/purecloud';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putPurecloud = putPurecloud;
	/**
     * @summary Delete PureCloud Identity Provider
	 * @memberOf OAuthApi#
	*/
	function deletePurecloud(){
		var apipath = '/api/v2/identityproviders/purecloud';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deletePurecloud = deletePurecloud;
	/**
     * @summary Get Salesforce Identity Provider
	 * @memberOf OAuthApi#
	*/
	function getSalesforce(){
		var apipath = '/api/v2/identityproviders/salesforce';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getSalesforce = getSalesforce;
	/**
     * @summary Update/Create Salesforce Identity Provider
	 * @memberOf OAuthApi#
	* @param {} body - Provider
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "certificate": "",
   "issuerURI": "",
   "ssoTargetURI": ""
}
	*/
	function putSalesforce(body){
		var apipath = '/api/v2/identityproviders/salesforce';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putSalesforce = putSalesforce;
	/**
     * @summary Delete Salesforce Identity Provider
	 * @memberOf OAuthApi#
	*/
	function deleteSalesforce(){
		var apipath = '/api/v2/identityproviders/salesforce';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteSalesforce = deleteSalesforce;
	/**
     * @summary Get an identity provider
	 * @memberOf OAuthApi#
	*/
	function getProviderId(){
		var apipath = '/api/v2/identityproviders/{providerId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getProviderId = getProviderId;
	/**
     * @summary Update an identity provider
	 * @memberOf OAuthApi#
	* @param {} body - Provider
	 * @example
	 * Body Example:
	 * {
   "name": ""
}
	*/
	function putProviderId(body){
		var apipath = '/api/v2/identityproviders/{providerId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putProviderId = putProviderId;
	/**
     * @summary Delete an identity provider
	 * @memberOf OAuthApi#
	*/
	function deleteProviderId(){
		var apipath = '/api/v2/identityproviders/{providerId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteProviderId = deleteProviderId;
	/**
     * @summary The list of OAuth clients
	 * @memberOf OAuthApi#
	*/
	function getClients(){
		var apipath = '/api/v2/oauth/clients';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getClients = getClients;
	/**
     * @summary Create OAuth client
	 * @description The OAuth Grant/Client is required in order to create an authentication token and gain access to PureCloud. 
The preferred authorizedGrantTypes is 'CODE' which requires applications to send a client ID and client secret. This is typically a web server. 
If the client is unable to secure the client secret then the 'TOKEN' grant type aka IMPLICIT should be used. This is would be for browser or mobile apps. 
If a client is to be used outside of the context of a user then the 'CLIENT-CREDENTIALS' grant may be used. In this case the client must be granted roles 
via the 'roleIds' field.
	 * @memberOf OAuthApi#
	* @param {} body - Client
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "accessTokenValiditySeconds": 0,
   "description": "",
   "registeredRedirectUri": [],
   "secret": "",
   "roleIds": [],
   "authorizedGrantType": ""
}
	*/
	function postClients(body){
		var apipath = '/api/v2/oauth/clients';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postClients = postClients;
	/**
     * @summary Get OAuth Client
	 * @memberOf OAuthApi#
	* @param {string} clientId - Client ID
	*/
	function getClientsClientId(clientId){
		var apipath = '/api/v2/oauth/clients/{clientId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{clientId}', clientId);

        if(clientId === undefined && clientId !== null){
			throw 'Missing required  parameter: clientId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getClientsClientId = getClientsClientId;
	/**
     * @summary Update OAuth Client
	 * @memberOf OAuthApi#
	* @param {string} clientId - Client ID
	* @param {} body - Client
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "accessTokenValiditySeconds": 0,
   "description": "",
   "registeredRedirectUri": [],
   "secret": "",
   "roleIds": [],
   "authorizedGrantType": ""
}
	*/
	function putClientsClientId(clientId, body){
		var apipath = '/api/v2/oauth/clients/{clientId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{clientId}', clientId);

        if(clientId === undefined && clientId !== null){
			throw 'Missing required  parameter: clientId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putClientsClientId = putClientsClientId;
	/**
     * @summary Delete OAuth Client
	 * @memberOf OAuthApi#
	* @param {string} clientId - Client ID
	*/
	function deleteClientsClientId(clientId){
		var apipath = '/api/v2/oauth/clients/{clientId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{clientId}', clientId);

        if(clientId === undefined && clientId !== null){
			throw 'Missing required  parameter: clientId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteClientsClientId = deleteClientsClientId;
	/**
     * @summary Regenerate Client Secret
	 * @description This operation will set the client secret to a randomly generated cryptographically random value. All clients must be updated with the new secret. This operation should be used with caution.
	 * @memberOf OAuthApi#
	* @param {string} clientId - Client ID
	*/
	function postClientsClientIdSecret(clientId){
		var apipath = '/api/v2/oauth/clients/{clientId}/secret';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{clientId}', clientId);

        if(clientId === undefined && clientId !== null){
			throw 'Missing required  parameter: clientId';
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postClientsClientIdSecret = postClientsClientIdSecret;

    return self;
};

//API VERSION - 
/**
* @class
* @example
* var api = new OrganizationApi(pureCloudSession);
*/
var OrganizationApi = function (pureCloudSession) {
	if(!pureCloudSession){
		throw "PureCloudSession is not valid.";
    }

	var self = this;
	/**
     * @summary Get organization.
	 * @memberOf OrganizationApi#
	*/
	function getMe(){
		var apipath = '/api/v2/organizations/me';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getMe = getMe;
	/**
     * @summary Update organization.
	 * @memberOf OrganizationApi#
	* @param {} body - Organization
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "thirdPartyOrgId": "",
   "thirdPartyOrgName": "",
   "thirdPartyURI": "",
   "domain": "",
   "version": 0,
   "state": "",
   "defaultSiteId": "",
   "deletable": true
}
	*/
	function putMe(body){
		var apipath = '/api/v2/organizations/me';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putMe = putMe;
	/**
     * @summary Delete the organization.
	 * @memberOf OrganizationApi#
	*/
	function deleteMe(){
		var apipath = '/api/v2/organizations/me';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteMe = deleteMe;

    return self;
};

//API VERSION - 
/**
* @class
* @example
* var api = new OutboundApi(pureCloudSession);
*/
var OutboundApi = function (pureCloudSession) {
	if(!pureCloudSession){
		throw "PureCloudSession is not valid.";
    }

	var self = this;
	/**
     * @summary Retrieves audits for dialer.
	 * @memberOf OutboundApi#
	* @param {} body - AuditSearch
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} sortBy - Sort by
	* @param {string} sortOrder - Sort order
	* @param {boolean} facetsOnly - Facets only
	 * @example
	 * Body Example:
	 * {
   "queryPhrase": "",
   "queryFields": [],
   "facets": [],
   "filters": []
}
	*/
	function postAudits(body, pageSize, pageNumber, sortBy, sortOrder, facetsOnly){
		var apipath = '/api/v2/outbound/audits';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		if(sortOrder !== undefined && sortOrder !== null){
			queryParameters.sortOrder = sortOrder;
		}


		if(facetsOnly !== undefined && facetsOnly !== null){
			queryParameters.facetsOnly = facetsOnly;
		}


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postAudits = postAudits;
	/**
     * @summary Query callable time set list
	 * @memberOf OutboundApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} filterType - Filter type
	EQUALS,
	REGEX,
	CONTAINS,
	PREFIX,
	LESSTHAN,
	LESSTHANEQUALTO,
	GREATERTHAN,
	GREATERTHANEQUALTO,
	BEGINSWITH,
	ENDSWITH,
	* @param {string} name - Name
	* @param {string} sortBy - Sort by
	* @param {string} sortOrder - Sort order
	ascending,
	descending,
	*/
	function getCallabletimesets(pageSize, pageNumber, filterType, name, sortBy, sortOrder){
		var apipath = '/api/v2/outbound/callabletimesets';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(filterType !== undefined && filterType !== null){
			queryParameters.filterType = filterType;
		}


		if(name !== undefined && name !== null){
			queryParameters.name = name;
		}


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		if(sortOrder !== undefined && sortOrder !== null){
			queryParameters.sortOrder = sortOrder;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getCallabletimesets = getCallabletimesets;
	/**
     * @summary Create callable time set
	 * @memberOf OutboundApi#
	* @param {} body - DialerCallableTimeSet
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "version": 0,
   "callableTimes": []
}
	*/
	function postCallabletimesets(body){
		var apipath = '/api/v2/outbound/callabletimesets';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postCallabletimesets = postCallabletimesets;
	/**
     * @summary Get callable time set
	 * @memberOf OutboundApi#
	* @param {string} callableTimeSetId - Callable Time Set ID
	*/
	function getCallabletimesetsCallabletimesetId(callableTimeSetId){
		var apipath = '/api/v2/outbound/callabletimesets/{callableTimeSetId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{callableTimeSetId}', callableTimeSetId);

        if(callableTimeSetId === undefined && callableTimeSetId !== null){
			throw 'Missing required  parameter: callableTimeSetId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getCallabletimesetsCallabletimesetId = getCallabletimesetsCallabletimesetId;
	/**
     * @summary Update callable time set
	 * @memberOf OutboundApi#
	* @param {string} callableTimeSetId - Callable Time Set ID
	* @param {} body - DialerCallableTimeSet
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "version": 0,
   "callableTimes": []
}
	*/
	function putCallabletimesetsCallabletimesetId(callableTimeSetId, body){
		var apipath = '/api/v2/outbound/callabletimesets/{callableTimeSetId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{callableTimeSetId}', callableTimeSetId);

        if(callableTimeSetId === undefined && callableTimeSetId !== null){
			throw 'Missing required  parameter: callableTimeSetId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putCallabletimesetsCallabletimesetId = putCallabletimesetsCallabletimesetId;
	/**
     * @summary Delete callable time set
	 * @memberOf OutboundApi#
	* @param {string} callableTimeSetId - Callable Time Set ID
	*/
	function deleteCallabletimesetsCallabletimesetId(callableTimeSetId){
		var apipath = '/api/v2/outbound/callabletimesets/{callableTimeSetId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{callableTimeSetId}', callableTimeSetId);

        if(callableTimeSetId === undefined && callableTimeSetId !== null){
			throw 'Missing required  parameter: callableTimeSetId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteCallabletimesetsCallabletimesetId = deleteCallabletimesetsCallabletimesetId;
	/**
     * @summary Query a list of dialer call analysis response sets.
	 * @memberOf OutboundApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} filterType - Filter type
	EQUALS,
	REGEX,
	CONTAINS,
	PREFIX,
	LESSTHAN,
	LESSTHANEQUALTO,
	GREATERTHAN,
	GREATERTHANEQUALTO,
	BEGINSWITH,
	ENDSWITH,
	* @param {string} name - Name
	* @param {string} sortBy - Sort by
	* @param {string} sortOrder - Sort order
	ascending,
	descending,
	*/
	function getCallanalysisresponsesets(pageSize, pageNumber, filterType, name, sortBy, sortOrder){
		var apipath = '/api/v2/outbound/callanalysisresponsesets';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(filterType !== undefined && filterType !== null){
			queryParameters.filterType = filterType;
		}


		if(name !== undefined && name !== null){
			queryParameters.name = name;
		}


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		if(sortOrder !== undefined && sortOrder !== null){
			queryParameters.sortOrder = sortOrder;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getCallanalysisresponsesets = getCallanalysisresponsesets;
	/**
     * @summary Create a dialer call analysis response set.
	 * @memberOf OutboundApi#
	* @param {} body - ResponseSet
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "version": 0,
   "responses": {}
}
	*/
	function postCallanalysisresponsesets(body){
		var apipath = '/api/v2/outbound/callanalysisresponsesets';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postCallanalysisresponsesets = postCallanalysisresponsesets;
	/**
     * @summary Get a dialer call analysis response set.
	 * @memberOf OutboundApi#
	* @param {string} callAnalysisSetId - Call Analysis Response Set ID
	*/
	function getCallanalysisresponsesetsCallanalysissetId(callAnalysisSetId){
		var apipath = '/api/v2/outbound/callanalysisresponsesets/{callAnalysisSetId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{callAnalysisSetId}', callAnalysisSetId);

        if(callAnalysisSetId === undefined && callAnalysisSetId !== null){
			throw 'Missing required  parameter: callAnalysisSetId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getCallanalysisresponsesetsCallanalysissetId = getCallanalysisresponsesetsCallanalysissetId;
	/**
     * @summary Update a dialer call analysis response set.
	 * @memberOf OutboundApi#
	* @param {string} callAnalysisSetId - Call Analysis Response Set ID
	* @param {} body - ResponseSet
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "version": 0,
   "responses": {}
}
	*/
	function putCallanalysisresponsesetsCallanalysissetId(callAnalysisSetId, body){
		var apipath = '/api/v2/outbound/callanalysisresponsesets/{callAnalysisSetId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{callAnalysisSetId}', callAnalysisSetId);

        if(callAnalysisSetId === undefined && callAnalysisSetId !== null){
			throw 'Missing required  parameter: callAnalysisSetId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putCallanalysisresponsesetsCallanalysissetId = putCallanalysisresponsesetsCallanalysissetId;
	/**
     * @summary Delete a dialer call analysis response set.
	 * @memberOf OutboundApi#
	* @param {string} callAnalysisSetId - Call Analysis Response Set ID
	*/
	function deleteCallanalysisresponsesetsCallanalysissetId(callAnalysisSetId){
		var apipath = '/api/v2/outbound/callanalysisresponsesets/{callAnalysisSetId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{callAnalysisSetId}', callAnalysisSetId);

        if(callAnalysisSetId === undefined && callAnalysisSetId !== null){
			throw 'Missing required  parameter: callAnalysisSetId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteCallanalysisresponsesetsCallanalysissetId = deleteCallanalysisresponsesetsCallanalysissetId;
	/**
     * @summary Query a list of dialer campaigns.
	 * @memberOf OutboundApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} filterType - Filter type
	EQUALS,
	REGEX,
	CONTAINS,
	PREFIX,
	LESSTHAN,
	LESSTHANEQUALTO,
	GREATERTHAN,
	GREATERTHANEQUALTO,
	BEGINSWITH,
	ENDSWITH,
	* @param {string} name - Name
	* @param {string} contactListId - Contact List ID
	* @param {string} dncListId - DNC list ID
	* @param {string} distributionQueueId - Distribution queue ID
	* @param {string} edgeGroupId - Edge group ID
	* @param {string} callAnalysisResponseSetId - Call analysis response set ID
	* @param {string} sortBy - Sort by
	* @param {string} sortOrder - Sort order
	ascending,
	descending,
	*/
	function getCampaigns(pageSize, pageNumber, filterType, name, contactListId, dncListId, distributionQueueId, edgeGroupId, callAnalysisResponseSetId, sortBy, sortOrder){
		var apipath = '/api/v2/outbound/campaigns';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(filterType !== undefined && filterType !== null){
			queryParameters.filterType = filterType;
		}


		if(name !== undefined && name !== null){
			queryParameters.name = name;
		}


		if(contactListId !== undefined && contactListId !== null){
			queryParameters.contactListId = contactListId;
		}


		if(dncListId !== undefined && dncListId !== null){
			queryParameters.dncListId = dncListId;
		}


		if(distributionQueueId !== undefined && distributionQueueId !== null){
			queryParameters.distributionQueueId = distributionQueueId;
		}


		if(edgeGroupId !== undefined && edgeGroupId !== null){
			queryParameters.edgeGroupId = edgeGroupId;
		}


		if(callAnalysisResponseSetId !== undefined && callAnalysisResponseSetId !== null){
			queryParameters.callAnalysisResponseSetId = callAnalysisResponseSetId;
		}


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		if(sortOrder !== undefined && sortOrder !== null){
			queryParameters.sortOrder = sortOrder;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getCampaigns = getCampaigns;
	/**
     * @summary Create a campaign.
	 * @memberOf OutboundApi#
	* @param {} body - Campaign
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "version": 0,
   "contactList": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "queue": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "dialingMode": "",
   "script": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "edgeGroup": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "campaignStatus": "",
   "phoneColumns": [],
   "abandonRate": {},
   "dncLists": [],
   "callableTimeSet": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "callAnalysisResponseSet": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "errors": [],
   "callerName": "",
   "callerAddress": "",
   "outboundLineCount": 0,
   "ruleSets": [],
   "skipPreviewDisabled": true,
   "previewTimeOutSeconds": 0,
   "singleNumberPreview": true
}
	*/
	function postCampaigns(body){
		var apipath = '/api/v2/outbound/campaigns';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postCampaigns = postCampaigns;
	/**
     * @summary Get progress for a list of campaigns
	 * @memberOf OutboundApi#
	* @param {} body - Campaign IDs
	*/
	function postCampaignsProgress(body){
		var apipath = '/api/v2/outbound/campaigns/progress';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postCampaignsProgress = postCampaignsProgress;
	/**
     * @summary Get dialer campaign.
	 * @memberOf OutboundApi#
	* @param {string} campaignId - Campaign ID
	*/
	function getCampaignsCampaignId(campaignId){
		var apipath = '/api/v2/outbound/campaigns/{campaignId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{campaignId}', campaignId);

        if(campaignId === undefined && campaignId !== null){
			throw 'Missing required  parameter: campaignId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getCampaignsCampaignId = getCampaignsCampaignId;
	/**
     * @summary Update a campaign.
	 * @memberOf OutboundApi#
	* @param {string} campaignId - Campaign ID
	* @param {} body - Campaign
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "version": 0,
   "contactList": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "queue": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "dialingMode": "",
   "script": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "edgeGroup": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "campaignStatus": "",
   "phoneColumns": [],
   "abandonRate": {},
   "dncLists": [],
   "callableTimeSet": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "callAnalysisResponseSet": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "errors": [],
   "callerName": "",
   "callerAddress": "",
   "outboundLineCount": 0,
   "ruleSets": [],
   "skipPreviewDisabled": true,
   "previewTimeOutSeconds": 0,
   "singleNumberPreview": true
}
	*/
	function putCampaignsCampaignId(campaignId, body){
		var apipath = '/api/v2/outbound/campaigns/{campaignId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{campaignId}', campaignId);

        if(campaignId === undefined && campaignId !== null){
			throw 'Missing required  parameter: campaignId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putCampaignsCampaignId = putCampaignsCampaignId;
	/**
     * @summary Delete a campaign.
	 * @memberOf OutboundApi#
	* @param {string} campaignId - Campaign ID
	*/
	function deleteCampaignsCampaignId(campaignId){
		var apipath = '/api/v2/outbound/campaigns/{campaignId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{campaignId}', campaignId);

        if(campaignId === undefined && campaignId !== null){
			throw 'Missing required  parameter: campaignId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteCampaignsCampaignId = deleteCampaignsCampaignId;
	/**
     * @summary Send notification that an agent's state changed 
	 * @description New agent state.
	 * @memberOf OutboundApi#
	* @param {string} campaignId - Campaign ID
	* @param {string} userId - Agent's user ID
	* @param {} body - agent
	 * @example
	 * Body Example:
	 * {
   "stage": ""
}
	*/
	function putCampaignsCampaignIdAgentsUserId(campaignId, userId, body){
		var apipath = '/api/v2/outbound/campaigns/{campaignId}/agents/{userId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{campaignId}', campaignId);

        if(campaignId === undefined && campaignId !== null){
			throw 'Missing required  parameter: campaignId';
        }

        apipath = apipath.replace('{userId}', userId);

        if(userId === undefined && userId !== null){
			throw 'Missing required  parameter: userId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putCampaignsCampaignIdAgentsUserId = putCampaignsCampaignIdAgentsUserId;
	/**
     * @summary Schedule a Callback for a Dialer Campaign
	 * @memberOf OutboundApi#
	* @param {string} campaignId - Campaign ID
	* @param {} body - ContactCallbackRequest
	 * @example
	 * Body Example:
	 * {
   "campaignId": "",
   "contactListId": "",
   "contactId": "",
   "phoneColumn": "",
   "schedule": ""
}
	*/
	function postCampaignsCampaignIdCallbackSchedule(campaignId, body){
		var apipath = '/api/v2/outbound/campaigns/{campaignId}/callback/schedule';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{campaignId}', campaignId);

        if(campaignId === undefined && campaignId !== null){
			throw 'Missing required  parameter: campaignId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postCampaignsCampaignIdCallbackSchedule = postCampaignsCampaignIdCallbackSchedule;
	/**
     * @summary Get campaign diagnostics
	 * @memberOf OutboundApi#
	* @param {string} campaignId - Campaign ID
	*/
	function getCampaignsCampaignIdDiagnostics(campaignId){
		var apipath = '/api/v2/outbound/campaigns/{campaignId}/diagnostics';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{campaignId}', campaignId);

        if(campaignId === undefined && campaignId !== null){
			throw 'Missing required  parameter: campaignId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getCampaignsCampaignIdDiagnostics = getCampaignsCampaignIdDiagnostics;
	/**
     * @summary Get campaign progress
	 * @memberOf OutboundApi#
	* @param {string} campaignId - Campaign ID
	*/
	function getCampaignsCampaignIdProgress(campaignId){
		var apipath = '/api/v2/outbound/campaigns/{campaignId}/progress';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{campaignId}', campaignId);

        if(campaignId === undefined && campaignId !== null){
			throw 'Missing required  parameter: campaignId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getCampaignsCampaignIdProgress = getCampaignsCampaignIdProgress;
	/**
     * @summary Reset campaign progress and recycle the campaign
	 * @memberOf OutboundApi#
	* @param {string} campaignId - Campaign ID
	*/
	function deleteCampaignsCampaignIdProgress(campaignId){
		var apipath = '/api/v2/outbound/campaigns/{campaignId}/progress';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{campaignId}', campaignId);

        if(campaignId === undefined && campaignId !== null){
			throw 'Missing required  parameter: campaignId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteCampaignsCampaignIdProgress = deleteCampaignsCampaignIdProgress;
	/**
     * @summary Get statistics about a Dialer Campaign
	 * @memberOf OutboundApi#
	* @param {string} campaignId - Campaign ID
	*/
	function getCampaignsCampaignIdStats(campaignId){
		var apipath = '/api/v2/outbound/campaigns/{campaignId}/stats';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{campaignId}', campaignId);

        if(campaignId === undefined && campaignId !== null){
			throw 'Missing required  parameter: campaignId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getCampaignsCampaignIdStats = getCampaignsCampaignIdStats;
	/**
     * @summary Query a list of contact lists.
	 * @memberOf OutboundApi#
	* @param {boolean} includeImportStatus - Include import status
	* @param {boolean} includeSize - Include size
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} filterType - Filter type
	EQUALS,
	REGEX,
	CONTAINS,
	PREFIX,
	LESSTHAN,
	LESSTHANEQUALTO,
	GREATERTHAN,
	GREATERTHANEQUALTO,
	BEGINSWITH,
	ENDSWITH,
	* @param {string} name - Name
	* @param {string} sortBy - Sort by
	* @param {string} sortOrder - Sort order
	ascending,
	descending,
	*/
	function getContactlists(includeImportStatus, includeSize, pageSize, pageNumber, filterType, name, sortBy, sortOrder){
		var apipath = '/api/v2/outbound/contactlists';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(includeImportStatus !== undefined && includeImportStatus !== null){
			queryParameters.includeImportStatus = includeImportStatus;
		}


		if(includeSize !== undefined && includeSize !== null){
			queryParameters.includeSize = includeSize;
		}


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(filterType !== undefined && filterType !== null){
			queryParameters.filterType = filterType;
		}


		if(name !== undefined && name !== null){
			queryParameters.name = name;
		}


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		if(sortOrder !== undefined && sortOrder !== null){
			queryParameters.sortOrder = sortOrder;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getContactlists = getContactlists;
	/**
     * @summary Create a contact List.
	 * @memberOf OutboundApi#
	* @param {} body - ContactList
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "version": 0,
   "columnNames": [],
   "phoneColumns": [],
   "importStatus": {
      "state": "",
      "totalRecords": 0,
      "completedRecords": 0,
      "percentComplete": 0,
      "failureReason": ""
   },
   "previewModeColumnName": "",
   "previewModeAcceptedValues": [],
   "size": 0
}
	*/
	function postContactlists(body){
		var apipath = '/api/v2/outbound/contactlists';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postContactlists = postContactlists;
	/**
     * @summary Get dialer contactList.
	 * @memberOf OutboundApi#
	* @param {string} contactListId - ContactList ID
	* @param {boolean} includeImportStatus - Import status
	* @param {boolean} includeSize - Include size
	*/
	function getContactlistsContactlistId(contactListId, includeImportStatus, includeSize){
		var apipath = '/api/v2/outbound/contactlists/{contactListId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{contactListId}', contactListId);

        if(contactListId === undefined && contactListId !== null){
			throw 'Missing required  parameter: contactListId';
        }


		if(includeImportStatus !== undefined && includeImportStatus !== null){
			queryParameters.includeImportStatus = includeImportStatus;
		}


		if(includeSize !== undefined && includeSize !== null){
			queryParameters.includeSize = includeSize;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getContactlistsContactlistId = getContactlistsContactlistId;
	/**
     * @summary Update a contact list.
	 * @memberOf OutboundApi#
	* @param {string} contactListId - ContactList ID
	* @param {} body - ContactList
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "version": 0,
   "columnNames": [],
   "phoneColumns": [],
   "importStatus": {
      "state": "",
      "totalRecords": 0,
      "completedRecords": 0,
      "percentComplete": 0,
      "failureReason": ""
   },
   "previewModeColumnName": "",
   "previewModeAcceptedValues": [],
   "size": 0
}
	*/
	function putContactlistsContactlistId(contactListId, body){
		var apipath = '/api/v2/outbound/contactlists/{contactListId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{contactListId}', contactListId);

        if(contactListId === undefined && contactListId !== null){
			throw 'Missing required  parameter: contactListId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putContactlistsContactlistId = putContactlistsContactlistId;
	/**
     * @summary Delete a contact list.
	 * @memberOf OutboundApi#
	* @param {string} contactListId - ContactList ID
	*/
	function deleteContactlistsContactlistId(contactListId){
		var apipath = '/api/v2/outbound/contactlists/{contactListId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{contactListId}', contactListId);

        if(contactListId === undefined && contactListId !== null){
			throw 'Missing required  parameter: contactListId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteContactlistsContactlistId = deleteContactlistsContactlistId;
	/**
     * @summary Add contacts to a contact list.
	 * @memberOf OutboundApi#
	* @param {string} contactListId - Contact List ID
	* @param {} body - Contact
	* @param {boolean} priority - 
	*/
	function postContactlistsContactlistIdContacts(contactListId, body, priority){
		var apipath = '/api/v2/outbound/contactlists/{contactListId}/contacts';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{contactListId}', contactListId);

        if(contactListId === undefined && contactListId !== null){
			throw 'Missing required  parameter: contactListId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		if(priority !== undefined && priority !== null){
			queryParameters.priority = priority;
		}


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postContactlistsContactlistIdContacts = postContactlistsContactlistIdContacts;
	/**
     * @summary Get dialer contactList.
	 * @memberOf OutboundApi#
	* @param {string} contactListId - Contact List ID
	* @param {string} contactId - Contact ID
	*/
	function getContactlistsContactlistIdContactsContactId(contactListId, contactId){
		var apipath = '/api/v2/outbound/contactlists/{contactListId}/contacts/{contactId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{contactListId}', contactListId);

        if(contactListId === undefined && contactListId !== null){
			throw 'Missing required  parameter: contactListId';
        }

        apipath = apipath.replace('{contactId}', contactId);

        if(contactId === undefined && contactId !== null){
			throw 'Missing required  parameter: contactId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getContactlistsContactlistIdContactsContactId = getContactlistsContactlistIdContactsContactId;
	/**
     * @summary Update a contact.
	 * @memberOf OutboundApi#
	* @param {string} contactListId - Contact List ID
	* @param {string} contactId - Contact ID
	* @param {} body - Contact
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "contactListId": "",
   "data": {},
   "callRecords": {},
   "callable": true,
   "phoneNumberStatus": {}
}
	*/
	function putContactlistsContactlistIdContactsContactId(contactListId, contactId, body){
		var apipath = '/api/v2/outbound/contactlists/{contactListId}/contacts/{contactId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{contactListId}', contactListId);

        if(contactListId === undefined && contactListId !== null){
			throw 'Missing required  parameter: contactListId';
        }

        apipath = apipath.replace('{contactId}', contactId);

        if(contactId === undefined && contactId !== null){
			throw 'Missing required  parameter: contactId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putContactlistsContactlistIdContactsContactId = putContactlistsContactlistIdContactsContactId;
	/**
     * @summary Delete a contact.
	 * @memberOf OutboundApi#
	* @param {string} contactListId - Contact List ID
	* @param {string} contactId - Contact ID
	*/
	function deleteContactlistsContactlistIdContactsContactId(contactListId, contactId){
		var apipath = '/api/v2/outbound/contactlists/{contactListId}/contacts/{contactId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{contactListId}', contactListId);

        if(contactListId === undefined && contactListId !== null){
			throw 'Missing required  parameter: contactListId';
        }

        apipath = apipath.replace('{contactId}', contactId);

        if(contactId === undefined && contactId !== null){
			throw 'Missing required  parameter: contactId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteContactlistsContactlistIdContactsContactId = deleteContactlistsContactlistIdContactsContactId;
	/**
     * @summary Initiate the export of a contact list.
	 * @description Returns 200 if received OK.
	 * @memberOf OutboundApi#
	* @param {string} contactListId - ContactList ID
	*/
	function postContactlistsContactlistIdExport(contactListId){
		var apipath = '/api/v2/outbound/contactlists/{contactListId}/export';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{contactListId}', contactListId);

        if(contactListId === undefined && contactListId !== null){
			throw 'Missing required  parameter: contactListId';
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postContactlistsContactlistIdExport = postContactlistsContactlistIdExport;
	/**
     * @summary Get dialer contactList import status.
	 * @memberOf OutboundApi#
	* @param {string} contactListId - ContactList ID
	*/
	function getContactlistsContactlistIdImportstatus(contactListId){
		var apipath = '/api/v2/outbound/contactlists/{contactListId}/importstatus';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{contactListId}', contactListId);

        if(contactListId === undefined && contactListId !== null){
			throw 'Missing required  parameter: contactListId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getContactlistsContactlistIdImportstatus = getContactlistsContactlistIdImportstatus;
	/**
     * @summary Add phone numbers to a Dialer DNC list.
	 * @memberOf OutboundApi#
	* @param {string} conversationId - Conversation ID
	*/
	function postConversationsConversationIdDnc(conversationId){
		var apipath = '/api/v2/outbound/conversations/{conversationId}/dnc';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{conversationId}', conversationId);

        if(conversationId === undefined && conversationId !== null){
			throw 'Missing required  parameter: conversationId';
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postConversationsConversationIdDnc = postConversationsConversationIdDnc;
	/**
     * @summary Query dialer DNC lists
	 * @memberOf OutboundApi#
	* @param {boolean} includeImportStatus - Import status
	* @param {boolean} includeSize - Include size
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} filterType - Filter type
	EQUALS,
	REGEX,
	CONTAINS,
	PREFIX,
	LESSTHAN,
	LESSTHANEQUALTO,
	GREATERTHAN,
	GREATERTHANEQUALTO,
	BEGINSWITH,
	ENDSWITH,
	* @param {string} name - Name
	* @param {string} sortBy - Sort by
	* @param {string} sortOrder - Sort order
	ascending,
	descending,
	*/
	function getDnclists(includeImportStatus, includeSize, pageSize, pageNumber, filterType, name, sortBy, sortOrder){
		var apipath = '/api/v2/outbound/dnclists';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(includeImportStatus !== undefined && includeImportStatus !== null){
			queryParameters.includeImportStatus = includeImportStatus;
		}


		if(includeSize !== undefined && includeSize !== null){
			queryParameters.includeSize = includeSize;
		}


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(filterType !== undefined && filterType !== null){
			queryParameters.filterType = filterType;
		}


		if(name !== undefined && name !== null){
			queryParameters.name = name;
		}


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		if(sortOrder !== undefined && sortOrder !== null){
			queryParameters.sortOrder = sortOrder;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getDnclists = getDnclists;
	/**
     * @summary Create dialer DNC list
	 * @memberOf OutboundApi#
	* @param {} body - DncList
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "version": 0,
   "phoneNumberColumns": [],
   "importStatus": {
      "state": "",
      "totalRecords": 0,
      "completedRecords": 0,
      "percentComplete": 0,
      "failureReason": ""
   },
   "fileKey": "",
   "size": 0
}
	*/
	function postDnclists(body){
		var apipath = '/api/v2/outbound/dnclists';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postDnclists = postDnclists;
	/**
     * @summary Get dialer DNC list
	 * @memberOf OutboundApi#
	* @param {string} dncListId - DncList ID
	* @param {boolean} includeImportStatus - Import status
	* @param {boolean} includeSize - Include size
	*/
	function getDnclistsDnclistId(dncListId, includeImportStatus, includeSize){
		var apipath = '/api/v2/outbound/dnclists/{dncListId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{dncListId}', dncListId);

        if(dncListId === undefined && dncListId !== null){
			throw 'Missing required  parameter: dncListId';
        }


		if(includeImportStatus !== undefined && includeImportStatus !== null){
			queryParameters.includeImportStatus = includeImportStatus;
		}


		if(includeSize !== undefined && includeSize !== null){
			queryParameters.includeSize = includeSize;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getDnclistsDnclistId = getDnclistsDnclistId;
	/**
     * @summary Update dialer DNC list
	 * @memberOf OutboundApi#
	* @param {string} dncListId - DncList ID
	* @param {} body - DncList
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "version": 0,
   "phoneNumberColumns": [],
   "importStatus": {
      "state": "",
      "totalRecords": 0,
      "completedRecords": 0,
      "percentComplete": 0,
      "failureReason": ""
   },
   "fileKey": "",
   "size": 0
}
	*/
	function putDnclistsDnclistId(dncListId, body){
		var apipath = '/api/v2/outbound/dnclists/{dncListId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{dncListId}', dncListId);

        if(dncListId === undefined && dncListId !== null){
			throw 'Missing required  parameter: dncListId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putDnclistsDnclistId = putDnclistsDnclistId;
	/**
     * @summary Delete dialer DNC list
	 * @memberOf OutboundApi#
	* @param {string} dncListId - DncList ID
	*/
	function deleteDnclistsDnclistId(dncListId){
		var apipath = '/api/v2/outbound/dnclists/{dncListId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{dncListId}', dncListId);

        if(dncListId === undefined && dncListId !== null){
			throw 'Missing required  parameter: dncListId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteDnclistsDnclistId = deleteDnclistsDnclistId;
	/**
     * @summary Initiate the export of a dnc list.
	 * @description Returns 200 if received OK.
	 * @memberOf OutboundApi#
	* @param {string} dncListId - DncList ID
	*/
	function postDnclistsDnclistIdExport(dncListId){
		var apipath = '/api/v2/outbound/dnclists/{dncListId}/export';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{dncListId}', dncListId);

        if(dncListId === undefined && dncListId !== null){
			throw 'Missing required  parameter: dncListId';
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postDnclistsDnclistIdExport = postDnclistsDnclistIdExport;
	/**
     * @summary Get dialer dncList import status.
	 * @memberOf OutboundApi#
	* @param {string} dncListId - DncList ID
	*/
	function getDnclistsDnclistIdImportstatus(dncListId){
		var apipath = '/api/v2/outbound/dnclists/{dncListId}/importstatus';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{dncListId}', dncListId);

        if(dncListId === undefined && dncListId !== null){
			throw 'Missing required  parameter: dncListId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getDnclistsDnclistIdImportstatus = getDnclistsDnclistIdImportstatus;
	/**
     * @summary Add phone numbers to a Dialer DNC list.
	 * @memberOf OutboundApi#
	* @param {string} dncListId - DncList ID
	* @param {} body - DNC Phone Numbers
	*/
	function postDnclistsDnclistIdPhonenumbers(dncListId, body){
		var apipath = '/api/v2/outbound/dnclists/{dncListId}/phonenumbers';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{dncListId}', dncListId);

        if(dncListId === undefined && dncListId !== null){
			throw 'Missing required  parameter: dncListId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postDnclistsDnclistIdPhonenumbers = postDnclistsDnclistIdPhonenumbers;
	/**
     * @summary Query a list of Rule Sets.
	 * @memberOf OutboundApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} filterType - Filter type
	EQUALS,
	REGEX,
	CONTAINS,
	PREFIX,
	LESSTHAN,
	LESSTHANEQUALTO,
	GREATERTHAN,
	GREATERTHANEQUALTO,
	BEGINSWITH,
	ENDSWITH,
	* @param {string} name - Name
	* @param {string} sortBy - Sort by
	* @param {string} sortOrder - Sort order
	ascending,
	descending,
	*/
	function getRulesets(pageSize, pageNumber, filterType, name, sortBy, sortOrder){
		var apipath = '/api/v2/outbound/rulesets';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(filterType !== undefined && filterType !== null){
			queryParameters.filterType = filterType;
		}


		if(name !== undefined && name !== null){
			queryParameters.name = name;
		}


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		if(sortOrder !== undefined && sortOrder !== null){
			queryParameters.sortOrder = sortOrder;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getRulesets = getRulesets;
	/**
     * @summary Create a Dialer Call Analysis Response Set.
	 * @memberOf OutboundApi#
	* @param {} body - RuleSet
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "version": 0,
   "contactList": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "queue": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "rules": []
}
	*/
	function postRulesets(body){
		var apipath = '/api/v2/outbound/rulesets';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postRulesets = postRulesets;
	/**
     * @summary Get a Rule Set by ID.
	 * @memberOf OutboundApi#
	* @param {string} ruleSetId - Rule Set ID
	*/
	function getRulesetsRulesetId(ruleSetId){
		var apipath = '/api/v2/outbound/rulesets/{ruleSetId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{ruleSetId}', ruleSetId);

        if(ruleSetId === undefined && ruleSetId !== null){
			throw 'Missing required  parameter: ruleSetId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getRulesetsRulesetId = getRulesetsRulesetId;
	/**
     * @summary Update a RuleSet.
	 * @memberOf OutboundApi#
	* @param {string} ruleSetId - Rule Set ID
	* @param {} body - RuleSet
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "version": 0,
   "contactList": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "queue": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "rules": []
}
	*/
	function putRulesetsRulesetId(ruleSetId, body){
		var apipath = '/api/v2/outbound/rulesets/{ruleSetId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{ruleSetId}', ruleSetId);

        if(ruleSetId === undefined && ruleSetId !== null){
			throw 'Missing required  parameter: ruleSetId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putRulesetsRulesetId = putRulesetsRulesetId;
	/**
     * @summary Delete a Rule set.
	 * @memberOf OutboundApi#
	* @param {string} ruleSetId - Rule Set ID
	*/
	function deleteRulesetsRulesetId(ruleSetId){
		var apipath = '/api/v2/outbound/rulesets/{ruleSetId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{ruleSetId}', ruleSetId);

        if(ruleSetId === undefined && ruleSetId !== null){
			throw 'Missing required  parameter: ruleSetId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteRulesetsRulesetId = deleteRulesetsRulesetId;
	/**
     * @summary Query for a list of dialer campaign schedules.
	 * @memberOf OutboundApi#
	*/
	function getSchedulesCampaigns(){
		var apipath = '/api/v2/outbound/schedules/campaigns';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getSchedulesCampaigns = getSchedulesCampaigns;
	/**
     * @summary Get a dialer campaign schedule.
	 * @memberOf OutboundApi#
	* @param {string} campaignId - Campaign ID
	*/
	function getSchedulesCampaignsCampaignId(campaignId){
		var apipath = '/api/v2/outbound/schedules/campaigns/{campaignId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{campaignId}', campaignId);

        if(campaignId === undefined && campaignId !== null){
			throw 'Missing required  parameter: campaignId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getSchedulesCampaignsCampaignId = getSchedulesCampaignsCampaignId;
	/**
     * @summary Update a new campaign schedule.
	 * @memberOf OutboundApi#
	* @param {string} campaignId - Campaign ID
	* @param {} body - CampaignSchedule
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "version": 0,
   "intervals": [],
   "timeZone": "",
   "campaign": {
      "id": "",
      "name": "",
      "selfUri": ""
   }
}
	*/
	function putSchedulesCampaignsCampaignId(campaignId, body){
		var apipath = '/api/v2/outbound/schedules/campaigns/{campaignId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{campaignId}', campaignId);

        if(campaignId === undefined && campaignId !== null){
			throw 'Missing required  parameter: campaignId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putSchedulesCampaignsCampaignId = putSchedulesCampaignsCampaignId;
	/**
     * @summary Delete a dialer campaign schedule.
	 * @memberOf OutboundApi#
	* @param {string} campaignId - Campaign ID
	*/
	function deleteSchedulesCampaignsCampaignId(campaignId){
		var apipath = '/api/v2/outbound/schedules/campaigns/{campaignId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{campaignId}', campaignId);

        if(campaignId === undefined && campaignId !== null){
			throw 'Missing required  parameter: campaignId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteSchedulesCampaignsCampaignId = deleteSchedulesCampaignsCampaignId;
	/**
     * @summary Query for a list of dialer sequence schedules.
	 * @memberOf OutboundApi#
	*/
	function getSchedulesSequences(){
		var apipath = '/api/v2/outbound/schedules/sequences';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getSchedulesSequences = getSchedulesSequences;
	/**
     * @summary Get a dialer sequence schedule.
	 * @memberOf OutboundApi#
	* @param {string} sequenceId - Sequence ID
	*/
	function getSchedulesSequencesSequenceId(sequenceId){
		var apipath = '/api/v2/outbound/schedules/sequences/{sequenceId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{sequenceId}', sequenceId);

        if(sequenceId === undefined && sequenceId !== null){
			throw 'Missing required  parameter: sequenceId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getSchedulesSequencesSequenceId = getSchedulesSequencesSequenceId;
	/**
     * @summary Update a new sequence schedule.
	 * @memberOf OutboundApi#
	* @param {string} sequenceId - Sequence ID
	* @param {} body - SequenceSchedule
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "version": 0,
   "intervals": [],
   "timeZone": "",
   "sequence": {
      "id": "",
      "name": "",
      "selfUri": ""
   }
}
	*/
	function putSchedulesSequencesSequenceId(sequenceId, body){
		var apipath = '/api/v2/outbound/schedules/sequences/{sequenceId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{sequenceId}', sequenceId);

        if(sequenceId === undefined && sequenceId !== null){
			throw 'Missing required  parameter: sequenceId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putSchedulesSequencesSequenceId = putSchedulesSequencesSequenceId;
	/**
     * @summary Delete a dialer sequence schedule.
	 * @memberOf OutboundApi#
	* @param {string} sequenceId - Sequence ID
	*/
	function deleteSchedulesSequencesSequenceId(sequenceId){
		var apipath = '/api/v2/outbound/schedules/sequences/{sequenceId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{sequenceId}', sequenceId);

        if(sequenceId === undefined && sequenceId !== null){
			throw 'Missing required  parameter: sequenceId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteSchedulesSequencesSequenceId = deleteSchedulesSequencesSequenceId;
	/**
     * @summary Query a list of dialer campaign sequences.
	 * @memberOf OutboundApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} filterType - Filter type
	EQUALS,
	REGEX,
	CONTAINS,
	PREFIX,
	LESSTHAN,
	LESSTHANEQUALTO,
	GREATERTHAN,
	GREATERTHANEQUALTO,
	BEGINSWITH,
	ENDSWITH,
	* @param {string} name - Name
	* @param {string} sortBy - Sort by
	* @param {string} sortOrder - Sort order
	ascending,
	descending,
	*/
	function getSequences(pageSize, pageNumber, filterType, name, sortBy, sortOrder){
		var apipath = '/api/v2/outbound/sequences';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(filterType !== undefined && filterType !== null){
			queryParameters.filterType = filterType;
		}


		if(name !== undefined && name !== null){
			queryParameters.name = name;
		}


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		if(sortOrder !== undefined && sortOrder !== null){
			queryParameters.sortOrder = sortOrder;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getSequences = getSequences;
	/**
     * @summary Create a new campaign sequence.
	 * @memberOf OutboundApi#
	* @param {} body - Organization
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "version": 0,
   "campaigns": [],
   "currentCampaign": 0,
   "status": "",
   "stopMessage": "",
   "repeat": true
}
	*/
	function postSequences(body){
		var apipath = '/api/v2/outbound/sequences';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postSequences = postSequences;
	/**
     * @summary Get a dialer campaign sequence.
	 * @memberOf OutboundApi#
	* @param {string} sequenceId - Campaign Sequence ID
	*/
	function getSequencesSequenceId(sequenceId){
		var apipath = '/api/v2/outbound/sequences/{sequenceId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{sequenceId}', sequenceId);

        if(sequenceId === undefined && sequenceId !== null){
			throw 'Missing required  parameter: sequenceId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getSequencesSequenceId = getSequencesSequenceId;
	/**
     * @summary Update a new campaign sequence.
	 * @memberOf OutboundApi#
	* @param {string} sequenceId - Campaign Sequence ID
	* @param {} body - Organization
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "version": 0,
   "campaigns": [],
   "currentCampaign": 0,
   "status": "",
   "stopMessage": "",
   "repeat": true
}
	*/
	function putSequencesSequenceId(sequenceId, body){
		var apipath = '/api/v2/outbound/sequences/{sequenceId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{sequenceId}', sequenceId);

        if(sequenceId === undefined && sequenceId !== null){
			throw 'Missing required  parameter: sequenceId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putSequencesSequenceId = putSequencesSequenceId;
	/**
     * @summary Delete a dialer campaign sequence.
	 * @memberOf OutboundApi#
	* @param {string} sequenceId - Campaign Sequence ID
	*/
	function deleteSequencesSequenceId(sequenceId){
		var apipath = '/api/v2/outbound/sequences/{sequenceId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{sequenceId}', sequenceId);

        if(sequenceId === undefined && sequenceId !== null){
			throw 'Missing required  parameter: sequenceId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteSequencesSequenceId = deleteSequencesSequenceId;
	/**
     * @summary Get the Dialer wrap up code mapping.
	 * @memberOf OutboundApi#
	*/
	function getWrapupcodemappings(){
		var apipath = '/api/v2/outbound/wrapupcodemappings';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getWrapupcodemappings = getWrapupcodemappings;
	/**
     * @summary Update the Dialer wrap up code mapping.
	 * @memberOf OutboundApi#
	* @param {} body - wrapUpCodeMapping
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "version": 0,
   "defaultSet": [],
   "mapping": {}
}
	*/
	function putWrapupcodemappings(body){
		var apipath = '/api/v2/outbound/wrapupcodemappings';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putWrapupcodemappings = putWrapupcodemappings;

    return self;
};

//API VERSION - 
/**
* @class
* @example
* var api = new PresenceApi(pureCloudSession);
*/
var PresenceApi = function (pureCloudSession) {
	if(!pureCloudSession){
		throw "PureCloudSession is not valid.";
    }

	var self = this;
	/**
     * @summary Get an Organization's list of Presences
	 * @memberOf PresenceApi#
	* @param {integer} pageNumber - Page number
	* @param {integer} pageSize - Page size
	*/
	function getPresencedefinitions(pageNumber, pageSize){
		var apipath = '/api/v2/presencedefinitions';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getPresencedefinitions = getPresencedefinitions;
	/**
     * @summary Create an OrganizationPresence
	 * @memberOf PresenceApi#
	* @param {} body - The OrganizationPresence to create
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "languageLabels": {},
   "systemPresence": "",
   "deactivated": true,
   "createdBy": {
      "name": "",
      "chat": {},
      "department": "",
      "email": "",
      "addresses": [],
      "title": "",
      "username": "",
      "images": []
   },
   "createdDate": "",
   "modifiedBy": {
      "name": "",
      "chat": {},
      "department": "",
      "email": "",
      "addresses": [],
      "title": "",
      "username": "",
      "images": []
   },
   "modifiedDate": ""
}
	*/
	function postPresencedefinitions(body){
		var apipath = '/api/v2/presencedefinitions';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }

        if(body === undefined && body !== null){
			throw 'Missing required  parameter: body';
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postPresencedefinitions = postPresencedefinitions;
	/**
     * @summary Get an OrganizationPresence
	 * @memberOf PresenceApi#
	* @param {string} presenceId - Organization Presence ID
	*/
	function getPresenceId(presenceId){
		var apipath = '/api/v2/presencedefinitions/{presenceId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{presenceId}', presenceId);

        if(presenceId === undefined && presenceId !== null){
			throw 'Missing required  parameter: presenceId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getPresenceId = getPresenceId;
	/**
     * @summary Update an OrganizationPresence
	 * @memberOf PresenceApi#
	* @param {string} presenceId - Organization Presence ID
	* @param {} body - The OrganizationPresence to update
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "languageLabels": {},
   "systemPresence": "",
   "deactivated": true,
   "createdBy": {
      "name": "",
      "chat": {},
      "department": "",
      "email": "",
      "addresses": [],
      "title": "",
      "username": "",
      "images": []
   },
   "createdDate": "",
   "modifiedBy": {
      "name": "",
      "chat": {},
      "department": "",
      "email": "",
      "addresses": [],
      "title": "",
      "username": "",
      "images": []
   },
   "modifiedDate": ""
}
	*/
	function putPresenceId(presenceId, body){
		var apipath = '/api/v2/presencedefinitions/{presenceId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{presenceId}', presenceId);

        if(presenceId === undefined && presenceId !== null){
			throw 'Missing required  parameter: presenceId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }

        if(body === undefined && body !== null){
			throw 'Missing required  parameter: body';
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putPresenceId = putPresenceId;
	/**
     * @summary Delete an OrganizationPresence
	 * @memberOf PresenceApi#
	* @param {string} presenceId - Organization Presence ID
	*/
	function deletePresenceId(presenceId){
		var apipath = '/api/v2/presencedefinitions/{presenceId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{presenceId}', presenceId);

        if(presenceId === undefined && presenceId !== null){
			throw 'Missing required  parameter: presenceId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deletePresenceId = deletePresenceId;
	/**
     * @summary Get a user's Presence
	 * @memberOf PresenceApi#
	* @param {string} userId - user Id
	* @param {string} source - source
	*/
	function getUserIdPresencesSource(userId, source){
		var apipath = '/api/v2/users/{userId}/presences/{source}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{userId}', userId);

        if(userId === undefined && userId !== null){
			throw 'Missing required  parameter: userId';
        }

        apipath = apipath.replace('{source}', source);

        if(source === undefined && source !== null){
			throw 'Missing required  parameter: source';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getUserIdPresencesSource = getUserIdPresencesSource;
	/**
     * @summary Patch a user's Presence
	 * @description The presence object can be patched one of three ways. Option 1: Set the 'primary' property to true. This will set the 'source' defined in the path as the user's primary presence source. Option 2: Provide the presenceDefinition value. Option 3: Provide the message value.  Option 1 can be combined with Option2 and/or Option 3.
	 * @memberOf PresenceApi#
	* @param {string} userId - user Id
	* @param {string} source - source
	* @param {} body - The presence object can be patched one of three ways. Option 1: Set the 'primary' property to true. This will set the 'source' defined in the path as the user's primary presence source. Option 2: Provide the presenceDefinition value. Option 3: Provide the message value.  Option 1 can be combined with Option2 and/or Option 3.
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "source": "",
   "primary": true,
   "presenceDefinition": {
      "name": "",
      "languageLabels": {},
      "systemPresence": "",
      "deactivated": true,
      "createdBy": {},
      "createdDate": "",
      "modifiedBy": {},
      "modifiedDate": ""
   },
   "message": ""
}
	*/
	function patchUserIdPresencesSource(userId, source, body){
		var apipath = '/api/v2/users/{userId}/presences/{source}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{userId}', userId);

        if(userId === undefined && userId !== null){
			throw 'Missing required  parameter: userId';
        }

        apipath = apipath.replace('{source}', source);

        if(source === undefined && source !== null){
			throw 'Missing required  parameter: source';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PATCH', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.patchUserIdPresencesSource = patchUserIdPresencesSource;

    return self;
};

//API VERSION - 
/**
* @class
* @example
* var api = new QualityApi(pureCloudSession);
*/
var QualityApi = function (pureCloudSession) {
	if(!pureCloudSession){
		throw "PureCloudSession is not valid.";
    }

	var self = this;
	/**
     * @summary Query for evaluation aggregates
	 * @memberOf QualityApi#
	* @param {} body - query
	 * @example
	 * Body Example:
	 * {
   "interval": "",
   "granularity": "",
   "groupBy": [],
   "filter": {
      "type": "",
      "clauses": [],
      "predicates": []
   },
   "metrics": [],
   "flattenMultivaluedDimensions": true
}
	*/
	function postEvaluationsAggregatesQuery(body){
		var apipath = '/api/v2/analytics/evaluations/aggregates/query';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postEvaluationsAggregatesQuery = postEvaluationsAggregatesQuery;
	/**
     * @summary Gets a list of Agent Activities
	 * @description Including the number of evaluations and average evaluation score
	 * @memberOf QualityApi#
	* @param {integer} pageSize - The total page size requested
	* @param {integer} pageNumber - The page number requested
	* @param {string} sortBy - variable name requested to sort by
	* @param {array} expand - variable name requested by expand list
	* @param {string} nextPage - next page token
	* @param {string} previousPage - Previous page token
	* @param {string} startTime - Start time of agent activity. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss.SSSZ
	* @param {string} endTime - End time of agent activity. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss.SSSZ
	* @param {array} agentUserId - user id of agent requested
	* @param {string} evaluatorUserId - user id of the evaluator
	* @param {string} name - name
	* @param {string} group - group id
	*/
	function getAgentsActivity(pageSize, pageNumber, sortBy, expand, nextPage, previousPage, startTime, endTime, agentUserId, evaluatorUserId, name, group){
		var apipath = '/api/v2/quality/agents/activity';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		if(nextPage !== undefined && nextPage !== null){
			queryParameters.nextPage = nextPage;
		}


		if(previousPage !== undefined && previousPage !== null){
			queryParameters.previousPage = previousPage;
		}


		if(startTime !== undefined && startTime !== null){
			queryParameters.startTime = startTime;
		}


		if(endTime !== undefined && endTime !== null){
			queryParameters.endTime = endTime;
		}


		if(agentUserId !== undefined && agentUserId !== null){
			queryParameters.agentUserId = agentUserId;
		}


		if(evaluatorUserId !== undefined && evaluatorUserId !== null){
			queryParameters.evaluatorUserId = evaluatorUserId;
		}


		if(name !== undefined && name !== null){
			queryParameters.name = name;
		}


		if(group !== undefined && group !== null){
			queryParameters.group = group;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getAgentsActivity = getAgentsActivity;
	/**
     * @summary Get the list of calibrations
	 * @memberOf QualityApi#
	* @param {integer} pageSize - The total page size requested
	* @param {integer} pageNumber - The page number requested
	* @param {string} sortBy - variable name requested to sort by
	* @param {array} expand - variable name requested by expand list
	* @param {string} nextPage - next page token
	* @param {string} previousPage - Previous page token
	* @param {string} conversationId - conversation id
	* @param {string} startTime - Beginning of the calibration query. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss.SSSZ
	* @param {string} endTime - end of the calibration query. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss.SSSZ
	* @param {string} calibratorId - user id of calibrator
	*/
	function getCalibrations(pageSize, pageNumber, sortBy, expand, nextPage, previousPage, conversationId, startTime, endTime, calibratorId){
		var apipath = '/api/v2/quality/calibrations';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		if(nextPage !== undefined && nextPage !== null){
			queryParameters.nextPage = nextPage;
		}


		if(previousPage !== undefined && previousPage !== null){
			queryParameters.previousPage = previousPage;
		}


		if(conversationId !== undefined && conversationId !== null){
			queryParameters.conversationId = conversationId;
		}


		if(startTime !== undefined && startTime !== null){
			queryParameters.startTime = startTime;
		}


		if(endTime !== undefined && endTime !== null){
			queryParameters.endTime = endTime;
		}


		if(calibratorId !== undefined && calibratorId !== null){
			queryParameters.calibratorId = calibratorId;
		}

        if(calibratorId === undefined && calibratorId !== null){
			throw 'Missing required  parameter: calibratorId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getCalibrations = getCalibrations;
	/**
     * @summary Create a calibration
	 * @memberOf QualityApi#
	* @param {} body - calibration
	* @param {string} expand - calibratorId
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "calibrator": {
      "name": "",
      "chat": {},
      "department": "",
      "email": "",
      "addresses": [],
      "title": "",
      "username": "",
      "images": []
   },
   "agent": {
      "name": "",
      "chat": {},
      "department": "",
      "email": "",
      "addresses": [],
      "title": "",
      "username": "",
      "images": []
   },
   "conversation": {
      "name": "",
      "startTime": "",
      "endTime": "",
      "address": "",
      "participants": [],
      "conversationIds": [],
      "maxParticipants": 0,
      "recordingState": ""
   },
   "evaluationForm": {
      "name": "",
      "type": "",
      "modifiedDate": "",
      "published": true,
      "contextId": "",
      "questionGroups": [],
      "publishedVersions": {}
   },
   "contextId": "",
   "averageScore": 0,
   "highScore": 0,
   "lowScore": 0,
   "createdDate": "",
   "evaluations": [],
   "evaluators": [],
   "scoringIndex": {
      "name": "",
      "conversation": {},
      "evaluationForm": {},
      "evaluator": {},
      "agent": {},
      "calibration": {},
      "status": "",
      "answers": {},
      "agentHasRead": true,
      "releaseDate": "",
      "assignedDate": "",
      "changedDate": "",
      "queue": {},
      "resourceId": "",
      "resourceType": "",
      "redacted": true,
      "isScoringIndex": true
   },
   "expertEvaluator": {
      "name": "",
      "chat": {},
      "department": "",
      "email": "",
      "addresses": [],
      "title": "",
      "username": "",
      "images": []
   }
}
	*/
	function postCalibrations(body, expand){
		var apipath = '/api/v2/quality/calibrations';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postCalibrations = postCalibrations;
	/**
     * @summary Get a calibration by id.
	 * @memberOf QualityApi#
	* @param {string} calibrationId - Calibration ID
	* @param {string} calibratorId - calibratorId
	*/
	function getCalibrationsCalibrationId(calibrationId, calibratorId){
		var apipath = '/api/v2/quality/calibrations/{calibrationId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{calibrationId}', calibrationId);

        if(calibrationId === undefined && calibrationId !== null){
			throw 'Missing required  parameter: calibrationId';
        }


		if(calibratorId !== undefined && calibratorId !== null){
			queryParameters.calibratorId = calibratorId;
		}

        if(calibratorId === undefined && calibratorId !== null){
			throw 'Missing required  parameter: calibratorId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getCalibrationsCalibrationId = getCalibrationsCalibrationId;
	/**
     * @summary Update a calibration to the specified calibration via PUT.  Editable fields include: evaluators, expertEvaluator, and scoringIndex
	 * @memberOf QualityApi#
	* @param {string} calibrationId - Calibration ID
	* @param {} body - Calibration
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "calibrator": {
      "name": "",
      "chat": {},
      "department": "",
      "email": "",
      "addresses": [],
      "title": "",
      "username": "",
      "images": []
   },
   "agent": {
      "name": "",
      "chat": {},
      "department": "",
      "email": "",
      "addresses": [],
      "title": "",
      "username": "",
      "images": []
   },
   "conversation": {
      "name": "",
      "startTime": "",
      "endTime": "",
      "address": "",
      "participants": [],
      "conversationIds": [],
      "maxParticipants": 0,
      "recordingState": ""
   },
   "evaluationForm": {
      "name": "",
      "type": "",
      "modifiedDate": "",
      "published": true,
      "contextId": "",
      "questionGroups": [],
      "publishedVersions": {}
   },
   "contextId": "",
   "averageScore": 0,
   "highScore": 0,
   "lowScore": 0,
   "createdDate": "",
   "evaluations": [],
   "evaluators": [],
   "scoringIndex": {
      "name": "",
      "conversation": {},
      "evaluationForm": {},
      "evaluator": {},
      "agent": {},
      "calibration": {},
      "status": "",
      "answers": {},
      "agentHasRead": true,
      "releaseDate": "",
      "assignedDate": "",
      "changedDate": "",
      "queue": {},
      "resourceId": "",
      "resourceType": "",
      "redacted": true,
      "isScoringIndex": true
   },
   "expertEvaluator": {
      "name": "",
      "chat": {},
      "department": "",
      "email": "",
      "addresses": [],
      "title": "",
      "username": "",
      "images": []
   }
}
	*/
	function putCalibrationsCalibrationId(calibrationId, body){
		var apipath = '/api/v2/quality/calibrations/{calibrationId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{calibrationId}', calibrationId);

        if(calibrationId === undefined && calibrationId !== null){
			throw 'Missing required  parameter: calibrationId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putCalibrationsCalibrationId = putCalibrationsCalibrationId;
	/**
     * @summary Delete a calibration by id.
	 * @memberOf QualityApi#
	* @param {string} calibrationId - Calibration ID
	* @param {string} calibratorId - calibratorId
	*/
	function deleteCalibrationsCalibrationId(calibrationId, calibratorId){
		var apipath = '/api/v2/quality/calibrations/{calibrationId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{calibrationId}', calibrationId);

        if(calibrationId === undefined && calibrationId !== null){
			throw 'Missing required  parameter: calibrationId';
        }


		if(calibratorId !== undefined && calibratorId !== null){
			queryParameters.calibratorId = calibratorId;
		}

        if(calibratorId === undefined && calibratorId !== null){
			throw 'Missing required  parameter: calibratorId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteCalibrationsCalibrationId = deleteCalibrationsCalibrationId;
	/**
     * @summary Get audits for conversation or recording
	 * @memberOf QualityApi#
	* @param {string} conversationId - Conversation ID
	* @param {integer} pageSize - The total page size requested
	* @param {integer} pageNumber - The page number requested
	* @param {string} sortBy - variable name requested to sort by
	* @param {array} expand - variable name requested by expand list
	* @param {string} nextPage - next page token
	* @param {string} previousPage - Previous page token
	* @param {string} recordingId - id of the recording
	* @param {string} entityType - entity type options: Recording, Calibration, Evaluation, Annotation
	*/
	function getConversationsConversationIdAudits(conversationId, pageSize, pageNumber, sortBy, expand, nextPage, previousPage, recordingId, entityType){
		var apipath = '/api/v2/quality/conversations/{conversationId}/audits';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{conversationId}', conversationId);

        if(conversationId === undefined && conversationId !== null){
			throw 'Missing required  parameter: conversationId';
        }


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		if(nextPage !== undefined && nextPage !== null){
			queryParameters.nextPage = nextPage;
		}


		if(previousPage !== undefined && previousPage !== null){
			queryParameters.previousPage = previousPage;
		}


		if(recordingId !== undefined && recordingId !== null){
			queryParameters.recordingId = recordingId;
		}


		if(entityType !== undefined && entityType !== null){
			queryParameters.entityType = entityType;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getConversationsConversationIdAudits = getConversationsConversationIdAudits;
	/**
     * @summary Create an evaluation
	 * @memberOf QualityApi#
	* @param {string} conversationId - 
	* @param {} body - evaluation
	* @param {string} expand - evaluatorId
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "conversation": {
      "name": "",
      "startTime": "",
      "endTime": "",
      "address": "",
      "participants": [],
      "conversationIds": [],
      "maxParticipants": 0,
      "recordingState": ""
   },
   "evaluationForm": {
      "name": "",
      "type": "",
      "modifiedDate": "",
      "published": true,
      "contextId": "",
      "questionGroups": [],
      "publishedVersions": {}
   },
   "evaluator": {
      "name": "",
      "chat": {},
      "department": "",
      "email": "",
      "addresses": [],
      "title": "",
      "username": "",
      "images": []
   },
   "agent": {
      "name": "",
      "chat": {},
      "department": "",
      "email": "",
      "addresses": [],
      "title": "",
      "username": "",
      "images": []
   },
   "calibration": {
      "name": "",
      "calibrator": {},
      "agent": {},
      "conversation": {},
      "evaluationForm": {},
      "contextId": "",
      "averageScore": 0,
      "highScore": 0,
      "lowScore": 0,
      "createdDate": "",
      "evaluations": [],
      "evaluators": [],
      "scoringIndex": {},
      "expertEvaluator": {}
   },
   "status": "",
   "answers": {
      "totalScore": {},
      "totalCriticalScore": {},
      "questionGroupScores": [],
      "anyFailedKillQuestions": true,
      "comments": "",
      "agentComments": ""
   },
   "agentHasRead": true,
   "releaseDate": "",
   "assignedDate": "",
   "changedDate": "",
   "queue": {
      "name": "",
      "description": "",
      "version": 0,
      "dateCreated": "",
      "dateModified": "",
      "modifiedBy": "",
      "createdBy": "",
      "state": "",
      "modifiedByApp": "",
      "createdByApp": "",
      "mediaSettings": {},
      "bullseye": {},
      "acwSettings": {},
      "skillEvaluationMethod": "",
      "queueFlow": {},
      "callingPartyName": "",
      "callingPartyNumber": "",
      "memberCount": 0
   },
   "resourceId": "",
   "resourceType": "",
   "redacted": true,
   "isScoringIndex": true
}
	*/
	function postConversationsConversationIdEvaluations(conversationId, body, expand){
		var apipath = '/api/v2/quality/conversations/{conversationId}/evaluations';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{conversationId}', conversationId);

        if(conversationId === undefined && conversationId !== null){
			throw 'Missing required  parameter: conversationId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postConversationsConversationIdEvaluations = postConversationsConversationIdEvaluations;
	/**
     * @summary Get an evaluation
	 * @memberOf QualityApi#
	* @param {string} conversationId - 
	* @param {string} evaluationId - 
	* @param {string} expand - agent, evaluator, evaluationForm
	*/
	function getConversationsConversationIdEvaluationsEvaluationId(conversationId, evaluationId, expand){
		var apipath = '/api/v2/quality/conversations/{conversationId}/evaluations/{evaluationId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{conversationId}', conversationId);

        if(conversationId === undefined && conversationId !== null){
			throw 'Missing required  parameter: conversationId';
        }

        apipath = apipath.replace('{evaluationId}', evaluationId);

        if(evaluationId === undefined && evaluationId !== null){
			throw 'Missing required  parameter: evaluationId';
        }


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getConversationsConversationIdEvaluationsEvaluationId = getConversationsConversationIdEvaluationsEvaluationId;
	/**
     * @summary Update an evaluation
	 * @memberOf QualityApi#
	* @param {string} conversationId - 
	* @param {string} evaluationId - 
	* @param {} body - evaluation
	* @param {string} expand - evaluatorId
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "conversation": {
      "name": "",
      "startTime": "",
      "endTime": "",
      "address": "",
      "participants": [],
      "conversationIds": [],
      "maxParticipants": 0,
      "recordingState": ""
   },
   "evaluationForm": {
      "name": "",
      "type": "",
      "modifiedDate": "",
      "published": true,
      "contextId": "",
      "questionGroups": [],
      "publishedVersions": {}
   },
   "evaluator": {
      "name": "",
      "chat": {},
      "department": "",
      "email": "",
      "addresses": [],
      "title": "",
      "username": "",
      "images": []
   },
   "agent": {
      "name": "",
      "chat": {},
      "department": "",
      "email": "",
      "addresses": [],
      "title": "",
      "username": "",
      "images": []
   },
   "calibration": {
      "name": "",
      "calibrator": {},
      "agent": {},
      "conversation": {},
      "evaluationForm": {},
      "contextId": "",
      "averageScore": 0,
      "highScore": 0,
      "lowScore": 0,
      "createdDate": "",
      "evaluations": [],
      "evaluators": [],
      "scoringIndex": {},
      "expertEvaluator": {}
   },
   "status": "",
   "answers": {
      "totalScore": {},
      "totalCriticalScore": {},
      "questionGroupScores": [],
      "anyFailedKillQuestions": true,
      "comments": "",
      "agentComments": ""
   },
   "agentHasRead": true,
   "releaseDate": "",
   "assignedDate": "",
   "changedDate": "",
   "queue": {
      "name": "",
      "description": "",
      "version": 0,
      "dateCreated": "",
      "dateModified": "",
      "modifiedBy": "",
      "createdBy": "",
      "state": "",
      "modifiedByApp": "",
      "createdByApp": "",
      "mediaSettings": {},
      "bullseye": {},
      "acwSettings": {},
      "skillEvaluationMethod": "",
      "queueFlow": {},
      "callingPartyName": "",
      "callingPartyNumber": "",
      "memberCount": 0
   },
   "resourceId": "",
   "resourceType": "",
   "redacted": true,
   "isScoringIndex": true
}
	*/
	function putConversationsConversationIdEvaluationsEvaluationId(conversationId, evaluationId, body, expand){
		var apipath = '/api/v2/quality/conversations/{conversationId}/evaluations/{evaluationId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{conversationId}', conversationId);

        if(conversationId === undefined && conversationId !== null){
			throw 'Missing required  parameter: conversationId';
        }

        apipath = apipath.replace('{evaluationId}', evaluationId);

        if(evaluationId === undefined && evaluationId !== null){
			throw 'Missing required  parameter: evaluationId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putConversationsConversationIdEvaluationsEvaluationId = putConversationsConversationIdEvaluationsEvaluationId;
	/**
     * @summary Delete an evaluation
	 * @memberOf QualityApi#
	* @param {string} conversationId - 
	* @param {string} evaluationId - 
	* @param {string} expand - evaluatorId
	*/
	function deleteConversationsConversationIdEvaluationsEvaluationId(conversationId, evaluationId, expand){
		var apipath = '/api/v2/quality/conversations/{conversationId}/evaluations/{evaluationId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{conversationId}', conversationId);

        if(conversationId === undefined && conversationId !== null){
			throw 'Missing required  parameter: conversationId';
        }

        apipath = apipath.replace('{evaluationId}', evaluationId);

        if(evaluationId === undefined && evaluationId !== null){
			throw 'Missing required  parameter: evaluationId';
        }


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteConversationsConversationIdEvaluationsEvaluationId = deleteConversationsConversationIdEvaluationsEvaluationId;
	/**
     * @summary Queries Evaluations and returns a paged list
	 * @description Query params must include one of conversationId, evaluatorUserId, or agentUserId
	 * @memberOf QualityApi#
	* @param {integer} pageSize - The total page size requested
	* @param {integer} pageNumber - The page number requested
	* @param {string} sortBy - variable name requested to sort by
	* @param {array} expand - variable name requested by expand list
	* @param {string} nextPage - next page token
	* @param {string} previousPage - Previous page token
	* @param {string} conversationId - conversationId specified
	* @param {string} agentUserId - user id of the agent
	* @param {string} evaluatorUserId - evaluator user id
	* @param {string} queueId - queue id
	* @param {string} startTime - start time of the evaluation query
	* @param {string} endTime - end time of the evaluation query
	* @param {array} evaluationState - evaluation state options: Pending, InProgress, Finished
	* @param {boolean} isReleased - the evaluation has been released
	* @param {boolean} agentHasRead - agent has the evaluation
	* @param {boolean} expandAnswerTotalScores - get the total scores for evaluations
	* @param {integer} maximum - maximum
	*/
	function getEvaluationsQuery(pageSize, pageNumber, sortBy, expand, nextPage, previousPage, conversationId, agentUserId, evaluatorUserId, queueId, startTime, endTime, evaluationState, isReleased, agentHasRead, expandAnswerTotalScores, maximum){
		var apipath = '/api/v2/quality/evaluations/query';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		if(nextPage !== undefined && nextPage !== null){
			queryParameters.nextPage = nextPage;
		}


		if(previousPage !== undefined && previousPage !== null){
			queryParameters.previousPage = previousPage;
		}


		if(conversationId !== undefined && conversationId !== null){
			queryParameters.conversationId = conversationId;
		}


		if(agentUserId !== undefined && agentUserId !== null){
			queryParameters.agentUserId = agentUserId;
		}


		if(evaluatorUserId !== undefined && evaluatorUserId !== null){
			queryParameters.evaluatorUserId = evaluatorUserId;
		}


		if(queueId !== undefined && queueId !== null){
			queryParameters.queueId = queueId;
		}


		if(startTime !== undefined && startTime !== null){
			queryParameters.startTime = startTime;
		}


		if(endTime !== undefined && endTime !== null){
			queryParameters.endTime = endTime;
		}


		if(evaluationState !== undefined && evaluationState !== null){
			queryParameters.evaluationState = evaluationState;
		}


		if(isReleased !== undefined && isReleased !== null){
			queryParameters.isReleased = isReleased;
		}


		if(agentHasRead !== undefined && agentHasRead !== null){
			queryParameters.agentHasRead = agentHasRead;
		}


		if(expandAnswerTotalScores !== undefined && expandAnswerTotalScores !== null){
			queryParameters.expandAnswerTotalScores = expandAnswerTotalScores;
		}


		if(maximum !== undefined && maximum !== null){
			queryParameters.maximum = maximum;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getEvaluationsQuery = getEvaluationsQuery;
	/**
     * @summary Score evaluation
	 * @memberOf QualityApi#
	* @param {} body - evaluationAndScoringSet
	 * @example
	 * Body Example:
	 * {
   "evaluationForm": {
      "name": "",
      "type": "",
      "modifiedDate": "",
      "published": true,
      "contextId": "",
      "questionGroups": [],
      "publishedVersions": {}
   },
   "answers": {
      "totalScore": {},
      "totalCriticalScore": {},
      "questionGroupScores": [],
      "anyFailedKillQuestions": true,
      "comments": "",
      "agentComments": ""
   }
}
	*/
	function postEvaluationsScoring(body){
		var apipath = '/api/v2/quality/evaluations/scoring';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postEvaluationsScoring = postEvaluationsScoring;
	/**
     * @summary Get an evaluator activity
	 * @memberOf QualityApi#
	* @param {integer} pageSize - The total page size requested
	* @param {integer} pageNumber - The page number requested
	* @param {string} sortBy - variable name requested to sort by
	* @param {array} expand - variable name requested by expand list
	* @param {string} nextPage - next page token
	* @param {string} previousPage - Previous page token
	* @param {string} startTime - The start time specified. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss.SSSZ
	* @param {string} endTime - The end time specified. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss.SSSZ
	* @param {string} name - Evaluator name
	* @param {array} permission - permission strings
	* @param {string} group - group id
	*/
	function getEvaluatorsActivity(pageSize, pageNumber, sortBy, expand, nextPage, previousPage, startTime, endTime, name, permission, group){
		var apipath = '/api/v2/quality/evaluators/activity';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		if(nextPage !== undefined && nextPage !== null){
			queryParameters.nextPage = nextPage;
		}


		if(previousPage !== undefined && previousPage !== null){
			queryParameters.previousPage = previousPage;
		}


		if(startTime !== undefined && startTime !== null){
			queryParameters.startTime = startTime;
		}


		if(endTime !== undefined && endTime !== null){
			queryParameters.endTime = endTime;
		}


		if(name !== undefined && name !== null){
			queryParameters.name = name;
		}


		if(permission !== undefined && permission !== null){
			queryParameters.permission = permission;
		}


		if(group !== undefined && group !== null){
			queryParameters.group = group;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getEvaluatorsActivity = getEvaluatorsActivity;
	/**
     * @summary Get the list of evaluation forms
	 * @memberOf QualityApi#
	* @param {integer} pageSize - The total page size requested
	* @param {integer} pageNumber - The page number requested
	* @param {string} sortBy - variable name requested to sort by
	* @param {string} nextPage - next page token
	* @param {string} previousPage - Previous page token
	* @param {string} expand - Expand
	* @param {string} name - Name
	*/
	function getForms(pageSize, pageNumber, sortBy, nextPage, previousPage, expand, name){
		var apipath = '/api/v2/quality/forms';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		if(nextPage !== undefined && nextPage !== null){
			queryParameters.nextPage = nextPage;
		}


		if(previousPage !== undefined && previousPage !== null){
			queryParameters.previousPage = previousPage;
		}


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		if(name !== undefined && name !== null){
			queryParameters.name = name;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getForms = getForms;
	/**
     * @summary Create an evaluation form.
	 * @memberOf QualityApi#
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "type": "",
   "modifiedDate": "",
   "published": true,
   "contextId": "",
   "questionGroups": [],
   "publishedVersions": {
      "pageSize": 0,
      "pageNumber": 0,
      "total": 0,
      "entities": [],
      "selfUri": "",
      "firstUri": "",
      "previousUri": "",
      "nextUri": "",
      "lastUri": "",
      "pageCount": 0
   }
}
	*/
	function postForms(body){
		var apipath = '/api/v2/quality/forms';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postForms = postForms;
	/**
     * @summary Get an evaluation form
	 * @memberOf QualityApi#
	* @param {string} formId - Form ID
	*/
	function getFormsFormId(formId){
		var apipath = '/api/v2/quality/forms/{formId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{formId}', formId);

        if(formId === undefined && formId !== null){
			throw 'Missing required  parameter: formId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getFormsFormId = getFormsFormId;
	/**
     * @summary Update an evaluation form.
	 * @memberOf QualityApi#
	* @param {string} formId - Form ID
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "type": "",
   "modifiedDate": "",
   "published": true,
   "contextId": "",
   "questionGroups": [],
   "publishedVersions": {
      "pageSize": 0,
      "pageNumber": 0,
      "total": 0,
      "entities": [],
      "selfUri": "",
      "firstUri": "",
      "previousUri": "",
      "nextUri": "",
      "lastUri": "",
      "pageCount": 0
   }
}
	*/
	function putFormsFormId(formId, body){
		var apipath = '/api/v2/quality/forms/{formId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{formId}', formId);

        if(formId === undefined && formId !== null){
			throw 'Missing required  parameter: formId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putFormsFormId = putFormsFormId;
	/**
     * @summary Delete an evaluation form.
	 * @memberOf QualityApi#
	* @param {string} formId - Form ID
	*/
	function deleteFormsFormId(formId){
		var apipath = '/api/v2/quality/forms/{formId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{formId}', formId);

        if(formId === undefined && formId !== null){
			throw 'Missing required  parameter: formId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteFormsFormId = deleteFormsFormId;
	/**
     * @summary Gets all the revisions for a specific evaluation.
	 * @memberOf QualityApi#
	* @param {string} formId - Form ID
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	*/
	function getFormsFormIdVersions(formId, pageSize, pageNumber){
		var apipath = '/api/v2/quality/forms/{formId}/versions';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{formId}', formId);

        if(formId === undefined && formId !== null){
			throw 'Missing required  parameter: formId';
        }


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getFormsFormIdVersions = getFormsFormIdVersions;
	/**
     * @summary Get the published evaluation forms.
	 * @memberOf QualityApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} name - Name
	*/
	function getPublishedforms(pageSize, pageNumber, name){
		var apipath = '/api/v2/quality/publishedforms';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(name !== undefined && name !== null){
			queryParameters.name = name;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getPublishedforms = getPublishedforms;
	/**
     * @summary Publish an evaluation form.
	 * @memberOf QualityApi#
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "type": "",
   "modifiedDate": "",
   "published": true,
   "contextId": "",
   "questionGroups": [],
   "publishedVersions": {
      "pageSize": 0,
      "pageNumber": 0,
      "total": 0,
      "entities": [],
      "selfUri": "",
      "firstUri": "",
      "previousUri": "",
      "nextUri": "",
      "lastUri": "",
      "pageCount": 0
   }
}
	*/
	function postPublishedforms(body){
		var apipath = '/api/v2/quality/publishedforms';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postPublishedforms = postPublishedforms;
	/**
     * @summary Get the published evaluation forms.
	 * @memberOf QualityApi#
	* @param {string} formId - Form ID
	*/
	function getPublishedformsFormId(formId){
		var apipath = '/api/v2/quality/publishedforms/{formId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{formId}', formId);

        if(formId === undefined && formId !== null){
			throw 'Missing required  parameter: formId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getPublishedformsFormId = getPublishedformsFormId;

    return self;
};

//API VERSION - 
/**
* @class
* @example
* var api = new RecordingApi(pureCloudSession);
*/
var RecordingApi = function (pureCloudSession) {
	if(!pureCloudSession){
		throw "PureCloudSession is not valid.";
    }

	var self = this;
	/**
     * @summary Get all of a Conversation's Recordings.
	 * @memberOf RecordingApi#
	* @param {string} conversationId - Conversation ID
	* @param {string} formatId - The desired format (WEBM, WAV, etc.)
	WEBM,
	WAV,
	*/
	function getConversationIdRecordings(conversationId, formatId){
		var apipath = '/api/v2/conversations/{conversationId}/recordings';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{conversationId}', conversationId);

        if(conversationId === undefined && conversationId !== null){
			throw 'Missing required  parameter: conversationId';
        }


		if(formatId !== undefined && formatId !== null){
			queryParameters.formatId = formatId;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getConversationIdRecordings = getConversationIdRecordings;
	/**
     * @summary Gets a specific recording.
	 * @memberOf RecordingApi#
	* @param {string} conversationId - Conversation ID
	* @param {string} recordingId - Recording ID
	* @param {string} formatId - The desired format (WEBM, WAV, etc.)
	WEBM,
	WAV,
	* @param {boolean} download - requesting a download format of the recording
	true,
	false,
	* @param {string} fileName - the name of the downloaded fileName
	*/
	function getConversationIdRecordingsRecordingId(conversationId, recordingId, formatId, download, fileName){
		var apipath = '/api/v2/conversations/{conversationId}/recordings/{recordingId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{conversationId}', conversationId);

        if(conversationId === undefined && conversationId !== null){
			throw 'Missing required  parameter: conversationId';
        }

        apipath = apipath.replace('{recordingId}', recordingId);

        if(recordingId === undefined && recordingId !== null){
			throw 'Missing required  parameter: recordingId';
        }


		if(formatId !== undefined && formatId !== null){
			queryParameters.formatId = formatId;
		}


		if(download !== undefined && download !== null){
			queryParameters.download = download;
		}


		if(fileName !== undefined && fileName !== null){
			queryParameters.fileName = fileName;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getConversationIdRecordingsRecordingId = getConversationIdRecordingsRecordingId;
	/**
     * @summary Updates the retention records on a recording.
	 * @description Currently supports updating and removing both archive and delete dates for eligible recordings. A request to change the archival date of an archived recording will result in a restoration of the recording until the new date set. Use of the query parameter 'restoreDays' is deprecated and will be removed in the next major version release. If 'restoreDays' is provided, no attempt at updating other retention data will be made. To migrate to the new usage, issuing a request with restoreDays=10 would instead set the archiveDate's time stamp in the PUT body to 10 days in the future.
	 * @memberOf RecordingApi#
	* @param {string} conversationId - Conversation ID
	* @param {string} recordingId - Recording ID
	* @param {} body - recording
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "conversationId": "",
   "path": "",
   "startTime": "",
   "endTime": "",
   "media": "",
   "annotations": [],
   "transcript": [],
   "emailTranscript": [],
   "fileState": "",
   "restoreExpirationTime": "",
   "mediaUris": {},
   "estimatedTranscodeTimeMs": 0,
   "actualTranscodeTimeMs": 0,
   "archiveDate": "",
   "archiveMedium": "",
   "deleteDate": "",
   "maxAllowedRestorationsForOrg": 0,
   "remainingRestorationsAllowedForOrg": 0,
   "sessionId": ""
}
	*/
	function putConversationIdRecordingsRecordingId(conversationId, recordingId, body){
		var apipath = '/api/v2/conversations/{conversationId}/recordings/{recordingId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{conversationId}', conversationId);

        if(conversationId === undefined && conversationId !== null){
			throw 'Missing required  parameter: conversationId';
        }

        apipath = apipath.replace('{recordingId}', recordingId);

        if(recordingId === undefined && recordingId !== null){
			throw 'Missing required  parameter: recordingId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }

        if(body === undefined && body !== null){
			throw 'Missing required  parameter: body';
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putConversationIdRecordingsRecordingId = putConversationIdRecordingsRecordingId;
	/**
     * @summary Get annotations for recording
	 * @memberOf RecordingApi#
	* @param {string} conversationId - Conversation ID
	* @param {string} recordingId - Recording ID
	*/
	function getConversationIdRecordingsRecordingIdAnnotations(conversationId, recordingId){
		var apipath = '/api/v2/conversations/{conversationId}/recordings/{recordingId}/annotations';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{conversationId}', conversationId);

        if(conversationId === undefined && conversationId !== null){
			throw 'Missing required  parameter: conversationId';
        }

        apipath = apipath.replace('{recordingId}', recordingId);

        if(recordingId === undefined && recordingId !== null){
			throw 'Missing required  parameter: recordingId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getConversationIdRecordingsRecordingIdAnnotations = getConversationIdRecordingsRecordingIdAnnotations;
	/**
     * @summary Create annotation
	 * @memberOf RecordingApi#
	* @param {string} conversationId - Conversation ID
	* @param {string} recordingId - Recording ID
	* @param {} body - annotation
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "type": "",
   "location": 0,
   "durationMs": 0,
   "user": {
      "name": "",
      "chat": {},
      "department": "",
      "email": "",
      "addresses": [],
      "title": "",
      "username": "",
      "images": []
   },
   "description": ""
}
	*/
	function postConversationIdRecordingsRecordingIdAnnotations(conversationId, recordingId, body){
		var apipath = '/api/v2/conversations/{conversationId}/recordings/{recordingId}/annotations';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{conversationId}', conversationId);

        if(conversationId === undefined && conversationId !== null){
			throw 'Missing required  parameter: conversationId';
        }

        apipath = apipath.replace('{recordingId}', recordingId);

        if(recordingId === undefined && recordingId !== null){
			throw 'Missing required  parameter: recordingId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postConversationIdRecordingsRecordingIdAnnotations = postConversationIdRecordingsRecordingIdAnnotations;
	/**
     * @summary Get annotation
	 * @memberOf RecordingApi#
	* @param {string} conversationId - Conversation ID
	* @param {string} recordingId - Recording ID
	* @param {string} annotationId - Annotation ID
	*/
	function getConversationIdRecordingsRecordingIdAnnotationsAnnotationId(conversationId, recordingId, annotationId){
		var apipath = '/api/v2/conversations/{conversationId}/recordings/{recordingId}/annotations/{annotationId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{conversationId}', conversationId);

        if(conversationId === undefined && conversationId !== null){
			throw 'Missing required  parameter: conversationId';
        }

        apipath = apipath.replace('{recordingId}', recordingId);

        if(recordingId === undefined && recordingId !== null){
			throw 'Missing required  parameter: recordingId';
        }

        apipath = apipath.replace('{annotationId}', annotationId);

        if(annotationId === undefined && annotationId !== null){
			throw 'Missing required  parameter: annotationId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getConversationIdRecordingsRecordingIdAnnotationsAnnotationId = getConversationIdRecordingsRecordingIdAnnotationsAnnotationId;
	/**
     * @summary Update annotation
	 * @memberOf RecordingApi#
	* @param {string} conversationId - Conversation ID
	* @param {string} recordingId - Recording ID
	* @param {string} annotationId - Annotation ID
	* @param {} body - annotation
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "type": "",
   "location": 0,
   "durationMs": 0,
   "user": {
      "name": "",
      "chat": {},
      "department": "",
      "email": "",
      "addresses": [],
      "title": "",
      "username": "",
      "images": []
   },
   "description": ""
}
	*/
	function putConversationIdRecordingsRecordingIdAnnotationsAnnotationId(conversationId, recordingId, annotationId, body){
		var apipath = '/api/v2/conversations/{conversationId}/recordings/{recordingId}/annotations/{annotationId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{conversationId}', conversationId);

        if(conversationId === undefined && conversationId !== null){
			throw 'Missing required  parameter: conversationId';
        }

        apipath = apipath.replace('{recordingId}', recordingId);

        if(recordingId === undefined && recordingId !== null){
			throw 'Missing required  parameter: recordingId';
        }

        apipath = apipath.replace('{annotationId}', annotationId);

        if(annotationId === undefined && annotationId !== null){
			throw 'Missing required  parameter: annotationId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putConversationIdRecordingsRecordingIdAnnotationsAnnotationId = putConversationIdRecordingsRecordingIdAnnotationsAnnotationId;
	/**
     * @summary Delete annotation
	 * @memberOf RecordingApi#
	* @param {string} conversationId - Conversation ID
	* @param {string} recordingId - Recording ID
	* @param {string} annotationId - Annotation ID
	*/
	function deleteConversationIdRecordingsRecordingIdAnnotationsAnnotationId(conversationId, recordingId, annotationId){
		var apipath = '/api/v2/conversations/{conversationId}/recordings/{recordingId}/annotations/{annotationId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{conversationId}', conversationId);

        if(conversationId === undefined && conversationId !== null){
			throw 'Missing required  parameter: conversationId';
        }

        apipath = apipath.replace('{recordingId}', recordingId);

        if(recordingId === undefined && recordingId !== null){
			throw 'Missing required  parameter: recordingId';
        }

        apipath = apipath.replace('{annotationId}', annotationId);

        if(annotationId === undefined && annotationId !== null){
			throw 'Missing required  parameter: annotationId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteConversationIdRecordingsRecordingIdAnnotationsAnnotationId = deleteConversationIdRecordingsRecordingIdAnnotationsAnnotationId;
	/**
     * @summary Gets all orphan recordings
	 * @memberOf RecordingApi#
	* @param {integer} pageSize - The total page size requested
	* @param {integer} pageNumber - The page number requested
	* @param {string} sortBy - variable name requested to sort by
	* @param {array} expand - variable name requested by expand list
	* @param {string} nextPage - next page token
	* @param {string} previousPage - Previous page token
	*/
	function getOrphanrecordings(pageSize, pageNumber, sortBy, expand, nextPage, previousPage){
		var apipath = '/api/v2/orphanrecordings';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		if(nextPage !== undefined && nextPage !== null){
			queryParameters.nextPage = nextPage;
		}


		if(previousPage !== undefined && previousPage !== null){
			queryParameters.previousPage = previousPage;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getOrphanrecordings = getOrphanrecordings;
	/**
     * @summary Gets a single orphan recording
	 * @memberOf RecordingApi#
	* @param {string} orphanId - Orphan ID
	*/
	function getOrphanId(orphanId){
		var apipath = '/api/v2/orphanrecordings/{orphanId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{orphanId}', orphanId);

        if(orphanId === undefined && orphanId !== null){
			throw 'Missing required  parameter: orphanId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getOrphanId = getOrphanId;
	/**
     * @summary  deletes a single orphan recording
	 * @memberOf RecordingApi#
	* @param {string} orphanId - Orphan ID
	*/
	function deleteOrphanId(orphanId){
		var apipath = '/api/v2/orphanrecordings/{orphanId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{orphanId}', orphanId);

        if(orphanId === undefined && orphanId !== null){
			throw 'Missing required  parameter: orphanId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteOrphanId = deleteOrphanId;
	/**
     * @summary Gets media retention policy list with query options to filter on name and enabled.
	 * @description for a less verbose response, add summary=true to this endpoint
	 * @memberOf RecordingApi#
	* @param {integer} pageSize - The total page size requested
	* @param {integer} pageNumber - The page number requested
	* @param {string} sortBy - variable name requested to sort by
	* @param {array} expand - variable name requested by expand list
	* @param {string} nextPage - next page token
	* @param {string} previousPage - Previous page token
	* @param {string} name - the policy name - used for filtering results in searches.
	* @param {boolean} enabled - checks to see if policy is enabled - use enabled = true or enabled = false
	* @param {boolean} summary - provides a less verbose response of policy lists.
	* @param {boolean} hasErrors - provides a way to fetch all policies with errors or policies that do not have errors
	*/
	function getMediaretentionpolicies(pageSize, pageNumber, sortBy, expand, nextPage, previousPage, name, enabled, summary, hasErrors){
		var apipath = '/api/v2/recording/mediaretentionpolicies';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		if(nextPage !== undefined && nextPage !== null){
			queryParameters.nextPage = nextPage;
		}


		if(previousPage !== undefined && previousPage !== null){
			queryParameters.previousPage = previousPage;
		}


		if(name !== undefined && name !== null){
			queryParameters.name = name;
		}


		if(enabled !== undefined && enabled !== null){
			queryParameters.enabled = enabled;
		}


		if(summary !== undefined && summary !== null){
			queryParameters.summary = summary;
		}


		if(hasErrors !== undefined && hasErrors !== null){
			queryParameters.hasErrors = hasErrors;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getMediaretentionpolicies = getMediaretentionpolicies;
	/**
     * @summary Create media retention policy
	 * @memberOf RecordingApi#
	* @param {} body - Policy
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "modifiedDate": "",
   "createdDate": "",
   "order": 0,
   "description": "",
   "enabled": true,
   "mediaPolicies": {
      "callPolicy": {},
      "chatPolicy": {},
      "emailPolicy": {}
   },
   "conditions": {
      "forUsers": [],
      "directions": [],
      "dateRanges": [],
      "mediaTypes": [],
      "forQueues": [],
      "duration": {},
      "wrapupCodes": [],
      "timeAllowed": {}
   },
   "actions": {
      "retainRecording": true,
      "deleteRecording": true,
      "assignEvaluations": [],
      "assignMeteredEvaluations": [],
      "assignCalibrations": [],
      "retentionDuration": {}
   },
   "policyErrors": {
      "policyErrorMessages": []
   }
}
	*/
	function postMediaretentionpolicies(body){
		var apipath = '/api/v2/recording/mediaretentionpolicies';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postMediaretentionpolicies = postMediaretentionpolicies;
	/**
     * @summary Delete media retention policies
	 * @description Bulk delete of media retention policies, this will only delete the polices that match the ids specified in the query param.
	 * @memberOf RecordingApi#
	* @param {string} ids - Bulk delete of media retention policies, this will only delete the polices that match the ids specified in the query param.
	*/
	function deleteMediaretentionpolicies(ids){
		var apipath = '/api/v2/recording/mediaretentionpolicies';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(ids !== undefined && ids !== null){
			queryParameters.ids = ids;
		}

        if(ids === undefined && ids !== null){
			throw 'Missing required  parameter: ids';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteMediaretentionpolicies = deleteMediaretentionpolicies;
	/**
     * @summary Get a media retention policy
	 * @memberOf RecordingApi#
	* @param {string} policyId - Policy ID
	*/
	function getMediaretentionpoliciesPolicyId(policyId){
		var apipath = '/api/v2/recording/mediaretentionpolicies/{policyId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{policyId}', policyId);

        if(policyId === undefined && policyId !== null){
			throw 'Missing required  parameter: policyId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getMediaretentionpoliciesPolicyId = getMediaretentionpoliciesPolicyId;
	/**
     * @summary Update a media retention policy
	 * @memberOf RecordingApi#
	* @param {string} policyId - Policy ID
	* @param {} body - Policy
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "modifiedDate": "",
   "createdDate": "",
   "order": 0,
   "description": "",
   "enabled": true,
   "mediaPolicies": {
      "callPolicy": {},
      "chatPolicy": {},
      "emailPolicy": {}
   },
   "conditions": {
      "forUsers": [],
      "directions": [],
      "dateRanges": [],
      "mediaTypes": [],
      "forQueues": [],
      "duration": {},
      "wrapupCodes": [],
      "timeAllowed": {}
   },
   "actions": {
      "retainRecording": true,
      "deleteRecording": true,
      "assignEvaluations": [],
      "assignMeteredEvaluations": [],
      "assignCalibrations": [],
      "retentionDuration": {}
   },
   "policyErrors": {
      "policyErrorMessages": []
   }
}
	*/
	function putMediaretentionpoliciesPolicyId(policyId, body){
		var apipath = '/api/v2/recording/mediaretentionpolicies/{policyId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{policyId}', policyId);

        if(policyId === undefined && policyId !== null){
			throw 'Missing required  parameter: policyId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putMediaretentionpoliciesPolicyId = putMediaretentionpoliciesPolicyId;
	/**
     * @summary Delete a media retention policy
	 * @memberOf RecordingApi#
	* @param {string} policyId - Policy ID
	*/
	function deleteMediaretentionpoliciesPolicyId(policyId){
		var apipath = '/api/v2/recording/mediaretentionpolicies/{policyId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{policyId}', policyId);

        if(policyId === undefined && policyId !== null){
			throw 'Missing required  parameter: policyId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteMediaretentionpoliciesPolicyId = deleteMediaretentionpoliciesPolicyId;
	/**
     * @summary Patch a media retention policy
	 * @memberOf RecordingApi#
	* @param {string} policyId - Policy ID
	* @param {} body - Policy
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "modifiedDate": "",
   "createdDate": "",
   "order": 0,
   "description": "",
   "enabled": true,
   "mediaPolicies": {
      "callPolicy": {},
      "chatPolicy": {},
      "emailPolicy": {}
   },
   "conditions": {
      "forUsers": [],
      "directions": [],
      "dateRanges": [],
      "mediaTypes": [],
      "forQueues": [],
      "duration": {},
      "wrapupCodes": [],
      "timeAllowed": {}
   },
   "actions": {
      "retainRecording": true,
      "deleteRecording": true,
      "assignEvaluations": [],
      "assignMeteredEvaluations": [],
      "assignCalibrations": [],
      "retentionDuration": {}
   },
   "policyErrors": {
      "policyErrorMessages": []
   }
}
	*/
	function patchMediaretentionpoliciesPolicyId(policyId, body){
		var apipath = '/api/v2/recording/mediaretentionpolicies/{policyId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{policyId}', policyId);

        if(policyId === undefined && policyId !== null){
			throw 'Missing required  parameter: policyId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PATCH', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.patchMediaretentionpoliciesPolicyId = patchMediaretentionpoliciesPolicyId;
	/**
     * @summary Get the Recording Settings for the Organization
	 * @memberOf RecordingApi#
	* @param {boolean} createDefault - If no settings are found, a new one is created with default values
	*/
	function getSettings(createDefault){
		var apipath = '/api/v2/recording/settings';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(createDefault !== undefined && createDefault !== null){
			queryParameters.createDefault = createDefault;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getSettings = getSettings;
	/**
     * @summary Update the Recording Settings for the Organization
	 * @memberOf RecordingApi#
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "maxSimultaneousStreams": 0
}
	*/
	function putSettings(body){
		var apipath = '/api/v2/recording/settings';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putSettings = putSettings;

    return self;
};

//API VERSION - 
/**
* @class
* @example
* var api = new ResponseManagementApi(pureCloudSession);
*/
var ResponseManagementApi = function (pureCloudSession) {
	if(!pureCloudSession){
		throw "PureCloudSession is not valid.";
    }

	var self = this;
	/**
     * @summary Gets a list of existing response libraries.
	 * @memberOf ResponseManagementApi#
	* @param {integer} pageNumber - Page number
	* @param {integer} pageSize - Page size
	*/
	function getLibraries(pageNumber, pageSize){
		var apipath = '/api/v2/responsemanagement/libraries';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getLibraries = getLibraries;
	/**
     * @summary Create a response library.
	 * @memberOf ResponseManagementApi#
	* @param {} body - Library
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "version": 0,
   "createdBy": {
      "name": "",
      "chat": {},
      "department": "",
      "email": "",
      "addresses": [],
      "title": "",
      "username": "",
      "images": []
   },
   "dateCreated": ""
}
	*/
	function postLibraries(body){
		var apipath = '/api/v2/responsemanagement/libraries';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postLibraries = postLibraries;
	/**
     * @summary Get details about an existing response library.
	 * @memberOf ResponseManagementApi#
	* @param {string} libraryId - Library ID
	*/
	function getLibrariesLibraryId(libraryId){
		var apipath = '/api/v2/responsemanagement/libraries/{libraryId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{libraryId}', libraryId);

        if(libraryId === undefined && libraryId !== null){
			throw 'Missing required  parameter: libraryId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getLibrariesLibraryId = getLibrariesLibraryId;
	/**
     * @summary Update an existing response library.
	 * @description Fields that can be updated: name. The most recent version is required for updates.
	 * @memberOf ResponseManagementApi#
	* @param {string} libraryId - Library ID
	* @param {} body - Library
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "version": 0,
   "createdBy": {
      "name": "",
      "chat": {},
      "department": "",
      "email": "",
      "addresses": [],
      "title": "",
      "username": "",
      "images": []
   },
   "dateCreated": ""
}
	*/
	function putLibrariesLibraryId(libraryId, body){
		var apipath = '/api/v2/responsemanagement/libraries/{libraryId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{libraryId}', libraryId);

        if(libraryId === undefined && libraryId !== null){
			throw 'Missing required  parameter: libraryId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putLibrariesLibraryId = putLibrariesLibraryId;
	/**
     * @summary Delete an existing response library.
	 * @description This will remove any responses associated with the library.
	 * @memberOf ResponseManagementApi#
	* @param {string} libraryId - Library ID
	*/
	function deleteLibrariesLibraryId(libraryId){
		var apipath = '/api/v2/responsemanagement/libraries/{libraryId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{libraryId}', libraryId);

        if(libraryId === undefined && libraryId !== null){
			throw 'Missing required  parameter: libraryId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteLibrariesLibraryId = deleteLibrariesLibraryId;
	/**
     * @summary Gets a list of existing responses.
	 * @memberOf ResponseManagementApi#
	* @param {string} libraryId - Library ID
	* @param {integer} pageNumber - Page number
	* @param {integer} pageSize - Page size
	*/
	function getResponses(libraryId, pageNumber, pageSize){
		var apipath = '/api/v2/responsemanagement/responses';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(libraryId !== undefined && libraryId !== null){
			queryParameters.libraryId = libraryId;
		}

        if(libraryId === undefined && libraryId !== null){
			throw 'Missing required  parameter: libraryId';
        }


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getResponses = getResponses;
	/**
     * @summary Create a response.
	 * @memberOf ResponseManagementApi#
	* @param {} body - Response
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "version": 0,
   "libraries": [],
   "texts": [],
   "createdBy": {
      "name": "",
      "chat": {},
      "department": "",
      "email": "",
      "addresses": [],
      "title": "",
      "username": "",
      "images": []
   },
   "dateCreated": ""
}
	*/
	function postResponses(body){
		var apipath = '/api/v2/responsemanagement/responses';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postResponses = postResponses;
	/**
     * @summary Query responses
	 * @memberOf ResponseManagementApi#
	* @param {} body - Response
	 * @example
	 * Body Example:
	 * {
   "queryPhrase": "",
   "pageSize": 0,
   "filters": []
}
	*/
	function postResponsesQuery(body){
		var apipath = '/api/v2/responsemanagement/responses/query';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postResponsesQuery = postResponsesQuery;
	/**
     * @summary Get details about an existing response.
	 * @memberOf ResponseManagementApi#
	* @param {string} responseId - Response ID
	*/
	function getResponsesResponseId(responseId){
		var apipath = '/api/v2/responsemanagement/responses/{responseId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{responseId}', responseId);

        if(responseId === undefined && responseId !== null){
			throw 'Missing required  parameter: responseId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getResponsesResponseId = getResponsesResponseId;
	/**
     * @summary Update an existing response.
	 * @description Fields that can be updated: name, libraries, and texts. The most recent version is required for updates.
	 * @memberOf ResponseManagementApi#
	* @param {string} responseId - Response ID
	* @param {} body - Response
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "version": 0,
   "libraries": [],
   "texts": [],
   "createdBy": {
      "name": "",
      "chat": {},
      "department": "",
      "email": "",
      "addresses": [],
      "title": "",
      "username": "",
      "images": []
   },
   "dateCreated": ""
}
	*/
	function putResponsesResponseId(responseId, body){
		var apipath = '/api/v2/responsemanagement/responses/{responseId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{responseId}', responseId);

        if(responseId === undefined && responseId !== null){
			throw 'Missing required  parameter: responseId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putResponsesResponseId = putResponsesResponseId;
	/**
     * @summary Delete an existing response.
	 * @description This will remove the response from any libraries associated with it.
	 * @memberOf ResponseManagementApi#
	* @param {string} responseId - Response ID
	*/
	function deleteResponsesResponseId(responseId){
		var apipath = '/api/v2/responsemanagement/responses/{responseId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{responseId}', responseId);

        if(responseId === undefined && responseId !== null){
			throw 'Missing required  parameter: responseId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteResponsesResponseId = deleteResponsesResponseId;

    return self;
};

//API VERSION - 
/**
* @class
* @example
* var api = new RoutingApi(pureCloudSession);
*/
var RoutingApi = function (pureCloudSession) {
	if(!pureCloudSession){
		throw "PureCloudSession is not valid.";
    }

	var self = this;
	/**
     * @summary Query for queue observations
	 * @memberOf RoutingApi#
	* @param {} body - query
	 * @example
	 * Body Example:
	 * {
   "filter": {
      "type": "",
      "clauses": [],
      "predicates": []
   },
   "metrics": []
}
	*/
	function postQueuesObservationsQuery(body){
		var apipath = '/api/v2/analytics/queues/observations/query';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postQueuesObservationsQuery = postQueuesObservationsQuery;
	/**
     * @summary Get domains
	 * @memberOf RoutingApi#
	*/
	function getEmailDomains(){
		var apipath = '/api/v2/routing/email/domains';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getEmailDomains = getEmailDomains;
	/**
     * @summary Create a domain
	 * @memberOf RoutingApi#
	* @param {} body - Domain
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "mxRecordStatus": "",
   "subDomain": true
}
	*/
	function postEmailDomains(body){
		var apipath = '/api/v2/routing/email/domains';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postEmailDomains = postEmailDomains;
	/**
     * @summary Get routes
	 * @memberOf RoutingApi#
	* @param {string} domain - email domain
	*/
	function getEmailDomainsDomainRoutes(domain){
		var apipath = '/api/v2/routing/email/domains/{domain}/routes';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{domain}', domain);

        if(domain === undefined && domain !== null){
			throw 'Missing required  parameter: domain';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getEmailDomainsDomainRoutes = getEmailDomainsDomainRoutes;
	/**
     * @summary Create a route
	 * @memberOf RoutingApi#
	* @param {string} domain - email domain
	* @param {} body - Route
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "pattern": "",
   "queue": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "priority": 0,
   "skills": [],
   "language": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "fromName": "",
   "fromEmail": ""
}
	*/
	function postEmailDomainsDomainRoutes(domain, body){
		var apipath = '/api/v2/routing/email/domains/{domain}/routes';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{domain}', domain);

        if(domain === undefined && domain !== null){
			throw 'Missing required  parameter: domain';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postEmailDomainsDomainRoutes = postEmailDomainsDomainRoutes;
	/**
     * @summary Get a route
	 * @memberOf RoutingApi#
	* @param {string} domain - email domain
	* @param {string} id - route ID
	*/
	function getEmailDomainsDomainRoutesId(domain, id){
		var apipath = '/api/v2/routing/email/domains/{domain}/routes/{id}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{domain}', domain);

        if(domain === undefined && domain !== null){
			throw 'Missing required  parameter: domain';
        }

        apipath = apipath.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getEmailDomainsDomainRoutesId = getEmailDomainsDomainRoutesId;
	/**
     * @summary Update a route
	 * @memberOf RoutingApi#
	* @param {string} domain - email domain
	* @param {string} id - route ID
	* @param {} body - Route
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "pattern": "",
   "queue": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "priority": 0,
   "skills": [],
   "language": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "fromName": "",
   "fromEmail": ""
}
	*/
	function putEmailDomainsDomainRoutesId(domain, id, body){
		var apipath = '/api/v2/routing/email/domains/{domain}/routes/{id}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{domain}', domain);

        if(domain === undefined && domain !== null){
			throw 'Missing required  parameter: domain';
        }

        apipath = apipath.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putEmailDomainsDomainRoutesId = putEmailDomainsDomainRoutesId;
	/**
     * @summary Delete a route
	 * @memberOf RoutingApi#
	* @param {string} domain - email domain
	* @param {string} id - route ID
	*/
	function deleteEmailDomainsDomainRoutesId(domain, id){
		var apipath = '/api/v2/routing/email/domains/{domain}/routes/{id}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{domain}', domain);

        if(domain === undefined && domain !== null){
			throw 'Missing required  parameter: domain';
        }

        apipath = apipath.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteEmailDomainsDomainRoutesId = deleteEmailDomainsDomainRoutesId;
	/**
     * @summary Delete a domain
	 * @memberOf RoutingApi#
	* @param {string} id - domain ID
	*/
	function deleteEmailDomainsId(id){
		var apipath = '/api/v2/routing/email/domains/{id}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteEmailDomainsId = deleteEmailDomainsId;
	/**
     * @summary Get email setup
	 * @memberOf RoutingApi#
	*/
	function getEmailSetup(){
		var apipath = '/api/v2/routing/email/setup';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getEmailSetup = getEmailSetup;
	/**
     * @summary Get list of queues.
	 * @memberOf RoutingApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} sortBy - Sort by
	* @param {string} name - Name
	* @param {boolean} active - Active
	*/
	function getQueues(pageSize, pageNumber, sortBy, name, active){
		var apipath = '/api/v2/routing/queues';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		if(name !== undefined && name !== null){
			queryParameters.name = name;
		}


		if(active !== undefined && active !== null){
			queryParameters.active = active;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getQueues = getQueues;
	/**
     * @summary Create queue
	 * @memberOf RoutingApi#
	* @param {} body - Queue
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "mediaSettings": {},
   "bullseye": {
      "rings": []
   },
   "acwSettings": {
      "wrapupPrompt": "",
      "timeoutMs": 0
   },
   "skillEvaluationMethod": "",
   "queueFlow": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "callingPartyName": "",
   "callingPartyNumber": "",
   "memberCount": 0
}
	*/
	function postQueues(body){
		var apipath = '/api/v2/routing/queues';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postQueues = postQueues;
	/**
     * @summary Get details about this queue.
	 * @memberOf RoutingApi#
	* @param {string} queueId - Queue ID
	*/
	function getQueuesQueueId(queueId){
		var apipath = '/api/v2/routing/queues/{queueId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{queueId}', queueId);

        if(queueId === undefined && queueId !== null){
			throw 'Missing required  parameter: queueId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getQueuesQueueId = getQueuesQueueId;
	/**
     * @summary Update a queue
	 * @memberOf RoutingApi#
	* @param {string} queueId - Queue ID
	* @param {} body - Queue
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "mediaSettings": {},
   "bullseye": {
      "rings": []
   },
   "acwSettings": {
      "wrapupPrompt": "",
      "timeoutMs": 0
   },
   "skillEvaluationMethod": "",
   "queueFlow": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "callingPartyName": "",
   "callingPartyNumber": "",
   "memberCount": 0
}
	*/
	function putQueuesQueueId(queueId, body){
		var apipath = '/api/v2/routing/queues/{queueId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{queueId}', queueId);

        if(queueId === undefined && queueId !== null){
			throw 'Missing required  parameter: queueId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putQueuesQueueId = putQueuesQueueId;
	/**
     * @summary Delete a queue
	 * @memberOf RoutingApi#
	* @param {string} queueId - Queue ID
	* @param {boolean} forceDelete - 
	*/
	function deleteQueuesQueueId(queueId, forceDelete){
		var apipath = '/api/v2/routing/queues/{queueId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{queueId}', queueId);

        if(queueId === undefined && queueId !== null){
			throw 'Missing required  parameter: queueId';
        }


		if(forceDelete !== undefined && forceDelete !== null){
			queryParameters.forceDelete = forceDelete;
		}


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteQueuesQueueId = deleteQueuesQueueId;
	/**
     * @summary Get Estimated Wait Time
	 * @memberOf RoutingApi#
	* @param {string} queueId - queueId
	* @param {string} conversationId - conversationId
	*/
	function getQueuesQueueIdEstimatedwaittime(queueId, conversationId){
		var apipath = '/api/v2/routing/queues/{queueId}/estimatedwaittime';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{queueId}', queueId);

        if(queueId === undefined && queueId !== null){
			throw 'Missing required  parameter: queueId';
        }


		if(conversationId !== undefined && conversationId !== null){
			queryParameters.conversationId = conversationId;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getQueuesQueueIdEstimatedwaittime = getQueuesQueueIdEstimatedwaittime;
	/**
     * @summary Get the members of this queue
	 * @memberOf RoutingApi#
	* @param {string} queueId - Queue ID
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} sortBy - Sort by
	* @param {string} expand - expand
	* @param {boolean} directMembers - Only get users that are direct members of the queue
	*/
	function getQueuesQueueIdUsers(queueId, pageSize, pageNumber, sortBy, expand, directMembers){
		var apipath = '/api/v2/routing/queues/{queueId}/users';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{queueId}', queueId);

        if(queueId === undefined && queueId !== null){
			throw 'Missing required  parameter: queueId';
        }


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		if(directMembers !== undefined && directMembers !== null){
			queryParameters.directMembers = directMembers;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getQueuesQueueIdUsers = getQueuesQueueIdUsers;
	/**
     * @summary Bulk add or delete up to 100 queue members
	 * @memberOf RoutingApi#
	* @param {string} queueId - Queue ID
	* @param {} body - Queue Members
	* @param {boolean} doDelete - True to delete queue members
	*/
	function postQueuesQueueIdUsers(queueId, body, doDelete){
		var apipath = '/api/v2/routing/queues/{queueId}/users';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{queueId}', queueId);

        if(queueId === undefined && queueId !== null){
			throw 'Missing required  parameter: queueId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		if(doDelete !== undefined && doDelete !== null){
			queryParameters.delete = doDelete;
		}


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postQueuesQueueIdUsers = postQueuesQueueIdUsers;
	/**
     * @summary Join or unjoin a set of users for a queue
	 * @memberOf RoutingApi#
	* @param {string} queueId - Queue ID
	* @param {} body - Queue Members
	*/
	function patchQueuesQueueIdUsers(queueId, body){
		var apipath = '/api/v2/routing/queues/{queueId}/users';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{queueId}', queueId);

        if(queueId === undefined && queueId !== null){
			throw 'Missing required  parameter: queueId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PATCH', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.patchQueuesQueueIdUsers = patchQueuesQueueIdUsers;
	/**
     * @summary Delete queue member
	 * @memberOf RoutingApi#
	* @param {string} queueId - Queue ID
	* @param {string} memberId - Member ID
	*/
	function deleteQueuesQueueIdUsersMemberId(queueId, memberId){
		var apipath = '/api/v2/routing/queues/{queueId}/users/{memberId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{queueId}', queueId);

        if(queueId === undefined && queueId !== null){
			throw 'Missing required  parameter: queueId';
        }

        apipath = apipath.replace('{memberId}', memberId);

        if(memberId === undefined && memberId !== null){
			throw 'Missing required  parameter: memberId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteQueuesQueueIdUsersMemberId = deleteQueuesQueueIdUsersMemberId;
	/**
     * @summary Update the ring number of joined status for a User in a Queue
	 * @memberOf RoutingApi#
	* @param {string} queueId - Queue ID
	* @param {string} memberId - Member ID
	* @param {} body - Queue Member
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "user": {
      "name": "",
      "chat": {},
      "department": "",
      "email": "",
      "addresses": [],
      "title": "",
      "username": "",
      "images": []
   },
   "ringNumber": 0,
   "joined": true,
   "memberBy": "",
   "routingStatus": {
      "userId": "",
      "status": "",
      "startTime": ""
   }
}
	*/
	function patchQueuesQueueIdUsersMemberId(queueId, memberId, body){
		var apipath = '/api/v2/routing/queues/{queueId}/users/{memberId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{queueId}', queueId);

        if(queueId === undefined && queueId !== null){
			throw 'Missing required  parameter: queueId';
        }

        apipath = apipath.replace('{memberId}', memberId);

        if(memberId === undefined && memberId !== null){
			throw 'Missing required  parameter: memberId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PATCH', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.patchQueuesQueueIdUsersMemberId = patchQueuesQueueIdUsersMemberId;
	/**
     * @summary Get the wrap-up codes for a queue
	 * @memberOf RoutingApi#
	* @param {string} queueId - Queue ID
	* @param {string} codeId - Code ID
	*/
	function getQueuesQueueIdWrapupcodes(queueId, codeId){
		var apipath = '/api/v2/routing/queues/{queueId}/wrapupcodes';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{queueId}', queueId);

        if(queueId === undefined && queueId !== null){
			throw 'Missing required  parameter: queueId';
        }

        apipath = apipath.replace('{codeId}', codeId);

        if(codeId === undefined && codeId !== null){
			throw 'Missing required  parameter: codeId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getQueuesQueueIdWrapupcodes = getQueuesQueueIdWrapupcodes;
	/**
     * @summary Add up to 100 wrap-up codes to a queue
	 * @memberOf RoutingApi#
	* @param {string} queueId - Queue ID
	* @param {string} codeId - Code ID
	* @param {} body - 
	*/
	function postQueuesQueueIdWrapupcodes(queueId, codeId, body){
		var apipath = '/api/v2/routing/queues/{queueId}/wrapupcodes';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{queueId}', queueId);

        if(queueId === undefined && queueId !== null){
			throw 'Missing required  parameter: queueId';
        }

        apipath = apipath.replace('{codeId}', codeId);

        if(codeId === undefined && codeId !== null){
			throw 'Missing required  parameter: codeId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postQueuesQueueIdWrapupcodes = postQueuesQueueIdWrapupcodes;
	/**
     * @summary Delete a wrap-up code from a queue
	 * @memberOf RoutingApi#
	* @param {string} queueId - Queue ID
	* @param {string} codeId - Code ID
	*/
	function deleteQueuesQueueIdWrapupcodesCodeId(queueId, codeId){
		var apipath = '/api/v2/routing/queues/{queueId}/wrapupcodes/{codeId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{queueId}', queueId);

        if(queueId === undefined && queueId !== null){
			throw 'Missing required  parameter: queueId';
        }

        apipath = apipath.replace('{codeId}', codeId);

        if(codeId === undefined && codeId !== null){
			throw 'Missing required  parameter: codeId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteQueuesQueueIdWrapupcodesCodeId = deleteQueuesQueueIdWrapupcodesCodeId;
	/**
     * @summary Get the list of routing skills.
	 * @memberOf RoutingApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	*/
	function getSkills(pageSize, pageNumber){
		var apipath = '/api/v2/routing/skills';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getSkills = getSkills;
	/**
     * @summary Create Skill
	 * @memberOf RoutingApi#
	* @param {} body - Skill
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "dateModified": "",
   "proficiency": ""
}
	*/
	function postSkills(body){
		var apipath = '/api/v2/routing/skills';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postSkills = postSkills;
	/**
     * @summary Get Routing Skill
	 * @memberOf RoutingApi#
	* @param {string} skillId - Skill ID
	*/
	function getSkillsSkillId(skillId){
		var apipath = '/api/v2/routing/skills/{skillId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{skillId}', skillId);

        if(skillId === undefined && skillId !== null){
			throw 'Missing required  parameter: skillId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getSkillsSkillId = getSkillsSkillId;
	/**
     * @summary Update Routing Skill
	 * @memberOf RoutingApi#
	* @param {string} skillId - Skill ID
	* @param {} body - Skill
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "dateModified": "",
   "proficiency": ""
}
	*/
	function putSkillsSkillId(skillId, body){
		var apipath = '/api/v2/routing/skills/{skillId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{skillId}', skillId);

        if(skillId === undefined && skillId !== null){
			throw 'Missing required  parameter: skillId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putSkillsSkillId = putSkillsSkillId;
	/**
     * @summary Delete Routing Skill
	 * @memberOf RoutingApi#
	* @param {string} skillId - Skill ID
	*/
	function deleteSkillsSkillId(skillId){
		var apipath = '/api/v2/routing/skills/{skillId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{skillId}', skillId);

        if(skillId === undefined && skillId !== null){
			throw 'Missing required  parameter: skillId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteSkillsSkillId = deleteSkillsSkillId;
	/**
     * @summary Get the utilization settings.
	 * @memberOf RoutingApi#
	*/
	function getUtilization(){
		var apipath = '/api/v2/routing/utilization';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getUtilization = getUtilization;
	/**
     * @summary Update the utilization settings.
	 * @memberOf RoutingApi#
	* @param {} body - utilization
	 * @example
	 * Body Example:
	 * {
   "utilization": {}
}
	*/
	function putUtilization(body){
		var apipath = '/api/v2/routing/utilization';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putUtilization = putUtilization;
	/**
     * @summary Delete utilization settings and revert to system defaults.
	 * @memberOf RoutingApi#
	*/
	function deleteUtilization(){
		var apipath = '/api/v2/routing/utilization';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteUtilization = deleteUtilization;
	/**
     * @summary Get list of wrapup codes.
	 * @memberOf RoutingApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} sortBy - Sort by
	*/
	function getWrapupcodes(pageSize, pageNumber, sortBy){
		var apipath = '/api/v2/routing/wrapupcodes';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getWrapupcodes = getWrapupcodes;
	/**
     * @summary Create a wrap-up code
	 * @memberOf RoutingApi#
	* @param {} body - WrapupCode
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": ""
}
	*/
	function postWrapupcodes(body){
		var apipath = '/api/v2/routing/wrapupcodes';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postWrapupcodes = postWrapupcodes;
	/**
     * @summary Get details about this wrap-up code.
	 * @memberOf RoutingApi#
	* @param {string} codeId - Wrapup Code ID
	*/
	function getWrapupcodesCodeId(codeId){
		var apipath = '/api/v2/routing/wrapupcodes/{codeId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{codeId}', codeId);

        if(codeId === undefined && codeId !== null){
			throw 'Missing required  parameter: codeId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getWrapupcodesCodeId = getWrapupcodesCodeId;
	/**
     * @summary Update wrap-up code
	 * @memberOf RoutingApi#
	* @param {string} codeId - Wrapup Code ID
	* @param {} body - WrapupCode
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": ""
}
	*/
	function putWrapupcodesCodeId(codeId, body){
		var apipath = '/api/v2/routing/wrapupcodes/{codeId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{codeId}', codeId);

        if(codeId === undefined && codeId !== null){
			throw 'Missing required  parameter: codeId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putWrapupcodesCodeId = putWrapupcodesCodeId;
	/**
     * @summary Delete wrap-up code
	 * @memberOf RoutingApi#
	* @param {string} codeId - Wrapup Code ID
	*/
	function deleteWrapupcodesCodeId(codeId){
		var apipath = '/api/v2/routing/wrapupcodes/{codeId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{codeId}', codeId);

        if(codeId === undefined && codeId !== null){
			throw 'Missing required  parameter: codeId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteWrapupcodesCodeId = deleteWrapupcodesCodeId;
	/**
     * @summary List routing skills for user
	 * @memberOf RoutingApi#
	* @param {string} userId - User ID
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} sortOrder - Ascending or descending sort order
	[ascending,
	descending],
	*/
	function getUserIdRoutingskills(userId, pageSize, pageNumber, sortOrder){
		var apipath = '/api/v2/users/{userId}/routingskills';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{userId}', userId);

        if(userId === undefined && userId !== null){
			throw 'Missing required  parameter: userId';
        }


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(sortOrder !== undefined && sortOrder !== null){
			queryParameters.sortOrder = sortOrder;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getUserIdRoutingskills = getUserIdRoutingskills;
	/**
     * @summary Add routing skill to user
	 * @memberOf RoutingApi#
	* @param {string} userId - User ID
	* @param {} body - Skill
	 * @example
	 * Body Example:
	 * {
   "name": ""
}
	*/
	function postUserIdRoutingskills(userId, body){
		var apipath = '/api/v2/users/{userId}/routingskills';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{userId}', userId);

        if(userId === undefined && userId !== null){
			throw 'Missing required  parameter: userId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postUserIdRoutingskills = postUserIdRoutingskills;
	/**
     * @summary Remove routing skill from user
	 * @memberOf RoutingApi#
	* @param {string} userId - User ID
	* @param {string} skillId - 
	*/
	function deleteUserIdRoutingskillsSkillId(userId, skillId){
		var apipath = '/api/v2/users/{userId}/routingskills/{skillId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{userId}', userId);

        if(userId === undefined && userId !== null){
			throw 'Missing required  parameter: userId';
        }

        apipath = apipath.replace('{skillId}', skillId);

        if(skillId === undefined && skillId !== null){
			throw 'Missing required  parameter: skillId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteUserIdRoutingskillsSkillId = deleteUserIdRoutingskillsSkillId;

    return self;
};

//API VERSION - 
/**
* @class
* @example
* var api = new SearchApi(pureCloudSession);
*/
var SearchApi = function (pureCloudSession) {
	if(!pureCloudSession){
		throw "PureCloudSession is not valid.";
    }

	var self = this;
	/**
     * @summary Search using q64
	 * @memberOf SearchApi#
	* @param {string} q64 - 
	* @param {array} expand - 
	*/
	function getSearch(q64, expand){
		var apipath = '/api/v2/groups/search';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(q64 !== undefined && q64 !== null){
			queryParameters.q64 = q64;
		}


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getSearch = getSearch;
	/**
     * @summary Search
	 * @memberOf SearchApi#
	* @param {} body - Search request options
	 * @example
	 * Body Example:
	 * {
   "types": [],
   "sortOrder": "",
   "query": [],
   "sortBy": "",
   "pageSize": 0,
   "pageNumber": 0,
   "returnFields": [],
   "aggregations": [],
   "expand": []
}
	*/
	function postSearch(body){
		var apipath = '/api/v2/groups/search';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postSearch = postSearch;
	/**
     * @summary Search using q64
	 * @memberOf SearchApi#
	* @param {string} q64 - 
	* @param {array} expand - 
	*/
	function getSearch(q64, expand){
		var apipath = '/api/v2/search';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(q64 !== undefined && q64 !== null){
			queryParameters.q64 = q64;
		}


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getSearch = getSearch;
	/**
     * @summary Search
	 * @memberOf SearchApi#
	* @param {} body - Search request options
	 * @example
	 * Body Example:
	 * {
   "types": [],
   "sortOrder": "",
   "query": [],
   "sortBy": "",
   "pageSize": 0,
   "pageNumber": 0,
   "returnFields": [],
   "aggregations": [],
   "expand": []
}
	*/
	function postSearch(body){
		var apipath = '/api/v2/search';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postSearch = postSearch;
	/**
     * @summary Search using q64
	 * @memberOf SearchApi#
	* @param {string} q64 - 
	* @param {array} expand - 
	*/
	function getSearch(q64, expand){
		var apipath = '/api/v2/users/search';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(q64 !== undefined && q64 !== null){
			queryParameters.q64 = q64;
		}


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getSearch = getSearch;
	/**
     * @summary Search
	 * @memberOf SearchApi#
	* @param {} body - Search request options
	 * @example
	 * Body Example:
	 * {
   "types": [],
   "sortOrder": "",
   "query": [],
   "sortBy": "",
   "pageSize": 0,
   "pageNumber": 0,
   "returnFields": [],
   "aggregations": [],
   "expand": []
}
	*/
	function postSearch(body){
		var apipath = '/api/v2/users/search';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postSearch = postSearch;

    return self;
};

//API VERSION - 
/**
* @class
* @example
* var api = new StationsApi(pureCloudSession);
*/
var StationsApi = function (pureCloudSession) {
	if(!pureCloudSession){
		throw "PureCloudSession is not valid.";
    }

	var self = this;
	/**
     * @summary Get the list of available stations.
	 * @memberOf StationsApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} sortBy - Sort by
	* @param {string} name - Name
	*/
	function getStations(pageSize, pageNumber, sortBy, name){
		var apipath = '/api/v2/stations';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		if(name !== undefined && name !== null){
			queryParameters.name = name;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getStations = getStations;
	/**
     * @summary Get station.
	 * @memberOf StationsApi#
	* @param {string} id - Station ID
	*/
	function getId(id){
		var apipath = '/api/v2/stations/{id}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getId = getId;
	/**
     * @summary Unassigns the user assigned to this station
	 * @memberOf StationsApi#
	* @param {string} id - Station ID
	*/
	function deleteIdAssociateduser(id){
		var apipath = '/api/v2/stations/{id}/associateduser';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{id}', id);

        if(id === undefined && id !== null){
			throw 'Missing required  parameter: id';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteIdAssociateduser = deleteIdAssociateduser;

    return self;
};

//API VERSION - 
/**
* @class
* @example
* var api = new TelephonyProvidersEdgeApi(pureCloudSession);
*/
var TelephonyProvidersEdgeApi = function (pureCloudSession) {
	if(!pureCloudSession){
		throw "PureCloudSession is not valid.";
    }

	var self = this;
	/**
     * @summary Lists available schema categories
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	*/
	function getSchemasEdgesVnext(pageSize, pageNumber){
		var apipath = '/api/v2/configuration/schemas/edges/vnext';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getSchemasEdgesVnext = getSchemasEdgesVnext;
	/**
     * @summary List schemas of a specific category
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {string} schemaCategory - Schema category
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	*/
	function getSchemasEdgesVnextSchemacategory(schemaCategory, pageSize, pageNumber){
		var apipath = '/api/v2/configuration/schemas/edges/vnext/{schemaCategory}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{schemaCategory}', schemaCategory);

        if(schemaCategory === undefined && schemaCategory !== null){
			throw 'Missing required  parameter: schemaCategory';
        }


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getSchemasEdgesVnextSchemacategory = getSchemasEdgesVnextSchemacategory;
	/**
     * @summary List schemas of a specific category
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {string} schemaCategory - Schema category
	* @param {string} schemaType - Schema type
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	*/
	function getSchemasEdgesVnextSchemacategorySchematype(schemaCategory, schemaType, pageSize, pageNumber){
		var apipath = '/api/v2/configuration/schemas/edges/vnext/{schemaCategory}/{schemaType}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{schemaCategory}', schemaCategory);

        if(schemaCategory === undefined && schemaCategory !== null){
			throw 'Missing required  parameter: schemaCategory';
        }

        apipath = apipath.replace('{schemaType}', schemaType);

        if(schemaType === undefined && schemaType !== null){
			throw 'Missing required  parameter: schemaType';
        }


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getSchemasEdgesVnextSchemacategorySchematype = getSchemasEdgesVnextSchemacategorySchematype;
	/**
     * @summary Get a json schema
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {string} schemaCategory - Schema category
	* @param {string} schemaType - Schema type
	* @param {string} schemaId - Schema ID
	*/
	function getSchemasEdgesVnextSchemacategorySchematypeSchemaId(schemaCategory, schemaType, schemaId){
		var apipath = '/api/v2/configuration/schemas/edges/vnext/{schemaCategory}/{schemaType}/{schemaId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{schemaCategory}', schemaCategory);

        if(schemaCategory === undefined && schemaCategory !== null){
			throw 'Missing required  parameter: schemaCategory';
        }

        apipath = apipath.replace('{schemaType}', schemaType);

        if(schemaType === undefined && schemaType !== null){
			throw 'Missing required  parameter: schemaType';
        }

        apipath = apipath.replace('{schemaId}', schemaId);

        if(schemaId === undefined && schemaId !== null){
			throw 'Missing required  parameter: schemaId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getSchemasEdgesVnextSchemacategorySchematypeSchemaId = getSchemasEdgesVnextSchemacategorySchematypeSchemaId;
	/**
     * @summary Get metadata for a schema
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {string} schemaCategory - Schema category
	* @param {string} schemaType - Schema type
	* @param {string} schemaId - Schema ID
	* @param {string} extension - extension
	* @param {string} metadataId - Metadata ID
	* @param {string} type - Type
	*/
	function getSchemasEdgesVnextSchemacategorySchematypeSchemaIdExtensionMetadataId(schemaCategory, schemaType, schemaId, extension, metadataId, type){
		var apipath = '/api/v2/configuration/schemas/edges/vnext/{schemaCategory}/{schemaType}/{schemaId}/{extension}/{metadataId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{schemaCategory}', schemaCategory);

        if(schemaCategory === undefined && schemaCategory !== null){
			throw 'Missing required  parameter: schemaCategory';
        }

        apipath = apipath.replace('{schemaType}', schemaType);

        if(schemaType === undefined && schemaType !== null){
			throw 'Missing required  parameter: schemaType';
        }

        apipath = apipath.replace('{schemaId}', schemaId);

        if(schemaId === undefined && schemaId !== null){
			throw 'Missing required  parameter: schemaId';
        }

        apipath = apipath.replace('{extension}', extension);

        if(extension === undefined && extension !== null){
			throw 'Missing required  parameter: extension';
        }

        apipath = apipath.replace('{metadataId}', metadataId);

        if(metadataId === undefined && metadataId !== null){
			throw 'Missing required  parameter: metadataId';
        }


		if(type !== undefined && type !== null){
			queryParameters.type = type;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getSchemasEdgesVnextSchemacategorySchematypeSchemaIdExtensionMetadataId = getSchemasEdgesVnextSchemacategorySchematypeSchemaIdExtensionMetadataId;
	/**
     * @summary Get the list of edges.
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} name - Name
	* @param {string} siteid - Filter by site.id
	* @param {string} edgeGroupid - Filter by edgeGroup.id
	* @param {string} sortBy - Sort by
	*/
	function getProvidersEdges(pageSize, pageNumber, name, siteid, edgeGroupid, sortBy){
		var apipath = '/api/v2/telephony/providers/edges';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(name !== undefined && name !== null){
			queryParameters.name = name;
		}


		if(siteid !== undefined && siteid !== null){
			queryParameters.site.id = siteid;
		}


		if(edgeGroupid !== undefined && edgeGroupid !== null){
			queryParameters.edgeGroup.id = edgeGroupid;
		}


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getProvidersEdges = getProvidersEdges;
	/**
     * @summary Create a edge.
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {} body - Edge
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "interfaces": [],
   "make": "",
   "model": "",
   "apiVersion": "",
   "softwareVersion": "",
   "softwareVersionTimestamp": "",
   "softwareVersionPlatform": "",
   "softwareVersionConfiguration": "",
   "fullSoftwareVersion": "",
   "pairingId": "",
   "fingerprint": "",
   "fingerprintHint": "",
   "currentVersion": "",
   "stagedVersion": "",
   "patch": "",
   "statusCode": "",
   "edgeGroup": {
      "name": "",
      "description": "",
      "version": 0,
      "dateCreated": "",
      "dateModified": "",
      "modifiedBy": "",
      "createdBy": "",
      "state": "",
      "modifiedByApp": "",
      "createdByApp": "",
      "managed": true,
      "edgeTrunkBaseAssignment": {},
      "phoneTrunkBaseAssignments": []
   },
   "site": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "softwareStatus": {
      "version": {},
      "maxDownloadRate": 0,
      "downloadStartTime": "",
      "executeStartTime": "",
      "executeStopTime": "",
      "executeOnIdle": true,
      "status": "",
      "edgeUri": "",
      "current": true
   },
   "onlineStatus": "",
   "serialNumber": "",
   "physicalEdge": true,
   "managed": true
}
	*/
	function postProvidersEdges(body){
		var apipath = '/api/v2/telephony/providers/edges';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postProvidersEdges = postProvidersEdges;
	/**
     * @summary Validates a street address
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "address": {
      "country": "",
      "A1": "",
      "A3": "",
      "RD": "",
      "HNO": "",
      "LOC": "",
      "NAM": "",
      "PC": ""
   }
}
	*/
	function postProvidersEdgesAddressvalidation(body){
		var apipath = '/api/v2/telephony/providers/edges/addressvalidation';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postProvidersEdgesAddressvalidation = postProvidersEdgesAddressvalidation;
	/**
     * @summary Get the list of certificate authorities.
	 * @memberOf TelephonyProvidersEdgeApi#
	*/
	function getProvidersEdgesCertificateauthorities(){
		var apipath = '/api/v2/telephony/providers/edges/certificateauthorities';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getProvidersEdgesCertificateauthorities = getProvidersEdgesCertificateauthorities;
	/**
     * @summary Create a certificate authority.
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {} body - CertificateAuthority
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "certificate": "",
   "type": "",
   "services": [],
   "certificateDetails": []
}
	*/
	function postProvidersEdgesCertificateauthorities(body){
		var apipath = '/api/v2/telephony/providers/edges/certificateauthorities';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postProvidersEdgesCertificateauthorities = postProvidersEdgesCertificateauthorities;
	/**
     * @summary Get a certificate authority.
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {string} certificateId - Certificate ID
	*/
	function getProvidersEdgesCertificateauthoritiesCertificateId(certificateId){
		var apipath = '/api/v2/telephony/providers/edges/certificateauthorities/{certificateId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{certificateId}', certificateId);

        if(certificateId === undefined && certificateId !== null){
			throw 'Missing required  parameter: certificateId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getProvidersEdgesCertificateauthoritiesCertificateId = getProvidersEdgesCertificateauthoritiesCertificateId;
	/**
     * @summary Update a certificate authority.
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {string} certificateId - Certificate ID
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "certificate": "",
   "type": "",
   "services": [],
   "certificateDetails": []
}
	*/
	function putProvidersEdgesCertificateauthoritiesCertificateId(certificateId, body){
		var apipath = '/api/v2/telephony/providers/edges/certificateauthorities/{certificateId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{certificateId}', certificateId);

        if(certificateId === undefined && certificateId !== null){
			throw 'Missing required  parameter: certificateId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putProvidersEdgesCertificateauthoritiesCertificateId = putProvidersEdgesCertificateauthoritiesCertificateId;
	/**
     * @summary Delete a certificate authority.
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {string} certificateId - Certificate ID
	*/
	function deleteProvidersEdgesCertificateauthoritiesCertificateId(certificateId){
		var apipath = '/api/v2/telephony/providers/edges/certificateauthorities/{certificateId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{certificateId}', certificateId);

        if(certificateId === undefined && certificateId !== null){
			throw 'Missing required  parameter: certificateId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteProvidersEdgesCertificateauthoritiesCertificateId = deleteProvidersEdgesCertificateauthoritiesCertificateId;
	/**
     * @summary Get a listing of DID Pools
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} sortBy - Sort by
	*/
	function getProvidersEdgesDidpools(pageSize, pageNumber, sortBy){
		var apipath = '/api/v2/telephony/providers/edges/didpools';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getProvidersEdgesDidpools = getProvidersEdgesDidpools;
	/**
     * @summary Create a new DID pool
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "startPhoneNumber": "",
   "endPhoneNumber": "",
   "comments": "",
   "provider": ""
}
	*/
	function postProvidersEdgesDidpools(body){
		var apipath = '/api/v2/telephony/providers/edges/didpools';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postProvidersEdgesDidpools = postProvidersEdgesDidpools;
	/**
     * @summary Get a DID Pool by ID.
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {string} didPoolId - DID pool ID
	*/
	function getProvidersEdgesDidpoolsDidpoolId(didPoolId){
		var apipath = '/api/v2/telephony/providers/edges/didpools/{didPoolId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{didPoolId}', didPoolId);

        if(didPoolId === undefined && didPoolId !== null){
			throw 'Missing required  parameter: didPoolId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getProvidersEdgesDidpoolsDidpoolId = getProvidersEdgesDidpoolsDidpoolId;
	/**
     * @summary Update a DID Pool by ID.
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {string} didPoolId - DID pool ID
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "startPhoneNumber": "",
   "endPhoneNumber": "",
   "comments": "",
   "provider": ""
}
	*/
	function putProvidersEdgesDidpoolsDidpoolId(didPoolId, body){
		var apipath = '/api/v2/telephony/providers/edges/didpools/{didPoolId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{didPoolId}', didPoolId);

        if(didPoolId === undefined && didPoolId !== null){
			throw 'Missing required  parameter: didPoolId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putProvidersEdgesDidpoolsDidpoolId = putProvidersEdgesDidpoolsDidpoolId;
	/**
     * @summary Delete a DID Pool by ID.
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {string} didPoolId - DID pool ID
	*/
	function deleteProvidersEdgesDidpoolsDidpoolId(didPoolId){
		var apipath = '/api/v2/telephony/providers/edges/didpools/{didPoolId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{didPoolId}', didPoolId);

        if(didPoolId === undefined && didPoolId !== null){
			throw 'Missing required  parameter: didPoolId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteProvidersEdgesDidpoolsDidpoolId = deleteProvidersEdgesDidpoolsDidpoolId;
	/**
     * @summary Get a listing of DIDs
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} sortBy - Sort by
	* @param {string} sortOrder - Sort order
	* @param {string} phoneNumber - Filter by phoneNumber
	*/
	function getProvidersEdgesDids(pageSize, pageNumber, sortBy, sortOrder, phoneNumber){
		var apipath = '/api/v2/telephony/providers/edges/dids';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		if(sortOrder !== undefined && sortOrder !== null){
			queryParameters.sortOrder = sortOrder;
		}


		if(phoneNumber !== undefined && phoneNumber !== null){
			queryParameters.phoneNumber = phoneNumber;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getProvidersEdgesDids = getProvidersEdgesDids;
	/**
     * @summary Get a DID by ID.
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {string} didId - DID ID
	*/
	function getProvidersEdgesDidsDidId(didId){
		var apipath = '/api/v2/telephony/providers/edges/dids/{didId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{didId}', didId);

        if(didId === undefined && didId !== null){
			throw 'Missing required  parameter: didId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getProvidersEdgesDidsDidId = getProvidersEdgesDidsDidId;
	/**
     * @summary Update a DID by ID.
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {string} didId - DID ID
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "phoneNumber": "",
   "didPool": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "owner": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "ownerType": ""
}
	*/
	function putProvidersEdgesDidsDidId(didId, body){
		var apipath = '/api/v2/telephony/providers/edges/dids/{didId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{didId}', didId);

        if(didId === undefined && didId !== null){
			throw 'Missing required  parameter: didId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putProvidersEdgesDidsDidId = putProvidersEdgesDidsDidId;
	/**
     * @summary Get the list of edge groups.
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} name - Name
	* @param {string} sortBy - Sort by
	*/
	function getProvidersEdgesEdgegroups(pageSize, pageNumber, name, sortBy){
		var apipath = '/api/v2/telephony/providers/edges/edgegroups';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(name !== undefined && name !== null){
			queryParameters.name = name;
		}


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getProvidersEdgesEdgegroups = getProvidersEdgesEdgegroups;
	/**
     * @summary Create an edge group.
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {} body - EdgeGroup
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "managed": true,
   "edgeTrunkBaseAssignment": {
      "family": 0,
      "trunkBase": {}
   },
   "phoneTrunkBaseAssignments": []
}
	*/
	function postProvidersEdgesEdgegroups(body){
		var apipath = '/api/v2/telephony/providers/edges/edgegroups';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postProvidersEdgesEdgegroups = postProvidersEdgesEdgegroups;
	/**
     * @summary Get edge group.
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {string} edgeGroupId - Edge group ID
	*/
	function getProvidersEdgesEdgegroupsEdgegroupId(edgeGroupId){
		var apipath = '/api/v2/telephony/providers/edges/edgegroups/{edgeGroupId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{edgeGroupId}', edgeGroupId);

        if(edgeGroupId === undefined && edgeGroupId !== null){
			throw 'Missing required  parameter: edgeGroupId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getProvidersEdgesEdgegroupsEdgegroupId = getProvidersEdgesEdgegroupsEdgegroupId;
	/**
     * @summary Update an edge group.
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {string} edgeGroupId - Edge group ID
	* @param {} body - EdgeGroup
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "managed": true,
   "edgeTrunkBaseAssignment": {
      "family": 0,
      "trunkBase": {}
   },
   "phoneTrunkBaseAssignments": []
}
	*/
	function putProvidersEdgesEdgegroupsEdgegroupId(edgeGroupId, body){
		var apipath = '/api/v2/telephony/providers/edges/edgegroups/{edgeGroupId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{edgeGroupId}', edgeGroupId);

        if(edgeGroupId === undefined && edgeGroupId !== null){
			throw 'Missing required  parameter: edgeGroupId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putProvidersEdgesEdgegroupsEdgegroupId = putProvidersEdgesEdgegroupsEdgegroupId;
	/**
     * @summary Delete an edge group.
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {string} edgeGroupId - Edge group ID
	*/
	function deleteProvidersEdgesEdgegroupsEdgegroupId(edgeGroupId){
		var apipath = '/api/v2/telephony/providers/edges/edgegroups/{edgeGroupId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{edgeGroupId}', edgeGroupId);

        if(edgeGroupId === undefined && edgeGroupId !== null){
			throw 'Missing required  parameter: edgeGroupId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteProvidersEdgesEdgegroupsEdgegroupId = deleteProvidersEdgesEdgegroupsEdgegroupId;
	/**
     * @summary Get the edge version report.
	 * @description The report will not have consistent data about the edge version(s) until all edges have been reset.
	 * @memberOf TelephonyProvidersEdgeApi#
	*/
	function getProvidersEdgesEdgeversionreport(){
		var apipath = '/api/v2/telephony/providers/edges/edgeversionreport';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getProvidersEdgesEdgeversionreport = getProvidersEdgesEdgeversionreport;
	/**
     * @summary Get endpoints
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} name - Name
	* @param {string} sortBy - Sort by
	*/
	function getProvidersEdgesEndpoints(pageSize, pageNumber, name, sortBy){
		var apipath = '/api/v2/telephony/providers/edges/endpoints';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(name !== undefined && name !== null){
			queryParameters.name = name;
		}


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getProvidersEdgesEndpoints = getProvidersEdgesEndpoints;
	/**
     * @summary Create endpoint
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {} body - EndpointTemplate
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "count": 0,
   "properties": {},
   "schema": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "enabled": true,
   "site": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "dids": []
}
	*/
	function postProvidersEdgesEndpoints(body){
		var apipath = '/api/v2/telephony/providers/edges/endpoints';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postProvidersEdgesEndpoints = postProvidersEdgesEndpoints;
	/**
     * @summary Get endpoint
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {string} endpointId - Endpoint ID
	*/
	function getProvidersEdgesEndpointsEndpointId(endpointId){
		var apipath = '/api/v2/telephony/providers/edges/endpoints/{endpointId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{endpointId}', endpointId);

        if(endpointId === undefined && endpointId !== null){
			throw 'Missing required  parameter: endpointId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getProvidersEdgesEndpointsEndpointId = getProvidersEdgesEndpointsEndpointId;
	/**
     * @summary Update endpoint
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {string} endpointId - Endpoint ID
	* @param {} body - EndpointTemplate
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "count": 0,
   "properties": {},
   "schema": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "enabled": true,
   "site": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "dids": []
}
	*/
	function putProvidersEdgesEndpointsEndpointId(endpointId, body){
		var apipath = '/api/v2/telephony/providers/edges/endpoints/{endpointId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{endpointId}', endpointId);

        if(endpointId === undefined && endpointId !== null){
			throw 'Missing required  parameter: endpointId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putProvidersEdgesEndpointsEndpointId = putProvidersEdgesEndpointsEndpointId;
	/**
     * @summary Delete endpoint
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {string} endpointId - Endpoint ID
	*/
	function deleteProvidersEdgesEndpointsEndpointId(endpointId){
		var apipath = '/api/v2/telephony/providers/edges/endpoints/{endpointId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{endpointId}', endpointId);

        if(endpointId === undefined && endpointId !== null){
			throw 'Missing required  parameter: endpointId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteProvidersEdgesEndpointsEndpointId = deleteProvidersEdgesEndpointsEndpointId;
	/**
     * @summary Get a listing of extension pools
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} sortBy - Sort by
	* @param {string} number - Number
	*/
	function getProvidersEdgesExtensionpools(pageSize, pageNumber, sortBy, number){
		var apipath = '/api/v2/telephony/providers/edges/extensionpools';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		if(number !== undefined && number !== null){
			queryParameters.number = number;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getProvidersEdgesExtensionpools = getProvidersEdgesExtensionpools;
	/**
     * @summary Create a new extension pool
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {} body - ExtensionPool
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "startNumber": "",
   "endNumber": ""
}
	*/
	function postProvidersEdgesExtensionpools(body){
		var apipath = '/api/v2/telephony/providers/edges/extensionpools';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postProvidersEdgesExtensionpools = postProvidersEdgesExtensionpools;
	/**
     * @summary Get an extension pool by ID
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {string} extensionPoolId - Extension pool ID
	*/
	function getProvidersEdgesExtensionpoolsExtensionpoolId(extensionPoolId){
		var apipath = '/api/v2/telephony/providers/edges/extensionpools/{extensionPoolId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{extensionPoolId}', extensionPoolId);

        if(extensionPoolId === undefined && extensionPoolId !== null){
			throw 'Missing required  parameter: extensionPoolId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getProvidersEdgesExtensionpoolsExtensionpoolId = getProvidersEdgesExtensionpoolsExtensionpoolId;
	/**
     * @summary Update an extension pool by ID
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {string} extensionPoolId - Extension pool ID
	* @param {} body - ExtensionPool
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "startNumber": "",
   "endNumber": ""
}
	*/
	function putProvidersEdgesExtensionpoolsExtensionpoolId(extensionPoolId, body){
		var apipath = '/api/v2/telephony/providers/edges/extensionpools/{extensionPoolId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{extensionPoolId}', extensionPoolId);

        if(extensionPoolId === undefined && extensionPoolId !== null){
			throw 'Missing required  parameter: extensionPoolId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putProvidersEdgesExtensionpoolsExtensionpoolId = putProvidersEdgesExtensionpoolsExtensionpoolId;
	/**
     * @summary Delete an extension pool by ID
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {string} extensionPoolId - Extension pool ID
	*/
	function deleteProvidersEdgesExtensionpoolsExtensionpoolId(extensionPoolId){
		var apipath = '/api/v2/telephony/providers/edges/extensionpools/{extensionPoolId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{extensionPoolId}', extensionPoolId);

        if(extensionPoolId === undefined && extensionPoolId !== null){
			throw 'Missing required  parameter: extensionPoolId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteProvidersEdgesExtensionpoolsExtensionpoolId = deleteProvidersEdgesExtensionpoolsExtensionpoolId;
	/**
     * @summary Get a listing of extensions
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} sortBy - Sort by
	* @param {string} sortOrder - Sort order
	* @param {string} number - Filter by number
	*/
	function getProvidersEdgesExtensions(pageSize, pageNumber, sortBy, sortOrder, number){
		var apipath = '/api/v2/telephony/providers/edges/extensions';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		if(sortOrder !== undefined && sortOrder !== null){
			queryParameters.sortOrder = sortOrder;
		}


		if(number !== undefined && number !== null){
			queryParameters.number = number;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getProvidersEdgesExtensions = getProvidersEdgesExtensions;
	/**
     * @summary Get an extension by ID.
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {string} extensionId - Extension ID
	*/
	function getProvidersEdgesExtensionsExtensionId(extensionId){
		var apipath = '/api/v2/telephony/providers/edges/extensions/{extensionId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{extensionId}', extensionId);

        if(extensionId === undefined && extensionId !== null){
			throw 'Missing required  parameter: extensionId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getProvidersEdgesExtensionsExtensionId = getProvidersEdgesExtensionsExtensionId;
	/**
     * @summary Update an extension by ID.
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {string} extensionId - Extension ID
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "number": "",
   "owner": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "extensionPool": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "ownerType": ""
}
	*/
	function putProvidersEdgesExtensionsExtensionId(extensionId, body){
		var apipath = '/api/v2/telephony/providers/edges/extensions/{extensionId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{extensionId}', extensionId);

        if(extensionId === undefined && extensionId !== null){
			throw 'Missing required  parameter: extensionId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putProvidersEdgesExtensionsExtensionId = putProvidersEdgesExtensionsExtensionId;
	/**
     * @summary Get a listing of line base settings objects
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {integer} pageNumber - Page number
	* @param {integer} pageSize - Page size
	* @param {string} sortBy - Value by which to sort
	* @param {string} sortOrder - Sort order
	*/
	function getProvidersEdgesLinebasesettings(pageNumber, pageSize, sortBy, sortOrder){
		var apipath = '/api/v2/telephony/providers/edges/linebasesettings';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		if(sortOrder !== undefined && sortOrder !== null){
			queryParameters.sortOrder = sortOrder;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getProvidersEdgesLinebasesettings = getProvidersEdgesLinebasesettings;
	/**
     * @summary Get a line base settings object by ID
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {string} lineBaseId - Line base ID
	*/
	function getProvidersEdgesLinebasesettingsLinebaseId(lineBaseId){
		var apipath = '/api/v2/telephony/providers/edges/linebasesettings/{lineBaseId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{lineBaseId}', lineBaseId);

        if(lineBaseId === undefined && lineBaseId !== null){
			throw 'Missing required  parameter: lineBaseId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getProvidersEdgesLinebasesettingsLinebaseId = getProvidersEdgesLinebasesettingsLinebaseId;
	/**
     * @summary Get a list of Lines
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} name - Name
	* @param {string} sortBy - Value by which to sort
	* @param {array} expand - Fields to expand in the response, comma-separated
	*/
	function getProvidersEdgesLines(pageSize, pageNumber, name, sortBy, expand){
		var apipath = '/api/v2/telephony/providers/edges/lines';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(name !== undefined && name !== null){
			queryParameters.name = name;
		}


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getProvidersEdgesLines = getProvidersEdgesLines;
	/**
     * @summary Get a Line instance template based on a Line Base Settings object. This object can then be modified and saved as a new Line instance
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {string} lineBaseSettingsId - The id of a Line Base Settings object upon which to base this Line
	*/
	function getProvidersEdgesLinesTemplate(lineBaseSettingsId){
		var apipath = '/api/v2/telephony/providers/edges/lines/template';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(lineBaseSettingsId !== undefined && lineBaseSettingsId !== null){
			queryParameters.lineBaseSettingsId = lineBaseSettingsId;
		}

        if(lineBaseSettingsId === undefined && lineBaseSettingsId !== null){
			throw 'Missing required  parameter: lineBaseSettingsId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getProvidersEdgesLinesTemplate = getProvidersEdgesLinesTemplate;
	/**
     * @summary Get a Line by ID
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {string} lineId - Line ID
	*/
	function getProvidersEdgesLinesLineId(lineId){
		var apipath = '/api/v2/telephony/providers/edges/lines/{lineId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{lineId}', lineId);

        if(lineId === undefined && lineId !== null){
			throw 'Missing required  parameter: lineId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getProvidersEdgesLinesLineId = getProvidersEdgesLinesLineId;
	/**
     * @summary Get outbound routes
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} name - Name
	* @param {string} siteid - Filter by site.id
	* @param {string} sortBy - Sort by
	*/
	function getProvidersEdgesOutboundroutes(pageSize, pageNumber, name, siteid, sortBy){
		var apipath = '/api/v2/telephony/providers/edges/outboundroutes';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(name !== undefined && name !== null){
			queryParameters.name = name;
		}


		if(siteid !== undefined && siteid !== null){
			queryParameters.site.id = siteid;
		}


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getProvidersEdgesOutboundroutes = getProvidersEdgesOutboundroutes;
	/**
     * @summary Create outbound rule
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {} body - OutboundRoute
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "site": {
      "name": "",
      "description": "",
      "version": 0,
      "dateCreated": "",
      "dateModified": "",
      "modifiedBy": "",
      "createdBy": "",
      "state": "",
      "modifiedByApp": "",
      "createdByApp": "",
      "primarySites": [],
      "secondarySites": [],
      "primaryEdges": [],
      "secondaryEdges": [],
      "addresses": [],
      "edges": [],
      "edgeAutoUpdateConfig": {},
      "location": {},
      "managed": true
   },
   "classificationTypes": [],
   "enabled": true,
   "distribution": "",
   "managed": true,
   "externalTrunkBases": []
}
	*/
	function postProvidersEdgesOutboundroutes(body){
		var apipath = '/api/v2/telephony/providers/edges/outboundroutes';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postProvidersEdgesOutboundroutes = postProvidersEdgesOutboundroutes;
	/**
     * @summary Get outbound route
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {string} outboundRouteId - Outbound route ID
	*/
	function getProvidersEdgesOutboundroutesOutboundrouteId(outboundRouteId){
		var apipath = '/api/v2/telephony/providers/edges/outboundroutes/{outboundRouteId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{outboundRouteId}', outboundRouteId);

        if(outboundRouteId === undefined && outboundRouteId !== null){
			throw 'Missing required  parameter: outboundRouteId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getProvidersEdgesOutboundroutesOutboundrouteId = getProvidersEdgesOutboundroutesOutboundrouteId;
	/**
     * @summary Update outbound route
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {string} outboundRouteId - Outbound route ID
	* @param {} body - OutboundRoute
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "site": {
      "name": "",
      "description": "",
      "version": 0,
      "dateCreated": "",
      "dateModified": "",
      "modifiedBy": "",
      "createdBy": "",
      "state": "",
      "modifiedByApp": "",
      "createdByApp": "",
      "primarySites": [],
      "secondarySites": [],
      "primaryEdges": [],
      "secondaryEdges": [],
      "addresses": [],
      "edges": [],
      "edgeAutoUpdateConfig": {},
      "location": {},
      "managed": true
   },
   "classificationTypes": [],
   "enabled": true,
   "distribution": "",
   "managed": true,
   "externalTrunkBases": []
}
	*/
	function putProvidersEdgesOutboundroutesOutboundrouteId(outboundRouteId, body){
		var apipath = '/api/v2/telephony/providers/edges/outboundroutes/{outboundRouteId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{outboundRouteId}', outboundRouteId);

        if(outboundRouteId === undefined && outboundRouteId !== null){
			throw 'Missing required  parameter: outboundRouteId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putProvidersEdgesOutboundroutesOutboundrouteId = putProvidersEdgesOutboundroutesOutboundrouteId;
	/**
     * @summary Delete Outbound Route
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {string} outboundRouteId - Outbound route ID
	*/
	function deleteProvidersEdgesOutboundroutesOutboundrouteId(outboundRouteId){
		var apipath = '/api/v2/telephony/providers/edges/outboundroutes/{outboundRouteId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{outboundRouteId}', outboundRouteId);

        if(outboundRouteId === undefined && outboundRouteId !== null){
			throw 'Missing required  parameter: outboundRouteId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteProvidersEdgesOutboundroutesOutboundrouteId = deleteProvidersEdgesOutboundroutesOutboundrouteId;
	/**
     * @summary Get a list of Phone Base Settings objects
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {integer} pageNumber - Page number
	* @param {integer} pageSize - Page size
	* @param {string} sortBy - Value by which to sort
	* @param {string} sortOrder - Sort order
	*/
	function getProvidersEdgesPhonebasesettings(pageNumber, pageSize, sortBy, sortOrder){
		var apipath = '/api/v2/telephony/providers/edges/phonebasesettings';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		if(sortOrder !== undefined && sortOrder !== null){
			queryParameters.sortOrder = sortOrder;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getProvidersEdgesPhonebasesettings = getProvidersEdgesPhonebasesettings;
	/**
     * @summary Create a new Phone Base Settings object
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "phoneMetaBase": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "lines": [],
   "properties": {},
   "capabilities": {
      "provisions": true,
      "registers": true,
      "dualRegisters": true,
      "hardwareIdType": "",
      "allowReboot": true,
      "noRebalance": true
   }
}
	*/
	function postProvidersEdgesPhonebasesettings(body){
		var apipath = '/api/v2/telephony/providers/edges/phonebasesettings';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postProvidersEdgesPhonebasesettings = postProvidersEdgesPhonebasesettings;
	/**
     * @summary Get a list of available makes and models to create a new Phone Base Settings
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	*/
	function getProvidersEdgesPhonebasesettingsAvailablemetabases(pageSize, pageNumber){
		var apipath = '/api/v2/telephony/providers/edges/phonebasesettings/availablemetabases';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getProvidersEdgesPhonebasesettingsAvailablemetabases = getProvidersEdgesPhonebasesettingsAvailablemetabases;
	/**
     * @summary Get a Phone Base Settings instance template from a given make and model. This object can then be modified and saved as a new Phone Base Settings instance
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {string} phoneMetabaseId - The id of a metabase object upon which to base this Phone Base Settings
	*/
	function getProvidersEdgesPhonebasesettingsTemplate(phoneMetabaseId){
		var apipath = '/api/v2/telephony/providers/edges/phonebasesettings/template';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(phoneMetabaseId !== undefined && phoneMetabaseId !== null){
			queryParameters.phoneMetabaseId = phoneMetabaseId;
		}

        if(phoneMetabaseId === undefined && phoneMetabaseId !== null){
			throw 'Missing required  parameter: phoneMetabaseId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getProvidersEdgesPhonebasesettingsTemplate = getProvidersEdgesPhonebasesettingsTemplate;
	/**
     * @summary Get a Phone Base Settings object by ID
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {string} phoneBaseId - Phone base ID
	*/
	function getProvidersEdgesPhonebasesettingsPhonebaseId(phoneBaseId){
		var apipath = '/api/v2/telephony/providers/edges/phonebasesettings/{phoneBaseId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{phoneBaseId}', phoneBaseId);

        if(phoneBaseId === undefined && phoneBaseId !== null){
			throw 'Missing required  parameter: phoneBaseId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getProvidersEdgesPhonebasesettingsPhonebaseId = getProvidersEdgesPhonebasesettingsPhonebaseId;
	/**
     * @summary Update a Phone Base Settings by ID
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {string} phoneBaseId - Phone base ID
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "phoneMetaBase": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "lines": [],
   "properties": {},
   "capabilities": {
      "provisions": true,
      "registers": true,
      "dualRegisters": true,
      "hardwareIdType": "",
      "allowReboot": true,
      "noRebalance": true
   }
}
	*/
	function putProvidersEdgesPhonebasesettingsPhonebaseId(phoneBaseId, body){
		var apipath = '/api/v2/telephony/providers/edges/phonebasesettings/{phoneBaseId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{phoneBaseId}', phoneBaseId);

        if(phoneBaseId === undefined && phoneBaseId !== null){
			throw 'Missing required  parameter: phoneBaseId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putProvidersEdgesPhonebasesettingsPhonebaseId = putProvidersEdgesPhonebasesettingsPhonebaseId;
	/**
     * @summary Delete a Phone Base Settings by ID
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {string} phoneBaseId - Phone base ID
	*/
	function deleteProvidersEdgesPhonebasesettingsPhonebaseId(phoneBaseId){
		var apipath = '/api/v2/telephony/providers/edges/phonebasesettings/{phoneBaseId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{phoneBaseId}', phoneBaseId);

        if(phoneBaseId === undefined && phoneBaseId !== null){
			throw 'Missing required  parameter: phoneBaseId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteProvidersEdgesPhonebasesettingsPhonebaseId = deleteProvidersEdgesPhonebasesettingsPhonebaseId;
	/**
     * @summary Get a list of Phone Instances
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {integer} pageNumber - Page number
	* @param {integer} pageSize - Page size
	* @param {string} sortBy - Value by which to sort
	* @param {string} sortOrder - Sort order
	* @param {string} siteid - Filter by site.id
	* @param {string} phoneBaseSettingsid - Filter by phoneBaseSettings.id
	* @param {string} phone_hardwareId - Filter by phone_hardwareId
	* @param {array} expand - Fields to expand in the response, comma-separated
	* @param {array} fields - Fields under properties to get, comma-separated
	*/
	function getProvidersEdgesPhones(pageNumber, pageSize, sortBy, sortOrder, siteid, phoneBaseSettingsid, phone_hardwareId, expand, fields){
		var apipath = '/api/v2/telephony/providers/edges/phones';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		if(sortOrder !== undefined && sortOrder !== null){
			queryParameters.sortOrder = sortOrder;
		}


		if(siteid !== undefined && siteid !== null){
			queryParameters.site.id = siteid;
		}


		if(phoneBaseSettingsid !== undefined && phoneBaseSettingsid !== null){
			queryParameters.phoneBaseSettings.id = phoneBaseSettingsid;
		}


		if(phone_hardwareId !== undefined && phone_hardwareId !== null){
			queryParameters.phone_hardwareId = phone_hardwareId;
		}


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		if(fields !== undefined && fields !== null){
			queryParameters.fields = fields;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getProvidersEdgesPhones = getProvidersEdgesPhones;
	/**
     * @summary Create a new Phone
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "edgeGroup": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "site": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "phoneBaseSettings": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "lineBaseSettings": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "phoneMetaBase": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "lines": [],
   "status": {
      "name": "",
      "operationalStatus": "",
      "edgesStatus": "",
      "provision": {},
      "lineStatuses": [],
      "phoneAssignmentToEdgeType": "",
      "edge": {}
   },
   "secondaryStatus": {
      "name": "",
      "operationalStatus": "",
      "edgesStatus": "",
      "provision": {},
      "lineStatuses": [],
      "phoneAssignmentToEdgeType": "",
      "edge": {}
   },
   "properties": {},
   "capabilities": {
      "provisions": true,
      "registers": true,
      "dualRegisters": true,
      "hardwareIdType": "",
      "allowReboot": true,
      "noRebalance": true
   }
}
	*/
	function postProvidersEdgesPhones(body){
		var apipath = '/api/v2/telephony/providers/edges/phones';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postProvidersEdgesPhones = postProvidersEdgesPhones;
	/**
     * @summary Reboot Multiple Phones
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {} body - body
	 * @example
	 * Body Example:
	 * {
   "phoneIds": [],
   "siteId": ""
}
	*/
	function postProvidersEdgesPhonesReboot(body){
		var apipath = '/api/v2/telephony/providers/edges/phones/reboot';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postProvidersEdgesPhonesReboot = postProvidersEdgesPhonesReboot;
	/**
     * @summary Get a Phone instance template based on a Phone Base Settings object. This object can then be modified and saved as a new Phone instance
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {string} phoneBaseSettingsId - The id of a Phone Base Settings object upon which to base this Phone
	*/
	function getProvidersEdgesPhonesTemplate(phoneBaseSettingsId){
		var apipath = '/api/v2/telephony/providers/edges/phones/template';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(phoneBaseSettingsId !== undefined && phoneBaseSettingsId !== null){
			queryParameters.phoneBaseSettingsId = phoneBaseSettingsId;
		}

        if(phoneBaseSettingsId === undefined && phoneBaseSettingsId !== null){
			throw 'Missing required  parameter: phoneBaseSettingsId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getProvidersEdgesPhonesTemplate = getProvidersEdgesPhonesTemplate;
	/**
     * @summary Get a Phone by ID
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {string} phoneId - Phone ID
	*/
	function getProvidersEdgesPhonesPhoneId(phoneId){
		var apipath = '/api/v2/telephony/providers/edges/phones/{phoneId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{phoneId}', phoneId);

        if(phoneId === undefined && phoneId !== null){
			throw 'Missing required  parameter: phoneId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getProvidersEdgesPhonesPhoneId = getProvidersEdgesPhonesPhoneId;
	/**
     * @summary Update a Phone by ID
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {string} phoneId - Phone ID
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "edgeGroup": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "site": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "phoneBaseSettings": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "lineBaseSettings": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "phoneMetaBase": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "lines": [],
   "status": {
      "name": "",
      "operationalStatus": "",
      "edgesStatus": "",
      "provision": {},
      "lineStatuses": [],
      "phoneAssignmentToEdgeType": "",
      "edge": {}
   },
   "secondaryStatus": {
      "name": "",
      "operationalStatus": "",
      "edgesStatus": "",
      "provision": {},
      "lineStatuses": [],
      "phoneAssignmentToEdgeType": "",
      "edge": {}
   },
   "properties": {},
   "capabilities": {
      "provisions": true,
      "registers": true,
      "dualRegisters": true,
      "hardwareIdType": "",
      "allowReboot": true,
      "noRebalance": true
   }
}
	*/
	function putProvidersEdgesPhonesPhoneId(phoneId, body){
		var apipath = '/api/v2/telephony/providers/edges/phones/{phoneId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{phoneId}', phoneId);

        if(phoneId === undefined && phoneId !== null){
			throw 'Missing required  parameter: phoneId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putProvidersEdgesPhonesPhoneId = putProvidersEdgesPhonesPhoneId;
	/**
     * @summary Delete a Phone by ID
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {string} phoneId - Phone ID
	*/
	function deleteProvidersEdgesPhonesPhoneId(phoneId){
		var apipath = '/api/v2/telephony/providers/edges/phones/{phoneId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{phoneId}', phoneId);

        if(phoneId === undefined && phoneId !== null){
			throw 'Missing required  parameter: phoneId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteProvidersEdgesPhonesPhoneId = deleteProvidersEdgesPhonesPhoneId;
	/**
     * @summary Reboot a Phone
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {string} phoneId - Phone Id
	*/
	function postProvidersEdgesPhonesPhoneIdReboot(phoneId){
		var apipath = '/api/v2/telephony/providers/edges/phones/{phoneId}/reboot';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{phoneId}', phoneId);

        if(phoneId === undefined && phoneId !== null){
			throw 'Missing required  parameter: phoneId';
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postProvidersEdgesPhonesPhoneIdReboot = postProvidersEdgesPhonesPhoneIdReboot;
	/**
     * @summary Get the list of sites.
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} sortBy - Sort by
	* @param {string} sortOrder - Sort order
	* @param {string} name - Name
	* @param {string} locationid - Location Id
	*/
	function getProvidersEdgesSites(pageSize, pageNumber, sortBy, sortOrder, name, locationid){
		var apipath = '/api/v2/telephony/providers/edges/sites';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		if(sortOrder !== undefined && sortOrder !== null){
			queryParameters.sortOrder = sortOrder;
		}


		if(name !== undefined && name !== null){
			queryParameters.name = name;
		}


		if(locationid !== undefined && locationid !== null){
			queryParameters.location.id = locationid;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getProvidersEdgesSites = getProvidersEdgesSites;
	/**
     * @summary Create a endpoint.
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {} body - Site
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "primarySites": [],
   "secondarySites": [],
   "primaryEdges": [],
   "secondaryEdges": [],
   "addresses": [],
   "edges": [],
   "edgeAutoUpdateConfig": {
      "timeZone": "",
      "rrule": "",
      "start": "",
      "end": ""
   },
   "location": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "managed": true
}
	*/
	function postProvidersEdgesSites(body){
		var apipath = '/api/v2/telephony/providers/edges/sites';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postProvidersEdgesSites = postProvidersEdgesSites;
	/**
     * @summary Get endpoint.
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {string} siteId - Site ID
	*/
	function getProvidersEdgesSitesSiteId(siteId){
		var apipath = '/api/v2/telephony/providers/edges/sites/{siteId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{siteId}', siteId);

        if(siteId === undefined && siteId !== null){
			throw 'Missing required  parameter: siteId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getProvidersEdgesSitesSiteId = getProvidersEdgesSitesSiteId;
	/**
     * @summary Update a endpoint.
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {string} siteId - Site ID
	* @param {} body - Site
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "primarySites": [],
   "secondarySites": [],
   "primaryEdges": [],
   "secondaryEdges": [],
   "addresses": [],
   "edges": [],
   "edgeAutoUpdateConfig": {
      "timeZone": "",
      "rrule": "",
      "start": "",
      "end": ""
   },
   "location": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "managed": true
}
	*/
	function putProvidersEdgesSitesSiteId(siteId, body){
		var apipath = '/api/v2/telephony/providers/edges/sites/{siteId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{siteId}', siteId);

        if(siteId === undefined && siteId !== null){
			throw 'Missing required  parameter: siteId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putProvidersEdgesSitesSiteId = putProvidersEdgesSitesSiteId;
	/**
     * @summary Delete an ednpoint
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {string} siteId - Site ID
	*/
	function deleteProvidersEdgesSitesSiteId(siteId){
		var apipath = '/api/v2/telephony/providers/edges/sites/{siteId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{siteId}', siteId);

        if(siteId === undefined && siteId !== null){
			throw 'Missing required  parameter: siteId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteProvidersEdgesSitesSiteId = deleteProvidersEdgesSitesSiteId;
	/**
     * @summary Get the list of Number Plans for this Site.
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {string} siteId - Site ID
	*/
	function getProvidersEdgesSitesSiteIdNumberplans(siteId){
		var apipath = '/api/v2/telephony/providers/edges/sites/{siteId}/numberplans';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{siteId}', siteId);

        if(siteId === undefined && siteId !== null){
			throw 'Missing required  parameter: siteId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getProvidersEdgesSitesSiteIdNumberplans = getProvidersEdgesSitesSiteIdNumberplans;
	/**
     * @summary Update the list of Number Plans.
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {string} siteId - Site ID
	* @param {} body - 
	*/
	function putProvidersEdgesSitesSiteIdNumberplans(siteId, body){
		var apipath = '/api/v2/telephony/providers/edges/sites/{siteId}/numberplans';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{siteId}', siteId);

        if(siteId === undefined && siteId !== null){
			throw 'Missing required  parameter: siteId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putProvidersEdgesSitesSiteIdNumberplans = putProvidersEdgesSitesSiteIdNumberplans;
	/**
     * @summary Get a list of Classifications for this Site
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {string} siteId - Site ID
	* @param {string} classification - Classification
	*/
	function getProvidersEdgesSitesSiteIdNumberplansClassifications(siteId, classification){
		var apipath = '/api/v2/telephony/providers/edges/sites/{siteId}/numberplans/classifications';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{siteId}', siteId);

        if(siteId === undefined && siteId !== null){
			throw 'Missing required  parameter: siteId';
        }


		if(classification !== undefined && classification !== null){
			queryParameters.classification = classification;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getProvidersEdgesSitesSiteIdNumberplansClassifications = getProvidersEdgesSitesSiteIdNumberplansClassifications;
	/**
     * @summary Get a Number Plan by ID.
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {string} siteId - Site ID
	* @param {string} numberPlanId - Number Plan ID
	*/
	function getProvidersEdgesSitesSiteIdNumberplansNumberplanId(siteId, numberPlanId){
		var apipath = '/api/v2/telephony/providers/edges/sites/{siteId}/numberplans/{numberPlanId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{siteId}', siteId);

        if(siteId === undefined && siteId !== null){
			throw 'Missing required  parameter: siteId';
        }

        apipath = apipath.replace('{numberPlanId}', numberPlanId);

        if(numberPlanId === undefined && numberPlanId !== null){
			throw 'Missing required  parameter: numberPlanId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getProvidersEdgesSitesSiteIdNumberplansNumberplanId = getProvidersEdgesSitesSiteIdNumberplansNumberplanId;
	/**
     * @summary Triggers the rebalance operation.
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {string} siteId - Site ID
	*/
	function postProvidersEdgesSitesSiteIdRebalance(siteId){
		var apipath = '/api/v2/telephony/providers/edges/sites/{siteId}/rebalance';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{siteId}', siteId);

        if(siteId === undefined && siteId !== null){
			throw 'Missing required  parameter: siteId';
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postProvidersEdgesSitesSiteIdRebalance = postProvidersEdgesSitesSiteIdRebalance;
	/**
     * @summary Get a list of Edge-compatible time zones
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	*/
	function getProvidersEdgesTimezones(pageSize, pageNumber){
		var apipath = '/api/v2/telephony/providers/edges/timezones';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getProvidersEdgesTimezones = getProvidersEdgesTimezones;
	/**
     * @summary Get Trunk Base Settings listing
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {integer} pageNumber - Page number
	* @param {integer} pageSize - Page size
	* @param {string} sortBy - Value by which to sort
	* @param {string} sortOrder - Sort order
	*/
	function getProvidersEdgesTrunkbasesettings(pageNumber, pageSize, sortBy, sortOrder){
		var apipath = '/api/v2/telephony/providers/edges/trunkbasesettings';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(sortBy !== undefined && sortBy !== null){
			queryParameters.sortBy = sortBy;
		}


		if(sortOrder !== undefined && sortOrder !== null){
			queryParameters.sortOrder = sortOrder;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getProvidersEdgesTrunkbasesettings = getProvidersEdgesTrunkbasesettings;
	/**
     * @summary Create a Trunk Base Settings object
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "trunkMetabase": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "properties": {},
   "trunkType": "",
   "managed": true
}
	*/
	function postProvidersEdgesTrunkbasesettings(body){
		var apipath = '/api/v2/telephony/providers/edges/trunkbasesettings';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postProvidersEdgesTrunkbasesettings = postProvidersEdgesTrunkbasesettings;
	/**
     * @summary Get a list of available makes and models to create a new Trunk Base Settings
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {string} type - 
	EXTERNAL,
	PHONE,
	EDGE,
	* @param {integer} pageSize - 
	* @param {integer} pageNumber - 
	*/
	function getProvidersEdgesTrunkbasesettingsAvailablemetabases(type, pageSize, pageNumber){
		var apipath = '/api/v2/telephony/providers/edges/trunkbasesettings/availablemetabases';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(type !== undefined && type !== null){
			queryParameters.type = type;
		}


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getProvidersEdgesTrunkbasesettingsAvailablemetabases = getProvidersEdgesTrunkbasesettingsAvailablemetabases;
	/**
     * @summary Get a Trunk Base Settings instance template from a given make and model. This object can then be modified and saved as a new Trunk Base Settings instance
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {string} trunkMetabaseId - The id of a metabase object upon which to base this Trunk Base Settings
	*/
	function getProvidersEdgesTrunkbasesettingsTemplate(trunkMetabaseId){
		var apipath = '/api/v2/telephony/providers/edges/trunkbasesettings/template';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(trunkMetabaseId !== undefined && trunkMetabaseId !== null){
			queryParameters.trunkMetabaseId = trunkMetabaseId;
		}

        if(trunkMetabaseId === undefined && trunkMetabaseId !== null){
			throw 'Missing required  parameter: trunkMetabaseId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getProvidersEdgesTrunkbasesettingsTemplate = getProvidersEdgesTrunkbasesettingsTemplate;
	/**
     * @summary Get a Trunk Base Settings object by ID
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {string} trunkBaseSettingsId - Trunk Base ID
	*/
	function getProvidersEdgesTrunkbasesettingsTrunkbasesettingsId(trunkBaseSettingsId){
		var apipath = '/api/v2/telephony/providers/edges/trunkbasesettings/{trunkBaseSettingsId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{trunkBaseSettingsId}', trunkBaseSettingsId);

        if(trunkBaseSettingsId === undefined && trunkBaseSettingsId !== null){
			throw 'Missing required  parameter: trunkBaseSettingsId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getProvidersEdgesTrunkbasesettingsTrunkbasesettingsId = getProvidersEdgesTrunkbasesettingsTrunkbasesettingsId;
	/**
     * @summary Update a Trunk Base Settings object by ID
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {string} trunkBaseSettingsId - Trunk Base ID
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "trunkMetabase": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "properties": {},
   "trunkType": "",
   "managed": true
}
	*/
	function putProvidersEdgesTrunkbasesettingsTrunkbasesettingsId(trunkBaseSettingsId, body){
		var apipath = '/api/v2/telephony/providers/edges/trunkbasesettings/{trunkBaseSettingsId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{trunkBaseSettingsId}', trunkBaseSettingsId);

        if(trunkBaseSettingsId === undefined && trunkBaseSettingsId !== null){
			throw 'Missing required  parameter: trunkBaseSettingsId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putProvidersEdgesTrunkbasesettingsTrunkbasesettingsId = putProvidersEdgesTrunkbasesettingsTrunkbasesettingsId;
	/**
     * @summary Delete a Trunk Base Settings object by ID
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {string} trunkBaseSettingsId - Trunk Base ID
	*/
	function deleteProvidersEdgesTrunkbasesettingsTrunkbasesettingsId(trunkBaseSettingsId){
		var apipath = '/api/v2/telephony/providers/edges/trunkbasesettings/{trunkBaseSettingsId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{trunkBaseSettingsId}', trunkBaseSettingsId);

        if(trunkBaseSettingsId === undefined && trunkBaseSettingsId !== null){
			throw 'Missing required  parameter: trunkBaseSettingsId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteProvidersEdgesTrunkbasesettingsTrunkbasesettingsId = deleteProvidersEdgesTrunkbasesettingsTrunkbasesettingsId;
	/**
     * @summary Get edge.
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {string} edgeId - Edge ID
	*/
	function getProvidersEdgesEdgeId(edgeId){
		var apipath = '/api/v2/telephony/providers/edges/{edgeId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{edgeId}', edgeId);

        if(edgeId === undefined && edgeId !== null){
			throw 'Missing required  parameter: edgeId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getProvidersEdgesEdgeId = getProvidersEdgesEdgeId;
	/**
     * @summary Update a edge.
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {string} edgeId - Edge ID
	* @param {} body - Edge
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "interfaces": [],
   "make": "",
   "model": "",
   "apiVersion": "",
   "softwareVersion": "",
   "softwareVersionTimestamp": "",
   "softwareVersionPlatform": "",
   "softwareVersionConfiguration": "",
   "fullSoftwareVersion": "",
   "pairingId": "",
   "fingerprint": "",
   "fingerprintHint": "",
   "currentVersion": "",
   "stagedVersion": "",
   "patch": "",
   "statusCode": "",
   "edgeGroup": {
      "name": "",
      "description": "",
      "version": 0,
      "dateCreated": "",
      "dateModified": "",
      "modifiedBy": "",
      "createdBy": "",
      "state": "",
      "modifiedByApp": "",
      "createdByApp": "",
      "managed": true,
      "edgeTrunkBaseAssignment": {},
      "phoneTrunkBaseAssignments": []
   },
   "site": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "softwareStatus": {
      "version": {},
      "maxDownloadRate": 0,
      "downloadStartTime": "",
      "executeStartTime": "",
      "executeStopTime": "",
      "executeOnIdle": true,
      "status": "",
      "edgeUri": "",
      "current": true
   },
   "onlineStatus": "",
   "serialNumber": "",
   "physicalEdge": true,
   "managed": true
}
	*/
	function putProvidersEdgesEdgeId(edgeId, body){
		var apipath = '/api/v2/telephony/providers/edges/{edgeId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{edgeId}', edgeId);

        if(edgeId === undefined && edgeId !== null){
			throw 'Missing required  parameter: edgeId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putProvidersEdgesEdgeId = putProvidersEdgesEdgeId;
	/**
     * @summary Delete a edge.
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {string} edgeId - Edge ID
	*/
	function deleteProvidersEdgesEdgeId(edgeId){
		var apipath = '/api/v2/telephony/providers/edges/{edgeId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{edgeId}', edgeId);

        if(edgeId === undefined && edgeId !== null){
			throw 'Missing required  parameter: edgeId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteProvidersEdgesEdgeId = deleteProvidersEdgesEdgeId;
	/**
     * @summary Get the list of lines.
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {string} edgeId - Edge ID
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	*/
	function getProvidersEdgesEdgeIdLines(edgeId, pageSize, pageNumber){
		var apipath = '/api/v2/telephony/providers/edges/{edgeId}/lines';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{edgeId}', edgeId);

        if(edgeId === undefined && edgeId !== null){
			throw 'Missing required  parameter: edgeId';
        }


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getProvidersEdgesEdgeIdLines = getProvidersEdgesEdgeIdLines;
	/**
     * @summary Get line
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {string} edgeId - Edge ID
	* @param {string} lineId - Line ID
	*/
	function getProvidersEdgesEdgeIdLinesLineId(edgeId, lineId){
		var apipath = '/api/v2/telephony/providers/edges/{edgeId}/lines/{lineId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{edgeId}', edgeId);

        if(edgeId === undefined && edgeId !== null){
			throw 'Missing required  parameter: edgeId';
        }

        apipath = apipath.replace('{lineId}', lineId);

        if(lineId === undefined && lineId !== null){
			throw 'Missing required  parameter: lineId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getProvidersEdgesEdgeIdLinesLineId = getProvidersEdgesEdgeIdLinesLineId;
	/**
     * @summary Update a line.
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {string} edgeId - Edge ID
	* @param {string} lineId - Line ID
	* @param {} body - Line
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "schema": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "properties": {},
   "edge": {
      "name": "",
      "description": "",
      "version": 0,
      "dateCreated": "",
      "dateModified": "",
      "modifiedBy": "",
      "createdBy": "",
      "state": "",
      "modifiedByApp": "",
      "createdByApp": "",
      "interfaces": [],
      "make": "",
      "model": "",
      "apiVersion": "",
      "softwareVersion": "",
      "softwareVersionTimestamp": "",
      "softwareVersionPlatform": "",
      "softwareVersionConfiguration": "",
      "fullSoftwareVersion": "",
      "pairingId": "",
      "fingerprint": "",
      "fingerprintHint": "",
      "currentVersion": "",
      "stagedVersion": "",
      "patch": "",
      "statusCode": "",
      "edgeGroup": {},
      "site": {},
      "softwareStatus": {},
      "onlineStatus": "",
      "serialNumber": "",
      "physicalEdge": true,
      "managed": true
   },
   "edgeGroup": {
      "name": "",
      "description": "",
      "version": 0,
      "dateCreated": "",
      "dateModified": "",
      "modifiedBy": "",
      "createdBy": "",
      "state": "",
      "modifiedByApp": "",
      "createdByApp": "",
      "managed": true,
      "edgeTrunkBaseAssignment": {},
      "phoneTrunkBaseAssignments": []
   },
   "lineType": "",
   "endpoint": {
      "name": "",
      "description": "",
      "version": 0,
      "dateCreated": "",
      "dateModified": "",
      "modifiedBy": "",
      "createdBy": "",
      "state": "",
      "modifiedByApp": "",
      "createdByApp": "",
      "count": 0,
      "properties": {},
      "schema": {},
      "enabled": true,
      "site": {},
      "dids": []
   },
   "ipAddress": "",
   "logicalInterfaceId": ""
}
	*/
	function putProvidersEdgesEdgeIdLinesLineId(edgeId, lineId, body){
		var apipath = '/api/v2/telephony/providers/edges/{edgeId}/lines/{lineId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{edgeId}', edgeId);

        if(edgeId === undefined && edgeId !== null){
			throw 'Missing required  parameter: edgeId';
        }

        apipath = apipath.replace('{lineId}', lineId);

        if(lineId === undefined && lineId !== null){
			throw 'Missing required  parameter: lineId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putProvidersEdgesEdgeIdLinesLineId = putProvidersEdgesEdgeIdLinesLineId;
	/**
     * @summary Get edge logical interfaces.
	 * @description Retrieve a list of all configured logical interfaces from a specific edge.
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {string} edgeId - Edge ID
	*/
	function getProvidersEdgesEdgeIdLogicalinterfaces(edgeId){
		var apipath = '/api/v2/telephony/providers/edges/{edgeId}/logicalinterfaces';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{edgeId}', edgeId);

        if(edgeId === undefined && edgeId !== null){
			throw 'Missing required  parameter: edgeId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getProvidersEdgesEdgeIdLogicalinterfaces = getProvidersEdgesEdgeIdLogicalinterfaces;
	/**
     * @summary Create an edge logical interface.
	 * @description Create
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {string} edgeId - Edge ID
	* @param {} body - Create
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "edgeUri": "",
   "edgeAssignedId": "",
   "friendlyName": "",
   "vlanTagId": 0,
   "hardwareAddress": "",
   "physicalAdapterId": "",
   "ipAddress": "",
   "gateway": "",
   "primaryDns": "",
   "secondaryDns": "",
   "ifStatus": "",
   "routes": [],
   "addresses": [],
   "ipv4Capabilities": {
      "enabled": true,
      "dhcp": true,
      "metric": 0
   },
   "ipv6Capabilities": {
      "enabled": true,
      "dhcp": true,
      "metric": 0
   },
   "currentState": "",
   "lastModifiedUserId": "",
   "lastModifiedCorrelationId": "",
   "commandResponses": [],
   "inheritPhoneTrunkBases": true,
   "inheritPhoneTrunkBasesIPv4": true,
   "inheritPhoneTrunkBasesIPv6": true,
   "useForInternalEdgeCommunication": true,
   "externalTrunkBaseAssignments": [],
   "phoneTrunkBaseAssignments": []
}
	*/
	function postProvidersEdgesEdgeIdLogicalinterfaces(edgeId, body){
		var apipath = '/api/v2/telephony/providers/edges/{edgeId}/logicalinterfaces';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{edgeId}', edgeId);

        if(edgeId === undefined && edgeId !== null){
			throw 'Missing required  parameter: edgeId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postProvidersEdgesEdgeIdLogicalinterfaces = postProvidersEdgesEdgeIdLogicalinterfaces;
	/**
     * @summary Get an edge logical interface
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {string} edgeId - Edge ID
	* @param {string} interfaceId - Interface ID
	*/
	function getProvidersEdgesEdgeIdLogicalinterfacesInterfaceId(edgeId, interfaceId){
		var apipath = '/api/v2/telephony/providers/edges/{edgeId}/logicalinterfaces/{interfaceId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{edgeId}', edgeId);

        if(edgeId === undefined && edgeId !== null){
			throw 'Missing required  parameter: edgeId';
        }

        apipath = apipath.replace('{interfaceId}', interfaceId);

        if(interfaceId === undefined && interfaceId !== null){
			throw 'Missing required  parameter: interfaceId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getProvidersEdgesEdgeIdLogicalinterfacesInterfaceId = getProvidersEdgesEdgeIdLogicalinterfacesInterfaceId;
	/**
     * @summary Update an edge logical interface.
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {string} edgeId - Edge ID
	* @param {string} interfaceId - Interface ID
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "edgeUri": "",
   "edgeAssignedId": "",
   "friendlyName": "",
   "vlanTagId": 0,
   "hardwareAddress": "",
   "physicalAdapterId": "",
   "ipAddress": "",
   "gateway": "",
   "primaryDns": "",
   "secondaryDns": "",
   "ifStatus": "",
   "routes": [],
   "addresses": [],
   "ipv4Capabilities": {
      "enabled": true,
      "dhcp": true,
      "metric": 0
   },
   "ipv6Capabilities": {
      "enabled": true,
      "dhcp": true,
      "metric": 0
   },
   "currentState": "",
   "lastModifiedUserId": "",
   "lastModifiedCorrelationId": "",
   "commandResponses": [],
   "inheritPhoneTrunkBases": true,
   "inheritPhoneTrunkBasesIPv4": true,
   "inheritPhoneTrunkBasesIPv6": true,
   "useForInternalEdgeCommunication": true,
   "externalTrunkBaseAssignments": [],
   "phoneTrunkBaseAssignments": []
}
	*/
	function putProvidersEdgesEdgeIdLogicalinterfacesInterfaceId(edgeId, interfaceId, body){
		var apipath = '/api/v2/telephony/providers/edges/{edgeId}/logicalinterfaces/{interfaceId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{edgeId}', edgeId);

        if(edgeId === undefined && edgeId !== null){
			throw 'Missing required  parameter: edgeId';
        }

        apipath = apipath.replace('{interfaceId}', interfaceId);

        if(interfaceId === undefined && interfaceId !== null){
			throw 'Missing required  parameter: interfaceId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putProvidersEdgesEdgeIdLogicalinterfacesInterfaceId = putProvidersEdgesEdgeIdLogicalinterfacesInterfaceId;
	/**
     * @summary Delete an edge logical interface
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {string} edgeId - Edge ID
	* @param {string} interfaceId - Interface ID
	*/
	function deleteProvidersEdgesEdgeIdLogicalinterfacesInterfaceId(edgeId, interfaceId){
		var apipath = '/api/v2/telephony/providers/edges/{edgeId}/logicalinterfaces/{interfaceId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{edgeId}', edgeId);

        if(edgeId === undefined && edgeId !== null){
			throw 'Missing required  parameter: edgeId';
        }

        apipath = apipath.replace('{interfaceId}', interfaceId);

        if(interfaceId === undefined && interfaceId !== null){
			throw 'Missing required  parameter: interfaceId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteProvidersEdgesEdgeIdLogicalinterfacesInterfaceId = deleteProvidersEdgesEdgeIdLogicalinterfacesInterfaceId;
	/**
     * @summary Create a job to upload a list of Edge logs.
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {string} edgeId - Edge ID
	* @param {} body - EdgeLogsJobRequest
	 * @example
	 * Body Example:
	 * {
   "path": "",
   "query": "",
   "recurse": true
}
	*/
	function postProvidersEdgesEdgeIdLogsJobs(edgeId, body){
		var apipath = '/api/v2/telephony/providers/edges/{edgeId}/logs/jobs';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{edgeId}', edgeId);

        if(edgeId === undefined && edgeId !== null){
			throw 'Missing required  parameter: edgeId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postProvidersEdgesEdgeIdLogsJobs = postProvidersEdgesEdgeIdLogsJobs;
	/**
     * @summary Get an Edge logs job.
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {string} edgeId - Edge ID
	* @param {string} jobId - Job ID
	*/
	function getProvidersEdgesEdgeIdLogsJobsJobId(edgeId, jobId){
		var apipath = '/api/v2/telephony/providers/edges/{edgeId}/logs/jobs/{jobId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{edgeId}', edgeId);

        if(edgeId === undefined && edgeId !== null){
			throw 'Missing required  parameter: edgeId';
        }

        apipath = apipath.replace('{jobId}', jobId);

        if(jobId === undefined && jobId !== null){
			throw 'Missing required  parameter: jobId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getProvidersEdgesEdgeIdLogsJobsJobId = getProvidersEdgesEdgeIdLogsJobsJobId;
	/**
     * @summary Request that the specified fileIds be uploaded from the Edge.
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {string} edgeId - Edge ID
	* @param {string} jobId - Job ID
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "fileIds": []
}
	*/
	function postProvidersEdgesEdgeIdLogsJobsJobIdUpload(edgeId, jobId, body){
		var apipath = '/api/v2/telephony/providers/edges/{edgeId}/logs/jobs/{jobId}/upload';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{edgeId}', edgeId);

        if(edgeId === undefined && edgeId !== null){
			throw 'Missing required  parameter: edgeId';
        }

        apipath = apipath.replace('{jobId}', jobId);

        if(jobId === undefined && jobId !== null){
			throw 'Missing required  parameter: jobId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postProvidersEdgesEdgeIdLogsJobsJobIdUpload = postProvidersEdgesEdgeIdLogsJobsJobIdUpload;
	/**
     * @summary Retrieve a list of all configured physical interfaces from a specific edge.
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {string} edgeId - Edge ID
	*/
	function getProvidersEdgesEdgeIdPhysicalinterfaces(edgeId){
		var apipath = '/api/v2/telephony/providers/edges/{edgeId}/physicalinterfaces';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{edgeId}', edgeId);

        if(edgeId === undefined && edgeId !== null){
			throw 'Missing required  parameter: edgeId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getProvidersEdgesEdgeIdPhysicalinterfaces = getProvidersEdgesEdgeIdPhysicalinterfaces;
	/**
     * @summary Get edge physical interface.
	 * @description Retrieve a physical interface from a specific edge.
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {string} edgeId - Edge ID
	* @param {string} interfaceId - Interface ID
	*/
	function getProvidersEdgesEdgeIdPhysicalinterfacesInterfaceId(edgeId, interfaceId){
		var apipath = '/api/v2/telephony/providers/edges/{edgeId}/physicalinterfaces/{interfaceId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{edgeId}', edgeId);

        if(edgeId === undefined && edgeId !== null){
			throw 'Missing required  parameter: edgeId';
        }

        apipath = apipath.replace('{interfaceId}', interfaceId);

        if(interfaceId === undefined && interfaceId !== null){
			throw 'Missing required  parameter: interfaceId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getProvidersEdgesEdgeIdPhysicalinterfacesInterfaceId = getProvidersEdgesEdgeIdPhysicalinterfacesInterfaceId;
	/**
     * @summary Reboot an Edge
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {string} edgeId - Edge ID
	*/
	function postProvidersEdgesEdgeIdReboot(edgeId){
		var apipath = '/api/v2/telephony/providers/edges/{edgeId}/reboot';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{edgeId}', edgeId);

        if(edgeId === undefined && edgeId !== null){
			throw 'Missing required  parameter: edgeId';
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postProvidersEdgesEdgeIdReboot = postProvidersEdgesEdgeIdReboot;
	/**
     * @summary Gets software update status information about any edge.
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {string} edgeId - Edge ID
	*/
	function getProvidersEdgesEdgeIdSoftwareupdate(edgeId){
		var apipath = '/api/v2/telephony/providers/edges/{edgeId}/softwareupdate';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{edgeId}', edgeId);

        if(edgeId === undefined && edgeId !== null){
			throw 'Missing required  parameter: edgeId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getProvidersEdgesEdgeIdSoftwareupdate = getProvidersEdgesEdgeIdSoftwareupdate;
	/**
     * @summary Starts a software update for this edge.
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {string} edgeId - Edge ID
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "version": {
      "name": "",
      "edgeVersion": "",
      "publishDate": "",
      "edgeUri": "",
      "current": true,
      "latestRelease": true
   },
   "maxDownloadRate": 0,
   "downloadStartTime": "",
   "executeStartTime": "",
   "executeStopTime": "",
   "executeOnIdle": true,
   "status": "",
   "edgeUri": "",
   "current": true
}
	*/
	function postProvidersEdgesEdgeIdSoftwareupdate(edgeId, body){
		var apipath = '/api/v2/telephony/providers/edges/{edgeId}/softwareupdate';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{edgeId}', edgeId);

        if(edgeId === undefined && edgeId !== null){
			throw 'Missing required  parameter: edgeId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postProvidersEdgesEdgeIdSoftwareupdate = postProvidersEdgesEdgeIdSoftwareupdate;
	/**
     * @summary Cancels any in-progress update for this edge.
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {string} edgeId - Edge ID
	*/
	function deleteProvidersEdgesEdgeIdSoftwareupdate(edgeId){
		var apipath = '/api/v2/telephony/providers/edges/{edgeId}/softwareupdate';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{edgeId}', edgeId);

        if(edgeId === undefined && edgeId !== null){
			throw 'Missing required  parameter: edgeId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteProvidersEdgesEdgeIdSoftwareupdate = deleteProvidersEdgesEdgeIdSoftwareupdate;
	/**
     * @summary Gets all the available software versions for this edge.
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {string} edgeId - Edge ID
	*/
	function getProvidersEdgesEdgeIdSoftwareversions(edgeId){
		var apipath = '/api/v2/telephony/providers/edges/{edgeId}/softwareversions';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{edgeId}', edgeId);

        if(edgeId === undefined && edgeId !== null){
			throw 'Missing required  parameter: edgeId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getProvidersEdgesEdgeIdSoftwareversions = getProvidersEdgesEdgeIdSoftwareversions;
	/**
     * @summary Unpair an Edge
	 * @memberOf TelephonyProvidersEdgeApi#
	* @param {string} edgeId - Edge Id
	*/
	function postProvidersEdgesEdgeIdUnpair(edgeId){
		var apipath = '/api/v2/telephony/providers/edges/{edgeId}/unpair';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{edgeId}', edgeId);

        if(edgeId === undefined && edgeId !== null){
			throw 'Missing required  parameter: edgeId';
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postProvidersEdgesEdgeIdUnpair = postProvidersEdgesEdgeIdUnpair;

    return self;
};

//API VERSION - 
/**
* @class
* @example
* var api = new TokensApi(pureCloudSession);
*/
var TokensApi = function (pureCloudSession) {
	if(!pureCloudSession){
		throw "PureCloudSession is not valid.";
    }

	var self = this;
	/**
     * @summary Delete  auth token used to make the request.
	 * @memberOf TokensApi#
	*/
	function deleteMe(){
		var apipath = '/api/v2/tokens/me';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteMe = deleteMe;

    return self;
};

//API VERSION - 
/**
* @class
* @example
* var api = new UserRecordingsApi(pureCloudSession);
*/
var UserRecordingsApi = function (pureCloudSession) {
	if(!pureCloudSession){
		throw "PureCloudSession is not valid.";
    }

	var self = this;
	/**
     * @summary Get a list of user recordings.
	 * @memberOf UserRecordingsApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} expand - conversation
	*/
	function getUserrecordings(pageSize, pageNumber, expand){
		var apipath = '/api/v2/userrecordings';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getUserrecordings = getUserrecordings;
	/**
     * @summary Get user recording summary
	 * @memberOf UserRecordingsApi#
	*/
	function getSummary(){
		var apipath = '/api/v2/userrecordings/summary';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getSummary = getSummary;
	/**
     * @summary Get a user recording.
	 * @memberOf UserRecordingsApi#
	* @param {string} recordingId - User Recording ID
	* @param {string} expand - conversation
	*/
	function getRecordingId(recordingId, expand){
		var apipath = '/api/v2/userrecordings/{recordingId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{recordingId}', recordingId);

        if(recordingId === undefined && recordingId !== null){
			throw 'Missing required  parameter: recordingId';
        }


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getRecordingId = getRecordingId;
	/**
     * @summary Update a user recording.
	 * @memberOf UserRecordingsApi#
	* @param {string} recordingId - User Recording ID
	* @param {} body - UserRecording
	* @param {string} expand - conversation
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "dateCreated": "",
   "dateModified": "",
   "contentUri": "",
   "workspace": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "createdBy": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "conversation": {
      "name": "",
      "startTime": "",
      "endTime": "",
      "address": "",
      "participants": [],
      "conversationIds": [],
      "maxParticipants": 0,
      "recordingState": ""
   },
   "contentLength": 0,
   "durationMilliseconds": 0,
   "thumbnails": [],
   "read": true
}
	*/
	function putRecordingId(recordingId, body, expand){
		var apipath = '/api/v2/userrecordings/{recordingId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{recordingId}', recordingId);

        if(recordingId === undefined && recordingId !== null){
			throw 'Missing required  parameter: recordingId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putRecordingId = putRecordingId;
	/**
     * @summary Delete a user recording.
	 * @memberOf UserRecordingsApi#
	* @param {string} recordingId - User Recording ID
	*/
	function deleteRecordingId(recordingId){
		var apipath = '/api/v2/userrecordings/{recordingId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{recordingId}', recordingId);

        if(recordingId === undefined && recordingId !== null){
			throw 'Missing required  parameter: recordingId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteRecordingId = deleteRecordingId;
	/**
     * @summary Download a user recording.
	 * @memberOf UserRecordingsApi#
	* @param {string} recordingId - User Recording ID
	* @param {string} formatId - The desired format (WEBM, WAV, etc.)
	WEBM,
	WAV,
	*/
	function getRecordingIdMedia(recordingId, formatId){
		var apipath = '/api/v2/userrecordings/{recordingId}/media';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{recordingId}', recordingId);

        if(recordingId === undefined && recordingId !== null){
			throw 'Missing required  parameter: recordingId';
        }


		if(formatId !== undefined && formatId !== null){
			queryParameters.formatId = formatId;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getRecordingIdMedia = getRecordingIdMedia;

    return self;
};

//API VERSION - 
/**
* @class
* @example
* var api = new UsersApi(pureCloudSession);
*/
var UsersApi = function (pureCloudSession) {
	if(!pureCloudSession){
		throw "PureCloudSession is not valid.";
    }

	var self = this;
	/**
     * @summary Query for user aggregates
	 * @memberOf UsersApi#
	* @param {} body - query
	 * @example
	 * Body Example:
	 * {
   "interval": "",
   "granularity": "",
   "groupBy": [],
   "filter": {
      "type": "",
      "clauses": [],
      "predicates": []
   },
   "metrics": [],
   "flattenMultivaluedDimensions": true
}
	*/
	function postUsersAggregatesQuery(body){
		var apipath = '/api/v2/analytics/users/aggregates/query';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postUsersAggregatesQuery = postUsersAggregatesQuery;
	/**
     * @summary Query for user observations
	 * @memberOf UsersApi#
	* @param {} body - query
	 * @example
	 * Body Example:
	 * {
   "filter": {
      "type": "",
      "clauses": [],
      "predicates": []
   },
   "metrics": []
}
	*/
	function postUsersObservationsQuery(body){
		var apipath = '/api/v2/analytics/users/observations/query';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postUsersObservationsQuery = postUsersObservationsQuery;
	/**
     * @summary Get the list of available users.
	 * @memberOf UsersApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {array} id - The list of user ids to get. Paging is ignored if ids are specified
	* @param {string} sortOrder - Ascending or descending sort order
	[ascending,
	descending],
	* @param {array} expand - Which fields, if any, to expand
	*/
	function getUsers(pageSize, pageNumber, id, sortOrder, expand){
		var apipath = '/api/v2/users';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(id !== undefined && id !== null){
			queryParameters.id = id;
		}


		if(sortOrder !== undefined && sortOrder !== null){
			queryParameters.sortOrder = sortOrder;
		}


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getUsers = getUsers;
	/**
     * @summary Create user
	 * @memberOf UsersApi#
	* @param {} body - User
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "department": "",
   "email": "",
   "addresses": [],
   "title": "",
   "password": "",
   "version": ""
}
	*/
	function postUsers(body){
		var apipath = '/api/v2/users';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postUsers = postUsers;
	/**
     * @summary Get user.
	 * @memberOf UsersApi#
	* @param {array} expand - Which fields, if any, to expand
	* @param {array} feature - The feature toggles to query.
	*/
	function getMe(expand, feature){
		var apipath = '/api/v2/users/me';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		if(feature !== undefined && feature !== null){
			queryParameters.feature = feature;
		}

        if(feature === undefined && feature !== null){
			throw 'Missing required  parameter: feature';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getMe = getMe;
	/**
     * @summary Search using q64
	 * @memberOf UsersApi#
	* @param {string} q64 - 
	* @param {array} expand - 
	*/
	function getSearch(q64, expand){
		var apipath = '/api/v2/users/search';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(q64 !== undefined && q64 !== null){
			queryParameters.q64 = q64;
		}


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getSearch = getSearch;
	/**
     * @summary Search
	 * @memberOf UsersApi#
	* @param {} body - Search request options
	 * @example
	 * Body Example:
	 * {
   "types": [],
   "sortOrder": "",
   "query": [],
   "sortBy": "",
   "pageSize": 0,
   "pageNumber": 0,
   "returnFields": [],
   "aggregations": [],
   "expand": []
}
	*/
	function postSearch(body){
		var apipath = '/api/v2/users/search';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postSearch = postSearch;
	/**
     * @summary Get user
	 * @memberOf UsersApi#
	* @param {string} userId - User ID
	* @param {array} expand - Which fields, if any, to expand
	*/
	function getUserId(userId, expand){
		var apipath = '/api/v2/users/{userId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{userId}', userId);

        if(userId === undefined && userId !== null){
			throw 'Missing required  parameter: userId';
        }


		if(expand !== undefined && expand !== null){
			queryParameters.expand = expand;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getUserId = getUserId;
	/**
     * @summary Delete user
	 * @memberOf UsersApi#
	* @param {string} userId - User ID
	*/
	function deleteUserId(userId){
		var apipath = '/api/v2/users/{userId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{userId}', userId);

        if(userId === undefined && userId !== null){
			throw 'Missing required  parameter: userId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteUserId = deleteUserId;
	/**
     * @summary Update user
	 * @memberOf UsersApi#
	* @param {string} userId - User ID
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "chat": {
      "jabberId": ""
   },
   "department": "",
   "email": "",
   "addresses": [],
   "title": "",
   "username": "",
   "images": []
}
	*/
	function patchUserId(userId, body){
		var apipath = '/api/v2/users/{userId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{userId}', userId);

        if(userId === undefined && userId !== null){
			throw 'Missing required  parameter: userId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PATCH', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.patchUserId = patchUserId;
	/**
     * @summary Get a user's CallForwarding
	 * @memberOf UsersApi#
	* @param {string} userId - User ID
	*/
	function getUserIdCallforwarding(userId){
		var apipath = '/api/v2/users/{userId}/callforwarding';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{userId}', userId);

        if(userId === undefined && userId !== null){
			throw 'Missing required  parameter: userId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getUserIdCallforwarding = getUserIdCallforwarding;
	/**
     * @summary Update a user's CallForwarding
	 * @memberOf UsersApi#
	* @param {string} userId - User ID
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "user": {
      "name": "",
      "chat": {},
      "department": "",
      "email": "",
      "addresses": [],
      "title": "",
      "username": "",
      "images": []
   },
   "enabled": true,
   "phoneNumber": "",
   "modifiedDate": ""
}
	*/
	function putUserIdCallforwarding(userId, body){
		var apipath = '/api/v2/users/{userId}/callforwarding';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{userId}', userId);

        if(userId === undefined && userId !== null){
			throw 'Missing required  parameter: userId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putUserIdCallforwarding = putUserIdCallforwarding;
	/**
     * @summary Patch a user's CallForwarding
	 * @memberOf UsersApi#
	* @param {string} userId - User ID
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "user": {
      "name": "",
      "chat": {},
      "department": "",
      "email": "",
      "addresses": [],
      "title": "",
      "username": "",
      "images": []
   },
   "enabled": true,
   "phoneNumber": "",
   "modifiedDate": ""
}
	*/
	function patchUserIdCallforwarding(userId, body){
		var apipath = '/api/v2/users/{userId}/callforwarding';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{userId}', userId);

        if(userId === undefined && userId !== null){
			throw 'Missing required  parameter: userId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PATCH', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.patchUserIdCallforwarding = patchUserIdCallforwarding;
	/**
     * @summary Get a user's Geolocation
	 * @memberOf UsersApi#
	* @param {string} userId - user Id
	* @param {string} clientId - client Id
	*/
	function getUserIdGeolocationsClientId(userId, clientId){
		var apipath = '/api/v2/users/{userId}/geolocations/{clientId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{userId}', userId);

        if(userId === undefined && userId !== null){
			throw 'Missing required  parameter: userId';
        }

        apipath = apipath.replace('{clientId}', clientId);

        if(clientId === undefined && clientId !== null){
			throw 'Missing required  parameter: clientId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getUserIdGeolocationsClientId = getUserIdGeolocationsClientId;
	/**
     * @summary Patch a user's Geolocation
	 * @description The geolocation object can be patched one of three ways. Option 1: Set the 'primary' property to true. This will set the client as the user's primary geolocation source.  Option 2: Provide the 'latitude' and 'longitude' values.  This will enqueue an asynchronous update of the 'city', 'region', and 'country', generating a notification. A subsequent GET operation will include the new values for 'city', 'region' and 'country'.  Option 3:  Provide the 'city', 'region', 'country' values.  Option 1 can be combined with Option 2 or Option 3.  For example, update the client as primary and provide latitude and longitude values.
	 * @memberOf UsersApi#
	* @param {string} userId - user Id
	* @param {string} clientId - client Id
	* @param {} body - The geolocation object can be patched one of three ways. Option 1: Set the 'primary' property to true. This will set the client as the user's primary geolocation source.  Option 2: Provide the 'latitude' and 'longitude' values.  This will enqueue an asynchronous update of the 'city', 'region', and 'country', generating a notification. A subsequent GET operation will include the new values for 'city', 'region' and 'country'.  Option 3:  Provide the 'city', 'region', 'country' values.  Option 1 can be combined with Option 2 or Option 3.  For example, update the client as primary and provide latitude and longitude values.
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "type": "",
   "primary": true,
   "latitude": {},
   "longitude": {},
   "country": "",
   "region": "",
   "city": ""
}
	*/
	function patchUserIdGeolocationsClientId(userId, clientId, body){
		var apipath = '/api/v2/users/{userId}/geolocations/{clientId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{userId}', userId);

        if(userId === undefined && userId !== null){
			throw 'Missing required  parameter: userId';
        }

        apipath = apipath.replace('{clientId}', clientId);

        if(clientId === undefined && clientId !== null){
			throw 'Missing required  parameter: clientId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PATCH', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.patchUserIdGeolocationsClientId = patchUserIdGeolocationsClientId;
	/**
     * @summary Get a OutOfOffice
	 * @memberOf UsersApi#
	* @param {string} userId - User ID
	*/
	function getUserIdOutofoffice(userId){
		var apipath = '/api/v2/users/{userId}/outofoffice';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{userId}', userId);

        if(userId === undefined && userId !== null){
			throw 'Missing required  parameter: userId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getUserIdOutofoffice = getUserIdOutofoffice;
	/**
     * @summary Update an OutOfOffice
	 * @memberOf UsersApi#
	* @param {string} userId - User ID
	* @param {} body - The updated UserPresence
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "user": {
      "name": "",
      "chat": {},
      "department": "",
      "email": "",
      "addresses": [],
      "title": "",
      "username": "",
      "images": []
   },
   "startDate": "",
   "endDate": "",
   "active": true
}
	*/
	function putUserIdOutofoffice(userId, body){
		var apipath = '/api/v2/users/{userId}/outofoffice';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{userId}', userId);

        if(userId === undefined && userId !== null){
			throw 'Missing required  parameter: userId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }

        if(body === undefined && body !== null){
			throw 'Missing required  parameter: body';
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putUserIdOutofoffice = putUserIdOutofoffice;
	/**
     * @summary Get a user's Presence
	 * @memberOf UsersApi#
	* @param {string} userId - user Id
	* @param {string} source - source
	*/
	function getUserIdPresencesSource(userId, source){
		var apipath = '/api/v2/users/{userId}/presences/{source}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{userId}', userId);

        if(userId === undefined && userId !== null){
			throw 'Missing required  parameter: userId';
        }

        apipath = apipath.replace('{source}', source);

        if(source === undefined && source !== null){
			throw 'Missing required  parameter: source';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getUserIdPresencesSource = getUserIdPresencesSource;
	/**
     * @summary Patch a user's Presence
	 * @description The presence object can be patched one of three ways. Option 1: Set the 'primary' property to true. This will set the 'source' defined in the path as the user's primary presence source. Option 2: Provide the presenceDefinition value. Option 3: Provide the message value.  Option 1 can be combined with Option2 and/or Option 3.
	 * @memberOf UsersApi#
	* @param {string} userId - user Id
	* @param {string} source - source
	* @param {} body - The presence object can be patched one of three ways. Option 1: Set the 'primary' property to true. This will set the 'source' defined in the path as the user's primary presence source. Option 2: Provide the presenceDefinition value. Option 3: Provide the message value.  Option 1 can be combined with Option2 and/or Option 3.
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "source": "",
   "primary": true,
   "presenceDefinition": {
      "name": "",
      "languageLabels": {},
      "systemPresence": "",
      "deactivated": true,
      "createdBy": {},
      "createdDate": "",
      "modifiedBy": {},
      "modifiedDate": ""
   },
   "message": ""
}
	*/
	function patchUserIdPresencesSource(userId, source, body){
		var apipath = '/api/v2/users/{userId}/presences/{source}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{userId}', userId);

        if(userId === undefined && userId !== null){
			throw 'Missing required  parameter: userId';
        }

        apipath = apipath.replace('{source}', source);

        if(source === undefined && source !== null){
			throw 'Missing required  parameter: source';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PATCH', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.patchUserIdPresencesSource = patchUserIdPresencesSource;
	/**
     * @summary Get queues for user
	 * @memberOf UsersApi#
	* @param {string} userId - User ID
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	*/
	function getUserIdQueues(userId, pageSize, pageNumber){
		var apipath = '/api/v2/users/{userId}/queues';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{userId}', userId);

        if(userId === undefined && userId !== null){
			throw 'Missing required  parameter: userId';
        }


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getUserIdQueues = getUserIdQueues;
	/**
     * @summary Join or unjoin a set of queues for a user
	 * @memberOf UsersApi#
	* @param {string} userId - User ID
	* @param {} body - User Queues
	*/
	function patchUserIdQueues(userId, body){
		var apipath = '/api/v2/users/{userId}/queues';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{userId}', userId);

        if(userId === undefined && userId !== null){
			throw 'Missing required  parameter: userId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PATCH', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.patchUserIdQueues = patchUserIdQueues;
	/**
     * @summary Join or unjoin a queue for a user
	 * @memberOf UsersApi#
	* @param {string} queueId - Queue ID
	* @param {string} userId - User ID
	* @param {} body - Queue Member
	 * @example
	 * Body Example:
	 * {
   "name": "",
   "description": "",
   "version": 0,
   "dateCreated": "",
   "dateModified": "",
   "modifiedBy": "",
   "createdBy": "",
   "state": "",
   "modifiedByApp": "",
   "createdByApp": "",
   "mediaSettings": {},
   "bullseye": {
      "rings": []
   },
   "acwSettings": {
      "wrapupPrompt": "",
      "timeoutMs": 0
   },
   "skillEvaluationMethod": "",
   "queueFlow": {
      "id": "",
      "name": "",
      "selfUri": ""
   },
   "callingPartyName": "",
   "callingPartyNumber": "",
   "joined": true,
   "memberCount": 0
}
	*/
	function patchUserIdQueuesQueueId(queueId, userId, body){
		var apipath = '/api/v2/users/{userId}/queues/{queueId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{queueId}', queueId);

        if(queueId === undefined && queueId !== null){
			throw 'Missing required  parameter: queueId';
        }

        apipath = apipath.replace('{userId}', userId);

        if(userId === undefined && userId !== null){
			throw 'Missing required  parameter: userId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PATCH', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.patchUserIdQueuesQueueId = patchUserIdQueuesQueueId;
	/**
     * @summary Returns a listing of roles and permissions for a user.
	 * @memberOf UsersApi#
	* @param {string} userId - User ID
	*/
	function getUserIdRoles(userId){
		var apipath = '/api/v2/users/{userId}/roles';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{userId}', userId);

        if(userId === undefined && userId !== null){
			throw 'Missing required  parameter: userId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getUserIdRoles = getUserIdRoles;
	/**
     * @summary Sets the user's roles
	 * @memberOf UsersApi#
	* @param {string} userId - User ID
	* @param {} body - 
	*/
	function putUserIdRoles(userId, body){
		var apipath = '/api/v2/users/{userId}/roles';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{userId}', userId);

        if(userId === undefined && userId !== null){
			throw 'Missing required  parameter: userId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putUserIdRoles = putUserIdRoles;
	/**
     * @summary Removes all the roles from the user.
	 * @memberOf UsersApi#
	* @param {string} userId - User ID
	*/
	function deleteUserIdRoles(userId){
		var apipath = '/api/v2/users/{userId}/roles';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{userId}', userId);

        if(userId === undefined && userId !== null){
			throw 'Missing required  parameter: userId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteUserIdRoles = deleteUserIdRoles;
	/**
     * @summary List routing skills for user
	 * @memberOf UsersApi#
	* @param {string} userId - User ID
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	* @param {string} sortOrder - Ascending or descending sort order
	[ascending,
	descending],
	*/
	function getUserIdRoutingskills(userId, pageSize, pageNumber, sortOrder){
		var apipath = '/api/v2/users/{userId}/routingskills';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{userId}', userId);

        if(userId === undefined && userId !== null){
			throw 'Missing required  parameter: userId';
        }


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		if(sortOrder !== undefined && sortOrder !== null){
			queryParameters.sortOrder = sortOrder;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getUserIdRoutingskills = getUserIdRoutingskills;
	/**
     * @summary Add routing skill to user
	 * @memberOf UsersApi#
	* @param {string} userId - User ID
	* @param {} body - Skill
	 * @example
	 * Body Example:
	 * {
   "name": ""
}
	*/
	function postUserIdRoutingskills(userId, body){
		var apipath = '/api/v2/users/{userId}/routingskills';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{userId}', userId);

        if(userId === undefined && userId !== null){
			throw 'Missing required  parameter: userId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postUserIdRoutingskills = postUserIdRoutingskills;
	/**
     * @summary Remove routing skill from user
	 * @memberOf UsersApi#
	* @param {string} userId - User ID
	* @param {string} skillId - 
	*/
	function deleteUserIdRoutingskillsSkillId(userId, skillId){
		var apipath = '/api/v2/users/{userId}/routingskills/{skillId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{userId}', userId);

        if(userId === undefined && userId !== null){
			throw 'Missing required  parameter: userId';
        }

        apipath = apipath.replace('{skillId}', skillId);

        if(skillId === undefined && skillId !== null){
			throw 'Missing required  parameter: skillId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteUserIdRoutingskillsSkillId = deleteUserIdRoutingskillsSkillId;
	/**
     * @summary Fetch the routing status of a user
	 * @memberOf UsersApi#
	* @param {string} userId - User ID
	*/
	function getUserIdRoutingstatus(userId){
		var apipath = '/api/v2/users/{userId}/routingstatus';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{userId}', userId);

        if(userId === undefined && userId !== null){
			throw 'Missing required  parameter: userId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getUserIdRoutingstatus = getUserIdRoutingstatus;
	/**
     * @summary Update the routing status of a user
	 * @memberOf UsersApi#
	* @param {string} userId - User ID
	* @param {} body - Routing Status
	 * @example
	 * Body Example:
	 * {
   "userId": "",
   "status": "",
   "startTime": ""
}
	*/
	function putUserIdRoutingstatus(userId, body){
		var apipath = '/api/v2/users/{userId}/routingstatus';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{userId}', userId);

        if(userId === undefined && userId !== null){
			throw 'Missing required  parameter: userId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putUserIdRoutingstatus = putUserIdRoutingstatus;
	/**
     * @summary Get station information for user
	 * @memberOf UsersApi#
	* @param {string} userId - User ID
	*/
	function getUserIdStation(userId){
		var apipath = '/api/v2/users/{userId}/station';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{userId}', userId);

        if(userId === undefined && userId !== null){
			throw 'Missing required  parameter: userId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getUserIdStation = getUserIdStation;
	/**
     * @summary Clear associated station
	 * @memberOf UsersApi#
	* @param {string} userId - User ID
	*/
	function deleteUserIdStationAssociatedstation(userId){
		var apipath = '/api/v2/users/{userId}/station/associatedstation';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{userId}', userId);

        if(userId === undefined && userId !== null){
			throw 'Missing required  parameter: userId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteUserIdStationAssociatedstation = deleteUserIdStationAssociatedstation;
	/**
     * @summary Set associated station
	 * @memberOf UsersApi#
	* @param {string} userId - User ID
	* @param {string} stationId - 
	*/
	function putUserIdStationAssociatedstationStationId(userId, stationId){
		var apipath = '/api/v2/users/{userId}/station/associatedstation/{stationId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{userId}', userId);

        if(userId === undefined && userId !== null){
			throw 'Missing required  parameter: userId';
        }

        apipath = apipath.replace('{stationId}', stationId);

        if(stationId === undefined && stationId !== null){
			throw 'Missing required  parameter: stationId';
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putUserIdStationAssociatedstationStationId = putUserIdStationAssociatedstationStationId;
	/**
     * @summary Clear default station
	 * @memberOf UsersApi#
	* @param {string} userId - User ID
	*/
	function deleteUserIdStationDefaultstation(userId){
		var apipath = '/api/v2/users/{userId}/station/defaultstation';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{userId}', userId);

        if(userId === undefined && userId !== null){
			throw 'Missing required  parameter: userId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteUserIdStationDefaultstation = deleteUserIdStationDefaultstation;
	/**
     * @summary Set default station
	 * @memberOf UsersApi#
	* @param {string} userId - User ID
	* @param {string} stationId - 
	*/
	function putUserIdStationDefaultstationStationId(userId, stationId){
		var apipath = '/api/v2/users/{userId}/station/defaultstation/{stationId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{userId}', userId);

        if(userId === undefined && userId !== null){
			throw 'Missing required  parameter: userId';
        }

        apipath = apipath.replace('{stationId}', stationId);

        if(stationId === undefined && stationId !== null){
			throw 'Missing required  parameter: stationId';
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putUserIdStationDefaultstationStationId = putUserIdStationDefaultstationStationId;

    return self;
};

//API VERSION - 
/**
* @class
* @example
* var api = new UtilitiesApi(pureCloudSession);
*/
var UtilitiesApi = function (pureCloudSession) {
	if(!pureCloudSession){
		throw "PureCloudSession is not valid.";
    }

	var self = this;
	/**
     * @summary Returns the information about an X509 PEM encoded certificate or certificate chain.
	 * @memberOf UtilitiesApi#
	* @param {} body - 
	 * @example
	 * Body Example:
	 * {
   "certificate": ""
}
	*/
	function postDetails(body){
		var apipath = '/api/v2/certificate/details';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('POST', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.postDetails = postDetails;
	/**
     * @summary Get the current system date/time
	 * @memberOf UtilitiesApi#
	*/
	function getDate(){
		var apipath = '/api/v2/date';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getDate = getDate;
	/**
     * @summary Get time zones list
	 * @memberOf UtilitiesApi#
	* @param {integer} pageSize - Page size
	* @param {integer} pageNumber - Page number
	*/
	function getTimezones(pageSize, pageNumber){
		var apipath = '/api/v2/timezones';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		if(pageSize !== undefined && pageSize !== null){
			queryParameters.pageSize = pageSize;
		}


		if(pageNumber !== undefined && pageNumber !== null){
			queryParameters.pageNumber = pageNumber;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getTimezones = getTimezones;

    return self;
};

//API VERSION - 
/**
* @class
* @example
* var api = new VoicemailApi(pureCloudSession);
*/
var VoicemailApi = function (pureCloudSession) {
	if(!pureCloudSession){
		throw "PureCloudSession is not valid.";
    }

	var self = this;
	/**
     * @summary Get mailbox information
	 * @memberOf VoicemailApi#
	*/
	function getMailbox(){
		var apipath = '/api/v2/voicemail/mailbox';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getMailbox = getMailbox;
	/**
     * @summary List voicemail messages
	 * @memberOf VoicemailApi#
	*/
	function getMessages(){
		var apipath = '/api/v2/voicemail/messages';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getMessages = getMessages;
	/**
     * @summary Delete all voicemail messages
	 * @memberOf VoicemailApi#
	*/
	function deleteMessages(){
		var apipath = '/api/v2/voicemail/messages';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteMessages = deleteMessages;
	/**
     * @summary Get message.
	 * @memberOf VoicemailApi#
	* @param {string} messageId - Message ID
	*/
	function getMessagesMessageId(messageId){
		var apipath = '/api/v2/voicemail/messages/{messageId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{messageId}', messageId);

        if(messageId === undefined && messageId !== null){
			throw 'Missing required  parameter: messageId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getMessagesMessageId = getMessagesMessageId;
	/**
     * @summary Update a message.
	 * @memberOf VoicemailApi#
	* @param {string} messageId - Message ID
	* @param {} body - VoicemailMessage
	 * @example
	 * Body Example:
	 * {
   "conversation": {
      "name": "",
      "startTime": "",
      "endTime": "",
      "address": "",
      "participants": [],
      "conversationIds": [],
      "maxParticipants": 0,
      "recordingState": ""
   },
   "read": true,
   "audioRecordingDurationSeconds": 0,
   "audioRecordingSizeBytes": 0,
   "createdDate": "",
   "modifiedDate": "",
   "callerAddress": "",
   "callerName": "",
   "callerUser": {
      "name": "",
      "chat": {},
      "department": "",
      "email": "",
      "addresses": [],
      "title": "",
      "username": "",
      "images": []
   }
}
	*/
	function putMessagesMessageId(messageId, body){
		var apipath = '/api/v2/voicemail/messages/{messageId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{messageId}', messageId);

        if(messageId === undefined && messageId !== null){
			throw 'Missing required  parameter: messageId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putMessagesMessageId = putMessagesMessageId;
	/**
     * @summary Delete a message.
	 * @memberOf VoicemailApi#
	* @param {string} messageId - Message ID
	*/
	function deleteMessagesMessageId(messageId){
		var apipath = '/api/v2/voicemail/messages/{messageId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{messageId}', messageId);

        if(messageId === undefined && messageId !== null){
			throw 'Missing required  parameter: messageId';
        }


		return pureCloudSession.makeRequest('DELETE', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.deleteMessagesMessageId = deleteMessagesMessageId;
	/**
     * @summary Get media playback URI for this message
	 * @memberOf VoicemailApi#
	* @param {string} messageId - Message ID
	* @param {string} formatId - The desired format (WEBM, WAV, etc.)
	WEBM,
	WAV,
	*/
	function getMessagesMessageIdMedia(messageId, formatId){
		var apipath = '/api/v2/voicemail/messages/{messageId}/media';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{messageId}', messageId);

        if(messageId === undefined && messageId !== null){
			throw 'Missing required  parameter: messageId';
        }


		if(formatId !== undefined && formatId !== null){
			queryParameters.formatId = formatId;
		}


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getMessagesMessageIdMedia = getMessagesMessageIdMedia;
	/**
     * @summary Get a policy
	 * @memberOf VoicemailApi#
	*/
	function getPolicy(){
		var apipath = '/api/v2/voicemail/policy';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getPolicy = getPolicy;
	/**
     * @summary Update a policy
	 * @memberOf VoicemailApi#
	* @param {} body - Policy
	 * @example
	 * Body Example:
	 * {
   "enabled": true,
   "retentionTimeDays": 0,
   "alertTimeoutSeconds": 0,
   "minimumRecordingTimeSeconds": 0,
   "maximumRecordingTimeSeconds": 0,
   "unavailableMessageUri": "",
   "namePromptMessageUri": "",
   "fullMessageUri": "",
   "compressSilence": true,
   "pinConfiguration": {
      "minimumLength": 0,
      "maximumLength": 0
   },
   "quotaSizeBytes": 0,
   "createdDate": "",
   "modifiedDate": "",
   "voicemailExtension": "",
   "pinRequired": true
}
	*/
	function putPolicy(body){
		var apipath = '/api/v2/voicemail/policy';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        if(body !== undefined && body !== null){
            requestBody = body;
        }


		return pureCloudSession.makeRequest('PUT', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.putPolicy = putPolicy;
	/**
     * @summary Get a user's voicemail policy
	 * @memberOf VoicemailApi#
	* @param {string} userId - User ID
	*/
	function getUserpoliciesUserId(userId){
		var apipath = '/api/v2/voicemail/userpolicies/{userId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{userId}', userId);

        if(userId === undefined && userId !== null){
			throw 'Missing required  parameter: userId';
        }


		return pureCloudSession.makeRequest('GET', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.getUserpoliciesUserId = getUserpoliciesUserId;
	/**
     * @summary Update a user's voicemail policy
	 * @memberOf VoicemailApi#
	* @param {string} userId - User ID
	* @param {} body - The user's voicemail policy
	 * @example
	 * Body Example:
	 * {
   "enabled": true,
   "alertTimeoutSeconds": 0,
   "minimumRecordingTimeSeconds": 0,
   "maximumRecordingTimeSeconds": 0,
   "unavailableMessageUri": "",
   "namePromptMessageUri": "",
   "fullMessageUri": "",
   "pin": "",
   "quotaSizeBytes": 0,
   "createdDate": "",
   "modifiedDate": ""
}
	*/
	function patchUserpoliciesUserId(userId, body){
		var apipath = '/api/v2/voicemail/userpolicies/{userId}';
	    var requestBody;
	    var queryParameters = {};
	    var headers = {};
	    var form = {};

        apipath = apipath.replace('{userId}', userId);

        if(userId === undefined && userId !== null){
			throw 'Missing required  parameter: userId';
        }

        if(body !== undefined && body !== null){
            requestBody = body;
        }

        if(body === undefined && body !== null){
			throw 'Missing required  parameter: body';
        }


		return pureCloudSession.makeRequest('PATCH', apipath + '?' +$.param(queryParameters), requestBody);
	}
	self.patchUserpoliciesUserId = patchUserpoliciesUserId;

    return self;
};

//API VERSION - 0.33.0
/**
* @description PureCloud API
* @class
* @param  {string} environment (Optional) The environment that this is run in.  If set should be mypurecloud.com, mypurecloud.ie, mypurecloud.com.au, etc.
**/
var PureCloudSession =  function (purecloudEnvironment) {

    var _environment = purecloudEnvironment || "mypurecloud.com";
    var _host = 'api.'+ _environment;
    var _auth_url = '';

    var _token = null;
    var _state = null;
    var self = {};
    var _debug = false;

    if(typeof window !== 'undefined') {
		if(window && window.localStorage && window.localStorage.authtoken){
            _token = window.localStorage.authtoken;
        }

		if(window.location.hash)
		{
	        //Parse out the hash values of the URL to get the token
	        var hash_array = location.hash.substring(1).split('&');
	        var hash_key_val = new Array(hash_array.length);
	        for (var i = 0; i < hash_array.length; i++) {
	            hash_key_val[i] = hash_array[i].split('=');
	        }

	        hash_key_val.forEach(function (pair) {
	            if (pair[0] == "access_token") {

	                // Store token
	                _token = pair[1];

	                // Clear hash from URL
	                location.hash = '';
	            }

	            if (pair[0] == "state") {
	                // Store token
	                _state = pair[1];
	            }
	        });
		}
    }



    /**
     * @description Gets or sets the debugging flag.  When debugging is on, Ajax requests are logged to the console.
     * @param {boolean} debugOn Should debug or not.
     * @memberOf PureCloudSession#
     */
    function debug (debugOn){
        if(typeof debugOn !== 'undefined') {
            _debug = debugOn === true;
        }

        return _debug;
    }
    self.debug = debug;

    /**
	 * @description Gets the value of State that was passed into the .authorize method
     * @memberOf PureCloudSession#
     */
    function getState (){
        return _state;
    }
    self.getState = getState;

    /**
	 * Initiates a redirect to authorize the client using oauth.  This is not a valid operation in NodeJS usage.
     * @memberof PureCloudSession#
     * @param  {string} clientId    The application's Client ID
	 * @param  {string} redirectUrl The redirect URL to return to after authentication. This must be an authorized URL for the client.
	 * @example pureCloudSession.authorize('XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX', 'http://localhost:8085/examples/').done(function(){
         //this method will be called once we have a valid authorization token
         // if we don't have one a redirect to login will be called and then after redirecting back here,
         // the done method will be called.
     });
     *
     * @example pureCloudSession.authorize('XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX', 'http://localhost:8085/examples/', "State Value");
     */
    function authorize(clientId, redirectUrl, state){
        var _doneCallback = function(){console.error("callback not set");};

        var defer = {
            done: function(callback){
                _doneCallback = callback;
            }
        };

        var existingToken = null;

        if(window && window.localStorage){
            existingToken = window.localStorage.authtoken;
        }

        if(_token){
            existingToken = _token;
        }

        function authRedirect(){
            _auth_url = 'https://login.'+_environment;

            var url = _auth_url + '/authorize' +
                '?response_type=token' +
                '&client_id=' + encodeURI(clientId) +
                '&redirect_uri=' + encodeURI(redirectUrl);

            if(state !== undefined && state !== null){
                url = url + '&state=' + state;
            }

            //console.debug(url);

            // Redirect to oauth url
            //console.debug('Initiating oauth process');
            window.location.replace(url);
        }

        if(existingToken && existingToken !== ''){
            _token = existingToken;
            sendRestRequest("GET", "https://" + _host + "/api/v1/users/me").done(function(){
                //has good auth token
                _token = existingToken;

                if(window && window.localStorage){
                    window.localStorage.authtoken = _token;
                }

                _doneCallback();

            }).error(function(){
                //don't have an auth token yet
                authRedirect();
            });
        }else{
            authRedirect();
        }

        return defer;
    }
    self.authorize = authorize;

    /**
	 * Gets an authentication token for a client credentials grant.
     * @memberof PureCloudSession#
     * @param  {string} clientId    The application's Client ID
	 * @param  {string} clientSecret The application's Client Secret
     * @example pureCloudSession.authorize('XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX', 'SECRET').done(function(){
         //this method will be called once we have a valid authorization token
     }).error(function(err){
         //This method is called if there is an error getting the authorization token.
     });
     */
    function authorizeWithClientCredentialsGrant(clientId, clientSecret){
        var _doneCallback = function(){console.error("callback not set");};
        var _errorCallback = function(){console.error("callback not set");};

        var defer = {
            done: function(callback){
                _doneCallback = callback;
                return this;
            },
            error: function(callback){
                _errorCallback = callback;
                return this;
            }
        };

        _auth_url = 'https://login.'+_environment;
        setTimeout(function(){
            $.ajax
                ({
                  type: "POST",
                  url: _auth_url +"/token",
                  async: false,
                  username:clientId,
                  password: clientSecret,
                  data: {grant_type:'client_credentials'}
                }).fail(function(err){
                    _errorCallback(err);
                } ).done(function(data){
                    _token = data.access_token;
                    _doneCallback();
                });
        },10);
        return defer;
    }
    self.authorizeWithClientCredentialsGrant = authorizeWithClientCredentialsGrant;

    /**
     * Gets or sets the authorization token.  Setting is only needed if not using .authorize(...)
     * @memberof PureCloudSession#
     * @param  {string} token Authorization token
     * @example
     * var token = pureCloudSession.authToken();
     * @example
     * pureCloudSession.authToken(token);
     */
    function authToken(token){
        if(token){
            _token = token;
        }
        return _token;
    }
    self.authToken = authToken;

    /**
     * Returns true if the authorization token is set
     * @memberof PureCloudSession#
     */
    function hasAuthorizationToken(){
        return _token !== null;
    }
    self.hasAuthorizationToken=hasAuthorizationToken;

    /**
     * Clears authorization token and logs out.
     * @memberof PureCloudSession#
     */
    function logout(){
        _token = null;

        if(window && window.localStorage){
            delete window.localStorage.authtoken;
        }

		window.location.replace(_auth_url + "/logout");
    }
    self.logout = logout;

    /**
    * Gets or Sets environment that this is run in.  If set should be mypurecloud.com, mypurecloud.ie, mypurecloud.com.au, etc.
    * @memberof PureCloudSession#
    * @param  {string} environment PureCloud environment (mypurecloud.com, mypurecloud.ie, mypurecloud.au, etc)
    * @example
    * var environment = pureCloudSession.environment();
    * @example
    * pureCloudSession.authToken("mypurecloud.ie");
    **/
    function environment(environment){
        if(environment){
            _environment = environment;
            _host = 'api.'+ environment;
            _auth_url = 'https://login.'+environment;
        }

        return _environment;
    }
    self.environment = environment;

    function sendRestRequest(method, url, body){
        var requestParams = {
             method: method,
             url: url,
             headers: {
                 'Accept': 'application/json',
                 'Content-Type': 'application/json'
             },
             beforeSend: function(xhr){xhr.setRequestHeader('Authorization', 'bearer ' + _token);},
             timeout: 2000
         };

         if (typeof jsdom !== "undefined") {
             requestParams.headers['User-Agent'] = "PureCloud SDK/Javascript 0.33.0";
         }

         if(body){
             requestParams.data = JSON.stringify(body);
         }

         if(_debug){
             console.log(method + " " + url);
             console.log(requestParams);
         }

         var request = $.ajax(requestParams);

         return request;
    }

    /**
     * Executes an authenticated GET to PureCloud.  Can be used with paging URIs to get a page that has a defined full url.
     * @memberof PureCloudSession#
     * @param  {string} url The full or relative path URL to get
     * @example pureCloudSession.get("https://api.mypurecloud.com/api/v1/users/me");
     * @example pureCloudSession.get("/api/v1/users/me");
     */
    function get(url){
        if(url[0] === '/'){
            url = 'https://'+ _host + url;
        }

        return sendRestRequest("GET", url);
    }
    self.get = get;

    /**
     * Executes an authenticated request to PureCloud
     * @memberof PureCloudSession#
     * @param  {string} method The HTTP method (GET, POST, PUT, DELETE)
     * @param  {uri} path The relative uri path
     * @param  {JSON} body The body to send
     * @example pureCloudSession.makeRequest("GET", "/api/v1/users/me");
     */
    function makeRequest (method,path,body){
        return sendRestRequest(method, 'https://'+ _host + path, body);
    }
    self.makeRequest = makeRequest;

	return self;
};
