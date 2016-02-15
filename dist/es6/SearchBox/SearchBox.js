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
export let OfficeSearchBox = class {
    constructor(element) {
        this.element = element;
        this.searchButton = false;
        this.searchBoxLabelText = "Search";
        this.text = '';
        this.isActive = false;
        this.searchBoxLabelVisible = true;
        this.hasFocus = false;
        this.hovering = false;
        this.cancel = false;
    }
    searchFieldFocus() {
        this.searchBoxLabelVisible = false;
        this.isActive = true;
    }
    searchFieldBlur() {
        console.log("searchField.Blur");
        if (this.cancel) {
            this.text = '';
        }
        setTimeout(function () {
            this.isActive = false;
        }.bind(this), 10);
        if (this.text.length === 0) {
            this.searchBoxLabelVisible = true;
        }
        this.cancel = false;
    }
    searchFieldMouseOver() {
        this.hovering = true;
    }
    searchFieldMouseOut() {
        this.hovering = false;
    }
    cancelButtonMouseDown() {
        this.text = '';
        this.cancel = true;
    }
    searchButtonMouseDown() {
        let e = new Event('search', { bubbles: true, cancelable: true });
        this.element.dispatchEvent(e);
    }
    attached() {
    }
};
__decorate([
    bindable, 
    __metadata('design:type', Boolean)
], OfficeSearchBox.prototype, "searchButton", void 0);
__decorate([
    bindable, 
    __metadata('design:type', String)
], OfficeSearchBox.prototype, "searchBoxLabelText", void 0);
__decorate([
    bindable, 
    __metadata('design:type', String)
], OfficeSearchBox.prototype, "text", void 0);
OfficeSearchBox = __decorate([
    inject(Element),
    customElement('office-searchbox'), 
    __metadata('design:paramtypes', [Element])
], OfficeSearchBox);
export var ListItemType;
(function (ListItemType) {
    ListItemType[ListItemType["default"] = 0] = "default";
    ListItemType[ListItemType["document"] = 1] = "document";
})(ListItemType || (ListItemType = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNlYXJjaEJveC9TZWFyY2hCb3gudHMiXSwibmFtZXMiOlsiT2ZmaWNlU2VhcmNoQm94IiwiT2ZmaWNlU2VhcmNoQm94LmNvbnN0cnVjdG9yIiwiT2ZmaWNlU2VhcmNoQm94LnNlYXJjaEZpZWxkRm9jdXMiLCJPZmZpY2VTZWFyY2hCb3guc2VhcmNoRmllbGRCbHVyIiwiT2ZmaWNlU2VhcmNoQm94LnNlYXJjaEZpZWxkTW91c2VPdmVyIiwiT2ZmaWNlU2VhcmNoQm94LnNlYXJjaEZpZWxkTW91c2VPdXQiLCJPZmZpY2VTZWFyY2hCb3guY2FuY2VsQnV0dG9uTW91c2VEb3duIiwiT2ZmaWNlU2VhcmNoQm94LnNlYXJjaEJ1dHRvbk1vdXNlRG93biIsIk9mZmljZVNlYXJjaEJveC5hdHRhY2hlZCIsIkxpc3RJdGVtVHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O09BQU8sRUFBQyxhQUFhLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBQyxNQUFNLG1CQUFtQjtBQUVqRTtJQWdCSUEsWUFBb0JBLE9BQWVBO1FBQWZDLFlBQU9BLEdBQVBBLE9BQU9BLENBQVFBO1FBWnpCQSxpQkFBWUEsR0FBV0EsS0FBS0EsQ0FBQ0E7UUFDN0JBLHVCQUFrQkEsR0FBVUEsUUFBUUEsQ0FBQUE7UUFDcENBLFNBQUlBLEdBQVVBLEVBQUVBLENBQUNBO1FBQzNCQSxhQUFRQSxHQUFXQSxLQUFLQSxDQUFDQTtRQUt6QkEsMEJBQXFCQSxHQUFXQSxJQUFJQSxDQUFDQTtRQUNyQ0EsYUFBUUEsR0FBV0EsS0FBS0EsQ0FBQ0E7UUFDekJBLGFBQVFBLEdBQVdBLEtBQUtBLENBQUNBO1FBQ3pCQSxXQUFNQSxHQUFTQSxLQUFLQSxDQUFDQTtJQUdyQkEsQ0FBQ0E7SUFFREQsZ0JBQWdCQTtRQUNaRSxJQUFJQSxDQUFDQSxxQkFBcUJBLEdBQUdBLEtBQUtBLENBQUNBO1FBQ25DQSxJQUFJQSxDQUFDQSxRQUFRQSxHQUFHQSxJQUFJQSxDQUFDQTtJQUN6QkEsQ0FBQ0E7SUFDREYsZUFBZUE7UUFDWEcsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0Esa0JBQWtCQSxDQUFDQSxDQUFDQTtRQUNoQ0EsRUFBRUEsQ0FBQUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQUEsQ0FBQ0E7WUFDWkEsSUFBSUEsQ0FBQ0EsSUFBSUEsR0FBR0EsRUFBRUEsQ0FBQ0E7UUFFbkJBLENBQUNBO1FBR0RBLFVBQVVBLENBQUNBO1lBRVAsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDMUIsQ0FBQyxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxFQUFFQSxFQUFFQSxDQUFDQSxDQUFDQTtRQUdsQkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsS0FBS0EsQ0FBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDNUJBLElBQUlBLENBQUNBLHFCQUFxQkEsR0FBR0EsSUFBSUEsQ0FBQ0E7UUFDcENBLENBQUNBO1FBR0RBLElBQUlBLENBQUNBLE1BQU1BLEdBQUdBLEtBQUtBLENBQUNBO0lBQ3hCQSxDQUFDQTtJQUVESCxvQkFBb0JBO1FBQ2hCSSxJQUFJQSxDQUFDQSxRQUFRQSxHQUFHQSxJQUFJQSxDQUFDQTtJQUN6QkEsQ0FBQ0E7SUFDREosbUJBQW1CQTtRQUNmSyxJQUFJQSxDQUFDQSxRQUFRQSxHQUFHQSxLQUFLQSxDQUFDQTtJQUMxQkEsQ0FBQ0E7SUFDREwscUJBQXFCQTtRQUNqQk0sSUFBSUEsQ0FBQ0EsSUFBSUEsR0FBQ0EsRUFBRUEsQ0FBQ0E7UUFDYkEsSUFBSUEsQ0FBQ0EsTUFBTUEsR0FBR0EsSUFBSUEsQ0FBQ0E7SUFDdkJBLENBQUNBO0lBRUROLHFCQUFxQkE7UUFDakJPLElBQUlBLENBQUNBLEdBQUdBLElBQUlBLEtBQUtBLENBQUNBLFFBQVFBLEVBQUNBLEVBQUNBLE9BQU9BLEVBQUNBLElBQUlBLEVBQUVBLFVBQVVBLEVBQUNBLElBQUlBLEVBQUNBLENBQUNBLENBQUNBO1FBQzVEQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxhQUFhQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtJQUNsQ0EsQ0FBQ0E7SUFFRFAsUUFBUUE7SUFDUlEsQ0FBQ0E7QUFDTFIsQ0FBQ0E7QUE1REc7SUFBQyxRQUFROztHQUFDLHlDQUFZLFVBQWlCO0FBQ3ZDO0lBQUMsUUFBUTs7R0FBQywrQ0FBa0IsVUFBa0I7QUFDOUM7SUFBQyxRQUFROztHQUFDLGlDQUFJLFVBQWE7QUFOL0I7SUFBQyxNQUFNLENBQUMsT0FBTyxDQUFDO0lBQ2YsYUFBYSxDQUFDLGtCQUFrQixDQUFDOztvQkErRGpDO0FBRUQsV0FBWSxZQUdYO0FBSEQsV0FBWSxZQUFZO0lBQ3BCUyxxREFBT0EsQ0FBQUE7SUFDUEEsdURBQVFBLENBQUFBO0FBQ1pBLENBQUNBLEVBSFcsWUFBWSxLQUFaLFlBQVksUUFHdkIiLCJmaWxlIjoiU2VhcmNoQm94L1NlYXJjaEJveC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3VzdG9tRWxlbWVudCwgYmluZGFibGUsIGluamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG4vL2ltcG9ydCBcIi4vSnF1ZXJ5LlNlYXJjaEJveFwiO1xyXG5AaW5qZWN0KEVsZW1lbnQpXHJcbkBjdXN0b21FbGVtZW50KCdvZmZpY2Utc2VhcmNoYm94JylcclxuZXhwb3J0IGNsYXNzIE9mZmljZVNlYXJjaEJveCB7XHJcblxyXG4gICAgQGJpbmRhYmxlIHNlYXJjaEJ1dHRvbjpib29sZWFuID0gZmFsc2U7XHJcbiAgICBAYmluZGFibGUgc2VhcmNoQm94TGFiZWxUZXh0OnN0cmluZyA9IFwiU2VhcmNoXCJcclxuICAgIEBiaW5kYWJsZSB0ZXh0OnN0cmluZyA9ICcnO1xyXG4gICAgaXNBY3RpdmU6Ym9vbGVhbiA9IGZhbHNlO1xyXG4gICAgXHJcbiAgICAkc2VhcmNoRmllbGQ6RWxlbWVudDtcclxuICAgICRzZWFyY2hCdXR0b246RWxlbWVudDtcclxuICAgICRzZWFyY2hCb3hMYWJlbDpFbGVtZW50O1xyXG4gICAgc2VhcmNoQm94TGFiZWxWaXNpYmxlOmJvb2xlYW4gPSB0cnVlO1xyXG4gICAgaGFzRm9jdXM6Ym9vbGVhbiA9IGZhbHNlO1xyXG4gICAgaG92ZXJpbmc6Ym9vbGVhbiA9IGZhbHNlO1xyXG4gICAgY2FuY2VsOmJvb2xlYW49ZmFsc2U7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6RWxlbWVudCl7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgXHJcbiAgICBzZWFyY2hGaWVsZEZvY3VzKCl7XHJcbiAgICAgICAgdGhpcy5zZWFyY2hCb3hMYWJlbFZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIHNlYXJjaEZpZWxkQmx1cigpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwic2VhcmNoRmllbGQuQmx1clwiKTtcclxuICAgICAgICBpZih0aGlzLmNhbmNlbCl7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dCA9ICcnO1xyXG4gICAgICAgICAgICAvL3RoaXMuaG92ZXJpbmcgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyBQcmV2ZW50cyBpbnB1dGZpZWxkIGZyb20gZ2FpbmluZyBmb2N1cyB0b28gc29vblxyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIC8vIFJlbW92ZSBpcy1hY3RpdmUgY2xhc3MgLSBoaWRlcyBjYW5jZWwgYnV0dG9uXHJcbiAgICAgICAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9LmJpbmQodGhpcyksIDEwKTtcclxuICAgICAgICBcclxuICAgICAgICAvKiogT25seSBkbyB0aGlzIGlmIG5vIHRleHQgd2FzIGVudGVyZWQuICovXHJcbiAgICAgICAgaWYgKHRoaXMudGV4dC5sZW5ndGggPT09IDAgKSB7XHJcbiAgICAgICAgICB0aGlzLnNlYXJjaEJveExhYmVsVmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBSZXNldCBjYW5jZWwgdG8gZmFsc2VcclxuICAgICAgICB0aGlzLmNhbmNlbCA9IGZhbHNlOyAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHNlYXJjaEZpZWxkTW91c2VPdmVyKCl7ICAgICAgXHJcbiAgICAgICAgdGhpcy5ob3ZlcmluZyA9IHRydWU7ICBcclxuICAgIH1cclxuICAgIHNlYXJjaEZpZWxkTW91c2VPdXQoKXsgICAgICAgXHJcbiAgICAgICAgdGhpcy5ob3ZlcmluZyA9IGZhbHNlOyBcclxuICAgIH1cclxuICAgIGNhbmNlbEJ1dHRvbk1vdXNlRG93bigpe1xyXG4gICAgICAgIHRoaXMudGV4dD0nJztcclxuICAgICAgICB0aGlzLmNhbmNlbCA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHNlYXJjaEJ1dHRvbk1vdXNlRG93bigpe1xyXG4gICAgICAgIGxldCBlID0gbmV3IEV2ZW50KCdzZWFyY2gnLHtidWJibGVzOnRydWUsIGNhbmNlbGFibGU6dHJ1ZX0pO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5kaXNwYXRjaEV2ZW50KGUpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBhdHRhY2hlZCgpeyAgICBcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGVudW0gTGlzdEl0ZW1UeXBlIHtcclxuICAgIGRlZmF1bHQsXHJcbiAgICBkb2N1bWVudCAgICBcclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
