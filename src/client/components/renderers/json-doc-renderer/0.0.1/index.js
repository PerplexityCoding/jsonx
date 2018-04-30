import Component from './index.vue';
import VueRenderer from '../../core/vue-renderer';

export default class JsonDocRenderer extends VueRenderer {
    constructor(file) {
        super(Component, file);
    }
}
