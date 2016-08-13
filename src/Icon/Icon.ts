import {customElement, bindable} from 'aurelia-framework';


@customElement('office-icon')
export class OfficeListItemAction {
    
    @bindable icon:string = "checkboxEmpty";    
    @bindable click:Function;
    @bindable type:string = "default";
    
    constructor(){
        
    }
    clickHandler(){
        if(this.click){
           this.click(); 
        }
    }
}