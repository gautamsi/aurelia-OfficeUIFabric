import {customElement, bindable, inject, child, children, useShadowDOM } from 'aurelia-framework';
//import {bindingMode } from 'aurelia-binding';
/** workaround, fix line with $(this).children('.ms-ContextualMenu:first').toggleClass('is-open'); to $(this).find('.ms-ContextualMenu:first').toggleClass('is-open'); */
/** workaround for menu item slection change after click , change $(this).siblings('.ms-NavBar-item').removeClass('is-selected'); with  $navBar.find('.ms-NavBar-item').removeClass('is-selected'); */
import "./Jquery.NavBar";
import {OfficeNavBarItem} from "./NavBarItem";
declare var $;

//@useShadowDOM()
@inject(Element)
@customElement('office-navbar')
export class OfficeNavBar {
    
    isOpen:boolean = false;
    $navBarRoot: Element;
    @children('.ms-NavBar-item--search')    $searchBoxes: Element[];    
    @children('office-navbar-item')   $navItems: OfficeNavBarItem[];
    
    
    constructor(private element: Element) {
    }


    clickHandler() {
        //this.element.dispatchEvent(new Event('click'));
        //console.log("clicked toggler");
    }
    attached() {
        $(this.$navBarRoot).NavBar();
        return; //until shadowdom and styling is figured
        document.addEventListener("click",()=>{
            this.$navItems.forEach((item,index)=>{
               //item.
            });
        });
    }
    
    toggleNavBar($event: Event){
        // this.isOpen = !this.isOpen;
        // $event.stopPropagation();
    }

}
