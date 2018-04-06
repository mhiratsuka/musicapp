	'use strict';

	const uuid = require('uuid');
	const AWS = require('aws-sdk');
	const dynamoDb = new AWS.DynamoDB.DocumentClient();

	module.exports.makeplaylist = (event, context, callback) => {
		const data = JSON.parse(event.body);

		const params = {
			TableName: 'musicapplist',
			Item: {
				id: uuid.v1(),
				playlistname: data.playlistname,
				category: data.category,
				musicname: data.musicname
			}
		};

		dynamoDb.put(params, (error, result) =>{
			if (error) {
				console.error(error);
				callback(new Error('Unable to make playlist.'));
				return;
			}

			const response = {
				statusCode: 200,
				body: JSON.stringify(result.Item)
			}

			callback(null, response);
		});
	};