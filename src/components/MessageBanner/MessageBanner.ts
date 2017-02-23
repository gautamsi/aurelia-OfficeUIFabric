import { customElement, bindable, bindingMode } from 'aurelia-framework';
import { MessageBanner as FabricMessageBanner } from './msMessageBanner';
import { toBool } from '../../utilities/convert';

@customElement('fabric-message-banner')
export class MessageBanner {

    @bindable public message: string = '';
    @bindable public buttonText: string = '';

    @bindable public buttonClick: Function;
    @bindable({ defaultBindingMode: bindingMode.twoWay }) public showBanner: boolean = false;
    // @bindable({ defaultBindingMode: bindingMode.oneTime }) public hideInitially: false;
    private _show: boolean = false;
    private bannerDiv: Element;

    private _banner: FabricMessageBanner;
    constructor() {

    }

    attached() {

        if (this.bannerDiv) {
            this._banner = new FabricMessageBanner(<HTMLElement>this.bannerDiv);
        }

    }

    showBannerChanged(value: boolean) {
        this._show = toBool(value);
        if (this._show) {
            if (this._banner) {
                this._banner.showBanner();
            }
        }
    }

    private _buttonClickHandler($event: MouseEvent) {
        if (this.buttonClick) {
            this.buttonClick();
        }
    }

    private _closeHandler() {
        this.showBanner = false;
    }
}
