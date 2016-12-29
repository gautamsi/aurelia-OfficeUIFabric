var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var aurelia_framework_1 = require('aurelia-framework');
var OfficeListItem = (function () {
    function OfficeListItem(element) {
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
    OfficeListItem.prototype.clickHandler = function () {
        console.log("clicked toggler");
    };
    OfficeListItem.prototype.attached = function () {
    };
    __decorate([
        aurelia_framework_1.bindable, 
        __metadata('design:type', String)
    ], OfficeListItem.prototype, "type", void 0);
    __decorate([
        aurelia_framework_1.bindable, 
        __metadata('design:type', String)
    ], OfficeListItem.prototype, "documentIcon", void 0);
    __decorate([
        aurelia_framework_1.bindable, 
        __metadata('design:type', String)
    ], OfficeListItem.prototype, "primaryText", void 0);
    __decorate([
        aurelia_framework_1.bindable, 
        __metadata('design:type', String)
    ], OfficeListItem.prototype, "secondaryText", void 0);
    __decorate([
        aurelia_framework_1.bindable, 
        __metadata('design:type', String)
    ], OfficeListItem.prototype, "tertiaryText", void 0);
    __decorate([
        aurelia_framework_1.bindable, 
        __metadata('design:type', String)
    ], OfficeListItem.prototype, "metaText", void 0);
    __decorate([
        aurelia_framework_1.bindable, 
        __metadata('design:type', String)
    ], OfficeListItem.prototype, "image", void 0);
    __decorate([
        aurelia_framework_1.bindable, 
        __metadata('design:type', String)
    ], OfficeListItem.prototype, "imagealt", void 0);
    __decorate([
        aurelia_framework_1.bindable, 
        __metadata('design:type', String)
    ], OfficeListItem.prototype, "tooltip", void 0);
    __decorate([
        aurelia_framework_1.bindable, 
        __metadata('design:type', Boolean)
    ], OfficeListItem.prototype, "isSelected", void 0);
    __decorate([
        aurelia_framework_1.bindable, 
        __metadata('design:type', Boolean)
    ], OfficeListItem.prototype, "selectable", void 0);
    __decorate([
        aurelia_framework_1.bindable, 
        __metadata('design:type', Boolean)
    ], OfficeListItem.prototype, "hasImage", void 0);
    __decorate([
        aurelia_framework_1.bindable, 
        __metadata('design:type', Boolean)
    ], OfficeListItem.prototype, "isUnseen", void 0);
    __decorate([
        aurelia_framework_1.bindable, 
        __metadata('design:type', Boolean)
    ], OfficeListItem.prototype, "isUnread", void 0);
    OfficeListItem = __decorate([
        aurelia_framework_1.inject(Element),
        aurelia_framework_1.customElement('office-listitem'), 
        __metadata('design:paramtypes', [Element])
    ], OfficeListItem);
    return OfficeListItem;
})();
exports.OfficeListItem = OfficeListItem;
(function (ListItemType) {
    ListItemType[ListItemType["default"] = 0] = "default";
    ListItemType[ListItemType["document"] = 1] = "document";
})(exports.ListItemType || (exports.ListItemType = {}));
var ListItemType = exports.ListItemType;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkxpc3RJdGVtL0xpc3RJdGVtLnRzIl0sIm5hbWVzIjpbIk9mZmljZUxpc3RJdGVtIiwiT2ZmaWNlTGlzdEl0ZW0uY29uc3RydWN0b3IiLCJPZmZpY2VMaXN0SXRlbS5jbGlja0hhbmRsZXIiLCJPZmZpY2VMaXN0SXRlbS5hdHRhY2hlZCIsIkxpc3RJdGVtVHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsa0NBQThDLG1CQUFtQixDQUFDLENBQUE7QUFFbEU7SUEwQklBLHdCQUFvQkEsT0FBZUE7UUFBZkMsWUFBT0EsR0FBUEEsT0FBT0EsQ0FBUUE7UUF2QnpCQSxTQUFJQSxHQUFXQSxZQUFZQSxDQUFDQSxZQUFZQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQTtRQUNsREEsaUJBQVlBLEdBQVVBLGFBQWFBLENBQUNBO1FBQ3BDQSxnQkFBV0EsR0FBVUEsSUFBSUEsQ0FBQ0E7UUFDMUJBLGtCQUFhQSxHQUFVQSxJQUFJQSxDQUFDQTtRQUM1QkEsaUJBQVlBLEdBQVVBLElBQUlBLENBQUNBO1FBQzNCQSxhQUFRQSxHQUFVQSxJQUFJQSxDQUFDQTtRQUN2QkEsVUFBS0EsR0FBVUEsSUFBSUEsQ0FBQ0E7UUFDcEJBLGFBQVFBLEdBQVVBLElBQUlBLENBQUNBO1FBQ3ZCQSxZQUFPQSxHQUFVQSxJQUFJQSxDQUFDQTtRQU9oQ0EsZ0JBQVdBLEdBQVFBLFdBQVdBLENBQUFBO1FBQzlCQSxpQkFBWUEsR0FBV0EsS0FBS0EsQ0FBQ0E7UUFDN0JBLGNBQVNBLEdBQVdBLEtBQUtBLENBQUNBO1FBQzFCQSxlQUFVQSxHQUFXQSxLQUFLQSxDQUFDQTtRQUMzQkEsZUFBVUEsR0FBV0EsS0FBS0EsQ0FBQ0E7UUFDM0JBLGNBQVNBLEdBQVdBLEtBQUtBLENBQUNBO1FBQzFCQSxrQkFBYUEsR0FBVUEsSUFBSUEsQ0FBQ0E7SUFJNUJBLENBQUNBO0lBR0RELHFDQUFZQSxHQUFaQTtRQUVJRSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxpQkFBaUJBLENBQUNBLENBQUNBO0lBQ25DQSxDQUFDQTtJQUNERixpQ0FBUUEsR0FBUkE7SUFFQUcsQ0FBQ0E7SUFsQ0RIO1FBQUNBLDRCQUFRQTs7T0FBQ0EsZ0NBQUlBLFVBQThDQTtJQUM1REE7UUFBQ0EsNEJBQVFBOztPQUFDQSx3Q0FBWUEsVUFBd0JBO0lBQzlDQTtRQUFDQSw0QkFBUUE7O09BQUNBLHVDQUFXQSxVQUFlQTtJQUNwQ0E7UUFBQ0EsNEJBQVFBOztPQUFDQSx5Q0FBYUEsVUFBZUE7SUFDdENBO1FBQUNBLDRCQUFRQTs7T0FBQ0Esd0NBQVlBLFVBQWVBO0lBQ3JDQTtRQUFDQSw0QkFBUUE7O09BQUNBLG9DQUFRQSxVQUFlQTtJQUNqQ0E7UUFBQ0EsNEJBQVFBOztPQUFDQSxpQ0FBS0EsVUFBZUE7SUFDOUJBO1FBQUNBLDRCQUFRQTs7T0FBQ0Esb0NBQVFBLFVBQWVBO0lBQ2pDQTtRQUFDQSw0QkFBUUE7O09BQUNBLG1DQUFPQSxVQUFlQTtJQUNoQ0E7UUFBQ0EsNEJBQVFBOztPQUFDQSxzQ0FBVUEsVUFBU0E7SUFDN0JBO1FBQUNBLDRCQUFRQTs7T0FBQ0Esc0NBQVVBLFVBQVNBO0lBQzdCQTtRQUFDQSw0QkFBUUE7O09BQUNBLG9DQUFRQSxVQUFTQTtJQUMzQkE7UUFBQ0EsNEJBQVFBOztPQUFDQSxvQ0FBUUEsVUFBU0E7SUFDM0JBO1FBQUNBLDRCQUFRQTs7T0FBQ0Esb0NBQVFBLFVBQVNBO0lBaEIvQkE7UUFBQ0EsMEJBQU1BLENBQUNBLE9BQU9BLENBQUNBO1FBQ2ZBLGlDQUFhQSxDQUFDQSxpQkFBaUJBLENBQUNBOzt1QkFxQ2hDQTtJQUFEQSxxQkFBQ0E7QUFBREEsQ0F0Q0EsQUFzQ0NBLElBQUE7QUFwQ1ksc0JBQWMsaUJBb0MxQixDQUFBO0FBRUQsV0FBWSxZQUFZO0lBQ3BCSSxxREFBT0EsQ0FBQUE7SUFDUEEsdURBQVFBLENBQUFBO0FBQ1pBLENBQUNBLEVBSFcsb0JBQVksS0FBWixvQkFBWSxRQUd2QjtBQUhELElBQVksWUFBWSxHQUFaLG9CQUdYLENBQUEiLCJmaWxlIjoiTGlzdEl0ZW0vTGlzdEl0ZW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2N1c3RvbUVsZW1lbnQsIGJpbmRhYmxlLCBpbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuXHJcbkBpbmplY3QoRWxlbWVudClcclxuQGN1c3RvbUVsZW1lbnQoJ29mZmljZS1saXN0aXRlbScpXHJcbmV4cG9ydCBjbGFzcyBPZmZpY2VMaXN0SXRlbSB7XHJcbiAgICBAYmluZGFibGUgdHlwZTogc3RyaW5nID0gTGlzdEl0ZW1UeXBlW0xpc3RJdGVtVHlwZS5kZWZhdWx0XTtcclxuICAgIEBiaW5kYWJsZSBkb2N1bWVudEljb246c3RyaW5nID0gXCJkb2N1bWVudFBERlwiO1xyXG4gICAgQGJpbmRhYmxlIHByaW1hcnlUZXh0OnN0cmluZyA9IG51bGw7XHJcbiAgICBAYmluZGFibGUgc2Vjb25kYXJ5VGV4dDpzdHJpbmcgPSBudWxsO1xyXG4gICAgQGJpbmRhYmxlIHRlcnRpYXJ5VGV4dDpzdHJpbmcgPSBudWxsO1xyXG4gICAgQGJpbmRhYmxlIG1ldGFUZXh0OnN0cmluZyA9IG51bGw7XHJcbiAgICBAYmluZGFibGUgaW1hZ2U6c3RyaW5nID0gbnVsbDtcclxuICAgIEBiaW5kYWJsZSBpbWFnZWFsdDpzdHJpbmcgPSBudWxsO1xyXG4gICAgQGJpbmRhYmxlIHRvb2x0aXA6c3RyaW5nID0gbnVsbDtcclxuICAgIEBiaW5kYWJsZSBpc1NlbGVjdGVkOmJvb2xlYW47Ly8gPSBmYWxzZTtcclxuICAgIEBiaW5kYWJsZSBzZWxlY3RhYmxlOmJvb2xlYW47Ly8gPSBmYWxzZTtcclxuICAgIEBiaW5kYWJsZSBoYXNJbWFnZTpib29sZWFuOy8vID0gZmFsc2U7XHJcbiAgICBAYmluZGFibGUgaXNVbnNlZW46Ym9vbGVhbjsvLyA9IGZhbHNlO1xyXG4gICAgQGJpbmRhYmxlIGlzVW5yZWFkOmJvb2xlYW47Ly8gPSBmYWxzZTtcclxuICAgIFxyXG4gICAgZGFya1RleHRDc3M6c3RyaW5nPVwibGlnaHRUZXh0XCIgLy9kYXJrVGV4dFxyXG4gICAgc2hvd1ByZXNlbmNlOmJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHNob3dUaXRsZTpib29sZWFuID0gZmFsc2U7XHJcbiAgICBzaG93U3RhdHVzOmJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHNob3dEZXRhaWw6Ym9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc2hvd0ltYWdlOmJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHNlbGVjdGFibGVDc3M6c3RyaW5nID0gbnVsbDtcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OkVsZW1lbnQpe1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gIFxyXG5cclxuICAgIGNsaWNrSGFuZGxlcigpe1xyXG4gICAgICAgIC8vdGhpcy5lbGVtZW50LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdjbGljaycpKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImNsaWNrZWQgdG9nZ2xlclwiKTtcclxuICAgIH1cclxuICAgIGF0dGFjaGVkKCl7XHJcbiAgICAgICBcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGVudW0gTGlzdEl0ZW1UeXBlIHtcclxuICAgIGRlZmF1bHQsXHJcbiAgICBkb2N1bWVudCAgICBcclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
