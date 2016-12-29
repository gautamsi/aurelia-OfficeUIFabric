System.register(['aurelia-framework', "./NavBar", "../ContextualMenu/ContextualMenu"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var aurelia_framework_1, NavBar_1, ContextualMenu_1;
    var OfficeNavBarItem;
    return {
        setters:[
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (NavBar_1_1) {
                NavBar_1 = NavBar_1_1;
            },
            function (ContextualMenu_1_1) {
                ContextualMenu_1 = ContextualMenu_1_1;
            }],
        execute: function() {
            OfficeNavBarItem = (function () {
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
            })();
            exports_1("OfficeNavBarItem", OfficeNavBarItem);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk5hdkJhci9OYXZCYXJJdGVtLnRzIl0sIm5hbWVzIjpbIk9mZmljZU5hdkJhckl0ZW0iLCJPZmZpY2VOYXZCYXJJdGVtLmNvbnN0cnVjdG9yIiwiT2ZmaWNlTmF2QmFySXRlbS5hdHRhY2hlZCIsIk9mZmljZU5hdkJhckl0ZW0uc2VhcmNoQnV0dG9uQ2xpY2siLCJPZmZpY2VOYXZCYXJJdGVtLmxpbmtDbGlja0hhbmRsZXIiLCJPZmZpY2VOYXZCYXJJdGVtLmNsb3NlQW5kQmx1ciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBS0E7Z0JBbUJJQSwwQkFBb0JBLE9BQWdCQSxFQUFVQSxNQUFvQkE7b0JBQTlDQyxZQUFPQSxHQUFQQSxPQUFPQSxDQUFTQTtvQkFBVUEsV0FBTUEsR0FBTkEsTUFBTUEsQ0FBY0E7b0JBZHhEQSxhQUFRQSxHQUFXQSxFQUFFQSxDQUFDQTtvQkFDdEJBLFNBQUlBLEdBQVdBLEVBQUVBLENBQUNBO29CQUNsQkEsWUFBT0EsR0FBWUEsS0FBS0EsQ0FBQ0E7b0JBQ3pCQSxVQUFLQSxHQUFZQSxLQUFLQSxDQUFDQTtvQkFDdkJBLGFBQVFBLEdBQVlBLEtBQUtBLENBQUNBO29CQUMxQkEsU0FBSUEsR0FBV0EsU0FBU0EsQ0FBQ0E7b0JBRTJCQSxlQUFVQSxHQUFXQSxFQUFFQSxDQUFDQTtvQkFDNUVBLFdBQU1BLEdBQVlBLEtBQUtBLENBQUNBO29CQUN4QkEsZUFBVUEsR0FBWUEsS0FBS0EsQ0FBQ0E7b0JBR3RDQSxpQkFBWUEsR0FBV0Esc0NBQXNDQSxDQUFDQTtnQkFJOURBLENBQUNBO2dCQUNERCxtQ0FBUUEsR0FBUkE7b0JBQ0lFLElBQUlBLENBQUNBLElBQUlBLEdBQUdBLElBQUlBLENBQUNBLE9BQU9BLElBQUlBLElBQUlBLENBQUNBLElBQUlBLEtBQUtBLEVBQUVBLEdBQUdBLGFBQWFBLEdBQUdBLElBQUlBLENBQUNBLElBQUlBLENBQUNBO2dCQUM3RUEsQ0FBQ0E7Z0JBQ0RGLDRDQUFpQkEsR0FBakJBLFVBQWtCQSxLQUFvQkE7b0JBQ2xDRyxFQUFFQSxDQUFDQSxDQUFDQSxLQUFLQSxDQUFDQSxPQUFPQSxLQUFLQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQTt3QkFDdkJBLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLElBQUlBLE9BQU9BLElBQUlBLENBQUNBLE1BQU1BLEtBQUtBLFVBQVVBLENBQUNBLENBQUNBLENBQUNBOzRCQUtuREEsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsRUFBRUEsV0FBV0EsRUFBRUEsSUFBSUEsQ0FBQ0EsVUFBVUEsRUFBRUEsQ0FBQ0EsQ0FBQ0E7d0JBQ2xEQSxDQUFDQTtvQkFDTEEsQ0FBQ0E7Z0JBQ0xBLENBQUNBO2dCQUNESCwyQ0FBZ0JBLEdBQWhCQSxVQUFpQkEsTUFBYUE7b0JBQzFCSSxFQUFFQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQSxDQUFDQTt3QkFDaEJBLE1BQU1BLENBQUNBO29CQUNYQSxDQUFDQTtvQkFFREEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsSUFBSUEsT0FBT0EsSUFBSUEsQ0FBQ0EsS0FBS0EsS0FBS0EsVUFBVUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7d0JBQ2pEQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxFQUFDQSxTQUFTQSxFQUFDQSxJQUFJQSxFQUFDQSxDQUFDQSxDQUFDQTtvQkFDakNBLENBQUNBO2dCQUNMQSxDQUFDQTtnQkFFREosdUNBQVlBLEdBQVpBO29CQUNJSyxNQUFNQSxDQUFDQTtvQkFDUEEsSUFBSUEsQ0FBQ0EsVUFBVUEsR0FBR0EsS0FBS0EsQ0FBQ0E7b0JBQ3hCQSxFQUFFQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxLQUFLQSxRQUFRQSxJQUFJQSxJQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxLQUFLQSxDQUFDQSxNQUFNQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTt3QkFDakVBLElBQUlBLENBQUNBLE1BQU1BLEdBQUdBLEtBQUtBLENBQUNBO3dCQUNwQkEsSUFBSUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsSUFBSUEsRUFBRUEsQ0FBQ0E7b0JBQzdCQSxDQUFDQTtvQkFDREEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7d0JBQ3RCQSxJQUFJQSxDQUFDQSxjQUFjQSxDQUFDQSxNQUFNQSxHQUFHQSxLQUFLQSxDQUFDQTtvQkFDdkNBLENBQUNBO2dCQUNMQSxDQUFDQTtnQkFwRERMO29CQUFDQSx5QkFBS0EsQ0FBQ0EsdUJBQXVCQSxDQUFDQTs7bUJBQUNBLDRDQUFjQSxVQUF1QkE7Z0JBQ3JFQTtvQkFBQ0EsNEJBQVFBOzttQkFBQ0Esc0NBQVFBLFVBQWNBO2dCQUNoQ0E7b0JBQUNBLDRCQUFRQTs7bUJBQUNBLGtDQUFJQSxVQUFjQTtnQkFDNUJBO29CQUFDQSw0QkFBUUE7O21CQUFDQSxxQ0FBT0EsVUFBa0JBO2dCQUNuQ0E7b0JBQUNBLDRCQUFRQTs7bUJBQUNBLG1DQUFLQSxVQUFrQkE7Z0JBQ2pDQTtvQkFBQ0EsNEJBQVFBOzttQkFBQ0Esc0NBQVFBLFVBQWtCQTtnQkFDcENBO29CQUFDQSw0QkFBUUE7O21CQUFDQSxrQ0FBSUEsVUFBcUJBO2dCQUNuQ0E7b0JBQUNBLDRCQUFRQTs7bUJBQUNBLG9DQUFNQSxVQUFXQTtnQkFDM0JBO29CQUFDQSw0QkFBUUEsQ0FBQ0EsRUFBRUEsa0JBQWtCQSxFQUFFQSxDQUFDQSxFQUEyQkEsQ0FBQ0E7O21CQUFDQSx3Q0FBVUEsVUFBY0E7Z0JBQ3RGQTtvQkFBQ0EsNEJBQVFBOzttQkFBQ0Esb0NBQU1BLFVBQWtCQTtnQkFDbENBO29CQUFDQSw0QkFBUUE7O21CQUFDQSx3Q0FBVUEsVUFBa0JBO2dCQUN0Q0E7b0JBQUNBLDRCQUFRQTs7bUJBQUNBLG1DQUFLQSxVQUFXQTtnQkFmOUJBO29CQUFDQSwwQkFBTUEsQ0FBQ0EsT0FBT0EsRUFBRUEscUJBQVlBLENBQUNBO29CQUU3QkEsaUNBQWFBLENBQUNBLG9CQUFvQkEsQ0FBQ0E7O3FDQXVEbkNBO2dCQUFEQSx1QkFBQ0E7WUFBREEsQ0F6REEsQUF5RENBLElBQUE7WUF6REQsK0NBeURDLENBQUEiLCJmaWxlIjoiTmF2QmFyL05hdkJhckl0ZW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2N1c3RvbUVsZW1lbnQsIGJpbmRhYmxlLCBpbmplY3QsIGNoaWxkLCBjaGlsZHJlbiwgdXNlU2hhZG93RE9NfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcbmltcG9ydCB7T2ZmaWNlTmF2QmFyfSBmcm9tIFwiLi9OYXZCYXJcIlxyXG5pbXBvcnQge09mZmljZUNvbnRleHR1YWxNZW51fSBmcm9tIFwiLi4vQ29udGV4dHVhbE1lbnUvQ29udGV4dHVhbE1lbnVcIlxyXG5cclxuXHJcbkBpbmplY3QoRWxlbWVudCwgT2ZmaWNlTmF2QmFyKVxyXG4vL0B1c2VTaGFkb3dET00oKVxyXG5AY3VzdG9tRWxlbWVudCgnb2ZmaWNlLW5hdmJhci1pdGVtJylcclxuZXhwb3J0IGNsYXNzIE9mZmljZU5hdkJhckl0ZW0ge1xyXG4gICAgQGNoaWxkKCdvZmZpY2UtY29udGV4dHVhbG1lbnUnKSBjb250ZXh0dWFsTWVudTogT2ZmaWNlQ29udGV4dHVhbE1lbnU7XHJcbiAgICBAYmluZGFibGUgbGlua1RleHQ6IHN0cmluZyA9ICcnO1xyXG4gICAgQGJpbmRhYmxlIGljb246IHN0cmluZyA9ICcnO1xyXG4gICAgQGJpbmRhYmxlIGhhc01lbnU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIEBiaW5kYWJsZSByaWdodDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgQGJpbmRhYmxlIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBAYmluZGFibGUgdHlwZTogc3RyaW5nID0gXCJkZWZhdWx0XCI7XHJcbiAgICBAYmluZGFibGUgc2VhcmNoOiBGdW5jdGlvbjtcclxuICAgIEBiaW5kYWJsZSh7IGRlZmF1bHRCaW5kaW5nTW9kZTogMiAvKiBiaW5kaW5nTW9kZS50d29XYXkgKi8gfSkgc2VhcmNoVGV4dDogc3RyaW5nID0gJyc7XHJcbiAgICBAYmluZGFibGUgaXNPcGVuOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBAYmluZGFibGUgaXNTZWxlY3RlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgQGJpbmRhYmxlIGNsaWNrOiBGdW5jdGlvbjtcclxuXHJcbiAgICBzZWFyY2hCb3hDU1M6IHN0cmluZyA9ICdtcy1OYXZCYXItaXRlbS0tc2VhcmNoIG1zLXUtaGlkZGVuU20nO1xyXG4gICAgJHNlYXJjaEZpZWxkOiBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50LCBwcml2YXRlIG5hdmJhcjogT2ZmaWNlTmF2QmFyKSB7XHJcblxyXG4gICAgfVxyXG4gICAgYXR0YWNoZWQoKSB7XHJcbiAgICAgICAgdGhpcy5pY29uID0gdGhpcy5oYXNNZW51ICYmIHRoaXMuaWNvbiA9PT0gJycgPyAnY2hldnJvbkRvd24nIDogdGhpcy5pY29uOyAgICAgICAgXHJcbiAgICB9XHJcbiAgICBzZWFyY2hCdXR0b25DbGljayhldmVudDogS2V5Ym9hcmRFdmVudCkge1xyXG4gICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAxMykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zZWFyY2ggJiYgdHlwZW9mIHRoaXMuc2VhcmNoID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gbGV0IGUgPSBuZXcgRXZlbnQoJ3NlYXJjaCcsIHsgYnViYmxlczogdHJ1ZSwgY2FuY2VsYWJsZTogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuZWxlbWVudC5kaXNwYXRjaEV2ZW50KGUpO1xyXG4gICAgICAgICAgICAgICAgLy8gZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaCh7ICRzZWFyY2hUZXh0OiB0aGlzLnNlYXJjaFRleHQgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBsaW5rQ2xpY2tIYW5kbGVyKCRldmVudDogRXZlbnQpIHtcclxuICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5jbGljayAmJiB0eXBlb2YgdGhpcy5jbGljayA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICB0aGlzLmNsaWNrKHskbWVudUl0ZW06dGhpc30pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjbG9zZUFuZEJsdXIoKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuaXNTZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgICAgIGlmICh0aGlzLnR5cGUgPT09ICdzZWFyY2gnICYmIHRoaXMuJHNlYXJjaEZpZWxkLnZhbHVlLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmlzT3BlbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLiRzZWFyY2hGaWVsZC5ibHVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmNvbnRleHR1YWxNZW51KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGV4dHVhbE1lbnUuaXNPcGVuID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
