import { WebAction } from '@bitbeat/web';
import Auth from '../middlewares/auth';

export default class MyAction extends WebAction {
    constructor() {
        super();

        // rename my action to myAction instead of MyAction
        this.name = 'myAction';

        // only allow get methods
        this.methods = ['GET'];

        // add a basic middleware
        this.middlewares = new Set([Auth]) as any;
    }

    // run a console log on calling of the function
    async run(): Promise<void> {
        console.log('This is my cool action and will do some stuff.');
    }
}