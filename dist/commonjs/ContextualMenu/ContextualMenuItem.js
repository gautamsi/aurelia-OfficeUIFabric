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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbnRleHR1YWxNZW51L0NvbnRleHR1YWxNZW51SXRlbS50cyJdLCJuYW1lcyI6WyJPZmZpY2VDb250ZXh0dWFsTWVudUl0ZW0iLCJPZmZpY2VDb250ZXh0dWFsTWVudUl0ZW0uY29uc3RydWN0b3IiLCJPZmZpY2VDb250ZXh0dWFsTWVudUl0ZW0uYXR0YWNoZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLGtDQUE4QyxtQkFBbUIsQ0FBQyxDQUFBO0FBRWxFO0lBVUlBLGtDQUFvQkEsT0FBZUE7UUFBZkMsWUFBT0EsR0FBUEEsT0FBT0EsQ0FBUUE7UUFQekJBLGFBQVFBLEdBQVVBLEVBQUVBLENBQUNBO1FBQ3JCQSxlQUFVQSxHQUFVQSxFQUFFQSxDQUFDQTtRQUN2QkEsU0FBSUEsR0FBVUEsRUFBRUEsQ0FBQ0E7UUFDakJBLFNBQUlBLEdBQVVBLEdBQUdBLENBQUNBO1FBQ2xCQSxZQUFPQSxHQUFTQSxLQUFLQSxDQUFDQTtRQUN0QkEsWUFBT0EsR0FBV0EsS0FBS0EsQ0FBQ0E7UUFDeEJBLFdBQU1BLEdBQVNBLEtBQUtBLENBQUNBO0lBRy9CQSxDQUFDQTtJQUNERCwyQ0FBUUEsR0FBUkE7UUFDSUUsSUFBSUEsQ0FBQ0EsSUFBSUEsR0FBR0EsSUFBSUEsQ0FBQ0EsT0FBT0EsSUFBSUEsSUFBSUEsQ0FBQ0EsSUFBSUEsS0FBSUEsRUFBRUEsR0FBR0EsYUFBYUEsR0FBR0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0E7SUFDNUVBLENBQUNBO0lBWkRGO1FBQUNBLDRCQUFRQTs7T0FBQ0EsOENBQVFBLFVBQWFBO0lBQy9CQTtRQUFDQSw0QkFBUUE7O09BQUNBLGdEQUFVQSxVQUFhQTtJQUNqQ0E7UUFBQ0EsNEJBQVFBOztPQUFDQSwwQ0FBSUEsVUFBYUE7SUFDM0JBO1FBQUNBLDRCQUFRQTs7T0FBQ0EsMENBQUlBLFVBQWNBO0lBQzVCQTtRQUFDQSw0QkFBUUE7O09BQUNBLDZDQUFPQSxVQUFlQTtJQUNoQ0E7UUFBQ0EsNEJBQVFBOztPQUFDQSw2Q0FBT0EsVUFBaUJBO0lBQ2xDQTtRQUFDQSw0QkFBUUE7O09BQUNBLDRDQUFNQSxVQUFlQTtJQVRuQ0E7UUFBQ0EsMEJBQU1BLENBQUNBLE9BQU9BLENBQUNBO1FBQ2ZBLGlDQUFhQSxDQUFDQSw0QkFBNEJBLENBQUNBOztpQ0FlM0NBO0lBQURBLCtCQUFDQTtBQUFEQSxDQWhCQSxBQWdCQ0EsSUFBQTtBQWRZLGdDQUF3QiwyQkFjcEMsQ0FBQSIsImZpbGUiOiJDb250ZXh0dWFsTWVudS9Db250ZXh0dWFsTWVudUl0ZW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2N1c3RvbUVsZW1lbnQsIGJpbmRhYmxlLCBpbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcblxuQGluamVjdChFbGVtZW50KVxuQGN1c3RvbUVsZW1lbnQoJ29mZmljZS1jb250ZXh0dWFsbWVudS1pdGVtJylcbmV4cG9ydCBjbGFzcyBPZmZpY2VDb250ZXh0dWFsTWVudUl0ZW0ge1xuICAgIEBiaW5kYWJsZSBsaW5rVGV4dDpzdHJpbmcgPSAnJztcbiAgICBAYmluZGFibGUgaGVhZGVyVGV4dDpzdHJpbmcgPSAnJztcbiAgICBAYmluZGFibGUgaWNvbjpzdHJpbmcgPSAnJztcbiAgICBAYmluZGFibGUgaHJlZjpzdHJpbmcgPSAnIyc7XG4gICAgQGJpbmRhYmxlIGhhc01lbnU6Ym9vbGVhbj1mYWxzZTtcbiAgICBAYmluZGFibGUgZGl2aWRlcjpib29sZWFuID0gZmFsc2U7XG4gICAgQGJpbmRhYmxlIGhlYWRlcjpib29sZWFuPWZhbHNlO1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDpFbGVtZW50KXtcbiAgICAgICAgXG4gICAgfVxuICAgIGF0dGFjaGVkKCl7ICAgICAgICBcbiAgICAgICAgdGhpcy5pY29uID0gdGhpcy5oYXNNZW51ICYmIHRoaXMuaWNvbiA9PT0nJyA/ICdjaGV2cm9uRG93bicgOiB0aGlzLmljb247XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
