import {customElement, bindable, inject, child, children, useShadowDOM} from 'aurelia-framework';
import {OfficeContextualMenu} from "./Contextualmenu";

//@useShadowDOM()
@inject(Element, OfficeContextualMenu)
@customElement('office-contextualmenu-item')
export class OfficeContextualMenuItem {
    @bindable linkText: string = '';
    @bindable headerText: string = '';
    @bindable icon: string = '';
    @bindable href: string = '#';
    @bindable hasMenu: boolean = false;
    @bindable divider: boolean = false;
    @bindable header: boolean = false;
    @bindable disabled: boolean;
    @bindable({ defaultBindingMode: 2 /* bindingMode.twoWay */ }) selected: boolean = false;
    @bindable click: Function;
    @child('office-contextualmenu') $contextualMenu: OfficeContextualMenu;
    constructor(private element: Element, private $parentMenu: OfficeContextualMenu) {

    }
    attached() {
        this.icon = this.hasMenu && this.icon === '' ? 'chevronDown' : this.icon;
    }
    linkClickHandler($event: Event) {
        if (this.disabled) {
            return;
        }
       
        if (this.click && typeof this.click === 'function') {
            this.click({$menuItem:this});
        }
        
        //until shadowdom bug is fixed with Aurelia. I do have to figure out styling under shadow dom for fabric. 
        
        return;
        
        $event.preventDefault();
        
        // Check if multiselect - set selected states
        if (this.$parentMenu.multiSelect) {
            // If already selected, remove selection; if not, add selection
            this.selected = !this.selected;
        }
        // All other contextual menu variants
        else {
            // // Deselect all of the items and close any menus.
            // $('.ms-ContextualMenu-link')
            //     .removeClass('is-selected')
            //     .siblings('.ms-ContextualMenu-container')
            //     .find('.ms-ContextualMenu')
            //     .removeClass('is-open');

            // // Select this item.
            // $(this).addClass('is-selected');
            // //this.selected = false;
            if(this.$parentMenu){
                this.$parentMenu.closeDeselectChild(this);                
            }
            this.selected = true;
            
            if(this.hasMenu && this.$contextualMenu){
                this.$contextualMenu.isOpen = true;
                // Open the menu without bubbling up the click event,
                // which can cause the menu to close.
                $event.stopPropagation();
            }
            
        }
    }
    closeDeselectItem(){
        this.selected = false;
        if(this.$contextualMenu){
            this.$contextualMenu.isOpen = false;
        }
    }
}