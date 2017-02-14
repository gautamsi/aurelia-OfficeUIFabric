import { bindable, bindingMode, customElement, inject } from 'aurelia-framework';
import { Overlay as FabricOverlay } from "./msOverlay";
import { toBool } from "../common/convert";


@inject(Element)
@customElement('fabric-overlay')
export class Overlay {
    @bindable type: OverlayType = "default";
    @bindable({ defaultBindingMode: bindingMode.twoWay }) show: boolean = false;
    private overlay: FabricOverlay;

    constructor(private element: Element) {
    }

    attached() {
        this.overlay = new FabricOverlay(<HTMLElement>this.element);
    }

    showChanged(value: boolean) {
        this.show = toBool(value);
        if (this.show && this.overlay) {
            this.overlay.show();
        }
    }
}

export type OverlayType = "default" | "none" | "dark";
