import {customElement, bindable, inject} from 'aurelia-framework';
//import "./Jquery.SearchBox";
@inject(Element)
@customElement('office-searchbox')
export class OfficeSearchBox {

    @bindable searchButton:boolean = false;
    @bindable searchBoxLabelText:string = "Search"
    @bindable text:string = '';
    @bindable search:Function;
    
    isActive:boolean = false;
    $searchField:Element;
    $searchButton:Element;
    $searchBoxLabel:Element;
    searchBoxLabelVisible:boolean = true;
    hasFocus:boolean = false;
    hovering:boolean = false;
    cancel:boolean=false;
    constructor(private element:Element){
        
    }
  
    searchFieldFocus(){
        this.searchBoxLabelVisible = false;
        this.isActive = true;
    }
    searchFieldBlur(){
        if(this.cancel){
            this.text = '';
            //this.hovering = true;
        }
        
        // Prevents inputfield from gaining focus too soon
        setTimeout(function() {
            // Remove is-active class - hides cancel button
            this.isActive = false;
        }.bind(this), 10);
        
        /** Only do this if no text was entered. */
        if (this.text.length === 0 ) {
          this.searchBoxLabelVisible = true;
        }

        // Reset cancel to false
        this.cancel = false;        
    }
    
    searchFieldMouseOver(){      
        this.hovering = true;  
    }
    searchFieldMouseOut(){       
        this.hovering = false; 
    }
    cancelButtonMouseDown(){
        this.text='';
        this.cancel = true;
    }
    
    searchButtonMouseDown(){
        if(this.search){
            this.search({$searchText:this.text});
        }
        // let e = new Event('search',{bubbles:true, cancelable:true});
        // this.element.dispatchEvent(e);
    }
    
    attached(){    
    }
}

export enum ListItemType {
    default,
    document    
}
