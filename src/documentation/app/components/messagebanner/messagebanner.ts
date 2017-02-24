//import { bindable } from "aurelia-framework";
export class messagebanner {

    showBanner: boolean = false;

    public log(msg: string) {
        console.log(msg);
    }

    public show() {
        this.showBanner = true;
    }
}
