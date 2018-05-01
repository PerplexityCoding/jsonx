<template>
    <div class="editor" ref="renderer">
    </div>
</template>

<script>
    import Vue from 'vue';
    import Renderers from './renderers';
    import fs from 'fs';

    const renderers = Renderers.getInstance();

    export default {
        name: 'Editor',
        mounted: function() {
            console.log(this.$route.params);

            fs.readFile(this.$route.params.fileId, 'utf-8', (err, data) => {
                if (err) {
                    return;
                }

                const file = JSON.parse(data);

                renderers.getCatalog().then(() => {
                    renderers.getFromFile(file).then((Renderer) => {
                        console.log(Renderer);
                        console.log(this.$refs['renderer']);

                        new Renderer(file).render(this.$refs['renderer']);
                    });
                });
            });
        }
    }
</script>

<style scoped>
</style>