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
                            object.condition = "<b>Задача на вычисление значений функции.</b> "
                            delete object.truthTable.array
                            for (let i = 1; i <= 5; i++){
                                object.truthTable.assoc[bfg.assocify(Math.round(Math.random()*15))] = "?"
                            }
                            object.condition += "Дана функция: <br/>"+object.expression+" <br/>На кубе в соответствующих координатах "+
                                    "расположены значения функции. Введите недостающие значения, выделенные вопросительным. "+
                                    "Изменение значений вершин осуществляется кликом мышки."
                            break
                        }
                        case 'dummy_variables':{
                            delete object.dummy
                            delete object.dummies_number
                            object.condition = "На гиперкубе задана булевая функция. Отметьте набор рёбер"
                            break
                        }
                        case 'selfdual': {
                            object.condition = "<b>Задача на самодвойственность.</b> "
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
                                object.condition += "На гиперкубе задана функция, введите остальные"+
                                                  " значения, чтобы функция была самодвойственной. Изменение значений вершин"+
                                                  " производится с помощью кликов по вершинам гиперкуба."
                            } else {
                                if(Math.round(Math.random())){
                                    object.letter = "a"
                                    object.condition += "На гиперкубе задана функция. Отметьте две вершины, доказывающие, что функция не является самодвойственной"
                                } else {
                                    object.letter = "c"
                                    object.condition += "На гиперкубе задана функция. Поменяйте <i>минимальное</i> число "+
                                                       "значений, чтобы функция стала  самодвойственной"
                                }
                            }
                            break
                        }
                        case 'monotonic': {
                            object.condition = "<b>Задача на монотонность.</b> "
                            delete object.truthTable.array
                            if (object.monotonic){
                                object.letter = "b"
                                object.condition += "Часть значений функций известны, отметьте на кубе остальные значения,"+
                                                  " чтобы функция была монотонной"
                                for (let i = 0; i < 5; i++){
                                    let p = Math.round(Math.random()*15)
                                    object.truthTable.assoc[bfg.assocify(p)] = "?"
                                }
                            } else {
                                if (Math.round(Math.random())){
                                    object.letter = "c"
                                    object.condition += "Поменяйте <i>минимальное</i> число значений, чтобы функция стала монотонной"
                                } else {
                                    object.letter = "a"
                                    object.condition += "Найдите ребро, доказывающее, что функция не является монотонной."+
                                                       " Выделение ребер осуществляется с помощью кликов по ним"
                                }
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
    console.log(solution)
    let f = "./tasks/"+solution.dir+"/"+solution.variant+".json"
    let dude_errors = ""
    fs.readFile(f, (err, data) => {
        if (err)
            res.status(404).jsonp({problem: 1, more: "file not found"})
        else {
            if (solution.assoc){
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
                    case 'selfdual': {
                        switch (solution.letter){
                            case 'a': {
                                if (solution.vertexes){
                                    solution.vertexes = solution.vertexes.sort()
                                    if (solution.vertexes[0] > solution.vertexes[1]){
                                        res.jsonp({problem: 0, more: "Решение верное"})
                                    } else {
                                        dude_errors = "Вершины указаны не верно"
                                        res.jsonp({problem: 2, more: dude_errors})
                                    }
                                }
                                else
                                    res.jsonp({problem: 1, more: "Bad request"})
                                break
                            }
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
                            default: {
                                res.status(403).jsonp({problem: 1, more: "letter is required"})
                            }
                        }
                    }
                    case 'monotonic': {
                        switch (solution.letter){
                            case 'a':
                            {
                                if (solution.ribs){
                                    let c = 0, solved = false
                                    for (key in solution.ribs){
                                        let arr = solution.ribs[key].split(",")
                                        console.log(solution.assoc[arr[0]] > solution.assoc[arr[1]], arr[1], arr[0])
                                        if (solution.assoc[arr[0]] > solution.assoc[arr[1]]){
                                            solved = true
                                        } else {
                                            solved = false
                                            res.jsonp({problem: 2, more: "Не верно выделены ребра"})
                                            break
                                        }
                                    }
                                    if (solved) res.jsonp({problem: 0, more: "Решение верное"})
                                }
                                else
                                    res.jsonp({problem: 1, more: "Bad request. Ribs are required"})
                                break
                            }
                            case 'b':
                            {
                                let all_numbers = true
                                for (let i = 0; i < 16; i++) {
                                    let j = bfg.assocify(i)
                                    if (isNaN(parseInt(solution.assoc[j]))) {
                                        all_numbers = false
                                        break
                                    }
                                }
                                console.log({all_numbers: all_numbers})
                                if (bfg.monotonic(solution) && all_numbers) {
                                    for (let i = 0; i < 16; i++) {
                                        let j = bfg.assocify(i)
                                        if (serverSolution.truthTable.assoc[j] != solution.assoc[j]) {
                                            dude_errors += j + ", "
                                        }
                                    }
                                    if (bfg.monotonic(solution.assoc)) dude_errors = ""
                                    else dude_errors = dude_errors.slice(0, -2);
                                    if (!dude_errors.length) {
                                        res.jsonp({problem: 0, more: "Решение верное"})
                                    } else {
                                        res.jsonp({problem: 2, more: "Ошибки в следующих точках: " + dude_errors})
                                    }
                                } else {
                                    res.jsonp({problem: 2, more: "Полученная функция не является монотонной"})
                                }
                                break
                            }
                            case 'c':
                            {
                                let all_numbers = true
                                for (let i = 0; i < 16; i++) {
                                    let j = bfg.assocify(i)
                                    if (isNaN(parseInt(solution.assoc[j]))) {
                                        all_numbers = false
                                        break
                                    }
                                }
                                console.log({all_numbers: all_numbers})
                                if (bfg.monotonic(solution.assoc) && all_numbers) {
                                    let c = 0
                                    for (let i = 0; i < 16; i++) {
                                        let j = bfg.assocify(i)
                                        if (serverSolution.truthTable.assoc[j] != solution.assoc[j]) {
                                            c++
                                            dude_errors = "Полученная функция действительно монотонная, но требовалось поменять минимальное значение"
                                        }
                                    }
                                    console.log({c: c})
                                    if (!dude_errors.length || c <= 2) {
                                        res.jsonp({problem: 0, more: "Решение верное"})
                                    } else {
                                        res.jsonp({problem: 2, more: dude_errors})
                                    }
                                } else {
                                    res.jsonp({problem: 2, more: "Полученная функция не является монотонной"})
                                }
                                break
                            }
                            default: {
                                res.status(400).jsonp({problem: 1, more: "letter is required"})
                            }
                        }
                    }
                }
            } else {
                res.status(400).jsonp({problem: 1, more: 'assoc array is required'})
            }
        }
    })
})

module.exports = router;