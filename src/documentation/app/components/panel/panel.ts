export class panel {

    openPanel: boolean = false;
    size: string = "sm";
    direction: string = "right";
    isDisabled: boolean = false;
    isRequired: boolean = false;
    total: number = 100;
    progress: number = 20;
    public log(msg: string) {
        console.log(msg);
    }

    public toggledirection() {
        if (this.direction === "right") {
            this.direction = "left";
        } else {
            this.direction = "right";
        }
    }
    public open(size = "sm") {
        this.size = size;
        this.openPanel = !this.openPanel;
    }
}
