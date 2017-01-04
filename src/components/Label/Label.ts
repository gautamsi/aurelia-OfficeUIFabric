import { bindable, customElement } from 'aurelia-framework';

@customElement('fabric-label')
export class Label {
    @bindable public required: boolean;
    @bindable public disabled: boolean;

    public constructor() {

    }
}
