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
    var OfficeListItem = (function () {
        function OfficeListItem(element) {
            this.element = element;
            this.type = ListItemType[ListItemType.default];
            this.documentIcon = "documentPDF";
            this.primaryText = null;
            this.secondaryText = null;
            this.tertiaryText = null;
            this.metaText = null;
            this.image = null;
            this.imagealt = null;
            this.tooltip = null;
            this.darkTextCss = "lightText";
            this.showPresence = false;
            this.showTitle = false;
            this.showStatus = false;
            this.showDetail = false;
            this.showImage = false;
            this.selectableCss = null;
        }
        OfficeListItem.prototype.clickHandler = function () {
            console.log("clicked toggler");
        };
        OfficeListItem.prototype.attached = function () {
        };
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], OfficeListItem.prototype, "type", void 0);
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], OfficeListItem.prototype, "documentIcon", void 0);
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], OfficeListItem.prototype, "primaryText", void 0);
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], OfficeListItem.prototype, "secondaryText", void 0);
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], OfficeListItem.prototype, "tertiaryText", void 0);
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], OfficeListItem.prototype, "metaText", void 0);
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], OfficeListItem.prototype, "image", void 0);
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], OfficeListItem.prototype, "imagealt", void 0);
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], OfficeListItem.prototype, "tooltip", void 0);
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Boolean)
        ], OfficeListItem.prototype, "isSelected", void 0);
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Boolean)
        ], OfficeListItem.prototype, "selectable", void 0);
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Boolean)
        ], OfficeListItem.prototype, "hasImage", void 0);
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Boolean)
        ], OfficeListItem.prototype, "isUnseen", void 0);
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Boolean)
        ], OfficeListItem.prototype, "isUnread", void 0);
        OfficeListItem = __decorate([
            aurelia_framework_1.inject(Element),
            aurelia_framework_1.customElement('office-listitem'), 
            __metadata('design:paramtypes', [Element])
        ], OfficeListItem);
        return OfficeListItem;
    })();
    exports.OfficeListItem = OfficeListItem;
    (function (ListItemType) {
        ListItemType[ListItemType["default"] = 0] = "default";
        ListItemType[ListItemType["document"] = 1] = "document";
    })(exports.ListItemType || (exports.ListItemType = {}));
    var ListItemType = exports.ListItemType;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkxpc3RJdGVtL0xpc3RJdGVtLnRzIl0sIm5hbWVzIjpbIk9mZmljZUxpc3RJdGVtIiwiT2ZmaWNlTGlzdEl0ZW0uY29uc3RydWN0b3IiLCJPZmZpY2VMaXN0SXRlbS5jbGlja0hhbmRsZXIiLCJPZmZpY2VMaXN0SXRlbS5hdHRhY2hlZCIsIkxpc3RJdGVtVHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUVBO1FBMEJJQSx3QkFBb0JBLE9BQWVBO1lBQWZDLFlBQU9BLEdBQVBBLE9BQU9BLENBQVFBO1lBdkJ6QkEsU0FBSUEsR0FBV0EsWUFBWUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0E7WUFDbERBLGlCQUFZQSxHQUFVQSxhQUFhQSxDQUFDQTtZQUNwQ0EsZ0JBQVdBLEdBQVVBLElBQUlBLENBQUNBO1lBQzFCQSxrQkFBYUEsR0FBVUEsSUFBSUEsQ0FBQ0E7WUFDNUJBLGlCQUFZQSxHQUFVQSxJQUFJQSxDQUFDQTtZQUMzQkEsYUFBUUEsR0FBVUEsSUFBSUEsQ0FBQ0E7WUFDdkJBLFVBQUtBLEdBQVVBLElBQUlBLENBQUNBO1lBQ3BCQSxhQUFRQSxHQUFVQSxJQUFJQSxDQUFDQTtZQUN2QkEsWUFBT0EsR0FBVUEsSUFBSUEsQ0FBQ0E7WUFPaENBLGdCQUFXQSxHQUFRQSxXQUFXQSxDQUFBQTtZQUM5QkEsaUJBQVlBLEdBQVdBLEtBQUtBLENBQUNBO1lBQzdCQSxjQUFTQSxHQUFXQSxLQUFLQSxDQUFDQTtZQUMxQkEsZUFBVUEsR0FBV0EsS0FBS0EsQ0FBQ0E7WUFDM0JBLGVBQVVBLEdBQVdBLEtBQUtBLENBQUNBO1lBQzNCQSxjQUFTQSxHQUFXQSxLQUFLQSxDQUFDQTtZQUMxQkEsa0JBQWFBLEdBQVVBLElBQUlBLENBQUNBO1FBSTVCQSxDQUFDQTtRQUdERCxxQ0FBWUEsR0FBWkE7WUFFSUUsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsaUJBQWlCQSxDQUFDQSxDQUFDQTtRQUNuQ0EsQ0FBQ0E7UUFDREYsaUNBQVFBLEdBQVJBO1FBRUFHLENBQUNBO1FBbENESDtZQUFDQSw0QkFBUUE7O1dBQUNBLGdDQUFJQSxVQUE4Q0E7UUFDNURBO1lBQUNBLDRCQUFRQTs7V0FBQ0Esd0NBQVlBLFVBQXdCQTtRQUM5Q0E7WUFBQ0EsNEJBQVFBOztXQUFDQSx1Q0FBV0EsVUFBZUE7UUFDcENBO1lBQUNBLDRCQUFRQTs7V0FBQ0EseUNBQWFBLFVBQWVBO1FBQ3RDQTtZQUFDQSw0QkFBUUE7O1dBQUNBLHdDQUFZQSxVQUFlQTtRQUNyQ0E7WUFBQ0EsNEJBQVFBOztXQUFDQSxvQ0FBUUEsVUFBZUE7UUFDakNBO1lBQUNBLDRCQUFRQTs7V0FBQ0EsaUNBQUtBLFVBQWVBO1FBQzlCQTtZQUFDQSw0QkFBUUE7O1dBQUNBLG9DQUFRQSxVQUFlQTtRQUNqQ0E7WUFBQ0EsNEJBQVFBOztXQUFDQSxtQ0FBT0EsVUFBZUE7UUFDaENBO1lBQUNBLDRCQUFRQTs7V0FBQ0Esc0NBQVVBLFVBQVNBO1FBQzdCQTtZQUFDQSw0QkFBUUE7O1dBQUNBLHNDQUFVQSxVQUFTQTtRQUM3QkE7WUFBQ0EsNEJBQVFBOztXQUFDQSxvQ0FBUUEsVUFBU0E7UUFDM0JBO1lBQUNBLDRCQUFRQTs7V0FBQ0Esb0NBQVFBLFVBQVNBO1FBQzNCQTtZQUFDQSw0QkFBUUE7O1dBQUNBLG9DQUFRQSxVQUFTQTtRQWhCL0JBO1lBQUNBLDBCQUFNQSxDQUFDQSxPQUFPQSxDQUFDQTtZQUNmQSxpQ0FBYUEsQ0FBQ0EsaUJBQWlCQSxDQUFDQTs7MkJBcUNoQ0E7UUFBREEscUJBQUNBO0lBQURBLENBdENBLEFBc0NDQSxJQUFBO0lBcENZLHNCQUFjLGlCQW9DMUIsQ0FBQTtJQUVELFdBQVksWUFBWTtRQUNwQkkscURBQU9BLENBQUFBO1FBQ1BBLHVEQUFRQSxDQUFBQTtJQUNaQSxDQUFDQSxFQUhXLG9CQUFZLEtBQVosb0JBQVksUUFHdkI7SUFIRCxJQUFZLFlBQVksR0FBWixvQkFHWCxDQUFBIiwiZmlsZSI6Ikxpc3RJdGVtL0xpc3RJdGVtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjdXN0b21FbGVtZW50LCBiaW5kYWJsZSwgaW5qZWN0fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcblxyXG5AaW5qZWN0KEVsZW1lbnQpXHJcbkBjdXN0b21FbGVtZW50KCdvZmZpY2UtbGlzdGl0ZW0nKVxyXG5leHBvcnQgY2xhc3MgT2ZmaWNlTGlzdEl0ZW0ge1xyXG4gICAgQGJpbmRhYmxlIHR5cGU6IHN0cmluZyA9IExpc3RJdGVtVHlwZVtMaXN0SXRlbVR5cGUuZGVmYXVsdF07XHJcbiAgICBAYmluZGFibGUgZG9jdW1lbnRJY29uOnN0cmluZyA9IFwiZG9jdW1lbnRQREZcIjtcclxuICAgIEBiaW5kYWJsZSBwcmltYXJ5VGV4dDpzdHJpbmcgPSBudWxsO1xyXG4gICAgQGJpbmRhYmxlIHNlY29uZGFyeVRleHQ6c3RyaW5nID0gbnVsbDtcclxuICAgIEBiaW5kYWJsZSB0ZXJ0aWFyeVRleHQ6c3RyaW5nID0gbnVsbDtcclxuICAgIEBiaW5kYWJsZSBtZXRhVGV4dDpzdHJpbmcgPSBudWxsO1xyXG4gICAgQGJpbmRhYmxlIGltYWdlOnN0cmluZyA9IG51bGw7XHJcbiAgICBAYmluZGFibGUgaW1hZ2VhbHQ6c3RyaW5nID0gbnVsbDtcclxuICAgIEBiaW5kYWJsZSB0b29sdGlwOnN0cmluZyA9IG51bGw7XHJcbiAgICBAYmluZGFibGUgaXNTZWxlY3RlZDpib29sZWFuOy8vID0gZmFsc2U7XHJcbiAgICBAYmluZGFibGUgc2VsZWN0YWJsZTpib29sZWFuOy8vID0gZmFsc2U7XHJcbiAgICBAYmluZGFibGUgaGFzSW1hZ2U6Ym9vbGVhbjsvLyA9IGZhbHNlO1xyXG4gICAgQGJpbmRhYmxlIGlzVW5zZWVuOmJvb2xlYW47Ly8gPSBmYWxzZTtcclxuICAgIEBiaW5kYWJsZSBpc1VucmVhZDpib29sZWFuOy8vID0gZmFsc2U7XHJcbiAgICBcclxuICAgIGRhcmtUZXh0Q3NzOnN0cmluZz1cImxpZ2h0VGV4dFwiIC8vZGFya1RleHRcclxuICAgIHNob3dQcmVzZW5jZTpib29sZWFuID0gZmFsc2U7XHJcbiAgICBzaG93VGl0bGU6Ym9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc2hvd1N0YXR1czpib29sZWFuID0gZmFsc2U7XHJcbiAgICBzaG93RGV0YWlsOmJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHNob3dJbWFnZTpib29sZWFuID0gZmFsc2U7XHJcbiAgICBzZWxlY3RhYmxlQ3NzOnN0cmluZyA9IG51bGw7XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDpFbGVtZW50KXtcclxuICAgICAgICBcclxuICAgIH1cclxuICBcclxuXHJcbiAgICBjbGlja0hhbmRsZXIoKXtcclxuICAgICAgICAvL3RoaXMuZWxlbWVudC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2xpY2snKSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjbGlja2VkIHRvZ2dsZXJcIik7XHJcbiAgICB9XHJcbiAgICBhdHRhY2hlZCgpe1xyXG4gICAgICAgXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIExpc3RJdGVtVHlwZSB7XHJcbiAgICBkZWZhdWx0LFxyXG4gICAgZG9jdW1lbnQgICAgXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
