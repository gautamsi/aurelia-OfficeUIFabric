import {customElement, bindable} from 'aurelia-framework';


@customElement('office-listitem-action')
export class OfficeListItemAction {
    
    @bindable icon:string = "person";    
    @bindable click:Function;

    constructor(){
        
    }
    clickHandler(){
        if(this.click){
           this.click(); 
        }
    }
}