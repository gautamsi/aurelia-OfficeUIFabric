import { customElement, bindable, inject } from "aurelia-framework";

@customElement("office-list")
export class OfficeList {
    @bindable public type: string = ListType[ListType.list];
}

export enum ListType {
    list,
    grid
}
