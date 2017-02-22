import { customElement, bindable, inject } from 'aurelia-framework';

@inject(Element)
@customElement('fabric-list-item')
export class ListItem {
    @bindable variant: string = ListItemType[ListItemType.default];
    @bindable icon: string = "checkboxEmpty";
    @bindable largeIcon: boolean = false;
    @bindable iconAlign: string = "left";
    @bindable iconClick: Function;
    @bindable click: Function;
    @bindable primaryText: string = null;
    @bindable secondaryText: string = null;
    @bindable tertiaryText: string = null;
    @bindable metaText: string = null;
    @bindable image: string = null;
    @bindable imagealt: string = null;
    @bindable tooltip: string = null;
    @bindable isSelected: boolean = false;
    @bindable selectable: boolean = false;
    @bindable hasImage: boolean = false;
    @bindable hasIcon: boolean = false;
    @bindable isUnseen: boolean = false;
    @bindable isUnread: boolean = false;

    constructor(private element: Element) {

    }


    clickHandler() {
        if (this.click) {
            this.click();
        }
    }
    iconClickHandler() {
        if (this.iconClick) {
            this.iconClick();
        }
    }
    attached() {

    }
}

export enum ListItemType {
    default,
    document
}
export enum ListItemIconAlign {
    left,
    right
}
