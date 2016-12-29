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
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNlYXJjaEJveC9TZWFyY2hCb3gudHMiXSwibmFtZXMiOlsiT2ZmaWNlU2VhcmNoQm94IiwiT2ZmaWNlU2VhcmNoQm94LmNvbnN0cnVjdG9yIiwiT2ZmaWNlU2VhcmNoQm94LnNlYXJjaEZpZWxkRm9jdXMiLCJPZmZpY2VTZWFyY2hCb3guc2VhcmNoRmllbGRCbHVyIiwiT2ZmaWNlU2VhcmNoQm94LnNlYXJjaEZpZWxkTW91c2VPdmVyIiwiT2ZmaWNlU2VhcmNoQm94LnNlYXJjaEZpZWxkTW91c2VPdXQiLCJPZmZpY2VTZWFyY2hCb3guY2FuY2VsQnV0dG9uTW91c2VEb3duIiwiT2ZmaWNlU2VhcmNoQm94LnNlYXJjaEJ1dHRvbk1vdXNlRG93biIsIk9mZmljZVNlYXJjaEJveC5hdHRhY2hlZCIsIkxpc3RJdGVtVHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUVBO1FBZ0JJQSx5QkFBb0JBLE9BQWVBO1lBQWZDLFlBQU9BLEdBQVBBLE9BQU9BLENBQVFBO1lBWnpCQSxpQkFBWUEsR0FBV0EsS0FBS0EsQ0FBQ0E7WUFDN0JBLHVCQUFrQkEsR0FBVUEsUUFBUUEsQ0FBQUE7WUFDcENBLFNBQUlBLEdBQVVBLEVBQUVBLENBQUNBO1lBQzNCQSxhQUFRQSxHQUFXQSxLQUFLQSxDQUFDQTtZQUt6QkEsMEJBQXFCQSxHQUFXQSxJQUFJQSxDQUFDQTtZQUNyQ0EsYUFBUUEsR0FBV0EsS0FBS0EsQ0FBQ0E7WUFDekJBLGFBQVFBLEdBQVdBLEtBQUtBLENBQUNBO1lBQ3pCQSxXQUFNQSxHQUFTQSxLQUFLQSxDQUFDQTtRQUdyQkEsQ0FBQ0E7UUFFREQsMENBQWdCQSxHQUFoQkE7WUFDSUUsSUFBSUEsQ0FBQ0EscUJBQXFCQSxHQUFHQSxLQUFLQSxDQUFDQTtZQUNuQ0EsSUFBSUEsQ0FBQ0EsUUFBUUEsR0FBR0EsSUFBSUEsQ0FBQ0E7UUFDekJBLENBQUNBO1FBQ0RGLHlDQUFlQSxHQUFmQTtZQUNJRyxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxrQkFBa0JBLENBQUNBLENBQUNBO1lBQ2hDQSxFQUFFQSxDQUFBQSxDQUFDQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFBQSxDQUFDQTtnQkFDWkEsSUFBSUEsQ0FBQ0EsSUFBSUEsR0FBR0EsRUFBRUEsQ0FBQ0E7WUFFbkJBLENBQUNBO1lBR0RBLFVBQVVBLENBQUNBO2dCQUVQLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1lBQzFCLENBQUMsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsRUFBRUEsRUFBRUEsQ0FBQ0EsQ0FBQ0E7WUFHbEJBLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLEtBQUtBLENBQUVBLENBQUNBLENBQUNBLENBQUNBO2dCQUM1QkEsSUFBSUEsQ0FBQ0EscUJBQXFCQSxHQUFHQSxJQUFJQSxDQUFDQTtZQUNwQ0EsQ0FBQ0E7WUFHREEsSUFBSUEsQ0FBQ0EsTUFBTUEsR0FBR0EsS0FBS0EsQ0FBQ0E7UUFDeEJBLENBQUNBO1FBRURILDhDQUFvQkEsR0FBcEJBO1lBQ0lJLElBQUlBLENBQUNBLFFBQVFBLEdBQUdBLElBQUlBLENBQUNBO1FBQ3pCQSxDQUFDQTtRQUNESiw2Q0FBbUJBLEdBQW5CQTtZQUNJSyxJQUFJQSxDQUFDQSxRQUFRQSxHQUFHQSxLQUFLQSxDQUFDQTtRQUMxQkEsQ0FBQ0E7UUFDREwsK0NBQXFCQSxHQUFyQkE7WUFDSU0sSUFBSUEsQ0FBQ0EsSUFBSUEsR0FBQ0EsRUFBRUEsQ0FBQ0E7WUFDYkEsSUFBSUEsQ0FBQ0EsTUFBTUEsR0FBR0EsSUFBSUEsQ0FBQ0E7UUFDdkJBLENBQUNBO1FBRUROLCtDQUFxQkEsR0FBckJBO1lBQ0lPLElBQUlBLENBQUNBLEdBQUdBLElBQUlBLEtBQUtBLENBQUNBLFFBQVFBLEVBQUNBLEVBQUNBLE9BQU9BLEVBQUNBLElBQUlBLEVBQUVBLFVBQVVBLEVBQUNBLElBQUlBLEVBQUNBLENBQUNBLENBQUNBO1lBQzVEQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxhQUFhQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUNsQ0EsQ0FBQ0E7UUFFRFAsa0NBQVFBLEdBQVJBO1FBQ0FRLENBQUNBO1FBM0REUjtZQUFDQSw0QkFBUUE7O1dBQUNBLHlDQUFZQSxVQUFpQkE7UUFDdkNBO1lBQUNBLDRCQUFRQTs7V0FBQ0EsK0NBQWtCQSxVQUFrQkE7UUFDOUNBO1lBQUNBLDRCQUFRQTs7V0FBQ0EsaUNBQUlBLFVBQWFBO1FBTi9CQTtZQUFDQSwwQkFBTUEsQ0FBQ0EsT0FBT0EsQ0FBQ0E7WUFDZkEsaUNBQWFBLENBQUNBLGtCQUFrQkEsQ0FBQ0E7OzRCQStEakNBO1FBQURBLHNCQUFDQTtJQUFEQSxDQWhFQSxBQWdFQ0EsSUFBQTtJQTlEWSx1QkFBZSxrQkE4RDNCLENBQUE7SUFFRCxXQUFZLFlBQVk7UUFDcEJTLHFEQUFPQSxDQUFBQTtRQUNQQSx1REFBUUEsQ0FBQUE7SUFDWkEsQ0FBQ0EsRUFIVyxvQkFBWSxLQUFaLG9CQUFZLFFBR3ZCO0lBSEQsSUFBWSxZQUFZLEdBQVosb0JBR1gsQ0FBQSIsImZpbGUiOiJTZWFyY2hCb3gvU2VhcmNoQm94LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjdXN0b21FbGVtZW50LCBiaW5kYWJsZSwgaW5qZWN0fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcbi8vaW1wb3J0IFwiLi9KcXVlcnkuU2VhcmNoQm94XCI7XHJcbkBpbmplY3QoRWxlbWVudClcclxuQGN1c3RvbUVsZW1lbnQoJ29mZmljZS1zZWFyY2hib3gnKVxyXG5leHBvcnQgY2xhc3MgT2ZmaWNlU2VhcmNoQm94IHtcclxuXHJcbiAgICBAYmluZGFibGUgc2VhcmNoQnV0dG9uOmJvb2xlYW4gPSBmYWxzZTtcclxuICAgIEBiaW5kYWJsZSBzZWFyY2hCb3hMYWJlbFRleHQ6c3RyaW5nID0gXCJTZWFyY2hcIlxyXG4gICAgQGJpbmRhYmxlIHRleHQ6c3RyaW5nID0gJyc7XHJcbiAgICBpc0FjdGl2ZTpib29sZWFuID0gZmFsc2U7XHJcbiAgICBcclxuICAgICRzZWFyY2hGaWVsZDpFbGVtZW50O1xyXG4gICAgJHNlYXJjaEJ1dHRvbjpFbGVtZW50O1xyXG4gICAgJHNlYXJjaEJveExhYmVsOkVsZW1lbnQ7XHJcbiAgICBzZWFyY2hCb3hMYWJlbFZpc2libGU6Ym9vbGVhbiA9IHRydWU7XHJcbiAgICBoYXNGb2N1czpib29sZWFuID0gZmFsc2U7XHJcbiAgICBob3ZlcmluZzpib29sZWFuID0gZmFsc2U7XHJcbiAgICBjYW5jZWw6Ym9vbGVhbj1mYWxzZTtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDpFbGVtZW50KXtcclxuICAgICAgICBcclxuICAgIH1cclxuICBcclxuICAgIHNlYXJjaEZpZWxkRm9jdXMoKXtcclxuICAgICAgICB0aGlzLnNlYXJjaEJveExhYmVsVmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgc2VhcmNoRmllbGRCbHVyKCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJzZWFyY2hGaWVsZC5CbHVyXCIpO1xyXG4gICAgICAgIGlmKHRoaXMuY2FuY2VsKXtcclxuICAgICAgICAgICAgdGhpcy50ZXh0ID0gJyc7XHJcbiAgICAgICAgICAgIC8vdGhpcy5ob3ZlcmluZyA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFByZXZlbnRzIGlucHV0ZmllbGQgZnJvbSBnYWluaW5nIGZvY3VzIHRvbyBzb29uXHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgLy8gUmVtb3ZlIGlzLWFjdGl2ZSBjbGFzcyAtIGhpZGVzIGNhbmNlbCBidXR0b25cclxuICAgICAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH0uYmluZCh0aGlzKSwgMTApO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8qKiBPbmx5IGRvIHRoaXMgaWYgbm8gdGV4dCB3YXMgZW50ZXJlZC4gKi9cclxuICAgICAgICBpZiAodGhpcy50ZXh0Lmxlbmd0aCA9PT0gMCApIHtcclxuICAgICAgICAgIHRoaXMuc2VhcmNoQm94TGFiZWxWaXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFJlc2V0IGNhbmNlbCB0byBmYWxzZVxyXG4gICAgICAgIHRoaXMuY2FuY2VsID0gZmFsc2U7ICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgc2VhcmNoRmllbGRNb3VzZU92ZXIoKXsgICAgICBcclxuICAgICAgICB0aGlzLmhvdmVyaW5nID0gdHJ1ZTsgIFxyXG4gICAgfVxyXG4gICAgc2VhcmNoRmllbGRNb3VzZU91dCgpeyAgICAgICBcclxuICAgICAgICB0aGlzLmhvdmVyaW5nID0gZmFsc2U7IFxyXG4gICAgfVxyXG4gICAgY2FuY2VsQnV0dG9uTW91c2VEb3duKCl7XHJcbiAgICAgICAgdGhpcy50ZXh0PScnO1xyXG4gICAgICAgIHRoaXMuY2FuY2VsID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgc2VhcmNoQnV0dG9uTW91c2VEb3duKCl7XHJcbiAgICAgICAgbGV0IGUgPSBuZXcgRXZlbnQoJ3NlYXJjaCcse2J1YmJsZXM6dHJ1ZSwgY2FuY2VsYWJsZTp0cnVlfSk7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmRpc3BhdGNoRXZlbnQoZSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGF0dGFjaGVkKCl7ICAgIFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZW51bSBMaXN0SXRlbVR5cGUge1xyXG4gICAgZGVmYXVsdCxcclxuICAgIGRvY3VtZW50ICAgIFxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
