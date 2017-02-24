import { customElement, bindable, inject, bindingMode } from 'aurelia-framework';
import { TextField as FabricTextField } from './msTextField';

@inject(Element)
@customElement('fabric-text-field')
export class TextField {
    @bindable label: string;
    @bindable disabled: boolean = false;
    @bindable description: string = '';
    @bindable variant: string = "default";
    @bindable placeholder: string = '';
    @bindable({ defaultBindingMode: bindingMode.twoWay }) value: string = '';
    private textFieldDiv: Element;
    _textField: FabricTextField;
    constructor(private element: Element) {
    }
    attached() {
        this._textField = new FabricTextField(<HTMLElement>this.textFieldDiv);
    }
}

export type TextFieldVariants = "default" | "multiline" |  "underlined" | "placeholder";

