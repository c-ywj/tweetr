"use strict";

const MongoClient = require("mongodb").MongoClient;
const MONGODB_URI = "MONGODB://localhost:27017/tweeter";

MongoClient.connect(MONGODB_URI, (err, db) => {
  if (err) {
    console.error(`Failed to connect: ${MONGO_URI}`);
    throw err;
  }

  console.log(`Connected to mongodb: ${MONGODB_URI}`);

  function getTweets(callback) {
    db.collection("tweets").find().toArray(callback);
  }

  getTweets((err, tweets) => {
    if (err) throw err;
    console.log("Logging each tweet:");
    for(let tweet of tweets) {
      console.log(tweet);
    }

    db.close();
  });
});
// short version of code block below, does the same thing.
  // db.collection("tweets").find().toArray((err, results) => {
  //   if(err) throw err;

  //   console.log(results);

  //   db.close();
  // });


// long version of accessing "tweets" collection in "tweeter" DB, returns DOC's in an array.
  // db.collection("tweets").find({}, (err, result) => {
  //   if (err) throw err;
  //   console.log("for each item yielded by the cursor: ");

  //   result.toArray((err, resultsArray) => {
  //     if (err) throw err;

  //     console.log("results.toArray:", resultsArray);
  //   });

  //   db.close();
  // });