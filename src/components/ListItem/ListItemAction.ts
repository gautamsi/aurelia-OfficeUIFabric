import { customElement, bindable } from 'aurelia-framework';


@customElement('fabric-list-item-action')
export class ListItemAction {

    @bindable icon: string = "person";
    @bindable customCss: string = '';
    @bindable click: Function;
    constructor() {

    }
    clickHandler() {
        if (this.click) {
            this.click();
        }
    }
}
