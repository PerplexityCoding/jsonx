import axios from 'axios';

export default class Renderers {

    static getInstance() {
        if (!Renderers.instance) {
            Renderers.instance = new Renderers();
        }
        return Renderers.instance;
    }

    constructor() {
        this.catalog = {};
        this.catalogPromise = null;
        this.renderers = {};

        this.loadRenderers();
    }

    loadRenderers() {
        this.catalogPromise = axios.get('./components/renderers/catalog.json')
            .then((res) => {
                const data = res.data;
                this.catalog = data;
                this.renderers = data.renderers;

                return this.catalog;
            });
    }

    get(name, version) {
        let renderer = this.renderers[name];
        if (renderer) {
            let rendererInVersion = renderer[version];
            if (rendererInVersion) {
                return this.loadFromServer(name, version, rendererInVersion);
            }
        }
        return null;
    }

    loadFromServer(name, version, rendererInVersion) {
        return new Promise((resolve, reject) => {
            var s = document.createElement("script");
            s.type = "text/javascript";
            s.onload = function () {
                let rendererer = window[rendererInVersion.name];
                if (rendererer) {
                    rendererer = rendererer.default || rendererer[rendererInVersion.name] || rendererer;
                }
                resolve(rendererer);
            };
            s.onerror = function () {
                reject(`script load ${s.src} failed`);
            };
            const url = '.';
            s.src = `${url}/components/renderers/${name}/${version}/${rendererInVersion.main}`;
            document.head.append(s);
        });
    }

    getFromFile(file) {
        let rendererInfo = file.renderer;
        return this.get(rendererInfo.name, rendererInfo.version);
    }

    getCatalog() {
        return this.catalogPromise;
    }

}