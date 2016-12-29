System.register(['aurelia-framework', "./Jquery.ContextualMenu", "../Navbar/NavBarItem"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var aurelia_framework_1, NavBarItem_1;
    var OfficeContextualMenu;
    return {
        setters:[
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (_1) {},
            function (NavBarItem_1_1) {
                NavBarItem_1 = NavBarItem_1_1;
            }],
        execute: function() {
            OfficeContextualMenu = (function () {
                function OfficeContextualMenu(element, $parentNavBarItem) {
                    this.element = element;
                    this.$parentNavBarItem = $parentNavBarItem;
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
                OfficeContextualMenu.prototype.attached = function () {
                    if (this.navbarChild)
                        return;
                    $(this.ctxMenuRoot).ContextualMenu();
                };
                OfficeContextualMenu.prototype.closeDeselectChild = function (sourceMenuItem) {
                    this.$menuItems.forEach(function (item, index) {
                        if (item != sourceMenuItem) {
                            item.closeDeselectItem();
                        }
                    });
                };
                __decorate([
                    aurelia_framework_1.bindable, 
                    __metadata('design:type', String)
                ], OfficeContextualMenu.prototype, "tooltip", void 0);
                __decorate([
                    aurelia_framework_1.children('office-contextualmenu-item'), 
                    __metadata('design:type', Array)
                ], OfficeContextualMenu.prototype, "$menuItems", void 0);
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
                    aurelia_framework_1.inject(Element, NavBarItem_1.OfficeNavBarItem),
                    aurelia_framework_1.customElement('office-contextualmenu'), 
                    __metadata('design:paramtypes', [Element, Object])
                ], OfficeContextualMenu);
                return OfficeContextualMenu;
            })();
            exports_1("OfficeContextualMenu", OfficeContextualMenu);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbnRleHR1YWxNZW51L0NvbnRleHR1YWxNZW51LnRzIl0sIm5hbWVzIjpbIk9mZmljZUNvbnRleHR1YWxNZW51IiwiT2ZmaWNlQ29udGV4dHVhbE1lbnUuY29uc3RydWN0b3IiLCJPZmZpY2VDb250ZXh0dWFsTWVudS5hdHRhY2hlZCIsIk9mZmljZUNvbnRleHR1YWxNZW51LmNsb3NlRGVzZWxlY3RDaGlsZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQThDQTtnQkFxQklBLDhCQUFvQkEsT0FBZUEsRUFBVUEsaUJBQWlCQTtvQkFBMUNDLFlBQU9BLEdBQVBBLE9BQU9BLENBQVFBO29CQUFVQSxzQkFBaUJBLEdBQWpCQSxpQkFBaUJBLENBQUFBO29CQWxCcERBLFlBQU9BLEdBQVVBLElBQUlBLENBQUNBO29CQUl0QkEsZ0JBQVdBLEdBQVdBLEtBQUtBLENBQUNBO29CQUt0Q0EsZ0JBQVdBLEdBQVFBLFdBQVdBLENBQUFBO29CQUM5QkEsaUJBQVlBLEdBQVdBLEtBQUtBLENBQUNBO29CQUM3QkEsY0FBU0EsR0FBV0EsS0FBS0EsQ0FBQ0E7b0JBQzFCQSxlQUFVQSxHQUFXQSxLQUFLQSxDQUFDQTtvQkFDM0JBLGVBQVVBLEdBQVdBLEtBQUtBLENBQUNBO29CQUMzQkEsY0FBU0EsR0FBV0EsS0FBS0EsQ0FBQ0E7b0JBQzFCQSxrQkFBYUEsR0FBVUEsSUFBSUEsQ0FBQ0E7Z0JBSzVCQSxDQUFDQTtnQkFFREQsdUNBQVFBLEdBQVJBO29CQUNJRSxFQUFFQSxDQUFBQSxDQUFDQSxJQUFJQSxDQUFDQSxXQUFXQSxDQUFDQTt3QkFDaEJBLE1BQU1BLENBQUNBO29CQUVaQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxXQUFXQSxDQUFDQSxDQUFDQSxjQUFjQSxFQUFFQSxDQUFDQTtnQkFDeENBLENBQUNBO2dCQUNERixpREFBa0JBLEdBQWxCQSxVQUFtQkEsY0FBdUNBO29CQUN0REcsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsVUFBQ0EsSUFBSUEsRUFBQ0EsS0FBS0E7d0JBQy9CQSxFQUFFQSxDQUFBQSxDQUFDQSxJQUFJQSxJQUFJQSxjQUFjQSxDQUFDQSxDQUFBQSxDQUFDQTs0QkFDdkJBLElBQUlBLENBQUNBLGlCQUFpQkEsRUFBRUEsQ0FBQ0E7d0JBQzdCQSxDQUFDQTtvQkFDTEEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ1BBLENBQUNBO2dCQWxDREg7b0JBQUNBLDRCQUFRQTs7bUJBQUNBLHlDQUFPQSxVQUFlQTtnQkFFaENBO29CQUFDQSw0QkFBUUEsQ0FBQ0EsNEJBQTRCQSxDQUFDQTs7bUJBQUNBLDRDQUFVQSxVQUE0QkE7Z0JBRTlFQTtvQkFBQ0EsNEJBQVFBOzttQkFBQ0EsNkNBQVdBLFVBQWlCQTtnQkFDdENBO29CQUFDQSw0QkFBUUE7O21CQUFDQSx3Q0FBTUEsVUFBU0E7Z0JBQ3pCQTtvQkFBQ0EsNEJBQVFBOzttQkFBQ0EsNkNBQVdBLFVBQVNBO2dCQVRsQ0E7b0JBQUNBLDBCQUFNQSxDQUFDQSxPQUFPQSxFQUFFQSw2QkFBZ0JBLENBQUNBO29CQUNqQ0EsaUNBQWFBLENBQUNBLHVCQUF1QkEsQ0FBQ0E7O3lDQXFDdENBO2dCQUFEQSwyQkFBQ0E7WUFBREEsQ0F0Q0EsQUFzQ0NBLElBQUE7WUF0Q0QsdURBc0NDLENBQUEiLCJmaWxlIjoiQ29udGV4dHVhbE1lbnUvQ29udGV4dHVhbE1lbnUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2N1c3RvbUVsZW1lbnQsIGJpbmRhYmxlLCBpbmplY3QsIGNoaWxkLCBjaGlsZHJlbiwgdXNlU2hhZG93RE9NfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcblxyXG4vKipcclxuICogIHdvcmthcm91bmQgd2l0aCBvZmZpY2lhbCBmYWJyaWMganMgXHJcbiAgICAgICAgLy8gRGVzZWxlY3QgYWxsIG9mIHRoZSBpdGVtcyBhbmQgY2xvc2UgYW55IG1lbnVzLlxyXG4gICAgICAgICAgJCgnLm1zLUNvbnRleHR1YWxNZW51LWxpbmsnKVxyXG4gICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnaXMtc2VsZWN0ZWQnKVxyXG4gICAgICAgICAgICAgIC5zaWJsaW5ncygnLm1zLUNvbnRleHR1YWxNZW51JylcclxuICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2lzLW9wZW4nKTtcclxuXHJcbiAgICAgICAgICAvLyBTZWxlY3QgdGhpcyBpdGVtLlxyXG4gICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnaXMtc2VsZWN0ZWQnKTtcclxuXHJcbiAgICAgICAgICAvLyBJZiB0aGlzIGl0ZW0gaGFzIGEgbWVudSwgb3BlbiBpdC5cclxuICAgICAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKCdtcy1Db250ZXh0dWFsTWVudS1saW5rLS1oYXNNZW51JykpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5zaWJsaW5ncygnLm1zLUNvbnRleHR1YWxNZW51OmZpcnN0JykuYWRkQ2xhc3MoJ2lzLW9wZW4nKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcmVwbGFjZSB3aXRoIHdpdGggXHJcbiAqIFxyXG4gKiBcclxuICAgICAgICAgIC8vIERlc2VsZWN0IGFsbCBvZiB0aGUgaXRlbXMgYW5kIGNsb3NlIGFueSBtZW51cy5cclxuICAgICAgICAgICQoJy5tcy1Db250ZXh0dWFsTWVudS1saW5rJylcclxuICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2lzLXNlbGVjdGVkJylcclxuICAgICAgICAgICAgICAuc2libGluZ3MoJy5tcy1Db250ZXh0dWFsTWVudS1jb250YWluZXInKVxyXG4gICAgICAgICAgICAgIC5maW5kKCcubXMtQ29udGV4dHVhbE1lbnUnKVxyXG4gICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnaXMtb3BlbicpO1xyXG5cclxuICAgICAgICAgIC8vIFNlbGVjdCB0aGlzIGl0ZW0uXHJcbiAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdpcy1zZWxlY3RlZCcpO1xyXG5cclxuICAgICAgICAgIC8vIElmIHRoaXMgaXRlbSBoYXMgYSBtZW51LCBvcGVuIGl0LlxyXG4gICAgICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoJ21zLUNvbnRleHR1YWxNZW51LWxpbmstLWhhc01lbnUnKSkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnNpYmxpbmdzKCcubXMtQ29udGV4dHVhbE1lbnUtY29udGFpbmVyJykuZmluZCgnLm1zLUNvbnRleHR1YWxNZW51OmZpcnN0JykuYWRkQ2xhc3MoJ2lzLW9wZW4nKTtcclxuXHJcbiAqIFxyXG4gKi9cclxuXHJcbiBcclxuXHJcbmltcG9ydCBcIi4vSnF1ZXJ5LkNvbnRleHR1YWxNZW51XCI7XHJcbmltcG9ydCB7T2ZmaWNlTmF2QmFySXRlbX0gZnJvbSBcIi4uL05hdmJhci9OYXZCYXJJdGVtXCI7XHJcbmltcG9ydCB7T2ZmaWNlQ29udGV4dHVhbE1lbnVJdGVtfSBmcm9tIFwiLi9Db250ZXh0dWFsTWVudUl0ZW1cIjtcclxuXHJcbi8vQHVzZVNoYWRvd0RPTSgpXHJcbkBpbmplY3QoRWxlbWVudCwgT2ZmaWNlTmF2QmFySXRlbSlcclxuQGN1c3RvbUVsZW1lbnQoJ29mZmljZS1jb250ZXh0dWFsbWVudScpXHJcbmV4cG9ydCBjbGFzcyBPZmZpY2VDb250ZXh0dWFsTWVudSB7XHJcbiAgICBAYmluZGFibGUgdG9vbHRpcDpzdHJpbmcgPSBudWxsO1xyXG4gICAgXHJcbiAgICBAY2hpbGRyZW4oJ29mZmljZS1jb250ZXh0dWFsbWVudS1pdGVtJykgJG1lbnVJdGVtczpPZmZpY2VDb250ZXh0dWFsTWVudUl0ZW1bXTtcclxuICAgIFxyXG4gICAgQGJpbmRhYmxlIG5hdmJhckNoaWxkOmJvb2xlYW4gPSBmYWxzZTtcclxuICAgIEBiaW5kYWJsZSBpc09wZW46Ym9vbGVhbjsvLyA9IGZhbHNlO1xyXG4gICAgQGJpbmRhYmxlIG11bHRpU2VsZWN0OmJvb2xlYW47Ly8gPSBmYWxzZTtcclxuICAgIFxyXG5cclxuICAgIGRhcmtUZXh0Q3NzOnN0cmluZz1cImxpZ2h0VGV4dFwiIC8vZGFya1RleHRcclxuICAgIHNob3dQcmVzZW5jZTpib29sZWFuID0gZmFsc2U7XHJcbiAgICBzaG93VGl0bGU6Ym9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc2hvd1N0YXR1czpib29sZWFuID0gZmFsc2U7XHJcbiAgICBzaG93RGV0YWlsOmJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHNob3dJbWFnZTpib29sZWFuID0gZmFsc2U7XHJcbiAgICBzZWxlY3RhYmxlQ3NzOnN0cmluZyA9IG51bGw7XHJcbiAgICBcclxuICAgIGN0eE1lbnVSb290OkVsZW1lbnQ7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6RWxlbWVudCwgcHJpdmF0ZSAkcGFyZW50TmF2QmFySXRlbSl7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgYXR0YWNoZWQoKXtcclxuICAgICAgICBpZih0aGlzLm5hdmJhckNoaWxkKSBcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIFxyXG4gICAgICAgJCh0aGlzLmN0eE1lbnVSb290KS5Db250ZXh0dWFsTWVudSgpO1xyXG4gICAgfVxyXG4gICAgY2xvc2VEZXNlbGVjdENoaWxkKHNvdXJjZU1lbnVJdGVtOk9mZmljZUNvbnRleHR1YWxNZW51SXRlbSl7XHJcbiAgICAgICAgdGhpcy4kbWVudUl0ZW1zLmZvckVhY2goKGl0ZW0saW5kZXgpPT57XHJcbiAgICAgICAgICAgIGlmKGl0ZW0gIT0gc291cmNlTWVudUl0ZW0pe1xyXG4gICAgICAgICAgICAgICAgaXRlbS5jbG9zZURlc2VsZWN0SXRlbSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
