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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbnRleHR1YWxNZW51L0NvbnRleHR1YWxNZW51SXRlbS50cyJdLCJuYW1lcyI6WyJPZmZpY2VDb250ZXh0dWFsTWVudUl0ZW0iLCJPZmZpY2VDb250ZXh0dWFsTWVudUl0ZW0uY29uc3RydWN0b3IiLCJPZmZpY2VDb250ZXh0dWFsTWVudUl0ZW0uYXR0YWNoZWQiLCJPZmZpY2VDb250ZXh0dWFsTWVudUl0ZW0ubGlua0NsaWNrSGFuZGxlciIsIk9mZmljZUNvbnRleHR1YWxNZW51SXRlbS5jbG9zZURlc2VsZWN0SXRlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O09BQU8sRUFBQyxhQUFhLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQXlCLE1BQU0sbUJBQW1CO09BQ3pGLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSxrQkFBa0I7QUFHckQ7SUFjSUEsWUFBb0JBLE9BQWdCQSxFQUFVQSxXQUFpQ0E7UUFBM0RDLFlBQU9BLEdBQVBBLE9BQU9BLENBQVNBO1FBQVVBLGdCQUFXQSxHQUFYQSxXQUFXQSxDQUFzQkE7UUFYckVBLGFBQVFBLEdBQVdBLEVBQUVBLENBQUNBO1FBQ3RCQSxlQUFVQSxHQUFXQSxFQUFFQSxDQUFDQTtRQUN4QkEsU0FBSUEsR0FBV0EsRUFBRUEsQ0FBQ0E7UUFDbEJBLFNBQUlBLEdBQVdBLEdBQUdBLENBQUNBO1FBQ25CQSxZQUFPQSxHQUFZQSxLQUFLQSxDQUFDQTtRQUN6QkEsWUFBT0EsR0FBWUEsS0FBS0EsQ0FBQ0E7UUFDekJBLFdBQU1BLEdBQVlBLEtBQUtBLENBQUNBO1FBRTRCQSxhQUFRQSxHQUFZQSxLQUFLQSxDQUFDQTtJQUt4RkEsQ0FBQ0E7SUFDREQsUUFBUUE7UUFDSkUsSUFBSUEsQ0FBQ0EsSUFBSUEsR0FBR0EsSUFBSUEsQ0FBQ0EsT0FBT0EsSUFBSUEsSUFBSUEsQ0FBQ0EsSUFBSUEsS0FBS0EsRUFBRUEsR0FBR0EsYUFBYUEsR0FBR0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0E7SUFDN0VBLENBQUNBO0lBQ0RGLGdCQUFnQkEsQ0FBQ0EsTUFBYUE7UUFDMUJHLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLFFBQVFBLENBQUNBLENBQUNBLENBQUNBO1lBQ2hCQSxNQUFNQSxDQUFDQTtRQUNYQSxDQUFDQTtRQUVEQSxFQUFFQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxJQUFJQSxPQUFPQSxJQUFJQSxDQUFDQSxLQUFLQSxLQUFLQSxVQUFVQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNqREEsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsRUFBQ0EsU0FBU0EsRUFBQ0EsSUFBSUEsRUFBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDakNBLENBQUNBO1FBSURBLE1BQU1BLENBQUNBO1FBRVBBLE1BQU1BLENBQUNBLGNBQWNBLEVBQUVBLENBQUNBO1FBR3hCQSxFQUFFQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxXQUFXQSxDQUFDQSxXQUFXQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUUvQkEsSUFBSUEsQ0FBQ0EsUUFBUUEsR0FBR0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0E7UUFDbkNBLENBQUNBO1FBRURBLElBQUlBLENBQUNBLENBQUNBO1lBV0ZBLEVBQUVBLENBQUFBLENBQUNBLElBQUlBLENBQUNBLFdBQVdBLENBQUNBLENBQUFBLENBQUNBO2dCQUNqQkEsSUFBSUEsQ0FBQ0EsV0FBV0EsQ0FBQ0Esa0JBQWtCQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtZQUM5Q0EsQ0FBQ0E7WUFDREEsSUFBSUEsQ0FBQ0EsUUFBUUEsR0FBR0EsSUFBSUEsQ0FBQ0E7WUFFckJBLEVBQUVBLENBQUFBLENBQUNBLElBQUlBLENBQUNBLE9BQU9BLElBQUlBLElBQUlBLENBQUNBLGVBQWVBLENBQUNBLENBQUFBLENBQUNBO2dCQUNyQ0EsSUFBSUEsQ0FBQ0EsZUFBZUEsQ0FBQ0EsTUFBTUEsR0FBR0EsSUFBSUEsQ0FBQ0E7Z0JBR25DQSxNQUFNQSxDQUFDQSxlQUFlQSxFQUFFQSxDQUFDQTtZQUM3QkEsQ0FBQ0E7UUFFTEEsQ0FBQ0E7SUFDTEEsQ0FBQ0E7SUFDREgsaUJBQWlCQTtRQUNiSSxJQUFJQSxDQUFDQSxRQUFRQSxHQUFHQSxLQUFLQSxDQUFDQTtRQUN0QkEsRUFBRUEsQ0FBQUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsZUFBZUEsQ0FBQ0EsQ0FBQUEsQ0FBQ0E7WUFDckJBLElBQUlBLENBQUNBLGVBQWVBLENBQUNBLE1BQU1BLEdBQUdBLEtBQUtBLENBQUNBO1FBQ3hDQSxDQUFDQTtJQUNMQSxDQUFDQTtBQUNMSixDQUFDQTtBQXJFRztJQUFDLFFBQVE7O0dBQUMsOENBQVEsVUFBYztBQUNoQztJQUFDLFFBQVE7O0dBQUMsZ0RBQVUsVUFBYztBQUNsQztJQUFDLFFBQVE7O0dBQUMsMENBQUksVUFBYztBQUM1QjtJQUFDLFFBQVE7O0dBQUMsMENBQUksVUFBZTtBQUM3QjtJQUFDLFFBQVE7O0dBQUMsNkNBQU8sVUFBa0I7QUFDbkM7SUFBQyxRQUFROztHQUFDLDZDQUFPLFVBQWtCO0FBQ25DO0lBQUMsUUFBUTs7R0FBQyw0Q0FBTSxVQUFrQjtBQUNsQztJQUFDLFFBQVE7O0dBQUMsOENBQVEsVUFBVTtBQUM1QjtJQUFDLFFBQVEsQ0FBQyxFQUFFLGtCQUFrQixFQUFFLENBQUMsRUFBMkIsQ0FBQzs7R0FBQyw4Q0FBUSxVQUFrQjtBQUN4RjtJQUFDLFFBQVE7O0dBQUMsMkNBQUssVUFBVztBQUMxQjtJQUFDLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQzs7R0FBQyxxREFBZSxVQUF1QjtBQWIxRTtJQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsb0JBQW9CLENBQUM7SUFDckMsYUFBYSxDQUFDLDRCQUE0QixDQUFDOzs2QkF1RTNDO0FBQUEiLCJmaWxlIjoiQ29udGV4dHVhbE1lbnUvQ29udGV4dHVhbE1lbnVJdGVtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjdXN0b21FbGVtZW50LCBiaW5kYWJsZSwgaW5qZWN0LCBjaGlsZCwgY2hpbGRyZW4sIHVzZVNoYWRvd0RPTX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQge09mZmljZUNvbnRleHR1YWxNZW51fSBmcm9tIFwiLi9Db250ZXh0dWFsbWVudVwiO1xyXG5cclxuLy9AdXNlU2hhZG93RE9NKClcclxuQGluamVjdChFbGVtZW50LCBPZmZpY2VDb250ZXh0dWFsTWVudSlcclxuQGN1c3RvbUVsZW1lbnQoJ29mZmljZS1jb250ZXh0dWFsbWVudS1pdGVtJylcclxuZXhwb3J0IGNsYXNzIE9mZmljZUNvbnRleHR1YWxNZW51SXRlbSB7XHJcbiAgICBAYmluZGFibGUgbGlua1RleHQ6IHN0cmluZyA9ICcnO1xyXG4gICAgQGJpbmRhYmxlIGhlYWRlclRleHQ6IHN0cmluZyA9ICcnO1xyXG4gICAgQGJpbmRhYmxlIGljb246IHN0cmluZyA9ICcnO1xyXG4gICAgQGJpbmRhYmxlIGhyZWY6IHN0cmluZyA9ICcjJztcclxuICAgIEBiaW5kYWJsZSBoYXNNZW51OiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBAYmluZGFibGUgZGl2aWRlcjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgQGJpbmRhYmxlIGhlYWRlcjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgQGJpbmRhYmxlIGRpc2FibGVkOiBib29sZWFuO1xyXG4gICAgQGJpbmRhYmxlKHsgZGVmYXVsdEJpbmRpbmdNb2RlOiAyIC8qIGJpbmRpbmdNb2RlLnR3b1dheSAqLyB9KSBzZWxlY3RlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgQGJpbmRhYmxlIGNsaWNrOiBGdW5jdGlvbjtcclxuICAgIEBjaGlsZCgnb2ZmaWNlLWNvbnRleHR1YWxtZW51JykgJGNvbnRleHR1YWxNZW51OiBPZmZpY2VDb250ZXh0dWFsTWVudTtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogRWxlbWVudCwgcHJpdmF0ZSAkcGFyZW50TWVudTogT2ZmaWNlQ29udGV4dHVhbE1lbnUpIHtcclxuXHJcbiAgICB9XHJcbiAgICBhdHRhY2hlZCgpIHtcclxuICAgICAgICB0aGlzLmljb24gPSB0aGlzLmhhc01lbnUgJiYgdGhpcy5pY29uID09PSAnJyA/ICdjaGV2cm9uRG93bicgOiB0aGlzLmljb247XHJcbiAgICB9XHJcbiAgICBsaW5rQ2xpY2tIYW5kbGVyKCRldmVudDogRXZlbnQpIHtcclxuICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgXHJcbiAgICAgICAgaWYgKHRoaXMuY2xpY2sgJiYgdHlwZW9mIHRoaXMuY2xpY2sgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgdGhpcy5jbGljayh7JG1lbnVJdGVtOnRoaXN9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy91bnRpbCBzaGFkb3dkb20gYnVnIGlzIGZpeGVkIHdpdGggQXVyZWxpYS4gSSBkbyBoYXZlIHRvIGZpZ3VyZSBvdXQgc3R5bGluZyB1bmRlciBzaGFkb3cgZG9tIGZvciBmYWJyaWMuIFxyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgICBcclxuICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBDaGVjayBpZiBtdWx0aXNlbGVjdCAtIHNldCBzZWxlY3RlZCBzdGF0ZXNcclxuICAgICAgICBpZiAodGhpcy4kcGFyZW50TWVudS5tdWx0aVNlbGVjdCkge1xyXG4gICAgICAgICAgICAvLyBJZiBhbHJlYWR5IHNlbGVjdGVkLCByZW1vdmUgc2VsZWN0aW9uOyBpZiBub3QsIGFkZCBzZWxlY3Rpb25cclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZCA9ICF0aGlzLnNlbGVjdGVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBBbGwgb3RoZXIgY29udGV4dHVhbCBtZW51IHZhcmlhbnRzXHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIC8vIERlc2VsZWN0IGFsbCBvZiB0aGUgaXRlbXMgYW5kIGNsb3NlIGFueSBtZW51cy5cclxuICAgICAgICAgICAgLy8gJCgnLm1zLUNvbnRleHR1YWxNZW51LWxpbmsnKVxyXG4gICAgICAgICAgICAvLyAgICAgLnJlbW92ZUNsYXNzKCdpcy1zZWxlY3RlZCcpXHJcbiAgICAgICAgICAgIC8vICAgICAuc2libGluZ3MoJy5tcy1Db250ZXh0dWFsTWVudS1jb250YWluZXInKVxyXG4gICAgICAgICAgICAvLyAgICAgLmZpbmQoJy5tcy1Db250ZXh0dWFsTWVudScpXHJcbiAgICAgICAgICAgIC8vICAgICAucmVtb3ZlQ2xhc3MoJ2lzLW9wZW4nKTtcclxuXHJcbiAgICAgICAgICAgIC8vIC8vIFNlbGVjdCB0aGlzIGl0ZW0uXHJcbiAgICAgICAgICAgIC8vICQodGhpcykuYWRkQ2xhc3MoJ2lzLXNlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgIC8vIC8vdGhpcy5zZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBpZih0aGlzLiRwYXJlbnRNZW51KXtcclxuICAgICAgICAgICAgICAgIHRoaXMuJHBhcmVudE1lbnUuY2xvc2VEZXNlbGVjdENoaWxkKHRoaXMpOyAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKHRoaXMuaGFzTWVudSAmJiB0aGlzLiRjb250ZXh0dWFsTWVudSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRjb250ZXh0dWFsTWVudS5pc09wZW4gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgLy8gT3BlbiB0aGUgbWVudSB3aXRob3V0IGJ1YmJsaW5nIHVwIHRoZSBjbGljayBldmVudCxcclxuICAgICAgICAgICAgICAgIC8vIHdoaWNoIGNhbiBjYXVzZSB0aGUgbWVudSB0byBjbG9zZS5cclxuICAgICAgICAgICAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjbG9zZURlc2VsZWN0SXRlbSgpe1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgICAgICBpZih0aGlzLiRjb250ZXh0dWFsTWVudSl7XHJcbiAgICAgICAgICAgIHRoaXMuJGNvbnRleHR1YWxNZW51LmlzT3BlbiA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
