const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');

const router = express.Router();

var url = 'https://api.covid19india.org/data.json';
var getJSON = require('get-json');
var dataJson =  null;

getJSON(url, function(error, response){
    //dataJson = JSON.parse(response);
    dataJson = response;
    //console.log(response);
 });


router.get('/coronacases', (req, res, next) => {
  const stateswiseCases = dataJson.statewise;
  res.render('coronaCases', {
    coronaCases: stateswiseCases,
    pageTitle: 'coronacases',
    path: '/coronacases',
    hasstateswiseCases: stateswiseCases.length > 0,
    activeShop: true,
    productCSS: true
  });
});

module.exports = router;
