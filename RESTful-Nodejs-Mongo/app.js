const Express = require("express");
const BodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectId;
require("dotenv").config();

var app = Express();
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

var database, collection;

app.listen(3000, () => {
  console.log("Server is running on port 3000");

  MongoClient.connect(
    process.env.CONNECTION_URL,
    { useNewUrlParser: true },
    (err, client) => {
      if (err) {
        console.log(err);
        return null;
      }

      database = client.db(process.env.DATABASE_NAME);
      collection = database.collection(process.env.COLLECTION_NAME);
      console.log("Database connected");
    }
  );
});

app.get("/personnel", (request, response) => {
  collection.find({}).toArray((error, result) => {
    if (error) {
      return response.status(500).send(error);
    }
    response.send(result);
  });
});

app.get("/personnel/:id", (request, response) => {
  collection.findOne(
    { _id: new ObjectId(request.params.id) },
    (error, result) => {
      if (error) {
        return response.status(500).send(error);
      }
      response.send(result);
    }
  );
});
