/*const express = require("express");     //import express js module into the program
const app = express();                  //creates instance of express in the the value app
                                        //req = input   res = output
app.get("/hi", (req, res)=> {           //configuring the route of the action "Get" by outputting 'hello world'

    function hello(){
        return "hello world";
    }

    res.send(hello());                  //to the path '/hi'
});
                                        //Actions: GET  POST  PUT  PATCH  DELETE 
//const port = process.env.port || 3000;
app.listen(3000);                       //starts the application on port 3000 
                                        //use a router to keep code clean, easy to maintain, easy to fix bugs, etc.
                                        //using express generator a template creates app.js which is 
                                        //the "main" file of the entire application
                                        //a "npm i" must be run to include the dependencies for the application

*/
const express = require("express");
const definitions = require('./routes/definitions');
const app = express();
const puppeteer = require('puppeteer');

var rawTxt;

async function TicketGrabber(){
    const browser = await puppeteer.launch({
        headless: true
    });
    const page = await browser.newPage();
    await page.goto('https://documentation.uts.nlm.nih.gov/rest/authentication.html');
    await page.type('#apikey', 'e588486b-ebc2-4edd-b6d0-b394d6fec87b');
    await page.click('#getTGTBtn');
    await page.waitForTimeout(750);
    await page.click('#getSTBtn');
    await page.waitForTimeout(750);

    const [el] = await page.$x('//*[@id="stVal"]');
    const txt = await el.getProperty('textContent');
    rawTxt = await txt.jsonValue();

    console.log(rawTxt);

    //InfoGrabber(rawTxt);

    browser.close();
}

TicketGrabber();

app.get("/", (req, res)=> {           
    res.send(rawTxt);                  
});

app.use('/definitions', definitions);

app.listen(3000);