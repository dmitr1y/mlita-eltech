var express = require('express');
var bfg = require('bfg');
var fs = require('fs');
//var deepEqual = require("deep-equal")
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
            res.status(404)
            res.jsonp({error: 404})
        } else {
            fs.readFile(f, (err, data) => {
                if (!err){
                    let object = JSON.parse(data)
                    object.variant = f.match(/\d+/)[0]
                    switch (req.params.folder){
                        case 'expressions':{
                            delete object.truthTable.array
                            for (let i = 1; i <= 5; i++){
                                object.truthTable.assoc[bfg.assocify(Math.round(Math.random()*16))] = "?"
                            }
                            break
                        }
                    }
                    res.jsonp(object)
                }
            })
        }
    })
})
    .post("/", (req,res) => {
        let solution = req.body
        let f = "./tasks/"+solution.dir+"/"+solution.variant+".json"
        let dude_errors = ""
        fs.readFile(f, (err, data) => {
            if (err)
                res.status(404).jsonp({problem: 1, more: "file not found"})
            else {
                let serverSolution = JSON.parse(data)
                for (let i = 0; i < 16; i++){
                    let j = bfg.assocify(i)
                    if (serverSolution.truthTable.assoc[j] != solution.assoc[j]){
                        dude_errors += j+", "
                    }
                }
                dude_errors = dude_errors.slice(0, -2);
                if (!dude_errors.length){
                    res.jsonp({problem: 0, more: "Решение верное"})
                } else {
                    res.jsonp({problem: 2, more: "Ошибки в следующих точках: "+dude_errors})
                }
            }
        })
    })

module.exports = router;