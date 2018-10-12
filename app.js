const path = require("path")
const express = require("express")
const logger = require("morgan")
const bodyParser = require("body-parser") // simplifies access to request body
const fs = require('fs')  // NEW - this is required
const app = express()  // make express app
const http = require('http').Server(app)  // inject app into the server
const port = 8081

// ADD THESE COMMENTS AND IMPLEMENTATION HERE 
// 1 set up the view engine
// 2 manage our entries
// 3 set up the logger
// 4 handle valid GET requests
// 5 handle valid POST request (not required to fully work)
// 6 respond with 404 if a bad URI is requested


// 1 set up the view engine
app.set("views", path.resolve(__dirname, "views")) // path to views
app.set("view engine", "ejs") // specify our view

// 2 include public assets and use bodyParser
// Node uses __dirname for the The directory name of the current module.
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// 3 log requests to stdout and also
// log HTTP requests to a file using the standard Apache combined format
// see https://github.com/expressjs/morgan for more
var accessLogStream = fs.createWriteStream(__dirname + '/access.log', { flags: 'a' });
app.use(logger('dev'));
app.use(logger('combined', { stream: accessLogStream }));

app.get("/", function (req, res) {
  res.render("index.ejs")
 })
   
   // 4 http GET /tic-tac-toe
   app.get("/indexThalal", function (req, res) {
    res.render("indexThalal.ejs")
   })
   
   // 4 http GET /contact
   app.get("/contact", function (req, res) {
    res.render("contact-me.ejs")
   })


   app.get("/index", function (req, res) {
   res.render("index.ejs")
   })

   
   app.use( function (req, res) {
   res.render("404.ejs")
    })

   app.get("/calculator", function (req, res) {
        res.render("calculator.ejs")
         })

    app.get("/resume", function (req, res) {
      res.render("resume.ejs")
             })

    app.get("/video", function (req, res) {
      res.render("video.ejs")
                 })
    app.get("/about", function (req, res) {
      res.render("about.ejs")
                     })



   


   // 5 http POST /contact
app.post("/contact", function (req, res) {
    const name = req.body.inputname;
    const email = req.body.inputemail;
    const company = req.body.inputcompany;
    const comment = req.body.inputcomment;
    const isError = true;
   
    
    // logs to the terminal window (not the browser)
    console.log('\nCONTACT FORM DATA: ' + name + ' ' + email + ' ' + comment + '\n');
    })

 
   // Listen for an application request on designated port
   app.listen(port, function () {
    console.log('Web app started and listening on http://localhost:' + port)
   })
   
   

