//import { bindable } from "aurelia-framework";
export class CheckBox {

    isDisabled: boolean = false;
    checked: boolean = false;
    textvalue: string;
    description: string = "description";

    public log($event, msg: string) {
        console.log(msg);
    }
}
