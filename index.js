const express = require('express')
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');


const api = require('./routes/api');


mongoose.connect('mongodb://admin:admin1@ds219040.mlab.com:19040/yemeksepeti',{ useNewUrlParser: true });

mongoose.connection.on('connected', () =>{
    console.log("connected to database");
});
mongoose.connection.on('error', (err) => {
    console.log('Database error '+err);
  });

const app = express()
// CORS Middleware
app.use(cors());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.json());
// Index Route
app.get('/', (req, res) => {
    res.send('invaild endpoint');
  });
  
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
  });


app.use('/api', api);




app.listen(3000, () => console.log('server open'))