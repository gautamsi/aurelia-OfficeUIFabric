import { bindable, customElement } from 'aurelia-framework';

@customElement('fabric-message-bar')
export class MessageBar {
    static defaultIcons = {
        "info": "Info",
        "success": "Completed",
        "error": "ErrorBadge",
        "blocked": "Blocked",
        "warning": "Info",
        "severeWarning": "Warning",
    };
    @bindable public messageText: string = "";
    @bindable public messageIcon: string = null;
    @bindable public linkText: string = "";
    @bindable public linkHref: string = "#";
    @bindable public variant: MessageBarVariants = "info";
    @bindable public linkClick: Function;
    private icon: string = "Info";
    public constructor() {

    }

    attached() {
        this._setIcon();
    }

    variantChanged(newValue) {
        this._setIcon();

    }

    messageIconChanged(newValue) {
        this._setIcon();
    }

    private _setIcon() {
        this.icon = this.messageIcon || MessageBar.defaultIcons[this.variant];
    }

    private _linkClickHandler($event: MouseEvent) {
        if (this.linkClick) {
            this.linkClick();
            return false;
        }
        return true;
    }
}

export type MessageBarVariants = "info" | "success" | "error" | "blocked" | "warning" | "severeWarning";

