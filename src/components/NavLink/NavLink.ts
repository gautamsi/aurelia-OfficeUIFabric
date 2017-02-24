import { INavLink } from "../Nav/INav";
import { customElement, bindable, inject } from "aurelia-framework";

@customElement("fabric-nav-link")
export class NavGroup implements INavLink {

    @bindable
    public name: string;

    @bindable
    public url: string;

    @bindable
    public links?: INavLink[];

    @bindable
    public onClick?: (item: INavLink) => void;

    @bindable
    public icon?: string;

    @bindable
    public iconClassName?: string;

    @bindable
    public isExpanded?: boolean;

    @bindable
    public isSelected?: boolean;

    @bindable
    public title?: string;

    [propertyName: string]: any;
}
