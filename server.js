const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

// Setup environment variables from .env file
require('dotenv').config();

// Setup databse
mongoose.connect(process.env.DB_HOST, { useNewUrlParser: true });
mongoose.connection.once('open', () => console.log('connected to DB'))
    .on('error', (e) => console.log(e));
mongoose.Promise = global.Promise;

// Import routes
const authRoutes = require('./routes/authRoutes');
const templateRoutes = require('./routes/templatesRoutes');
const workoutRoutes = require('./routes/workoutRoutes');

// Cors goes always first as use.
app.use(cors());

// Post method config
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Setup routes
app.use(authRoutes);
app.use(templateRoutes);
app.use(workoutRoutes);

// Send react files when in production mode
if(process.env.NODE_ENV === 'production'){
    app.use(express.static(__dirname+'/client/build'));
    app.get('/*', (req, res) => {
        res.sendFile(__dirname+'/client/build/index.html');
    })
}


const port = process.env.PORT;
app.listen(port, () => {
    console.log('Server is running on port ' + port);
});