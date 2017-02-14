import { customElement, bindable, inject } from 'aurelia-framework';

@inject(Element)
@customElement('fabric-button')
export class Button {
    @bindable public type: ButtonType = "default";
    @bindable public icon: string = "plus";
    @bindable public dropdownIcon: string;
    @bindable public label: string;
    @bindable public btnClass: string;
    @bindable public description: string;
    @bindable public disabled: boolean;
    @bindable public click: Function;
    public buttonTypeCss: string = '';

    constructor(private element: Element) {

    }

    public clickHandler() {
        // // this.element.dispatchEvent(new Event('click'));
        // console.log("event dispatched");
        if (this.click) {
            this.click();
        }
    }

    // private typeChanged(newValue: string) {
    //     this.buttonTypeCss = newValue === '' || newValue === 'basic' || newValue === 'default' ? '' : "ms-Button--" + newValue;
    // }
}

export type ButtonType = "default" | "basic" | "primary" | "command" | "compound" | "hero";
