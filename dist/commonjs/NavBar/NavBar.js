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
require("./Jquery.NavBar");
var OfficeNavBar = (function () {
    function OfficeNavBar(element) {
        this.element = element;
        this.searchText = '';
        this.searchTextRight = false;
    }
    OfficeNavBar.prototype.clickHandler = function () {
        console.log("clicked toggler");
    };
    OfficeNavBar.prototype.attached = function () {
        $(this.navBarRoot).NavBar();
    };
    OfficeNavBar.prototype.searchButtonClick = function (event) {
        if (event.keyCode === 13) {
            var e = new Event('search', { bubbles: true, cancelable: true });
            this.element.dispatchEvent(e);
            event.stopPropagation();
        }
    };
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: 2 }), 
        __metadata('design:type', String)
    ], OfficeNavBar.prototype, "searchText", void 0);
    __decorate([
        aurelia_framework_1.bindable, 
        __metadata('design:type', Boolean)
    ], OfficeNavBar.prototype, "searchTextRight", void 0);
    OfficeNavBar = __decorate([
        aurelia_framework_1.inject(Element),
        aurelia_framework_1.customElement('office-navbar'), 
        __metadata('design:paramtypes', [Element])
    ], OfficeNavBar);
    return OfficeNavBar;
})();
exports.OfficeNavBar = OfficeNavBar;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk5hdkJhci9OYXZCYXIudHMiXSwibmFtZXMiOlsiT2ZmaWNlTmF2QmFyIiwiT2ZmaWNlTmF2QmFyLmNvbnN0cnVjdG9yIiwiT2ZmaWNlTmF2QmFyLmNsaWNrSGFuZGxlciIsIk9mZmljZU5hdkJhci5hdHRhY2hlZCIsIk9mZmljZU5hdkJhci5zZWFyY2hCdXR0b25DbGljayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsa0NBQStDLG1CQUFtQixDQUFDLENBQUE7QUFHbkUsUUFBTyxpQkFBaUIsQ0FBQyxDQUFBO0FBRXpCO0lBT0lBLHNCQUFvQkEsT0FBZ0JBO1FBQWhCQyxZQUFPQSxHQUFQQSxPQUFPQSxDQUFTQTtRQUp3QkEsZUFBVUEsR0FBV0EsRUFBRUEsQ0FBQ0E7UUFDMUVBLG9CQUFlQSxHQUFZQSxLQUFLQSxDQUFDQTtJQUszQ0EsQ0FBQ0E7SUFHREQsbUNBQVlBLEdBQVpBO1FBRUlFLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLGlCQUFpQkEsQ0FBQ0EsQ0FBQ0E7SUFDbkNBLENBQUNBO0lBQ0RGLCtCQUFRQSxHQUFSQTtRQUNJRyxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxDQUFDQSxNQUFNQSxFQUFFQSxDQUFDQTtJQUNoQ0EsQ0FBQ0E7SUFFREgsd0NBQWlCQSxHQUFqQkEsVUFBa0JBLEtBQW9CQTtRQUNsQ0ksRUFBRUEsQ0FBQ0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsT0FBT0EsS0FBS0EsRUFBRUEsQ0FBQ0EsQ0FBQUEsQ0FBQ0E7WUFDdEJBLElBQUlBLENBQUNBLEdBQUdBLElBQUlBLEtBQUtBLENBQUNBLFFBQVFBLEVBQUVBLEVBQUVBLE9BQU9BLEVBQUVBLElBQUlBLEVBQUVBLFVBQVVBLEVBQUVBLElBQUlBLEVBQUVBLENBQUNBLENBQUNBO1lBQ2pFQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxhQUFhQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUM5QkEsS0FBS0EsQ0FBQ0EsZUFBZUEsRUFBRUEsQ0FBQ0E7UUFDNUJBLENBQUNBO0lBRUxBLENBQUNBO0lBeEJESjtRQUFDQSw0QkFBUUEsQ0FBQ0EsRUFBQ0Esa0JBQWtCQSxFQUFFQSxDQUFDQSxFQUEwQkEsQ0FBQ0E7O09BQUNBLG9DQUFVQSxVQUFjQTtJQUNwRkE7UUFBQ0EsNEJBQVFBOztPQUFDQSx5Q0FBZUEsVUFBa0JBO0lBSi9DQTtRQUFDQSwwQkFBTUEsQ0FBQ0EsT0FBT0EsQ0FBQ0E7UUFDZkEsaUNBQWFBLENBQUNBLGVBQWVBLENBQUNBOztxQkE2QjlCQTtJQUFEQSxtQkFBQ0E7QUFBREEsQ0E5QkEsQUE4QkNBLElBQUE7QUE1Qlksb0JBQVksZUE0QnhCLENBQUEiLCJmaWxlIjoiTmF2QmFyL05hdkJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3VzdG9tRWxlbWVudCwgYmluZGFibGUsIGluamVjdCB9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuLy9pbXBvcnQge2JpbmRpbmdNb2RlIH0gZnJvbSAnYXVyZWxpYS1iaW5kaW5nJztcclxuLyoqIHdvcmthcm91bmQsIGZpeCBsaW5lIHdpdGggJCh0aGlzKS5jaGlsZHJlbignLm1zLUNvbnRleHR1YWxNZW51OmZpcnN0JykudG9nZ2xlQ2xhc3MoJ2lzLW9wZW4nKTsgdG8gJCh0aGlzKS5maW5kKCcubXMtQ29udGV4dHVhbE1lbnU6Zmlyc3QnKS50b2dnbGVDbGFzcygnaXMtb3BlbicpOyAqL1xyXG5pbXBvcnQgXCIuL0pxdWVyeS5OYXZCYXJcIjtcclxuXHJcbkBpbmplY3QoRWxlbWVudClcclxuQGN1c3RvbUVsZW1lbnQoJ29mZmljZS1uYXZiYXInKVxyXG5leHBvcnQgY2xhc3MgT2ZmaWNlTmF2QmFyIHtcclxuICAgIEBiaW5kYWJsZSh7ZGVmYXVsdEJpbmRpbmdNb2RlOiAyIC8qIGJpbmRpbmdNb2RlLnR3b1dheSAqL30pIHNlYXJjaFRleHQ6IHN0cmluZyA9ICcnO1xyXG4gICAgQGJpbmRhYmxlIHNlYXJjaFRleHRSaWdodDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIG5hdkJhclJvb3Q6IEVsZW1lbnQ7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnQpIHtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNsaWNrSGFuZGxlcigpIHtcclxuICAgICAgICAvL3RoaXMuZWxlbWVudC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2xpY2snKSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjbGlja2VkIHRvZ2dsZXJcIik7XHJcbiAgICB9XHJcbiAgICBhdHRhY2hlZCgpIHtcclxuICAgICAgICAkKHRoaXMubmF2QmFyUm9vdCkuTmF2QmFyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2VhcmNoQnV0dG9uQ2xpY2soZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcclxuICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMpe1xyXG4gICAgICAgICAgICBsZXQgZSA9IG5ldyBFdmVudCgnc2VhcmNoJywgeyBidWJibGVzOiB0cnVlLCBjYW5jZWxhYmxlOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuZGlzcGF0Y2hFdmVudChlKTtcclxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgIH1cclxuXHJcblxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
