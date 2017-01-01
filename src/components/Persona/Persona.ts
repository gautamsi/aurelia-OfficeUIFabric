import { customElement, bindable, inject } from 'aurelia-framework';

@inject(Element)
@customElement('office-persona')
export class Persona {
    @bindable public shape: string = PersonaShape[PersonaShape.round];
    @bindable public bgIcon: string = "person";
    @bindable public presence: string = PersonaPresence[PersonaPresence.none];
    @bindable public name: string = null;
    @bindable public title: string = null;
    @bindable public status: string = null;
    @bindable public detail: string = null;
    @bindable public image: string = null;
    @bindable public tooltip: string = null;
    @bindable public size: string = PersonaSize[PersonaSize.reg];
    @bindable public darkText: boolean;// = false;
    @bindable public selectable: boolean;// = false;

    private ele: Element;

    private darkTextCss: string = "lightText" //darkText
    private showPresence: boolean = false;
    private showTitle: boolean = false;
    private showStatus: boolean = false;
    private showDetail: boolean = false;
    private showImage: boolean = false;
    private selectableCss: string = null;

    // constructor(private element:Element){

    // }
    sizeChanged(newValue: string) {
        this.showImage = PersonaSize[newValue] !== PersonaSize.tiny;
        this.showTitle = !(PersonaSize[newValue] === PersonaSize.tiny || PersonaSize[newValue] === PersonaSize.xs);
        this.showStatus = PersonaSize[newValue] === PersonaSize.lg || PersonaSize[newValue] === PersonaSize.xl;
        this.showDetail = PersonaSize[newValue] === PersonaSize.xl;
    }
    presenceChanged(newValue: string) {
        this.showPresence = PersonaPresence[newValue] !== PersonaPresence.none;// || PersonaPresence[newValue] !== undefined;
    }
    darkTextChanged(newValue: boolean) {
        this.darkTextCss = newValue ? "darkText" : "lightText";
    }
    selectableChanged(newValue: boolean) {
        this.selectableCss = newValue ? "selectable" : "non-selectable";
    }

    attached() {
        //this.element.dispatchEvent(new Event('click'));
        console.log("attached");
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

