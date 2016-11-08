/*jshint esversion: 6 */
import express from 'express';
import fetch from 'isomorphic-fetch';

const app = express();

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

const re = new RegExp ('\d+', 'ig');

app.get('/', (req, res) => {

if (req.query.a == undefined) { req.query.a = 0;}
if (req.query.b == undefined) { req.query.b = 0;}

if (req.query.a == '') { req.query.a = 0;}
if (req.query.b == '') { req.query.b = 0;}

req.query.a = +req.query.a;
req.query.b = +req.query.b;
if ( isNaN(req.query.a) ) { req.query.a = 0;}
if ( isNaN(req.query.b) ) { req.query.b = 0;}

const c = +req.query.a;
const d = +req.query.b;
var sum = c + d;

return res.send(''+sum);

});
