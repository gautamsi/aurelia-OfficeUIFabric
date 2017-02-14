import { customElement, bindable, inject } from 'aurelia-framework';
import { ProgressIndicator as FabricProgress } from "./msProgressIndicator";
import { toBool } from "../common/convert";

@inject(Element)
@customElement('fabric-progress')
export class ProgressIndicator {
    @bindable public title: string;
    @bindable public description: string;
    @bindable public total: number = 1;
    @bindable public progress: number = 0;
    @bindable public percent: number = -1;

    @bindable public disabled: boolean;

    private fabricProgress: FabricProgress;

    constructor(private element: Element) {
    }

    progressChanged(value: any) {
        this.progress = Number(value) || 0;
        if (this.progress > this.total) {
            this.progress = this.total;
        }
        if (this.fabricProgress) {
            this.fabricProgress.setProgress(this.progress);
        }
    }
    totalChanged(value: any) {
        this.total = Number(value) || 0;
        if (this.total < this.progress) {
            this.progress = this.total;
        }
        if (this.fabricProgress) {
            this.fabricProgress.setTotal(this.total);
        }
    }
    percentChanged(value: any) {
        this.percent = Number(value) || 0;
        this.percent = this.percent > 1 ? 1 : this.percent;
        if (this.fabricProgress) {
            this.fabricProgress.setProgressPercent(this.percent);
        }
    }

    disabledChanged(value: any) {
        this.disabled = toBool(value);
    }

    attached() {
        this.fabricProgress = new FabricProgress(<HTMLElement>this.element);
        this.fabricProgress.setTotal(this.total);
        this.fabricProgress.setProgress(this.progress);
        if (this.percent >= 0 && this.percent <= 1) {
            this.fabricProgress.setProgressPercent(this.percent);
        }
    }

    detached() {
        this.fabricProgress = null;
    }
}
