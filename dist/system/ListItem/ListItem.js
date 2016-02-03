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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkxpc3RJdGVtL0xpc3RJdGVtLnRzIl0sIm5hbWVzIjpbIk9mZmljZUxpc3RJdGVtIiwiT2ZmaWNlTGlzdEl0ZW0uY29uc3RydWN0b3IiLCJPZmZpY2VMaXN0SXRlbS5jbGlja0hhbmRsZXIiLCJPZmZpY2VMaXN0SXRlbS5hdHRhY2hlZCIsIkxpc3RJdGVtVHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBRUE7Z0JBMEJJQSx3QkFBb0JBLE9BQWVBO29CQUFmQyxZQUFPQSxHQUFQQSxPQUFPQSxDQUFRQTtvQkF2QnpCQSxTQUFJQSxHQUFXQSxZQUFZQSxDQUFDQSxZQUFZQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQTtvQkFDbERBLGlCQUFZQSxHQUFVQSxhQUFhQSxDQUFDQTtvQkFDcENBLGdCQUFXQSxHQUFVQSxJQUFJQSxDQUFDQTtvQkFDMUJBLGtCQUFhQSxHQUFVQSxJQUFJQSxDQUFDQTtvQkFDNUJBLGlCQUFZQSxHQUFVQSxJQUFJQSxDQUFDQTtvQkFDM0JBLGFBQVFBLEdBQVVBLElBQUlBLENBQUNBO29CQUN2QkEsVUFBS0EsR0FBVUEsSUFBSUEsQ0FBQ0E7b0JBQ3BCQSxhQUFRQSxHQUFVQSxJQUFJQSxDQUFDQTtvQkFDdkJBLFlBQU9BLEdBQVVBLElBQUlBLENBQUNBO29CQU9oQ0EsZ0JBQVdBLEdBQVFBLFdBQVdBLENBQUFBO29CQUM5QkEsaUJBQVlBLEdBQVdBLEtBQUtBLENBQUNBO29CQUM3QkEsY0FBU0EsR0FBV0EsS0FBS0EsQ0FBQ0E7b0JBQzFCQSxlQUFVQSxHQUFXQSxLQUFLQSxDQUFDQTtvQkFDM0JBLGVBQVVBLEdBQVdBLEtBQUtBLENBQUNBO29CQUMzQkEsY0FBU0EsR0FBV0EsS0FBS0EsQ0FBQ0E7b0JBQzFCQSxrQkFBYUEsR0FBVUEsSUFBSUEsQ0FBQ0E7Z0JBSTVCQSxDQUFDQTtnQkFHREQscUNBQVlBLEdBQVpBO29CQUVJRSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxpQkFBaUJBLENBQUNBLENBQUNBO2dCQUNuQ0EsQ0FBQ0E7Z0JBQ0RGLGlDQUFRQSxHQUFSQTtnQkFFQUcsQ0FBQ0E7Z0JBbENESDtvQkFBQ0EsNEJBQVFBOzttQkFBQ0EsZ0NBQUlBLFVBQThDQTtnQkFDNURBO29CQUFDQSw0QkFBUUE7O21CQUFDQSx3Q0FBWUEsVUFBd0JBO2dCQUM5Q0E7b0JBQUNBLDRCQUFRQTs7bUJBQUNBLHVDQUFXQSxVQUFlQTtnQkFDcENBO29CQUFDQSw0QkFBUUE7O21CQUFDQSx5Q0FBYUEsVUFBZUE7Z0JBQ3RDQTtvQkFBQ0EsNEJBQVFBOzttQkFBQ0Esd0NBQVlBLFVBQWVBO2dCQUNyQ0E7b0JBQUNBLDRCQUFRQTs7bUJBQUNBLG9DQUFRQSxVQUFlQTtnQkFDakNBO29CQUFDQSw0QkFBUUE7O21CQUFDQSxpQ0FBS0EsVUFBZUE7Z0JBQzlCQTtvQkFBQ0EsNEJBQVFBOzttQkFBQ0Esb0NBQVFBLFVBQWVBO2dCQUNqQ0E7b0JBQUNBLDRCQUFRQTs7bUJBQUNBLG1DQUFPQSxVQUFlQTtnQkFDaENBO29CQUFDQSw0QkFBUUE7O21CQUFDQSxzQ0FBVUEsVUFBU0E7Z0JBQzdCQTtvQkFBQ0EsNEJBQVFBOzttQkFBQ0Esc0NBQVVBLFVBQVNBO2dCQUM3QkE7b0JBQUNBLDRCQUFRQTs7bUJBQUNBLG9DQUFRQSxVQUFTQTtnQkFDM0JBO29CQUFDQSw0QkFBUUE7O21CQUFDQSxvQ0FBUUEsVUFBU0E7Z0JBQzNCQTtvQkFBQ0EsNEJBQVFBOzttQkFBQ0Esb0NBQVFBLFVBQVNBO2dCQWhCL0JBO29CQUFDQSwwQkFBTUEsQ0FBQ0EsT0FBT0EsQ0FBQ0E7b0JBQ2ZBLGlDQUFhQSxDQUFDQSxpQkFBaUJBLENBQUNBOzttQ0FxQ2hDQTtnQkFBREEscUJBQUNBO1lBQURBLENBdENBLEFBc0NDQSxJQUFBO1lBdENELDJDQXNDQyxDQUFBO1lBRUQsV0FBWSxZQUFZO2dCQUNwQkkscURBQU9BLENBQUFBO2dCQUNQQSx1REFBUUEsQ0FBQUE7WUFDWkEsQ0FBQ0EsRUFIVyxZQUFZLEtBQVosWUFBWSxRQUd2QjtvREFBQSIsImZpbGUiOiJMaXN0SXRlbS9MaXN0SXRlbS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3VzdG9tRWxlbWVudCwgYmluZGFibGUsIGluamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5AaW5qZWN0KEVsZW1lbnQpXG5AY3VzdG9tRWxlbWVudCgnb2ZmaWNlLWxpc3RpdGVtJylcbmV4cG9ydCBjbGFzcyBPZmZpY2VMaXN0SXRlbSB7XG4gICAgQGJpbmRhYmxlIHR5cGU6IHN0cmluZyA9IExpc3RJdGVtVHlwZVtMaXN0SXRlbVR5cGUuZGVmYXVsdF07XG4gICAgQGJpbmRhYmxlIGRvY3VtZW50SWNvbjpzdHJpbmcgPSBcImRvY3VtZW50UERGXCI7XG4gICAgQGJpbmRhYmxlIHByaW1hcnlUZXh0OnN0cmluZyA9IG51bGw7XG4gICAgQGJpbmRhYmxlIHNlY29uZGFyeVRleHQ6c3RyaW5nID0gbnVsbDtcbiAgICBAYmluZGFibGUgdGVydGlhcnlUZXh0OnN0cmluZyA9IG51bGw7XG4gICAgQGJpbmRhYmxlIG1ldGFUZXh0OnN0cmluZyA9IG51bGw7XG4gICAgQGJpbmRhYmxlIGltYWdlOnN0cmluZyA9IG51bGw7XG4gICAgQGJpbmRhYmxlIGltYWdlYWx0OnN0cmluZyA9IG51bGw7XG4gICAgQGJpbmRhYmxlIHRvb2x0aXA6c3RyaW5nID0gbnVsbDtcbiAgICBAYmluZGFibGUgaXNTZWxlY3RlZDpib29sZWFuOy8vID0gZmFsc2U7XG4gICAgQGJpbmRhYmxlIHNlbGVjdGFibGU6Ym9vbGVhbjsvLyA9IGZhbHNlO1xuICAgIEBiaW5kYWJsZSBoYXNJbWFnZTpib29sZWFuOy8vID0gZmFsc2U7XG4gICAgQGJpbmRhYmxlIGlzVW5zZWVuOmJvb2xlYW47Ly8gPSBmYWxzZTtcbiAgICBAYmluZGFibGUgaXNVbnJlYWQ6Ym9vbGVhbjsvLyA9IGZhbHNlO1xuICAgIFxuICAgIGRhcmtUZXh0Q3NzOnN0cmluZz1cImxpZ2h0VGV4dFwiIC8vZGFya1RleHRcbiAgICBzaG93UHJlc2VuY2U6Ym9vbGVhbiA9IGZhbHNlO1xuICAgIHNob3dUaXRsZTpib29sZWFuID0gZmFsc2U7XG4gICAgc2hvd1N0YXR1czpib29sZWFuID0gZmFsc2U7XG4gICAgc2hvd0RldGFpbDpib29sZWFuID0gZmFsc2U7XG4gICAgc2hvd0ltYWdlOmJvb2xlYW4gPSBmYWxzZTtcbiAgICBzZWxlY3RhYmxlQ3NzOnN0cmluZyA9IG51bGw7XG4gICAgXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OkVsZW1lbnQpe1xuICAgICAgICBcbiAgICB9XG4gIFxuXG4gICAgY2xpY2tIYW5kbGVyKCl7XG4gICAgICAgIC8vdGhpcy5lbGVtZW50LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdjbGljaycpKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJjbGlja2VkIHRvZ2dsZXJcIik7XG4gICAgfVxuICAgIGF0dGFjaGVkKCl7XG4gICAgICAgXG4gICAgfVxufVxuXG5leHBvcnQgZW51bSBMaXN0SXRlbVR5cGUge1xuICAgIGRlZmF1bHQsXG4gICAgZG9jdW1lbnQgICAgXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
