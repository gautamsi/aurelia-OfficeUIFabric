import {customElement, bindable, inject, child, children, useShadowDOM} from 'aurelia-framework';
import {OfficeNavBar} from "./NavBar"
import {OfficeContextualMenu} from "../ContextualMenu/ContextualMenu"


@inject(Element, OfficeNavBar)
//@useShadowDOM()
@customElement('office-navbar-item')
export class OfficeNavBarItem {
    @child('office-contextualmenu') contextualMenu: OfficeContextualMenu;
    @bindable linkText: string = '';
    @bindable icon: string = '';
    @bindable hasMenu: boolean = false;
    @bindable right: boolean = false;
    @bindable disabled: boolean = false;
    @bindable type: string = "default";
    @bindable search: Function;
    @bindable({ defaultBindingMode: 2 /* bindingMode.twoWay */ }) searchText: string = '';
    @bindable isOpen: boolean = false;
    @bindable isSelected: boolean = false;

    searchBoxCSS: string = 'ms-NavBar-item--search ms-u-hiddenSm';
    $searchField: HTMLInputElement;
    constructor(private element: Element, private navbar: OfficeNavBar) {

    }
    attached() {
        this.icon = this.hasMenu && this.icon === '' ? 'chevronDown' : this.icon;        
    }
    searchButtonClick(event: KeyboardEvent) {
        if (event.keyCode === 13) {
            if (this.search && typeof this.search === 'function') {
            
                // let e = new Event('search', { bubbles: true, cancelable: true });
                // this.element.dispatchEvent(e);
                // event.stopPropagation();
                this.search({ $searchText: this.searchText });
            }
        }
    }

    closeAndBlur() {
        return;
        this.isSelected = false;
        if (this.type === 'search' && this.$searchField.value.length === 0) {
            this.isOpen = false;
            this.$searchField.blur();
        }
        if (this.contextualMenu) {
            this.contextualMenu.isOpen = false;
        }
    }
}