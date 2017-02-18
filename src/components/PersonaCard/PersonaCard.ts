import { customElement, bindable, inject } from 'aurelia-framework';
import { PersonaCard as OfficePersonaCard } from './msPersonaCard';
import { IOrgChartGroup, IPersona } from '../OrgChart/OrgChart';

@inject(Element)
@customElement('fabric-persona-card')
export class PersonaCard implements IPersonaCard {

    @bindable orgChartGroups: IOrgChartGroup[];
    @bindable persona: IPersonaCardPersona;
    @bindable emails: IPersonaCardPersonalWorkStrings;
    @bindable phones: IPersonaCardPersonalWorkStrings;
    @bindable orgChartPersonaClick: Function;

    _persona: OfficePersonaCard;
    constructor(private element: Element) {

    }

    attached() {
        this._persona = new OfficePersonaCard(this.element);
    }
    personaClick(persona: IPersona) {
        if (this.orgChartPersonaClick) {
            this.orgChartPersonaClick({ persona: persona });
        }
    }
}

export interface IPersonaCard {
    orgChartGroups: IOrgChartGroup[];
    persona: IPersonaCardPersona;
    emails: IPersonaCardPersonalWorkStrings;
    phones: IPersonaCardPersonalWorkStrings;
    orgChartPersonaClick: Function;
}
export interface IPersonaCardPersona extends IPersona {
    tertiatyText: string;
    optionalText?: string;

}

export interface IPersonaCardPersonalWorkStrings {
    personal?: string;
    work?: string;
}
