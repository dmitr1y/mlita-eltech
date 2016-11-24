var express = require('express');
var bfg = require('bfg')
var router = express.Router();

/* GET home page. */
router.get('/random.json', function(req, res, next) {
    model = {
        str_input: bfg.generate()
    }
    res.json(model);
});

module.exports = router;
