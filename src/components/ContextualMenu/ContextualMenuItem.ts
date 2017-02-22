import { customElement, bindable, inject, containerless, children, child } from 'aurelia-framework';

//@containerless
@inject(Element)
@customElement('fabric-contextual-menu-item')
export class OfficeContextualMenuItem {
    @bindable linkText: string = '';
    @bindable title: string = '';
    @bindable variant: string = 'default';
    @bindable icon: string = '';
    @bindable href: string = '#';
    @bindable hasMenu: boolean = false;
    @bindable divider: boolean = false;
    @bindable isHeader: boolean = false;
    @bindable disabled: boolean = false;
    @bindable selected: boolean = false;
    @bindable click: Function;
    constructor(private element: Element) {

    }
    attached() {
    }
    linkClickHandler($event: Event) {
        if (this.disabled) {
            return;
        }
        if (this.click) {
            this.click();
        }
    }
    closeDeselectItem() {
        // this.selected = false;
        // if(this.$contextualMenu){
        //     this.$contextualMenu.isOpen = false;
        // }
    }
}
