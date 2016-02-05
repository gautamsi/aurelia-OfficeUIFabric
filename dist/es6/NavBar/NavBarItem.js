var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { customElement, bindable, inject } from 'aurelia-framework';
export let OfficeNavBarItem = class {
    constructor(element) {
        this.element = element;
        this.linkText = '';
        this.icon = '';
        this.hasMenu = false;
        this.right = false;
        this.disabled = false;
    }
    attached() {
        this.icon = this.hasMenu && this.icon === '' ? 'chevronDown' : this.icon;
    }
};
__decorate([
    bindable, 
    __metadata('design:type', String)
], OfficeNavBarItem.prototype, "linkText", void 0);
__decorate([
    bindable, 
    __metadata('design:type', String)
], OfficeNavBarItem.prototype, "icon", void 0);
__decorate([
    bindable, 
    __metadata('design:type', Boolean)
], OfficeNavBarItem.prototype, "hasMenu", void 0);
__decorate([
    bindable, 
    __metadata('design:type', Boolean)
], OfficeNavBarItem.prototype, "right", void 0);
__decorate([
    bindable, 
    __metadata('design:type', Boolean)
], OfficeNavBarItem.prototype, "disabled", void 0);
OfficeNavBarItem = __decorate([
    inject(Element),
    customElement('office-navbar-item'), 
    __metadata('design:paramtypes', [Element])
], OfficeNavBarItem);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk5hdkJhci9OYXZCYXJJdGVtLnRzIl0sIm5hbWVzIjpbIk9mZmljZU5hdkJhckl0ZW0iLCJPZmZpY2VOYXZCYXJJdGVtLmNvbnN0cnVjdG9yIiwiT2ZmaWNlTmF2QmFySXRlbS5hdHRhY2hlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O09BQU8sRUFBQyxhQUFhLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBQyxNQUFNLG1CQUFtQjtBQUVqRTtJQVFJQSxZQUFvQkEsT0FBZUE7UUFBZkMsWUFBT0EsR0FBUEEsT0FBT0EsQ0FBUUE7UUFMekJBLGFBQVFBLEdBQVVBLEVBQUVBLENBQUNBO1FBQ3JCQSxTQUFJQSxHQUFVQSxFQUFFQSxDQUFDQTtRQUNqQkEsWUFBT0EsR0FBU0EsS0FBS0EsQ0FBQ0E7UUFDdEJBLFVBQUtBLEdBQVNBLEtBQUtBLENBQUNBO1FBQ3BCQSxhQUFRQSxHQUFTQSxLQUFLQSxDQUFDQTtJQUdqQ0EsQ0FBQ0E7SUFDREQsUUFBUUE7UUFDSkUsSUFBSUEsQ0FBQ0EsSUFBSUEsR0FBR0EsSUFBSUEsQ0FBQ0EsT0FBT0EsSUFBSUEsSUFBSUEsQ0FBQ0EsSUFBSUEsS0FBR0EsRUFBRUEsR0FBRUEsYUFBYUEsR0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0E7SUFDeEVBLENBQUNBO0FBQ0xGLENBQUNBO0FBWEc7SUFBQyxRQUFROztHQUFDLHNDQUFRLFVBQWE7QUFDL0I7SUFBQyxRQUFROztHQUFDLGtDQUFJLFVBQWE7QUFDM0I7SUFBQyxRQUFROztHQUFDLHFDQUFPLFVBQWU7QUFDaEM7SUFBQyxRQUFROztHQUFDLG1DQUFLLFVBQWU7QUFDOUI7SUFBQyxRQUFROztHQUFDLHNDQUFRLFVBQWU7QUFQckM7SUFBQyxNQUFNLENBQUMsT0FBTyxDQUFDO0lBQ2YsYUFBYSxDQUFDLG9CQUFvQixDQUFDOztxQkFhbkM7QUFBQSIsImZpbGUiOiJOYXZCYXIvTmF2QmFySXRlbS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3VzdG9tRWxlbWVudCwgYmluZGFibGUsIGluamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5AaW5qZWN0KEVsZW1lbnQpXG5AY3VzdG9tRWxlbWVudCgnb2ZmaWNlLW5hdmJhci1pdGVtJylcbmV4cG9ydCBjbGFzcyBPZmZpY2VOYXZCYXJJdGVtIHtcbiAgICBAYmluZGFibGUgbGlua1RleHQ6c3RyaW5nID0gJyc7XG4gICAgQGJpbmRhYmxlIGljb246c3RyaW5nID0gJyc7XG4gICAgQGJpbmRhYmxlIGhhc01lbnU6Ym9vbGVhbj1mYWxzZTtcbiAgICBAYmluZGFibGUgcmlnaHQ6Ym9vbGVhbj1mYWxzZTtcbiAgICBAYmluZGFibGUgZGlzYWJsZWQ6Ym9vbGVhbj1mYWxzZTtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6RWxlbWVudCl7XG4gICAgICAgIFxuICAgIH1cbiAgICBhdHRhY2hlZCgpe1xuICAgICAgICB0aGlzLmljb24gPSB0aGlzLmhhc01lbnUgJiYgdGhpcy5pY29uPT09Jyc/ICdjaGV2cm9uRG93bic6dGhpcy5pY29uO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
