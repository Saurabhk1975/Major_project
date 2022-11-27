const express = require('express');
const app = express();
const port = 1335;

// use express router
app.use('/',require('./routes'));


// setup of view engine EJS
app.use('view engine','ejs');
app.set('view','./views');


// view engine setup end here 


app.listen(port,function(err){
    if(err){
        console.log(`error in running the server: ${err}`);
    }

    console.log(`server is running on port: ${port}`);
});