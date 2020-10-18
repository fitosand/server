require('dotenv').config;
let express = require('express');
let app = express();
let sequelize = require('./db');

let user = require('./controllers/usercontroller');
let journal = require('./controllers/journalcontroller');

// const sequelize = require("./db");

sequelize.sync();

app.use(require('./middleware/headers'));

app.use(express.json());

//****/ exposed route ****
app.use('/user', user);

// *** protected route ***
app.use(require('./middleware/validate-session'));
app.use('/journal', journal);

app.listen(3000, function(){
    console.log('App is listening to port 3000');
})