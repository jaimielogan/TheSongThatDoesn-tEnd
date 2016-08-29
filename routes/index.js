var express = require('express');
var router = express.Router();

var verseArray = ["This is the song that doesn't end","It just goes on and on my friends","Some people, started singing it not knowing what it was","And they'll continue singing it forever just because..."];

var pictureArray = ["http://rophydoes.rintin.com/wp-content/uploads/2011/01/lambchop1.jpg", "http://i.ytimg.com/vi/1_47KVJV8DU/mqdefault.jpg", "http://media-cache-ak0.pinimg.com/236x/4d/61/6c/4d616c5f67a37d1b7db7acc79a3dcf03.jpg", "http://media-cache-ak0.pinimg.com/236x/75/a1/d4/75a1d4cba1954c1abee9b4bd85d21de9.jpg"];

var reference = [2,3,4,1];

/* GET home page. */
router.get('/:verse', function(req, res, next) {
  var verseNumber = req.params.verse.slice(-1);
  res.render('index', { verse: verseArray[verseNumber-1], picture: pictureArray[verseNumber-1],reference:"verse"+reference[verseNumber -1]});
});

module.exports = router;
