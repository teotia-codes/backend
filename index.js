const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
const personData = [];
port = 7868;

app.listen(port, ()=> {
    console.log(`Successfully connected to ${port}`);
});

// Post API
app.post("/api/add_person",(req,res)=> {
    console.log("Result", req.body);
    const pdata = {
        "id": personData.length + 1,
        "pname": req.body.pname,
        "pphone": req.body.pphone,
        "pAge": req.body.pAge
    };
    personData.push(pdata);
    console.log("Final Result", pdata);
    res.status(200).send({
        "Status code": 200,
        "Message": "Person is added successfully",
        "person": pdata
    });
});

//GET API
app.get("/api/get_person",(req, res)=>{
    if(personData.length > 0){
        res.status(200).send({
            "status_code" : 200,
            "person" : personData,
        });
    }else {
            res.status(200).send({
                "status_code" : 200,
                "person" : [],
            });
    }
});