import { customElement, bindable, inject } from 'aurelia-framework';

@inject(Element)
@customElement('fabric-face-pile')
export class FacePile {

    @bindable public addIcon: string = "AddFriend";
    @bindable public overflowText: string = null;

    @bindable public addButtonClick: Function;

    constructor(private element: Element) {

    }

    public addPersonClick() {
        if (this.addButtonClick) {
            this.addButtonClick();
        }
    }
}
