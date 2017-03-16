var express = require('express');
var router = express.Router();

router.get('/types', function(req, res) {
  var data = req.app.get('appData');
  var pagePhotos = [];
  var pageTypes = data.types;

  data.types.forEach(function(item) {
    pagePhotos = pagePhotos.concat(item.plant);
  });

  res.render('types', {
    pageTitle: 'Types',
    plant: pagePhotos,
    types: pageTypes,
    pageID: 'typesList'
  });
});

router.get('/types/:plantid', function(req, res) {
  var data = req.app.get('appData');
  var pagePhotos = [];
  var pageTypes = [];

  data.types.forEach(function(item) {
    if (item.shortname == req.params.plantid) {
      pageTypes.push(item);
      pagePhotos = pagePhotos.concat(item.plant);
    }
  });

  res.render('types', {
    pageTitle: 'Types Info',
    plant: pagePhotos,
    types: pageTypes,
    pageID: 'typesDetail'
  });
});

module.exports = router;
