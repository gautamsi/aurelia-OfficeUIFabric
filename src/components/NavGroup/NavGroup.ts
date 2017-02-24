import { INavGroup, INavLink } from "../Nav/INav";
import { customElement, bindable, inject } from "aurelia-framework";

@customElement("fabric-nav-group")
export class NavGroup implements INavGroup {
    /**
     * Text to render as the header of a group
     */
    @bindable
    public name?: string = null;

    /**
     * Links to render within this group
     */
    @bindable
    public links: INavLink[];

    /**
     * truw if this group is expanded
     */
    @bindable
    public isExpanded: boolean;
}
