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
export let OfficeListItem = class {
    constructor(element) {
        this.element = element;
        this.type = ListItemType[ListItemType.default];
        this.documentIcon = "documentPDF";
        this.primaryText = null;
        this.secondaryText = null;
        this.tertiaryText = null;
        this.metaText = null;
        this.image = null;
        this.imagealt = null;
        this.tooltip = null;
        this.darkTextCss = "lightText";
        this.showPresence = false;
        this.showTitle = false;
        this.showStatus = false;
        this.showDetail = false;
        this.showImage = false;
        this.selectableCss = null;
    }
    clickHandler() {
        console.log("clicked toggler");
    }
    attached() {
    }
};
__decorate([
    bindable, 
    __metadata('design:type', String)
], OfficeListItem.prototype, "type", void 0);
__decorate([
    bindable, 
    __metadata('design:type', String)
], OfficeListItem.prototype, "documentIcon", void 0);
__decorate([
    bindable, 
    __metadata('design:type', String)
], OfficeListItem.prototype, "primaryText", void 0);
__decorate([
    bindable, 
    __metadata('design:type', String)
], OfficeListItem.prototype, "secondaryText", void 0);
__decorate([
    bindable, 
    __metadata('design:type', String)
], OfficeListItem.prototype, "tertiaryText", void 0);
__decorate([
    bindable, 
    __metadata('design:type', String)
], OfficeListItem.prototype, "metaText", void 0);
__decorate([
    bindable, 
    __metadata('design:type', String)
], OfficeListItem.prototype, "image", void 0);
__decorate([
    bindable, 
    __metadata('design:type', String)
], OfficeListItem.prototype, "imagealt", void 0);
__decorate([
    bindable, 
    __metadata('design:type', String)
], OfficeListItem.prototype, "tooltip", void 0);
__decorate([
    bindable, 
    __metadata('design:type', Boolean)
], OfficeListItem.prototype, "isSelected", void 0);
__decorate([
    bindable, 
    __metadata('design:type', Boolean)
], OfficeListItem.prototype, "selectable", void 0);
__decorate([
    bindable, 
    __metadata('design:type', Boolean)
], OfficeListItem.prototype, "hasImage", void 0);
__decorate([
    bindable, 
    __metadata('design:type', Boolean)
], OfficeListItem.prototype, "isUnseen", void 0);
__decorate([
    bindable, 
    __metadata('design:type', Boolean)
], OfficeListItem.prototype, "isUnread", void 0);
OfficeListItem = __decorate([
    inject(Element),
    customElement('office-listitem'), 
    __metadata('design:paramtypes', [Element])
], OfficeListItem);
export var ListItemType;
(function (ListItemType) {
    ListItemType[ListItemType["default"] = 0] = "default";
    ListItemType[ListItemType["document"] = 1] = "document";
})(ListItemType || (ListItemType = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkxpc3RJdGVtL0xpc3RJdGVtLnRzIl0sIm5hbWVzIjpbIk9mZmljZUxpc3RJdGVtIiwiT2ZmaWNlTGlzdEl0ZW0uY29uc3RydWN0b3IiLCJPZmZpY2VMaXN0SXRlbS5jbGlja0hhbmRsZXIiLCJPZmZpY2VMaXN0SXRlbS5hdHRhY2hlZCIsIkxpc3RJdGVtVHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O09BQU8sRUFBQyxhQUFhLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBQyxNQUFNLG1CQUFtQjtBQUVqRTtJQTBCSUEsWUFBb0JBLE9BQWVBO1FBQWZDLFlBQU9BLEdBQVBBLE9BQU9BLENBQVFBO1FBdkJ6QkEsU0FBSUEsR0FBV0EsWUFBWUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0E7UUFDbERBLGlCQUFZQSxHQUFVQSxhQUFhQSxDQUFDQTtRQUNwQ0EsZ0JBQVdBLEdBQVVBLElBQUlBLENBQUNBO1FBQzFCQSxrQkFBYUEsR0FBVUEsSUFBSUEsQ0FBQ0E7UUFDNUJBLGlCQUFZQSxHQUFVQSxJQUFJQSxDQUFDQTtRQUMzQkEsYUFBUUEsR0FBVUEsSUFBSUEsQ0FBQ0E7UUFDdkJBLFVBQUtBLEdBQVVBLElBQUlBLENBQUNBO1FBQ3BCQSxhQUFRQSxHQUFVQSxJQUFJQSxDQUFDQTtRQUN2QkEsWUFBT0EsR0FBVUEsSUFBSUEsQ0FBQ0E7UUFPaENBLGdCQUFXQSxHQUFRQSxXQUFXQSxDQUFBQTtRQUM5QkEsaUJBQVlBLEdBQVdBLEtBQUtBLENBQUNBO1FBQzdCQSxjQUFTQSxHQUFXQSxLQUFLQSxDQUFDQTtRQUMxQkEsZUFBVUEsR0FBV0EsS0FBS0EsQ0FBQ0E7UUFDM0JBLGVBQVVBLEdBQVdBLEtBQUtBLENBQUNBO1FBQzNCQSxjQUFTQSxHQUFXQSxLQUFLQSxDQUFDQTtRQUMxQkEsa0JBQWFBLEdBQVVBLElBQUlBLENBQUNBO0lBSTVCQSxDQUFDQTtJQUdERCxZQUFZQTtRQUVSRSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxpQkFBaUJBLENBQUNBLENBQUNBO0lBQ25DQSxDQUFDQTtJQUNERixRQUFRQTtJQUVSRyxDQUFDQTtBQUNMSCxDQUFDQTtBQW5DRztJQUFDLFFBQVE7O0dBQUMsZ0NBQUksVUFBOEM7QUFDNUQ7SUFBQyxRQUFROztHQUFDLHdDQUFZLFVBQXdCO0FBQzlDO0lBQUMsUUFBUTs7R0FBQyx1Q0FBVyxVQUFlO0FBQ3BDO0lBQUMsUUFBUTs7R0FBQyx5Q0FBYSxVQUFlO0FBQ3RDO0lBQUMsUUFBUTs7R0FBQyx3Q0FBWSxVQUFlO0FBQ3JDO0lBQUMsUUFBUTs7R0FBQyxvQ0FBUSxVQUFlO0FBQ2pDO0lBQUMsUUFBUTs7R0FBQyxpQ0FBSyxVQUFlO0FBQzlCO0lBQUMsUUFBUTs7R0FBQyxvQ0FBUSxVQUFlO0FBQ2pDO0lBQUMsUUFBUTs7R0FBQyxtQ0FBTyxVQUFlO0FBQ2hDO0lBQUMsUUFBUTs7R0FBQyxzQ0FBVSxVQUFTO0FBQzdCO0lBQUMsUUFBUTs7R0FBQyxzQ0FBVSxVQUFTO0FBQzdCO0lBQUMsUUFBUTs7R0FBQyxvQ0FBUSxVQUFTO0FBQzNCO0lBQUMsUUFBUTs7R0FBQyxvQ0FBUSxVQUFTO0FBQzNCO0lBQUMsUUFBUTs7R0FBQyxvQ0FBUSxVQUFTO0FBaEIvQjtJQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFDZixhQUFhLENBQUMsaUJBQWlCLENBQUM7O21CQXFDaEM7QUFFRCxXQUFZLFlBR1g7QUFIRCxXQUFZLFlBQVk7SUFDcEJJLHFEQUFPQSxDQUFBQTtJQUNQQSx1REFBUUEsQ0FBQUE7QUFDWkEsQ0FBQ0EsRUFIVyxZQUFZLEtBQVosWUFBWSxRQUd2QiIsImZpbGUiOiJMaXN0SXRlbS9MaXN0SXRlbS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3VzdG9tRWxlbWVudCwgYmluZGFibGUsIGluamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5cclxuQGluamVjdChFbGVtZW50KVxyXG5AY3VzdG9tRWxlbWVudCgnb2ZmaWNlLWxpc3RpdGVtJylcclxuZXhwb3J0IGNsYXNzIE9mZmljZUxpc3RJdGVtIHtcclxuICAgIEBiaW5kYWJsZSB0eXBlOiBzdHJpbmcgPSBMaXN0SXRlbVR5cGVbTGlzdEl0ZW1UeXBlLmRlZmF1bHRdO1xyXG4gICAgQGJpbmRhYmxlIGRvY3VtZW50SWNvbjpzdHJpbmcgPSBcImRvY3VtZW50UERGXCI7XHJcbiAgICBAYmluZGFibGUgcHJpbWFyeVRleHQ6c3RyaW5nID0gbnVsbDtcclxuICAgIEBiaW5kYWJsZSBzZWNvbmRhcnlUZXh0OnN0cmluZyA9IG51bGw7XHJcbiAgICBAYmluZGFibGUgdGVydGlhcnlUZXh0OnN0cmluZyA9IG51bGw7XHJcbiAgICBAYmluZGFibGUgbWV0YVRleHQ6c3RyaW5nID0gbnVsbDtcclxuICAgIEBiaW5kYWJsZSBpbWFnZTpzdHJpbmcgPSBudWxsO1xyXG4gICAgQGJpbmRhYmxlIGltYWdlYWx0OnN0cmluZyA9IG51bGw7XHJcbiAgICBAYmluZGFibGUgdG9vbHRpcDpzdHJpbmcgPSBudWxsO1xyXG4gICAgQGJpbmRhYmxlIGlzU2VsZWN0ZWQ6Ym9vbGVhbjsvLyA9IGZhbHNlO1xyXG4gICAgQGJpbmRhYmxlIHNlbGVjdGFibGU6Ym9vbGVhbjsvLyA9IGZhbHNlO1xyXG4gICAgQGJpbmRhYmxlIGhhc0ltYWdlOmJvb2xlYW47Ly8gPSBmYWxzZTtcclxuICAgIEBiaW5kYWJsZSBpc1Vuc2Vlbjpib29sZWFuOy8vID0gZmFsc2U7XHJcbiAgICBAYmluZGFibGUgaXNVbnJlYWQ6Ym9vbGVhbjsvLyA9IGZhbHNlO1xyXG4gICAgXHJcbiAgICBkYXJrVGV4dENzczpzdHJpbmc9XCJsaWdodFRleHRcIiAvL2RhcmtUZXh0XHJcbiAgICBzaG93UHJlc2VuY2U6Ym9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc2hvd1RpdGxlOmJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHNob3dTdGF0dXM6Ym9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc2hvd0RldGFpbDpib29sZWFuID0gZmFsc2U7XHJcbiAgICBzaG93SW1hZ2U6Ym9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc2VsZWN0YWJsZUNzczpzdHJpbmcgPSBudWxsO1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6RWxlbWVudCl7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgXHJcblxyXG4gICAgY2xpY2tIYW5kbGVyKCl7XHJcbiAgICAgICAgLy90aGlzLmVsZW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NsaWNrJykpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2xpY2tlZCB0b2dnbGVyXCIpO1xyXG4gICAgfVxyXG4gICAgYXR0YWNoZWQoKXtcclxuICAgICAgIFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZW51bSBMaXN0SXRlbVR5cGUge1xyXG4gICAgZGVmYXVsdCxcclxuICAgIGRvY3VtZW50ICAgIFxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
