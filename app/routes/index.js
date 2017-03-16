var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  var data = req.app.get('appData');
  var pagePhotos = [];
  var pageTypes = data.types;

  data.types.forEach(function(item) {
    pagePhotos = pagePhotos.concat(item.plant);
  });

  res.render('index', {
    pageTitle: 'Home',
    plant: pagePhotos,
    types: pageTypes,
    pageID: 'home'
  });

});

module.exports = router;
