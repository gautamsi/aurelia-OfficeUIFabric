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
import "./Jquery.ContextualMenu";
export let OfficeContextualMenu = class {
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
        this.navbarChild = false;
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
        if (this.navbarChild)
            return;
        $(this.ctxMenuRoot).ContextualMenu();
    }
};
__decorate([
    bindable, 
    __metadata('design:type', String)
], OfficeContextualMenu.prototype, "type", void 0);
__decorate([
    bindable, 
    __metadata('design:type', String)
], OfficeContextualMenu.prototype, "documentIcon", void 0);
__decorate([
    bindable, 
    __metadata('design:type', String)
], OfficeContextualMenu.prototype, "primaryText", void 0);
__decorate([
    bindable, 
    __metadata('design:type', String)
], OfficeContextualMenu.prototype, "secondaryText", void 0);
__decorate([
    bindable, 
    __metadata('design:type', String)
], OfficeContextualMenu.prototype, "tertiaryText", void 0);
__decorate([
    bindable, 
    __metadata('design:type', String)
], OfficeContextualMenu.prototype, "metaText", void 0);
__decorate([
    bindable, 
    __metadata('design:type', String)
], OfficeContextualMenu.prototype, "image", void 0);
__decorate([
    bindable, 
    __metadata('design:type', String)
], OfficeContextualMenu.prototype, "imagealt", void 0);
__decorate([
    bindable, 
    __metadata('design:type', String)
], OfficeContextualMenu.prototype, "tooltip", void 0);
__decorate([
    bindable, 
    __metadata('design:type', Boolean)
], OfficeContextualMenu.prototype, "isSelected", void 0);
__decorate([
    bindable, 
    __metadata('design:type', Boolean)
], OfficeContextualMenu.prototype, "selectable", void 0);
__decorate([
    bindable, 
    __metadata('design:type', Boolean)
], OfficeContextualMenu.prototype, "hasImage", void 0);
__decorate([
    bindable, 
    __metadata('design:type', Boolean)
], OfficeContextualMenu.prototype, "navbarChild", void 0);
__decorate([
    bindable, 
    __metadata('design:type', Boolean)
], OfficeContextualMenu.prototype, "isOpen", void 0);
__decorate([
    bindable, 
    __metadata('design:type', Boolean)
], OfficeContextualMenu.prototype, "multiSelect", void 0);
OfficeContextualMenu = __decorate([
    inject(Element),
    customElement('office-contextualmenu'), 
    __metadata('design:paramtypes', [Element])
], OfficeContextualMenu);
export var ListItemType;
(function (ListItemType) {
    ListItemType[ListItemType["default"] = 0] = "default";
    ListItemType[ListItemType["document"] = 1] = "document";
})(ListItemType || (ListItemType = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbnRleHR1YWxNZW51L0NvbnRleHR1YWxNZW51LnRzIl0sIm5hbWVzIjpbIk9mZmljZUNvbnRleHR1YWxNZW51IiwiT2ZmaWNlQ29udGV4dHVhbE1lbnUuY29uc3RydWN0b3IiLCJPZmZpY2VDb250ZXh0dWFsTWVudS5jbGlja0hhbmRsZXIiLCJPZmZpY2VDb250ZXh0dWFsTWVudS5hdHRhY2hlZCIsIkxpc3RJdGVtVHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O09BQU8sRUFBQyxhQUFhLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBQyxNQUFNLG1CQUFtQjtPQXlDMUQseUJBQXlCO0FBRWhDO0lBNkJJQSxZQUFvQkEsT0FBZUE7UUFBZkMsWUFBT0EsR0FBUEEsT0FBT0EsQ0FBUUE7UUExQnpCQSxTQUFJQSxHQUFXQSxZQUFZQSxDQUFDQSxZQUFZQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQTtRQUNsREEsaUJBQVlBLEdBQVVBLGFBQWFBLENBQUNBO1FBQ3BDQSxnQkFBV0EsR0FBVUEsSUFBSUEsQ0FBQ0E7UUFDMUJBLGtCQUFhQSxHQUFVQSxJQUFJQSxDQUFDQTtRQUM1QkEsaUJBQVlBLEdBQVVBLElBQUlBLENBQUNBO1FBQzNCQSxhQUFRQSxHQUFVQSxJQUFJQSxDQUFDQTtRQUN2QkEsVUFBS0EsR0FBVUEsSUFBSUEsQ0FBQ0E7UUFDcEJBLGFBQVFBLEdBQVVBLElBQUlBLENBQUNBO1FBQ3ZCQSxZQUFPQSxHQUFVQSxJQUFJQSxDQUFDQTtRQUt0QkEsZ0JBQVdBLEdBQVdBLEtBQUtBLENBQUNBO1FBSXRDQSxnQkFBV0EsR0FBUUEsV0FBV0EsQ0FBQUE7UUFDOUJBLGlCQUFZQSxHQUFXQSxLQUFLQSxDQUFDQTtRQUM3QkEsY0FBU0EsR0FBV0EsS0FBS0EsQ0FBQ0E7UUFDMUJBLGVBQVVBLEdBQVdBLEtBQUtBLENBQUNBO1FBQzNCQSxlQUFVQSxHQUFXQSxLQUFLQSxDQUFDQTtRQUMzQkEsY0FBU0EsR0FBV0EsS0FBS0EsQ0FBQ0E7UUFDMUJBLGtCQUFhQSxHQUFVQSxJQUFJQSxDQUFDQTtJQUs1QkEsQ0FBQ0E7SUFHREQsWUFBWUE7UUFFUkUsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsaUJBQWlCQSxDQUFDQSxDQUFDQTtJQUNuQ0EsQ0FBQ0E7SUFDREYsUUFBUUE7UUFDSkcsRUFBRUEsQ0FBQUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsV0FBV0EsQ0FBQ0E7WUFDaEJBLE1BQU1BLENBQUNBO1FBRVpBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLFdBQVdBLENBQUNBLENBQUNBLGNBQWNBLEVBQUVBLENBQUNBO0lBQ3hDQSxDQUFDQTtBQUNMSCxDQUFDQTtBQXpDRztJQUFDLFFBQVE7O0dBQUMsc0NBQUksVUFBOEM7QUFDNUQ7SUFBQyxRQUFROztHQUFDLDhDQUFZLFVBQXdCO0FBQzlDO0lBQUMsUUFBUTs7R0FBQyw2Q0FBVyxVQUFlO0FBQ3BDO0lBQUMsUUFBUTs7R0FBQywrQ0FBYSxVQUFlO0FBQ3RDO0lBQUMsUUFBUTs7R0FBQyw4Q0FBWSxVQUFlO0FBQ3JDO0lBQUMsUUFBUTs7R0FBQywwQ0FBUSxVQUFlO0FBQ2pDO0lBQUMsUUFBUTs7R0FBQyx1Q0FBSyxVQUFlO0FBQzlCO0lBQUMsUUFBUTs7R0FBQywwQ0FBUSxVQUFlO0FBQ2pDO0lBQUMsUUFBUTs7R0FBQyx5Q0FBTyxVQUFlO0FBQ2hDO0lBQUMsUUFBUTs7R0FBQyw0Q0FBVSxVQUFTO0FBQzdCO0lBQUMsUUFBUTs7R0FBQyw0Q0FBVSxVQUFTO0FBQzdCO0lBQUMsUUFBUTs7R0FBQywwQ0FBUSxVQUFTO0FBRTNCO0lBQUMsUUFBUTs7R0FBQyw2Q0FBVyxVQUFpQjtBQUN0QztJQUFDLFFBQVE7O0dBQUMsd0NBQU0sVUFBUztBQUN6QjtJQUFDLFFBQVE7O0dBQUMsNkNBQVcsVUFBUztBQWxCbEM7SUFBQyxNQUFNLENBQUMsT0FBTyxDQUFDO0lBQ2YsYUFBYSxDQUFDLHVCQUF1QixDQUFDOzt5QkEyQ3RDO0FBRUQsV0FBWSxZQUdYO0FBSEQsV0FBWSxZQUFZO0lBQ3BCSSxxREFBT0EsQ0FBQUE7SUFDUEEsdURBQVFBLENBQUFBO0FBQ1pBLENBQUNBLEVBSFcsWUFBWSxLQUFaLFlBQVksUUFHdkIiLCJmaWxlIjoiQ29udGV4dHVhbE1lbnUvQ29udGV4dHVhbE1lbnUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2N1c3RvbUVsZW1lbnQsIGJpbmRhYmxlLCBpbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuXHJcbi8qKlxyXG4gKiAgd29ya2Fyb3VuZCB3aXRoIG9mZmljaWFsIGZhYnJpYyBqcyBcclxuICAgICAgICAvLyBEZXNlbGVjdCBhbGwgb2YgdGhlIGl0ZW1zIGFuZCBjbG9zZSBhbnkgbWVudXMuXHJcbiAgICAgICAgICAkKCcubXMtQ29udGV4dHVhbE1lbnUtbGluaycpXHJcbiAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdpcy1zZWxlY3RlZCcpXHJcbiAgICAgICAgICAgICAgLnNpYmxpbmdzKCcubXMtQ29udGV4dHVhbE1lbnUnKVxyXG4gICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnaXMtb3BlbicpO1xyXG5cclxuICAgICAgICAgIC8vIFNlbGVjdCB0aGlzIGl0ZW0uXHJcbiAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdpcy1zZWxlY3RlZCcpO1xyXG5cclxuICAgICAgICAgIC8vIElmIHRoaXMgaXRlbSBoYXMgYSBtZW51LCBvcGVuIGl0LlxyXG4gICAgICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoJ21zLUNvbnRleHR1YWxNZW51LWxpbmstLWhhc01lbnUnKSkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnNpYmxpbmdzKCcubXMtQ29udGV4dHVhbE1lbnU6Zmlyc3QnKS5hZGRDbGFzcygnaXMtb3BlbicpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXBsYWNlIHdpdGggd2l0aCBcclxuICogXHJcbiAqIFxyXG4gICAgICAgICAgLy8gRGVzZWxlY3QgYWxsIG9mIHRoZSBpdGVtcyBhbmQgY2xvc2UgYW55IG1lbnVzLlxyXG4gICAgICAgICAgJCgnLm1zLUNvbnRleHR1YWxNZW51LWxpbmsnKVxyXG4gICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnaXMtc2VsZWN0ZWQnKVxyXG4gICAgICAgICAgICAgIC5zaWJsaW5ncygnLm1zLUNvbnRleHR1YWxNZW51LWNvbnRhaW5lcicpXHJcbiAgICAgICAgICAgICAgLmZpbmQoJy5tcy1Db250ZXh0dWFsTWVudScpXHJcbiAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdpcy1vcGVuJyk7XHJcblxyXG4gICAgICAgICAgLy8gU2VsZWN0IHRoaXMgaXRlbS5cclxuICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2lzLXNlbGVjdGVkJyk7XHJcblxyXG4gICAgICAgICAgLy8gSWYgdGhpcyBpdGVtIGhhcyBhIG1lbnUsIG9wZW4gaXQuXHJcbiAgICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcygnbXMtQ29udGV4dHVhbE1lbnUtbGluay0taGFzTWVudScpKSB7XHJcbiAgICAgICAgICAgICQodGhpcykuc2libGluZ3MoJy5tcy1Db250ZXh0dWFsTWVudS1jb250YWluZXInKS5maW5kKCcubXMtQ29udGV4dHVhbE1lbnU6Zmlyc3QnKS5hZGRDbGFzcygnaXMtb3BlbicpO1xyXG5cclxuICogXHJcbiAqL1xyXG5cclxuIFxyXG5cclxuaW1wb3J0IFwiLi9KcXVlcnkuQ29udGV4dHVhbE1lbnVcIjtcclxuXHJcbkBpbmplY3QoRWxlbWVudClcclxuQGN1c3RvbUVsZW1lbnQoJ29mZmljZS1jb250ZXh0dWFsbWVudScpXHJcbmV4cG9ydCBjbGFzcyBPZmZpY2VDb250ZXh0dWFsTWVudSB7XHJcbiAgICBAYmluZGFibGUgdHlwZTogc3RyaW5nID0gTGlzdEl0ZW1UeXBlW0xpc3RJdGVtVHlwZS5kZWZhdWx0XTtcclxuICAgIEBiaW5kYWJsZSBkb2N1bWVudEljb246c3RyaW5nID0gXCJkb2N1bWVudFBERlwiO1xyXG4gICAgQGJpbmRhYmxlIHByaW1hcnlUZXh0OnN0cmluZyA9IG51bGw7XHJcbiAgICBAYmluZGFibGUgc2Vjb25kYXJ5VGV4dDpzdHJpbmcgPSBudWxsO1xyXG4gICAgQGJpbmRhYmxlIHRlcnRpYXJ5VGV4dDpzdHJpbmcgPSBudWxsO1xyXG4gICAgQGJpbmRhYmxlIG1ldGFUZXh0OnN0cmluZyA9IG51bGw7XHJcbiAgICBAYmluZGFibGUgaW1hZ2U6c3RyaW5nID0gbnVsbDtcclxuICAgIEBiaW5kYWJsZSBpbWFnZWFsdDpzdHJpbmcgPSBudWxsO1xyXG4gICAgQGJpbmRhYmxlIHRvb2x0aXA6c3RyaW5nID0gbnVsbDtcclxuICAgIEBiaW5kYWJsZSBpc1NlbGVjdGVkOmJvb2xlYW47Ly8gPSBmYWxzZTtcclxuICAgIEBiaW5kYWJsZSBzZWxlY3RhYmxlOmJvb2xlYW47Ly8gPSBmYWxzZTtcclxuICAgIEBiaW5kYWJsZSBoYXNJbWFnZTpib29sZWFuOy8vID0gZmFsc2U7XHJcbiAgICBcclxuICAgIEBiaW5kYWJsZSBuYXZiYXJDaGlsZDpib29sZWFuID0gZmFsc2U7XHJcbiAgICBAYmluZGFibGUgaXNPcGVuOmJvb2xlYW47Ly8gPSBmYWxzZTtcclxuICAgIEBiaW5kYWJsZSBtdWx0aVNlbGVjdDpib29sZWFuOy8vID0gZmFsc2U7XHJcblxyXG4gICAgZGFya1RleHRDc3M6c3RyaW5nPVwibGlnaHRUZXh0XCIgLy9kYXJrVGV4dFxyXG4gICAgc2hvd1ByZXNlbmNlOmJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHNob3dUaXRsZTpib29sZWFuID0gZmFsc2U7XHJcbiAgICBzaG93U3RhdHVzOmJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHNob3dEZXRhaWw6Ym9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc2hvd0ltYWdlOmJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHNlbGVjdGFibGVDc3M6c3RyaW5nID0gbnVsbDtcclxuICAgIFxyXG4gICAgY3R4TWVudVJvb3Q6RWxlbWVudDtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDpFbGVtZW50KXtcclxuICAgICAgICBcclxuICAgIH1cclxuICBcclxuXHJcbiAgICBjbGlja0hhbmRsZXIoKXtcclxuICAgICAgICAvL3RoaXMuZWxlbWVudC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2xpY2snKSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjbGlja2VkIHRvZ2dsZXJcIik7XHJcbiAgICB9XHJcbiAgICBhdHRhY2hlZCgpe1xyXG4gICAgICAgIGlmKHRoaXMubmF2YmFyQ2hpbGQpIFxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgXHJcbiAgICAgICAkKHRoaXMuY3R4TWVudVJvb3QpLkNvbnRleHR1YWxNZW51KCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIExpc3RJdGVtVHlwZSB7XHJcbiAgICBkZWZhdWx0LFxyXG4gICAgZG9jdW1lbnQgICAgXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
