export class Progress {

    isDisabled: boolean = false;
    total: number = 100;
    progress: number = 20;

    public log(msg: string) {
        console.log(msg);
    }

    public start() {
        let timer = setInterval(() => {
            this.progress += 1;
            if (this.progress >= this.total) {
                clearInterval(timer);
                this.progress = 10;
            }
        }, 100);
    }
}
