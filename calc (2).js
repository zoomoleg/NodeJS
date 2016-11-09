/*jshint esversion: 6 */
import express from 'express';
import fetch from 'isomorphic-fetch';

const app = express();

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

const re = new RegExp ('\d+', 'ig');

app.get('/', (req, res) => {

  const sum = (+req.query.a || 0) + (+req.query.b || 0);

return res.send(sum.toString());

});
