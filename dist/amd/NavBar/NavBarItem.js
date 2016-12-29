var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-framework', "./NavBar", "../ContextualMenu/ContextualMenu"], function (require, exports, aurelia_framework_1, NavBar_1, ContextualMenu_1) {
    var OfficeNavBarItem = (function () {
        function OfficeNavBarItem(element, navbar) {
            this.element = element;
            this.navbar = navbar;
            this.linkText = '';
            this.icon = '';
            this.hasMenu = false;
            this.right = false;
            this.disabled = false;
            this.type = "default";
            this.searchText = '';
            this.isOpen = false;
            this.isSelected = false;
            this.href = '#';
            this.searchBoxCSS = 'ms-NavBar-item--search ms-u-hiddenSm';
        }
        OfficeNavBarItem.prototype.attached = function () {
            this.icon = this.hasMenu && this.icon === '' ? 'chevronDown' : this.icon;
        };
        OfficeNavBarItem.prototype.searchButtonClick = function (event) {
            if (event.keyCode === 13) {
                if (this.search && typeof this.search === 'function') {
                    this.search({ $searchText: this.searchText });
                }
            }
        };
        OfficeNavBarItem.prototype.linkClickHandler = function ($event) {
            if (this.disabled) {
                return;
            }
            if (this.click && typeof this.click === 'function') {
                this.click({ $menuItem: this });
            }
        };
        OfficeNavBarItem.prototype.closeAndBlur = function () {
            return;
            this.isSelected = false;
            if (this.type === 'search' && this.$searchField.value.length === 0) {
                this.isOpen = false;
                this.$searchField.blur();
            }
            if (this.contextualMenu) {
                this.contextualMenu.isOpen = false;
            }
        };
        __decorate([
            aurelia_framework_1.child('office-contextualmenu'), 
            __metadata('design:type', (typeof (_a = typeof ContextualMenu_1.OfficeContextualMenu !== 'undefined' && ContextualMenu_1.OfficeContextualMenu) === 'function' && _a) || Object)
        ], OfficeNavBarItem.prototype, "contextualMenu", void 0);
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], OfficeNavBarItem.prototype, "linkText", void 0);
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], OfficeNavBarItem.prototype, "icon", void 0);
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Boolean)
        ], OfficeNavBarItem.prototype, "hasMenu", void 0);
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Boolean)
        ], OfficeNavBarItem.prototype, "right", void 0);
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Boolean)
        ], OfficeNavBarItem.prototype, "disabled", void 0);
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], OfficeNavBarItem.prototype, "type", void 0);
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Function)
        ], OfficeNavBarItem.prototype, "search", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: 2 }), 
            __metadata('design:type', String)
        ], OfficeNavBarItem.prototype, "searchText", void 0);
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Boolean)
        ], OfficeNavBarItem.prototype, "isOpen", void 0);
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Boolean)
        ], OfficeNavBarItem.prototype, "isSelected", void 0);
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], OfficeNavBarItem.prototype, "href", void 0);
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Function)
        ], OfficeNavBarItem.prototype, "click", void 0);
        OfficeNavBarItem = __decorate([
            aurelia_framework_1.inject(Element, NavBar_1.OfficeNavBar),
            aurelia_framework_1.customElement('office-navbar-item'), 
            __metadata('design:paramtypes', [Element, NavBar_1.OfficeNavBar])
        ], OfficeNavBarItem);
        return OfficeNavBarItem;
        var _a;
    })();
    exports.OfficeNavBarItem = OfficeNavBarItem;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk5hdkJhci9OYXZCYXJJdGVtLnRzIl0sIm5hbWVzIjpbIk9mZmljZU5hdkJhckl0ZW0iLCJPZmZpY2VOYXZCYXJJdGVtLmNvbnN0cnVjdG9yIiwiT2ZmaWNlTmF2QmFySXRlbS5hdHRhY2hlZCIsIk9mZmljZU5hdkJhckl0ZW0uc2VhcmNoQnV0dG9uQ2xpY2siLCJPZmZpY2VOYXZCYXJJdGVtLmxpbmtDbGlja0hhbmRsZXIiLCJPZmZpY2VOYXZCYXJJdGVtLmNsb3NlQW5kQmx1ciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUtBO1FBb0JJQSwwQkFBb0JBLE9BQWdCQSxFQUFVQSxNQUFvQkE7WUFBOUNDLFlBQU9BLEdBQVBBLE9BQU9BLENBQVNBO1lBQVVBLFdBQU1BLEdBQU5BLE1BQU1BLENBQWNBO1lBZnhEQSxhQUFRQSxHQUFXQSxFQUFFQSxDQUFDQTtZQUN0QkEsU0FBSUEsR0FBV0EsRUFBRUEsQ0FBQ0E7WUFDbEJBLFlBQU9BLEdBQVlBLEtBQUtBLENBQUNBO1lBQ3pCQSxVQUFLQSxHQUFZQSxLQUFLQSxDQUFDQTtZQUN2QkEsYUFBUUEsR0FBWUEsS0FBS0EsQ0FBQ0E7WUFDMUJBLFNBQUlBLEdBQVdBLFNBQVNBLENBQUNBO1lBRTJCQSxlQUFVQSxHQUFXQSxFQUFFQSxDQUFDQTtZQUM1RUEsV0FBTUEsR0FBWUEsS0FBS0EsQ0FBQ0E7WUFDeEJBLGVBQVVBLEdBQVlBLEtBQUtBLENBQUNBO1lBQzVCQSxTQUFJQSxHQUFXQSxHQUFHQSxDQUFDQTtZQUc3QkEsaUJBQVlBLEdBQVdBLHNDQUFzQ0EsQ0FBQ0E7UUFJOURBLENBQUNBO1FBQ0RELG1DQUFRQSxHQUFSQTtZQUNJRSxJQUFJQSxDQUFDQSxJQUFJQSxHQUFHQSxJQUFJQSxDQUFDQSxPQUFPQSxJQUFJQSxJQUFJQSxDQUFDQSxJQUFJQSxLQUFLQSxFQUFFQSxHQUFHQSxhQUFhQSxHQUFHQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQTtRQUM3RUEsQ0FBQ0E7UUFDREYsNENBQWlCQSxHQUFqQkEs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QUNBOztJQUFEQSxDQTFEQSxBQTBEQ0EsSUFBQTtJQXZEWSx3QkFBZ0IsbUJBdUQ1QixDQUFBIiwiZmlsZSI6Ik5hdkJhci9OYXZCYXJJdGVtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjdXN0b21FbGVtZW50LCBiaW5kYWJsZSwgaW5qZWN0LCBjaGlsZCwgY2hpbGRyZW4sIHVzZVNoYWRvd0RPTX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQge09mZmljZU5hdkJhcn0gZnJvbSBcIi4vTmF2QmFyXCJcclxuaW1wb3J0IHtPZmZpY2VDb250ZXh0dWFsTWVudX0gZnJvbSBcIi4uL0NvbnRleHR1YWxNZW51L0NvbnRleHR1YWxNZW51XCJcclxuXHJcblxyXG5AaW5qZWN0KEVsZW1lbnQsIE9mZmljZU5hdkJhcilcclxuLy9AdXNlU2hhZG93RE9NKClcclxuQGN1c3RvbUVsZW1lbnQoJ29mZmljZS1uYXZiYXItaXRlbScpXHJcbmV4cG9ydCBjbGFzcyBPZmZpY2VOYXZCYXJJdGVtIHtcclxuICAgIEBjaGlsZCgnb2ZmaWNlLWNvbnRleHR1YWxtZW51JykgY29udGV4dHVhbE1lbnU6IE9mZmljZUNvbnRleHR1YWxNZW51O1xyXG4gICAgQGJpbmRhYmxlIGxpbmtUZXh0OiBzdHJpbmcgPSAnJztcclxuICAgIEBiaW5kYWJsZSBpY29uOiBzdHJpbmcgPSAnJztcclxuICAgIEBiaW5kYWJsZSBoYXNNZW51OiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBAYmluZGFibGUgcmlnaHQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIEBiaW5kYWJsZSBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgQGJpbmRhYmxlIHR5cGU6IHN0cmluZyA9IFwiZGVmYXVsdFwiO1xyXG4gICAgQGJpbmRhYmxlIHNlYXJjaDogRnVuY3Rpb247XHJcbiAgICBAYmluZGFibGUoeyBkZWZhdWx0QmluZGluZ01vZGU6IDIgLyogYmluZGluZ01vZGUudHdvV2F5ICovIH0pIHNlYXJjaFRleHQ6IHN0cmluZyA9ICcnO1xyXG4gICAgQGJpbmRhYmxlIGlzT3BlbjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgQGJpbmRhYmxlIGlzU2VsZWN0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIEBiaW5kYWJsZSBocmVmOiBzdHJpbmcgPSAnIyc7XHJcbiAgICBAYmluZGFibGUgY2xpY2s6IEZ1bmN0aW9uO1xyXG5cclxuICAgIHNlYXJjaEJveENTUzogc3RyaW5nID0gJ21zLU5hdkJhci1pdGVtLS1zZWFyY2ggbXMtdS1oaWRkZW5TbSc7XHJcbiAgICAkc2VhcmNoRmllbGQ6IEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnQsIHByaXZhdGUgbmF2YmFyOiBPZmZpY2VOYXZCYXIpIHtcclxuXHJcbiAgICB9XHJcbiAgICBhdHRhY2hlZCgpIHtcclxuICAgICAgICB0aGlzLmljb24gPSB0aGlzLmhhc01lbnUgJiYgdGhpcy5pY29uID09PSAnJyA/ICdjaGV2cm9uRG93bicgOiB0aGlzLmljb247ICAgICAgICBcclxuICAgIH1cclxuICAgIHNlYXJjaEJ1dHRvbkNsaWNrKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XHJcbiAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDEzKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNlYXJjaCAmJiB0eXBlb2YgdGhpcy5zZWFyY2ggPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyBsZXQgZSA9IG5ldyBFdmVudCgnc2VhcmNoJywgeyBidWJibGVzOiB0cnVlLCBjYW5jZWxhYmxlOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5lbGVtZW50LmRpc3BhdGNoRXZlbnQoZSk7XHJcbiAgICAgICAgICAgICAgICAvLyBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoKHsgJHNlYXJjaFRleHQ6IHRoaXMuc2VhcmNoVGV4dCB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGxpbmtDbGlja0hhbmRsZXIoJGV2ZW50OiBFdmVudCkge1xyXG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNsaWNrICYmIHR5cGVvZiB0aGlzLmNsaWNrID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xpY2soeyRtZW51SXRlbTp0aGlzfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlQW5kQmx1cigpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgICAgdGhpcy5pc1NlbGVjdGVkID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKHRoaXMudHlwZSA9PT0gJ3NlYXJjaCcgJiYgdGhpcy4kc2VhcmNoRmllbGQudmFsdWUubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNPcGVuID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuJHNlYXJjaEZpZWxkLmJsdXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuY29udGV4dHVhbE1lbnUpIHtcclxuICAgICAgICAgICAgdGhpcy5jb250ZXh0dWFsTWVudS5pc09wZW4gPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
