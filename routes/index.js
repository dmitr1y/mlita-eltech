var express = require('express');
var bfg = require('bfg')
var router = express.Router();

/* GET home page. */
router.get('/random.json', function(req, res, next) {
    bfg.generate(function(data) {
            res.json(data);
        }
    );
});

module.exports = router;
