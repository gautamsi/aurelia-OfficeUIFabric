import { customElement, bindable, inject, bindingMode } from 'aurelia-framework';
//import { Toggle as FabricToggle } from './msToggle';

@inject(Element)
@customElement('fabric-toggle')
export class Toggle {
    static id: number = 0;
    @bindable disabled: boolean = false;
    @bindable description: string = '';
    @bindable offText: string = 'Off';
    @bindable onText: string = 'On';
    @bindable variant: string = "default";
    @bindable({ defaultBindingMode: bindingMode.twoWay }) checked: boolean = false;

    private controlId: string;
    // private toggleDiv: Element;
    private _toggleField: Element;
    // _toggle: FabricToggle;
    constructor(private element: Element) {
        this.controlId = `au-ofui-toggle-${Toggle.id++}`;
    }
    attached() {
        //this._addListeners();
    }

    detached() {
        //this.removeListeners();
    }
    public removeListeners(): void {
        this._toggleField.removeEventListener("click", this._toggleHandler.bind(this));
    }
    private _addListeners(): void {
        this._toggleField.addEventListener("click", this._toggleHandler.bind(this), false);
        this._toggleField.addEventListener("keyup", (e: KeyboardEvent) => (e.keyCode === 32) ? this._toggleHandler() : null, false);
    }

    private _toggleHandler(): void {
        this.checked = !this.checked;
    }
}

export type ToggleVariants = "default" | "textLeft";

