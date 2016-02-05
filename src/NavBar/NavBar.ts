import {customElement, bindable, inject } from 'aurelia-framework';
//import {bindingMode } from 'aurelia-binding';
/** workaround, fix line with $(this).children('.ms-ContextualMenu:first').toggleClass('is-open'); to $(this).find('.ms-ContextualMenu:first').toggleClass('is-open'); */
import "./Jquery.NavBar";

@inject(Element)
@customElement('office-navbar')
export class OfficeNavBar {
    @bindable({defaultBindingMode: 2 /* bindingMode.twoWay */}) searchText: string = '';
    @bindable searchTextRight: boolean = false;

    navBarRoot: Element;
    constructor(private element: Element) {

    }


    clickHandler() {
        //this.element.dispatchEvent(new Event('click'));
        console.log("clicked toggler");
    }
    attached() {
        $(this.navBarRoot).NavBar();
    }

    searchButtonClick(event: KeyboardEvent) {
        if (event.keyCode === 13){
            let e = new Event('search', { bubbles: true, cancelable: true });
            this.element.dispatchEvent(e);
            event.stopPropagation();
        }
            
    }


}
