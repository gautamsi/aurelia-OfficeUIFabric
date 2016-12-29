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
var NavBar_1 = require("./NavBar");
var ContextualMenu_1 = require("../ContextualMenu/ContextualMenu");
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
exports.OfficeNavBarItem = OfficeNavBarItem;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk5hdkJhci9OYXZCYXJJdGVtLnRzIl0sIm5hbWVzIjpbIk9mZmljZU5hdkJhckl0ZW0iLCJPZmZpY2VOYXZCYXJJdGVtLmNvbnN0cnVjdG9yIiwiT2ZmaWNlTmF2QmFySXRlbS5hdHRhY2hlZCIsIk9mZmljZU5hdkJhckl0ZW0uc2VhcmNoQnV0dG9uQ2xpY2siLCJPZmZpY2VOYXZCYXJJdGVtLmxpbmtDbGlja0hhbmRsZXIiLCJPZmZpY2VOYXZCYXJJdGVtLmNsb3NlQW5kQmx1ciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsa0NBQTZFLG1CQUFtQixDQUFDLENBQUE7QUFDakcsdUJBQTJCLFVBQzNCLENBQUMsQ0FEb0M7QUFDckMsK0JBQW1DLGtDQUduQyxDQUFDLENBSG9FO0FBR3JFO0lBbUJJQSwwQkFBb0JBLE9BQWdCQSxFQUFVQSxNQUFvQkE7UUFBOUNDLFlBQU9BLEdBQVBBLE9BQU9BLENBQVNBO1FBQVVBLFdBQU1BLEdBQU5BLE1BQU1BLENBQWNBO1FBZHhEQSxhQUFRQSxHQUFXQSxFQUFFQSxDQUFDQTtRQUN0QkEsU0FBSUEsR0FBV0EsRUFBRUEsQ0FBQ0E7UUFDbEJBLFlBQU9BLEdBQVlBLEtBQUtBLENBQUNBO1FBQ3pCQSxVQUFLQSxHQUFZQSxLQUFLQSxDQUFDQTtRQUN2QkEsYUFBUUEsR0FBWUEsS0FBS0EsQ0FBQ0E7UUFDMUJBLFNBQUlBLEdBQVdBLFNBQVNBLENBQUNBO1FBRTJCQSxlQUFVQSxHQUFXQSxFQUFFQSxDQUFDQTtRQUM1RUEsV0FBTUEsR0FBWUEsS0FBS0EsQ0FBQ0E7UUFDeEJBLGVBQVVBLEdBQVlBLEtBQUtBLENBQUNBO1FBR3RDQSxpQkFBWUEsR0FBV0Esc0NBQXNDQSxDQUFDQTtJQUk5REEsQ0FBQ0E7SUFDREQsbUNBQVFBLEdBQVJBO1FBQ0lFLElBQUlBLENBQUNBLElBQUlBLEdBQUdBLElBQUlBLENBQUNBLE9BQU9BLElBQUlBLElBQUlBLENBQUNBLElBQUlBLEtBQUtBLEVBQUVBLEdBQUdBLGFBQWFBLEdBQUdB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QTtJQUFEQSx1QkFBQ0E7QUFBREEsQ0F6REEsQUF5RENBLElBQUE7QUF0RFksd0JBQWdCLG1CQXNENUIsQ0FBQSIsImZpbGUiOiJOYXZCYXIvTmF2QmFySXRlbS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3VzdG9tRWxlbWVudCwgYmluZGFibGUsIGluamVjdCwgY2hpbGQsIGNoaWxkcmVuLCB1c2VTaGFkb3dET019IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IHtPZmZpY2VOYXZCYXJ9IGZyb20gXCIuL05hdkJhclwiXHJcbmltcG9ydCB7T2ZmaWNlQ29udGV4dHVhbE1lbnV9IGZyb20gXCIuLi9Db250ZXh0dWFsTWVudS9Db250ZXh0dWFsTWVudVwiXHJcblxyXG5cclxuQGluamVjdChFbGVtZW50LCBPZmZpY2VOYXZCYXIpXHJcbi8vQHVzZVNoYWRvd0RPTSgpXHJcbkBjdXN0b21FbGVtZW50KCdvZmZpY2UtbmF2YmFyLWl0ZW0nKVxyXG5leHBvcnQgY2xhc3MgT2ZmaWNlTmF2QmFySXRlbSB7XHJcbiAgICBAY2hpbGQoJ29mZmljZS1jb250ZXh0dWFsbWVudScpIGNvbnRleHR1YWxNZW51OiBPZmZpY2VDb250ZXh0dWFsTWVudTtcclxuICAgIEBiaW5kYWJsZSBsaW5rVGV4dDogc3RyaW5nID0gJyc7XHJcbiAgICBAYmluZGFibGUgaWNvbjogc3RyaW5nID0gJyc7XHJcbiAgICBAYmluZGFibGUgaGFzTWVudTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgQGJpbmRhYmxlIHJpZ2h0OiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBAYmluZGFibGUgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIEBiaW5kYWJsZSB0eXBlOiBzdHJpbmcgPSBcImRlZmF1bHRcIjtcclxuICAgIEBiaW5kYWJsZSBzZWFyY2g6IEZ1bmN0aW9uO1xyXG4gICAgQGJpbmRhYmxlKHsgZGVmYXVsdEJpbmRpbmdNb2RlOiAyIC8qIGJpbmRpbmdNb2RlLnR3b1dheSAqLyB9KSBzZWFyY2hUZXh0OiBzdHJpbmcgPSAnJztcclxuICAgIEBiaW5kYWJsZSBpc09wZW46IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIEBiaW5kYWJsZSBpc1NlbGVjdGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBAYmluZGFibGUgY2xpY2s6IEZ1bmN0aW9uO1xyXG5cclxuICAgIHNlYXJjaEJveENTUzogc3RyaW5nID0gJ21zLU5hdkJhci1pdGVtLS1zZWFyY2ggbXMtdS1oaWRkZW5TbSc7XHJcbiAgICAkc2VhcmNoRmllbGQ6IEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnQsIHByaXZhdGUgbmF2YmFyOiBPZmZpY2VOYXZCYXIpIHtcclxuXHJcbiAgICB9XHJcbiAgICBhdHRhY2hlZCgpIHtcclxuICAgICAgICB0aGlzLmljb24gPSB0aGlzLmhhc01lbnUgJiYgdGhpcy5pY29uID09PSAnJyA/ICdjaGV2cm9uRG93bicgOiB0aGlzLmljb247ICAgICAgICBcclxuICAgIH1cclxuICAgIHNlYXJjaEJ1dHRvbkNsaWNrKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XHJcbiAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDEzKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNlYXJjaCAmJiB0eXBlb2YgdGhpcy5zZWFyY2ggPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyBsZXQgZSA9IG5ldyBFdmVudCgnc2VhcmNoJywgeyBidWJibGVzOiB0cnVlLCBjYW5jZWxhYmxlOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5lbGVtZW50LmRpc3BhdGNoRXZlbnQoZSk7XHJcbiAgICAgICAgICAgICAgICAvLyBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoKHsgJHNlYXJjaFRleHQ6IHRoaXMuc2VhcmNoVGV4dCB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGxpbmtDbGlja0hhbmRsZXIoJGV2ZW50OiBFdmVudCkge1xyXG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNsaWNrICYmIHR5cGVvZiB0aGlzLmNsaWNrID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xpY2soeyRtZW51SXRlbTp0aGlzfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlQW5kQmx1cigpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgICAgdGhpcy5pc1NlbGVjdGVkID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKHRoaXMudHlwZSA9PT0gJ3NlYXJjaCcgJiYgdGhpcy4kc2VhcmNoRmllbGQudmFsdWUubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNPcGVuID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuJHNlYXJjaEZpZWxkLmJsdXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuY29udGV4dHVhbE1lbnUpIHtcclxuICAgICAgICAgICAgdGhpcy5jb250ZXh0dWFsTWVudS5pc09wZW4gPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
