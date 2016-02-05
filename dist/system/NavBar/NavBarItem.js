System.register(['aurelia-framework'], function(exports_1) {
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
    var OfficeNavBarItem;
    return {
        setters:[
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            }],
        execute: function() {
            OfficeNavBarItem = (function () {
                function OfficeNavBarItem(element) {
                    this.element = element;
                    this.linkText = '';
                    this.icon = '';
                    this.hasMenu = false;
                    this.right = false;
                    this.disabled = false;
                }
                OfficeNavBarItem.prototype.attached = function () {
                    this.icon = this.hasMenu && this.icon === '' ? 'chevronDown' : this.icon;
                };
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
                OfficeNavBarItem = __decorate([
                    aurelia_framework_1.inject(Element),
                    aurelia_framework_1.customElement('office-navbar-item'), 
                    __metadata('design:paramtypes', [Element])
                ], OfficeNavBarItem);
                return OfficeNavBarItem;
            })();
            exports_1("OfficeNavBarItem", OfficeNavBarItem);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk5hdkJhci9OYXZCYXJJdGVtLnRzIl0sIm5hbWVzIjpbIk9mZmljZU5hdkJhckl0ZW0iLCJPZmZpY2VOYXZCYXJJdGVtLmNvbnN0cnVjdG9yIiwiT2ZmaWNlTmF2QmFySXRlbS5hdHRhY2hlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBRUE7Z0JBUUlBLDBCQUFvQkEsT0FBZUE7b0JBQWZDLFlBQU9BLEdBQVBBLE9BQU9BLENBQVFBO29CQUx6QkEsYUFBUUEsR0FBVUEsRUFBRUEsQ0FBQ0E7b0JBQ3JCQSxTQUFJQSxHQUFVQSxFQUFFQSxDQUFDQTtvQkFDakJBLFlBQU9BLEdBQVNBLEtBQUtBLENBQUNBO29CQUN0QkEsVUFBS0EsR0FBU0EsS0FBS0EsQ0FBQ0E7b0JBQ3BCQSxhQUFRQSxHQUFTQSxLQUFLQSxDQUFDQTtnQkFHakNBLENBQUNBO2dCQUNERCxtQ0FBUUEsR0FBUkE7b0JBQ0lFLElBQUlBLENBQUNBLElBQUlBLEdBQUdBLElBQUlBLENBQUNBLE9BQU9BLElBQUlBLElBQUlBLENBQUNBLElBQUlBLEtBQUdBLEVBQUVBLEdBQUVBLGFBQWFBLEdBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBO2dCQUN4RUEsQ0FBQ0E7Z0JBVkRGO29CQUFDQSw0QkFBUUE7O21CQUFDQSxzQ0FBUUEsVUFBYUE7Z0JBQy9CQTtvQkFBQ0EsNEJBQVFBOzttQkFBQ0Esa0NBQUlBLFVBQWFBO2dCQUMzQkE7b0JBQUNBLDRCQUFRQTs7bUJBQUNBLHFDQUFPQSxVQUFlQTtnQkFDaENBO29CQUFDQSw0QkFBUUE7O21CQUFDQSxtQ0FBS0EsVUFBZUE7Z0JBQzlCQTtvQkFBQ0EsNEJBQVFBOzttQkFBQ0Esc0NBQVFBLFVBQWVBO2dCQVByQ0E7b0JBQUNBLDBCQUFNQSxDQUFDQSxPQUFPQSxDQUFDQTtvQkFDZkEsaUNBQWFBLENBQUNBLG9CQUFvQkEsQ0FBQ0E7O3FDQWFuQ0E7Z0JBQURBLHVCQUFDQTtZQUFEQSxDQWRBLEFBY0NBLElBQUE7WUFkRCwrQ0FjQyxDQUFBIiwiZmlsZSI6Ik5hdkJhci9OYXZCYXJJdGVtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjdXN0b21FbGVtZW50LCBiaW5kYWJsZSwgaW5qZWN0fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5cbkBpbmplY3QoRWxlbWVudClcbkBjdXN0b21FbGVtZW50KCdvZmZpY2UtbmF2YmFyLWl0ZW0nKVxuZXhwb3J0IGNsYXNzIE9mZmljZU5hdkJhckl0ZW0ge1xuICAgIEBiaW5kYWJsZSBsaW5rVGV4dDpzdHJpbmcgPSAnJztcbiAgICBAYmluZGFibGUgaWNvbjpzdHJpbmcgPSAnJztcbiAgICBAYmluZGFibGUgaGFzTWVudTpib29sZWFuPWZhbHNlO1xuICAgIEBiaW5kYWJsZSByaWdodDpib29sZWFuPWZhbHNlO1xuICAgIEBiaW5kYWJsZSBkaXNhYmxlZDpib29sZWFuPWZhbHNlO1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDpFbGVtZW50KXtcbiAgICAgICAgXG4gICAgfVxuICAgIGF0dGFjaGVkKCl7XG4gICAgICAgIHRoaXMuaWNvbiA9IHRoaXMuaGFzTWVudSAmJiB0aGlzLmljb249PT0nJz8gJ2NoZXZyb25Eb3duJzp0aGlzLmljb247XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
