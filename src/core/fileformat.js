var fs = require("fs");
var KaitaiStructCompiler = require("kaitai-struct-compiler");
var compiler = new KaitaiStructCompiler();
var yamljs = require("yamljs");

var zipKsyContent = yamljs.parseFile("./src/core/zip.ksy");

compiler.compile("javascript", zipKsyContent, null, true).then(function(files) {
    Object.keys(files).forEach(function(fileName) {
        var fileContent = files[fileName];
        var outFn = fileName;
        fs.writeFileSync("./output/" + outFn, fileContent);
    });
}, function(err){
    console.log( err);
});
