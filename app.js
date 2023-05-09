const express = require("express");
const path = require("path");
const app = express();
var mongoose = require('mongoose');
const bodyparser = require('body-parser');
mongoose.connect('mongodb://localhost:27017/contactDance');

const port = 8000;

//Define mongoose Schema
var contactSchema = new mongoose.Schema({ 
    name: String,
    phone: String,
    email: String,
    address: String,
    desc: String
 });

var contact = mongoose.model('contact',contactSchema);

app.use('/static',express.static('static'));  //for serving static file
app.use(express.urlencoded());

app.set('view engine', 'pug');  //Set template engine as pug
app.set('views', path.join(__dirname,'views'));  //set the views directory.
  
app.get('/', (req, res)=>{
    const params = { };
    res.status(200).render('home.pug',params);
});
app.get('/about', (req, res)=>{
    const params = { };
    res.status(200).render('about.pug',params);
});
app.get('/contact', (req, res)=>{
    const params = { };
    res.status(200).render('contact.pug',params);
});
app.get('/service', (req, res)=>{
    const params = { };
    res.status(200).render('service.pug',params);
});
app.post('/contact', (req, res)=>{
    var myData = new contact(req.body);
    myData.save().then(()=>{
        res.send("Thanks for your response. We'll contact you soon.");
    }).catch(()=>{
        res.status(400).send("Failed to data submit");
        
    });
    // res.status(200).render('contact.pug');
});


//Start server
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});

