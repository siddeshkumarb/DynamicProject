const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');

const router = express.Router();

var url = 'https://api.covid19india.org/resources/resources.json';
var getJSON = require('get-json');
var dataJson =  null;

getJSON(url, function(error, response){
    //dataJson = JSON.parse(response);
    dataJson = response;
    //console.log(response);
 });


router.get('/essential', (req, res, next) => {
  const products = dataJson.resources;
  res.render('essential', {
    prods: products,
    pageTitle: 'essential',
    path: '/essential',
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true
  });
});

module.exports = router;
