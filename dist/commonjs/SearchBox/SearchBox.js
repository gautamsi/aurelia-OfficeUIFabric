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
        this.searchBoxLabelText = "Search";
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
    ], OfficeSearchBox.prototype, "searchBoxLabelText", void 0);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNlYXJjaEJveC9TZWFyY2hCb3gudHMiXSwibmFtZXMiOlsiT2ZmaWNlU2VhcmNoQm94IiwiT2ZmaWNlU2VhcmNoQm94LmNvbnN0cnVjdG9yIiwiT2ZmaWNlU2VhcmNoQm94LnNlYXJjaEZpZWxkRm9jdXMiLCJPZmZpY2VTZWFyY2hCb3guc2VhcmNoRmllbGRCbHVyIiwiT2ZmaWNlU2VhcmNoQm94LnNlYXJjaEZpZWxkTW91c2VPdmVyIiwiT2ZmaWNlU2VhcmNoQm94LnNlYXJjaEZpZWxkTW91c2VPdXQiLCJPZmZpY2VTZWFyY2hCb3guY2FuY2VsQnV0dG9uTW91c2VEb3duIiwiT2ZmaWNlU2VhcmNoQm94LnNlYXJjaEJ1dHRvbk1vdXNlRG93biIsIk9mZmljZVNlYXJjaEJveC5hdHRhY2hlZCIsIkxpc3RJdGVtVHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsa0NBQThDLG1CQUFtQixDQUFDLENBQUE7QUFFbEU7SUFnQklBLHlCQUFvQkEsT0FBZUE7UUFBZkMsWUFBT0EsR0FBUEEsT0FBT0EsQ0FBUUE7UUFaekJBLGlCQUFZQSxHQUFXQSxLQUFLQSxDQUFDQTtRQUM3QkEsdUJBQWtCQSxHQUFVQSxRQUFRQSxDQUFBQTtRQUNwQ0EsU0FBSUEsR0FBVUEsRUFBRUEsQ0FBQ0E7UUFDM0JBLGFBQVFBLEdBQVdBLEtBQUtBLENBQUNBO1FBS3pCQSwwQkFBcUJBLEdBQVdBLElBQUlBLENBQUNBO1FBQ3JDQSxhQUFRQSxHQUFXQSxLQUFLQSxDQUFDQTtRQUN6QkEsYUFBUUEsR0FBV0EsS0FBS0EsQ0FBQ0E7UUFDekJBLFdBQU1BLEdBQVNBLEtBQUtBLENBQUNBO0lBR3JCQSxDQUFDQTtJQUVERCwwQ0FBZ0JBLEdBQWhCQTtRQUNJRSxJQUFJQSxDQUFDQSxxQkFBcUJBLEdBQUdBLEtBQUtBLENBQUNBO1FBQ25DQSxJQUFJQSxDQUFDQSxRQUFRQSxHQUFHQSxJQUFJQSxDQUFDQTtJQUN6QkEsQ0FBQ0E7SUFDREYseUNBQWVBLEdBQWZBO1FBQ0lHLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLGtCQUFrQkEsQ0FBQ0EsQ0FBQ0E7UUFDaENBLEVBQUVBLENBQUFBLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLENBQUFBLENBQUNBO1lBQ1pBLElBQUlBLENBQUNBLElBQUlBLEdBQUdBLEVBQUVBLENBQUNBO1FBRW5CQSxDQUFDQTtRQUdEQSxVQUFVQSxDQUFDQTtZQUVQLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQzFCLENBQUMsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsRUFBRUEsRUFBRUEsQ0FBQ0EsQ0FBQ0E7UUFHbEJBLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLEtBQUtBLENBQUVBLENBQUNBLENBQUNBLENBQUNBO1lBQzVCQSxJQUFJQSxDQUFDQSxxQkFBcUJBLEdBQUdBLElBQUlBLENBQUNBO1FBQ3BDQSxDQUFDQTtRQUdEQSxJQUFJQSxDQUFDQSxNQUFNQSxHQUFHQSxLQUFLQSxDQUFDQTtJQUN4QkEsQ0FBQ0E7SUFFREgsOENBQW9CQSxHQUFwQkE7UUFDSUksSUFBSUEsQ0FBQ0EsUUFBUUEsR0FBR0EsSUFBSUEsQ0FBQ0E7SUFDekJBLENBQUNBO0lBQ0RKLDZDQUFtQkEsR0FBbkJBO1FBQ0lLLElBQUlBLENBQUNBLFFBQVFBLEdBQUdBLEtBQUtBLENBQUNBO0lBQzFCQSxDQUFDQTtJQUNETCwrQ0FBcUJBLEdBQXJCQTtRQUNJTSxJQUFJQSxDQUFDQSxJQUFJQSxHQUFDQSxFQUFFQSxDQUFDQTtRQUNiQSxJQUFJQSxDQUFDQSxNQUFNQSxHQUFHQSxJQUFJQSxDQUFDQTtJQUN2QkEsQ0FBQ0E7SUFFRE4sK0NBQXFCQSxHQUFyQkE7UUFDSU8sSUFBSUEsQ0FBQ0EsR0FBR0EsSUFBSUEsS0FBS0EsQ0FBQ0EsUUFBUUEsRUFBQ0EsRUFBQ0EsT0FBT0EsRUFBQ0EsSUFBSUEsRUFBRUEsVUFBVUEsRUFBQ0EsSUFBSUEsRUFBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDNURBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLGFBQWFBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO0lBQ2xDQSxDQUFDQTtJQUVEUCxrQ0FBUUEsR0FBUkE7SUFDQVEsQ0FBQ0E7SUEzRERSO1FBQUNBLDRCQUFRQTs7T0FBQ0EseUNBQVlBLFVBQWlCQTtJQUN2Q0E7UUFBQ0EsNEJBQVFBOztPQUFDQSwrQ0FBa0JBLFVBQWtCQTtJQUM5Q0E7UUFBQ0EsNEJBQVFBOztPQUFDQSxpQ0FBSUEsVUFBYUE7SUFOL0JBO1FBQUNBLDBCQUFNQSxDQUFDQSxPQUFPQSxDQUFDQTtRQUNmQSxpQ0FBYUEsQ0FBQ0Esa0JBQWtCQSxDQUFDQTs7d0JBK0RqQ0E7SUFBREEsc0JBQUNBO0FBQURBLENBaEVBLEFBZ0VDQSxJQUFBO0FBOURZLHVCQUFlLGtCQThEM0IsQ0FBQTtBQUVELFdBQVksWUFBWTtJQUNwQlMscURBQU9BLENBQUFBO0lBQ1BBLHVEQUFRQSxDQUFBQTtBQUNaQSxDQUFDQSxFQUhXLG9CQUFZLEtBQVosb0JBQVksUUFHdkI7QUFIRCxJQUFZLFlBQVksR0FBWixvQkFHWCxDQUFBIiwiZmlsZSI6IlNlYXJjaEJveC9TZWFyY2hCb3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2N1c3RvbUVsZW1lbnQsIGJpbmRhYmxlLCBpbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuLy9pbXBvcnQgXCIuL0pxdWVyeS5TZWFyY2hCb3hcIjtcclxuQGluamVjdChFbGVtZW50KVxyXG5AY3VzdG9tRWxlbWVudCgnb2ZmaWNlLXNlYXJjaGJveCcpXHJcbmV4cG9ydCBjbGFzcyBPZmZpY2VTZWFyY2hCb3gge1xyXG5cclxuICAgIEBiaW5kYWJsZSBzZWFyY2hCdXR0b246Ym9vbGVhbiA9IGZhbHNlO1xyXG4gICAgQGJpbmRhYmxlIHNlYXJjaEJveExhYmVsVGV4dDpzdHJpbmcgPSBcIlNlYXJjaFwiXHJcbiAgICBAYmluZGFibGUgdGV4dDpzdHJpbmcgPSAnJztcclxuICAgIGlzQWN0aXZlOmJvb2xlYW4gPSBmYWxzZTtcclxuICAgIFxyXG4gICAgJHNlYXJjaEZpZWxkOkVsZW1lbnQ7XHJcbiAgICAkc2VhcmNoQnV0dG9uOkVsZW1lbnQ7XHJcbiAgICAkc2VhcmNoQm94TGFiZWw6RWxlbWVudDtcclxuICAgIHNlYXJjaEJveExhYmVsVmlzaWJsZTpib29sZWFuID0gdHJ1ZTtcclxuICAgIGhhc0ZvY3VzOmJvb2xlYW4gPSBmYWxzZTtcclxuICAgIGhvdmVyaW5nOmJvb2xlYW4gPSBmYWxzZTtcclxuICAgIGNhbmNlbDpib29sZWFuPWZhbHNlO1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OkVsZW1lbnQpe1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gIFxyXG4gICAgc2VhcmNoRmllbGRGb2N1cygpe1xyXG4gICAgICAgIHRoaXMuc2VhcmNoQm94TGFiZWxWaXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBzZWFyY2hGaWVsZEJsdXIoKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInNlYXJjaEZpZWxkLkJsdXJcIik7XHJcbiAgICAgICAgaWYodGhpcy5jYW5jZWwpe1xyXG4gICAgICAgICAgICB0aGlzLnRleHQgPSAnJztcclxuICAgICAgICAgICAgLy90aGlzLmhvdmVyaW5nID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gUHJldmVudHMgaW5wdXRmaWVsZCBmcm9tIGdhaW5pbmcgZm9jdXMgdG9vIHNvb25cclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAvLyBSZW1vdmUgaXMtYWN0aXZlIGNsYXNzIC0gaGlkZXMgY2FuY2VsIGJ1dHRvblxyXG4gICAgICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfS5iaW5kKHRoaXMpLCAxMCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLyoqIE9ubHkgZG8gdGhpcyBpZiBubyB0ZXh0IHdhcyBlbnRlcmVkLiAqL1xyXG4gICAgICAgIGlmICh0aGlzLnRleHQubGVuZ3RoID09PSAwICkge1xyXG4gICAgICAgICAgdGhpcy5zZWFyY2hCb3hMYWJlbFZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gUmVzZXQgY2FuY2VsIHRvIGZhbHNlXHJcbiAgICAgICAgdGhpcy5jYW5jZWwgPSBmYWxzZTsgICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzZWFyY2hGaWVsZE1vdXNlT3ZlcigpeyAgICAgIFxyXG4gICAgICAgIHRoaXMuaG92ZXJpbmcgPSB0cnVlOyAgXHJcbiAgICB9XHJcbiAgICBzZWFyY2hGaWVsZE1vdXNlT3V0KCl7ICAgICAgIFxyXG4gICAgICAgIHRoaXMuaG92ZXJpbmcgPSBmYWxzZTsgXHJcbiAgICB9XHJcbiAgICBjYW5jZWxCdXR0b25Nb3VzZURvd24oKXtcclxuICAgICAgICB0aGlzLnRleHQ9Jyc7XHJcbiAgICAgICAgdGhpcy5jYW5jZWwgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzZWFyY2hCdXR0b25Nb3VzZURvd24oKXtcclxuICAgICAgICBsZXQgZSA9IG5ldyBFdmVudCgnc2VhcmNoJyx7YnViYmxlczp0cnVlLCBjYW5jZWxhYmxlOnRydWV9KTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuZGlzcGF0Y2hFdmVudChlKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgYXR0YWNoZWQoKXsgICAgXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIExpc3RJdGVtVHlwZSB7XHJcbiAgICBkZWZhdWx0LFxyXG4gICAgZG9jdW1lbnQgICAgXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
