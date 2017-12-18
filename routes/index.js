var express = require('express');
var router = express.Router();
var request = require('request');

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
/* GET home page. */
router.get('/', function(req, res, next) {
  request({
    uri: 'https://252193543756474:lEWldoRle9zhG-B02O6m7Hgt--Y@api.cloudinary.com/v1_1/hofas67vr/resources/image'
  }, (error, response, body) => {
    if (error) {
      res.json(error);
    } else {
      res.json(JSON.parse(body));
    }
  });

});

module.exports = router;
