export class toggle {

    isDisabled: boolean = false;
    checked: boolean = false;
    textvalue: string;
    description: string = "Let apps use my location";

    public log($event, msg: string) {
        console.log(msg);
    }
}
