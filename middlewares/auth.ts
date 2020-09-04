import { WebAction, WebActionMiddleware } from '@bitbeat/web';

export default class Auth extends WebActionMiddleware {
    constructor() {
        super();
    }

    async beforeRun(data: { action: WebAction; result: any; raw: any }): Promise<void> {
        console.log('Hey I will run before your action!', WebAction);
    }
}