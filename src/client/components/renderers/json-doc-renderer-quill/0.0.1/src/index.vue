<template>
    <div class="json-doc-editor">
        <div ref="quillEditor"></div>
    </div>
</template>

<script>
    import Quill from 'quill';

    export default {
        name: 'JsonDocRendererQuill',
        props: ['file'],
        mounted: function () {
            console.log(this.$refs);
            this.editor = new Quill(this.$refs['quillEditor'], {
                modules: {
                    toolbar: [
                        ['bold', 'italic', 'underline', 'strike'],
                        ['blockquote', 'code-block'],
                        [{ 'header': 1 }, { 'header': 2 }],
                        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                        [{ 'script': 'sub'}, { 'script': 'super' }],
                        [{ 'indent': '-1'}, { 'indent': '+1' }],
                        [{ 'direction': 'rtl' }],
                        [{ 'size': ['small', false, 'large', 'huge'] }],
                        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                        [{ 'color': [] }, { 'background': [] }],
                        [{ 'font': [] }],
                        [{ 'align': [] }],
                        ['clean']
                    ]
                },
                theme: 'snow'
            });
            console.log(this.$props.file.data.text);
            this.editor.setContents(this.$props.file.data.text)
        },
        methods: {
            json() {
                this.$props.file.data.text = this.editor.getContents();
                console.log(this.editor.getContents());
                return this.$props.file;
            }
        }
    }
</script>

<style>
    @import '../node_modules/quill/dist/quill.core.css';
    @import '../node_modules/quill/dist/quill.snow.css';

    .json-doc-editor {
        height: 100%;
        width: 100%;
        font-size: 1rem;
        display: flex;
        flex-direction: column;
    }

</style>