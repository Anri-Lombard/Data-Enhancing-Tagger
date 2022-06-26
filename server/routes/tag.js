const express = require("express");
 
// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const tagRoutes = express.Router();
 
// This will help us connect to the database
const dbo = require("../db/conn");
 
// This help convert the id from string to ObjectId for the _id.
// const ObjectId = require("mongodb").ObjectId;
 
 
// This section will help you get a list of all the records.
tagRoutes.route("/tag").get(function (req, res) {
 let db_connect = dbo.getDb("bank-statements");
 db_connect
   .collection("transactions")
   .find({})
   .toArray(function (err, result) {
     if (err) throw err;
     res.json(result);
   });
});
 
// This section will help you get a single tag by id
// tagRoutes.route("/tag/:id").get(function (req, res) {
//  let db_connect = dbo.getDb();
//  let myquery = { id: req.params.id };
//  db_connect
//      .collection("transactions")
//      .findOne(myquery, function (err, result) {
//        if (err) throw err;
//        res.json(result);
//      });
// });
 
// This section will help you create a new tag.
// tagRoutes.route("/tag/add").post(function (req, response) {
//  let db_connect = dbo.getDb();
//  let myobj = {
//    name: req.body.name,
//    position: req.body.position,
//    level: req.body.level,
//  };
//  db_connect.collection("records").insertOne(myobj, function (err, res) {
//    if (err) throw err;
//    response.json(res);
//  });
// });
 
// This section will help you update a tag by id.
tagRoutes.route("/update/:id").post(function (req, response) {
  //TODO: potentially use _id
 let db_connect = dbo.getDb("bank-statements"); 
 let myquery = { id: req.params.id }; 
 console.log(req.params.id);
 let newvalues = {   
   $set: {
    //  id: req.params.id,
    //  date: req.params.date,
    //  description: req.body.description,
    //  balance: req.body.balance,
    //  transactionValue: req.body.transactionValue,
     category: req.body.category
   }, 
  }
  console.log("Making strides");
  db_connect.collection("transactions").findOneAndUpdate(
    myquery,
    newvalues
  )
});
 
// This section will help you delete a tag
// recordRoutes.route("/:id").delete((req, response) => {
//  let db_connect = dbo.getDb();
//  let myquery = { _id: ObjectId( req.params.id )};
//  db_connect.collection("records").deleteOne(myquery, function (err, obj) {
//    if (err) throw err;
//    console.log("1 document deleted");
//    response.json(obj);
//  });
// });
 
module.exports = tagRoutes;