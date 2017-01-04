import { customElement, bindable, inject } from 'aurelia-framework';

@inject(Element)
@customElement('fabric-button')
export class Button {
    @bindable public type: ButtonType = ButtonType.basic;
    @bindable public icon: string = "plus";
    @bindable public label: string;
    @bindable public description: string;
    @bindable public disabled: boolean;

    public buttonTypeCss: string = '';

    constructor(private element: Element) {

    }

    // public clickHandler() {
    //     // this.element.dispatchEvent(new Event('click'));
    //     console.log("event dispatched");
    // }

    // private typeChanged(newValue: string) {
    //     this.buttonTypeCss = newValue === '' || newValue === 'basic' || newValue === 'default' ? '' : "ms-Button--" + newValue;
    // }
}

export enum ButtonType {
    default,
    basic,
    primary,
    command,
    compound,
    hero
}
