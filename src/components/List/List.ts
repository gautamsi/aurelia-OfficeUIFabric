import { customElement, bindable, inject } from "aurelia-framework";

@customElement("fabric-list")
export class List {
    @bindable public type: string = ListType[ListType.list];
}

export enum ListType {
    list,
    grid
}
