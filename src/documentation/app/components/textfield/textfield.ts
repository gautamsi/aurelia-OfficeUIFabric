//import { bindable } from "aurelia-framework";
export class CheckBox {

    isDisabled: boolean = false;
    checked: boolean = false;
    textvalue: string;
    description: string = "Some Description";

    public log($event, msg: string) {
        console.log(msg);
    }

    public toggleDescription() {
        this.description = this.description === '' ? "Some Description" : '';
    }
}
