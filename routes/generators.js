var express = require('express');
var bfg = require('bfg');
var fs = require('fs');
var router = express.Router();

router.get('/dummy', (req,res)=>{
    for (let i = 1, a = 1, b = 1; i <= 100; i++){
        var o = bfg.generate_dummy(1)
        switch (o.dummies_number){
            case 1:{
                fs.writeFile('tasks/dummy_variables/1/'+a+'.json', JSON.stringify(o, null, 4))
                a++
                break
            }
            case 2:{
                fs.writeFile('tasks/dummy_variables/2/'+b+'.json', JSON.stringify(o, null, 4))
                b++
                break
            }
        }
    }
    res.jsonp("done")
})

router.get('/expression', (req, res)=>{
    var k = 1
    for (var i = 1; i <= 10; i++) {
        bfg.generate_expression((data)=>{
            console.log("Saving object to "+k+".json")
            fs.writeFile('tasks/expressions/'+k+'.json', JSON.stringify(data, null, 4))
            k++
        })
    }
})


router.get("/dnf", (req, res)=>{
    var k = 1
    for (var i = 1; i <= 15; i++){
        bfg.generate_dnf(data => {
            console.log("Saving object to "+k+".json")
            fs.writeFile('tasks/dnf/'+k+'.json', JSON.stringify(data, null, 4))
            k++
        })
    }
})

module.exports = router;