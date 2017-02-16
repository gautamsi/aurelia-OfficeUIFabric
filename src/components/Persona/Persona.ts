import { customElement, bindable, inject } from 'aurelia-framework';
import { PersonaPresence, PersonaInitialsColor, PersonaVarient } from './PersonaTypes';
import { isNullOrEmptyString, toBool } from '../../utilities/convert';
import { Persona as OfficePersona } from './msPersona';

@inject(Element)
@customElement('fabric-persona')
export class Persona {

    @bindable public actionIcon: string = null;
    @bindable public presenceIcon: string = null;
    @bindable public presence: PersonaPresence = "none";
    @bindable public name: string = null;
    @bindable public title: string = null;
    @bindable public status: string = null;
    @bindable public detail: string = null;
    @bindable public image: string = null;
    @bindable public initials: string = null;
    @bindable public tooltip: string = null;
    @bindable public varient: PersonaVarient = "reg";
    @bindable public darkText: boolean; // = false;
    @bindable public selectable: boolean; // = false;

    @bindable public action: Function;
    @bindable public initialsColor: PersonaInitialsColor = "blue";

    private darkTextCss: string = "lightText";
    private showPresence: boolean = false;
    private showTitle: boolean = false;
    private showStatus: boolean = false;
    private showDetail: boolean = false;
    private showImage: boolean = false;
    private selectableCss: string = null;

    private _persona: OfficePersona;
    constructor(private element: Element) {
        this._persona = new OfficePersona(element);
    }
    varientChanged(newValue: string) {
        this.showImage = !isNullOrEmptyString(this.image) && newValue !== "tiny";
        // this.showTitle = !(newValue === "tiny" || newValue === "xs");
        // this.showStatus = newValue === "lg" || newValue === "xl";
        // this.showDetail = newValue === "xl";
    }

    imageChanged(newValue: string) {
        this.showImage = !isNullOrEmptyString(this.image) && newValue !== "tiny";
    }
    presenceChanged(newValue: string) {
        this.showPresence = newValue && newValue !== "none";
    }
    darkTextChanged(newValue: boolean) {
        this.darkTextCss = toBool(newValue) ? "darkText" : "lightText";
    }
    selectableChanged(newValue: boolean) {
        this.selectableCss = toBool(newValue) ? "selectable" : "unselectable";
    }

    attached() {
        this.showImage = !isNullOrEmptyString(this.image) && this.varient !== "tiny";
    }

    public actionClick() {
        if (this.action) {
            this.action();
        }
    }
}
