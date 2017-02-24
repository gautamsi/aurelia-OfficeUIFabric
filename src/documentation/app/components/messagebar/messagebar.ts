//import { bindable } from "aurelia-framework";
export class messagebar {

    icon: string = '';
    icon2: string = "Home";

    public log(msg: string) {
        console.log(msg);
    }

    public toggleIcon() {
        this.icon = this.icon === '' ? this.icon2 || "Home" : '';
    }
}
