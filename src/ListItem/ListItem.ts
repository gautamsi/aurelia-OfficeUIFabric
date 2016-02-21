import {customElement, bindable, inject} from 'aurelia-framework';

@inject(Element)
@customElement('office-listitem')
export class OfficeListItem {
    @bindable type: string = ListItemType[ListItemType.default];
    @bindable icon:string = "checkboxEmpty";
    @bindable primaryText:string = null;
    @bindable secondaryText:string = null;
    @bindable tertiaryText:string = null;
    @bindable metaText:string = null;
    @bindable image:string = null;
    @bindable imagealt:string = null;
    @bindable tooltip:string = null;
    @bindable isSelected:boolean;// = false;
    @bindable selectable:boolean;// = false;
    @bindable hasImage:boolean;// = false;
    @bindable hasIcon:boolean;// = false;
    @bindable isUnseen:boolean;// = false;
    @bindable isUnread:boolean;// = false;
    
    darkTextCss:string="lightText" //darkText
    showPresence:boolean = false;
    showTitle:boolean = false;
    showStatus:boolean = false;
    showDetail:boolean = false;
    showImage:boolean = false;
    selectableCss:string = null;
    
    constructor(private element:Element){
        
    }
  

    clickHandler(){
        //this.element.dispatchEvent(new Event('click'));
        console.log("clicked toggler");
    }
    attached(){
       
    }
}

export enum ListItemType {
    default,
    document
}
