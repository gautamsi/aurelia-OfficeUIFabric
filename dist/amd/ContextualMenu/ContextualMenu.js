var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-framework', "./Jquery.ContextualMenu"], function (require, exports, aurelia_framework_1) {
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
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbnRleHR1YWxNZW51L0NvbnRleHR1YWxNZW51LnRzIl0sIm5hbWVzIjpbIk9mZmljZUNvbnRleHR1YWxNZW51IiwiT2ZmaWNlQ29udGV4dHVhbE1lbnUuY29uc3RydWN0b3IiLCJPZmZpY2VDb250ZXh0dWFsTWVudS5jbGlja0hhbmRsZXIiLCJPZmZpY2VDb250ZXh0dWFsTWVudS5hdHRhY2hlZCIsIkxpc3RJdGVtVHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQTJDQTtRQTZCSUEsOEJBQW9CQSxPQUFlQTtZQUFmQyxZQUFPQSxHQUFQQSxPQUFPQSxDQUFRQTtZQTFCekJBLFNBQUlBLEdBQVdBLFlBQVlBLENBQUNBLFlBQVlBLENBQUNBLE9BQU9BLENBQUNBLENBQUNBO1lBQ2xEQSxpQkFBWUEsR0FBVUEsYUFBYUEsQ0FBQ0E7WUFDcENBLGdCQUFXQSxHQUFVQSxJQUFJQSxDQUFDQTtZQUMxQkEsa0JBQWFBLEdBQVVBLElBQUlBLENBQUNBO1lBQzVCQSxpQkFBWUEsR0FBVUEsSUFBSUEsQ0FBQ0E7WUFDM0JBLGFBQVFBLEdBQVVBLElBQUlBLENBQUNBO1lBQ3ZCQSxVQUFLQSxHQUFVQSxJQUFJQSxDQUFDQTtZQUNwQkEsYUFBUUEsR0FBVUEsSUFBSUEsQ0FBQ0E7WUFDdkJBLFlBQU9BLEdBQVVBLElBQUlBLENBQUNBO1lBS3RCQSxnQkFBV0EsR0FBV0EsS0FBS0EsQ0FBQ0E7WUFJdENBLGdCQUFXQSxHQUFRQSxXQUFXQSxDQUFBQTtZQUM5QkEsaUJBQVlBLEdBQVdBLEtBQUtBLENBQUNBO1lBQzdCQSxjQUFTQSxHQUFXQSxLQUFLQSxDQUFDQTtZQUMxQkEsZUFBVUEsR0FBV0EsS0FBS0EsQ0FBQ0E7WUFDM0JBLGVBQVVBLEdBQVdBLEtBQUtBLENBQUNBO1lBQzNCQSxjQUFTQSxHQUFXQSxLQUFLQSxDQUFDQTtZQUMxQkEsa0JBQWFBLEdBQVVBLElBQUlBLENBQUNBO1FBSzVCQSxDQUFDQTtRQUdERCwyQ0FBWUEsR0FBWkE7WUFFSUUsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsaUJBQWlCQSxDQUFDQSxDQUFDQTtRQUNuQ0EsQ0FBQ0E7UUFDREYsdUNBQVFBLEdBQVJBO1lBQ0lHLEVBQUVBLENBQUFBLENBQUNBLElBQUlBLENBQUNBLFdBQVdBLENBQUNBO2dCQUNoQkEsTUFBTUEsQ0FBQ0E7WUFFWkEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsQ0FBQ0EsY0FBY0EsRUFBRUEsQ0FBQ0E7UUFDeENBLENBQUNBO1FBeENESDtZQUFDQSw0QkFBUUE7O1dBQUNBLHNDQUFJQSxVQUE4Q0E7UUFDNURBO1lBQUNBLDRCQUFRQTs7V0FBQ0EsOENBQVlBLFVBQXdCQTtRQUM5Q0E7WUFBQ0EsNEJBQVFBOztXQUFDQSw2Q0FBV0EsVUFBZUE7UUFDcENBO1lBQUNBLDRCQUFRQTs7V0FBQ0EsK0NBQWFBLFVBQWVBO1FBQ3RDQTtZQUFDQSw0QkFBUUE7O1dBQUNBLDhDQUFZQSxVQUFlQTtRQUNyQ0E7WUFBQ0EsNEJBQVFBOztXQUFDQSwwQ0FBUUEsVUFBZUE7UUFDakNBO1lBQUNBLDRCQUFRQTs7V0FBQ0EsdUNBQUtBLFVBQWVBO1FBQzlCQTtZQUFDQSw0QkFBUUE7O1dBQUNBLDBDQUFRQSxVQUFlQTtRQUNqQ0E7WUFBQ0EsNEJBQVFBOztXQUFDQSx5Q0FBT0EsVUFBZUE7UUFDaENBO1lBQUNBLDRCQUFRQTs7V0FBQ0EsNENBQVVBLFVBQVNBO1FBQzdCQTtZQUFDQSw0QkFBUUE7O1dBQUNBLDRDQUFVQSxVQUFTQTtRQUM3QkE7WUFBQ0EsNEJBQVFBOztXQUFDQSwwQ0FBUUEsVUFBU0E7UUFFM0JBO1lBQUNBLDRCQUFRQTs7V0FBQ0EsNkNBQVdBLFVBQWlCQTtRQUN0Q0E7WUFBQ0EsNEJBQVFBOztXQUFDQSx3Q0FBTUEsVUFBU0E7UUFDekJBO1lBQUNBLDRCQUFRQTs7V0FBQ0EsNkNBQVdBLFVBQVNBO1FBbEJsQ0E7WUFBQ0EsMEJBQU1BLENBQUNBLE9BQU9BLENBQUNBO1lBQ2ZBLGlDQUFhQSxDQUFDQSx1QkFBdUJBLENBQUNBOztpQ0EyQ3RDQTtRQUFEQSwyQkFBQ0E7SUFBREEsQ0E1Q0EsQUE0Q0NBLElBQUE7SUExQ1ksNEJBQW9CLHVCQTBDaEMsQ0FBQTtJQUVELFdBQVksWUFBWTtRQUNwQkkscURBQU9BLENBQUFBO1FBQ1BBLHVEQUFRQSxDQUFBQTtJQUNaQSxDQUFDQSxFQUhXLG9CQUFZLEtBQVosb0JBQVksUUFHdkI7SUFIRCxJQUFZLFlBQVksR0FBWixvQkFHWCxDQUFBIiwiZmlsZSI6IkNvbnRleHR1YWxNZW51L0NvbnRleHR1YWxNZW51LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjdXN0b21FbGVtZW50LCBiaW5kYWJsZSwgaW5qZWN0fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcblxyXG4vKipcclxuICogIHdvcmthcm91bmQgd2l0aCBvZmZpY2lhbCBmYWJyaWMganMgXHJcbiAgICAgICAgLy8gRGVzZWxlY3QgYWxsIG9mIHRoZSBpdGVtcyBhbmQgY2xvc2UgYW55IG1lbnVzLlxyXG4gICAgICAgICAgJCgnLm1zLUNvbnRleHR1YWxNZW51LWxpbmsnKVxyXG4gICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnaXMtc2VsZWN0ZWQnKVxyXG4gICAgICAgICAgICAgIC5zaWJsaW5ncygnLm1zLUNvbnRleHR1YWxNZW51JylcclxuICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2lzLW9wZW4nKTtcclxuXHJcbiAgICAgICAgICAvLyBTZWxlY3QgdGhpcyBpdGVtLlxyXG4gICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnaXMtc2VsZWN0ZWQnKTtcclxuXHJcbiAgICAgICAgICAvLyBJZiB0aGlzIGl0ZW0gaGFzIGEgbWVudSwgb3BlbiBpdC5cclxuICAgICAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKCdtcy1Db250ZXh0dWFsTWVudS1saW5rLS1oYXNNZW51JykpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5zaWJsaW5ncygnLm1zLUNvbnRleHR1YWxNZW51OmZpcnN0JykuYWRkQ2xhc3MoJ2lzLW9wZW4nKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcmVwbGFjZSB3aXRoIHdpdGggXHJcbiAqIFxyXG4gKiBcclxuICAgICAgICAgIC8vIERlc2VsZWN0IGFsbCBvZiB0aGUgaXRlbXMgYW5kIGNsb3NlIGFueSBtZW51cy5cclxuICAgICAgICAgICQoJy5tcy1Db250ZXh0dWFsTWVudS1saW5rJylcclxuICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2lzLXNlbGVjdGVkJylcclxuICAgICAgICAgICAgICAuc2libGluZ3MoJy5tcy1Db250ZXh0dWFsTWVudS1jb250YWluZXInKVxyXG4gICAgICAgICAgICAgIC5maW5kKCcubXMtQ29udGV4dHVhbE1lbnUnKVxyXG4gICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnaXMtb3BlbicpO1xyXG5cclxuICAgICAgICAgIC8vIFNlbGVjdCB0aGlzIGl0ZW0uXHJcbiAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdpcy1zZWxlY3RlZCcpO1xyXG5cclxuICAgICAgICAgIC8vIElmIHRoaXMgaXRlbSBoYXMgYSBtZW51LCBvcGVuIGl0LlxyXG4gICAgICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoJ21zLUNvbnRleHR1YWxNZW51LWxpbmstLWhhc01lbnUnKSkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnNpYmxpbmdzKCcubXMtQ29udGV4dHVhbE1lbnUtY29udGFpbmVyJykuZmluZCgnLm1zLUNvbnRleHR1YWxNZW51OmZpcnN0JykuYWRkQ2xhc3MoJ2lzLW9wZW4nKTtcclxuXHJcbiAqIFxyXG4gKi9cclxuXHJcbiBcclxuXHJcbmltcG9ydCBcIi4vSnF1ZXJ5LkNvbnRleHR1YWxNZW51XCI7XHJcblxyXG5AaW5qZWN0KEVsZW1lbnQpXHJcbkBjdXN0b21FbGVtZW50KCdvZmZpY2UtY29udGV4dHVhbG1lbnUnKVxyXG5leHBvcnQgY2xhc3MgT2ZmaWNlQ29udGV4dHVhbE1lbnUge1xyXG4gICAgQGJpbmRhYmxlIHR5cGU6IHN0cmluZyA9IExpc3RJdGVtVHlwZVtMaXN0SXRlbVR5cGUuZGVmYXVsdF07XHJcbiAgICBAYmluZGFibGUgZG9jdW1lbnRJY29uOnN0cmluZyA9IFwiZG9jdW1lbnRQREZcIjtcclxuICAgIEBiaW5kYWJsZSBwcmltYXJ5VGV4dDpzdHJpbmcgPSBudWxsO1xyXG4gICAgQGJpbmRhYmxlIHNlY29uZGFyeVRleHQ6c3RyaW5nID0gbnVsbDtcclxuICAgIEBiaW5kYWJsZSB0ZXJ0aWFyeVRleHQ6c3RyaW5nID0gbnVsbDtcclxuICAgIEBiaW5kYWJsZSBtZXRhVGV4dDpzdHJpbmcgPSBudWxsO1xyXG4gICAgQGJpbmRhYmxlIGltYWdlOnN0cmluZyA9IG51bGw7XHJcbiAgICBAYmluZGFibGUgaW1hZ2VhbHQ6c3RyaW5nID0gbnVsbDtcclxuICAgIEBiaW5kYWJsZSB0b29sdGlwOnN0cmluZyA9IG51bGw7XHJcbiAgICBAYmluZGFibGUgaXNTZWxlY3RlZDpib29sZWFuOy8vID0gZmFsc2U7XHJcbiAgICBAYmluZGFibGUgc2VsZWN0YWJsZTpib29sZWFuOy8vID0gZmFsc2U7XHJcbiAgICBAYmluZGFibGUgaGFzSW1hZ2U6Ym9vbGVhbjsvLyA9IGZhbHNlO1xyXG4gICAgXHJcbiAgICBAYmluZGFibGUgbmF2YmFyQ2hpbGQ6Ym9vbGVhbiA9IGZhbHNlO1xyXG4gICAgQGJpbmRhYmxlIGlzT3Blbjpib29sZWFuOy8vID0gZmFsc2U7XHJcbiAgICBAYmluZGFibGUgbXVsdGlTZWxlY3Q6Ym9vbGVhbjsvLyA9IGZhbHNlO1xyXG5cclxuICAgIGRhcmtUZXh0Q3NzOnN0cmluZz1cImxpZ2h0VGV4dFwiIC8vZGFya1RleHRcclxuICAgIHNob3dQcmVzZW5jZTpib29sZWFuID0gZmFsc2U7XHJcbiAgICBzaG93VGl0bGU6Ym9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc2hvd1N0YXR1czpib29sZWFuID0gZmFsc2U7XHJcbiAgICBzaG93RGV0YWlsOmJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHNob3dJbWFnZTpib29sZWFuID0gZmFsc2U7XHJcbiAgICBzZWxlY3RhYmxlQ3NzOnN0cmluZyA9IG51bGw7XHJcbiAgICBcclxuICAgIGN0eE1lbnVSb290OkVsZW1lbnQ7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6RWxlbWVudCl7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgXHJcblxyXG4gICAgY2xpY2tIYW5kbGVyKCl7XHJcbiAgICAgICAgLy90aGlzLmVsZW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NsaWNrJykpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2xpY2tlZCB0b2dnbGVyXCIpO1xyXG4gICAgfVxyXG4gICAgYXR0YWNoZWQoKXtcclxuICAgICAgICBpZih0aGlzLm5hdmJhckNoaWxkKSBcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIFxyXG4gICAgICAgJCh0aGlzLmN0eE1lbnVSb290KS5Db250ZXh0dWFsTWVudSgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZW51bSBMaXN0SXRlbVR5cGUge1xyXG4gICAgZGVmYXVsdCxcclxuICAgIGRvY3VtZW50ICAgIFxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
