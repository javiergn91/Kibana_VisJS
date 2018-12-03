import {VisFactoryProvider} from 'ui/vis/vis_factory';
import {VisTypesRegistryProvider} from 'ui/registry/vis_types';
import {Schemas} from 'ui/vis/editors/default/schemas';

class NetworkVisualization {
    constructor(el, vis) {
        this.el = el;
        this.vis = vis;
        this.container = document.createElement("div");
        this.el.appendChild(this.container);
    }

    async render(visData, status) {
        console.log("render");
    }

    destroy() {
        this.el.innerHTML = "";
    }
}

const networkVis = (Private) => {
    const visFactory = Private(VisFactoryProvider);

    return visFactory.createBaseVisualization({
        name: "network",
        title: "Network",
        icon: "asterisk",
        description: "Network",
        visualization: NetworkVisualization,
        editorConfig: {
            schemas: new Schemas([
                {
                    group: "metrics",
                    name: "metric",
                    title: "metrics",
                    defaults: [{
                        type: "count",
                        schema: "metric"
                    }]
                }
            ])
        }    
    });
}

VisTypesRegistryProvider.register(networkVis);