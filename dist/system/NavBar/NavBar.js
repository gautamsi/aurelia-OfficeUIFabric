System.register(['aurelia-framework', "./Jquery.NavBar"], function(exports_1) {
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
    var OfficeNavBar;
    return {
        setters:[
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (_1) {}],
        execute: function() {
            OfficeNavBar = (function () {
                function OfficeNavBar(element) {
                    this.element = element;
                    this.isOpen = false;
                }
                OfficeNavBar.prototype.clickHandler = function () {
                };
                OfficeNavBar.prototype.attached = function () {
                    var _this = this;
                    $(this.$navBarRoot).NavBar();
                    return;
                    document.addEventListener("click", function () {
                        _this.$navItems.forEach(function (item, index) {
                        });
                    });
                };
                OfficeNavBar.prototype.toggleNavBar = function ($event) {
                };
                __decorate([
                    aurelia_framework_1.children('ms-NavBar-item--search'), 
                    __metadata('design:type', Array)
                ], OfficeNavBar.prototype, "$searchBoxes", void 0);
                __decorate([
                    aurelia_framework_1.children('.ms-NavBar-item'), 
                    __metadata('design:type', Array)
                ], OfficeNavBar.prototype, "$searchBox", void 0);
                __decorate([
                    aurelia_framework_1.children('li'), 
                    __metadata('design:type', Array)
                ], OfficeNavBar.prototype, "lis", void 0);
                __decorate([
                    aurelia_framework_1.children('div'), 
                    __metadata('design:type', Array)
                ], OfficeNavBar.prototype, "divs", void 0);
                __decorate([
                    aurelia_framework_1.children('office-navbar-item'), 
                    __metadata('design:type', Array)
                ], OfficeNavBar.prototype, "$navItems", void 0);
                OfficeNavBar = __decorate([
                    aurelia_framework_1.inject(Element),
                    aurelia_framework_1.customElement('office-navbar'), 
                    __metadata('design:paramtypes', [Element])
                ], OfficeNavBar);
                return OfficeNavBar;
            })();
            exports_1("OfficeNavBar", OfficeNavBar);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk5hdkJhci9OYXZCYXIudHMiXSwibmFtZXMiOlsiT2ZmaWNlTmF2QmFyIiwiT2ZmaWNlTmF2QmFyLmNvbnN0cnVjdG9yIiwiT2ZmaWNlTmF2QmFyLmNsaWNrSGFuZGxlciIsIk9mZmljZU5hdkJhci5hdHRhY2hlZCIsIk9mZmljZU5hdkJhci50b2dnbGVOYXZCYXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFTQTtnQkFjSUEsc0JBQW9CQSxPQUFnQkE7b0JBQWhCQyxZQUFPQSxHQUFQQSxPQUFPQSxDQUFTQTtvQkFWcENBLFdBQU1BLEdBQVdBLEtBQUtBLENBQUNBO2dCQVd2QkEsQ0FBQ0E7Z0JBR0RELG1DQUFZQSxHQUFaQTtnQkFHQUUsQ0FBQ0E7Z0JBQ0RGLCtCQUFRQSxHQUFSQTtvQkFBQUcsaUJBUUNBO29CQVBHQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxXQUFXQSxDQUFDQSxDQUFDQSxNQUFNQSxFQUFFQSxDQUFDQTtvQkFDN0JBLE1BQU1BLENBQUNBO29CQUNQQSxRQUFRQSxDQUFDQSxnQkFBZ0JBLENBQUNBLE9BQU9BLEVBQUNBO3dCQUM5QkEsS0FBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsVUFBQ0EsSUFBSUEsRUFBQ0EsS0FBS0E7d0JBRWxDQSxDQUFDQSxDQUFDQSxDQUFDQTtvQkFDUEEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ1BBLENBQUNBO2dCQUVESCxtQ0FBWUEsR0FBWkEsVUFBYUEsTUFBYUE7Z0JBRzFCSSxDQUFDQTtnQkE3QkRKO29CQUFDQSw0QkFBUUEsQ0FBQ0Esd0JBQXdCQSxDQUFDQTs7bUJBQUlBLHNDQUFZQSxVQUFZQTtnQkFDL0RBO29CQUFDQSw0QkFBUUEsQ0FBQ0EsaUJBQWlCQSxDQUFDQTs7bUJBQUlBLG9DQUFVQSxVQUFZQTtnQkFDdERBO29CQUFDQSw0QkFBUUEsQ0FBQ0EsSUFBSUEsQ0FBQ0E7O21CQUFJQSw2QkFBR0EsVUFBWUE7Z0JBQ2xDQTtvQkFBQ0EsNEJBQVFBLENBQUNBLEtBQUtBLENBQUNBOzttQkFBSUEsOEJBQUlBLFVBQVlBO2dCQUNwQ0E7b0JBQUNBLDRCQUFRQSxDQUFDQSxvQkFBb0JBLENBQUNBOzttQkFBR0EsbUNBQVNBLFVBQXFCQTtnQkFWcEVBO29CQUFDQSwwQkFBTUEsQ0FBQ0EsT0FBT0EsQ0FBQ0E7b0JBQ2ZBLGlDQUFhQSxDQUFDQSxlQUFlQSxDQUFDQTs7aUNBb0M5QkE7Z0JBQURBLG1CQUFDQTtZQUFEQSxDQXJDQSxBQXFDQ0EsSUFBQTtZQXJDRCx1Q0FxQ0MsQ0FBQSIsImZpbGUiOiJOYXZCYXIvTmF2QmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjdXN0b21FbGVtZW50LCBiaW5kYWJsZSwgaW5qZWN0LCBjaGlsZCwgY2hpbGRyZW4sIHVzZVNoYWRvd0RPTSB9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuLy9pbXBvcnQge2JpbmRpbmdNb2RlIH0gZnJvbSAnYXVyZWxpYS1iaW5kaW5nJztcclxuLyoqIHdvcmthcm91bmQsIGZpeCBsaW5lIHdpdGggJCh0aGlzKS5jaGlsZHJlbignLm1zLUNvbnRleHR1YWxNZW51OmZpcnN0JykudG9nZ2xlQ2xhc3MoJ2lzLW9wZW4nKTsgdG8gJCh0aGlzKS5maW5kKCcubXMtQ29udGV4dHVhbE1lbnU6Zmlyc3QnKS50b2dnbGVDbGFzcygnaXMtb3BlbicpOyAqL1xyXG4vKiogd29ya2Fyb3VuZCBmb3IgbWVudSBpdGVtIHNsZWN0aW9uIGNoYW5nZSBhZnRlciBjbGljayAsIGNoYW5nZSAkKHRoaXMpLnNpYmxpbmdzKCcubXMtTmF2QmFyLWl0ZW0nKS5yZW1vdmVDbGFzcygnaXMtc2VsZWN0ZWQnKTsgd2l0aCAgJG5hdkJhci5maW5kKCcubXMtTmF2QmFyLWl0ZW0nKS5yZW1vdmVDbGFzcygnaXMtc2VsZWN0ZWQnKTsgKi9cclxuaW1wb3J0IFwiLi9KcXVlcnkuTmF2QmFyXCI7XHJcbmltcG9ydCB7T2ZmaWNlTmF2QmFySXRlbX0gZnJvbSBcIi4vTmF2QmFySXRlbVwiO1xyXG5cclxuXHJcbi8vQHVzZVNoYWRvd0RPTSgpXHJcbkBpbmplY3QoRWxlbWVudClcclxuQGN1c3RvbUVsZW1lbnQoJ29mZmljZS1uYXZiYXInKVxyXG5leHBvcnQgY2xhc3MgT2ZmaWNlTmF2QmFyIHtcclxuICAgIFxyXG4gICAgaXNPcGVuOmJvb2xlYW4gPSBmYWxzZTtcclxuICAgICRuYXZCYXJSb290OiBFbGVtZW50O1xyXG4gICAgQGNoaWxkcmVuKCdtcy1OYXZCYXItaXRlbS0tc2VhcmNoJykgICAgJHNlYXJjaEJveGVzOiBFbGVtZW50W107XHJcbiAgICBAY2hpbGRyZW4oJy5tcy1OYXZCYXItaXRlbScpICAgICRzZWFyY2hCb3g6IEVsZW1lbnRbXTtcclxuICAgIEBjaGlsZHJlbignbGknKSAgICBsaXM6IEVsZW1lbnRbXTtcclxuICAgIEBjaGlsZHJlbignZGl2JykgICAgZGl2czogRWxlbWVudFtdO1xyXG4gICAgQGNoaWxkcmVuKCdvZmZpY2UtbmF2YmFyLWl0ZW0nKSAgICRuYXZJdGVtczogT2ZmaWNlTmF2QmFySXRlbVtdO1xyXG4gICAgXHJcbiAgICBcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50KSB7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNsaWNrSGFuZGxlcigpIHtcclxuICAgICAgICAvL3RoaXMuZWxlbWVudC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2xpY2snKSk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImNsaWNrZWQgdG9nZ2xlclwiKTtcclxuICAgIH1cclxuICAgIGF0dGFjaGVkKCkge1xyXG4gICAgICAgICQodGhpcy4kbmF2QmFyUm9vdCkuTmF2QmFyKCk7XHJcbiAgICAgICAgcmV0dXJuOyAvL3VudGlsIHNoYWRvd2RvbSBhbmQgc3R5bGluZyBpcyBmaWd1cmVkXHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKCk9PntcclxuICAgICAgICAgICAgdGhpcy4kbmF2SXRlbXMuZm9yRWFjaCgoaXRlbSxpbmRleCk9PntcclxuICAgICAgICAgICAgICAgLy9pdGVtLlxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgdG9nZ2xlTmF2QmFyKCRldmVudDogRXZlbnQpe1xyXG4gICAgICAgIC8vIHRoaXMuaXNPcGVuID0gIXRoaXMuaXNPcGVuO1xyXG4gICAgICAgIC8vICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH1cclxuXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
