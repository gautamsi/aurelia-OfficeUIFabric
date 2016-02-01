import {customElement, bindable, inject} from 'aurelia-framework';

@inject(Element)
@customElement('of-button')
export class OfButton {
    @bindable type: ButtonType = ButtonType.basic;
    @bindable icon:string = "plus";
    @bindable label:string;
    @bindable description:string;
    
    buttonTypeCss:string = '';
    
    constructor(private element:Element){
        
    }
    typeChanged(newValue:string){
        this.buttonTypeCss = newValue ==='' || newValue === ButtonType[ButtonType.basic] ? '' : "ms-Button--" + newValue;           
    }
    
    clickHandler(){
        //this.element.dispatchEvent(new Event('click'));
        console.log("event dispatched");
    }
}

export enum ButtonType {
    basic,
    primary,
    command,
    compound,
    hero
    
}
