// import {customElement, bindable, inject, child, children, useShadowDOM} from 'aurelia-framework';
// import {ContextualHost} from './msContextualHost'

// //@useShadowDOM()
// @customElement('fabric-contextualhost')
// export class OfficeContextualHost {
//     @bindable tooltip:string = null;
    
//     @children('office-contextualmenu-item') $menuItems:OfficeContextualMenuItem[];
    
//     @bindable navbarChild:boolean = false;
//     @bindable isOpen:boolean;// = false;
//     @bindable multiSelect:boolean;// = false;
    
//     darkTextCss:string="lightText" //darkText
//     showPresence:boolean = false;
//     showTitle:boolean = false;
//     showStatus:boolean = false;
//     showDetail:boolean = false;
//     showImage:boolean = false;
//     selectableCss:string = null;
    
//     ctxMenuRoot:Element;
//     constructor(private element:Element, private $parentNavBarItem){
//         let el = new ContextualHost(element,this)
//     }

//     attached(){
//         if(this.navbarChild) 
//             return;
        
//        $(this.ctxMenuRoot).ContextualMenu();
//     }
//     closeDeselectChild(sourceMenuItem:OfficeContextualMenuItem){
//         this.$menuItems.forEach((item,index)=>{
//             if(item != sourceMenuItem){
//                 item.closeDeselectItem();
//             }
//         });
//     }
// }
