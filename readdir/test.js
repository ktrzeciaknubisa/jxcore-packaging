var fs = require("fs");
var path = require("path");
var files = fs.readdirSync(path.join(__dirname, 'sub'));
console.log('assets %j', files);
var files = fs.readdirSync(path.join(__dirname, 'scripts'));
console.log('scripts %j', files);
