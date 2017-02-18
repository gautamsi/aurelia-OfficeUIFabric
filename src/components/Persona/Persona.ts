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
    @bindable public primaryText: string = null;
    @bindable public secondaryText: string = null;
    @bindable public tertiaryText: string = null;
    @bindable public optionalText: string = null;
    @bindable public image: string = null;
    @bindable public initials: string = null;
    @bindable public tooltip: string = null;
    @bindable public varient: PersonaVarient = "default";
    @bindable public darkText: boolean; // = false;
    @bindable public selectable: boolean; // = false;

    @bindable public actionClick: Function;
    @bindable public initialsColor: PersonaInitialsColor = "blue";

    private darkTextCss: string = "lightText";
    private showPresence: boolean = false;
    private showImage: boolean = false;
    private selectableCss: string = null;

    private _persona: OfficePersona;
    constructor(private element: Element) {

    }
    __varientChanged(newValue: string) {
        this.showImage = !isNullOrEmptyString(this.image) && newValue !== "tiny";
    }

    imageChanged(newValue: string) {
        // this.showImage = !isNullOrEmptyString(this.image) && newValue !== "tiny";
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
        this._persona = new OfficePersona(this.element);
    }

    public actionIconClick() {
        if (this.actionClick) {
            this.actionClick({ persona: this });
        }
    }
}
