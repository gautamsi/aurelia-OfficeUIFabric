import { customAttribute, inject } from 'aurelia-framework';

@inject(Element)
@customAttribute('fabric-link')
export class FabricLink {

    static cssClassName: string = "ms-Link";
    constructor(private element: Element) {
        if (element && !this.element.classList.contains(FabricLink.cssClassName)) {
            this.element.classList.add(FabricLink.cssClassName);
        }
    }
}
