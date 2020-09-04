import { WebAction, WebActionMiddleware } from '@bitbeat/web';

export default class Auth extends WebActionMiddleware {
    constructor() {
        super();
    }

    async beforeRun({ action }: { action: WebAction }): Promise<void> {
        console.log('Hey I will run before your action!', action);
        throw new Error('Hey I will crash!');
    }
}