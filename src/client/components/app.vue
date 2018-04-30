<template>
    <div id="app">
        <header>
            <h1>Jsonx</h1>
        </header>

        <section class="body">
            <div class="dropZone bodyContent" @drop.prevent="drop" @dragover.prevent="dragOver" v-if="!renderer">
                <p>
                    Drop File Here !

                    {{rendererError}}
                </p>
            </div>
            <div ref="renderer" class="bodyContent" v-show="renderer"></div>
        </section>

        <aside>
            Menu
            <button @click="save">Save</button>
            <a id="download-link"></a>
        </aside>

        <footer>
            @ MAGL 2018
        </footer>
    </div>
</template>

<script>
    import Vue from 'vue';
    import Renderers from './renderers';

    const renderers = Renderers.getInstance();

    export default {
        name: 'App',
        methods: {
            saveData(data, fileName) {
                const json = JSON.stringify(data);
                const blob = new Blob([json], {type: "octet/stream"});
                const url = window.URL.createObjectURL(blob);
                const $a = document.querySelector('#download-link');
                $a.href = url;
                $a.download = fileName;
                $a.click();
                window.URL.revokeObjectURL(url);
            },

            drop(ev) {
                var files = ev.target.files || ev.dataTransfer.files;
                console.log(files);

                var reader = new FileReader();
                reader.onload = (e) => {
                    // get file content
                    const file = JSON.parse(e.target.result);

                    const rendererPromise = renderers.getFromFile(file);

                    if (rendererPromise) {
                        rendererPromise.then((renderer) => {
                            this.renderer = new renderer(file);
                            console.log(this.$refs);
                            this.renderer.render(this.$refs['renderer']);
                        }).catch((e) => {
                            this.rendererError = 'Renderer error';
                        });
                    } else {
                        this.rendererError = 'no renderer available';
                    }

                };

                reader.readAsText(files[0]);
            },

            dragOver() {},

            save() {
                this.saveData(this.renderer.data(), 'file.json');
            }
        },
        data: () => {
            return {
                rendererError: '',
                renderer: null,
                toto: 'hello toto',
            };
        }
    }
</script>

<style>
    body, h1 {
        margin: 0;
    }

    body * {
        box-sizing: border-box;
    }

    #app {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        grid-template-rows: 40px auto 40px;
        height: 100vh;
    }

    #app > header {
        grid-column: span 12;
    }

    #app .body {
        padding: 1rem;
        grid-column: span 10;
        display: flex;
    }

    #app > aside {
        grid-column: span 2;
    }

    #app > footer {
        grid-column: span 12;
    }

    #download-link {
        display: none;
    }

    .bodyContent {
        height: 100%;
        width: 100%;
    }

    .dropZone {
        background-color: #bbd5cf;
        font-size: 3rem;
        align-items: center;
        justify-content: center;
        display: flex;
    }

    .dropZone p {
        margin: 0;
        color: black;
        text-align: center;
    }
</style>