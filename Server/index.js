//Import from Packages
const express = require('express');
const mongoose = require('mongoose');

//Import from Other Files
const authRouter = require('./routes/auth');

//Initialisations
const PORT = 3000;
const app = express();
const DB = "mongodb+srv://K123Ritesh:K123Ritesh@cluster0.uvj36ez.mongodb.net/?retryWrites=true&w=majority"

//middleware
//CLIENT --> middleware --> SERVER --> CLIENT
app.use(express.json());
app.use(authRouter);

//connections
mongoose.connect(DB).then(() => {
    console.log("Connection Successfull !!");
}).catch((e) => {
    console.log(e);
});


app.listen(PORT, "0.0.0.0", () => {
    console.log(`Connected at port ${PORT} `);
});