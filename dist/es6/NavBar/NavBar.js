var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { customElement, inject, children } from 'aurelia-framework';
import "./Jquery.NavBar";
export let OfficeNavBar = class {
    constructor(element) {
        this.element = element;
        this.isOpen = false;
    }
    clickHandler() {
    }
    attached() {
        $(this.$navBarRoot).NavBar();
        return;
        document.addEventListener("click", () => {
            this.$navItems.forEach((item, index) => {
            });
        });
    }
    toggleNavBar($event) {
    }
};
__decorate([
    children('ms-NavBar-item--search'), 
    __metadata('design:type', Array)
], OfficeNavBar.prototype, "$searchBoxes", void 0);
__decorate([
    children('.ms-NavBar-item'), 
    __metadata('design:type', Array)
], OfficeNavBar.prototype, "$searchBox", void 0);
__decorate([
    children('li'), 
    __metadata('design:type', Array)
], OfficeNavBar.prototype, "lis", void 0);
__decorate([
    children('div'), 
    __metadata('design:type', Array)
], OfficeNavBar.prototype, "divs", void 0);
__decorate([
    children('office-navbar-item'), 
    __metadata('design:type', Array)
], OfficeNavBar.prototype, "$navItems", void 0);
OfficeNavBar = __decorate([
    inject(Element),
    customElement('office-navbar'), 
    __metadata('design:paramtypes', [Element])
], OfficeNavBar);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk5hdkJhci9OYXZCYXIudHMiXSwibmFtZXMiOlsiT2ZmaWNlTmF2QmFyIiwiT2ZmaWNlTmF2QmFyLmNvbnN0cnVjdG9yIiwiT2ZmaWNlTmF2QmFyLmNsaWNrSGFuZGxlciIsIk9mZmljZU5hdkJhci5hdHRhY2hlZCIsIk9mZmljZU5hdkJhci50b2dnbGVOYXZCYXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztPQUFPLEVBQUMsYUFBYSxFQUFZLE1BQU0sRUFBUyxRQUFRLEVBQWdCLE1BQU0sbUJBQW1CO09BSTFGLGlCQUFpQjtBQUt4QjtJQWNJQSxZQUFvQkEsT0FBZ0JBO1FBQWhCQyxZQUFPQSxHQUFQQSxPQUFPQSxDQUFTQTtRQVZwQ0EsV0FBTUEsR0FBV0EsS0FBS0EsQ0FBQ0E7SUFXdkJBLENBQUNBO0lBR0RELFlBQVlBO0lBR1pFLENBQUNBO0lBQ0RGLFFBQVFBO1FBQ0pHLENBQUNBLENBQUNBLElBQUlBLENBQUNBLFdBQVdBLENBQUNBLENBQUNBLE1BQU1BLEVBQUVBLENBQUNBO1FBQzdCQSxNQUFNQSxDQUFDQTtRQUNQQSxRQUFRQSxDQUFDQSxnQkFBZ0JBLENBQUNBLE9BQU9BLEVBQUNBO1lBQzlCQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQSxJQUFJQSxFQUFDQSxLQUFLQTtZQUVsQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDUEEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7SUFDUEEsQ0FBQ0E7SUFFREgsWUFBWUEsQ0FBQ0EsTUFBYUE7SUFHMUJJLENBQUNBO0FBRUxKLENBQUNBO0FBL0JHO0lBQUMsUUFBUSxDQUFDLHdCQUF3QixDQUFDOztHQUFJLHNDQUFZLFVBQVk7QUFDL0Q7SUFBQyxRQUFRLENBQUMsaUJBQWlCLENBQUM7O0dBQUksb0NBQVUsVUFBWTtBQUN0RDtJQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7O0dBQUksNkJBQUcsVUFBWTtBQUNsQztJQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7O0dBQUksOEJBQUksVUFBWTtBQUNwQztJQUFDLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQzs7R0FBRyxtQ0FBUyxVQUFxQjtBQVZwRTtJQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFDZixhQUFhLENBQUMsZUFBZSxDQUFDOztpQkFvQzlCO0FBQUEiLCJmaWxlIjoiTmF2QmFyL05hdkJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3VzdG9tRWxlbWVudCwgYmluZGFibGUsIGluamVjdCwgY2hpbGQsIGNoaWxkcmVuLCB1c2VTaGFkb3dET00gfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcbi8vaW1wb3J0IHtiaW5kaW5nTW9kZSB9IGZyb20gJ2F1cmVsaWEtYmluZGluZyc7XHJcbi8qKiB3b3JrYXJvdW5kLCBmaXggbGluZSB3aXRoICQodGhpcykuY2hpbGRyZW4oJy5tcy1Db250ZXh0dWFsTWVudTpmaXJzdCcpLnRvZ2dsZUNsYXNzKCdpcy1vcGVuJyk7IHRvICQodGhpcykuZmluZCgnLm1zLUNvbnRleHR1YWxNZW51OmZpcnN0JykudG9nZ2xlQ2xhc3MoJ2lzLW9wZW4nKTsgKi9cclxuLyoqIHdvcmthcm91bmQgZm9yIG1lbnUgaXRlbSBzbGVjdGlvbiBjaGFuZ2UgYWZ0ZXIgY2xpY2sgLCBjaGFuZ2UgJCh0aGlzKS5zaWJsaW5ncygnLm1zLU5hdkJhci1pdGVtJykucmVtb3ZlQ2xhc3MoJ2lzLXNlbGVjdGVkJyk7IHdpdGggICRuYXZCYXIuZmluZCgnLm1zLU5hdkJhci1pdGVtJykucmVtb3ZlQ2xhc3MoJ2lzLXNlbGVjdGVkJyk7ICovXHJcbmltcG9ydCBcIi4vSnF1ZXJ5Lk5hdkJhclwiO1xyXG5pbXBvcnQge09mZmljZU5hdkJhckl0ZW19IGZyb20gXCIuL05hdkJhckl0ZW1cIjtcclxuXHJcblxyXG4vL0B1c2VTaGFkb3dET00oKVxyXG5AaW5qZWN0KEVsZW1lbnQpXHJcbkBjdXN0b21FbGVtZW50KCdvZmZpY2UtbmF2YmFyJylcclxuZXhwb3J0IGNsYXNzIE9mZmljZU5hdkJhciB7XHJcbiAgICBcclxuICAgIGlzT3Blbjpib29sZWFuID0gZmFsc2U7XHJcbiAgICAkbmF2QmFyUm9vdDogRWxlbWVudDtcclxuICAgIEBjaGlsZHJlbignbXMtTmF2QmFyLWl0ZW0tLXNlYXJjaCcpICAgICRzZWFyY2hCb3hlczogRWxlbWVudFtdO1xyXG4gICAgQGNoaWxkcmVuKCcubXMtTmF2QmFyLWl0ZW0nKSAgICAkc2VhcmNoQm94OiBFbGVtZW50W107XHJcbiAgICBAY2hpbGRyZW4oJ2xpJykgICAgbGlzOiBFbGVtZW50W107XHJcbiAgICBAY2hpbGRyZW4oJ2RpdicpICAgIGRpdnM6IEVsZW1lbnRbXTtcclxuICAgIEBjaGlsZHJlbignb2ZmaWNlLW5hdmJhci1pdGVtJykgICAkbmF2SXRlbXM6IE9mZmljZU5hdkJhckl0ZW1bXTtcclxuICAgIFxyXG4gICAgXHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogRWxlbWVudCkge1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjbGlja0hhbmRsZXIoKSB7XHJcbiAgICAgICAgLy90aGlzLmVsZW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NsaWNrJykpO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJjbGlja2VkIHRvZ2dsZXJcIik7XHJcbiAgICB9XHJcbiAgICBhdHRhY2hlZCgpIHtcclxuICAgICAgICAkKHRoaXMuJG5hdkJhclJvb3QpLk5hdkJhcigpO1xyXG4gICAgICAgIHJldHVybjsgLy91bnRpbCBzaGFkb3dkb20gYW5kIHN0eWxpbmcgaXMgZmlndXJlZFxyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCgpPT57XHJcbiAgICAgICAgICAgIHRoaXMuJG5hdkl0ZW1zLmZvckVhY2goKGl0ZW0saW5kZXgpPT57XHJcbiAgICAgICAgICAgICAgIC8vaXRlbS5cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHRvZ2dsZU5hdkJhcigkZXZlbnQ6IEV2ZW50KXtcclxuICAgICAgICAvLyB0aGlzLmlzT3BlbiA9ICF0aGlzLmlzT3BlbjtcclxuICAgICAgICAvLyAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
