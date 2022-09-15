const Record = require("../models/Record");
const csv = require('jquery-csv');


// post data
exports.sendData = (req,res)=>{
    // validate request
    if(!req.body){
        res.status(400).send({ message : "Content can not be emtpy!"});
        return;
    }

    // parse the the data to json
    // save the data in form of objects

}
