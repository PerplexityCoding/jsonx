import Vue from 'vue';

export default class VueRenderer {

    constructor(Component, file) {
        this.Component = Component;
        this.file = file;
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

    data() {
        const component = this.vm.$children[0];
        return component.json();
    }
}
