//REQUIREMENTS
var express = require("express"),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    task=require("./models/task"),
    cors=require("cors")


//CONFIGURATIONS
const app = express();
app.use(cors())
app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());

mongoose.connect('mongodb+srv://dddd:deepbeatz08@cluster0-j2df9.mongodb.net/ToDo?retryWrites=true&w=majority', {useNewUrlParser: true});
var PORT =process.env.PORT || 5000;

//SERVICES
app.get('/api/tasks', async (req, res) => {
    task.find({},(err,tasks)=>{  
        res.send({"tasks":tasks});
    })
  });

app.post('/api/tasks', async (req, res) => {
    var body=req.body;
    var uname=body.userName; 
    var tname=body.taskName;
    var tstatus=body.taskStatus;
    data={"userName":uname,"taskName":tname,"taskStatus":tstatus}
    task.create(data,(err,task)=>{
        if(err){
            console.log(err);
            res.send({"status":"error"});
        }
        else{
            console.log("success");
            res.send({"status":"success"});
        }
    })
});


//SERVER
app.listen(PORT, () => console.log(`Server started on localhost:${PORT}`));
