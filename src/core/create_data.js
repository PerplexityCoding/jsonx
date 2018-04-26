var fs = require("fs");
var path = require("path");

function createFile(filePath) {
    const fileStat = fs.lstatSync(filePath);

    if (fileStat.isDirectory()) {
        return {
            data: fs.readFileSync(path.join(filePath, 'data.json'), null),
            render: fs.readFileSync(path.join(filePath, 'render.js'), null)
        };
    }
}

function saveFile(fileData) {
    fs.writeFileSync('./output.jsonx', JSON.stringify(fileData), 'utf-8');
}

function openFile() {
    return JSON.parse(fs.readFileSync('./output.jsonx', 'utf-8'));
}

function extractFile(fileData) {

}

var fileData = createFile("/mnt/d/workspaces/jsonx/data/simple_text_file");
saveFile(fileData, 'output.jsonx');

var file1 = openFile(fileData);

fs.writeFileSync('./data.json', Buffer.from(file1.data.data));
fs.writeFileSync('./render.js', Buffer.from(file1.render.data));

extractFile(file1);


// console.log(createFile("/mnt/d/workspaces/jsonx/data/simple_text_file"));