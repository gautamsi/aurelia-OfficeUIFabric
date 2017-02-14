import { customElement, bindable, inject, bindingMode } from 'aurelia-framework';
import { CheckBox as FabricCheckBox } from "./msCheckBox";
import { toBool } from "../common/convert";

@inject(Element)
@customElement('fabric-checkbox')
export class CheckBox {
    @bindable public label: string;
    @bindable public disabled: boolean;
    @bindable({ defaultBindingMode: bindingMode.twoWay }) public checked: boolean;

    private fabricCheckBox: FabricCheckBox;

    constructor(private element: Element) {
    }

    checkedChanged(value: any) {
        this.checked = toBool(value);
    }

    disabledChanged(value: any) {
        this.disabled = toBool(value);
    }

    attached() {
        this.fabricCheckBox = new FabricCheckBox(<HTMLElement>this.element);
    }

    detached() {
        this.fabricCheckBox.removeListeners();
        this.fabricCheckBox = null;
    }
}
