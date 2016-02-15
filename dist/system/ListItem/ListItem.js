System.register(['aurelia-framework'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var aurelia_framework_1;
    var OfficeListItem, ListItemType;
    return {
        setters:[
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            }],
        execute: function() {
            OfficeListItem = (function () {
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
            exports_1("OfficeListItem", OfficeListItem);
            (function (ListItemType) {
                ListItemType[ListItemType["default"] = 0] = "default";
                ListItemType[ListItemType["document"] = 1] = "document";
            })(ListItemType || (ListItemType = {}));
            exports_1("ListItemType", ListItemType);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkxpc3RJdGVtL0xpc3RJdGVtLnRzIl0sIm5hbWVzIjpbIk9mZmljZUxpc3RJdGVtIiwiT2ZmaWNlTGlzdEl0ZW0uY29uc3RydWN0b3IiLCJPZmZpY2VMaXN0SXRlbS5jbGlja0hhbmRsZXIiLCJPZmZpY2VMaXN0SXRlbS5hdHRhY2hlZCIsIkxpc3RJdGVtVHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBRUE7Z0JBMEJJQSx3QkFBb0JBLE9BQWVBO29CQUFmQyxZQUFPQSxHQUFQQSxPQUFPQSxDQUFRQTtvQkF2QnpCQSxTQUFJQSxHQUFXQSxZQUFZQSxDQUFDQSxZQUFZQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQTtvQkFDbERBLGlCQUFZQSxHQUFVQSxhQUFhQSxDQUFDQTtvQkFDcENBLGdCQUFXQSxHQUFVQSxJQUFJQSxDQUFDQTtvQkFDMUJBLGtCQUFhQSxHQUFVQSxJQUFJQSxDQUFDQTtvQkFDNUJBLGlCQUFZQSxHQUFVQSxJQUFJQSxDQUFDQTtvQkFDM0JBLGFBQVFBLEdBQVVBLElBQUlBLENBQUNBO29CQUN2QkEsVUFBS0EsR0FBVUEsSUFBSUEsQ0FBQ0E7b0JBQ3BCQSxhQUFRQSxHQUFVQSxJQUFJQSxDQUFDQTtvQkFDdkJBLFlBQU9BLEdBQVVBLElBQUlBLENBQUNBO29CQU9oQ0EsZ0JBQVdBLEdBQVFBLFdBQVdBLENBQUFBO29CQUM5QkEsaUJBQVlBLEdBQVdBLEtBQUtBLENBQUNBO29CQUM3QkEsY0FBU0EsR0FBV0EsS0FBS0EsQ0FBQ0E7b0JBQzFCQSxlQUFVQSxHQUFXQSxLQUFLQSxDQUFDQTtvQkFDM0JBLGVBQVVBLEdBQVdBLEtBQUtBLENBQUNBO29CQUMzQkEsY0FBU0EsR0FBV0EsS0FBS0EsQ0FBQ0E7b0JBQzFCQSxrQkFBYUEsR0FBVUEsSUFBSUEsQ0FBQ0E7Z0JBSTVCQSxDQUFDQTtnQkFHREQscUNBQVlBLEdBQVpBO29CQUVJRSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxpQkFBaUJBLENBQUNBLENBQUNBO2dCQUNuQ0EsQ0FBQ0E7Z0JBQ0RGLGlDQUFRQSxHQUFSQTtnQkFFQUcsQ0FBQ0E7Z0JBbENESDtvQkFBQ0EsNEJBQVFBOzttQkFBQ0EsZ0NBQUlBLFVBQThDQTtnQkFDNURBO29CQUFDQSw0QkFBUUE7O21CQUFDQSx3Q0FBWUEsVUFBd0JBO2dCQUM5Q0E7b0JBQUNBLDRCQUFRQTs7bUJBQUNBLHVDQUFXQSxVQUFlQTtnQkFDcENBO29CQUFDQSw0QkFBUUE7O21CQUFDQSx5Q0FBYUEsVUFBZUE7Z0JBQ3RDQTtvQkFBQ0EsNEJBQVFBOzttQkFBQ0Esd0NBQVlBLFVBQWVBO2dCQUNyQ0E7b0JBQUNBLDRCQUFRQTs7bUJBQUNBLG9DQUFRQSxVQUFlQTtnQkFDakNBO29CQUFDQSw0QkFBUUE7O21CQUFDQSxpQ0FBS0EsVUFBZUE7Z0JBQzlCQTtvQkFBQ0EsNEJBQVFBOzttQkFBQ0Esb0NBQVFBLFVBQWVBO2dCQUNqQ0E7b0JBQUNBLDRCQUFRQTs7bUJBQUNBLG1DQUFPQSxVQUFlQTtnQkFDaENBO29CQUFDQSw0QkFBUUE7O21CQUFDQSxzQ0FBVUEsVUFBU0E7Z0JBQzdCQTtvQkFBQ0EsNEJBQVFBOzttQkFBQ0Esc0NBQVVBLFVBQVNBO2dCQUM3QkE7b0JBQUNBLDRCQUFRQTs7bUJBQUNBLG9DQUFRQSxVQUFTQTtnQkFDM0JBO29CQUFDQSw0QkFBUUE7O21CQUFDQSxvQ0FBUUEsVUFBU0E7Z0JBQzNCQTtvQkFBQ0EsNEJBQVFBOzttQkFBQ0Esb0NBQVFBLFVBQVNBO2dCQWhCL0JBO29CQUFDQSwwQkFBTUEsQ0FBQ0EsT0FBT0EsQ0FBQ0E7b0JBQ2ZBLGlDQUFhQSxDQUFDQSxpQkFBaUJBLENBQUNBOzttQ0FxQ2hDQTtnQkFBREEscUJBQUNBO1lBQURBLENBdENBLEFBc0NDQSxJQUFBO1lBdENELDJDQXNDQyxDQUFBO1lBRUQsV0FBWSxZQUFZO2dCQUNwQkkscURBQU9BLENBQUFBO2dCQUNQQSx1REFBUUEsQ0FBQUE7WUFDWkEsQ0FBQ0EsRUFIVyxZQUFZLEtBQVosWUFBWSxRQUd2QjtvREFBQSIsImZpbGUiOiJMaXN0SXRlbS9MaXN0SXRlbS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3VzdG9tRWxlbWVudCwgYmluZGFibGUsIGluamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5cclxuQGluamVjdChFbGVtZW50KVxyXG5AY3VzdG9tRWxlbWVudCgnb2ZmaWNlLWxpc3RpdGVtJylcclxuZXhwb3J0IGNsYXNzIE9mZmljZUxpc3RJdGVtIHtcclxuICAgIEBiaW5kYWJsZSB0eXBlOiBzdHJpbmcgPSBMaXN0SXRlbVR5cGVbTGlzdEl0ZW1UeXBlLmRlZmF1bHRdO1xyXG4gICAgQGJpbmRhYmxlIGRvY3VtZW50SWNvbjpzdHJpbmcgPSBcImRvY3VtZW50UERGXCI7XHJcbiAgICBAYmluZGFibGUgcHJpbWFyeVRleHQ6c3RyaW5nID0gbnVsbDtcclxuICAgIEBiaW5kYWJsZSBzZWNvbmRhcnlUZXh0OnN0cmluZyA9IG51bGw7XHJcbiAgICBAYmluZGFibGUgdGVydGlhcnlUZXh0OnN0cmluZyA9IG51bGw7XHJcbiAgICBAYmluZGFibGUgbWV0YVRleHQ6c3RyaW5nID0gbnVsbDtcclxuICAgIEBiaW5kYWJsZSBpbWFnZTpzdHJpbmcgPSBudWxsO1xyXG4gICAgQGJpbmRhYmxlIGltYWdlYWx0OnN0cmluZyA9IG51bGw7XHJcbiAgICBAYmluZGFibGUgdG9vbHRpcDpzdHJpbmcgPSBudWxsO1xyXG4gICAgQGJpbmRhYmxlIGlzU2VsZWN0ZWQ6Ym9vbGVhbjsvLyA9IGZhbHNlO1xyXG4gICAgQGJpbmRhYmxlIHNlbGVjdGFibGU6Ym9vbGVhbjsvLyA9IGZhbHNlO1xyXG4gICAgQGJpbmRhYmxlIGhhc0ltYWdlOmJvb2xlYW47Ly8gPSBmYWxzZTtcclxuICAgIEBiaW5kYWJsZSBpc1Vuc2Vlbjpib29sZWFuOy8vID0gZmFsc2U7XHJcbiAgICBAYmluZGFibGUgaXNVbnJlYWQ6Ym9vbGVhbjsvLyA9IGZhbHNlO1xyXG4gICAgXHJcbiAgICBkYXJrVGV4dENzczpzdHJpbmc9XCJsaWdodFRleHRcIiAvL2RhcmtUZXh0XHJcbiAgICBzaG93UHJlc2VuY2U6Ym9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc2hvd1RpdGxlOmJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHNob3dTdGF0dXM6Ym9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc2hvd0RldGFpbDpib29sZWFuID0gZmFsc2U7XHJcbiAgICBzaG93SW1hZ2U6Ym9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc2VsZWN0YWJsZUNzczpzdHJpbmcgPSBudWxsO1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6RWxlbWVudCl7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgXHJcblxyXG4gICAgY2xpY2tIYW5kbGVyKCl7XHJcbiAgICAgICAgLy90aGlzLmVsZW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NsaWNrJykpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2xpY2tlZCB0b2dnbGVyXCIpO1xyXG4gICAgfVxyXG4gICAgYXR0YWNoZWQoKXtcclxuICAgICAgIFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZW51bSBMaXN0SXRlbVR5cGUge1xyXG4gICAgZGVmYXVsdCxcclxuICAgIGRvY3VtZW50ICAgIFxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
