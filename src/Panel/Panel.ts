import {customElement, bindable, inject } from 'aurelia-framework';

@inject(Element)
@customElement('office-panel')
export class Panel {
    @bindable headerText: string = null;
    @bindable tooltip: string = null;
    @bindable size: string = PanelSize[PanelSize.small];
    @bindable open: boolean = false;

    $closeOverlay: Element;
    $panelMain: Element;
    closing: boolean = false;
    opening: boolean = false;
    isOpen: boolean = false;

    openPanel() {
        // Display Panel first, to allow animations
        this.isOpen = true; //$panel.addClass("is-open");

        // Add animation class
        this.opening = true; //$panel.addClass("ms-Panel-animateIn");
    }

    attached() {
        //this.element.dispatchEvent(new Event('click'));
        Panel.prefixedEvent(this.$panelMain, 'AnimationEnd', (event) => {
            if (event.animationName.indexOf('Out') > -1) {

                // Hide and Prevent ms-Panel-main from being interactive
                //$panel.removeClass('is-open');
                this.isOpen = false; 

                // Remove animating classes for the next time we open panel
                //$panel.removeClass('ms-Panel-animateIn ms-Panel-animateOut');
                this.closing = false;
                this.opening = false;
                this.open = false;
            }
        });
    }

    closeHandler() {
        this.closing = true;
    }
    openChanged(newValue: boolean) {
        if (newValue == true) {
            this.openPanel()
        }
    }
    static pfx: string[] = ["webkit", "moz", "MS", "o", ""];
    // Prefix function
    static prefixedEvent(element: Element, type: string, callback: (event: AnimationEvent) => void) {
        for (var p = 0; p < this.pfx.length; p++) {
            if (!this.pfx[p]) type = type.toLowerCase();
            element.addEventListener(this.pfx[p] + type, callback, false);
        }
    }
}

export enum PanelSize {
    small,
    medium,
    large,
    extraLarge
}
export enum PersonaShape {
    square,
    round,
}
export enum PersonaPresence {
    none,
    available,
    away,
    blocked,
    busy,
    dnd,
    offline,
}

