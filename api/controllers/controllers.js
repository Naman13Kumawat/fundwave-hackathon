const Record = require("../models/Record");
const csv = require('csv-parser')
const fs = require('fs')
const results = [{}];

// post data
exports.sendData = (req,res)=>{
    // validate request
    if(!req.body){
        res.status(400).send({ message : "Content can not be emtpy!"});
        return;
    }

    // var parser = parse({columns: true}, function (err, records) {
    //     console.log(records);
    // });

    const results = [];
    fs.createReadStream('E://fundwave-hackathon/api/WebAnalyticsData.xlsx')
    .pipe(csv())
    .on('data',(data)=>results.push(data))
    .on('end',()=>{
        console.log(results);
    });
    res.status(200);
}

//yyyy-mm-dd
async function getLTM(date , page){
    try{
        let obj;
        if(page){
         obj = await Record.find({"period_type": "LTM" , "period_date" : date});   
        }else{
            obj = await Record.find({"period_type": "LTM" , "period_date" : date , "page" : page});
        }
        if(obj) return obj.visits;
        const myArray = text.split("-");
        let month = parseInt(myArray[1]);
        let sum = 0;
        for(let i=month ; i>=3 ; i-=3){
            myArray[1] = toString(i);
            let str = myArray.join("-");
            sum+=getLQ(str);
        }
        return sum;
    }catch(err){
        console.log("Error in getLTM");
    }
}


async function getLQ(date , page){
    try{
        let obj;
        if(page){
         obj = await Record.find({"period_type": "LQ" , "period_date" : date});   
        }else{
            obj = await Record.find({"period_type": "LQ" , "period_date" : date , "page" : page});
        }
        if(obj) return obj.visits;
        const myArray = text.split("-");
        let month = parseInt(myArray[1]);
        let sum = 0;
        for(let i=month ; i>month-3 ; i--){
            myArray[1] = toString(i);
            let str = myArray.join("-");
            sum+=getLM(str);
        }
        return sum;
    }catch(err){
        console.log("Error in getLQ");
    }
}

async function getLM(date){
    try{
        let obj;
        if(page){
         obj = await Record.find({"period_type": "LM" , "period_date" : date});   
        }else{
            obj = await Record.find({"period_type": "LM" , "period_date" : date , "page" : page});
        } 
        if(obj) return obj.visits;
        return 0;
    }catch(err){
        console.log("Error in getLM");
    }
}

exports.getAll = (req,res) => {
    let date = req.date , type = req.type , count;
    if(type=="LTM") count = getLTM(date , "");
    if(type=="LQ") count = getLQ(date , "");
    else count = getLM(date , "");
    res.json({
        "data":count,
    })
}

exports.getSeperate = (req,res) => {
    let date = req.date , type = req.type;
    let pages = ["dashboard" , "careers" , "contact"]
    let counts=[];
    if(type=="LTM"){
        for(let i=0 ; i<3 ; i++){
            let count = getLTM(date , pages[i]);
            counts.push(count);
        }
    } 
    if(type=="LQ"){
        for(let i=0 ; i<3 ; i++){
            let count = getLQ(date , pages[i]);
            counts.push(count);
        }
    } 
    else{
        for(let i=0 ; i<3 ; i++){
            let count = getLM(date , pages[i]);
            counts.push(count);
        }
    }
    return res.json({
        "data" : counts,
    })
}