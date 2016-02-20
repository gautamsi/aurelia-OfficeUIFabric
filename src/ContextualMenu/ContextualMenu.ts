import {customElement, bindable, inject, child, children, useShadowDOM} from 'aurelia-framework';

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
import {OfficeNavBarItem} from "../Navbar/NavBarItem";
import {OfficeContextualMenuItem} from "./ContextualMenuItem";

//@useShadowDOM()
@inject(Element, OfficeNavBarItem)
@customElement('office-contextualmenu')
export class OfficeContextualMenu {
    @bindable tooltip:string = null;
    
    @children('office-contextualmenu-item') $menuItems:OfficeContextualMenuItem[];
    
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
    constructor(private element:Element, private $parentNavBarItem){
        
    }

    attached(){
        if(this.navbarChild) 
            return;
        
       $(this.ctxMenuRoot).ContextualMenu();
    }
    closeDeselectChild(sourceMenuItem:OfficeContextualMenuItem){
        this.$menuItems.forEach((item,index)=>{
            if(item != sourceMenuItem){
                item.closeDeselectItem();
            }
        });
    }
}
