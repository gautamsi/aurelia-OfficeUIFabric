var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-framework', "./Jquery.NavBar"], function (require, exports, aurelia_framework_1) {
    var OfficeNavBar = (function () {
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
            aurelia_framework_1.children('.ms-NavBar-item--search'), 
            __metadata('design:type', Array)
        ], OfficeNavBar.prototype, "$searchBoxes", void 0);
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
    exports.OfficeNavBar = OfficeNavBar;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk5hdkJhci9OYXZCYXIudHMiXSwibmFtZXMiOlsiT2ZmaWNlTmF2QmFyIiwiT2ZmaWNlTmF2QmFyLmNvbnN0cnVjdG9yIiwiT2ZmaWNlTmF2QmFyLmNsaWNrSGFuZGxlciIsIk9mZmljZU5hdkJhci5hdHRhY2hlZCIsIk9mZmljZU5hdkJhci50b2dnbGVOYXZCYXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFTQTtRQVVJQSxzQkFBb0JBLE9BQWdCQTtZQUFoQkMsWUFBT0EsR0FBUEEsT0FBT0EsQ0FBU0E7WUFOcENBLFdBQU1BLEdBQVdBLEtBQUtBLENBQUNBO1FBT3ZCQSxDQUFDQTtRQUdERCxtQ0FBWUEsR0FBWkE7UUFHQUUsQ0FBQ0E7UUFDREYsK0JBQVFBLEdBQVJBO1lBQUFHLGlCQVFDQTtZQVBHQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxXQUFXQSxDQUFDQSxDQUFDQSxNQUFNQSxFQUFFQSxDQUFDQTtZQUM3QkEsTUFBTUEsQ0FBQ0E7WUFDUEEsUUFBUUEsQ0FBQ0EsZ0JBQWdCQSxDQUFDQSxPQUFPQSxFQUFDQTtnQkFDOUJBLEtBQUlBLENBQUNBLFNBQVNBLENBQUNBLE9BQU9BLENBQUNBLFVBQUNBLElBQUlBLEVBQUNBLEtBQUtBO2dCQUVsQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDUEEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDUEEsQ0FBQ0E7UUFFREgsbUNBQVlBLEdBQVpBLFVBQWFBLE1BQWFBO1FBRzFCSSxDQUFDQTtRQXpCREo7WUFBQ0EsNEJBQVFBLENBQUNBLHlCQUF5QkEsQ0FBQ0E7O1dBQUlBLHNDQUFZQSxVQUFZQTtRQUNoRUE7WUFBQ0EsNEJBQVFBLENBQUNBLG9CQUFvQkEsQ0FBQ0E7O1dBQUdBLG1DQUFTQSxVQUFxQkE7UUFQcEVBO1lBQUNBLDBCQUFNQSxDQUFDQSxPQUFPQSxDQUFDQTtZQUNmQSxpQ0FBYUEsQ0FBQ0EsZUFBZUEsQ0FBQ0E7O3lCQWdDOUJBO1FBQURBLG1CQUFDQTtJQUFEQSxDQWpDQSxBQWlDQ0EsSUFBQTtJQS9CWSxvQkFBWSxlQStCeEIsQ0FBQSIsImZpbGUiOiJOYXZCYXIvTmF2QmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjdXN0b21FbGVtZW50LCBiaW5kYWJsZSwgaW5qZWN0LCBjaGlsZCwgY2hpbGRyZW4sIHVzZVNoYWRvd0RPTSB9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuLy9pbXBvcnQge2JpbmRpbmdNb2RlIH0gZnJvbSAnYXVyZWxpYS1iaW5kaW5nJztcclxuLyoqIHdvcmthcm91bmQsIGZpeCBsaW5lIHdpdGggJCh0aGlzKS5jaGlsZHJlbignLm1zLUNvbnRleHR1YWxNZW51OmZpcnN0JykudG9nZ2xlQ2xhc3MoJ2lzLW9wZW4nKTsgdG8gJCh0aGlzKS5maW5kKCcubXMtQ29udGV4dHVhbE1lbnU6Zmlyc3QnKS50b2dnbGVDbGFzcygnaXMtb3BlbicpOyAqL1xyXG4vKiogd29ya2Fyb3VuZCBmb3IgbWVudSBpdGVtIHNsZWN0aW9uIGNoYW5nZSBhZnRlciBjbGljayAsIGNoYW5nZSAkKHRoaXMpLnNpYmxpbmdzKCcubXMtTmF2QmFyLWl0ZW0nKS5yZW1vdmVDbGFzcygnaXMtc2VsZWN0ZWQnKTsgd2l0aCAgJG5hdkJhci5maW5kKCcubXMtTmF2QmFyLWl0ZW0nKS5yZW1vdmVDbGFzcygnaXMtc2VsZWN0ZWQnKTsgKi9cclxuaW1wb3J0IFwiLi9KcXVlcnkuTmF2QmFyXCI7XHJcbmltcG9ydCB7T2ZmaWNlTmF2QmFySXRlbX0gZnJvbSBcIi4vTmF2QmFySXRlbVwiO1xyXG5cclxuXHJcbi8vQHVzZVNoYWRvd0RPTSgpXHJcbkBpbmplY3QoRWxlbWVudClcclxuQGN1c3RvbUVsZW1lbnQoJ29mZmljZS1uYXZiYXInKVxyXG5leHBvcnQgY2xhc3MgT2ZmaWNlTmF2QmFyIHtcclxuICAgIFxyXG4gICAgaXNPcGVuOmJvb2xlYW4gPSBmYWxzZTtcclxuICAgICRuYXZCYXJSb290OiBFbGVtZW50O1xyXG4gICAgQGNoaWxkcmVuKCcubXMtTmF2QmFyLWl0ZW0tLXNlYXJjaCcpICAgICRzZWFyY2hCb3hlczogRWxlbWVudFtdOyAgICBcclxuICAgIEBjaGlsZHJlbignb2ZmaWNlLW5hdmJhci1pdGVtJykgICAkbmF2SXRlbXM6IE9mZmljZU5hdkJhckl0ZW1bXTtcclxuICAgIFxyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnQpIHtcclxuICAgIH1cclxuXHJcblxyXG4gICAgY2xpY2tIYW5kbGVyKCkge1xyXG4gICAgICAgIC8vdGhpcy5lbGVtZW50LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdjbGljaycpKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwiY2xpY2tlZCB0b2dnbGVyXCIpO1xyXG4gICAgfVxyXG4gICAgYXR0YWNoZWQoKSB7XHJcbiAgICAgICAgJCh0aGlzLiRuYXZCYXJSb290KS5OYXZCYXIoKTtcclxuICAgICAgICByZXR1cm47IC8vdW50aWwgc2hhZG93ZG9tIGFuZCBzdHlsaW5nIGlzIGZpZ3VyZWRcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKT0+e1xyXG4gICAgICAgICAgICB0aGlzLiRuYXZJdGVtcy5mb3JFYWNoKChpdGVtLGluZGV4KT0+e1xyXG4gICAgICAgICAgICAgICAvL2l0ZW0uXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICB0b2dnbGVOYXZCYXIoJGV2ZW50OiBFdmVudCl7XHJcbiAgICAgICAgLy8gdGhpcy5pc09wZW4gPSAhdGhpcy5pc09wZW47XHJcbiAgICAgICAgLy8gJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
