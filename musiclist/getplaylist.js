	'use strict';

	const AWS = require('aws-sdk');
	const dynamoDb = new AWS.DynamoDB.DocumentClient();
	const params = {
		TableName: 'musicapplist'
	};

	module.exports.getplaylist = (event, context, callback) => {
		dynamoDb.scan(params, (error, result) =>{
			if (error) {
				console.error(error);
				callback(new Error('Unable to get all music playlist info.'));
				return;
			}

			const response = {
				statusCode: 200,
				body: JSON.stringify(result.Items)
			};

			callback(null, response);
		});
	};
