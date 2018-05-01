import Vue from 'vue';

export default class VueRenderer {

    constructor(Component, file, data) {
        this.Component = Component;
        this.file = file;
        this.data = data;
    }

    render($el) {
        this.vm = new Vue({
            render: h => h(this.Component, {
                props: {
                    file: this.file
                }
            })
        }).$mount($el);
    }

    save() {
        const component = this.vm.$children[0];
        return component.json();
    }

    data() {
        return this.data;
    }
}
