import { bindable, bindingMode, customElement, inject } from 'aurelia-framework';
import { Overlay as FabricOverlay } from "./msOverlay";
import { toBool } from "../../utilities/convert";

@inject(Element)
@customElement('fabric-overlay')
export class Overlay {
    @bindable variant: OverlayVariant = "default";
    @bindable({ defaultBindingMode: bindingMode.twoWay }) isOpen: boolean = false;
    private overlay: FabricOverlay;
    private overlayElement: HTMLElement;
    constructor() {
    }

    attached() {
        this.overlay = new FabricOverlay(this.overlayElement, () => { this.isOpen = false; });
    }
    detached() {
        if (this.overlay) {
            try {
                this.overlay.remove();
            } catch (error) {
            }
        }
    }
    isOpenChanged(value: boolean) {
        this.isOpen = toBool(value);
        if (this.isOpen && this.overlay) {
            this.overlay.show();
        }
    }
}

export type OverlayVariant = "default" | "none" | "dark";
