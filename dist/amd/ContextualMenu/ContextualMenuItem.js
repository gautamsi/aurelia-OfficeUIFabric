var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-framework'], function (require, exports, aurelia_framework_1) {
    var OfficeContextualMenuItem = (function () {
        function OfficeContextualMenuItem(element) {
            this.element = element;
            this.linkText = '';
            this.headerText = '';
            this.icon = '';
            this.href = '#';
            this.hasMenu = false;
            this.divider = false;
            this.header = false;
        }
        OfficeContextualMenuItem.prototype.attached = function () {
            this.icon = this.hasMenu && this.icon === '' ? 'chevronDown' : this.icon;
        };
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], OfficeContextualMenuItem.prototype, "linkText", void 0);
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], OfficeContextualMenuItem.prototype, "headerText", void 0);
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], OfficeContextualMenuItem.prototype, "icon", void 0);
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], OfficeContextualMenuItem.prototype, "href", void 0);
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Boolean)
        ], OfficeContextualMenuItem.prototype, "hasMenu", void 0);
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Boolean)
        ], OfficeContextualMenuItem.prototype, "divider", void 0);
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Boolean)
        ], OfficeContextualMenuItem.prototype, "header", void 0);
        OfficeContextualMenuItem = __decorate([
            aurelia_framework_1.inject(Element),
            aurelia_framework_1.customElement('office-contextualmenu-item'), 
            __metadata('design:paramtypes', [Element])
        ], OfficeContextualMenuItem);
        return OfficeContextualMenuItem;
    })();
    exports.OfficeContextualMenuItem = OfficeContextualMenuItem;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbnRleHR1YWxNZW51L0NvbnRleHR1YWxNZW51SXRlbS50cyJdLCJuYW1lcyI6WyJPZmZpY2VDb250ZXh0dWFsTWVudUl0ZW0iLCJPZmZpY2VDb250ZXh0dWFsTWVudUl0ZW0uY29uc3RydWN0b3IiLCJPZmZpY2VDb250ZXh0dWFsTWVudUl0ZW0uYXR0YWNoZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFFQTtRQVVJQSxrQ0FBb0JBLE9BQWVBO1lBQWZDLFlBQU9BLEdBQVBBLE9BQU9BLENBQVFBO1lBUHpCQSxhQUFRQSxHQUFVQSxFQUFFQSxDQUFDQTtZQUNyQkEsZUFBVUEsR0FBVUEsRUFBRUEsQ0FBQ0E7WUFDdkJBLFNBQUlBLEdBQVVBLEVBQUVBLENBQUNBO1lBQ2pCQSxTQUFJQSxHQUFVQSxHQUFHQSxDQUFDQTtZQUNsQkEsWUFBT0EsR0FBU0EsS0FBS0EsQ0FBQ0E7WUFDdEJBLFlBQU9BLEdBQVdBLEtBQUtBLENBQUNBO1lBQ3hCQSxXQUFNQSxHQUFTQSxLQUFLQSxDQUFDQTtRQUcvQkEsQ0FBQ0E7UUFDREQsMkNBQVFBLEdBQVJBO1lBQ0lFLElBQUlBLENBQUNBLElBQUlBLEdBQUdBLElBQUlBLENBQUNBLE9BQU9BLElBQUlBLElBQUlBLENBQUNBLElBQUlBLEtBQUlBLEVBQUVBLEdBQUdBLGFBQWFBLEdBQUdBLElBQUlBLENBQUNBLElBQUlBLENBQUNBO1FBQzVFQSxDQUFDQTtRQVpERjtZQUFDQSw0QkFBUUE7O1dBQUNBLDhDQUFRQSxVQUFhQTtRQUMvQkE7WUFBQ0EsNEJBQVFBOztXQUFDQSxnREFBVUEsVUFBYUE7UUFDakNBO1lBQUNBLDRCQUFRQTs7V0FBQ0EsMENBQUlBLFVBQWFBO1FBQzNCQTtZQUFDQSw0QkFBUUE7O1dBQUNBLDBDQUFJQSxVQUFjQTtRQUM1QkE7WUFBQ0EsNEJBQVFBOztXQUFDQSw2Q0FBT0EsVUFBZUE7UUFDaENBO1lBQUNBLDRCQUFRQTs7V0FBQ0EsNkNBQU9BLFVBQWlCQTtRQUNsQ0E7WUFBQ0EsNEJBQVFBOztXQUFDQSw0Q0FBTUEsVUFBZUE7UUFUbkNBO1lBQUNBLDBCQUFNQSxDQUFDQSxPQUFPQSxDQUFDQTtZQUNmQSxpQ0FBYUEsQ0FBQ0EsNEJBQTRCQSxDQUFDQTs7cUNBZTNDQTtRQUFEQSwrQkFBQ0E7SUFBREEsQ0FoQkEsQUFnQkNBLElBQUE7SUFkWSxnQ0FBd0IsMkJBY3BDLENBQUEiLCJmaWxlIjoiQ29udGV4dHVhbE1lbnUvQ29udGV4dHVhbE1lbnVJdGVtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjdXN0b21FbGVtZW50LCBiaW5kYWJsZSwgaW5qZWN0fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcblxyXG5AaW5qZWN0KEVsZW1lbnQpXHJcbkBjdXN0b21FbGVtZW50KCdvZmZpY2UtY29udGV4dHVhbG1lbnUtaXRlbScpXHJcbmV4cG9ydCBjbGFzcyBPZmZpY2VDb250ZXh0dWFsTWVudUl0ZW0ge1xyXG4gICAgQGJpbmRhYmxlIGxpbmtUZXh0OnN0cmluZyA9ICcnO1xyXG4gICAgQGJpbmRhYmxlIGhlYWRlclRleHQ6c3RyaW5nID0gJyc7XHJcbiAgICBAYmluZGFibGUgaWNvbjpzdHJpbmcgPSAnJztcclxuICAgIEBiaW5kYWJsZSBocmVmOnN0cmluZyA9ICcjJztcclxuICAgIEBiaW5kYWJsZSBoYXNNZW51OmJvb2xlYW49ZmFsc2U7XHJcbiAgICBAYmluZGFibGUgZGl2aWRlcjpib29sZWFuID0gZmFsc2U7XHJcbiAgICBAYmluZGFibGUgaGVhZGVyOmJvb2xlYW49ZmFsc2U7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6RWxlbWVudCl7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBhdHRhY2hlZCgpeyAgICAgICAgXHJcbiAgICAgICAgdGhpcy5pY29uID0gdGhpcy5oYXNNZW51ICYmIHRoaXMuaWNvbiA9PT0nJyA/ICdjaGV2cm9uRG93bicgOiB0aGlzLmljb247XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
