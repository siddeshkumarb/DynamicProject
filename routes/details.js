const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');

const router = express.Router();
var urlState = 'https://api.covid19india.org/data.json';
var urlDistrict = 'https://api.covid19india.org/v2/state_district_wise.json';

var getJSON = require('get-json');
var dataJsonState =  null;
var dataJsonDistrict =  null;

var stateCode = null;

getJSON(urlState, function(error, response){
  dataJsonState = response;
});
getJSON(urlDistrict, function(error, response){
  dataJsonDistrict = response;
});


function displayState(val)
{
    stateCode = val.value;alert(stateCode);
    document.getElementById('districtPanel').style.visibility = "visible";
}


router.get('/details', (req, res, next) => {
  const stateCases = dataJsonState.statewise;
  const districtCases = dataJsonDistrict;
  res.render('details', {
    coronaCasesState: stateCases,
    coronaCasesDistrict: districtCases,
    stateCode: 'KA',
    pageTitle: 'details',
    path: '/details',
    hasdistrictCases: stateCases.length > 0,
    activeShop: true,
    productCSS: true
  });
});

module.exports = router;
