let mymodule = require('./mymodule')

mymodule(process.argv[2], process.argv[3], function (err, list) {
    if (err) console.log("Error in index!"); else list.forEach((idx) => console.log(idx))
})