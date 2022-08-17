const express = require('express');
const path = require('path');
const fs = require('fs');
var mongoose = require("mongoose");
const bodyparser = require('body-parser');
const app = express();
const port = 8000;
mongoose.connect("mongodb://localhost/contactdance", { useNewUrlParser: true }, { useUnifiedTopology: true });

// Schema Definition
var contactschema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    address: String,
    desc: String
})
var contact = mongoose.model('Contact',contactschema);

// Express specific template
app.use("/static", express.static('static'));
// app.use(express.static('public', options))
app.use(express.urlencoded());
// pug specific
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// get request
app.get('/', (req, res) => {
    res.status(200).render('home.pug');
})
app.get('/contact', (req, res) => {
    res.status(200).render('contact.pug');
})
let pass1 = document.getElementById('pass1');
let pass2 = document.getElementById('pass2');
app.post('/contact', (req, res) => {
    if (pass1 !== pass2)
    {
        
    }
    var mydata = new contact(req.body);
    mydata.save().then(()=>{
        res.send(`<h2>Thank You For joining Us</h2>`);
    }).catch(()=>{
        // res.status(400).send("Item was not saved to the database");
    });
    // res.status(200).render('contact.pug');
})
// start server
app.listen(port, () => {
    console.log(`the application started successfully on port ${port}`);
})
