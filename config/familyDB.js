const mongoose = require("mongoose")
require("dotenv").config();


const username = process.env.ATLAS_USERNAME
const password = process.env.ATLAS_PASSWORD

const uri = "mongodb://localhost/familydb"
const url = `mongodb+srv://${username}:${password}@cluster0.1lkei5u.mongodb.net/`

mongoose.connect(uri)
.then(() => {
    console.log("connected sucessfully.......");
})
.catch(() => {
    console.log("unable to connect.....");
})