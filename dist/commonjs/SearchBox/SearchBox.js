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
var OfficeSearchBox = (function () {
    function OfficeSearchBox(element) {
        this.element = element;
        this.searchButton = false;
        this.text = '';
        this.isActive = false;
        this.searchBoxLabelVisible = true;
        this.hasFocus = false;
        this.hovering = false;
        this.cancel = false;
    }
    OfficeSearchBox.prototype.searchFieldFocus = function () {
        this.searchBoxLabelVisible = false;
        this.isActive = true;
    };
    OfficeSearchBox.prototype.searchFieldBlur = function () {
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
    };
    OfficeSearchBox.prototype.searchFieldMouseOver = function () {
        this.hovering = true;
    };
    OfficeSearchBox.prototype.searchFieldMouseOut = function () {
        this.hovering = false;
    };
    OfficeSearchBox.prototype.cancelButtonMouseDown = function () {
        this.text = '';
        this.cancel = true;
    };
    OfficeSearchBox.prototype.searchButtonMouseDown = function () {
        var e = new Event('search', { bubbles: true, cancelable: true });
        this.element.dispatchEvent(e);
    };
    OfficeSearchBox.prototype.attached = function () {
    };
    __decorate([
        aurelia_framework_1.bindable, 
        __metadata('design:type', Boolean)
    ], OfficeSearchBox.prototype, "searchButton", void 0);
    __decorate([
        aurelia_framework_1.bindable, 
        __metadata('design:type', String)
    ], OfficeSearchBox.prototype, "text", void 0);
    OfficeSearchBox = __decorate([
        aurelia_framework_1.inject(Element),
        aurelia_framework_1.customElement('office-searchbox'), 
        __metadata('design:paramtypes', [Element])
    ], OfficeSearchBox);
    return OfficeSearchBox;
})();
exports.OfficeSearchBox = OfficeSearchBox;
(function (ListItemType) {
    ListItemType[ListItemType["default"] = 0] = "default";
    ListItemType[ListItemType["document"] = 1] = "document";
})(exports.ListItemType || (exports.ListItemType = {}));
var ListItemType = exports.ListItemType;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNlYXJjaEJveC9TZWFyY2hCb3gudHMiXSwibmFtZXMiOlsiT2ZmaWNlU2VhcmNoQm94IiwiT2ZmaWNlU2VhcmNoQm94LmNvbnN0cnVjdG9yIiwiT2ZmaWNlU2VhcmNoQm94LnNlYXJjaEZpZWxkRm9jdXMiLCJPZmZpY2VTZWFyY2hCb3guc2VhcmNoRmllbGRCbHVyIiwiT2ZmaWNlU2VhcmNoQm94LnNlYXJjaEZpZWxkTW91c2VPdmVyIiwiT2ZmaWNlU2VhcmNoQm94LnNlYXJjaEZpZWxkTW91c2VPdXQiLCJPZmZpY2VTZWFyY2hCb3guY2FuY2VsQnV0dG9uTW91c2VEb3duIiwiT2ZmaWNlU2VhcmNoQm94LnNlYXJjaEJ1dHRvbk1vdXNlRG93biIsIk9mZmljZVNlYXJjaEJveC5hdHRhY2hlZCIsIkxpc3RJdGVtVHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsa0NBQThDLG1CQUFtQixDQUFDLENBQUE7QUFFbEU7SUFlSUEseUJBQW9CQSxPQUFlQTtRQUFmQyxZQUFPQSxHQUFQQSxPQUFPQSxDQUFRQTtRQVh6QkEsaUJBQVlBLEdBQVdBLEtBQUtBLENBQUNBO1FBQzdCQSxTQUFJQSxHQUFVQSxFQUFFQSxDQUFDQTtRQUMzQkEsYUFBUUEsR0FBV0EsS0FBS0EsQ0FBQ0E7UUFLekJBLDBCQUFxQkEsR0FBV0EsSUFBSUEsQ0FBQ0E7UUFDckNBLGFBQVFBLEdBQVdBLEtBQUtBLENBQUNBO1FBQ3pCQSxhQUFRQSxHQUFXQSxLQUFLQSxDQUFDQTtRQUN6QkEsV0FBTUEsR0FBU0EsS0FBS0EsQ0FBQ0E7SUFHckJBLENBQUNBO0lBRURELDBDQUFnQkEsR0FBaEJBO1FBQ0lFLElBQUlBLENBQUNBLHFCQUFxQkEsR0FBR0EsS0FBS0EsQ0FBQ0E7UUFDbkNBLElBQUlBLENBQUNBLFFBQVFBLEdBQUdBLElBQUlBLENBQUNBO0lBQ3pCQSxDQUFDQTtJQUNERix5Q0FBZUEsR0FBZkE7UUFDSUcsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0Esa0JBQWtCQSxDQUFDQSxDQUFDQTtRQUNoQ0EsRUFBRUEsQ0FBQUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQUEsQ0FBQ0E7WUFDWkEsSUFBSUEsQ0FBQ0EsSUFBSUEsR0FBR0EsRUFBRUEsQ0FBQ0E7UUFFbkJBLENBQUNBO1FBR0RBLFVBQVVBLENBQUNBO1lBRVAsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDMUIsQ0FBQyxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxFQUFFQSxFQUFFQSxDQUFDQSxDQUFDQTtRQUdsQkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsS0FBS0EsQ0FBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDNUJBLElBQUlBLENBQUNBLHFCQUFxQkEsR0FBR0EsSUFBSUEsQ0FBQ0E7UUFDcENBLENBQUNBO1FBR0RBLElBQUlBLENBQUNBLE1BQU1BLEdBQUdBLEtBQUtBLENBQUNBO0lBQ3hCQSxDQUFDQTtJQUVESCw4Q0FBb0JBLEdBQXBCQTtRQUNJSSxJQUFJQSxDQUFDQSxRQUFRQSxHQUFHQSxJQUFJQSxDQUFDQTtJQUN6QkEsQ0FBQ0E7SUFDREosNkNBQW1CQSxHQUFuQkE7UUFDSUssSUFBSUEsQ0FBQ0EsUUFBUUEsR0FBR0EsS0FBS0EsQ0FBQ0E7SUFDMUJBLENBQUNBO0lBQ0RMLCtDQUFxQkEsR0FBckJBO1FBQ0lNLElBQUlBLENBQUNBLElBQUlBLEdBQUNBLEVBQUVBLENBQUNBO1FBQ2JBLElBQUlBLENBQUNBLE1BQU1BLEdBQUdBLElBQUlBLENBQUNBO0lBQ3ZCQSxDQUFDQTtJQUVETiwrQ0FBcUJBLEdBQXJCQTtRQUNJTyxJQUFJQSxDQUFDQSxHQUFHQSxJQUFJQSxLQUFLQSxDQUFDQSxRQUFRQSxFQUFDQSxFQUFDQSxPQUFPQSxFQUFDQSxJQUFJQSxFQUFFQSxVQUFVQSxFQUFDQSxJQUFJQSxFQUFDQSxDQUFDQSxDQUFDQTtRQUM1REEsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsYUFBYUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7SUFDbENBLENBQUNBO0lBRURQLGtDQUFRQSxHQUFSQTtJQUNBUSxDQUFDQTtJQTFERFI7UUFBQ0EsNEJBQVFBOztPQUFDQSx5Q0FBWUEsVUFBaUJBO0lBQ3ZDQTtRQUFDQSw0QkFBUUE7O09BQUNBLGlDQUFJQSxVQUFhQTtJQUwvQkE7UUFBQ0EsMEJBQU1BLENBQUNBLE9BQU9BLENBQUNBO1FBQ2ZBLGlDQUFhQSxDQUFDQSxrQkFBa0JBLENBQUNBOzt3QkE4RGpDQTtJQUFEQSxzQkFBQ0E7QUFBREEsQ0EvREEsQUErRENBLElBQUE7QUE3RFksdUJBQWUsa0JBNkQzQixDQUFBO0FBRUQsV0FBWSxZQUFZO0lBQ3BCUyxxREFBT0EsQ0FBQUE7SUFDUEEsdURBQVFBLENBQUFBO0FBQ1pBLENBQUNBLEVBSFcsb0JBQVksS0FBWixvQkFBWSxRQUd2QjtBQUhELElBQVksWUFBWSxHQUFaLG9CQUdYLENBQUEiLCJmaWxlIjoiU2VhcmNoQm94L1NlYXJjaEJveC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3VzdG9tRWxlbWVudCwgYmluZGFibGUsIGluamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuLy9pbXBvcnQgXCIuL0pxdWVyeS5TZWFyY2hCb3hcIjtcbkBpbmplY3QoRWxlbWVudClcbkBjdXN0b21FbGVtZW50KCdvZmZpY2Utc2VhcmNoYm94JylcbmV4cG9ydCBjbGFzcyBPZmZpY2VTZWFyY2hCb3gge1xuXG4gICAgQGJpbmRhYmxlIHNlYXJjaEJ1dHRvbjpib29sZWFuID0gZmFsc2U7XG4gICAgQGJpbmRhYmxlIHRleHQ6c3RyaW5nID0gJyc7XG4gICAgaXNBY3RpdmU6Ym9vbGVhbiA9IGZhbHNlO1xuICAgIFxuICAgICRzZWFyY2hGaWVsZDpFbGVtZW50O1xuICAgICRzZWFyY2hCdXR0b246RWxlbWVudDtcbiAgICAkc2VhcmNoQm94TGFiZWw6RWxlbWVudDtcbiAgICBzZWFyY2hCb3hMYWJlbFZpc2libGU6Ym9vbGVhbiA9IHRydWU7XG4gICAgaGFzRm9jdXM6Ym9vbGVhbiA9IGZhbHNlO1xuICAgIGhvdmVyaW5nOmJvb2xlYW4gPSBmYWxzZTtcbiAgICBjYW5jZWw6Ym9vbGVhbj1mYWxzZTtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6RWxlbWVudCl7XG4gICAgICAgIFxuICAgIH1cbiAgXG4gICAgc2VhcmNoRmllbGRGb2N1cygpe1xuICAgICAgICB0aGlzLnNlYXJjaEJveExhYmVsVmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICB9XG4gICAgc2VhcmNoRmllbGRCbHVyKCl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwic2VhcmNoRmllbGQuQmx1clwiKTtcbiAgICAgICAgaWYodGhpcy5jYW5jZWwpe1xuICAgICAgICAgICAgdGhpcy50ZXh0ID0gJyc7XG4gICAgICAgICAgICAvL3RoaXMuaG92ZXJpbmcgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyBQcmV2ZW50cyBpbnB1dGZpZWxkIGZyb20gZ2FpbmluZyBmb2N1cyB0b28gc29vblxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgLy8gUmVtb3ZlIGlzLWFjdGl2ZSBjbGFzcyAtIGhpZGVzIGNhbmNlbCBidXR0b25cbiAgICAgICAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfS5iaW5kKHRoaXMpLCAxMCk7XG4gICAgICAgIFxuICAgICAgICAvKiogT25seSBkbyB0aGlzIGlmIG5vIHRleHQgd2FzIGVudGVyZWQuICovXG4gICAgICAgIGlmICh0aGlzLnRleHQubGVuZ3RoID09PSAwICkge1xuICAgICAgICAgIHRoaXMuc2VhcmNoQm94TGFiZWxWaXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlc2V0IGNhbmNlbCB0byBmYWxzZVxuICAgICAgICB0aGlzLmNhbmNlbCA9IGZhbHNlOyAgICAgICAgXG4gICAgfVxuICAgIFxuICAgIHNlYXJjaEZpZWxkTW91c2VPdmVyKCl7ICAgICAgXG4gICAgICAgIHRoaXMuaG92ZXJpbmcgPSB0cnVlOyAgXG4gICAgfVxuICAgIHNlYXJjaEZpZWxkTW91c2VPdXQoKXsgICAgICAgXG4gICAgICAgIHRoaXMuaG92ZXJpbmcgPSBmYWxzZTsgXG4gICAgfVxuICAgIGNhbmNlbEJ1dHRvbk1vdXNlRG93bigpe1xuICAgICAgICB0aGlzLnRleHQ9Jyc7XG4gICAgICAgIHRoaXMuY2FuY2VsID0gdHJ1ZTtcbiAgICB9XG4gICAgXG4gICAgc2VhcmNoQnV0dG9uTW91c2VEb3duKCl7XG4gICAgICAgIGxldCBlID0gbmV3IEV2ZW50KCdzZWFyY2gnLHtidWJibGVzOnRydWUsIGNhbmNlbGFibGU6dHJ1ZX0pO1xuICAgICAgICB0aGlzLmVsZW1lbnQuZGlzcGF0Y2hFdmVudChlKTtcbiAgICB9XG4gICAgXG4gICAgYXR0YWNoZWQoKXsgICAgXG4gICAgfVxufVxuXG5leHBvcnQgZW51bSBMaXN0SXRlbVR5cGUge1xuICAgIGRlZmF1bHQsXG4gICAgZG9jdW1lbnQgICAgXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
