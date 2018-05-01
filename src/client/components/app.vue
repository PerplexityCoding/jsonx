<template>
    <div id="app">
        <header>
            <h1>(j)sonx.io</h1>
            <input class="search-box" type="text" placeholder="Search your files" />
        </header>

        <section class="body">
            <router-view></router-view>
        </section>

        <footer>
            <div class="copyright">
                JSONX @ MAGL 2018
            </div>
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
        },
        data: () => {
            return {
            };
        }
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css?family=Lato');

    body, h1 {
        margin: 0;
        font-family: 'Lato', sans-serif;
    }

    body * {
        box-sizing: border-box;
    }

    #app {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        grid-template-rows: 40px auto 40px;
        min-height: 100vh;
    }

    #app > header {
        display: flex;
        color: #fff9f9;
        background-color: #1aa7e7;
        grid-column: span 12;
    }

    #app > header h1 {
        font-size: 1.5rem;
        line-height: 36px;
        padding-left: 0.5rem;
    }

    #app > .body {
        grid-column: span 12;
    }

    #app > footer {
        grid-column: span 12;
        line-height: 36px;
        background-color: firebrick;
        color: #fef9f9;
    }

    .copyright {
        margin-left: 0.5rem;
        font-size: 0.7rem;
    }

    .search-box {
        background: #fff9f9;
        flex: 1;
        margin: 7px 2rem;
        border: none;
        border-radius: 1rem;
        padding: 0 0 0 1rem;
        max-width: 40rem;
    }
</style>