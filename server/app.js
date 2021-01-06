const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
require('./Room')

app.use(bodyParser.json())

password="WqAonSUj7T1dg2Ji";
const mongoURL = "mongodb+srv://admin:WqAonSUj7T1dg2Ji@thecodexcluster.dod7b.mongodb.net/TheCodex?retryWrites=true&w=majority";
const Room = mongoose.model("room")

mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
mongoose.connection.on("connected", ()=>{
    console.log("connected on mongo!")
})

mongoose.connection.on("err", (err)=>{
    console.log("error",err)
})

app.get('/', (req,res)=>{
    Room.find({}).then(data=>{
        res.send(data)
    }).catch(err=>{
        console.log(err)
    })
})

app.post('/send',(req, res)=>{
    const room = new Room({
        title: req.body.title,
        description: req.body.description,
        time: req.body.time,
        roomPrice: req.body.roomPrice,
        clientPrice: req.body.clientPrice,
        picture: req.body.picture,
        language: req.body.language,
        team: req.body.team,
        observation: req.body.observation
    })
    room.save().then(data=>{
        console.log(data)
        res.send(data)
    }).catch(err => {
        console.log(err)
    })
})


app.post('/delete',(req,res)=>{
    Room.findByIdAndRemove(req.body.id).then(data=>{
        console.log(data)
        res.send(data);
    }).catch(err=>{
        console.log(err)
    })
})

app.post('/update',(req,res)=>{
    Room.findByIdAndUpdate(req.body.id,{
        title: req.body.title,
        description: req.body.description,
        time: req.body.time,
        roomPrice: req.body.roomPrice,
        clientPrice: req.body.clientPrice,
        picture: req.body.picture,
        language: req.body.language,
        team: req.body.team,
        observation: req.body.observation
    }).then(data=>{
        console.log(data)
        res.send(data)
    }).catch(err=>{
        console.log(err)
    })
})

app.listen(3000, ()=>{
    console.log("server running")
})