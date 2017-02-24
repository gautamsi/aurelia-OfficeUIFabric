import { bindable, customElement, inject } from 'aurelia-framework';
import { toBool } from '../../utilities/convert';
import { CommandButton as FabricCommandButton } from './msCommandButton';

@inject(Element)
@customElement('fabric-command-button')
export class CommandButton {
    @bindable public variant: CommandButtonVariants = "default";
    @bindable public disabled: boolean;
    @bindable public label: string;
    @bindable public icon: string = "CircleRing";
    @bindable public iconColor: string = "themePrimary";
    @bindable public dropdown: boolean = false;
    @bindable public dropdownIcon: string = "ChevronDown";
    @bindable public splitIcon: string = "ChevronDown";
    @bindable public split: boolean = false;
    @bindable public customClass: string = "";
    @bindable public state: string = "";
    @bindable public click: Function;

    private isDisabled: boolean = false;
    private commandDiv: HTMLElement;
    private _cmdButton: FabricCommandButton;
    public constructor(private element: Element) {

    }

    attached() {
        this._cmdButton = new FabricCommandButton(this.commandDiv, null, !(toBool(this.dropdown) || toBool(this.split)));
    }
    public disabledChanged(newValue) {
        this.isDisabled = toBool(newValue);
    }

    private _buttonClickedHandler() {
        if (this.click && !this.dropdown) {
            this.click();
        }
    }
}


export type CommandButtonVariants = "default" | "noLabel" | "inline" | "actionButton" | "pivot" | "TextOnly";
