const express = require('express');
const debug = require('debug');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;


app.use(morgan('combined'));
app.use(express.static(path.join(__dirname,'public')));


app.set('views','./src/views');
app.set('view engine','ejs');

app.get('/', (req, res) => {

    res.render('index',{username: 'Panut'});

});

app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}...`);
    // console.log(`Listening on Port ${chalk.green(PORT)}...`);
});

