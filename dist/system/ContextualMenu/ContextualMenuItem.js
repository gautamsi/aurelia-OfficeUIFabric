System.register(['aurelia-framework', "./Contextualmenu"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var aurelia_framework_1, Contextualmenu_1;
    var OfficeContextualMenuItem;
    return {
        setters:[
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (Contextualmenu_1_1) {
                Contextualmenu_1 = Contextualmenu_1_1;
            }],
        execute: function() {
            OfficeContextualMenuItem = (function () {
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
            exports_1("OfficeContextualMenuItem", OfficeContextualMenuItem);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbnRleHR1YWxNZW51L0NvbnRleHR1YWxNZW51SXRlbS50cyJdLCJuYW1lcyI6WyJPZmZpY2VDb250ZXh0dWFsTWVudUl0ZW0iLCJPZmZpY2VDb250ZXh0dWFsTWVudUl0ZW0uY29uc3RydWN0b3IiLCJPZmZpY2VDb250ZXh0dWFsTWVudUl0ZW0uYXR0YWNoZWQiLCJPZmZpY2VDb250ZXh0dWFsTWVudUl0ZW0ubGlua0NsaWNrSGFuZGxlciIsIk9mZmljZUNvbnRleHR1YWxNZW51SXRlbS5jbG9zZURlc2VsZWN0SXRlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBSUE7Z0JBZUlBLGtDQUFvQkEsT0FBZ0JBLEVBQVVBLFdBQWlDQTtvQkFBM0RDLFlBQU9BLEdBQVBBLE9BQU9BLENBQVNBO29CQUFVQSxnQkFBV0EsR0FBWEEsV0FBV0EsQ0FBc0JBO29CQVpyRUEsYUFBUUEsR0FBV0EsRUFBRUEsQ0FBQ0E7b0JBQ3RCQSxlQUFVQSxHQUFXQSxFQUFFQSxDQUFDQTtvQkFDeEJBLFNBQUlBLEdBQVdBLEVBQUVBLENBQUNBO29CQUNsQkEsU0FBSUEsR0FBV0EsR0FBR0EsQ0FBQ0E7b0JBQ25CQSxZQUFPQSxHQUFZQSxLQUFLQSxDQUFDQTtvQkFDekJBLFlBQU9BLEdBQVlBLEtBQUtBLENBQUNBO29CQUN6QkEsV0FBTUEsR0FBWUEsS0FBS0EsQ0FBQ0E7b0JBRTRCQSxhQUFRQSxHQUFZQSxLQUFLQSxDQUFDQTtnQkFNeEZBLENBQUNBO2dCQUNERCwyQ0FBUUEsR0FBUkE7b0JBQ0lFLElBQUlBLENBQUNBLElBQUlBLEdBQUdBLElBQUlBLENBQUNBLE9BQU9BLElBQUlBLElBQUlBLENBQUNBLElBQUlBLEtBQUtBLEVBQUVBLEdBQUdBLGFBQWFBLEdBQUdBLElBQUlBLENBQUNBLElBQUlBLENBQUNBO2dCQUM3RUEsQ0FBQ0E7Z0JBQ0RGLG1EQUFnQkEsR0FBaEJBLFVBQWlCQSxNQUFhQTtvQkFDMUJHLEVBQUVBLENBQUNBLENBQUNBLElBQUlB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RUEsQ0FBQ0EsRUFBMkJBLENBQUNBOzttQkFBQ0EsOENBQVFBLFVBQWtCQTtnQkFDeEZBO29CQUFDQSw0QkFBUUE7O21CQUFDQSwrQ0FBU0EsVUFBV0E7Z0JBQzlCQTtvQkFBQ0EsNEJBQVFBOzttQkFBQ0EsMkNBQUtBLFVBQVdBO2dCQUMxQkE7b0JBQUNBLHlCQUFLQSxDQUFDQSx1QkFBdUJBLENBQUNBOzttQkFBQ0EscURBQWVBLFVBQXVCQTtnQkFkMUVBO29CQUFDQSwwQkFBTUEsQ0FBQ0EsT0FBT0EsRUFBRUEscUNBQW9CQSxDQUFDQTtvQkFDckNBLGlDQUFhQSxDQUFDQSw0QkFBNEJBLENBQUNBOzs2Q0ErRTNDQTtnQkFBREEsK0JBQUNBO1lBQURBLENBaEZBLEFBZ0ZDQSxJQUFBO1lBaEZELCtEQWdGQyxDQUFBIiwiZmlsZSI6IkNvbnRleHR1YWxNZW51L0NvbnRleHR1YWxNZW51SXRlbS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3VzdG9tRWxlbWVudCwgYmluZGFibGUsIGluamVjdCwgY2hpbGQsIGNoaWxkcmVuLCB1c2VTaGFkb3dET019IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IHtPZmZpY2VDb250ZXh0dWFsTWVudX0gZnJvbSBcIi4vQ29udGV4dHVhbG1lbnVcIjtcclxuXHJcbi8vQHVzZVNoYWRvd0RPTSgpXHJcbkBpbmplY3QoRWxlbWVudCwgT2ZmaWNlQ29udGV4dHVhbE1lbnUpXHJcbkBjdXN0b21FbGVtZW50KCdvZmZpY2UtY29udGV4dHVhbG1lbnUtaXRlbScpXHJcbmV4cG9ydCBjbGFzcyBPZmZpY2VDb250ZXh0dWFsTWVudUl0ZW0ge1xyXG4gICAgQGJpbmRhYmxlIGxpbmtUZXh0OiBzdHJpbmcgPSAnJztcclxuICAgIEBiaW5kYWJsZSBoZWFkZXJUZXh0OiBzdHJpbmcgPSAnJztcclxuICAgIEBiaW5kYWJsZSBpY29uOiBzdHJpbmcgPSAnJztcclxuICAgIEBiaW5kYWJsZSBocmVmOiBzdHJpbmcgPSAnIyc7XHJcbiAgICBAYmluZGFibGUgaGFzTWVudTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgQGJpbmRhYmxlIGRpdmlkZXI6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIEBiaW5kYWJsZSBoZWFkZXI6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIEBiaW5kYWJsZSBkaXNhYmxlZDogYm9vbGVhbjtcclxuICAgIEBiaW5kYWJsZSh7IGRlZmF1bHRCaW5kaW5nTW9kZTogMiAvKiBiaW5kaW5nTW9kZS50d29XYXkgKi8gfSkgc2VsZWN0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIEBiaW5kYWJsZSBpdGVtQ2xpY2s6IEZ1bmN0aW9uO1xyXG4gICAgQGJpbmRhYmxlIGNsaWNrOiBGdW5jdGlvbjtcclxuICAgIEBjaGlsZCgnb2ZmaWNlLWNvbnRleHR1YWxtZW51JykgJGNvbnRleHR1YWxNZW51OiBPZmZpY2VDb250ZXh0dWFsTWVudTtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogRWxlbWVudCwgcHJpdmF0ZSAkcGFyZW50TWVudTogT2ZmaWNlQ29udGV4dHVhbE1lbnUpIHtcclxuXHJcbiAgICB9XHJcbiAgICBhdHRhY2hlZCgpIHtcclxuICAgICAgICB0aGlzLmljb24gPSB0aGlzLmhhc01lbnUgJiYgdGhpcy5pY29uID09PSAnJyA/ICdjaGV2cm9uRG93bicgOiB0aGlzLmljb247XHJcbiAgICB9XHJcbiAgICBsaW5rQ2xpY2tIYW5kbGVyKCRldmVudDogRXZlbnQpIHtcclxuICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICh0aGlzLml0ZW1DbGljayAmJiB0eXBlb2YgdGhpcy5pdGVtQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgdGhpcy5pdGVtQ2xpY2soKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuY2xpY2sgJiYgdHlwZW9mIHRoaXMuY2xpY2sgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgdGhpcy5jbGljayh7JG1lbnVJdGVtOnRoaXN9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy91bnRpbCBzaGFkb3dkb20gYnVnIGlzIGZpeGVkIHdpdGggQXVyZWxpYS4gSSBkbyBoYXZlIHRvIGZpZ3VyZSBvdXQgc3R5bGluZyB1bmRlciBzaGFkb3cgZG9tIGZvciBmYWJyaWMuIFxyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgICBcclxuICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBDaGVjayBpZiBtdWx0aXNlbGVjdCAtIHNldCBzZWxlY3RlZCBzdGF0ZXNcclxuICAgICAgICBpZiAodGhpcy4kcGFyZW50TWVudS5tdWx0aVNlbGVjdCkge1xyXG4gICAgICAgICAgICAvLyBJZiBhbHJlYWR5IHNlbGVjdGVkLCByZW1vdmUgc2VsZWN0aW9uOyBpZiBub3QsIGFkZCBzZWxlY3Rpb25cclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZCA9ICF0aGlzLnNlbGVjdGVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBBbGwgb3RoZXIgY29udGV4dHVhbCBtZW51IHZhcmlhbnRzXHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIC8vIERlc2VsZWN0IGFsbCBvZiB0aGUgaXRlbXMgYW5kIGNsb3NlIGFueSBtZW51cy5cclxuICAgICAgICAgICAgLy8gJCgnLm1zLUNvbnRleHR1YWxNZW51LWxpbmsnKVxyXG4gICAgICAgICAgICAvLyAgICAgLnJlbW92ZUNsYXNzKCdpcy1zZWxlY3RlZCcpXHJcbiAgICAgICAgICAgIC8vICAgICAuc2libGluZ3MoJy5tcy1Db250ZXh0dWFsTWVudS1jb250YWluZXInKVxyXG4gICAgICAgICAgICAvLyAgICAgLmZpbmQoJy5tcy1Db250ZXh0dWFsTWVudScpXHJcbiAgICAgICAgICAgIC8vICAgICAucmVtb3ZlQ2xhc3MoJ2lzLW9wZW4nKTtcclxuXHJcbiAgICAgICAgICAgIC8vIC8vIFNlbGVjdCB0aGlzIGl0ZW0uXHJcbiAgICAgICAgICAgIC8vICQodGhpcykuYWRkQ2xhc3MoJ2lzLXNlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgIC8vIC8vdGhpcy5zZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBpZih0aGlzLiRwYXJlbnRNZW51KXtcclxuICAgICAgICAgICAgICAgIHRoaXMuJHBhcmVudE1lbnUuY2xvc2VEZXNlbGVjdENoaWxkKHRoaXMpOyAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKHRoaXMuaGFzTWVudSAmJiB0aGlzLiRjb250ZXh0dWFsTWVudSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRjb250ZXh0dWFsTWVudS5pc09wZW4gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgLy8gT3BlbiB0aGUgbWVudSB3aXRob3V0IGJ1YmJsaW5nIHVwIHRoZSBjbGljayBldmVudCxcclxuICAgICAgICAgICAgICAgIC8vIHdoaWNoIGNhbiBjYXVzZSB0aGUgbWVudSB0byBjbG9zZS5cclxuICAgICAgICAgICAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLml0ZW1DbGljayAmJiB0eXBlb2YgdGhpcy5pdGVtQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgdGhpcy5pdGVtQ2xpY2soKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjbG9zZURlc2VsZWN0SXRlbSgpe1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgICAgICBpZih0aGlzLiRjb250ZXh0dWFsTWVudSl7XHJcbiAgICAgICAgICAgIHRoaXMuJGNvbnRleHR1YWxNZW51LmlzT3BlbiA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
