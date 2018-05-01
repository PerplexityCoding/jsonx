<template>
    <div class="dashboard">
        <aside class="menu">
            <button class="newBtn">New</button>

            <section class="menu__browser">
            </section>
        </aside>

        <section class="content">

            <div class="content__block">
                <header>
                    My Apps
                </header>
                <section>
                    <ul class="content__block__list" v-if="catalog">
                        <li class="content__block__list__item" v-for="(renderer, rendererName) in catalog.renderers">
                            <div class="list__item__icon">
                                <div v-html="renderer[renderer.latest].svg"/>
                            </div>
                            <div class="list__item__title">
                                <span>
                                    {{renderer[renderer.latest].title}}
                                </span>
                                <sup>{{renderer[renderer.latest].version}}</sup>
                            </div>

                            <div class="list__item__overlay">
                                <div class="list__item__overlay__back"></div>
                                <button class="newBtn">New</button>
                            </div>
                        </li>
                    </ul>
                </section>
            </div>

            <div class="content__block">
                <header>
                    Files
                </header>
                <section>
                    <ul>
                        <li>
                            File.json
                        </li>
                    </ul>
                </section>
            </div>

        </section>
    </div>
</template>

<script>
    import Vue from 'vue';
    import Renderers from './renderers';

    const renderers = Renderers.getInstance();

    export default {
        name: 'Dashboard',
        created: function() {
            renderers.getCatalog().then((catalog) => {
                this.catalog = catalog;
            });
        },
        methods: {
        },
        data: () => {
            return {
                catalog: {}
            };
        }
    }
</script>

<style scoped>
    .newBtn {
        background: #1ba7e7;
        border: none;
        color: white;
        padding: 0.5rem 1.8rem;
        font-size: 1rem;
        border-radius: 0.2rem;
        max-height: 2rem;
        cursor: pointer;
    }

    .dashboard {
        display: flex;
        min-height: 100%;
        width: 100%;
    }

    .menu {
        min-width: 150px;
        max-width: 300px;
        flex: 1;
        flex-direction: column;
        display: flex;
        background-color: #f2f5f6;
    }

    .menu__browser {
        flex: 1;
    }

    .content {
        flex: 3;
        display: flex;
        flex-direction: column;
        padding: 1rem;
    }

    .content__block__list {
        display: flex;
        flex-wrap: wrap;
        padding-left: 0;
    }

    .content__block__list__item {
        flex-basis: 8rem;
        list-style: none;
        height: 10rem;
        width: 8rem;
        background-color: #f2f4f6;
        margin: 0 1rem;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        position: relative;
    }

    .list__item__icon {
        flex: 1;
        margin: 1rem;
        user-select: none;
    }

    .list__item__title {
        text-align: center;
        padding: 0.5rem 0.2rem;
        color: #fef9f9;
        display: flex;
        background-color: firebrick;
        opacity: 0.8;
    }

    .list__item__title span {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        padding-right: 0.3rem;
        margin: 0 auto;
    }

    .content__block__list__item:hover .list__item__overlay {
        display: flex;
    }

    .list__item__overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: none;
    }

    .list__item__overlay__back {
        background: black;
        height: 100%;
        width: 100%;
        opacity: 0.7;
        position: absolute;
    }

    .list__item__overlay .newBtn {
        margin: auto;
        z-index: 1;
    }

    .list__item__title sup {
        color: #91ff00;
    }


</style>