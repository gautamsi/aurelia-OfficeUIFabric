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
export let OfPersona = class {
    constructor(element) {
        this.element = element;
        this.shape = PersonaShape[PersonaShape.round];
        this.bgIcon = "person";
        this.presence = PersonaPresence[PersonaPresence.none];
        this.name = null;
        this.title = null;
        this.status = null;
        this.detail = null;
        this.image = null;
        this.tooltip = null;
        this.size = PersonaSize[PersonaSize.reg];
        this.darkTextCss = "lightText";
        this.showPresence = false;
        this.showTitle = false;
        this.showStatus = false;
        this.showDetail = false;
        this.showImage = false;
        this.selectableCss = null;
    }
    sizeChanged(newValue) {
        this.showImage = PersonaSize[newValue] !== PersonaSize.tiny;
        this.showTitle = !(PersonaSize[newValue] === PersonaSize.tiny || PersonaSize[newValue] === PersonaSize.xs);
        this.showStatus = PersonaSize[newValue] === PersonaSize.lg || PersonaSize[newValue] === PersonaSize.xl;
        this.showDetail = PersonaSize[newValue] === PersonaSize.xl;
    }
    presenceChanged(newValue) {
        this.showPresence = PersonaPresence[newValue] !== PersonaPresence.none;
    }
    darkTextChanged(newValue) {
        this.darkTextCss = newValue ? "darkText" : "lightText";
    }
    selectableChanged(newValue) {
        this.selectableCss = newValue ? "selectable" : "non-selectable";
    }
    clickHandler() {
        console.log("event dispatched");
    }
};
__decorate([
    bindable, 
    __metadata('design:type', String)
], OfPersona.prototype, "shape", void 0);
__decorate([
    bindable, 
    __metadata('design:type', String)
], OfPersona.prototype, "bgIcon", void 0);
__decorate([
    bindable, 
    __metadata('design:type', String)
], OfPersona.prototype, "presence", void 0);
__decorate([
    bindable, 
    __metadata('design:type', String)
], OfPersona.prototype, "name", void 0);
__decorate([
    bindable, 
    __metadata('design:type', String)
], OfPersona.prototype, "title", void 0);
__decorate([
    bindable, 
    __metadata('design:type', String)
], OfPersona.prototype, "status", void 0);
__decorate([
    bindable, 
    __metadata('design:type', String)
], OfPersona.prototype, "detail", void 0);
__decorate([
    bindable, 
    __metadata('design:type', String)
], OfPersona.prototype, "image", void 0);
__decorate([
    bindable, 
    __metadata('design:type', String)
], OfPersona.prototype, "tooltip", void 0);
__decorate([
    bindable, 
    __metadata('design:type', String)
], OfPersona.prototype, "size", void 0);
__decorate([
    bindable, 
    __metadata('design:type', Boolean)
], OfPersona.prototype, "darkText", void 0);
__decorate([
    bindable, 
    __metadata('design:type', Boolean)
], OfPersona.prototype, "selectable", void 0);
OfPersona = __decorate([
    inject(Element),
    customElement('of-persona'), 
    __metadata('design:paramtypes', [Element])
], OfPersona);
export var PersonaSize;
(function (PersonaSize) {
    PersonaSize[PersonaSize["tiny"] = 0] = "tiny";
    PersonaSize[PersonaSize["xs"] = 1] = "xs";
    PersonaSize[PersonaSize["sm"] = 2] = "sm";
    PersonaSize[PersonaSize["reg"] = 3] = "reg";
    PersonaSize[PersonaSize["lg"] = 4] = "lg";
    PersonaSize[PersonaSize["xl"] = 5] = "xl";
})(PersonaSize || (PersonaSize = {}));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlcnNvbmEvb2YtcGVyc29uYS50cyJdLCJuYW1lcyI6WyJPZlBlcnNvbmEiLCJPZlBlcnNvbmEuY29uc3RydWN0b3IiLCJPZlBlcnNvbmEuc2l6ZUNoYW5nZWQiLCJPZlBlcnNvbmEucHJlc2VuY2VDaGFuZ2VkIiwiT2ZQZXJzb25hLmRhcmtUZXh0Q2hhbmdlZCIsIk9mUGVyc29uYS5zZWxlY3RhYmxlQ2hhbmdlZCIsIk9mUGVyc29uYS5jbGlja0hhbmRsZXIiLCJQZXJzb25hU2l6ZSIsIlBlcnNvbmFTaGFwZSIsIlBlcnNvbmFQcmVzZW5jZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O09BQU8sRUFBQyxhQUFhLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBQyxNQUFNLG1CQUFtQjtBQUVqRTtJQXlCSUEsWUFBb0JBLE9BQWVBO1FBQWZDLFlBQU9BLEdBQVBBLE9BQU9BLENBQVFBO1FBdEJ6QkEsVUFBS0EsR0FBV0EsWUFBWUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7UUFDakRBLFdBQU1BLEdBQVVBLFFBQVFBLENBQUNBO1FBQ3pCQSxhQUFRQSxHQUFVQSxlQUFlQSxDQUFDQSxlQUFlQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtRQUN4REEsU0FBSUEsR0FBVUEsSUFBSUEsQ0FBQ0E7UUFDbkJBLFVBQUtBLEdBQVVBLElBQUlBLENBQUNBO1FBQ3BCQSxXQUFNQSxHQUFVQSxJQUFJQSxDQUFDQTtRQUNyQkEsV0FBTUEsR0FBVUEsSUFBSUEsQ0FBQ0E7UUFDckJBLFVBQUtBLEdBQVVBLElBQUlBLENBQUNBO1FBQ3BCQSxZQUFPQSxHQUFVQSxJQUFJQSxDQUFDQTtRQUN0QkEsU0FBSUEsR0FBVUEsV0FBV0EsQ0FBQ0EsV0FBV0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7UUFLckRBLGdCQUFXQSxHQUFRQSxXQUFXQSxDQUFBQTtRQUM5QkEsaUJBQVlBLEdBQVdBLEtBQUtBLENBQUNBO1FBQzdCQSxjQUFTQSxHQUFXQSxLQUFLQSxDQUFDQTtRQUMxQkEsZUFBVUEsR0FBV0EsS0FBS0EsQ0FBQ0E7UUFDM0JBLGVBQVVBLEdBQVdBLEtBQUtBLENBQUNBO1FBQzNCQSxjQUFTQSxHQUFXQSxLQUFLQSxDQUFDQTtRQUMxQkEsa0JBQWFBLEdBQVVBLElBQUlBLENBQUNBO0lBSTVCQSxDQUFDQTtJQUNERCxXQUFXQSxDQUFDQSxRQUFlQTtRQUN2QkUsSUFBSUEsQ0FBQ0EsU0FBU0EsR0FBSUEsV0FBV0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsS0FBS0EsV0FBV0EsQ0FBQ0EsSUFBSUEsQ0FBQ0E7UUFDN0RBLElBQUlBLENBQUNBLFNBQVNBLEdBQUlBLENBQUNBLENBQUNBLFdBQVdBLENBQUNBLFFBQVFBLENBQUNBLEtBQUtBLFdBQVdBLENBQUNBLElBQUlBLElBQUlBLFdBQVdBLENBQUNBLFFBQVFBLENBQUNBLEtBQUtBLFdBQVdBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBO1FBQzVHQSxJQUFJQSxDQUFDQSxVQUFVQSxHQUFJQSxXQUFXQSxDQUFDQSxRQUFRQSxDQUFDQSxLQUFLQSxXQUFXQSxDQUFDQSxFQUFFQSxJQUFJQSxXQUFXQSxDQUFDQSxRQUFRQSxDQUFDQSxLQUFLQSxXQUFXQSxDQUFDQSxFQUFFQSxDQUFDQTtRQUN4R0EsSUFBSUEsQ0FBQ0EsVUFBVUEsR0FBR0EsV0FBV0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsS0FBS0EsV0FBV0EsQ0FBQ0EsRUFBRUEsQ0FBQ0E7SUFDL0RBLENBQUNBO0lBQ0RGLGVBQWVBLENBQUNBLFFBQWVBO1FBQzNCRyxJQUFJQSxDQUFDQSxZQUFZQSxHQUFHQSxlQUFlQSxDQUFDQSxRQUFRQSxDQUFDQSxLQUFLQSxlQUFlQSxDQUFDQSxJQUFJQSxDQUFDQTtJQUMzRUEsQ0FBQ0E7SUFDREgsZUFBZUEsQ0FBQ0EsUUFBZ0JBO1FBQzVCSSxJQUFJQSxDQUFDQSxXQUFXQSxHQUFHQSxRQUFRQSxHQUFDQSxVQUFVQSxHQUFDQSxXQUFXQSxDQUFDQTtJQUN2REEsQ0FBQ0E7SUFDREosaUJBQWlCQSxDQUFDQSxRQUFnQkE7UUFDOUJLLElBQUlBLENBQUNBLGFBQWFBLEdBQUdBLFFBQVFBLEdBQUNBLFlBQVlBLEdBQUNBLGdCQUFnQkEsQ0FBQ0E7SUFDaEVBLENBQUNBO0lBRURMLFlBQVlBO1FBRVJNLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLGtCQUFrQkEsQ0FBQ0EsQ0FBQ0E7SUFDcENBLENBQUNBO0FBQ0xOLENBQUNBO0FBN0NHO0lBQUMsUUFBUTs7R0FBQyw0QkFBSyxVQUE0QztBQUMzRDtJQUFDLFFBQVE7O0dBQUMsNkJBQU0sVUFBbUI7QUFDbkM7SUFBQyxRQUFROztHQUFDLCtCQUFRLFVBQWdEO0FBQ2xFO0lBQUMsUUFBUTs7R0FBQywyQkFBSSxVQUFlO0FBQzdCO0lBQUMsUUFBUTs7R0FBQyw0QkFBSyxVQUFlO0FBQzlCO0lBQUMsUUFBUTs7R0FBQyw2QkFBTSxVQUFlO0FBQy9CO0lBQUMsUUFBUTs7R0FBQyw2QkFBTSxVQUFlO0FBQy9CO0lBQUMsUUFBUTs7R0FBQyw0QkFBSyxVQUFlO0FBQzlCO0lBQUMsUUFBUTs7R0FBQyw4QkFBTyxVQUFlO0FBQ2hDO0lBQUMsUUFBUTs7R0FBQywyQkFBSSxVQUF1QztBQUNyRDtJQUFDLFFBQVE7O0dBQUMsK0JBQVEsVUFBUztBQUMzQjtJQUFDLFFBQVE7O0dBQUMsaUNBQVUsVUFBUztBQWRqQztJQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFDZixhQUFhLENBQUMsWUFBWSxDQUFDOztjQStDM0I7QUFFRCxXQUFZLFdBT1g7QUFQRCxXQUFZLFdBQVc7SUFDbkJPLDZDQUFJQSxDQUFBQTtJQUNKQSx5Q0FBRUEsQ0FBQUE7SUFDRkEseUNBQUVBLENBQUFBO0lBQ0ZBLDJDQUFHQSxDQUFBQTtJQUNIQSx5Q0FBRUEsQ0FBQUE7SUFDRkEseUNBQUVBLENBQUFBO0FBQ05BLENBQUNBLEVBUFcsV0FBVyxLQUFYLFdBQVcsUUFPdEI7QUFDRCxXQUFZLFlBR1g7QUFIRCxXQUFZLFlBQVk7SUFDcEJDLG1EQUFNQSxDQUFBQTtJQUNOQSxpREFBS0EsQ0FBQUE7QUFDVEEsQ0FBQ0EsRUFIVyxZQUFZLEtBQVosWUFBWSxRQUd2QjtBQUNELFdBQVksZUFRWDtBQVJELFdBQVksZUFBZTtJQUN2QkMscURBQUlBLENBQUFBO0lBQ0pBLCtEQUFTQSxDQUFBQTtJQUNUQSxxREFBSUEsQ0FBQUE7SUFDSkEsMkRBQU9BLENBQUFBO0lBQ1BBLHFEQUFJQSxDQUFBQTtJQUNKQSxtREFBR0EsQ0FBQUE7SUFDSEEsMkRBQU9BLENBQUFBO0FBQ1hBLENBQUNBLEVBUlcsZUFBZSxLQUFmLGVBQWUsUUFRMUIiLCJmaWxlIjoicGVyc29uYS9vZi1wZXJzb25hLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjdXN0b21FbGVtZW50LCBiaW5kYWJsZSwgaW5qZWN0fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5cbkBpbmplY3QoRWxlbWVudClcbkBjdXN0b21FbGVtZW50KCdvZi1wZXJzb25hJylcbmV4cG9ydCBjbGFzcyBPZlBlcnNvbmEge1xuICAgIEBiaW5kYWJsZSBzaGFwZTogc3RyaW5nID0gUGVyc29uYVNoYXBlW1BlcnNvbmFTaGFwZS5yb3VuZF07XG4gICAgQGJpbmRhYmxlIGJnSWNvbjpzdHJpbmcgPSBcInBlcnNvblwiO1xuICAgIEBiaW5kYWJsZSBwcmVzZW5jZTpzdHJpbmcgPSBQZXJzb25hUHJlc2VuY2VbUGVyc29uYVByZXNlbmNlLm5vbmVdO1xuICAgIEBiaW5kYWJsZSBuYW1lOnN0cmluZyA9IG51bGw7XG4gICAgQGJpbmRhYmxlIHRpdGxlOnN0cmluZyA9IG51bGw7XG4gICAgQGJpbmRhYmxlIHN0YXR1czpzdHJpbmcgPSBudWxsO1xuICAgIEBiaW5kYWJsZSBkZXRhaWw6c3RyaW5nID0gbnVsbDtcbiAgICBAYmluZGFibGUgaW1hZ2U6c3RyaW5nID0gbnVsbDtcbiAgICBAYmluZGFibGUgdG9vbHRpcDpzdHJpbmcgPSBudWxsO1xuICAgIEBiaW5kYWJsZSBzaXplOnN0cmluZyA9IFBlcnNvbmFTaXplW1BlcnNvbmFTaXplLnJlZ107XG4gICAgQGJpbmRhYmxlIGRhcmtUZXh0OmJvb2xlYW47Ly8gPSBmYWxzZTtcbiAgICBAYmluZGFibGUgc2VsZWN0YWJsZTpib29sZWFuOy8vID0gZmFsc2U7XG4gICAgXG4gICAgXG4gICAgZGFya1RleHRDc3M6c3RyaW5nPVwibGlnaHRUZXh0XCIgLy9kYXJrVGV4dFxuICAgIHNob3dQcmVzZW5jZTpib29sZWFuID0gZmFsc2U7XG4gICAgc2hvd1RpdGxlOmJvb2xlYW4gPSBmYWxzZTtcbiAgICBzaG93U3RhdHVzOmJvb2xlYW4gPSBmYWxzZTtcbiAgICBzaG93RGV0YWlsOmJvb2xlYW4gPSBmYWxzZTtcbiAgICBzaG93SW1hZ2U6Ym9vbGVhbiA9IGZhbHNlO1xuICAgIHNlbGVjdGFibGVDc3M6c3RyaW5nID0gbnVsbDtcbiAgICBcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6RWxlbWVudCl7XG4gICAgICAgIFxuICAgIH1cbiAgICBzaXplQ2hhbmdlZChuZXdWYWx1ZTpzdHJpbmcpeyAgICAgICAgXG4gICAgICAgIHRoaXMuc2hvd0ltYWdlID0gIFBlcnNvbmFTaXplW25ld1ZhbHVlXSAhPT0gUGVyc29uYVNpemUudGlueTtcbiAgICAgICAgdGhpcy5zaG93VGl0bGUgPSAgIShQZXJzb25hU2l6ZVtuZXdWYWx1ZV0gPT09IFBlcnNvbmFTaXplLnRpbnkgfHwgUGVyc29uYVNpemVbbmV3VmFsdWVdID09PSBQZXJzb25hU2l6ZS54cyk7XG4gICAgICAgIHRoaXMuc2hvd1N0YXR1cyA9ICBQZXJzb25hU2l6ZVtuZXdWYWx1ZV0gPT09IFBlcnNvbmFTaXplLmxnIHx8IFBlcnNvbmFTaXplW25ld1ZhbHVlXSA9PT0gUGVyc29uYVNpemUueGw7XG4gICAgICAgIHRoaXMuc2hvd0RldGFpbCA9IFBlcnNvbmFTaXplW25ld1ZhbHVlXSA9PT0gUGVyc29uYVNpemUueGw7XG4gICAgfVxuICAgIHByZXNlbmNlQ2hhbmdlZChuZXdWYWx1ZTpzdHJpbmcpe1xuICAgICAgICB0aGlzLnNob3dQcmVzZW5jZSA9IFBlcnNvbmFQcmVzZW5jZVtuZXdWYWx1ZV0gIT09IFBlcnNvbmFQcmVzZW5jZS5ub25lOy8vIHx8IFBlcnNvbmFQcmVzZW5jZVtuZXdWYWx1ZV0gIT09IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZGFya1RleHRDaGFuZ2VkKG5ld1ZhbHVlOmJvb2xlYW4pe1xuICAgICAgICB0aGlzLmRhcmtUZXh0Q3NzID0gbmV3VmFsdWU/XCJkYXJrVGV4dFwiOlwibGlnaHRUZXh0XCI7XG4gICAgfVxuICAgIHNlbGVjdGFibGVDaGFuZ2VkKG5ld1ZhbHVlOmJvb2xlYW4pe1xuICAgICAgICB0aGlzLnNlbGVjdGFibGVDc3MgPSBuZXdWYWx1ZT9cInNlbGVjdGFibGVcIjpcIm5vbi1zZWxlY3RhYmxlXCI7XG4gICAgfVxuICAgIFxuICAgIGNsaWNrSGFuZGxlcigpe1xuICAgICAgICAvL3RoaXMuZWxlbWVudC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2xpY2snKSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZXZlbnQgZGlzcGF0Y2hlZFwiKTtcbiAgICB9XG59XG5cbmV4cG9ydCBlbnVtIFBlcnNvbmFTaXplIHtcbiAgICB0aW55LFxuICAgIHhzLFxuICAgIHNtLFxuICAgIHJlZyxcbiAgICBsZyxcbiAgICB4bCwgICAgXG59XG5leHBvcnQgZW51bSBQZXJzb25hU2hhcGUge1xuICAgIHNxdWFyZSxcbiAgICByb3VuZCwgICAgICAgXG59XG5leHBvcnQgZW51bSBQZXJzb25hUHJlc2VuY2Uge1xuICAgIG5vbmUsXG4gICAgYXZhaWxhYmxlLFxuICAgIGF3YXksXG4gICAgYmxvY2tlZCxcbiAgICBidXN5LFxuICAgIGRuZCxcbiAgICBvZmZsaW5lLCAgICBcbn1cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
