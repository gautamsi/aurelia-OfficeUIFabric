System.register(['aurelia-framework', "./Jquery.ContextualMenu"], function(exports_1) {
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
    var OfficeContextualMenu, ListItemType;
    return {
        setters:[
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (_1) {}],
        execute: function() {
            OfficeContextualMenu = (function () {
                function OfficeContextualMenu(element) {
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
                OfficeContextualMenu.prototype.clickHandler = function () {
                    console.log("clicked toggler");
                };
                OfficeContextualMenu.prototype.attached = function () {
                    if (this.navbarChild)
                        return;
                    $(this.ctxMenuRoot).ContextualMenu();
                };
                __decorate([
                    aurelia_framework_1.bindable, 
                    __metadata('design:type', String)
                ], OfficeContextualMenu.prototype, "type", void 0);
                __decorate([
                    aurelia_framework_1.bindable, 
                    __metadata('design:type', String)
                ], OfficeContextualMenu.prototype, "documentIcon", void 0);
                __decorate([
                    aurelia_framework_1.bindable, 
                    __metadata('design:type', String)
                ], OfficeContextualMenu.prototype, "primaryText", void 0);
                __decorate([
                    aurelia_framework_1.bindable, 
                    __metadata('design:type', String)
                ], OfficeContextualMenu.prototype, "secondaryText", void 0);
                __decorate([
                    aurelia_framework_1.bindable, 
                    __metadata('design:type', String)
                ], OfficeContextualMenu.prototype, "tertiaryText", void 0);
                __decorate([
                    aurelia_framework_1.bindable, 
                    __metadata('design:type', String)
                ], OfficeContextualMenu.prototype, "metaText", void 0);
                __decorate([
                    aurelia_framework_1.bindable, 
                    __metadata('design:type', String)
                ], OfficeContextualMenu.prototype, "image", void 0);
                __decorate([
                    aurelia_framework_1.bindable, 
                    __metadata('design:type', String)
                ], OfficeContextualMenu.prototype, "imagealt", void 0);
                __decorate([
                    aurelia_framework_1.bindable, 
                    __metadata('design:type', String)
                ], OfficeContextualMenu.prototype, "tooltip", void 0);
                __decorate([
                    aurelia_framework_1.bindable, 
                    __metadata('design:type', Boolean)
                ], OfficeContextualMenu.prototype, "isSelected", void 0);
                __decorate([
                    aurelia_framework_1.bindable, 
                    __metadata('design:type', Boolean)
                ], OfficeContextualMenu.prototype, "selectable", void 0);
                __decorate([
                    aurelia_framework_1.bindable, 
                    __metadata('design:type', Boolean)
                ], OfficeContextualMenu.prototype, "hasImage", void 0);
                __decorate([
                    aurelia_framework_1.bindable, 
                    __metadata('design:type', Boolean)
                ], OfficeContextualMenu.prototype, "navbarChild", void 0);
                __decorate([
                    aurelia_framework_1.bindable, 
                    __metadata('design:type', Boolean)
                ], OfficeContextualMenu.prototype, "isOpen", void 0);
                __decorate([
                    aurelia_framework_1.bindable, 
                    __metadata('design:type', Boolean)
                ], OfficeContextualMenu.prototype, "multiSelect", void 0);
                OfficeContextualMenu = __decorate([
                    aurelia_framework_1.inject(Element),
                    aurelia_framework_1.customElement('office-contextualmenu'), 
                    __metadata('design:paramtypes', [Element])
                ], OfficeContextualMenu);
                return OfficeContextualMenu;
            })();
            exports_1("OfficeContextualMenu", OfficeContextualMenu);
            (function (ListItemType) {
                ListItemType[ListItemType["default"] = 0] = "default";
                ListItemType[ListItemType["document"] = 1] = "document";
            })(ListItemType || (ListItemType = {}));
            exports_1("ListItemType", ListItemType);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbnRleHR1YWxNZW51L0NvbnRleHR1YWxNZW51LnRzIl0sIm5hbWVzIjpbIk9mZmljZUNvbnRleHR1YWxNZW51IiwiT2ZmaWNlQ29udGV4dHVhbE1lbnUuY29uc3RydWN0b3IiLCJPZmZpY2VDb250ZXh0dWFsTWVudS5jbGlja0hhbmRsZXIiLCJPZmZpY2VDb250ZXh0dWFsTWVudS5hdHRhY2hlZCIsIkxpc3RJdGVtVHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQTJDQTtnQkE2QklBLDhCQUFvQkEsT0FBZUE7b0JBQWZDLFlBQU9BLEdBQVBBLE9BQU9BLENBQVFBO29CQTFCekJBLFNBQUlBLEdBQVdBLFlBQVlBLENBQUNBLFlBQVlBLENBQUNBLE9BQU9BLENBQUNBLENBQUNBO29CQUNsREEsaUJBQVlBLEdBQVVBLGFBQWFBLENBQUNBO29CQUNwQ0EsZ0JBQVdBLEdBQVVBLElBQUlBLENBQUNBO29CQUMxQkEsa0JBQWFBLEdBQVVBLElBQUlBLENBQUNBO29CQUM1QkEsaUJBQVlBLEdBQVVBLElBQUlBLENBQUNBO29CQUMzQkEsYUFBUUEsR0FBVUEsSUFBSUEsQ0FBQ0E7b0JBQ3ZCQSxVQUFLQSxHQUFVQSxJQUFJQSxDQUFDQTtvQkFDcEJBLGFBQVFBLEdBQVVBLElBQUlBLENBQUNBO29CQUN2QkEsWUFBT0EsR0FBVUEsSUFBSUEsQ0FBQ0E7b0JBS3RCQSxnQkFBV0EsR0FBV0EsS0FBS0EsQ0FBQ0E7b0JBSXRDQSxnQkFBV0EsR0FBUUEsV0FBV0EsQ0FBQUE7b0JBQzlCQSxpQkFBWUEsR0FBV0EsS0FBS0EsQ0FBQ0E7b0JBQzdCQSxjQUFTQSxHQUFXQSxLQUFLQSxDQUFDQTtvQkFDMUJBLGVBQVVBLEdBQVdBLEtBQUtBLENBQUNBO29CQUMzQkEsZUFBVUEsR0FBV0EsS0FBS0EsQ0FBQ0E7b0JBQzNCQSxjQUFTQSxHQUFXQSxLQUFLQSxDQUFDQTtvQkFDMUJBLGtCQUFhQSxHQUFVQSxJQUFJQSxDQUFDQTtnQkFLNUJBLENBQUNBO2dCQUdERCwyQ0FBWUEsR0FBWkE7b0JBRUlFLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLGlCQUFpQkEsQ0FBQ0EsQ0FBQ0E7Z0JBQ25DQSxDQUFDQTtnQkFDREYsdUNBQVFBLEdBQVJBO29CQUNJRyxFQUFFQSxDQUFBQSxDQUFDQSxJQUFJQSxDQUFDQSxXQUFXQSxDQUFDQTt3QkFDaEJBLE1BQU1BLENBQUNBO29CQUVaQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxXQUFXQSxDQUFDQSxDQUFDQSxjQUFjQSxFQUFFQSxDQUFDQTtnQkFDeENBLENBQUNBO2dCQXhDREg7b0JBQUNBLDRCQUFRQTs7bUJBQUNBLHNDQUFJQSxVQUE4Q0E7Z0JBQzVEQTtvQkFBQ0EsNEJBQVFBOzttQkFBQ0EsOENBQVlBLFVBQXdCQTtnQkFDOUNBO29CQUFDQSw0QkFBUUE7O21CQUFDQSw2Q0FBV0EsVUFBZUE7Z0JBQ3BDQTtvQkFBQ0EsNEJBQVFBOzttQkFBQ0EsK0NBQWFBLFVBQWVBO2dCQUN0Q0E7b0JBQUNBLDRCQUFRQTs7bUJBQUNBLDhDQUFZQSxVQUFlQTtnQkFDckNBO29CQUFDQSw0QkFBUUE7O21CQUFDQSwwQ0FBUUEsVUFBZUE7Z0JBQ2pDQTtvQkFBQ0EsNEJBQVFBOzttQkFBQ0EsdUNBQUtBLFVBQWVBO2dCQUM5QkE7b0JBQUNBLDRCQUFRQTs7bUJBQUNBLDBDQUFRQSxVQUFlQTtnQkFDakNBO29CQUFDQSw0QkFBUUE7O21CQUFDQSx5Q0FBT0EsVUFBZUE7Z0JBQ2hDQTtvQkFBQ0EsNEJBQVFBOzttQkFBQ0EsNENBQVVBLFVBQVNBO2dCQUM3QkE7b0JBQUNBLDRCQUFRQTs7bUJBQUNBLDRDQUFVQSxVQUFTQTtnQkFDN0JBO29CQUFDQSw0QkFBUUE7O21CQUFDQSwwQ0FBUUEsVUFBU0E7Z0JBRTNCQTtvQkFBQ0EsNEJBQVFBOzttQkFBQ0EsNkNBQVdBLFVBQWlCQTtnQkFDdENBO29CQUFDQSw0QkFBUUE7O21CQUFDQSx3Q0FBTUEsVUFBU0E7Z0JBQ3pCQTtvQkFBQ0EsNEJBQVFBOzttQkFBQ0EsNkNBQVdBLFVBQVNBO2dCQWxCbENBO29CQUFDQSwwQkFBTUEsQ0FBQ0EsT0FBT0EsQ0FBQ0E7b0JBQ2ZBLGlDQUFhQSxDQUFDQSx1QkFBdUJBLENBQUNBOzt5Q0EyQ3RDQTtnQkFBREEsMkJBQUNBO1lBQURBLENBNUNBLEFBNENDQSxJQUFBO1lBNUNELHVEQTRDQyxDQUFBO1lBRUQsV0FBWSxZQUFZO2dCQUNwQkkscURBQU9BLENBQUFBO2dCQUNQQSx1REFBUUEsQ0FBQUE7WUFDWkEsQ0FBQ0EsRUFIVyxZQUFZLEtBQVosWUFBWSxRQUd2QjtvREFBQSIsImZpbGUiOiJDb250ZXh0dWFsTWVudS9Db250ZXh0dWFsTWVudS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3VzdG9tRWxlbWVudCwgYmluZGFibGUsIGluamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG4vKipcbiAqICB3b3JrYXJvdW5kIHdpdGggb2ZmaWNpYWwgZmFicmljIGpzIFxuICAgICAgICAvLyBEZXNlbGVjdCBhbGwgb2YgdGhlIGl0ZW1zIGFuZCBjbG9zZSBhbnkgbWVudXMuXG4gICAgICAgICAgJCgnLm1zLUNvbnRleHR1YWxNZW51LWxpbmsnKVxuICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2lzLXNlbGVjdGVkJylcbiAgICAgICAgICAgICAgLnNpYmxpbmdzKCcubXMtQ29udGV4dHVhbE1lbnUnKVxuICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2lzLW9wZW4nKTtcblxuICAgICAgICAgIC8vIFNlbGVjdCB0aGlzIGl0ZW0uXG4gICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnaXMtc2VsZWN0ZWQnKTtcblxuICAgICAgICAgIC8vIElmIHRoaXMgaXRlbSBoYXMgYSBtZW51LCBvcGVuIGl0LlxuICAgICAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKCdtcy1Db250ZXh0dWFsTWVudS1saW5rLS1oYXNNZW51JykpIHtcbiAgICAgICAgICAgICQodGhpcykuc2libGluZ3MoJy5tcy1Db250ZXh0dWFsTWVudTpmaXJzdCcpLmFkZENsYXNzKCdpcy1vcGVuJyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXBsYWNlIHdpdGggd2l0aCBcbiAqIFxuICogXG4gICAgICAgICAgLy8gRGVzZWxlY3QgYWxsIG9mIHRoZSBpdGVtcyBhbmQgY2xvc2UgYW55IG1lbnVzLlxuICAgICAgICAgICQoJy5tcy1Db250ZXh0dWFsTWVudS1saW5rJylcbiAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdpcy1zZWxlY3RlZCcpXG4gICAgICAgICAgICAgIC5zaWJsaW5ncygnLm1zLUNvbnRleHR1YWxNZW51LWNvbnRhaW5lcicpXG4gICAgICAgICAgICAgIC5maW5kKCcubXMtQ29udGV4dHVhbE1lbnUnKVxuICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2lzLW9wZW4nKTtcblxuICAgICAgICAgIC8vIFNlbGVjdCB0aGlzIGl0ZW0uXG4gICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnaXMtc2VsZWN0ZWQnKTtcblxuICAgICAgICAgIC8vIElmIHRoaXMgaXRlbSBoYXMgYSBtZW51LCBvcGVuIGl0LlxuICAgICAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKCdtcy1Db250ZXh0dWFsTWVudS1saW5rLS1oYXNNZW51JykpIHtcbiAgICAgICAgICAgICQodGhpcykuc2libGluZ3MoJy5tcy1Db250ZXh0dWFsTWVudS1jb250YWluZXInKS5maW5kKCcubXMtQ29udGV4dHVhbE1lbnU6Zmlyc3QnKS5hZGRDbGFzcygnaXMtb3BlbicpO1xuXG4gKiBcbiAqL1xuXG4gXG5cbmltcG9ydCBcIi4vSnF1ZXJ5LkNvbnRleHR1YWxNZW51XCI7XG5cbkBpbmplY3QoRWxlbWVudClcbkBjdXN0b21FbGVtZW50KCdvZmZpY2UtY29udGV4dHVhbG1lbnUnKVxuZXhwb3J0IGNsYXNzIE9mZmljZUNvbnRleHR1YWxNZW51IHtcbiAgICBAYmluZGFibGUgdHlwZTogc3RyaW5nID0gTGlzdEl0ZW1UeXBlW0xpc3RJdGVtVHlwZS5kZWZhdWx0XTtcbiAgICBAYmluZGFibGUgZG9jdW1lbnRJY29uOnN0cmluZyA9IFwiZG9jdW1lbnRQREZcIjtcbiAgICBAYmluZGFibGUgcHJpbWFyeVRleHQ6c3RyaW5nID0gbnVsbDtcbiAgICBAYmluZGFibGUgc2Vjb25kYXJ5VGV4dDpzdHJpbmcgPSBudWxsO1xuICAgIEBiaW5kYWJsZSB0ZXJ0aWFyeVRleHQ6c3RyaW5nID0gbnVsbDtcbiAgICBAYmluZGFibGUgbWV0YVRleHQ6c3RyaW5nID0gbnVsbDtcbiAgICBAYmluZGFibGUgaW1hZ2U6c3RyaW5nID0gbnVsbDtcbiAgICBAYmluZGFibGUgaW1hZ2VhbHQ6c3RyaW5nID0gbnVsbDtcbiAgICBAYmluZGFibGUgdG9vbHRpcDpzdHJpbmcgPSBudWxsO1xuICAgIEBiaW5kYWJsZSBpc1NlbGVjdGVkOmJvb2xlYW47Ly8gPSBmYWxzZTtcbiAgICBAYmluZGFibGUgc2VsZWN0YWJsZTpib29sZWFuOy8vID0gZmFsc2U7XG4gICAgQGJpbmRhYmxlIGhhc0ltYWdlOmJvb2xlYW47Ly8gPSBmYWxzZTtcbiAgICBcbiAgICBAYmluZGFibGUgbmF2YmFyQ2hpbGQ6Ym9vbGVhbiA9IGZhbHNlO1xuICAgIEBiaW5kYWJsZSBpc09wZW46Ym9vbGVhbjsvLyA9IGZhbHNlO1xuICAgIEBiaW5kYWJsZSBtdWx0aVNlbGVjdDpib29sZWFuOy8vID0gZmFsc2U7XG5cbiAgICBkYXJrVGV4dENzczpzdHJpbmc9XCJsaWdodFRleHRcIiAvL2RhcmtUZXh0XG4gICAgc2hvd1ByZXNlbmNlOmJvb2xlYW4gPSBmYWxzZTtcbiAgICBzaG93VGl0bGU6Ym9vbGVhbiA9IGZhbHNlO1xuICAgIHNob3dTdGF0dXM6Ym9vbGVhbiA9IGZhbHNlO1xuICAgIHNob3dEZXRhaWw6Ym9vbGVhbiA9IGZhbHNlO1xuICAgIHNob3dJbWFnZTpib29sZWFuID0gZmFsc2U7XG4gICAgc2VsZWN0YWJsZUNzczpzdHJpbmcgPSBudWxsO1xuICAgIFxuICAgIGN0eE1lbnVSb290OkVsZW1lbnQ7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OkVsZW1lbnQpe1xuICAgICAgICBcbiAgICB9XG4gIFxuXG4gICAgY2xpY2tIYW5kbGVyKCl7XG4gICAgICAgIC8vdGhpcy5lbGVtZW50LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdjbGljaycpKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJjbGlja2VkIHRvZ2dsZXJcIik7XG4gICAgfVxuICAgIGF0dGFjaGVkKCl7XG4gICAgICAgIGlmKHRoaXMubmF2YmFyQ2hpbGQpIFxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBcbiAgICAgICAkKHRoaXMuY3R4TWVudVJvb3QpLkNvbnRleHR1YWxNZW51KCk7XG4gICAgfVxufVxuXG5leHBvcnQgZW51bSBMaXN0SXRlbVR5cGUge1xuICAgIGRlZmF1bHQsXG4gICAgZG9jdW1lbnQgICAgXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
