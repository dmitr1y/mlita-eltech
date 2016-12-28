var express = require('express');
var bfg = require('bfg');
var fs = require('fs');
var router = express.Router();

function fileRandomPath(path, callback){
    fs.readdir(path, function(err, items){
        if (err)
            callback(false)
        else {
            r = path+"/"+items[Math.floor(Math.random() * items.length)]
            console.log(r)
            callback(r)
        }
    })
}

router.get("/:folder", (req, res)=>{
    if (req.params.folder == "dummy_variables"){
        req.params.folder += "/"+Math.round(Math.random()*2)
    }
    fileRandomPath('tasks/'+req.params.folder, (f) => {
        if (!f) {
            res.jsonp({error: 404})
        } else {
            fs.readFile(f, (err, data) => {
                res.jsonp(JSON.parse(data))
            })
        }
    })
})

module.exports = router;