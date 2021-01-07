const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
require('./Room')
require('./Booking')

app.use(bodyParser.json())

password="WqAonSUj7T1dg2Ji";
const mongoURL = "mongodb+srv://admin:WqAonSUj7T1dg2Ji@thecodexcluster.dod7b.mongodb.net/TheCodex?retryWrites=true&w=majority";
const Room = mongoose.model("room")
const Booking = mongoose.model("booking")

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

app.post('/send-data',(req, res)=>{
    const booking = new Booking({
        date: req.body.date,
        hour: req.body.hour,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        numberOfPeople: req.body.numberOfPeople
    })
    booking.save().then(data=>{
        console.log(data)
        res.send(data)
    }).catch(err => {
        console.log(err)
    })
})/


app.post('/delete',(req,res)=>{
    Room.findByIdAndRemove(req.body.id).then(data=>{
        console.log(data)
        res.send(data);
    }).catch(err=>{
        console.log(err)
    })
})

app.post('/delete-data',(req,res)=>{
    Booking.findByIdAndRemove(req.body.id).then(data=>{
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

app.post('/update-data',(req,res)=>{
    Booking.findByIdAndUpdate(req.body.id,{
        date: req.body.date,
        hour: req.body.hour,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        numberOfPeople: req.body.numberOfPeople
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