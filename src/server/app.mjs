import express from 'express';
import JsonX from "../core/index";

const app = express();
app.use(express.static('src/server/public'));

app.get('/test', (req, res) => {
    const jsonX = new JsonX();

    const file = jsonX.openFile('/mnt/d/workspaces/jsonx/data/simple_text_file');
    res.send(jsonX.render(file));
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});