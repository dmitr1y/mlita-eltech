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
                            if (object.selfdual){
                                let banned = new Array()
                                for (let i = 1; i <= 5; i++){
                                    let randChoice = Math.round(Math.random()*15)
                                    while (true) {
                                        if (banned.indexOf(randChoice) < 0){
                                            break
                                        } else {
                                            randChoice = Math.round(Math.random()*15)
                                        }
                                    }
                                    banned.push(randChoice)
                                    if (randChoice>=8) banned.push(15-randChoice)
                                    else               banned.push(15-randChoice)
                                    object.truthTable.assoc[bfg.assocify(randChoice)] = "?"
                                }
                                delete object.truthTable.array
                                object.letter = "b"
                                object.text = "Часть значений функций известны, введите остальные значения, чтобы функция была самодвойственной"
                            } else {
                                if(Math.round(Math.random())){
                                    object.letter = "a"
                                    object.text = "Отметьте две вершины, доказывающие, что функция не является самодвойственной"
                                } else {
                                    object.letter = "c"
                                    object.text = "Поменяйте минимальное число значений, чтобы функция стала  самодвойственной"
                                }
                            }
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
                                let arr = new Array(16)
                                for (x in solution.assoc) arr[parseInt(x,2)] = solution.assoc[x]
                                if (arr.some(x => { return x == null })){
                                    res.jsonp({problem: 2, more: "Задача не решена."})
                                } else {
                                    for (let i = 0; i < 16; i++){
                                        let j = bfg.assocify(i)
                                        if (serverSolution.truthTable.assoc[j] != solution.assoc[j]){
                                            dude_errors += j+", "
                                        }
                                    }
                                    if (bfg.selfdual(arr)) dude_errors = ""
                                    else dude_errors = dude_errors.slice(0, -2);
                                    if (!dude_errors.length){
                                        res.jsonp({problem: 0, more: "Решение верное"})
                                    } else {
                                        res.jsonp({problem: 2, more: "Ошибки в следующих точках: "+dude_errors})
                                    }
                                }

                                break
                            }
                            case 'c': {
                                let arr = new Array(16)
                                for (x in solution.assoc) arr[parseInt(x,2)] = solution.assoc[x]

                                let sd = bfg.selfdual(arr)
                                if (!sd) {
                                    res.jsonp({problem: 2, more: "Полученная функция не является самодвойственной"})
                                } else {
                                    let c = 0
                                    for (let i = 0; i < 16; i++){
                                        let j = bfg.assocify(i)
                                        if (serverSolution.truthTable.array[i] != arr[i]){
                                            c++
                                            dude_errors = "Полученная функция действительно самодвойственная, но требовалось поменять минимальное значение"
                                        }
                                    }
                                    //console.log(c)
                                    if (!dude_errors.length || c <= 2){
                                        res.jsonp({problem: 0, more: "Решение верное"})
                                    } else {
                                        res.jsonp({problem: 2, more: dude_errors})
                                    }
                                }
                                break
                            }
                            case 'a': {
                                solution.vertexes = solution.vertexes.sort()
                                if (solution.vertexes[0] == serverSolution.vertexes[0] && serverSolution.vertexes[1] == serverSolution.vertexes[1]){
                                    res.jsonp({problem: 0, more: "Решение верное"})
                                } else {
                                    dude_errors = "Вершины указаны не верно"
                                    res.jsonp({problem: 2, more: dude_errors})
                                }
                            }
                        }
                    }
                }
            }
        })
    })

module.exports = router;