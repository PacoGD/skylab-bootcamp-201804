var http = require('http');
var url = process.argv[2];
var info = "";

function getinfo() {http.get(url, function(response){
    response.on("data", function(toConcat){
        info += toConcat
    }).on("end", function(){
        console.log(info)
    })
})}

getinfo()
getinfo()
getinfo()