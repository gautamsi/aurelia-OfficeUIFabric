import { bindable, bindingMode, customElement, inject } from 'aurelia-framework';
import { Panel as FabricPanel } from "./msPanel";
import { toBool } from "../../utilities/convert";

@inject(Element)
@customElement('fabric-panel')
export class Panel {
    @bindable headerText: string = null;
    @bindable headerCss: string = null;
    @bindable size: PanelSize = "sm";
    @bindable direction: PanelDirection = "right";
    @bindable({ defaultBindingMode: bindingMode.twoWay }) open: boolean = false;
    @bindable onClose: Function;
    $open: boolean = false;
    isOpen: boolean = false;
    private fabricPanel: FabricPanel;

    constructor(private element: Element) {
    }

    attached() {
        //this.fabricPanel = new FabricPanel(this.element);
    }

    closePanel() {
        // this.closing = true;
        if (this.fabricPanel) {
            //this.fabricPanel.dismiss(this.onClose);
            this.fabricPanel = null;
        }
        this.open = this.$open = false;
    }
    openChanged(value: boolean) {
        // console.log(value);
        this.$open = toBool(value);
        if (this.$open) {
            if (this.fabricPanel) {
                try {
                    this.fabricPanel.dismiss();
                } catch (e) { }
                this.fabricPanel = null;
            }
            this.fabricPanel = new FabricPanel(this.element, this.closePanel.bind(this), this.direction);
        } else {
            if (this.fabricPanel) {
                this.fabricPanel.dismiss(); //this.onClose);
                //this.fabricPanel = null;
            }
        }
    }
}

export type PanelSize = "sm" | "md" | "lg" | "xl" | "xxl";
export type PanelDirection = "left" | "right";
