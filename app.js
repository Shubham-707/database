require('dotenv/config');
const express = require('express');
const app = express();
const mongoose = require('mongoose');


mongoose.connect(process.env.DB_CONNECTION);
const db = mongoose.connection
//next two lines are just to check whether we are connected to database or not. They do nothing else.
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('connected to database'))

app.use(express.json())

const subscribersRouter = require('./routes/subscribes')
app.use('/subscribers', subscribersRouter);



app.listen(3000, () => {
    console.log('server started')
});