var fs = require('fs')
let file = process.argv[2]
const c = fs.readFileSync(file)
console.log(c.toString().split("\n").length -1)