import { customElement, bindable, inject } from 'aurelia-framework';
import { Personavariant, PersonaPresence, PersonaInitialsColor } from '../Persona/PersonaTypes';

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
    secondaryText: string;
    image?: string;
    initials?: string;
    initialsColor?: PersonaInitialsColor;
    presence: PersonaPresence;
    presenceIcon?: string;
}
