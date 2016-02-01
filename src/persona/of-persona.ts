import {customElement, bindable, inject} from 'aurelia-framework';

@inject(Element)
@customElement('of-persona')
export class OfPersona {
    @bindable shape: string = PersonaShape[PersonaShape.round];
    @bindable bgIcon:string = "person";
    @bindable presence:string = PersonaPresence[PersonaPresence.none];
    @bindable name:string = null;
    @bindable title:string = null;
    @bindable status:string = null;
    @bindable detail:string = null;
    @bindable image:string = null;
    @bindable tooltip:string = null;
    @bindable size:string = PersonaSize[PersonaSize.reg];
    @bindable darkText:boolean;// = false;
    @bindable selectable:boolean;// = false;
    
    
    darkTextCss:string="lightText" //darkText
    showPresence:boolean = false;
    showTitle:boolean = false;
    showStatus:boolean = false;
    showDetail:boolean = false;
    showImage:boolean = false;
    selectableCss:string = null;
    
    constructor(private element:Element){
        
    }
    sizeChanged(newValue:string){        
        this.showImage =  PersonaSize[newValue] !== PersonaSize.tiny;
        this.showTitle =  !(PersonaSize[newValue] === PersonaSize.tiny || PersonaSize[newValue] === PersonaSize.xs);
        this.showStatus =  PersonaSize[newValue] === PersonaSize.lg || PersonaSize[newValue] === PersonaSize.xl;
        this.showDetail = PersonaSize[newValue] === PersonaSize.xl;
    }
    presenceChanged(newValue:string){
        this.showPresence = PersonaPresence[newValue] !== PersonaPresence.none;// || PersonaPresence[newValue] !== undefined;
    }
    darkTextChanged(newValue:boolean){
        this.darkTextCss = newValue?"darkText":"lightText";
    }
    selectableChanged(newValue:boolean){
        this.selectableCss = newValue?"selectable":"non-selectable";
    }
    
    clickHandler(){
        //this.element.dispatchEvent(new Event('click'));
        console.log("event dispatched");
    }
}

export enum PersonaSize {
    tiny,
    xs,
    sm,
    reg,
    lg,
    xl,    
}
export enum PersonaShape {
    square,
    round,       
}
export enum PersonaPresence {
    none,
    available,
    away,
    blocked,
    busy,
    dnd,
    offline,    
}

