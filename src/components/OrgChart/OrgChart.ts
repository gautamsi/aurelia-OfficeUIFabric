import { customElement, bindable, inject } from 'aurelia-framework';
import { PersonaVarient, PersonaPresence, PersonaInitialsColor } from '../Persona/PersonaTypes';

@customElement('fabric-org-chart')
export class OrgChart {
    @bindable public groups: IOrgChartGroup[] = [];
    @bindable public personaClick: Function;
    public btnClick(persona: IPersona) {
        if (this.personaClick) {
            this.personaClick({ persona: persona });
        }
    }
}

export interface IOrgChartGroup {
    title?: string;
    personas: IPersona[];
}

export interface IPersona {
    primaryText: string;

    image?: string;

    initials?: string;

    initialsColor?: PersonaInitialsColor;
    secondaryText: string;
    presence: PersonaPresence;
    presenceIcon?: string;
}
