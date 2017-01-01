import {customElement, bindable, inject} from 'aurelia-framework';
import * as Fabric from './SpinnerComponent';

//@inject(Element)
@customElement('office-spinner')
export class Spinner {
    @bindable text:string;
    @bindable showText:boolean = false;
    @bindable size:boolean = false;
    
    defaultText:string = "Loading...";
    $spinner:Element;
    constructor()
    {                
    }
    attached(){
        var spinned = Fabric.Spinner(this.$spinner);
        this.text = this.text || this.defaultText;
    }
}

