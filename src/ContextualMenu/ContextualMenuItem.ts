import {customElement, bindable, inject} from 'aurelia-framework';

@inject(Element)
@customElement('office-contextualmenu-item')
export class OfficeContextualMenuItem {
    @bindable linkText:string = '';
    @bindable headerText:string = '';
    @bindable icon:string = '';
    @bindable href:string = '#';
    @bindable hasMenu:boolean=false;
    @bindable divider:boolean = false;
    @bindable header:boolean=false;
    constructor(private element:Element){
        
    }
    attached(){        
        this.icon = this.hasMenu && this.icon ==='' ? 'chevronDown' : this.icon;
    }
}