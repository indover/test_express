const MongoClient = require('mongodb').MongoClient,
    url = "mongodb://localhost:27017/test";

MongoClient.connect(url, function (err, db) {
   if (err) throw err;
   console.log("DB created");
   db.close;
});

