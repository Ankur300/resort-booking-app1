var express = require("express");
var bodyparser = require("body-parser");
var mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const config = require("./config");
var app = express();

mongoose.connect("mongodb://localhost:27017/resorts");
var db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
    console.log("connect to database");
});

app.use(bodyparser.json());
app.use(express.static("public"));
app.use(
    bodyparser.urlencoded({
        extended: true,
    })
);
app.get("/", function (req, res) {
    res.set({ "Allow-access-Allow-Orgin": "*" });
    res.send("hello ");
});

let userSchema = mongoose.Schema({
    name: String,
    email: String,
    numberofpeople: Number,
    gender: String,
    checkin: String,
    checkout: String,
    number: String,
});
// complie schema to model
let user = mongoose.model("User", userSchema, "booking"); // model name, schema name, collection name
// create document intance
let usr = new user();

app.post("/login", function (req, res) {
    const { email, password } = req.body;
    db.collection("register").findOne({ email }, (err, user) => {
        if (err) {
            res.status(500).send({ message: "Internal server error" });
            return;
        }
        if (!user) {
            res.status(404).send({ message: "User not found" });
            return;
        }
        const { password: _password, ...data } = user;
        if (password !== _password) {
            res.send(401).send({ message: "Invalid Credentials" });
            return;
        }
        const token = jwt.sign({ id: user._id }, config.secretkey, {
            expiresIn: 24 * 60 * 60,
        });
        res.status(200).send({
            ...data,
            token,
        });
    });
});

app.post("/registration", function (req, res) {
    var username = req.body.username;
    var email = req.body.email;
    var number = req.body.number;
    var password = req.body.password;
    var cpassword = req.body.cpassword;

    var userData = {
        username: username,
        email: email,
        number: number,
        password: password,
        cpassword: cpassword,
    };
    db.collection("register").insertOne(userData, (err, collection) => {
        if (err) {
            throw err;
        }
        res.send({ message: "Registration suceessfull" });
    });
});

//Booking Form
app.post("/BookingForm", function (req, res) {
    var name = req.body.username;
    var numberOfPeople = req.body.nopeople;
    var uemail = req.body.email;
    var gender = req.body.gender;
    var checkin = req.body.chIn;
    var checkout = req.body.chOut;
    var number = req.body.number;

    var userData = {
        name: name,
        email: uemail,
        numberofpeople: numberOfPeople,
        gender: gender,
        checkin: checkin,
        checkout: checkout,
        number: number,
    };
    db.collection("booking").insertOne(userData, (err, collection) => {
        if (err) {
            throw err;
        }
        res.send({ message: "Booking sucessfull" });
    });
});


app.get("/booking", async (req, res) => {
    await user.find().exec((err, usrinfo) => {
        if (err) {
            console.log("something went worng");
        } else {
            console.log(usrinfo);
            res.send(usrinfo);
        }
    });
});

app.post("/feedback", function (req, res) {
    var firstname = req.body.fname;
    var lastname = req.body.lname;
    var email = req.body.contactemail;
    var comment = req.body.comment;
    var contact = req.body.contactphone;

    var userData = {
        FirstName: firstname,
        LastName: lastname,
        Email: email,
        Contact: contact,
        FedbackComment: comment,
    };
    db.collection("feedback").insertOne(userData, (err, collection) => {
        if (err) {
            throw err;
        }
        res.send({ message: "Feedback sent successfully" });
    });
});


var server = app.listen(8081, function () {
    console.log("server ...");
    console.log(server.address().port);
});
