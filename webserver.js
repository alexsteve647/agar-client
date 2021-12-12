const wssPort = process.env.PORT || 8080;
const express=require('express'),app=express();app.use(express.static('web'));app.listen(wssPort);
