import {customElement, bindable, inject} from 'aurelia-framework';

/**
 *  workaround with official fabric js 
        // Deselect all of the items and close any menus.
          $('.ms-ContextualMenu-link')
              .removeClass('is-selected')
              .siblings('.ms-ContextualMenu')
              .removeClass('is-open');

          // Select this item.
          $(this).addClass('is-selected');

          // If this item has a menu, open it.
          if ($(this).hasClass('ms-ContextualMenu-link--hasMenu')) {
            $(this).siblings('.ms-ContextualMenu:first').addClass('is-open');
            
            
            
            replace with with 
 * 
 * 
          // Deselect all of the items and close any menus.
          $('.ms-ContextualMenu-link')
              .removeClass('is-selected')
              .siblings('.ms-ContextualMenu-container')
              .find('.ms-ContextualMenu')
              .removeClass('is-open');

          // Select this item.
          $(this).addClass('is-selected');

          // If this item has a menu, open it.
          if ($(this).hasClass('ms-ContextualMenu-link--hasMenu')) {
            $(this).siblings('.ms-ContextualMenu-container').find('.ms-ContextualMenu:first').addClass('is-open');

 * 
 */

 

import "./Jquery.ContextualMenu";

@inject(Element)
@customElement('office-contextualmenu')
export class OfficeContextualMenu {
    @bindable type: string = ListItemType[ListItemType.default];
    @bindable documentIcon:string = "documentPDF";
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
    
    @bindable navbarChild:boolean = false;
    @bindable isOpen:boolean;// = false;
    @bindable multiSelect:boolean;// = false;

    darkTextCss:string="lightText" //darkText
    showPresence:boolean = false;
    showTitle:boolean = false;
    showStatus:boolean = false;
    showDetail:boolean = false;
    showImage:boolean = false;
    selectableCss:string = null;
    
    ctxMenuRoot:Element;
    constructor(private element:Element){
        
    }
  

    clickHandler(){
        //this.element.dispatchEvent(new Event('click'));
        console.log("clicked toggler");
    }
    attached(){
        if(this.navbarChild) 
            return;
        
       $(this.ctxMenuRoot).ContextualMenu();
    }
}

export enum ListItemType {
    default,
    document    
}
