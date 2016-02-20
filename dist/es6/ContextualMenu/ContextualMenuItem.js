var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { customElement, bindable, inject, child } from 'aurelia-framework';
import { OfficeContextualMenu } from "./Contextualmenu";
export let OfficeContextualMenuItem = class {
    constructor(element, $parentMenu) {
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
    attached() {
        this.icon = this.hasMenu && this.icon === '' ? 'chevronDown' : this.icon;
    }
    linkClickHandler($event) {
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
    }
    closeDeselectItem() {
        this.selected = false;
        if (this.$contextualMenu) {
            this.$contextualMenu.isOpen = false;
        }
    }
};
__decorate([
    bindable, 
    __metadata('design:type', String)
], OfficeContextualMenuItem.prototype, "linkText", void 0);
__decorate([
    bindable, 
    __metadata('design:type', String)
], OfficeContextualMenuItem.prototype, "headerText", void 0);
__decorate([
    bindable, 
    __metadata('design:type', String)
], OfficeContextualMenuItem.prototype, "icon", void 0);
__decorate([
    bindable, 
    __metadata('design:type', String)
], OfficeContextualMenuItem.prototype, "href", void 0);
__decorate([
    bindable, 
    __metadata('design:type', Boolean)
], OfficeContextualMenuItem.prototype, "hasMenu", void 0);
__decorate([
    bindable, 
    __metadata('design:type', Boolean)
], OfficeContextualMenuItem.prototype, "divider", void 0);
__decorate([
    bindable, 
    __metadata('design:type', Boolean)
], OfficeContextualMenuItem.prototype, "header", void 0);
__decorate([
    bindable, 
    __metadata('design:type', Boolean)
], OfficeContextualMenuItem.prototype, "disabled", void 0);
__decorate([
    bindable({ defaultBindingMode: 2 }), 
    __metadata('design:type', Boolean)
], OfficeContextualMenuItem.prototype, "selected", void 0);
__decorate([
    bindable, 
    __metadata('design:type', Function)
], OfficeContextualMenuItem.prototype, "itemClick", void 0);
__decorate([
    bindable, 
    __metadata('design:type', Function)
], OfficeContextualMenuItem.prototype, "click", void 0);
__decorate([
    child('office-contextualmenu'), 
    __metadata('design:type', OfficeContextualMenu)
], OfficeContextualMenuItem.prototype, "$contextualMenu", void 0);
OfficeContextualMenuItem = __decorate([
    inject(Element, OfficeContextualMenu),
    customElement('office-contextualmenu-item'), 
    __metadata('design:paramtypes', [Element, OfficeContextualMenu])
], OfficeContextualMenuItem);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbnRleHR1YWxNZW51L0NvbnRleHR1YWxNZW51SXRlbS50cyJdLCJuYW1lcyI6WyJPZmZpY2VDb250ZXh0dWFsTWVudUl0ZW0iLCJPZmZpY2VDb250ZXh0dWFsTWVudUl0ZW0uY29uc3RydWN0b3IiLCJPZmZpY2VDb250ZXh0dWFsTWVudUl0ZW0uYXR0YWNoZWQiLCJPZmZpY2VDb250ZXh0dWFsTWVudUl0ZW0ubGlua0NsaWNrSGFuZGxlciIsIk9mZmljZUNvbnRleHR1YWxNZW51SXRlbS5jbG9zZURlc2VsZWN0SXRlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O09BQU8sRUFBQyxhQUFhLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQXlCLE1BQU0sbUJBQW1CO09BQ3pGLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSxrQkFBa0I7QUFHckQ7SUFlSUEsWUFBb0JBLE9BQWdCQSxFQUFVQSxXQUFpQ0E7UUFBM0RDLFlBQU9BLEdBQVBBLE9BQU9BLENBQVNBO1FBQVVBLGdCQUFXQSxHQUFYQSxXQUFXQSxDQUFzQkE7UUFackVBLGFBQVFBLEdBQVdBLEVBQUVBLENBQUNBO1FBQ3RCQSxlQUFVQSxHQUFXQSxFQUFFQSxDQUFDQTtRQUN4QkEsU0FBSUEsR0FBV0EsRUFBRUEsQ0FBQ0E7UUFDbEJBLFNBQUlBLEdBQVdBLEdBQUdBLENBQUNBO1FBQ25CQSxZQUFPQSxHQUFZQSxLQUFLQSxDQUFDQTtRQUN6QkEsWUFBT0EsR0FBWUEsS0FBS0EsQ0FBQ0E7UUFDekJBLFdBQU1BLEdBQVlBLEtBQUtBLENBQUNBO1FBRTRCQSxhQUFRQSxHQUFZQSxLQUFLQSxDQUFDQTtJQU14RkEsQ0FBQ0E7SUFDREQsUUFBUUE7UUFDSkUsSUFBSUEsQ0FBQ0EsSUFBSUEsR0FBR0EsSUFBSUEsQ0FBQ0EsT0FBT0EsSUFBSUEsSUFBSUEsQ0FBQ0EsSUFBSUEsS0FBS0EsRUFBRUEsR0FBR0EsYUFBYUEsR0FBR0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0E7SUFDN0VBLENBQUNBO0lB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QUFTLFVBQVc7QUFDOUI7SUFBQyxRQUFROztHQUFDLDJDQUFLLFVBQVc7QUFDMUI7SUFBQyxLQUFLLENBQUMsdUJBQXVCLENBQUM7O0dBQUMscURBQWUsVUFBdUI7QUFkMUU7SUFBQyxNQUFNLENBQUMsT0FBTyxFQUFFLG9CQUFvQixDQUFDO0lBQ3JDLGFBQWEsQ0FBQyw0QkFBNEIsQ0FBQzs7NkJBK0UzQztBQUFBIiwiZmlsZSI6IkNvbnRleHR1YWxNZW51L0NvbnRleHR1YWxNZW51SXRlbS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3VzdG9tRWxlbWVudCwgYmluZGFibGUsIGluamVjdCwgY2hpbGQsIGNoaWxkcmVuLCB1c2VTaGFkb3dET019IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IHtPZmZpY2VDb250ZXh0dWFsTWVudX0gZnJvbSBcIi4vQ29udGV4dHVhbG1lbnVcIjtcclxuXHJcbi8vQHVzZVNoYWRvd0RPTSgpXHJcbkBpbmplY3QoRWxlbWVudCwgT2ZmaWNlQ29udGV4dHVhbE1lbnUpXHJcbkBjdXN0b21FbGVtZW50KCdvZmZpY2UtY29udGV4dHVhbG1lbnUtaXRlbScpXHJcbmV4cG9ydCBjbGFzcyBPZmZpY2VDb250ZXh0dWFsTWVudUl0ZW0ge1xyXG4gICAgQGJpbmRhYmxlIGxpbmtUZXh0OiBzdHJpbmcgPSAnJztcclxuICAgIEBiaW5kYWJsZSBoZWFkZXJUZXh0OiBzdHJpbmcgPSAnJztcclxuICAgIEBiaW5kYWJsZSBpY29uOiBzdHJpbmcgPSAnJztcclxuICAgIEBiaW5kYWJsZSBocmVmOiBzdHJpbmcgPSAnIyc7XHJcbiAgICBAYmluZGFibGUgaGFzTWVudTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgQGJpbmRhYmxlIGRpdmlkZXI6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIEBiaW5kYWJsZSBoZWFkZXI6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIEBiaW5kYWJsZSBkaXNhYmxlZDogYm9vbGVhbjtcclxuICAgIEBiaW5kYWJsZSh7IGRlZmF1bHRCaW5kaW5nTW9kZTogMiAvKiBiaW5kaW5nTW9kZS50d29XYXkgKi8gfSkgc2VsZWN0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIEBiaW5kYWJsZSBpdGVtQ2xpY2s6IEZ1bmN0aW9uO1xyXG4gICAgQGJpbmRhYmxlIGNsaWNrOiBGdW5jdGlvbjtcclxuICAgIEBjaGlsZCgnb2ZmaWNlLWNvbnRleHR1YWxtZW51JykgJGNvbnRleHR1YWxNZW51OiBPZmZpY2VDb250ZXh0dWFsTWVudTtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogRWxlbWVudCwgcHJpdmF0ZSAkcGFyZW50TWVudTogT2ZmaWNlQ29udGV4dHVhbE1lbnUpIHtcclxuXHJcbiAgICB9XHJcbiAgICBhdHRhY2hlZCgpIHtcclxuICAgICAgICB0aGlzLmljb24gPSB0aGlzLmhhc01lbnUgJiYgdGhpcy5pY29uID09PSAnJyA/ICdjaGV2cm9uRG93bicgOiB0aGlzLmljb247XHJcbiAgICB9XHJcbiAgICBsaW5rQ2xpY2tIYW5kbGVyKCRldmVudDogRXZlbnQpIHtcclxuICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICh0aGlzLml0ZW1DbGljayAmJiB0eXBlb2YgdGhpcy5pdGVtQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgdGhpcy5pdGVtQ2xpY2soKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuY2xpY2sgJiYgdHlwZW9mIHRoaXMuY2xpY2sgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgdGhpcy5jbGljayh7JG1lbnVJdGVtOnRoaXN9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy91bnRpbCBzaGFkb3dkb20gYnVnIGlzIGZpeGVkIHdpdGggQXVyZWxpYS4gSSBkbyBoYXZlIHRvIGZpZ3VyZSBvdXQgc3R5bGluZyB1bmRlciBzaGFkb3cgZG9tIGZvciBmYWJyaWMuIFxyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgICBcclxuICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBDaGVjayBpZiBtdWx0aXNlbGVjdCAtIHNldCBzZWxlY3RlZCBzdGF0ZXNcclxuICAgICAgICBpZiAodGhpcy4kcGFyZW50TWVudS5tdWx0aVNlbGVjdCkge1xyXG4gICAgICAgICAgICAvLyBJZiBhbHJlYWR5IHNlbGVjdGVkLCByZW1vdmUgc2VsZWN0aW9uOyBpZiBub3QsIGFkZCBzZWxlY3Rpb25cclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZCA9ICF0aGlzLnNlbGVjdGVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBBbGwgb3RoZXIgY29udGV4dHVhbCBtZW51IHZhcmlhbnRzXHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIC8vIERlc2VsZWN0IGFsbCBvZiB0aGUgaXRlbXMgYW5kIGNsb3NlIGFueSBtZW51cy5cclxuICAgICAgICAgICAgLy8gJCgnLm1zLUNvbnRleHR1YWxNZW51LWxpbmsnKVxyXG4gICAgICAgICAgICAvLyAgICAgLnJlbW92ZUNsYXNzKCdpcy1zZWxlY3RlZCcpXHJcbiAgICAgICAgICAgIC8vICAgICAuc2libGluZ3MoJy5tcy1Db250ZXh0dWFsTWVudS1jb250YWluZXInKVxyXG4gICAgICAgICAgICAvLyAgICAgLmZpbmQoJy5tcy1Db250ZXh0dWFsTWVudScpXHJcbiAgICAgICAgICAgIC8vICAgICAucmVtb3ZlQ2xhc3MoJ2lzLW9wZW4nKTtcclxuXHJcbiAgICAgICAgICAgIC8vIC8vIFNlbGVjdCB0aGlzIGl0ZW0uXHJcbiAgICAgICAgICAgIC8vICQodGhpcykuYWRkQ2xhc3MoJ2lzLXNlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgIC8vIC8vdGhpcy5zZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBpZih0aGlzLiRwYXJlbnRNZW51KXtcclxuICAgICAgICAgICAgICAgIHRoaXMuJHBhcmVudE1lbnUuY2xvc2VEZXNlbGVjdENoaWxkKHRoaXMpOyAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKHRoaXMuaGFzTWVudSAmJiB0aGlzLiRjb250ZXh0dWFsTWVudSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRjb250ZXh0dWFsTWVudS5pc09wZW4gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgLy8gT3BlbiB0aGUgbWVudSB3aXRob3V0IGJ1YmJsaW5nIHVwIHRoZSBjbGljayBldmVudCxcclxuICAgICAgICAgICAgICAgIC8vIHdoaWNoIGNhbiBjYXVzZSB0aGUgbWVudSB0byBjbG9zZS5cclxuICAgICAgICAgICAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLml0ZW1DbGljayAmJiB0eXBlb2YgdGhpcy5pdGVtQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgdGhpcy5pdGVtQ2xpY2soKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjbG9zZURlc2VsZWN0SXRlbSgpe1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgICAgICBpZih0aGlzLiRjb250ZXh0dWFsTWVudSl7XHJcbiAgICAgICAgICAgIHRoaXMuJGNvbnRleHR1YWxNZW51LmlzT3BlbiA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
