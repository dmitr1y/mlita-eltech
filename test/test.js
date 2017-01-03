var assert    = require("chai").assert;
var bfg = require("bfg")

describe("Анализ сгенерированных функций на монотонность", ()=>{
    for (let i = 1; i <= 100; i++){
        let o = bfg.generate_monotonic()
        it(i+"-ая проверка на монотонность", ()=>{
            console.log(o.truthTable)
            assert.isTrue(bfg.monotonic(o.truthTable.assoc))
        })
    }
})
