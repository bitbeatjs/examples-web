import { getInstance } from '@bitbeat/core';
import { WebAction, WebActionMiddleware, WebServer } from '@bitbeat/web';

export default class Auth extends WebActionMiddleware {
    constructor() {
        super();
    }

    // this will run before each action where you added this as middleware
    async beforeRun({ action }: { action: WebAction }): Promise<void> {
        // log out a message + the action which was called
        console.log('Hey I will run before your action!', action);

        // show the available routes as tree to visualize whats possible
        console.log(getInstance(WebServer)?.runtime?.printRoutes());

        // throw an error on purpose to show a 500 for the action
        throw new Error('Hey I will crash!');
    }
}