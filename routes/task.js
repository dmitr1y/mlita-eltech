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
    var deeper = req.params.folder == "dummy_variables" ? "/"+Math.round(Math.random()*2) : ""
    fileRandomPath('tasks/'+req.params.folder+deeper, (f) => {
        if (!f) {
            res.status(404)
            res.jsonp({error: 404})
        } else {
            fs.readFile(f, (err, data) => {
                if (!err){
                    let object = JSON.parse(data)
                    object.variant = /(\d+)\.json/.exec(f)[1]
                    switch (req.params.folder){
                        case 'expressions':{
                            delete object.truthTable.array
                            for (let i = 1; i <= 5; i++){
                                object.truthTable.assoc[bfg.assocify(Math.round(Math.random()*15))] = "?"
                            }
                            break
                        }
                        case 'dummy_variables':{
                            delete object.dummy
                            delete object.dummies_number
                            break
                        }
                        case 'selfdual': {
                            for (let i = 1; i <= 5; i++){
                                object.truthTable.assoc[bfg.assocify(Math.round(Math.random()*15))] = "?"
                            }
                            delete object.truthTable.array
                            object.letter = "b"
                            object.text = "Часть значений функций известны, введите остальные значения, чтобы функция была самодвойственной "
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
        console.log(solution)
        let f = "./tasks/"+solution.dir+"/"+solution.variant+".json"
        let dude_errors = ""
        fs.readFile(f, (err, data) => {
            if (err)
                res.status(404).jsonp({problem: 1, more: "file not found"})
            else {
                let serverSolution = JSON.parse(data)
                switch (solution.dir){
                    case 'expressions': {
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
                        break
                    }
                    case 'selfdual':{
                        switch (solution.letter){
                            case 'b': {
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
                                break
                            }
                        }
                    }
                }
            }
        })
    })

module.exports = router;