import {customElement, bindable, inject} from 'aurelia-framework';
import * as Fabric from './SpinnerComponent.js';

//@inject(Element)
@customElement('office-spinner')
export class Spinner {
    @bindable text:string = "Loading...";
    @bindable hasText:boolean = false;
    @bindable large:boolean = false;
    
    element:Element;
    constructor()
    {                
    }
    attached(){
        var spinned = Fabric.Spinner(this.element);
    }
}

