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
import { OfficeNavBar } from "./NavBar";
import { OfficeContextualMenu } from "../ContextualMenu/ContextualMenu";
export let OfficeNavBarItem = class {
    constructor(element, navbar) {
        this.element = element;
        this.navbar = navbar;
        this.linkText = '';
        this.icon = '';
        this.hasMenu = false;
        this.right = false;
        this.disabled = false;
        this.type = "default";
        this.searchText = '';
        this.isOpen = false;
        this.isSelected = false;
        this.searchBoxCSS = 'ms-NavBar-item--search ms-u-hiddenSm';
    }
    attached() {
        this.icon = this.hasMenu && this.icon === '' ? 'chevronDown' : this.icon;
    }
    searchButtonClick(event) {
        if (event.keyCode === 13) {
            if (this.search && typeof this.search === 'function') {
                this.search({ $searchText: this.searchText });
            }
        }
    }
    closeAndBlur() {
        return;
        this.isSelected = false;
        if (this.type === 'search' && this.$searchField.value.length === 0) {
            this.isOpen = false;
            this.$searchField.blur();
        }
        if (this.contextualMenu) {
            this.contextualMenu.isOpen = false;
        }
    }
};
__decorate([
    child('office-contextualmenu'), 
    __metadata('design:type', OfficeContextualMenu)
], OfficeNavBarItem.prototype, "contextualMenu", void 0);
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
__decorate([
    bindable, 
    __metadata('design:type', String)
], OfficeNavBarItem.prototype, "type", void 0);
__decorate([
    bindable, 
    __metadata('design:type', Function)
], OfficeNavBarItem.prototype, "search", void 0);
__decorate([
    bindable({ defaultBindingMode: 2 }), 
    __metadata('design:type', String)
], OfficeNavBarItem.prototype, "searchText", void 0);
__decorate([
    bindable, 
    __metadata('design:type', Boolean)
], OfficeNavBarItem.prototype, "isOpen", void 0);
__decorate([
    bindable, 
    __metadata('design:type', Boolean)
], OfficeNavBarItem.prototype, "isSelected", void 0);
OfficeNavBarItem = __decorate([
    inject(Element, OfficeNavBar),
    customElement('office-navbar-item'), 
    __metadata('design:paramtypes', [Element, OfficeNavBar])
], OfficeNavBarItem);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk5hdkJhci9OYXZCYXJJdGVtLnRzIl0sIm5hbWVzIjpbIk9mZmljZU5hdkJhckl0ZW0iLCJPZmZpY2VOYXZCYXJJdGVtLmNvbnN0cnVjdG9yIiwiT2ZmaWNlTmF2QmFySXRlbS5hdHRhY2hlZCIsIk9mZmljZU5hdkJhckl0ZW0uc2VhcmNoQnV0dG9uQ2xpY2siLCJPZmZpY2VOYXZCYXJJdGVtLmNsb3NlQW5kQmx1ciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O09BQU8sRUFBQyxhQUFhLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQXlCLE1BQU0sbUJBQW1CO09BQ3pGLEVBQUMsWUFBWSxFQUFDLE1BQU0sVUFBVTtPQUM5QixFQUFDLG9CQUFvQixFQUFDLE1BQU0sa0NBQWtDO0FBR3JFO0lBa0JJQSxZQUFvQkEsT0FBZ0JBLEVBQVVBLE1BQW9CQTtRQUE5Q0MsWUFBT0EsR0FBUEEsT0FBT0EsQ0FBU0E7UUFBVUEsV0FBTUEsR0FBTkEsTUFBTUEsQ0FBY0E7UUFieERBLGFBQVFBLEdBQVdBLEVBQUVBLENBQUNBO1FBQ3RCQSxTQUFJQSxHQUFXQSxFQUFFQSxDQUFDQTtRQUNsQkEsWUFBT0EsR0FBWUEsS0FBS0EsQ0FBQ0E7UUFDekJBLFVBQUtBLEdBQVlBLEtBQUtBLENBQUNBO1FBQ3ZCQSxhQUFRQSxHQUFZQSxLQUFLQSxDQUFDQTtRQUMxQkEsU0FBSUEsR0FBV0EsU0FBU0EsQ0FBQ0E7UUFFMkJBLGVBQVVBLEdBQVdBLEVBQUVBLENBQUNBO1FBQzVFQSxXQUFNQSxHQUFZQSxLQUFLQSxDQUFDQTtRQUN4QkEsZUFBVUEsR0FBWUEsS0FBS0EsQ0FBQ0E7UUFFdENBLGlCQUFZQSxHQUFXQSxzQ0FBc0NBLENBQUNBO0lBSTlEQSxDQUFDQTtJQUNERCxRQUFRQTtRQUNKRSxJQUFJQSxDQUFDQSxJQUFJQSxHQUFHQSxJQUFJQSxDQUFDQSxPQUFPQSxJQUFJQSxJQUFJQSxDQUFDQSxJQUFJQSxLQUFLQSxFQUFFQSxHQUFHQSxhQUFhQSxHQUFHQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQTtJQUM3RUEsQ0FBQ0E7SUFDREYsaUJBQWlCQSxDQUFDQSxLQUFvQkE7UUFDbENHLEVBQUVBLENBQUNBLENBQUNBLEtBQUtBLENBQUNBLE9BQU9BLEtBQUtBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBO1lBQ3ZCQSxFQUFFQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxNQUFNQSxJQUFJQSxPQUFPQSxJQUFJQSxDQUFDQSxNQUFNQSxLQUFLQSxVQUFVQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFLbkRBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLEVBQUVBLFdBQVdBLEVBQUVBLElBQUlBLENBQUNBLFVBQVVBLEVBQUVBLENBQUNBLENBQUNBO1lBQ2xEQSxDQUFDQTtRQUNMQSxDQUFDQTtJQUNMQSxDQUFDQTtJQUVESCxZQUFZQTtRQUNSSSxNQUFNQSxDQUFDQTtRQUNQQSxJQUFJQSxDQUFDQSxVQUFVQSxHQUFHQSxLQUFLQSxDQUFDQTtRQUN4QkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsS0FBS0EsUUFBUUEsSUFBSUEsSUFBSUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsTUFBTUEsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDakVBLElBQUlBLENBQUNBLE1BQU1BLEdBQUdBLEtBQUtBLENBQUNBO1lBQ3BCQSxJQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxJQUFJQSxFQUFFQSxDQUFDQTtRQUM3QkEsQ0FBQ0E7UUFDREEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDdEJBLElBQUlBLENBQUNBLGNBQWNBLENBQUNBLE1BQU1BLEdBQUdBLEtBQUtBLENBQUNBO1FBQ3ZDQSxDQUFDQTtJQUNMQSxDQUFDQTtBQUNMSixDQUFDQTtBQTNDRztJQUFDLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQzs7R0FBQyw0Q0FBYyxVQUF1QjtBQUNyRTtJQUFDLFFBQVE7O0dBQUMsc0NBQVEsVUFBYztBQUNoQztJQUFDLFFBQVE7O0dBQUMsa0NBQUksVUFBYztBQUM1QjtJQUFDLFFBQVE7O0dBQUMscUNBQU8sVUFBa0I7QUFDbkM7SUFBQyxRQUFROztHQUFDLG1DQUFLLFVBQWtCO0FBQ2pDO0lBQUMsUUFBUTs7R0FBQyxzQ0FBUSxVQUFrQjtBQUNwQztJQUFDLFFBQVE7O0dBQUMsa0NBQUksVUFBcUI7QUFDbkM7SUFBQyxRQUFROztHQUFDLG9DQUFNLFVBQVc7QUFDM0I7SUFBQyxRQUFRLENBQUMsRUFBRSxrQkFBa0IsRUFBRSxDQUFDLEVBQTJCLENBQUM7O0dBQUMsd0NBQVUsVUFBYztBQUN0RjtJQUFDLFFBQVE7O0dBQUMsb0NBQU0sVUFBa0I7QUFDbEM7SUFBQyxRQUFROztHQUFDLHdDQUFVLFVBQWtCO0FBZDFDO0lBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxZQUFZLENBQUM7SUFFN0IsYUFBYSxDQUFDLG9CQUFvQixDQUFDOztxQkE2Q25DO0FBQUEiLCJmaWxlIjoiTmF2QmFyL05hdkJhckl0ZW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2N1c3RvbUVsZW1lbnQsIGJpbmRhYmxlLCBpbmplY3QsIGNoaWxkLCBjaGlsZHJlbiwgdXNlU2hhZG93RE9NfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcbmltcG9ydCB7T2ZmaWNlTmF2QmFyfSBmcm9tIFwiLi9OYXZCYXJcIlxyXG5pbXBvcnQge09mZmljZUNvbnRleHR1YWxNZW51fSBmcm9tIFwiLi4vQ29udGV4dHVhbE1lbnUvQ29udGV4dHVhbE1lbnVcIlxyXG5cclxuXHJcbkBpbmplY3QoRWxlbWVudCwgT2ZmaWNlTmF2QmFyKVxyXG4vL0B1c2VTaGFkb3dET00oKVxyXG5AY3VzdG9tRWxlbWVudCgnb2ZmaWNlLW5hdmJhci1pdGVtJylcclxuZXhwb3J0IGNsYXNzIE9mZmljZU5hdkJhckl0ZW0ge1xyXG4gICAgQGNoaWxkKCdvZmZpY2UtY29udGV4dHVhbG1lbnUnKSBjb250ZXh0dWFsTWVudTogT2ZmaWNlQ29udGV4dHVhbE1lbnU7XHJcbiAgICBAYmluZGFibGUgbGlua1RleHQ6IHN0cmluZyA9ICcnO1xyXG4gICAgQGJpbmRhYmxlIGljb246IHN0cmluZyA9ICcnO1xyXG4gICAgQGJpbmRhYmxlIGhhc01lbnU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIEBiaW5kYWJsZSByaWdodDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgQGJpbmRhYmxlIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBAYmluZGFibGUgdHlwZTogc3RyaW5nID0gXCJkZWZhdWx0XCI7XHJcbiAgICBAYmluZGFibGUgc2VhcmNoOiBGdW5jdGlvbjtcclxuICAgIEBiaW5kYWJsZSh7IGRlZmF1bHRCaW5kaW5nTW9kZTogMiAvKiBiaW5kaW5nTW9kZS50d29XYXkgKi8gfSkgc2VhcmNoVGV4dDogc3RyaW5nID0gJyc7XHJcbiAgICBAYmluZGFibGUgaXNPcGVuOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBAYmluZGFibGUgaXNTZWxlY3RlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHNlYXJjaEJveENTUzogc3RyaW5nID0gJ21zLU5hdkJhci1pdGVtLS1zZWFyY2ggbXMtdS1oaWRkZW5TbSc7XHJcbiAgICAkc2VhcmNoRmllbGQ6IEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnQsIHByaXZhdGUgbmF2YmFyOiBPZmZpY2VOYXZCYXIpIHtcclxuXHJcbiAgICB9XHJcbiAgICBhdHRhY2hlZCgpIHtcclxuICAgICAgICB0aGlzLmljb24gPSB0aGlzLmhhc01lbnUgJiYgdGhpcy5pY29uID09PSAnJyA/ICdjaGV2cm9uRG93bicgOiB0aGlzLmljb247ICAgICAgICBcclxuICAgIH1cclxuICAgIHNlYXJjaEJ1dHRvbkNsaWNrKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XHJcbiAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDEzKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNlYXJjaCAmJiB0eXBlb2YgdGhpcy5zZWFyY2ggPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyBsZXQgZSA9IG5ldyBFdmVudCgnc2VhcmNoJywgeyBidWJibGVzOiB0cnVlLCBjYW5jZWxhYmxlOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5lbGVtZW50LmRpc3BhdGNoRXZlbnQoZSk7XHJcbiAgICAgICAgICAgICAgICAvLyBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoKHsgJHNlYXJjaFRleHQ6IHRoaXMuc2VhcmNoVGV4dCB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjbG9zZUFuZEJsdXIoKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuaXNTZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgICAgIGlmICh0aGlzLnR5cGUgPT09ICdzZWFyY2gnICYmIHRoaXMuJHNlYXJjaEZpZWxkLnZhbHVlLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmlzT3BlbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLiRzZWFyY2hGaWVsZC5ibHVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmNvbnRleHR1YWxNZW51KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGV4dHVhbE1lbnUuaXNPcGVuID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
