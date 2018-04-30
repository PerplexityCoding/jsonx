import Component from './index.vue';
import VueRenderer from '../../../core/vue-renderer';

export default class JsonDocRendererQuill extends VueRenderer {
    constructor(file) {
        super(Component, file)
    }
}
