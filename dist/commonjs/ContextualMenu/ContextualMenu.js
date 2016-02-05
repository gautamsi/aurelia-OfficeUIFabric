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
require("./Jquery.ContextualMenu");
var OfficeContextualMenu = (function () {
    function OfficeContextualMenu(element) {
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
        this.navbarChild = false;
        this.darkTextCss = "lightText";
        this.showPresence = false;
        this.showTitle = false;
        this.showStatus = false;
        this.showDetail = false;
        this.showImage = false;
        this.selectableCss = null;
    }
    OfficeContextualMenu.prototype.clickHandler = function () {
        console.log("clicked toggler");
    };
    OfficeContextualMenu.prototype.attached = function () {
        if (this.navbarChild)
            return;
        $(this.ctxMenuRoot).ContextualMenu();
    };
    __decorate([
        aurelia_framework_1.bindable, 
        __metadata('design:type', String)
    ], OfficeContextualMenu.prototype, "type", void 0);
    __decorate([
        aurelia_framework_1.bindable, 
        __metadata('design:type', String)
    ], OfficeContextualMenu.prototype, "documentIcon", void 0);
    __decorate([
        aurelia_framework_1.bindable, 
        __metadata('design:type', String)
    ], OfficeContextualMenu.prototype, "primaryText", void 0);
    __decorate([
        aurelia_framework_1.bindable, 
        __metadata('design:type', String)
    ], OfficeContextualMenu.prototype, "secondaryText", void 0);
    __decorate([
        aurelia_framework_1.bindable, 
        __metadata('design:type', String)
    ], OfficeContextualMenu.prototype, "tertiaryText", void 0);
    __decorate([
        aurelia_framework_1.bindable, 
        __metadata('design:type', String)
    ], OfficeContextualMenu.prototype, "metaText", void 0);
    __decorate([
        aurelia_framework_1.bindable, 
        __metadata('design:type', String)
    ], OfficeContextualMenu.prototype, "image", void 0);
    __decorate([
        aurelia_framework_1.bindable, 
        __metadata('design:type', String)
    ], OfficeContextualMenu.prototype, "imagealt", void 0);
    __decorate([
        aurelia_framework_1.bindable, 
        __metadata('design:type', String)
    ], OfficeContextualMenu.prototype, "tooltip", void 0);
    __decorate([
        aurelia_framework_1.bindable, 
        __metadata('design:type', Boolean)
    ], OfficeContextualMenu.prototype, "isSelected", void 0);
    __decorate([
        aurelia_framework_1.bindable, 
        __metadata('design:type', Boolean)
    ], OfficeContextualMenu.prototype, "selectable", void 0);
    __decorate([
        aurelia_framework_1.bindable, 
        __metadata('design:type', Boolean)
    ], OfficeContextualMenu.prototype, "hasImage", void 0);
    __decorate([
        aurelia_framework_1.bindable, 
        __metadata('design:type', Boolean)
    ], OfficeContextualMenu.prototype, "navbarChild", void 0);
    __decorate([
        aurelia_framework_1.bindable, 
        __metadata('design:type', Boolean)
    ], OfficeContextualMenu.prototype, "isOpen", void 0);
    __decorate([
        aurelia_framework_1.bindable, 
        __metadata('design:type', Boolean)
    ], OfficeContextualMenu.prototype, "multiSelect", void 0);
    OfficeContextualMenu = __decorate([
        aurelia_framework_1.inject(Element),
        aurelia_framework_1.customElement('office-contextualmenu'), 
        __metadata('design:paramtypes', [Element])
    ], OfficeContextualMenu);
    return OfficeContextualMenu;
})();
exports.OfficeContextualMenu = OfficeContextualMenu;
(function (ListItemType) {
    ListItemType[ListItemType["default"] = 0] = "default";
    ListItemType[ListItemType["document"] = 1] = "document";
})(exports.ListItemType || (exports.ListItemType = {}));
var ListItemType = exports.ListItemType;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbnRleHR1YWxNZW51L0NvbnRleHR1YWxNZW51LnRzIl0sIm5hbWVzIjpbIk9mZmljZUNvbnRleHR1YWxNZW51IiwiT2ZmaWNlQ29udGV4dHVhbE1lbnUuY29uc3RydWN0b3IiLCJPZmZpY2VDb250ZXh0dWFsTWVudS5jbGlja0hhbmRsZXIiLCJPZmZpY2VDb250ZXh0dWFsTWVudS5hdHRhY2hlZCIsIkxpc3RJdGVtVHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsa0NBQThDLG1CQUFtQixDQUFDLENBQUE7QUF5Q2xFLFFBQU8seUJBQXlCLENBQUMsQ0FBQTtBQUVqQztJQTZCSUEsOEJBQW9CQSxPQUFlQTtRQUFmQyxZQUFPQSxHQUFQQSxPQUFPQSxDQUFRQTtRQTFCekJBLFNBQUlBLEdBQVdBLFlBQVlBLENBQUNBLFlBQVlBLENBQUNBLE9BQU9BLENBQUNBLENBQUNBO1FBQ2xEQSxpQkFBWUEsR0FBVUEsYUFBYUEsQ0FBQ0E7UUFDcENBLGdCQUFXQSxHQUFVQSxJQUFJQSxDQUFDQTtRQUMxQkEsa0JBQWFBLEdBQVVBLElBQUlBLENBQUNBO1FBQzVCQSxpQkFBWUEsR0FBVUEsSUFBSUEsQ0FBQ0E7UUFDM0JBLGFBQVFBLEdBQVVBLElBQUlBLENBQUNBO1FBQ3ZCQSxVQUFLQSxHQUFVQSxJQUFJQSxDQUFDQTtRQUNwQkEsYUFBUUEsR0FBVUEsSUFBSUEsQ0FBQ0E7UUFDdkJBLFlBQU9BLEdBQVVBLElBQUlBLENBQUNBO1FBS3RCQSxnQkFBV0EsR0FBV0EsS0FBS0EsQ0FBQ0E7UUFJdENBLGdCQUFXQSxHQUFRQSxXQUFXQSxDQUFBQTtRQUM5QkEsaUJBQVlBLEdBQVdBLEtBQUtBLENBQUNBO1FBQzdCQSxjQUFTQSxHQUFXQSxLQUFLQSxDQUFDQTtRQUMxQkEsZUFBVUEsR0FBV0EsS0FBS0EsQ0FBQ0E7UUFDM0JBLGVBQVVBLEdBQVdBLEtBQUtBLENBQUNBO1FBQzNCQSxjQUFTQSxHQUFXQSxLQUFLQSxDQUFDQTtRQUMxQkEsa0JBQWFBLEdBQVVBLElBQUlBLENBQUNBO0lBSzVCQSxDQUFDQTtJQUdERCwyQ0FBWUEsR0FBWkE7UUFFSUUsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsaUJBQWlCQSxDQUFDQSxDQUFDQTtJQUNuQ0EsQ0FBQ0E7SUFDREYsdUNBQVFBLEdBQVJBO1FBQ0lHLEVBQUVBLENBQUFBLENBQUNBLElBQUlBLENBQUNBLFdBQVdBLENBQUNBO1lBQ2hCQSxNQUFNQSxDQUFDQTtRQUVaQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxXQUFXQSxDQUFDQSxDQUFDQSxjQUFjQSxFQUFFQSxDQUFDQTtJQUN4Q0EsQ0FBQ0E7SUF4Q0RIO1FBQUNBLDRCQUFRQTs7T0FBQ0Esc0NBQUlBLFVBQThDQTtJQUM1REE7UUFBQ0EsNEJBQVFBOztPQUFDQSw4Q0FBWUEsVUFBd0JBO0lBQzlDQTtRQUFDQSw0QkFBUUE7O09BQUNBLDZDQUFXQSxVQUFlQTtJQUNwQ0E7UUFBQ0EsNEJBQVFBOztPQUFDQSwrQ0FBYUEsVUFBZUE7SUFDdENBO1FBQUNBLDRCQUFRQTs7T0FBQ0EsOENBQVlBLFVBQWVBO0lBQ3JDQTtRQUFDQSw0QkFBUUE7O09BQUNBLDBDQUFRQSxVQUFlQTtJQUNqQ0E7UUFBQ0EsNEJBQVFBOztPQUFDQSx1Q0FBS0EsVUFBZUE7SUFDOUJBO1FBQUNBLDRCQUFRQTs7T0FBQ0EsMENBQVFBLFVBQWVBO0lBQ2pDQTtRQUFDQSw0QkFBUUE7O09BQUNBLHlDQUFPQSxVQUFlQTtJQUNoQ0E7UUFBQ0EsNEJBQVFBOztPQUFDQSw0Q0FBVUEsVUFBU0E7SUFDN0JBO1FBQUNBLDRCQUFRQTs7T0FBQ0EsNENBQVVBLFVBQVNBO0lBQzdCQTtRQUFDQSw0QkFBUUE7O09BQUNBLDBDQUFRQSxVQUFTQTtJQUUzQkE7UUFBQ0EsNEJBQVFBOztPQUFDQSw2Q0FBV0EsVUFBaUJBO0lBQ3RDQTtRQUFDQSw0QkFBUUE7O09BQUNBLHdDQUFNQSxVQUFTQTtJQUN6QkE7UUFBQ0EsNEJBQVFBOztPQUFDQSw2Q0FBV0EsVUFBU0E7SUFsQmxDQTtRQUFDQSwwQkFBTUEsQ0FBQ0EsT0FBT0EsQ0FBQ0E7UUFDZkEsaUNBQWFBLENBQUNBLHVCQUF1QkEsQ0FBQ0E7OzZCQTJDdENBO0lBQURBLDJCQUFDQTtBQUFEQSxDQTVDQSxBQTRDQ0EsSUFBQTtBQTFDWSw0QkFBb0IsdUJBMENoQyxDQUFBO0FBRUQsV0FBWSxZQUFZO0lBQ3BCSSxxREFBT0EsQ0FBQUE7SUFDUEEsdURBQVFBLENBQUFBO0FBQ1pBLENBQUNBLEVBSFcsb0JBQVksS0FBWixvQkFBWSxRQUd2QjtBQUhELElBQVksWUFBWSxHQUFaLG9CQUdYLENBQUEiLCJmaWxlIjoiQ29udGV4dHVhbE1lbnUvQ29udGV4dHVhbE1lbnUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2N1c3RvbUVsZW1lbnQsIGJpbmRhYmxlLCBpbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcblxuLyoqXG4gKiAgd29ya2Fyb3VuZCB3aXRoIG9mZmljaWFsIGZhYnJpYyBqcyBcbiAgICAgICAgLy8gRGVzZWxlY3QgYWxsIG9mIHRoZSBpdGVtcyBhbmQgY2xvc2UgYW55IG1lbnVzLlxuICAgICAgICAgICQoJy5tcy1Db250ZXh0dWFsTWVudS1saW5rJylcbiAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdpcy1zZWxlY3RlZCcpXG4gICAgICAgICAgICAgIC5zaWJsaW5ncygnLm1zLUNvbnRleHR1YWxNZW51JylcbiAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdpcy1vcGVuJyk7XG5cbiAgICAgICAgICAvLyBTZWxlY3QgdGhpcyBpdGVtLlxuICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2lzLXNlbGVjdGVkJyk7XG5cbiAgICAgICAgICAvLyBJZiB0aGlzIGl0ZW0gaGFzIGEgbWVudSwgb3BlbiBpdC5cbiAgICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcygnbXMtQ29udGV4dHVhbE1lbnUtbGluay0taGFzTWVudScpKSB7XG4gICAgICAgICAgICAkKHRoaXMpLnNpYmxpbmdzKCcubXMtQ29udGV4dHVhbE1lbnU6Zmlyc3QnKS5hZGRDbGFzcygnaXMtb3BlbicpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmVwbGFjZSB3aXRoIHdpdGggXG4gKiBcbiAqIFxuICAgICAgICAgIC8vIERlc2VsZWN0IGFsbCBvZiB0aGUgaXRlbXMgYW5kIGNsb3NlIGFueSBtZW51cy5cbiAgICAgICAgICAkKCcubXMtQ29udGV4dHVhbE1lbnUtbGluaycpXG4gICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnaXMtc2VsZWN0ZWQnKVxuICAgICAgICAgICAgICAuc2libGluZ3MoJy5tcy1Db250ZXh0dWFsTWVudS1jb250YWluZXInKVxuICAgICAgICAgICAgICAuZmluZCgnLm1zLUNvbnRleHR1YWxNZW51JylcbiAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdpcy1vcGVuJyk7XG5cbiAgICAgICAgICAvLyBTZWxlY3QgdGhpcyBpdGVtLlxuICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2lzLXNlbGVjdGVkJyk7XG5cbiAgICAgICAgICAvLyBJZiB0aGlzIGl0ZW0gaGFzIGEgbWVudSwgb3BlbiBpdC5cbiAgICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcygnbXMtQ29udGV4dHVhbE1lbnUtbGluay0taGFzTWVudScpKSB7XG4gICAgICAgICAgICAkKHRoaXMpLnNpYmxpbmdzKCcubXMtQ29udGV4dHVhbE1lbnUtY29udGFpbmVyJykuZmluZCgnLm1zLUNvbnRleHR1YWxNZW51OmZpcnN0JykuYWRkQ2xhc3MoJ2lzLW9wZW4nKTtcblxuICogXG4gKi9cblxuIFxuXG5pbXBvcnQgXCIuL0pxdWVyeS5Db250ZXh0dWFsTWVudVwiO1xuXG5AaW5qZWN0KEVsZW1lbnQpXG5AY3VzdG9tRWxlbWVudCgnb2ZmaWNlLWNvbnRleHR1YWxtZW51JylcbmV4cG9ydCBjbGFzcyBPZmZpY2VDb250ZXh0dWFsTWVudSB7XG4gICAgQGJpbmRhYmxlIHR5cGU6IHN0cmluZyA9IExpc3RJdGVtVHlwZVtMaXN0SXRlbVR5cGUuZGVmYXVsdF07XG4gICAgQGJpbmRhYmxlIGRvY3VtZW50SWNvbjpzdHJpbmcgPSBcImRvY3VtZW50UERGXCI7XG4gICAgQGJpbmRhYmxlIHByaW1hcnlUZXh0OnN0cmluZyA9IG51bGw7XG4gICAgQGJpbmRhYmxlIHNlY29uZGFyeVRleHQ6c3RyaW5nID0gbnVsbDtcbiAgICBAYmluZGFibGUgdGVydGlhcnlUZXh0OnN0cmluZyA9IG51bGw7XG4gICAgQGJpbmRhYmxlIG1ldGFUZXh0OnN0cmluZyA9IG51bGw7XG4gICAgQGJpbmRhYmxlIGltYWdlOnN0cmluZyA9IG51bGw7XG4gICAgQGJpbmRhYmxlIGltYWdlYWx0OnN0cmluZyA9IG51bGw7XG4gICAgQGJpbmRhYmxlIHRvb2x0aXA6c3RyaW5nID0gbnVsbDtcbiAgICBAYmluZGFibGUgaXNTZWxlY3RlZDpib29sZWFuOy8vID0gZmFsc2U7XG4gICAgQGJpbmRhYmxlIHNlbGVjdGFibGU6Ym9vbGVhbjsvLyA9IGZhbHNlO1xuICAgIEBiaW5kYWJsZSBoYXNJbWFnZTpib29sZWFuOy8vID0gZmFsc2U7XG4gICAgXG4gICAgQGJpbmRhYmxlIG5hdmJhckNoaWxkOmJvb2xlYW4gPSBmYWxzZTtcbiAgICBAYmluZGFibGUgaXNPcGVuOmJvb2xlYW47Ly8gPSBmYWxzZTtcbiAgICBAYmluZGFibGUgbXVsdGlTZWxlY3Q6Ym9vbGVhbjsvLyA9IGZhbHNlO1xuXG4gICAgZGFya1RleHRDc3M6c3RyaW5nPVwibGlnaHRUZXh0XCIgLy9kYXJrVGV4dFxuICAgIHNob3dQcmVzZW5jZTpib29sZWFuID0gZmFsc2U7XG4gICAgc2hvd1RpdGxlOmJvb2xlYW4gPSBmYWxzZTtcbiAgICBzaG93U3RhdHVzOmJvb2xlYW4gPSBmYWxzZTtcbiAgICBzaG93RGV0YWlsOmJvb2xlYW4gPSBmYWxzZTtcbiAgICBzaG93SW1hZ2U6Ym9vbGVhbiA9IGZhbHNlO1xuICAgIHNlbGVjdGFibGVDc3M6c3RyaW5nID0gbnVsbDtcbiAgICBcbiAgICBjdHhNZW51Um9vdDpFbGVtZW50O1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDpFbGVtZW50KXtcbiAgICAgICAgXG4gICAgfVxuICBcblxuICAgIGNsaWNrSGFuZGxlcigpe1xuICAgICAgICAvL3RoaXMuZWxlbWVudC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2xpY2snKSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2xpY2tlZCB0b2dnbGVyXCIpO1xuICAgIH1cbiAgICBhdHRhY2hlZCgpe1xuICAgICAgICBpZih0aGlzLm5hdmJhckNoaWxkKSBcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgXG4gICAgICAgJCh0aGlzLmN0eE1lbnVSb290KS5Db250ZXh0dWFsTWVudSgpO1xuICAgIH1cbn1cblxuZXhwb3J0IGVudW0gTGlzdEl0ZW1UeXBlIHtcbiAgICBkZWZhdWx0LFxuICAgIGRvY3VtZW50ICAgIFxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
