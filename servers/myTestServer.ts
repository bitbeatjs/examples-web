import { Server, getInstance } from '@bitbeat/core';
import myWebServerConfig from '../config/myWebServerConfig';

// create your own server and fetch your custom config
export default class MyTestServer extends Server {
    constructor() {
        super();
    }

    async start(): Promise<void> {
        // get your custom configuration and do stuff with it
        console.log(getInstance(myWebServerConfig));
        console.log('Started');
    }

    async stop(): Promise<void> {
        console.log('Stopped');
    }
}