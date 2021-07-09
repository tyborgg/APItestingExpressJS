const express = require("express");     //import express js module into the program
const app = express();                  //creates instance of express in the the value app
                                        //req = input   res = output
app.get("/hi", (req, res)=> {           //configuring the route of the action "Get" by outputting 'hello world'

    var trainingObj = {
        trainingID: 10,
        trainingName: "Express Course",
        active: true
    }

    res.send(trainingObj);              //to the path '/hi'
});
                                        //Actions: GET  POST  PUT  PATCH  DELETE 
app.listen(3000);                       //starts the application on port 3000 
                                        //use a router to keep code clean, easy to maintain, easy to fix bugs, etc.
                                        //using express generator a template creates app.js which is 
                                        //the "main" file of the entire application
                                        //a "npm i" must be run to include the dependencies for the application