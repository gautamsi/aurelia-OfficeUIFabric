var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-framework'], function (require, exports, aurelia_framework_1) {
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
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNlYXJjaEJveC9TZWFyY2hCb3gudHMiXSwibmFtZXMiOlsiT2ZmaWNlU2VhcmNoQm94IiwiT2ZmaWNlU2VhcmNoQm94LmNvbnN0cnVjdG9yIiwiT2ZmaWNlU2VhcmNoQm94LnNlYXJjaEZpZWxkRm9jdXMiLCJPZmZpY2VTZWFyY2hCb3guc2VhcmNoRmllbGRCbHVyIiwiT2ZmaWNlU2VhcmNoQm94LnNlYXJjaEZpZWxkTW91c2VPdmVyIiwiT2ZmaWNlU2VhcmNoQm94LnNlYXJjaEZpZWxkTW91c2VPdXQiLCJPZmZpY2VTZWFyY2hCb3guY2FuY2VsQnV0dG9uTW91c2VEb3duIiwiT2ZmaWNlU2VhcmNoQm94LnNlYXJjaEJ1dHRvbk1vdXNlRG93biIsIk9mZmljZVNlYXJjaEJveC5hdHRhY2hlZCIsIkxpc3RJdGVtVHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUVBO1FBZUlBLHlCQUFvQkEsT0FBZUE7WUFBZkMsWUFBT0EsR0FBUEEsT0FBT0EsQ0FBUUE7WUFYekJBLGlCQUFZQSxHQUFXQSxLQUFLQSxDQUFDQTtZQUM3QkEsU0FBSUEsR0FBVUEsRUFBRUEsQ0FBQ0E7WUFDM0JBLGFBQVFBLEdBQVdBLEtBQUtBLENBQUNBO1lBS3pCQSwwQkFBcUJBLEdBQVdBLElBQUlBLENBQUNBO1lBQ3JDQSxhQUFRQSxHQUFXQSxLQUFLQSxDQUFDQTtZQUN6QkEsYUFBUUEsR0FBV0EsS0FBS0EsQ0FBQ0E7WUFDekJBLFdBQU1BLEdBQVNBLEtBQUtBLENBQUNBO1FBR3JCQSxDQUFDQTtRQUVERCwwQ0FBZ0JBLEdBQWhCQTtZQUNJRSxJQUFJQSxDQUFDQSxxQkFBcUJBLEdBQUdBLEtBQUtBLENBQUNBO1lBQ25DQSxJQUFJQSxDQUFDQSxRQUFRQSxHQUFHQSxJQUFJQSxDQUFDQTtRQUN6QkEsQ0FBQ0E7UUFDREYseUNBQWVBLEdBQWZBO1lBQ0lHLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLGtCQUFrQkEsQ0FBQ0EsQ0FBQ0E7WUFDaENBLEVBQUVBLENBQUFBLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLENBQUFBLENBQUNBO2dCQUNaQSxJQUFJQSxDQUFDQSxJQUFJQSxHQUFHQSxFQUFFQSxDQUFDQTtZQUVuQkEsQ0FBQ0E7WUFHREEsVUFBVUEsQ0FBQ0E7Z0JBRVAsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7WUFDMUIsQ0FBQyxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxFQUFFQSxFQUFFQSxDQUFDQSxDQUFDQTtZQUdsQkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsS0FBS0EsQ0FBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQzVCQSxJQUFJQSxDQUFDQSxxQkFBcUJBLEdBQUdBLElBQUlBLENBQUNBO1lBQ3BDQSxDQUFDQTtZQUdEQSxJQUFJQSxDQUFDQSxNQUFNQSxHQUFHQSxLQUFLQSxDQUFDQTtRQUN4QkEsQ0FBQ0E7UUFFREgsOENBQW9CQSxHQUFwQkE7WUFDSUksSUFBSUEsQ0FBQ0EsUUFBUUEsR0FBR0EsSUFBSUEsQ0FBQ0E7UUFDekJBLENBQUNBO1FBQ0RKLDZDQUFtQkEsR0FBbkJBO1lBQ0lLLElBQUlBLENBQUNBLFFBQVFBLEdBQUdBLEtBQUtBLENBQUNBO1FBQzFCQSxDQUFDQTtRQUNETCwrQ0FBcUJBLEdBQXJCQTtZQUNJTSxJQUFJQSxDQUFDQSxJQUFJQSxHQUFDQSxFQUFFQSxDQUFDQTtZQUNiQSxJQUFJQSxDQUFDQSxNQUFNQSxHQUFHQSxJQUFJQSxDQUFDQTtRQUN2QkEsQ0FBQ0E7UUFFRE4sK0NBQXFCQSxHQUFyQkE7WUFDSU8sSUFBSUEsQ0FBQ0EsR0FBR0EsSUFBSUEsS0FBS0EsQ0FBQ0EsUUFBUUEsRUFBQ0EsRUFBQ0EsT0FBT0EsRUFBQ0EsSUFBSUEsRUFBRUEsVUFBVUEsRUFBQ0EsSUFBSUEsRUFBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDNURBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLGFBQWFBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1FBQ2xDQSxDQUFDQTtRQUVEUCxrQ0FBUUEsR0FBUkE7UUFDQVEsQ0FBQ0E7UUExRERSO1lBQUNBLDRCQUFRQTs7V0FBQ0EseUNBQVlBLFVBQWlCQTtRQUN2Q0E7WUFBQ0EsNEJBQVFBOztXQUFDQSxpQ0FBSUEsVUFBYUE7UUFML0JBO1lBQUNBLDBCQUFNQSxDQUFDQSxPQUFPQSxDQUFDQTtZQUNmQSxpQ0FBYUEsQ0FBQ0Esa0JBQWtCQSxDQUFDQTs7NEJBOERqQ0E7UUFBREEsc0JBQUNBO0lBQURBLENBL0RBLEFBK0RDQSxJQUFBO0lBN0RZLHVCQUFlLGtCQTZEM0IsQ0FBQTtJQUVELFdBQVksWUFBWTtRQUNwQlMscURBQU9BLENBQUFBO1FBQ1BBLHVEQUFRQSxDQUFBQTtJQUNaQSxDQUFDQSxFQUhXLG9CQUFZLEtBQVosb0JBQVksUUFHdkI7SUFIRCxJQUFZLFlBQVksR0FBWixvQkFHWCxDQUFBIiwiZmlsZSI6IlNlYXJjaEJveC9TZWFyY2hCb3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2N1c3RvbUVsZW1lbnQsIGJpbmRhYmxlLCBpbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbi8vaW1wb3J0IFwiLi9KcXVlcnkuU2VhcmNoQm94XCI7XG5AaW5qZWN0KEVsZW1lbnQpXG5AY3VzdG9tRWxlbWVudCgnb2ZmaWNlLXNlYXJjaGJveCcpXG5leHBvcnQgY2xhc3MgT2ZmaWNlU2VhcmNoQm94IHtcblxuICAgIEBiaW5kYWJsZSBzZWFyY2hCdXR0b246Ym9vbGVhbiA9IGZhbHNlO1xuICAgIEBiaW5kYWJsZSB0ZXh0OnN0cmluZyA9ICcnO1xuICAgIGlzQWN0aXZlOmJvb2xlYW4gPSBmYWxzZTtcbiAgICBcbiAgICAkc2VhcmNoRmllbGQ6RWxlbWVudDtcbiAgICAkc2VhcmNoQnV0dG9uOkVsZW1lbnQ7XG4gICAgJHNlYXJjaEJveExhYmVsOkVsZW1lbnQ7XG4gICAgc2VhcmNoQm94TGFiZWxWaXNpYmxlOmJvb2xlYW4gPSB0cnVlO1xuICAgIGhhc0ZvY3VzOmJvb2xlYW4gPSBmYWxzZTtcbiAgICBob3ZlcmluZzpib29sZWFuID0gZmFsc2U7XG4gICAgY2FuY2VsOmJvb2xlYW49ZmFsc2U7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OkVsZW1lbnQpe1xuICAgICAgICBcbiAgICB9XG4gIFxuICAgIHNlYXJjaEZpZWxkRm9jdXMoKXtcbiAgICAgICAgdGhpcy5zZWFyY2hCb3hMYWJlbFZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IHRydWU7XG4gICAgfVxuICAgIHNlYXJjaEZpZWxkQmx1cigpe1xuICAgICAgICBjb25zb2xlLmxvZyhcInNlYXJjaEZpZWxkLkJsdXJcIik7XG4gICAgICAgIGlmKHRoaXMuY2FuY2VsKXtcbiAgICAgICAgICAgIHRoaXMudGV4dCA9ICcnO1xuICAgICAgICAgICAgLy90aGlzLmhvdmVyaW5nID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gUHJldmVudHMgaW5wdXRmaWVsZCBmcm9tIGdhaW5pbmcgZm9jdXMgdG9vIHNvb25cbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIC8vIFJlbW92ZSBpcy1hY3RpdmUgY2xhc3MgLSBoaWRlcyBjYW5jZWwgYnV0dG9uXG4gICAgICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH0uYmluZCh0aGlzKSwgMTApO1xuICAgICAgICBcbiAgICAgICAgLyoqIE9ubHkgZG8gdGhpcyBpZiBubyB0ZXh0IHdhcyBlbnRlcmVkLiAqL1xuICAgICAgICBpZiAodGhpcy50ZXh0Lmxlbmd0aCA9PT0gMCApIHtcbiAgICAgICAgICB0aGlzLnNlYXJjaEJveExhYmVsVmlzaWJsZSA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZXNldCBjYW5jZWwgdG8gZmFsc2VcbiAgICAgICAgdGhpcy5jYW5jZWwgPSBmYWxzZTsgICAgICAgIFxuICAgIH1cbiAgICBcbiAgICBzZWFyY2hGaWVsZE1vdXNlT3ZlcigpeyAgICAgIFxuICAgICAgICB0aGlzLmhvdmVyaW5nID0gdHJ1ZTsgIFxuICAgIH1cbiAgICBzZWFyY2hGaWVsZE1vdXNlT3V0KCl7ICAgICAgIFxuICAgICAgICB0aGlzLmhvdmVyaW5nID0gZmFsc2U7IFxuICAgIH1cbiAgICBjYW5jZWxCdXR0b25Nb3VzZURvd24oKXtcbiAgICAgICAgdGhpcy50ZXh0PScnO1xuICAgICAgICB0aGlzLmNhbmNlbCA9IHRydWU7XG4gICAgfVxuICAgIFxuICAgIHNlYXJjaEJ1dHRvbk1vdXNlRG93bigpe1xuICAgICAgICBsZXQgZSA9IG5ldyBFdmVudCgnc2VhcmNoJyx7YnViYmxlczp0cnVlLCBjYW5jZWxhYmxlOnRydWV9KTtcbiAgICAgICAgdGhpcy5lbGVtZW50LmRpc3BhdGNoRXZlbnQoZSk7XG4gICAgfVxuICAgIFxuICAgIGF0dGFjaGVkKCl7ICAgIFxuICAgIH1cbn1cblxuZXhwb3J0IGVudW0gTGlzdEl0ZW1UeXBlIHtcbiAgICBkZWZhdWx0LFxuICAgIGRvY3VtZW50ICAgIFxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
