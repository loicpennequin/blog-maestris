/*********************************************************************
******************************project name****************************
******************************author*********************************/

'use strict';


/*  =============================================================================
    Dependencies
    ============================================================================= */
require('dotenv').config({
    path : 'config/.env'
});

const http = require('http'),
      bodyParser = require('body-parser'),
      cookieParser = require('cookie-parser'),
      path = require('path'),
      fs = require('fs'),
      express = require('express');

/*  =============================================================================
    Express
    ============================================================================= */
const app = express();

/*  =============================================================================
    Configure session
    ============================================================================= */
const session = require('express-session'),
      sessionParams = session({secret: process.env.SECRET, resave : false, saveUninitialized : true});

/*  =============================================================================
    App config
    ============================================================================= */
app.disable('x-powered-by');
app.use(sessionParams);
// app.use(require(path.join(__dirname, '/app/middlewares/visitCounter.js')));
app.use(express.static('www'));
app.use(express.static('vendor'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());


/*  =============================================================================
    Configure Routes
    ============================================================================= */
require(path.join(__dirname, '/app/routesHandler/router.js'))(app);

/*  =============================================================================
    Server start
    ============================================================================= */
let port = process.env.PORT;

app.listen(port, ()=>{
  console.log('===============================')
  console.log('serveur lancé sur le port ' + port)
  console.log('===============================')
});
