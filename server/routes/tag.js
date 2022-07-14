const express = require("express");
 
const tagRoutes = express.Router();
 
// This will help us connect to the database
const dbo = require("../db/conn");

 
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
 
// This section will help you get a single tag
tagRoutes.route("/tag/one").get(function (req, res) {
  
 let db_connect = dbo.getDb("bank-statements");

 // TODO $and
 let myquery = { $or: [{tagged: false}, {tagged: undefined}] };
//  let myquery = { tagged: true };
 db_connect
     .collection("transactions")
     .findOne(myquery, function (err, result) {
       if (err) throw err;
       res.json(result);
     });
});


// TODO: updateMany: tagged = false
// This section will help you update a tag by id.
tagRoutes.route("/update/:id").post(function (req, response) {
  // ?
 let db_connect = dbo.getDb("bank-statements"); 
 let myquery = { id: req.params.id }; 
 console.log(req.params.id);
 let newvalues = {   
   $set: {
     ...req.body,
     category: req.body.category,
     usersTagged: req.body.usersTagged,
     userCategories: req.body.userCategories,
     tagged: req.body.tagged
   }, 
  }
  
  db_connect.collection("transactions").findOneAndUpdate(
    myquery,
    newvalues
  )
});
 
module.exports = tagRoutes;