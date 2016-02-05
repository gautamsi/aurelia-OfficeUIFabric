import {customElement, bindable} from 'aurelia-framework';

@customElement('office-overlay')
export class Overlay {
    @bindable type:string = OverlayType[OverlayType.default];
}

export enum OverlayType {
    default,
    none,
    dark,    
}

