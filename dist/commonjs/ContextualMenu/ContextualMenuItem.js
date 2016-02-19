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
var Contextualmenu_1 = require("./Contextualmenu");
var OfficeContextualMenuItem = (function () {
    function OfficeContextualMenuItem(element, $parentMenu) {
        this.element = element;
        this.$parentMenu = $parentMenu;
        this.linkText = '';
        this.headerText = '';
        this.icon = '';
        this.href = '#';
        this.hasMenu = false;
        this.divider = false;
        this.header = false;
        this.selected = false;
    }
    OfficeContextualMenuItem.prototype.attached = function () {
        this.icon = this.hasMenu && this.icon === '' ? 'chevronDown' : this.icon;
    };
    OfficeContextualMenuItem.prototype.linkClickHandler = function ($event) {
        if (this.disabled) {
            return;
        }
        if (this.itemClick && typeof this.itemClick === 'function') {
            this.itemClick();
        }
        if (this.click && typeof this.click === 'function') {
            this.click({ $menuItem: this });
        }
        return;
        $event.preventDefault();
        if (this.$parentMenu.multiSelect) {
            this.selected = !this.selected;
        }
        else {
            if (this.$parentMenu) {
                this.$parentMenu.closeDeselectChild(this);
            }
            this.selected = true;
            if (this.hasMenu && this.$contextualMenu) {
                this.$contextualMenu.isOpen = true;
                $event.stopPropagation();
            }
        }
        if (this.itemClick && typeof this.itemClick === 'function') {
            this.itemClick();
        }
    };
    OfficeContextualMenuItem.prototype.closeDeselectItem = function () {
        this.selected = false;
        if (this.$contextualMenu) {
            this.$contextualMenu.isOpen = false;
        }
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
    __decorate([
        aurelia_framework_1.bindable, 
        __metadata('design:type', Boolean)
    ], OfficeContextualMenuItem.prototype, "disabled", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: 2 }), 
        __metadata('design:type', Boolean)
    ], OfficeContextualMenuItem.prototype, "selected", void 0);
    __decorate([
        aurelia_framework_1.bindable, 
        __metadata('design:type', Function)
    ], OfficeContextualMenuItem.prototype, "itemClick", void 0);
    __decorate([
        aurelia_framework_1.bindable, 
        __metadata('design:type', Function)
    ], OfficeContextualMenuItem.prototype, "click", void 0);
    __decorate([
        aurelia_framework_1.child('office-contextualmenu'), 
        __metadata('design:type', Contextualmenu_1.OfficeContextualMenu)
    ], OfficeContextualMenuItem.prototype, "$contextualMenu", void 0);
    OfficeContextualMenuItem = __decorate([
        aurelia_framework_1.inject(Element, Contextualmenu_1.OfficeContextualMenu),
        aurelia_framework_1.customElement('office-contextualmenu-item'), 
        __metadata('design:paramtypes', [Element, Contextualmenu_1.OfficeContextualMenu])
    ], OfficeContextualMenuItem);
    return OfficeContextualMenuItem;
})();
exports.OfficeContextualMenuItem = OfficeContextualMenuItem;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbnRleHR1YWxNZW51L0NvbnRleHR1YWxNZW51SXRlbS50cyJdLCJuYW1lcyI6WyJPZmZpY2VDb250ZXh0dWFsTWVudUl0ZW0iLCJPZmZpY2VDb250ZXh0dWFsTWVudUl0ZW0uY29uc3RydWN0b3IiLCJPZmZpY2VDb250ZXh0dWFsTWVudUl0ZW0uYXR0YWNoZWQiLCJPZmZpY2VDb250ZXh0dWFsTWVudUl0ZW0ubGlua0NsaWNrSGFuZGxlciIsIk9mZmljZUNvbnRleHR1YWxNZW51SXRlbS5jbG9zZURlc2VsZWN0SXRlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsa0NBQTZFLG1CQUFtQixDQUFDLENBQUE7QUFDakcsK0JBQW1DLGtCQUFrQixDQUFDLENBQUE7QUFHdEQ7SUFlSUEsa0NBQW9CQSxPQUFnQkEsRUFBVUEsV0FBaUNBO1FBQTNEQyxZQUFPQSxHQUFQQSxPQUFPQSxDQUFTQTtRQUFVQSxnQkFBV0EsR0FBWEEsV0FBV0EsQ0FBc0JBO1FBWnJFQSxhQUFRQSxHQUFXQSxFQUFFQSxDQUFDQTtRQUN0QkEsZUFBVUEsR0FBV0EsRUFBRUEsQ0FBQ0E7UUFDeEJBLFNBQUlBLEdBQVdBLEVBQUVBLENBQUNBO1FBQ2xCQSxTQUFJQSxHQUFXQSxHQUFHQSxDQUFDQTtRQUNuQkEsWUFBT0EsR0FBWUEsS0FBS0EsQ0FBQ0E7UUFDekJBLFlBQU9BLEdBQVlBLEtBQUtBLENBQUNBO1FBQ3pCQSxXQUFNQSxHQUFZQSxLQUFLQSxDQUFDQTtRQUU0QkEsYUFBUUEsR0FBWUEsS0FBS0EsQ0FBQ0E7SUFNeEZBLENBQUNBO0lBQ0RELDJDQUFRQSxHQUFSQTtRQUNJRSxJQUFJQSxDQUFDQSxJQUFJQSxHQUFHQSxJQUFJQSxDQUFDQSxPQUFPQSxJQUFJQSxJQUFJQSxDQUFDQSxJQUFJQSxLQUFLQSxFQUFFQSxHQUFHQSxhQUFhQSxHQUFHQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQTtJQUM3RUEsQ0FBQ0E7SUFDREYsbURBQWdCQSxHQUFoQkEsVUFBaUJBLE1BQWFB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QUNBLDhDQUFRQSxVQUFrQkE7SUFDeEZBO1FBQUNBLDRCQUFRQTs7T0FBQ0EsK0NBQVNBLFVBQVdBO0lBQzlCQTtRQUFDQSw0QkFBUUE7O09BQUNBLDJDQUFLQSxVQUFXQTtJQUMxQkE7UUFBQ0EseUJBQUtBLENBQUNBLHVCQUF1QkEsQ0FBQ0E7O09BQUNBLHFEQUFlQSxVQUF1QkE7SUFkMUVBO1FBQUNBLDBCQUFNQSxDQUFDQSxPQUFPQSxFQUFFQSxxQ0FBb0JBLENBQUNBO1FBQ3JDQSxpQ0FBYUEsQ0FBQ0EsNEJBQTRCQSxDQUFDQTs7aUNBK0UzQ0E7SUFBREEsK0JBQUNBO0FBQURBLENBaEZBLEFBZ0ZDQSxJQUFBO0FBOUVZLGdDQUF3QiwyQkE4RXBDLENBQUEiLCJmaWxlIjoiQ29udGV4dHVhbE1lbnUvQ29udGV4dHVhbE1lbnVJdGVtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjdXN0b21FbGVtZW50LCBiaW5kYWJsZSwgaW5qZWN0LCBjaGlsZCwgY2hpbGRyZW4sIHVzZVNoYWRvd0RPTX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQge09mZmljZUNvbnRleHR1YWxNZW51fSBmcm9tIFwiLi9Db250ZXh0dWFsbWVudVwiO1xyXG5cclxuLy9AdXNlU2hhZG93RE9NKClcclxuQGluamVjdChFbGVtZW50LCBPZmZpY2VDb250ZXh0dWFsTWVudSlcclxuQGN1c3RvbUVsZW1lbnQoJ29mZmljZS1jb250ZXh0dWFsbWVudS1pdGVtJylcclxuZXhwb3J0IGNsYXNzIE9mZmljZUNvbnRleHR1YWxNZW51SXRlbSB7XHJcbiAgICBAYmluZGFibGUgbGlua1RleHQ6IHN0cmluZyA9ICcnO1xyXG4gICAgQGJpbmRhYmxlIGhlYWRlclRleHQ6IHN0cmluZyA9ICcnO1xyXG4gICAgQGJpbmRhYmxlIGljb246IHN0cmluZyA9ICcnO1xyXG4gICAgQGJpbmRhYmxlIGhyZWY6IHN0cmluZyA9ICcjJztcclxuICAgIEBiaW5kYWJsZSBoYXNNZW51OiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBAYmluZGFibGUgZGl2aWRlcjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgQGJpbmRhYmxlIGhlYWRlcjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgQGJpbmRhYmxlIGRpc2FibGVkOiBib29sZWFuO1xyXG4gICAgQGJpbmRhYmxlKHsgZGVmYXVsdEJpbmRpbmdNb2RlOiAyIC8qIGJpbmRpbmdNb2RlLnR3b1dheSAqLyB9KSBzZWxlY3RlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgQGJpbmRhYmxlIGl0ZW1DbGljazogRnVuY3Rpb247XHJcbiAgICBAYmluZGFibGUgY2xpY2s6IEZ1bmN0aW9uO1xyXG4gICAgQGNoaWxkKCdvZmZpY2UtY29udGV4dHVhbG1lbnUnKSAkY29udGV4dHVhbE1lbnU6IE9mZmljZUNvbnRleHR1YWxNZW51O1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50LCBwcml2YXRlICRwYXJlbnRNZW51OiBPZmZpY2VDb250ZXh0dWFsTWVudSkge1xyXG5cclxuICAgIH1cclxuICAgIGF0dGFjaGVkKCkge1xyXG4gICAgICAgIHRoaXMuaWNvbiA9IHRoaXMuaGFzTWVudSAmJiB0aGlzLmljb24gPT09ICcnID8gJ2NoZXZyb25Eb3duJyA6IHRoaXMuaWNvbjtcclxuICAgIH1cclxuICAgIGxpbmtDbGlja0hhbmRsZXIoJGV2ZW50OiBFdmVudCkge1xyXG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHRoaXMuaXRlbUNsaWNrICYmIHR5cGVvZiB0aGlzLml0ZW1DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1DbGljaygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5jbGljayAmJiB0eXBlb2YgdGhpcy5jbGljayA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICB0aGlzLmNsaWNrKHskbWVudUl0ZW06dGhpc30pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvL3VudGlsIHNoYWRvd2RvbSBidWcgaXMgZml4ZWQgd2l0aCBBdXJlbGlhLiBJIGRvIGhhdmUgdG8gZmlndXJlIG91dCBzdHlsaW5nIHVuZGVyIHNoYWRvdyBkb20gZm9yIGZhYnJpYy4gXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIFxyXG4gICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIENoZWNrIGlmIG11bHRpc2VsZWN0IC0gc2V0IHNlbGVjdGVkIHN0YXRlc1xyXG4gICAgICAgIGlmICh0aGlzLiRwYXJlbnRNZW51Lm11bHRpU2VsZWN0KSB7XHJcbiAgICAgICAgICAgIC8vIElmIGFscmVhZHkgc2VsZWN0ZWQsIHJlbW92ZSBzZWxlY3Rpb247IGlmIG5vdCwgYWRkIHNlbGVjdGlvblxyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkID0gIXRoaXMuc2VsZWN0ZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIEFsbCBvdGhlciBjb250ZXh0dWFsIG1lbnUgdmFyaWFudHNcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgLy8gLy8gRGVzZWxlY3QgYWxsIG9mIHRoZSBpdGVtcyBhbmQgY2xvc2UgYW55IG1lbnVzLlxyXG4gICAgICAgICAgICAvLyAkKCcubXMtQ29udGV4dHVhbE1lbnUtbGluaycpXHJcbiAgICAgICAgICAgIC8vICAgICAucmVtb3ZlQ2xhc3MoJ2lzLXNlbGVjdGVkJylcclxuICAgICAgICAgICAgLy8gICAgIC5zaWJsaW5ncygnLm1zLUNvbnRleHR1YWxNZW51LWNvbnRhaW5lcicpXHJcbiAgICAgICAgICAgIC8vICAgICAuZmluZCgnLm1zLUNvbnRleHR1YWxNZW51JylcclxuICAgICAgICAgICAgLy8gICAgIC5yZW1vdmVDbGFzcygnaXMtb3BlbicpO1xyXG5cclxuICAgICAgICAgICAgLy8gLy8gU2VsZWN0IHRoaXMgaXRlbS5cclxuICAgICAgICAgICAgLy8gJCh0aGlzKS5hZGRDbGFzcygnaXMtc2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgLy8gLy90aGlzLnNlbGVjdGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuJHBhcmVudE1lbnUpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kcGFyZW50TWVudS5jbG9zZURlc2VsZWN0Q2hpbGQodGhpcyk7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYodGhpcy5oYXNNZW51ICYmIHRoaXMuJGNvbnRleHR1YWxNZW51KXtcclxuICAgICAgICAgICAgICAgIHRoaXMuJGNvbnRleHR1YWxNZW51LmlzT3BlbiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAvLyBPcGVuIHRoZSBtZW51IHdpdGhvdXQgYnViYmxpbmcgdXAgdGhlIGNsaWNrIGV2ZW50LFxyXG4gICAgICAgICAgICAgICAgLy8gd2hpY2ggY2FuIGNhdXNlIHRoZSBtZW51IHRvIGNsb3NlLlxyXG4gICAgICAgICAgICAgICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXRlbUNsaWNrICYmIHR5cGVvZiB0aGlzLml0ZW1DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1DbGljaygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNsb3NlRGVzZWxlY3RJdGVtKCl7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgICAgIGlmKHRoaXMuJGNvbnRleHR1YWxNZW51KXtcclxuICAgICAgICAgICAgdGhpcy4kY29udGV4dHVhbE1lbnUuaXNPcGVuID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
