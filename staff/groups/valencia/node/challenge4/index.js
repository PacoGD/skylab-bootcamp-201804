var fs = require('fs')

let file = process.argv[2]

const c = fs.readFile(file, (err, data)=>{

    console.log(data.toString().split("\n").length -1)

})
