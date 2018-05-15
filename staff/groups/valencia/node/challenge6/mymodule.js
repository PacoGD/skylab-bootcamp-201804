let fs = require('fs')
let path = require('path')

module.exports = function (_path, _ext, _call) {
    let ext = '.' + _ext;
    fs.readdir(_path, function (err, list) {
        if(err) _call(err); 
        else {
            let _list = [];
            list.forEach(function (file) {
                if (path.extname(file) === ext)  {_list.push(file)}
            })
                _call(null, _list)

        }
    })
    
}