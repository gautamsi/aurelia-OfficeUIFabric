import { customElement, bindable, inject, child, children, Parent, containerless } from 'aurelia-framework';
import { ContextualMenu as FabricContextualMenu } from './msContextualMenu';

//@containerless
@inject(Element, Parent)
@customElement('fabric-contextual-menu')
export class OfficeContextualMenu {
    @bindable tooltip: string = null;
    @bindable ctrlId: string = '';
    // @children('office-contextualmenu-item') $menuItems:OfficeContextualMenuItem[];

    @bindable isOpen: boolean = false;
    @bindable multiSelect: boolean = false;
    @bindable public position: string = null;

    darkTextCss: string = "lightText"; //darkText
    showPresence: boolean = false;
    showTitle: boolean = false;
    showStatus: boolean = false;
    showDetail: boolean = false;
    showImage: boolean = false;
    selectableCss: string = null;

    @bindable hostTarget: Element;
    ctxMenuRoot: Element;
    private _menu: FabricContextualMenu;
    constructor(private element: Element, private parent: Parent) {

    }

    attached() {

        console.log(this.hostTarget);

        if (this.hostTarget) {
            this._menu = new FabricContextualMenu(this.ctxMenuRoot, this.hostTarget, this.position);
        }

    }
}
