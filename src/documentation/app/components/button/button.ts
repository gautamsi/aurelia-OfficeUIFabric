import { bindable } from "aurelia-framework";
export class Button {

    @bindable public isDisabled: boolean = false;
    public log(msg: string) {
        console.log(msg);
    }
}
