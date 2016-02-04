import {customElement, bindable, inject} from 'aurelia-framework';

//@inject(Element)
@customElement('office-list')
export class OfficeList {
    @bindable type: string = ListType[ListType.list];
}

export enum ListType {
    list,
    grid    
}
