var express = require('express');
var router = express.Router();
var request = require('request');


process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

router.get('/fromCloudinary', function(req, res, next) {
  const params = req.query;  
  console.log(params);
  request({
    uri: `https://252193543756474:lEWldoRle9zhG-B02O6m7Hgt--Y@api.cloudinary.com/v1_1/hofas67vr/resources/image?type=upload&prefix=${params.folder.replace('/', '\/')}&max_results=500`
  }, (error, response, body) => {
    if (error) {
      res.json(error);
    } else {
      res.json(JSON.parse(body));
    }
  });


});


router.get('/goofy', function(req, res) {
  request('http://images1.wikia.nocookie.net/__cb20120715102950/disney/images/a/a5/Disneygoofy2012.jpeg').pipe(res);
});

module.exports = router;
