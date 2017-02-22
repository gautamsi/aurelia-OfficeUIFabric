import { customElement, bindable, inject } from 'aurelia-framework';
import { Spinner as FabricSpinner } from './msSpinner';

@inject(Element)
@customElement('fabric-spinner')
export class Spinner {
    @bindable label: string;
    @bindable displayLabel: boolean = false;
    @bindable size: string = "default";

    defaultLabel: string = "Loading...";

    spinnerElement: Element;
    _spinner: FabricSpinner;
    constructor(private element: Element) {
    }
    attached() {
        this.label = this.label || this.defaultLabel;
        this._spinner = new FabricSpinner(<HTMLElement>this.spinnerElement);
    }
}

