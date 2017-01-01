import { INav, INavGroup } from "./INav";
import { customElement, inject } from "aurelia-framework";

@customElement("fabric-nav")
export class Nav implements INav {
    public groups: INavGroup[];
    public cosntructor() {
        let x = null;
    }
}
