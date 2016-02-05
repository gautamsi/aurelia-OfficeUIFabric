import {customElement, bindable, inject} from 'aurelia-framework';

@inject(Element)
@customElement('office-navbar-item')
export class OfficeNavBarItem {
    @bindable linkText:string = '';
    @bindable icon:string = '';
    @bindable hasMenu:boolean=false;
    @bindable right:boolean=false;
    @bindable disabled:boolean=false;
    constructor(private element:Element){
        
    }
    attached(){
        this.icon = this.hasMenu && this.icon===''? 'chevronDown':this.icon;
    }
}