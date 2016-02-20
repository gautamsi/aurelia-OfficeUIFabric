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
            __metadata('design:type', ContextualMenu_1.OfficeContextualMenu)
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
        OfficeNavBarItem = __decorate([
            aurelia_framework_1.inject(Element, NavBar_1.OfficeNavBar),
            aurelia_framework_1.customElement('office-navbar-item'), 
            __metadata('design:paramtypes', [Element, NavBar_1.OfficeNavBar])
        ], OfficeNavBarItem);
        return OfficeNavBarItem;
    })();
    exports.OfficeNavBarItem = OfficeNavBarItem;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk5hdkJhci9OYXZCYXJJdGVtLnRzIl0sIm5hbWVzIjpbIk9mZmljZU5hdkJhckl0ZW0iLCJPZmZpY2VOYXZCYXJJdGVtLmNvbnN0cnVjdG9yIiwiT2ZmaWNlTmF2QmFySXRlbS5hdHRhY2hlZCIsIk9mZmljZU5hdkJhckl0ZW0uc2VhcmNoQnV0dG9uQ2xpY2siLCJPZmZpY2VOYXZCYXJJdGVtLmNsb3NlQW5kQmx1ciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUtBO1FBa0JJQSwwQkFBb0JBLE9BQWdCQSxFQUFVQSxNQUFvQkE7WUFBOUNDLFlBQU9BLEdBQVBBLE9BQU9BLENBQVNBO1lBQVVBLFdBQU1BLEdBQU5BLE1BQU1BLENBQWNBO1lBYnhEQSxhQUFRQSxHQUFXQSxFQUFFQSxDQUFDQTtZQUN0QkEsU0FBSUEsR0FBV0EsRUFBRUEsQ0FBQ0E7WUFDbEJBLFlBQU9BLEdBQVlBLEtBQUtBLENBQUNBO1lBQ3pCQSxVQUFLQSxHQUFZQSxLQUFLQSxDQUFDQTtZQUN2QkEsYUFBUUEsR0FBWUEsS0FBS0EsQ0FBQ0E7WUFDMUJBLFNBQUlBLEdBQVdBLFNBQVNBLENBQUNBO1lBRTJCQSxlQUFVQSxHQUFXQSxFQUFFQSxDQUFDQTtZQUM1RUEsV0FBTUEsR0FBWUEsS0FBS0EsQ0FBQ0E7WUFDeEJBLGVBQVVBLEdBQVlBLEtBQUtBLENBQUNBO1lBRXRDQSxpQkFBWUEsR0FBV0Esc0NBQXNDQSxDQUFDQTtRQUk5REEsQ0FBQ0E7UUFDREQsbUNBQVFBLEdBQVJBO1lBQ0lFLElBQUlBLENBQUNBLElBQUlBLEdBQUdBLElBQUlBLENBQUNBLE9BQU9BLElBQUlBLElBQUlBLENBQUNBLElBQUlBLEtBQUtBLEVBQUVBLEdBQUdBLGFBQWFBLEdBQUdBLElBQUlBLENBQUNBLElBQUlBLENBQUNBO1FBQzdFQSxDQUFDQTtRQUNERiw0Q0FBaUJBLEdBQWpCQSxVQUFrQkEsS0FBb0JBO1lBQ2xDRyxFQUFFQSxDQUFDQSxDQUFDQSxLQUFLQSxDQUFDQSxPQUFPQSxLQUFLQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDdkJBLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLElBQUlBLE9BQU9BLElBQUlBLENBQUNBLE1BQU1BLEtBQUtBLFVBQVVBLENBQUNBLENBQUNBLENBQUNBO29CQUtuREEsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsRUFBRUEsV0FBV0EsRUFBRUEsSUFBSUEsQ0FBQ0EsVUFBVUEsRUFBRUEsQ0FBQ0EsQ0FBQ0E7Z0JBQ2xEQSxDQUFDQTtZQUNMQSxDQUFDQTtRQUNMQSxDQUFDQTtRQUVESCx1Q0FBWUEsR0FBWkE7WUFDSUksTUFBTUEsQ0FBQ0E7WUFDUEEsSUFBSUEsQ0FBQ0EsVUFBVUEsR0FBR0EsS0FBS0EsQ0FBQ0E7WUFDeEJBLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLEtBQUtBLFFBQVFBLElBQUlBLElBQUlBLENBQUNBLFlBQVlBLENBQUNBLEtBQUtBLENBQUNBLE1BQU1BLEtBQUtBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO2dCQUNqRUEsSUFBSUEsQ0FBQ0EsTUFBTUEsR0FBR0EsS0FBS0EsQ0FBQ0E7Z0JBQ3BCQSxJQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxJQUFJQSxFQUFFQSxDQUFDQTtZQUM3QkEsQ0FBQ0E7WUFDREEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ3RCQSxJQUFJQSxDQUFDQSxjQUFjQSxDQUFDQSxNQUFNQSxHQUFHQSxLQUFLQSxDQUFDQTtZQUN2Q0EsQ0FBQ0E7UUFDTEEsQ0FBQ0E7UUExQ0RKO1lBQUNBLHlCQUFLQSxDQUFDQSx1QkFBdUJBLENBQUNBOztXQUFDQSw0Q0FBY0EsVUFBdUJBO1FBQ3JFQTtZQUFDQSw0QkFBUUE7O1dBQUNBLHNDQUFRQSxVQUFjQTtRQUNoQ0E7WUFBQ0EsNEJBQVFBOztXQUFDQSxrQ0FBSUEsVUFBY0E7UUFDNUJBO1lBQUNBLDRCQUFRQTs7V0FBQ0EscUNBQU9BLFVBQWtCQTtRQUNuQ0E7WUFBQ0EsNEJBQVFBOztXQUFDQSxtQ0FBS0EsVUFBa0JBO1FBQ2pDQTtZQUFDQSw0QkFBUUE7O1dBQUNBLHNDQUFRQSxVQUFrQkE7UUFDcENBO1lBQUNBLDRCQUFRQTs7V0FBQ0Esa0NBQUlBLFVBQXFCQTtRQUNuQ0E7WUFBQ0EsNEJBQVFBOztXQUFDQSxvQ0FBTUEsVUFBV0E7UUFDM0JBO1lBQUNBLDRCQUFRQSxDQUFDQSxFQUFFQSxrQkFBa0JBLEVBQUVBLENBQUNBLEVBQTJCQSxDQUFDQTs7V0FBQ0Esd0NBQVVBLFVBQWNBO1FBQ3RGQTtZQUFDQSw0QkFBUUE7O1dBQUNBLG9DQUFNQSxVQUFrQkE7UUFDbENBO1lBQUNBLDRCQUFRQTs7V0FBQ0Esd0NBQVVBLFVBQWtCQTtRQWQxQ0E7WUFBQ0EsMEJBQU1BLENBQUNBLE9BQU9BLEVBQUVBLHFCQUFZQSxDQUFDQTtZQUU3QkEsaUNBQWFBLENBQUNBLG9CQUFvQkEsQ0FBQ0E7OzZCQTZDbkNBO1FBQURBLHVCQUFDQTtJQUFEQSxDQS9DQSxBQStDQ0EsSUFBQTtJQTVDWSx3QkFBZ0IsbUJBNEM1QixDQUFBIiwiZmlsZSI6Ik5hdkJhci9OYXZCYXJJdGVtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjdXN0b21FbGVtZW50LCBiaW5kYWJsZSwgaW5qZWN0LCBjaGlsZCwgY2hpbGRyZW4sIHVzZVNoYWRvd0RPTX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQge09mZmljZU5hdkJhcn0gZnJvbSBcIi4vTmF2QmFyXCJcclxuaW1wb3J0IHtPZmZpY2VDb250ZXh0dWFsTWVudX0gZnJvbSBcIi4uL0NvbnRleHR1YWxNZW51L0NvbnRleHR1YWxNZW51XCJcclxuXHJcblxyXG5AaW5qZWN0KEVsZW1lbnQsIE9mZmljZU5hdkJhcilcclxuLy9AdXNlU2hhZG93RE9NKClcclxuQGN1c3RvbUVsZW1lbnQoJ29mZmljZS1uYXZiYXItaXRlbScpXHJcbmV4cG9ydCBjbGFzcyBPZmZpY2VOYXZCYXJJdGVtIHtcclxuICAgIEBjaGlsZCgnb2ZmaWNlLWNvbnRleHR1YWxtZW51JykgY29udGV4dHVhbE1lbnU6IE9mZmljZUNvbnRleHR1YWxNZW51O1xyXG4gICAgQGJpbmRhYmxlIGxpbmtUZXh0OiBzdHJpbmcgPSAnJztcclxuICAgIEBiaW5kYWJsZSBpY29uOiBzdHJpbmcgPSAnJztcclxuICAgIEBiaW5kYWJsZSBoYXNNZW51OiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBAYmluZGFibGUgcmlnaHQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIEBiaW5kYWJsZSBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgQGJpbmRhYmxlIHR5cGU6IHN0cmluZyA9IFwiZGVmYXVsdFwiO1xyXG4gICAgQGJpbmRhYmxlIHNlYXJjaDogRnVuY3Rpb247XHJcbiAgICBAYmluZGFibGUoeyBkZWZhdWx0QmluZGluZ01vZGU6IDIgLyogYmluZGluZ01vZGUudHdvV2F5ICovIH0pIHNlYXJjaFRleHQ6IHN0cmluZyA9ICcnO1xyXG4gICAgQGJpbmRhYmxlIGlzT3BlbjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgQGJpbmRhYmxlIGlzU2VsZWN0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBzZWFyY2hCb3hDU1M6IHN0cmluZyA9ICdtcy1OYXZCYXItaXRlbS0tc2VhcmNoIG1zLXUtaGlkZGVuU20nO1xyXG4gICAgJHNlYXJjaEZpZWxkOiBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50LCBwcml2YXRlIG5hdmJhcjogT2ZmaWNlTmF2QmFyKSB7XHJcblxyXG4gICAgfVxyXG4gICAgYXR0YWNoZWQoKSB7XHJcbiAgICAgICAgdGhpcy5pY29uID0gdGhpcy5oYXNNZW51ICYmIHRoaXMuaWNvbiA9PT0gJycgPyAnY2hldnJvbkRvd24nIDogdGhpcy5pY29uOyAgICAgICAgXHJcbiAgICB9XHJcbiAgICBzZWFyY2hCdXR0b25DbGljayhldmVudDogS2V5Ym9hcmRFdmVudCkge1xyXG4gICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAxMykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zZWFyY2ggJiYgdHlwZW9mIHRoaXMuc2VhcmNoID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gbGV0IGUgPSBuZXcgRXZlbnQoJ3NlYXJjaCcsIHsgYnViYmxlczogdHJ1ZSwgY2FuY2VsYWJsZTogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuZWxlbWVudC5kaXNwYXRjaEV2ZW50KGUpO1xyXG4gICAgICAgICAgICAgICAgLy8gZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaCh7ICRzZWFyY2hUZXh0OiB0aGlzLnNlYXJjaFRleHQgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2VBbmRCbHVyKCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgICB0aGlzLmlzU2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgICAgICBpZiAodGhpcy50eXBlID09PSAnc2VhcmNoJyAmJiB0aGlzLiRzZWFyY2hGaWVsZC52YWx1ZS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5pc09wZW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy4kc2VhcmNoRmllbGQuYmx1cigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5jb250ZXh0dWFsTWVudSkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRleHR1YWxNZW51LmlzT3BlbiA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
