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
    exports.OfficeNavBar = OfficeNavBar;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk5hdkJhci9OYXZCYXIudHMiXSwibmFtZXMiOlsiT2ZmaWNlTmF2QmFyIiwiT2ZmaWNlTmF2QmFyLmNvbnN0cnVjdG9yIiwiT2ZmaWNlTmF2QmFyLmNsaWNrSGFuZGxlciIsIk9mZmljZU5hdkJhci5hdHRhY2hlZCIsIk9mZmljZU5hdkJhci50b2dnbGVOYXZCYXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFTQTtRQWNJQSxzQkFBb0JBLE9BQWdCQTtZQUFoQkMsWUFBT0EsR0FBUEEsT0FBT0EsQ0FBU0E7WUFWcENBLFdBQU1BLEdBQVdBLEtBQUtBLENBQUNBO1FBV3ZCQSxDQUFDQTtRQUdERCxtQ0FBWUEsR0FBWkE7UUFHQUUsQ0FBQ0E7UUFDREYsK0JBQVFBLEdBQVJBO1lBQUFHLGlCQVFDQTtZQVBHQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxXQUFXQSxDQUFDQSxDQUFDQSxNQUFNQSxFQUFFQSxDQUFDQTtZQUM3QkEsTUFBTUEsQ0FBQ0E7WUFDUEEsUUFBUUEsQ0FBQ0EsZ0JBQWdCQSxDQUFDQSxPQUFPQSxFQUFDQTtnQkFDOUJBLEtBQUlBLENBQUNBLFNBQVNBLENBQUNBLE9BQU9BLENBQUNBLFVBQUNBLElBQUlBLEVBQUNBLEtBQUtBO2dCQUVsQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDUEEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDUEEsQ0FBQ0E7UUFFREgsbUNBQVlBLEdBQVpBLFVBQWFBLE1BQWFBO1FBRzFCSSxDQUFDQTtRQTdCREo7WUFBQ0EsNEJBQVFBLENBQUNBLHdCQUF3QkEsQ0FBQ0E7O1dBQUlBLHNDQUFZQSxVQUFZQTtRQUMvREE7WUFBQ0EsNEJBQVFBLENBQUNBLGlCQUFpQkEsQ0FBQ0E7O1dBQUlBLG9DQUFVQSxVQUFZQTtRQUN0REE7WUFBQ0EsNEJBQVFBLENBQUNBLElBQUlBLENBQUNBOztXQUFJQSw2QkFBR0EsVUFBWUE7UUFDbENBO1lBQUNBLDRCQUFRQSxDQUFDQSxLQUFLQSxDQUFDQTs7V0FBSUEsOEJBQUlBLFVBQVlBO1FBQ3BDQTtZQUFDQSw0QkFBUUEsQ0FBQ0Esb0JBQW9CQSxDQUFDQTs7V0FBR0EsbUNBQVNBLFVBQXFCQTtRQVZwRUE7WUFBQ0EsMEJBQU1BLENBQUNBLE9BQU9BLENBQUNBO1lBQ2ZBLGlDQUFhQSxDQUFDQSxlQUFlQSxDQUFDQTs7eUJBb0M5QkE7UUFBREEsbUJBQUNBO0lBQURBLENBckNBLEFBcUNDQSxJQUFBO0lBbkNZLG9CQUFZLGVBbUN4QixDQUFBIiwiZmlsZSI6Ik5hdkJhci9OYXZCYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2N1c3RvbUVsZW1lbnQsIGJpbmRhYmxlLCBpbmplY3QsIGNoaWxkLCBjaGlsZHJlbiwgdXNlU2hhZG93RE9NIH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG4vL2ltcG9ydCB7YmluZGluZ01vZGUgfSBmcm9tICdhdXJlbGlhLWJpbmRpbmcnO1xyXG4vKiogd29ya2Fyb3VuZCwgZml4IGxpbmUgd2l0aCAkKHRoaXMpLmNoaWxkcmVuKCcubXMtQ29udGV4dHVhbE1lbnU6Zmlyc3QnKS50b2dnbGVDbGFzcygnaXMtb3BlbicpOyB0byAkKHRoaXMpLmZpbmQoJy5tcy1Db250ZXh0dWFsTWVudTpmaXJzdCcpLnRvZ2dsZUNsYXNzKCdpcy1vcGVuJyk7ICovXHJcbi8qKiB3b3JrYXJvdW5kIGZvciBtZW51IGl0ZW0gc2xlY3Rpb24gY2hhbmdlIGFmdGVyIGNsaWNrICwgY2hhbmdlICQodGhpcykuc2libGluZ3MoJy5tcy1OYXZCYXItaXRlbScpLnJlbW92ZUNsYXNzKCdpcy1zZWxlY3RlZCcpOyB3aXRoICAkbmF2QmFyLmZpbmQoJy5tcy1OYXZCYXItaXRlbScpLnJlbW92ZUNsYXNzKCdpcy1zZWxlY3RlZCcpOyAqL1xyXG5pbXBvcnQgXCIuL0pxdWVyeS5OYXZCYXJcIjtcclxuaW1wb3J0IHtPZmZpY2VOYXZCYXJJdGVtfSBmcm9tIFwiLi9OYXZCYXJJdGVtXCI7XHJcblxyXG5cclxuLy9AdXNlU2hhZG93RE9NKClcclxuQGluamVjdChFbGVtZW50KVxyXG5AY3VzdG9tRWxlbWVudCgnb2ZmaWNlLW5hdmJhcicpXHJcbmV4cG9ydCBjbGFzcyBPZmZpY2VOYXZCYXIge1xyXG4gICAgXHJcbiAgICBpc09wZW46Ym9vbGVhbiA9IGZhbHNlO1xyXG4gICAgJG5hdkJhclJvb3Q6IEVsZW1lbnQ7XHJcbiAgICBAY2hpbGRyZW4oJ21zLU5hdkJhci1pdGVtLS1zZWFyY2gnKSAgICAkc2VhcmNoQm94ZXM6IEVsZW1lbnRbXTtcclxuICAgIEBjaGlsZHJlbignLm1zLU5hdkJhci1pdGVtJykgICAgJHNlYXJjaEJveDogRWxlbWVudFtdO1xyXG4gICAgQGNoaWxkcmVuKCdsaScpICAgIGxpczogRWxlbWVudFtdO1xyXG4gICAgQGNoaWxkcmVuKCdkaXYnKSAgICBkaXZzOiBFbGVtZW50W107XHJcbiAgICBAY2hpbGRyZW4oJ29mZmljZS1uYXZiYXItaXRlbScpICAgJG5hdkl0ZW1zOiBPZmZpY2VOYXZCYXJJdGVtW107XHJcbiAgICBcclxuICAgIFxyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnQpIHtcclxuICAgIH1cclxuXHJcblxyXG4gICAgY2xpY2tIYW5kbGVyKCkge1xyXG4gICAgICAgIC8vdGhpcy5lbGVtZW50LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdjbGljaycpKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwiY2xpY2tlZCB0b2dnbGVyXCIpO1xyXG4gICAgfVxyXG4gICAgYXR0YWNoZWQoKSB7XHJcbiAgICAgICAgJCh0aGlzLiRuYXZCYXJSb290KS5OYXZCYXIoKTtcclxuICAgICAgICByZXR1cm47IC8vdW50aWwgc2hhZG93ZG9tIGFuZCBzdHlsaW5nIGlzIGZpZ3VyZWRcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKT0+e1xyXG4gICAgICAgICAgICB0aGlzLiRuYXZJdGVtcy5mb3JFYWNoKChpdGVtLGluZGV4KT0+e1xyXG4gICAgICAgICAgICAgICAvL2l0ZW0uXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICB0b2dnbGVOYXZCYXIoJGV2ZW50OiBFdmVudCl7XHJcbiAgICAgICAgLy8gdGhpcy5pc09wZW4gPSAhdGhpcy5pc09wZW47XHJcbiAgICAgICAgLy8gJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
