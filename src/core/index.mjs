import fs from 'fs';
import path from 'path';

export default class JsonX {

    openFile(filePath) {
        const fileStat = fs.lstatSync(filePath);

        if (fileStat.isDirectory()) {
            console.log(eval(fs.readFileSync(path.join(filePath, 'render.js'), 'utf-8')));

            return {
                data: JSON.parse(fs.readFileSync(path.join(filePath, 'data.json'), 'utf-8')),
                render: eval(fs.readFileSync(path.join(filePath, 'render.js'), 'utf-8'))
            }
        }
    }

    render(file) {
        console.log(file);
        return file.render(file.data);
    }


}
