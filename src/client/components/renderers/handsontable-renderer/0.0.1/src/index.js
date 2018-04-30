import Handsontable from 'handsontable';
import 'handsontable/dist/handsontable.css';

export default class HandsonTableRenderer {

    constructor(file) {
        this.file = file;
    }

    render($el) {
        this.hot = new Handsontable($el, {
            rowHeaders: true,
            colHeaders: true,
            filters: true,
            dropdownMenu: true,
            data: this.file.data
        });
    }

    data() {
        this.file.data = this.hot.getData();
        return this.file;
    }
}
