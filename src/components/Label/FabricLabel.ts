import { bindable, customElement } from 'aurelia-framework';

@customElement('fabric-label')
export class FabricLabel {
    @bindable public required: boolean;
    @bindable public disabled: boolean;
    @bindable public for: string;
    public constructor() {

    }
}
