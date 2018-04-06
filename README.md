#  music app
Make music app (only back-end) like a spotify.

1. App can add all of audio files in an S3 bucket to a DynamoDB as soon as a user upload in s3.

2. App can search for a song(the name of the file).

3. App can return all of the songs(files) in the S3 bucket.

4. App can create a new playlist and add a song to that playlist in another DynamoDB.


## The purpose of this application
To learn how to use s3, DynamoDB, and the serverless framework.

### How can it be testesd? 

#### s3 and postman


#### Store(Post) a music and add info to DynamoDB
Simply upload mp3 in s3

#### Get one music information 
Choose "GET" and type URL/{name} in the box next to the http method

#### Get all music information 
Choose "GET" and type URL in the box next to the http method

#### Make a music playlist and add a song in there 
Choose "POST", type URL in the box next to the http method and JSON data in the Body like 
{
    "playlistname": "relaxmusic",
    "category": "relax",
    "musicname": "testtwo.mp3"
}

#### Get all music information
Choose "GET" and type URL in the box next to the http method


### What I used
Javascript, AWS s3, AWS DynamoDB, Serverless Framework
