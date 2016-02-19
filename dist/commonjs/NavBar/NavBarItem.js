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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk5hdkJhci9OYXZCYXJJdGVtLnRzIl0sIm5hbWVzIjpbIk9mZmljZU5hdkJhckl0ZW0iLCJPZmZpY2VOYXZCYXJJdGVtLmNvbnN0cnVjdG9yIiwiT2ZmaWNlTmF2QmFySXRlbS5hdHRhY2hlZCIsIk9mZmljZU5hdkJhckl0ZW0uc2VhcmNoQnV0dG9uQ2xpY2siLCJPZmZpY2VOYXZCYXJJdGVtLmNsb3NlQW5kQmx1ciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsa0NBQTZFLG1CQUFtQixDQUFDLENBQUE7QUFDakcsdUJBQTJCLFVBQzNCLENBQUMsQ0FEb0M7QUFDckMsK0JBQW1DLGtDQUduQyxDQUFDLENBSG9FO0FBR3JFO0lBa0JJQSwwQkFBb0JBLE9BQWdCQSxFQUFVQSxNQUFvQkE7UUFBOUNDLFlBQU9BLEdBQVBBLE9BQU9BLENBQVNBO1FBQVVBLFdBQU1BLEdBQU5BLE1BQU1BLENBQWNBO1FBYnhEQSxhQUFRQSxHQUFXQSxFQUFFQSxDQUFDQTtRQUN0QkEsU0FBSUEsR0FBV0EsRUFBRUEsQ0FBQ0E7UUFDbEJBLFlBQU9BLEdBQVlBLEtBQUtBLENBQUNBO1FBQ3pCQSxVQUFLQSxHQUFZQSxLQUFLQSxDQUFDQTtRQUN2QkEsYUFBUUEsR0FBWUEsS0FBS0EsQ0FBQ0E7UUFDMUJBLFNBQUlBLEdBQVdBLFNBQVNBLENBQUNBO1FBRTJCQSxlQUFVQSxHQUFXQSxFQUFFQSxDQUFDQTtRQUM1RUEsV0FBTUEsR0FBWUEsS0FBS0EsQ0FBQ0E7UUFDeEJBLGVBQVVBLEdBQVlBLEtBQUtBLENBQUNBO1FBRXRDQSxpQkFBWUEsR0FBV0Esc0NBQXNDQSxDQUFDQTtJQUk5REEsQ0FBQ0E7SUFDREQsbUNBQVFBLEdBQVJBO1FBQ0lFLElBQUlBLENBQUNBLElBQUlBLEdBQUdBLElBQUlBLENBQUNBLE9BQU9BLElBQUlBLElBQUlBLENBQUNBLElBQUlBLEtBQUtBLEVBQUVBLEdBQUdBLGFBQWFBLEdBQUdBLElBQUlBLENBQUNBLElBQUlBLENBQUNBO0lBQzdFQSxDQUFDQTtJQUNERiw0Q0FBaUJBLEdBQWpCQSxVQUFrQkEsS0FBb0JBO1FBQ2xDRyxFQUFFQSxDQUFDQSxDQUFDQSxLQUFLQSxDQUFDQSxPQUFPQSxLQUFLQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUN2QkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsSUFBSUEsT0FBT0EsSUFBSUEsQ0FBQ0EsTUFBTUEsS0FBS0EsVUFBVUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBS25EQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxFQUFFQSxXQUFXQSxFQUFFQSxJQUFJQSxDQUFDQSxVQUFVQSxFQUFFQSxDQUFDQSxDQUFDQTtZQUNsREEsQ0FBQ0E7UUFDTEEsQ0FBQ0E7SUFDTEEsQ0FBQ0E7SUFFREgsdUNBQVlBLEdBQVpBO1FBQ0lJLE1BQU1BLENBQUNBO1FBQ1BBLElBQUlBLENBQUNBLFVBQVVBLEdBQUdBLEtBQUtBLENBQUNBO1FBQ3hCQSxFQUFFQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxLQUFLQSxRQUFRQSxJQUFJQSxJQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxLQUFLQSxDQUFDQSxNQUFNQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNqRUEsSUFBSUEsQ0FBQ0EsTUFBTUEsR0FBR0EsS0FBS0EsQ0FBQ0E7WUFDcEJBLElBQUlBLENBQUNBLFlBQVlBLENBQUNBLElBQUlBLEVBQUVBLENBQUNBO1FBQzdCQSxDQUFDQTtRQUNEQSxFQUFFQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxjQUFjQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUN0QkEsSUFBSUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsTUFBTUEsR0FBR0EsS0FBS0EsQ0FBQ0E7UUFDdkNBLENBQUNBO0lBQ0xBLENBQUNBO0lBMUNESjtRQUFDQSx5QkFBS0EsQ0FBQ0EsdUJBQXVCQSxDQUFDQTs7T0FBQ0EsNENBQWNBLFVBQXVCQTtJQUNyRUE7UUFBQ0EsNEJBQVFBOztPQUFDQSxzQ0FBUUEsVUFBY0E7SUFDaENBO1FBQUNBLDRCQUFRQTs7T0FBQ0Esa0NBQUlBLFVBQWNBO0lBQzVCQTtRQUFDQSw0QkFBUUE7O09BQUNBLHFDQUFPQSxVQUFrQkE7SUFDbkNBO1FBQUNBLDRCQUFRQTs7T0FBQ0EsbUNBQUtBLFVBQWtCQTtJQUNqQ0E7UUFBQ0EsNEJBQVFBOztPQUFDQSxzQ0FBUUEsVUFBa0JBO0lBQ3BDQTtRQUFDQSw0QkFBUUE7O09BQUNBLGtDQUFJQSxVQUFxQkE7SUFDbkNBO1FBQUNBLDRCQUFRQTs7T0FBQ0Esb0NBQU1BLFVBQVdBO0lBQzNCQTtRQUFDQSw0QkFBUUEsQ0FBQ0EsRUFBRUEsa0JBQWtCQSxFQUFFQSxDQUFDQSxFQUEyQkEsQ0FBQ0E7O09BQUNBLHdDQUFVQSxVQUFjQTtJQUN0RkE7UUFBQ0EsNEJBQVFBOztPQUFDQSxvQ0FBTUEsVUFBa0JBO0lBQ2xDQTtRQUFDQSw0QkFBUUE7O09BQUNBLHdDQUFVQSxVQUFrQkE7SUFkMUNBO1FBQUNBLDBCQUFNQSxDQUFDQSxPQUFPQSxFQUFFQSxxQkFBWUEsQ0FBQ0E7UUFFN0JBLGlDQUFhQSxDQUFDQSxvQkFBb0JBLENBQUNBOzt5QkE2Q25DQTtJQUFEQSx1QkFBQ0E7QUFBREEsQ0EvQ0EsQUErQ0NBLElBQUE7QUE1Q1ksd0JBQWdCLG1CQTRDNUIsQ0FBQSIsImZpbGUiOiJOYXZCYXIvTmF2QmFySXRlbS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3VzdG9tRWxlbWVudCwgYmluZGFibGUsIGluamVjdCwgY2hpbGQsIGNoaWxkcmVuLCB1c2VTaGFkb3dET019IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IHtPZmZpY2VOYXZCYXJ9IGZyb20gXCIuL05hdkJhclwiXHJcbmltcG9ydCB7T2ZmaWNlQ29udGV4dHVhbE1lbnV9IGZyb20gXCIuLi9Db250ZXh0dWFsTWVudS9Db250ZXh0dWFsTWVudVwiXHJcblxyXG5cclxuQGluamVjdChFbGVtZW50LCBPZmZpY2VOYXZCYXIpXHJcbi8vQHVzZVNoYWRvd0RPTSgpXHJcbkBjdXN0b21FbGVtZW50KCdvZmZpY2UtbmF2YmFyLWl0ZW0nKVxyXG5leHBvcnQgY2xhc3MgT2ZmaWNlTmF2QmFySXRlbSB7XHJcbiAgICBAY2hpbGQoJ29mZmljZS1jb250ZXh0dWFsbWVudScpIGNvbnRleHR1YWxNZW51OiBPZmZpY2VDb250ZXh0dWFsTWVudTtcclxuICAgIEBiaW5kYWJsZSBsaW5rVGV4dDogc3RyaW5nID0gJyc7XHJcbiAgICBAYmluZGFibGUgaWNvbjogc3RyaW5nID0gJyc7XHJcbiAgICBAYmluZGFibGUgaGFzTWVudTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgQGJpbmRhYmxlIHJpZ2h0OiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBAYmluZGFibGUgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIEBiaW5kYWJsZSB0eXBlOiBzdHJpbmcgPSBcImRlZmF1bHRcIjtcclxuICAgIEBiaW5kYWJsZSBzZWFyY2g6IEZ1bmN0aW9uO1xyXG4gICAgQGJpbmRhYmxlKHsgZGVmYXVsdEJpbmRpbmdNb2RlOiAyIC8qIGJpbmRpbmdNb2RlLnR3b1dheSAqLyB9KSBzZWFyY2hUZXh0OiBzdHJpbmcgPSAnJztcclxuICAgIEBiaW5kYWJsZSBpc09wZW46IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIEBiaW5kYWJsZSBpc1NlbGVjdGVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgc2VhcmNoQm94Q1NTOiBzdHJpbmcgPSAnbXMtTmF2QmFyLWl0ZW0tLXNlYXJjaCBtcy11LWhpZGRlblNtJztcclxuICAgICRzZWFyY2hGaWVsZDogSFRNTElucHV0RWxlbWVudDtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogRWxlbWVudCwgcHJpdmF0ZSBuYXZiYXI6IE9mZmljZU5hdkJhcikge1xyXG5cclxuICAgIH1cclxuICAgIGF0dGFjaGVkKCkge1xyXG4gICAgICAgIHRoaXMuaWNvbiA9IHRoaXMuaGFzTWVudSAmJiB0aGlzLmljb24gPT09ICcnID8gJ2NoZXZyb25Eb3duJyA6IHRoaXMuaWNvbjsgICAgICAgIFxyXG4gICAgfVxyXG4gICAgc2VhcmNoQnV0dG9uQ2xpY2soZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcclxuICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc2VhcmNoICYmIHR5cGVvZiB0aGlzLnNlYXJjaCA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIGxldCBlID0gbmV3IEV2ZW50KCdzZWFyY2gnLCB7IGJ1YmJsZXM6IHRydWUsIGNhbmNlbGFibGU6IHRydWUgfSk7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmVsZW1lbnQuZGlzcGF0Y2hFdmVudChlKTtcclxuICAgICAgICAgICAgICAgIC8vIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2goeyAkc2VhcmNoVGV4dDogdGhpcy5zZWFyY2hUZXh0IH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlQW5kQmx1cigpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgICAgdGhpcy5pc1NlbGVjdGVkID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKHRoaXMudHlwZSA9PT0gJ3NlYXJjaCcgJiYgdGhpcy4kc2VhcmNoRmllbGQudmFsdWUubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNPcGVuID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuJHNlYXJjaEZpZWxkLmJsdXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuY29udGV4dHVhbE1lbnUpIHtcclxuICAgICAgICAgICAgdGhpcy5jb250ZXh0dWFsTWVudS5pc09wZW4gPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
