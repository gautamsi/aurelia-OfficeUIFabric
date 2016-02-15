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
    var OfficeContextualMenuItem;
    return {
        setters:[
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            }],
        execute: function() {
            OfficeContextualMenuItem = (function () {
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
            exports_1("OfficeContextualMenuItem", OfficeContextualMenuItem);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbnRleHR1YWxNZW51L0NvbnRleHR1YWxNZW51SXRlbS50cyJdLCJuYW1lcyI6WyJPZmZpY2VDb250ZXh0dWFsTWVudUl0ZW0iLCJPZmZpY2VDb250ZXh0dWFsTWVudUl0ZW0uY29uc3RydWN0b3IiLCJPZmZpY2VDb250ZXh0dWFsTWVudUl0ZW0uYXR0YWNoZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUVBO2dCQVVJQSxrQ0FBb0JBLE9BQWVBO29CQUFmQyxZQUFPQSxHQUFQQSxPQUFPQSxDQUFRQTtvQkFQekJBLGFBQVFBLEdBQVVBLEVBQUVBLENBQUNBO29CQUNyQkEsZUFBVUEsR0FBVUEsRUFBRUEsQ0FBQ0E7b0JBQ3ZCQSxTQUFJQSxHQUFVQSxFQUFFQSxDQUFDQTtvQkFDakJBLFNBQUlBLEdBQVVBLEdBQUdBLENBQUNBO29CQUNsQkEsWUFBT0EsR0FBU0EsS0FBS0EsQ0FBQ0E7b0JBQ3RCQSxZQUFPQSxHQUFXQSxLQUFLQSxDQUFDQTtvQkFDeEJBLFdBQU1BLEdBQVNBLEtBQUtBLENBQUNBO2dCQUcvQkEsQ0FBQ0E7Z0JBQ0RELDJDQUFRQSxHQUFSQTtvQkFDSUUsSUFBSUEsQ0FBQ0EsSUFBSUEsR0FBR0EsSUFBSUEsQ0FBQ0EsT0FBT0EsSUFBSUEsSUFBSUEsQ0FBQ0EsSUFBSUEsS0FBSUEsRUFBRUEsR0FBR0EsYUFBYUEsR0FBR0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0E7Z0JBQzVFQSxDQUFDQTtnQkFaREY7b0JBQUNBLDRCQUFRQTs7bUJBQUNBLDhDQUFRQSxVQUFhQTtnQkFDL0JBO29CQUFDQSw0QkFBUUE7O21CQUFDQSxnREFBVUEsVUFBYUE7Z0JBQ2pDQTtvQkFBQ0EsNEJBQVFBOzttQkFBQ0EsMENBQUlBLFVBQWFBO2dCQUMzQkE7b0JBQUNBLDRCQUFRQTs7bUJBQUNBLDBDQUFJQSxVQUFjQTtnQkFDNUJBO29CQUFDQSw0QkFBUUE7O21CQUFDQSw2Q0FBT0EsVUFBZUE7Z0JBQ2hDQTtvQkFBQ0EsNEJBQVFBOzttQkFBQ0EsNkNBQU9BLFVBQWlCQTtnQkFDbENBO29CQUFDQSw0QkFBUUE7O21CQUFDQSw0Q0FBTUEsVUFBZUE7Z0JBVG5DQTtvQkFBQ0EsMEJBQU1BLENBQUNBLE9BQU9BLENBQUNBO29CQUNmQSxpQ0FBYUEsQ0FBQ0EsNEJBQTRCQSxDQUFDQTs7NkNBZTNDQTtnQkFBREEsK0JBQUNBO1lBQURBLENBaEJBLEFBZ0JDQSxJQUFBO1lBaEJELCtEQWdCQyxDQUFBIiwiZmlsZSI6IkNvbnRleHR1YWxNZW51L0NvbnRleHR1YWxNZW51SXRlbS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3VzdG9tRWxlbWVudCwgYmluZGFibGUsIGluamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5cclxuQGluamVjdChFbGVtZW50KVxyXG5AY3VzdG9tRWxlbWVudCgnb2ZmaWNlLWNvbnRleHR1YWxtZW51LWl0ZW0nKVxyXG5leHBvcnQgY2xhc3MgT2ZmaWNlQ29udGV4dHVhbE1lbnVJdGVtIHtcclxuICAgIEBiaW5kYWJsZSBsaW5rVGV4dDpzdHJpbmcgPSAnJztcclxuICAgIEBiaW5kYWJsZSBoZWFkZXJUZXh0OnN0cmluZyA9ICcnO1xyXG4gICAgQGJpbmRhYmxlIGljb246c3RyaW5nID0gJyc7XHJcbiAgICBAYmluZGFibGUgaHJlZjpzdHJpbmcgPSAnIyc7XHJcbiAgICBAYmluZGFibGUgaGFzTWVudTpib29sZWFuPWZhbHNlO1xyXG4gICAgQGJpbmRhYmxlIGRpdmlkZXI6Ym9vbGVhbiA9IGZhbHNlO1xyXG4gICAgQGJpbmRhYmxlIGhlYWRlcjpib29sZWFuPWZhbHNlO1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OkVsZW1lbnQpe1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgYXR0YWNoZWQoKXsgICAgICAgIFxyXG4gICAgICAgIHRoaXMuaWNvbiA9IHRoaXMuaGFzTWVudSAmJiB0aGlzLmljb24gPT09JycgPyAnY2hldnJvbkRvd24nIDogdGhpcy5pY29uO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
