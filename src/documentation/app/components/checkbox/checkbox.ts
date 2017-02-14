//import { bindable } from "aurelia-framework";
export class CheckBox {

    isDisabled: boolean = false;
    checked: boolean = false;

    public log($event, msg: string) {
        console.log(msg);
    }
}
