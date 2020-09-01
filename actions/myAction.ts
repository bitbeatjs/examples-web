import { WebAction } from '@bitbeat/web';

export default class MyAction extends WebAction {
    constructor() {
        super();
        this.name = 'myAction';
        this.methods = ['GET'];
    }

    async run(): Promise<void> {
        console.log('This is my cool action and will do some stuff.');
    }
}