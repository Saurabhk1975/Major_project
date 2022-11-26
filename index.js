const express = require('express');
const app = express();
const port = 1335;

app.listen(port,function(err){
    if(err){
        console.log(`Erro in running the server: ${err} `);
    }
    console.log(`server is running on port: ${port}`);
});
