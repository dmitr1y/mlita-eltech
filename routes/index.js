var express = require('express');
var bfg = require('bfg');
var fs = require('fs');
var router = express.Router();

/* GET home page. */
router.get('/random.json', function(req, res, next) {
    r = Math.floor(Math.random()*15+1);
    var heapUsed = process.memoryUsage().heapUsed;
    console.log(heapUsed);
    var obj = JSON.parse(fs.readFileSync('tasks/'+r+'.json', 'utf8'));
    res.json(obj);
    next();
});

module.exports = router;
