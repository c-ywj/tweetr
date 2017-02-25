"use strict";

const MongoClient = require("mongodb").MongoClient;
const MONGODB_URI = "MONGODB://localhost:27017/tweeter";

MongoClient.connect(MONGODB_URI, (err, db) => {
  if (err) {
    console.error(`Failed to connect: ${MONGO_URI}`);
    throw err;
  }

  console.log(`Connected to mongodb: ${MONGODB_URI}`);

  db.close();

});