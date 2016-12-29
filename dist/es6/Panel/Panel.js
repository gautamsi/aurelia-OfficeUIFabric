var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { customElement, bindable, inject } from 'aurelia-framework';
export let Panel = class {
    constructor() {
        this.headerText = null;
        this.tooltip = null;
        this.size = PanelSize[PanelSize.small];
        this.open = false;
        this.closing = false;
        this.opening = false;
        this.isOpen = false;
    }
    openPanel() {
        this.isOpen = true;
        this.opening = true;
    }
    attached() {
        Panel.prefixedEvent(this.$panelMain, 'AnimationEnd', (event) => {
            if (event.animationName.indexOf('Out') > -1) {
                this.isOpen = false;
                this.closing = false;
                this.opening = false;
                this.open = false;
            }
        });
    }
    closeHandler() {
        this.closing = true;
    }
    openChanged(newValue) {
        if (newValue == true) {
            this.openPanel();
        }
    }
    static prefixedEvent(element, type, callback) {
        for (var p = 0; p < this.pfx.length; p++) {
            if (!this.pfx[p])
                type = type.toLowerCase();
            element.addEventListener(this.pfx[p] + type, callback, false);
        }
    }
};
Panel.pfx = ["webkit", "moz", "MS", "o", ""];
__decorate([
    bindable, 
    __metadata('design:type', String)
], Panel.prototype, "headerText", void 0);
__decorate([
    bindable, 
    __metadata('design:type', String)
], Panel.prototype, "tooltip", void 0);
__decorate([
    bindable, 
    __metadata('design:type', String)
], Panel.prototype, "size", void 0);
__decorate([
    bindable, 
    __metadata('design:type', Boolean)
], Panel.prototype, "open", void 0);
Panel = __decorate([
    inject(Element),
    customElement('office-panel'), 
    __metadata('design:paramtypes', [])
], Panel);
export var PanelSize;
(function (PanelSize) {
    PanelSize[PanelSize["small"] = 0] = "small";
    PanelSize[PanelSize["medium"] = 1] = "medium";
    PanelSize[PanelSize["large"] = 2] = "large";
    PanelSize[PanelSize["extraLarge"] = 3] = "extraLarge";
})(PanelSize || (PanelSize = {}));
export var PersonaShape;
(function (PersonaShape) {
    PersonaShape[PersonaShape["square"] = 0] = "square";
    PersonaShape[PersonaShape["round"] = 1] = "round";
})(PersonaShape || (PersonaShape = {}));
export var PersonaPresence;
(function (PersonaPresence) {
    PersonaPresence[PersonaPresence["none"] = 0] = "none";
    PersonaPresence[PersonaPresence["available"] = 1] = "available";
    PersonaPresence[PersonaPresence["away"] = 2] = "away";
    PersonaPresence[PersonaPresence["blocked"] = 3] = "blocked";
    PersonaPresence[PersonaPresence["busy"] = 4] = "busy";
    PersonaPresence[PersonaPresence["dnd"] = 5] = "dnd";
    PersonaPresence[PersonaPresence["offline"] = 6] = "offline";
})(PersonaPresence || (PersonaPresence = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlBhbmVsL1BhbmVsLnRzIl0sIm5hbWVzIjpbIlBhbmVsIiwiUGFuZWwuY29uc3RydWN0b3IiLCJQYW5lbC5vcGVuUGFuZWwiLCJQYW5lbC5hdHRhY2hlZCIsIlBhbmVsLmNsb3NlSGFuZGxlciIsIlBhbmVsLm9wZW5DaGFuZ2VkIiwiUGFuZWwucHJlZml4ZWRFdmVudCIsIlBhbmVsU2l6ZSIsIlBlcnNvbmFTaGFwZSIsIlBlcnNvbmFQcmVzZW5jZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O09BQU8sRUFBQyxhQUFhLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLG1CQUFtQjtBQUVsRTtJQUFBQTtRQUdjQyxlQUFVQSxHQUFXQSxJQUFJQSxDQUFDQTtRQUMxQkEsWUFBT0EsR0FBV0EsSUFBSUEsQ0FBQ0E7UUFDdkJBLFNBQUlBLEdBQVdBLFNBQVNBLENBQUNBLFNBQVNBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBO1FBQzFDQSxTQUFJQSxHQUFZQSxLQUFLQSxDQUFDQTtRQUloQ0EsWUFBT0EsR0FBWUEsS0FBS0EsQ0FBQ0E7UUFDekJBLFlBQU9BLEdBQVlBLEtBQUtBLENBQUNBO1FBQ3pCQSxXQUFNQSxHQUFZQSxLQUFLQSxDQUFDQTtJQTRDNUJBLENBQUNBO0lBMUNHRCxTQUFTQTtRQUVMRSxJQUFJQSxDQUFDQSxNQUFNQSxHQUFHQSxJQUFJQSxDQUFDQTtRQUduQkEsSUFBSUEsQ0FBQ0EsT0FBT0EsR0FBR0EsSUFBSUEsQ0FBQ0E7SUFDeEJBLENBQUNBO0lBRURGLFFBQVFBO1FBRUpHLEtBQUtBLENBQUNBLGFBQWFBLENBQUNBLElBQUlBLENBQUNBLFVBQVVBLEVBQUVBLGNBQWNBLEVBQUVBLENBQUNBLEtBQUtBO1lBQ3ZEQSxFQUFFQSxDQUFDQSxDQUFDQSxLQUFLQSxDQUFDQSxhQUFhQSxDQUFDQSxPQUFPQSxDQUFDQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFJMUNBLElBQUlBLENBQUNBLE1BQU1BLEdBQUdBLEtBQUtBLENBQUNBO2dCQUlwQkEsSUFBSUEsQ0FBQ0EsT0FBT0EsR0FBR0EsS0FBS0EsQ0FBQ0E7Z0JBQ3JCQSxJQUFJQSxDQUFDQSxPQUFPQSxHQUFHQSxLQUFLQSxDQUFDQTtnQkFDckJBLElBQUlBLENBQUNBLElBQUlBLEdBQUdBLEtBQUtBLENBQUNBO1lBQ3RCQSxDQUFDQTtRQUNMQSxDQUFDQSxDQUFDQSxDQUFDQTtJQUNQQSxDQUFDQTtJQUVESCxZQUFZQTtRQUNSSSxJQUFJQSxDQUFDQSxPQUFPQSxHQUFHQSxJQUFJQSxDQUFDQTtJQUN4QkEsQ0FBQ0E7SUFDREosV0FBV0EsQ0FBQ0EsUUFBaUJBO1FBQ3pCSyxFQUFFQSxDQUFDQSxDQUFDQSxRQUFRQSxJQUFJQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNuQkEsSUFBSUEsQ0FBQ0EsU0FBU0EsRUFBRUEsQ0FBQUE7UUFDcEJBLENBQUNBO0lBQ0xBLENBQUNBO0lBR0RMLE9BQU9BLGFBQWFBLENBQUNBLE9BQWdCQSxFQUFFQSxJQUFZQSxFQUFFQSxRQUF5Q0E7UUFDMUZNLEdBQUdBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLEVBQUVBLENBQUNBLEdBQUdBLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLE1BQU1BLEVBQUVBLENBQUNBLEVBQUVBLEVBQUVBLENBQUNBO1lBQ3ZDQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFBQ0EsSUFBSUEsR0FBR0EsSUFBSUEsQ0FBQ0EsV0FBV0EsRUFBRUEsQ0FBQ0E7WUFDNUNBLE9BQU9BLENBQUNBLGdCQUFnQkEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsSUFBSUEsRUFBRUEsUUFBUUEsRUFBRUEsS0FBS0EsQ0FBQ0EsQ0FBQ0E7UUFDbEVBLENBQUNBO0lBQ0xBLENBQUNBO0FBQ0xOLENBQUNBO0FBUlUsU0FBRyxHQUFhLENBQUMsUUFBUSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBN0N4RDtJQUFDLFFBQVE7O0dBQUMsNkJBQVUsVUFBZ0I7QUFDcEM7SUFBQyxRQUFROztHQUFDLDBCQUFPLFVBQWdCO0FBQ2pDO0lBQUMsUUFBUTs7R0FBQyx1QkFBSSxVQUFzQztBQUNwRDtJQUFDLFFBQVE7O0dBQUMsdUJBQUksVUFBa0I7QUFOcEM7SUFBQyxNQUFNLENBQUMsT0FBTyxDQUFDO0lBQ2YsYUFBYSxDQUFDLGNBQWMsQ0FBQzs7VUF1RDdCO0FBRUQsV0FBWSxTQUtYO0FBTEQsV0FBWSxTQUFTO0lBQ2pCTywyQ0FBS0EsQ0FBQUE7SUFDTEEsNkNBQU1BLENBQUFBO0lBQ05BLDJDQUFLQSxDQUFBQTtJQUNMQSxxREFBVUEsQ0FBQUE7QUFDZEEsQ0FBQ0EsRUFMVyxTQUFTLEtBQVQsU0FBUyxRQUtwQjtBQUNELFdBQVksWUFHWDtBQUhELFdBQVksWUFBWTtJQUNwQkMsbURBQU1BLENBQUFBO0lBQ05BLGlEQUFLQSxDQUFBQTtBQUNUQSxDQUFDQSxFQUhXLFlBQVksS0FBWixZQUFZLFFBR3ZCO0FBQ0QsV0FBWSxlQVFYO0FBUkQsV0FBWSxlQUFlO0lBQ3ZCQyxxREFBSUEsQ0FBQUE7SUFDSkEsK0RBQVNBLENBQUFBO0lBQ1RBLHFEQUFJQSxDQUFBQTtJQUNKQSwyREFBT0EsQ0FBQUE7SUFDUEEscURBQUlBLENBQUFBO0lBQ0pBLG1EQUFHQSxDQUFBQTtJQUNIQSwyREFBT0EsQ0FBQUE7QUFDWEEsQ0FBQ0EsRUFSVyxlQUFlLEtBQWYsZUFBZSxRQVExQiIsImZpbGUiOiJQYW5lbC9QYW5lbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3VzdG9tRWxlbWVudCwgYmluZGFibGUsIGluamVjdCB9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuXHJcbkBpbmplY3QoRWxlbWVudClcclxuQGN1c3RvbUVsZW1lbnQoJ29mZmljZS1wYW5lbCcpXHJcbmV4cG9ydCBjbGFzcyBQYW5lbCB7XHJcbiAgICBAYmluZGFibGUgaGVhZGVyVGV4dDogc3RyaW5nID0gbnVsbDtcclxuICAgIEBiaW5kYWJsZSB0b29sdGlwOiBzdHJpbmcgPSBudWxsO1xyXG4gICAgQGJpbmRhYmxlIHNpemU6IHN0cmluZyA9IFBhbmVsU2l6ZVtQYW5lbFNpemUuc21hbGxdO1xyXG4gICAgQGJpbmRhYmxlIG9wZW46IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICAkY2xvc2VPdmVybGF5OiBFbGVtZW50O1xyXG4gICAgJHBhbmVsTWFpbjogRWxlbWVudDtcclxuICAgIGNsb3Npbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIG9wZW5pbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIGlzT3BlbjogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIG9wZW5QYW5lbCgpIHtcclxuICAgICAgICAvLyBEaXNwbGF5IFBhbmVsIGZpcnN0LCB0byBhbGxvdyBhbmltYXRpb25zXHJcbiAgICAgICAgdGhpcy5pc09wZW4gPSB0cnVlOyAvLyRwYW5lbC5hZGRDbGFzcyhcImlzLW9wZW5cIik7XHJcblxyXG4gICAgICAgIC8vIEFkZCBhbmltYXRpb24gY2xhc3NcclxuICAgICAgICB0aGlzLm9wZW5pbmcgPSB0cnVlOyAvLyRwYW5lbC5hZGRDbGFzcyhcIm1zLVBhbmVsLWFuaW1hdGVJblwiKTtcclxuICAgIH1cclxuXHJcbiAgICBhdHRhY2hlZCgpIHtcclxuICAgICAgICAvL3RoaXMuZWxlbWVudC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2xpY2snKSk7XHJcbiAgICAgICAgUGFuZWwucHJlZml4ZWRFdmVudCh0aGlzLiRwYW5lbE1haW4sICdBbmltYXRpb25FbmQnLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgaWYgKGV2ZW50LmFuaW1hdGlvbk5hbWUuaW5kZXhPZignT3V0JykgPiAtMSkge1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIEhpZGUgYW5kIFByZXZlbnQgbXMtUGFuZWwtbWFpbiBmcm9tIGJlaW5nIGludGVyYWN0aXZlXHJcbiAgICAgICAgICAgICAgICAvLyRwYW5lbC5yZW1vdmVDbGFzcygnaXMtb3BlbicpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc09wZW4gPSBmYWxzZTsgXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gUmVtb3ZlIGFuaW1hdGluZyBjbGFzc2VzIGZvciB0aGUgbmV4dCB0aW1lIHdlIG9wZW4gcGFuZWxcclxuICAgICAgICAgICAgICAgIC8vJHBhbmVsLnJlbW92ZUNsYXNzKCdtcy1QYW5lbC1hbmltYXRlSW4gbXMtUGFuZWwtYW5pbWF0ZU91dCcpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9wZW5pbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMub3BlbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2VIYW5kbGVyKCkge1xyXG4gICAgICAgIHRoaXMuY2xvc2luZyA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBvcGVuQ2hhbmdlZChuZXdWYWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIGlmIChuZXdWYWx1ZSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMub3BlblBhbmVsKClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgcGZ4OiBzdHJpbmdbXSA9IFtcIndlYmtpdFwiLCBcIm1velwiLCBcIk1TXCIsIFwib1wiLCBcIlwiXTtcclxuICAgIC8vIFByZWZpeCBmdW5jdGlvblxyXG4gICAgc3RhdGljIHByZWZpeGVkRXZlbnQoZWxlbWVudDogRWxlbWVudCwgdHlwZTogc3RyaW5nLCBjYWxsYmFjazogKGV2ZW50OiBBbmltYXRpb25FdmVudCkgPT4gdm9pZCkge1xyXG4gICAgICAgIGZvciAodmFyIHAgPSAwOyBwIDwgdGhpcy5wZngubGVuZ3RoOyBwKyspIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLnBmeFtwXSkgdHlwZSA9IHR5cGUudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHRoaXMucGZ4W3BdICsgdHlwZSwgY2FsbGJhY2ssIGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFBhbmVsU2l6ZSB7XHJcbiAgICBzbWFsbCxcclxuICAgIG1lZGl1bSxcclxuICAgIGxhcmdlLFxyXG4gICAgZXh0cmFMYXJnZVxyXG59XHJcbmV4cG9ydCBlbnVtIFBlcnNvbmFTaGFwZSB7XHJcbiAgICBzcXVhcmUsXHJcbiAgICByb3VuZCxcclxufVxyXG5leHBvcnQgZW51bSBQZXJzb25hUHJlc2VuY2Uge1xyXG4gICAgbm9uZSxcclxuICAgIGF2YWlsYWJsZSxcclxuICAgIGF3YXksXHJcbiAgICBibG9ja2VkLFxyXG4gICAgYnVzeSxcclxuICAgIGRuZCxcclxuICAgIG9mZmxpbmUsXHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
