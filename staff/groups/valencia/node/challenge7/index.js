var http = require('http');

http.get(process.argv[2], function callback(response) {
    response.setEncoding('utf8');
    response.on("data", (data) => {console.log(data)}).on("error", (err) => {console.log(err)});
})