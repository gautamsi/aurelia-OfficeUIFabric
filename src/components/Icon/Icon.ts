import { customElement, bindable } from 'aurelia-framework';


@customElement('fabric-icon')
export class OfficeListItemAction {

    @bindable icon: string = "";
    @bindable click: Function;
    @bindable type: string = "default";

    constructor() {
    }
    clickHandler() {
        if (this.click) {
            this.click();
        }
    }
}
