import { WebServerConfig } from '@bitbeat/web';

// use the webserver config and create your own config on top of that
export default class MyWebServerConfig extends WebServerConfig {
    // append the old properties and add your own too
    default: any = Object.assign({}, this.default, {});

    constructor() {
        super();
    }
}