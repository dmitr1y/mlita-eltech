var bfg = require('bfg');
var fs = require('fs');

if (process.argv.length > 2){
    N = (process.argv.length == 4) ? process.argv[3] : 15
    switch (process.argv[2]){
        case 'dummy':
        {
            for (let i = 1, a = 1, b = 1; i <= N; i++){
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
            break
        }
        case 'expression':
        {
            var k = 1
            for (var i = 1; i <= N; i++) {
                bfg.generate_expression((data)=>{
                    console.log("Saving object to "+k+".json")
                    fs.writeFile('tasks/expressions/'+k+'.json', JSON.stringify(data, null, 4))
                    k++
                })
            }
            break
        }
        case 'dnf':
        {
            var k = 1
            for (var i = 1; i <= N; i++){
                bfg.generate_dnf(data => {
                    console.log("Saving object to "+k+".json")
                    fs.writeFile('tasks/dnf/'+k+'.json', JSON.stringify(data, null, 4))
                    k++
                })
            }
            break
        }
        case 'selfdual':
        {
            var k = 1
            for (var i = 1; i <= N; i++){
                console.log("Saving object to "+k+".json")
                fs.writeFile('tasks/selfdual/'+k+'.json', JSON.stringify(bfg.generate_selfdual(), null, 4))
                k++
            }
            k = 1
            for (var i = 1; i <= N; i++){
                console.log("Saving object to "+k+".json")
                fs.writeFile('tasks/selfdual/not/'+k+'.json', JSON.stringify(bfg.generate_selfdual(false), null, 4))
                k++
            }
            break
        }
    }
    console.log("Generation finished")
} else {
    console.log("additional parameter expected. Use format: node generator {type} {number}")
}