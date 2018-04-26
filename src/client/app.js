function dropHandler(ev) {
    console.log('File(s) dropped');

    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault();

    var files = ev.target.files || ev.dataTransfer.files;
    console.log(files);

    var reader = new FileReader();
    reader.onload = function(e) {
        // get file content
        var data = JSON.parse(e.target.result);

        var buffer = new Uint16Array(data.render.data);
        var text = buffer.toString("utf8");

        let render = eval(String.fromCharCode.apply(null, new Uint16Array(data.render.data)));
        let renderData = JSON.parse(String.fromCharCode.apply(null, new Uint16Array(data.data.data)));

        document.getElementById('render_zone').innerHTML = render(renderData);

    };
    reader.readAsText(files[0]);
}

function dragOverHandler(ev) {
    ev.preventDefault();
}