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
import "./Jquery.NavBar";
export let OfficeNavBar = class {
    constructor(element) {
        this.element = element;
        this.searchText = '';
        this.searchTextRight = false;
    }
    clickHandler() {
        console.log("clicked toggler");
    }
    attached() {
        $(this.navBarRoot).NavBar();
    }
    searchButtonClick(event) {
        if (event.keyCode === 13) {
            let e = new Event('search', { bubbles: true, cancelable: true });
            this.element.dispatchEvent(e);
            event.stopPropagation();
        }
    }
};
__decorate([
    bindable({ defaultBindingMode: 2 }), 
    __metadata('design:type', String)
], OfficeNavBar.prototype, "searchText", void 0);
__decorate([
    bindable, 
    __metadata('design:type', Boolean)
], OfficeNavBar.prototype, "searchTextRight", void 0);
OfficeNavBar = __decorate([
    inject(Element),
    customElement('office-navbar'), 
    __metadata('design:paramtypes', [Element])
], OfficeNavBar);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk5hdkJhci9OYXZCYXIudHMiXSwibmFtZXMiOlsiT2ZmaWNlTmF2QmFyIiwiT2ZmaWNlTmF2QmFyLmNvbnN0cnVjdG9yIiwiT2ZmaWNlTmF2QmFyLmNsaWNrSGFuZGxlciIsIk9mZmljZU5hdkJhci5hdHRhY2hlZCIsIk9mZmljZU5hdkJhci5zZWFyY2hCdXR0b25DbGljayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O09BQU8sRUFBQyxhQUFhLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLG1CQUFtQjtPQUczRCxpQkFBaUI7QUFFeEI7SUFPSUEsWUFBb0JBLE9BQWdCQTtRQUFoQkMsWUFBT0EsR0FBUEEsT0FBT0EsQ0FBU0E7UUFKd0JBLGVBQVVBLEdBQVdBLEVBQUVBLENBQUNBO1FBQzFFQSxvQkFBZUEsR0FBWUEsS0FBS0EsQ0FBQ0E7SUFLM0NBLENBQUNBO0lBR0RELFlBQVlBO1FBRVJFLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLGlCQUFpQkEsQ0FBQ0EsQ0FBQ0E7SUFDbkNBLENBQUNBO0lBQ0RGLFFBQVFBO1FBQ0pHLENBQUNBLENBQUNBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBLENBQUNBLE1BQU1BLEVBQUVBLENBQUNBO0lBQ2hDQSxDQUFDQTtJQUVESCxpQkFBaUJBLENBQUNBLEtBQW9CQTtRQUNsQ0ksRUFBRUEsQ0FBQ0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsT0FBT0EsS0FBS0EsRUFBRUEsQ0FBQ0EsQ0FBQUEsQ0FBQ0E7WUFDdEJBLElBQUlBLENBQUNBLEdBQUdBLElBQUlBLEtBQUtBLENBQUNBLFFBQVFBLEVBQUVBLEVBQUVBLE9BQU9BLEVBQUVBLElBQUlBLEVBQUVBLFVBQVVBLEVBQUVBLElBQUlBLEVBQUVBLENBQUNBLENBQUNBO1lBQ2pFQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxhQUFhQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUM5QkEsS0FBS0EsQ0FBQ0EsZUFBZUEsRUFBRUEsQ0FBQ0E7UUFDNUJBLENBQUNBO0lBRUxBLENBQUNBO0FBR0xKLENBQUNBO0FBM0JHO0lBQUMsUUFBUSxDQUFDLEVBQUMsa0JBQWtCLEVBQUUsQ0FBQyxFQUEwQixDQUFDOztHQUFDLG9DQUFVLFVBQWM7QUFDcEY7SUFBQyxRQUFROztHQUFDLHlDQUFlLFVBQWtCO0FBSi9DO0lBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQztJQUNmLGFBQWEsQ0FBQyxlQUFlLENBQUM7O2lCQTZCOUI7QUFBQSIsImZpbGUiOiJOYXZCYXIvTmF2QmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjdXN0b21FbGVtZW50LCBiaW5kYWJsZSwgaW5qZWN0IH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG4vL2ltcG9ydCB7YmluZGluZ01vZGUgfSBmcm9tICdhdXJlbGlhLWJpbmRpbmcnO1xyXG4vKiogd29ya2Fyb3VuZCwgZml4IGxpbmUgd2l0aCAkKHRoaXMpLmNoaWxkcmVuKCcubXMtQ29udGV4dHVhbE1lbnU6Zmlyc3QnKS50b2dnbGVDbGFzcygnaXMtb3BlbicpOyB0byAkKHRoaXMpLmZpbmQoJy5tcy1Db250ZXh0dWFsTWVudTpmaXJzdCcpLnRvZ2dsZUNsYXNzKCdpcy1vcGVuJyk7ICovXHJcbmltcG9ydCBcIi4vSnF1ZXJ5Lk5hdkJhclwiO1xyXG5cclxuQGluamVjdChFbGVtZW50KVxyXG5AY3VzdG9tRWxlbWVudCgnb2ZmaWNlLW5hdmJhcicpXHJcbmV4cG9ydCBjbGFzcyBPZmZpY2VOYXZCYXIge1xyXG4gICAgQGJpbmRhYmxlKHtkZWZhdWx0QmluZGluZ01vZGU6IDIgLyogYmluZGluZ01vZGUudHdvV2F5ICovfSkgc2VhcmNoVGV4dDogc3RyaW5nID0gJyc7XHJcbiAgICBAYmluZGFibGUgc2VhcmNoVGV4dFJpZ2h0OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgbmF2QmFyUm9vdDogRWxlbWVudDtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogRWxlbWVudCkge1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgY2xpY2tIYW5kbGVyKCkge1xyXG4gICAgICAgIC8vdGhpcy5lbGVtZW50LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdjbGljaycpKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImNsaWNrZWQgdG9nZ2xlclwiKTtcclxuICAgIH1cclxuICAgIGF0dGFjaGVkKCkge1xyXG4gICAgICAgICQodGhpcy5uYXZCYXJSb290KS5OYXZCYXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBzZWFyY2hCdXR0b25DbGljayhldmVudDogS2V5Ym9hcmRFdmVudCkge1xyXG4gICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAxMyl7XHJcbiAgICAgICAgICAgIGxldCBlID0gbmV3IEV2ZW50KCdzZWFyY2gnLCB7IGJ1YmJsZXM6IHRydWUsIGNhbmNlbGFibGU6IHRydWUgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5kaXNwYXRjaEV2ZW50KGUpO1xyXG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
