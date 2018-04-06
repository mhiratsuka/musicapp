	'use strict';

	const AWS = require('aws-sdk');
	const uuid = require('uuid');
	const dynamoDb = new AWS.DynamoDB.DocumentClient();
	const s3 = new AWS.S3();

	module.exports.musicupload = (event) => {
		  event.Records.forEach((record) => {
			    const musicname = record.s3.object.key;
		    	const uploadtime = record.eventTime;
		    	const eventtype = record.eventName;

		    	const dbparams = {
		              TableName: 'musicapp',
		              Item: {
		              	id: uuid.v1(),
		                name: musicname,
		                date: uploadtime,
		                event:eventtype
		              }
		        };

		        dynamoDb.put(dbparams, (error, result) =>{
		            if (error) {
		              console.error(error);
		              callback(new Error('Unable to add mp3 info.'));
		              return;
		            };

		            const response = {
		              statusCode: 200,
		              body: JSON.stringify(result.Item)
		            };

		            callback(null, response);
		          });
	      });
    }

