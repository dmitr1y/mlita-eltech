var assert    = require("chai").assert;
var bfg = require("bfg")
var fs = require("fs")

describe("Анализ сгенерированных функций на монотонность", ()=>{
    for (let i = 1; i <= 100; i++){
        let o = bfg.generate_monotonic(false)
        it(i+"-ая проверка на монотонность", ()=>{
            console.log(o)
            assert.isFalse(bfg.monotonic(o.truthTable.assoc))
        })
    }
})

describe("Проверка работы функции selfdual", ()=>{
    for (let i = 1; i <= 19; i++){
        it(i+"-ая проверка на самодвойственность", ()=>{
            fs.readFile("./tasks/selfdual/not/"+i+".json", (err, data) => {
                assert.isFalse(bfg.selfdual(data.truthTable.array))
            })
        })
    }
    for (let i = 1; i <= 19; i++){
        it(i+"-ая проверка на самодвойственность", ()=>{
            fs.readFile("./tasks/selfdual/"+i+".json", (err, data) => {
                assert.isTrue(bfg.selfdual(data.truthTable.array))
            })
        })
    }
})
