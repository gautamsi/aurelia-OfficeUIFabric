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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbnRleHR1YWxNZW51L0NvbnRleHR1YWxNZW51SXRlbS50cyJdLCJuYW1lcyI6WyJPZmZpY2VDb250ZXh0dWFsTWVudUl0ZW0iLCJPZmZpY2VDb250ZXh0dWFsTWVudUl0ZW0uY29uc3RydWN0b3IiLCJPZmZpY2VDb250ZXh0dWFsTWVudUl0ZW0uYXR0YWNoZWQiLCJPZmZpY2VDb250ZXh0dWFsTWVudUl0ZW0ubGlua0NsaWNrSGFuZGxlciIsIk9mZmljZUNvbnRleHR1YWxNZW51SXRlbS5jbG9zZURlc2VsZWN0SXRlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsa0NBQTZFLG1CQUFtQixDQUFDLENBQUE7QUFDakcsK0JBQW1DLGtCQUFrQixDQUFDLENBQUE7QUFHdEQ7SUFjSUEsa0NBQW9CQSxPQUFnQkEsRUFBVUEsV0FBaUNBO1FBQTNEQyxZQUFPQSxHQUFQQSxPQUFPQSxDQUFTQTtRQUFVQSxnQkFBV0EsR0FBWEEsV0FBV0EsQ0FBc0JBO1FBWHJFQSxhQUFRQSxHQUFXQSxFQUFFQSxDQUFDQTtRQUN0QkEsZUFBVUEsR0FBV0EsRUFBRUEsQ0FBQ0E7UUFDeEJBLFNBQUlBLEdBQVdBLEVBQUVBLENBQUNBO1FBQ2xCQSxTQUFJQSxHQUFXQSxHQUFHQSxDQUFDQTtRQUNuQkEsWUFBT0EsR0FBWUEsS0FBS0EsQ0FBQ0E7UUFDekJBLFlBQU9BLEdBQVlBLEtBQUtBLENBQUNBO1FBQ3pCQSxXQUFNQSxHQUFZQSxLQUFLQSxDQUFDQTtRQUU0QkEsYUFBUUEsR0FBWUEsS0FBS0EsQ0FBQ0E7SUFLeEZBLENBQUNBO0lBQ0RELDJDQUFRQSxHQUFSQTtRQUNJRSxJQUFJQSxDQUFDQSxJQUFJQSxHQUFHQSxJQUFJQSxDQUFDQSxPQUFPQSxJQUFJQSxJQUFJQSxDQUFDQSxJQUFJQSxLQUFLQSxFQUFFQSxHQUFHQSxhQUFhQSxHQUFHQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQTtJQUM3RUEsQ0FBQ0E7SUFDREYsbURBQWdCQSxHQUFoQkEsVUFBaUJBLE1BQWFB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bnRleHR1YWxNZW51SXRlbS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3VzdG9tRWxlbWVudCwgYmluZGFibGUsIGluamVjdCwgY2hpbGQsIGNoaWxkcmVuLCB1c2VTaGFkb3dET019IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IHtPZmZpY2VDb250ZXh0dWFsTWVudX0gZnJvbSBcIi4vQ29udGV4dHVhbG1lbnVcIjtcclxuXHJcbi8vQHVzZVNoYWRvd0RPTSgpXHJcbkBpbmplY3QoRWxlbWVudCwgT2ZmaWNlQ29udGV4dHVhbE1lbnUpXHJcbkBjdXN0b21FbGVtZW50KCdvZmZpY2UtY29udGV4dHVhbG1lbnUtaXRlbScpXHJcbmV4cG9ydCBjbGFzcyBPZmZpY2VDb250ZXh0dWFsTWVudUl0ZW0ge1xyXG4gICAgQGJpbmRhYmxlIGxpbmtUZXh0OiBzdHJpbmcgPSAnJztcclxuICAgIEBiaW5kYWJsZSBoZWFkZXJUZXh0OiBzdHJpbmcgPSAnJztcclxuICAgIEBiaW5kYWJsZSBpY29uOiBzdHJpbmcgPSAnJztcclxuICAgIEBiaW5kYWJsZSBocmVmOiBzdHJpbmcgPSAnIyc7XHJcbiAgICBAYmluZGFibGUgaGFzTWVudTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgQGJpbmRhYmxlIGRpdmlkZXI6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIEBiaW5kYWJsZSBoZWFkZXI6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIEBiaW5kYWJsZSBkaXNhYmxlZDogYm9vbGVhbjtcclxuICAgIEBiaW5kYWJsZSh7IGRlZmF1bHRCaW5kaW5nTW9kZTogMiAvKiBiaW5kaW5nTW9kZS50d29XYXkgKi8gfSkgc2VsZWN0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIEBiaW5kYWJsZSBjbGljazogRnVuY3Rpb247XHJcbiAgICBAY2hpbGQoJ29mZmljZS1jb250ZXh0dWFsbWVudScpICRjb250ZXh0dWFsTWVudTogT2ZmaWNlQ29udGV4dHVhbE1lbnU7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnQsIHByaXZhdGUgJHBhcmVudE1lbnU6IE9mZmljZUNvbnRleHR1YWxNZW51KSB7XHJcblxyXG4gICAgfVxyXG4gICAgYXR0YWNoZWQoKSB7XHJcbiAgICAgICAgdGhpcy5pY29uID0gdGhpcy5oYXNNZW51ICYmIHRoaXMuaWNvbiA9PT0gJycgPyAnY2hldnJvbkRvd24nIDogdGhpcy5pY29uO1xyXG4gICAgfVxyXG4gICAgbGlua0NsaWNrSGFuZGxlcigkZXZlbnQ6IEV2ZW50KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgICAgIGlmICh0aGlzLmNsaWNrICYmIHR5cGVvZiB0aGlzLmNsaWNrID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xpY2soeyRtZW51SXRlbTp0aGlzfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vdW50aWwgc2hhZG93ZG9tIGJ1ZyBpcyBmaXhlZCB3aXRoIEF1cmVsaWEuIEkgZG8gaGF2ZSB0byBmaWd1cmUgb3V0IHN0eWxpbmcgdW5kZXIgc2hhZG93IGRvbSBmb3IgZmFicmljLiBcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgICAgXHJcbiAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gQ2hlY2sgaWYgbXVsdGlzZWxlY3QgLSBzZXQgc2VsZWN0ZWQgc3RhdGVzXHJcbiAgICAgICAgaWYgKHRoaXMuJHBhcmVudE1lbnUubXVsdGlTZWxlY3QpIHtcclxuICAgICAgICAgICAgLy8gSWYgYWxyZWFkeSBzZWxlY3RlZCwgcmVtb3ZlIHNlbGVjdGlvbjsgaWYgbm90LCBhZGQgc2VsZWN0aW9uXHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWQgPSAhdGhpcy5zZWxlY3RlZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gQWxsIG90aGVyIGNvbnRleHR1YWwgbWVudSB2YXJpYW50c1xyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAvLyAvLyBEZXNlbGVjdCBhbGwgb2YgdGhlIGl0ZW1zIGFuZCBjbG9zZSBhbnkgbWVudXMuXHJcbiAgICAgICAgICAgIC8vICQoJy5tcy1Db250ZXh0dWFsTWVudS1saW5rJylcclxuICAgICAgICAgICAgLy8gICAgIC5yZW1vdmVDbGFzcygnaXMtc2VsZWN0ZWQnKVxyXG4gICAgICAgICAgICAvLyAgICAgLnNpYmxpbmdzKCcubXMtQ29udGV4dHVhbE1lbnUtY29udGFpbmVyJylcclxuICAgICAgICAgICAgLy8gICAgIC5maW5kKCcubXMtQ29udGV4dHVhbE1lbnUnKVxyXG4gICAgICAgICAgICAvLyAgICAgLnJlbW92ZUNsYXNzKCdpcy1vcGVuJyk7XHJcblxyXG4gICAgICAgICAgICAvLyAvLyBTZWxlY3QgdGhpcyBpdGVtLlxyXG4gICAgICAgICAgICAvLyAkKHRoaXMpLmFkZENsYXNzKCdpcy1zZWxlY3RlZCcpO1xyXG4gICAgICAgICAgICAvLyAvL3RoaXMuc2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgaWYodGhpcy4kcGFyZW50TWVudSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRwYXJlbnRNZW51LmNsb3NlRGVzZWxlY3RDaGlsZCh0aGlzKTsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZih0aGlzLmhhc01lbnUgJiYgdGhpcy4kY29udGV4dHVhbE1lbnUpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kY29udGV4dHVhbE1lbnUuaXNPcGVuID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIC8vIE9wZW4gdGhlIG1lbnUgd2l0aG91dCBidWJibGluZyB1cCB0aGUgY2xpY2sgZXZlbnQsXHJcbiAgICAgICAgICAgICAgICAvLyB3aGljaCBjYW4gY2F1c2UgdGhlIG1lbnUgdG8gY2xvc2UuXHJcbiAgICAgICAgICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2xvc2VEZXNlbGVjdEl0ZW0oKXtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkID0gZmFsc2U7XHJcbiAgICAgICAgaWYodGhpcy4kY29udGV4dHVhbE1lbnUpe1xyXG4gICAgICAgICAgICB0aGlzLiRjb250ZXh0dWFsTWVudS5pc09wZW4gPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
