import { bindable } from "aurelia-framework";
export class Label {

    @bindable public isDisabled: boolean = false;
    @bindable public isRequired: boolean = false;

    public log(msg: string) {
        console.log(msg);
    }
}
