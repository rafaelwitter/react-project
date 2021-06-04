const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

// Load secrets
require('dotenv').config();


// Initialize app
const app = express();
const port = process.env.PORT;


// Make app params
app.use(cors());
app.use(express.json());

// const client = (uri, { useNewUrlParser: true, useUnifiedTopology: true });
// Make connection with the database atlas mongoose
mongoose 
 .connect(process.env.ATLAS_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,   })   
 .then(() => console.log("Database connected!"))
 .catch(err => console.log(err));

// Load the route to REST 
const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

// App get the routes 
app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

// Listen connections 
app.listen(port, () => {
    console.log(`Server is now running on port: ${port}`);
});
