//import { bindable } from "aurelia-framework";
export class overlay {

    isDisabled: boolean = false;
    showOverlay: boolean = false;
    variant: string = 'default';
    public log($event, msg: string) {
        console.log(msg);
    }
    public overlay(variant = 'default') {
        this.variant = variant;
        this.showOverlay = true;
    }
}
