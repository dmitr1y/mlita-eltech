var express = require('express');
var bfg = require('bfg');
var fs = require('fs');
var router = express.Router();

/* GET home page. */
router.get('/random.json', function(req, res, next) {
    fs.readdir("tasks/", (err, files) => {
        r = Math.floor(Math.random()*files.length+1);
        var obj = JSON.parse(fs.readFileSync('tasks/'+r+'.json', 'utf8'));
        res.json(obj);
    })
});

router.get('/bfg', (req, res)=>{
    var k = 1
    for (var i = 1; i <= 10; i++) {
        bfg.generate((data)=>{
            console.log("Saving object to "+k+".json")
            fs.writeFile('tasks/'+k+'.json', JSON.stringify(data, null, 4))
            k++
        })
    }
})

module.exports = router;
