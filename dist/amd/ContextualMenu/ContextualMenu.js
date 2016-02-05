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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbnRleHR1YWxNZW51L0NvbnRleHR1YWxNZW51LnRzIl0sIm5hbWVzIjpbIk9mZmljZUNvbnRleHR1YWxNZW51IiwiT2ZmaWNlQ29udGV4dHVhbE1lbnUuY29uc3RydWN0b3IiLCJPZmZpY2VDb250ZXh0dWFsTWVudS5jbGlja0hhbmRsZXIiLCJPZmZpY2VDb250ZXh0dWFsTWVudS5hdHRhY2hlZCIsIkxpc3RJdGVtVHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQTJDQTtRQTZCSUEsOEJBQW9CQSxPQUFlQTtZQUFmQyxZQUFPQSxHQUFQQSxPQUFPQSxDQUFRQTtZQTFCekJBLFNBQUlBLEdBQVdBLFlBQVlBLENBQUNBLFlBQVlBLENBQUNBLE9BQU9BLENBQUNBLENBQUNBO1lBQ2xEQSxpQkFBWUEsR0FBVUEsYUFBYUEsQ0FBQ0E7WUFDcENBLGdCQUFXQSxHQUFVQSxJQUFJQSxDQUFDQTtZQUMxQkEsa0JBQWFBLEdBQVVBLElBQUlBLENBQUNBO1lBQzVCQSxpQkFBWUEsR0FBVUEsSUFBSUEsQ0FBQ0E7WUFDM0JBLGFBQVFBLEdBQVVBLElBQUlBLENBQUNBO1lBQ3ZCQSxVQUFLQSxHQUFVQSxJQUFJQSxDQUFDQTtZQUNwQkEsYUFBUUEsR0FBVUEsSUFBSUEsQ0FBQ0E7WUFDdkJBLFlBQU9BLEdBQVVBLElBQUlBLENBQUNBO1lBS3RCQSxnQkFBV0EsR0FBV0EsS0FBS0EsQ0FBQ0E7WUFJdENBLGdCQUFXQSxHQUFRQSxXQUFXQSxDQUFBQTtZQUM5QkEsaUJBQVlBLEdBQVdBLEtBQUtBLENBQUNBO1lBQzdCQSxjQUFTQSxHQUFXQSxLQUFLQSxDQUFDQTtZQUMxQkEsZUFBVUEsR0FBV0EsS0FBS0EsQ0FBQ0E7WUFDM0JBLGVBQVVBLEdBQVdBLEtBQUtBLENBQUNBO1lBQzNCQSxjQUFTQSxHQUFXQSxLQUFLQSxDQUFDQTtZQUMxQkEsa0JBQWFBLEdBQVVBLElBQUlBLENBQUNBO1FBSzVCQSxDQUFDQTtRQUdERCwyQ0FBWUEsR0FBWkE7WUFFSUUsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsaUJBQWlCQSxDQUFDQSxDQUFDQTtRQUNuQ0EsQ0FBQ0E7UUFDREYsdUNBQVFBLEdBQVJBO1lBQ0lHLEVBQUVBLENBQUFBLENBQUNBLElBQUlBLENBQUNBLFdBQVdBLENBQUNBO2dCQUNoQkEsTUFBTUEsQ0FBQ0E7WUFFWkEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsQ0FBQ0EsY0FBY0EsRUFBRUEsQ0FBQ0E7UUFDeENBLENBQUNBO1FBeENESDtZQUFDQSw0QkFBUUE7O1dBQUNBLHNDQUFJQSxVQUE4Q0E7UUFDNURBO1lBQUNBLDRCQUFRQTs7V0FBQ0EsOENBQVlBLFVBQXdCQTtRQUM5Q0E7WUFBQ0EsNEJBQVFBOztXQUFDQSw2Q0FBV0EsVUFBZUE7UUFDcENBO1lBQUNBLDRCQUFRQTs7V0FBQ0EsK0NBQWFBLFVBQWVBO1FBQ3RDQTtZQUFDQSw0QkFBUUE7O1dBQUNBLDhDQUFZQSxVQUFlQTtRQUNyQ0E7WUFBQ0EsNEJBQVFBOztXQUFDQSwwQ0FBUUEsVUFBZUE7UUFDakNBO1lBQUNBLDRCQUFRQTs7V0FBQ0EsdUNBQUtBLFVBQWVBO1FBQzlCQTtZQUFDQSw0QkFBUUE7O1dBQUNBLDBDQUFRQSxVQUFlQTtRQUNqQ0E7WUFBQ0EsNEJBQVFBOztXQUFDQSx5Q0FBT0EsVUFBZUE7UUFDaENBO1lBQUNBLDRCQUFRQTs7V0FBQ0EsNENBQVVBLFVBQVNBO1FBQzdCQTtZQUFDQSw0QkFBUUE7O1dBQUNBLDRDQUFVQSxVQUFTQTtRQUM3QkE7WUFBQ0EsNEJBQVFBOztXQUFDQSwwQ0FBUUEsVUFBU0E7UUFFM0JBO1lBQUNBLDRCQUFRQTs7V0FBQ0EsNkNBQVdBLFVBQWlCQTtRQUN0Q0E7WUFBQ0EsNEJBQVFBOztXQUFDQSx3Q0FBTUEsVUFBU0E7UUFDekJBO1lBQUNBLDRCQUFRQTs7V0FBQ0EsNkNBQVdBLFVBQVNBO1FBbEJsQ0E7WUFBQ0EsMEJBQU1BLENBQUNBLE9BQU9BLENBQUNBO1lBQ2ZBLGlDQUFhQSxDQUFDQSx1QkFBdUJBLENBQUNBOztpQ0EyQ3RDQTtRQUFEQSwyQkFBQ0E7SUFBREEsQ0E1Q0EsQUE0Q0NBLElBQUE7SUExQ1ksNEJBQW9CLHVCQTBDaEMsQ0FBQTtJQUVELFdBQVksWUFBWTtRQUNwQkkscURBQU9BLENBQUFBO1FBQ1BBLHVEQUFRQSxDQUFBQTtJQUNaQSxDQUFDQSxFQUhXLG9CQUFZLEtBQVosb0JBQVksUUFHdkI7SUFIRCxJQUFZLFlBQVksR0FBWixvQkFHWCxDQUFBIiwiZmlsZSI6IkNvbnRleHR1YWxNZW51L0NvbnRleHR1YWxNZW51LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjdXN0b21FbGVtZW50LCBiaW5kYWJsZSwgaW5qZWN0fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5cbi8qKlxuICogIHdvcmthcm91bmQgd2l0aCBvZmZpY2lhbCBmYWJyaWMganMgXG4gICAgICAgIC8vIERlc2VsZWN0IGFsbCBvZiB0aGUgaXRlbXMgYW5kIGNsb3NlIGFueSBtZW51cy5cbiAgICAgICAgICAkKCcubXMtQ29udGV4dHVhbE1lbnUtbGluaycpXG4gICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnaXMtc2VsZWN0ZWQnKVxuICAgICAgICAgICAgICAuc2libGluZ3MoJy5tcy1Db250ZXh0dWFsTWVudScpXG4gICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnaXMtb3BlbicpO1xuXG4gICAgICAgICAgLy8gU2VsZWN0IHRoaXMgaXRlbS5cbiAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdpcy1zZWxlY3RlZCcpO1xuXG4gICAgICAgICAgLy8gSWYgdGhpcyBpdGVtIGhhcyBhIG1lbnUsIG9wZW4gaXQuXG4gICAgICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoJ21zLUNvbnRleHR1YWxNZW51LWxpbmstLWhhc01lbnUnKSkge1xuICAgICAgICAgICAgJCh0aGlzKS5zaWJsaW5ncygnLm1zLUNvbnRleHR1YWxNZW51OmZpcnN0JykuYWRkQ2xhc3MoJ2lzLW9wZW4nKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJlcGxhY2Ugd2l0aCB3aXRoIFxuICogXG4gKiBcbiAgICAgICAgICAvLyBEZXNlbGVjdCBhbGwgb2YgdGhlIGl0ZW1zIGFuZCBjbG9zZSBhbnkgbWVudXMuXG4gICAgICAgICAgJCgnLm1zLUNvbnRleHR1YWxNZW51LWxpbmsnKVxuICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2lzLXNlbGVjdGVkJylcbiAgICAgICAgICAgICAgLnNpYmxpbmdzKCcubXMtQ29udGV4dHVhbE1lbnUtY29udGFpbmVyJylcbiAgICAgICAgICAgICAgLmZpbmQoJy5tcy1Db250ZXh0dWFsTWVudScpXG4gICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnaXMtb3BlbicpO1xuXG4gICAgICAgICAgLy8gU2VsZWN0IHRoaXMgaXRlbS5cbiAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdpcy1zZWxlY3RlZCcpO1xuXG4gICAgICAgICAgLy8gSWYgdGhpcyBpdGVtIGhhcyBhIG1lbnUsIG9wZW4gaXQuXG4gICAgICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoJ21zLUNvbnRleHR1YWxNZW51LWxpbmstLWhhc01lbnUnKSkge1xuICAgICAgICAgICAgJCh0aGlzKS5zaWJsaW5ncygnLm1zLUNvbnRleHR1YWxNZW51LWNvbnRhaW5lcicpLmZpbmQoJy5tcy1Db250ZXh0dWFsTWVudTpmaXJzdCcpLmFkZENsYXNzKCdpcy1vcGVuJyk7XG5cbiAqIFxuICovXG5cbiBcblxuaW1wb3J0IFwiLi9KcXVlcnkuQ29udGV4dHVhbE1lbnVcIjtcblxuQGluamVjdChFbGVtZW50KVxuQGN1c3RvbUVsZW1lbnQoJ29mZmljZS1jb250ZXh0dWFsbWVudScpXG5leHBvcnQgY2xhc3MgT2ZmaWNlQ29udGV4dHVhbE1lbnUge1xuICAgIEBiaW5kYWJsZSB0eXBlOiBzdHJpbmcgPSBMaXN0SXRlbVR5cGVbTGlzdEl0ZW1UeXBlLmRlZmF1bHRdO1xuICAgIEBiaW5kYWJsZSBkb2N1bWVudEljb246c3RyaW5nID0gXCJkb2N1bWVudFBERlwiO1xuICAgIEBiaW5kYWJsZSBwcmltYXJ5VGV4dDpzdHJpbmcgPSBudWxsO1xuICAgIEBiaW5kYWJsZSBzZWNvbmRhcnlUZXh0OnN0cmluZyA9IG51bGw7XG4gICAgQGJpbmRhYmxlIHRlcnRpYXJ5VGV4dDpzdHJpbmcgPSBudWxsO1xuICAgIEBiaW5kYWJsZSBtZXRhVGV4dDpzdHJpbmcgPSBudWxsO1xuICAgIEBiaW5kYWJsZSBpbWFnZTpzdHJpbmcgPSBudWxsO1xuICAgIEBiaW5kYWJsZSBpbWFnZWFsdDpzdHJpbmcgPSBudWxsO1xuICAgIEBiaW5kYWJsZSB0b29sdGlwOnN0cmluZyA9IG51bGw7XG4gICAgQGJpbmRhYmxlIGlzU2VsZWN0ZWQ6Ym9vbGVhbjsvLyA9IGZhbHNlO1xuICAgIEBiaW5kYWJsZSBzZWxlY3RhYmxlOmJvb2xlYW47Ly8gPSBmYWxzZTtcbiAgICBAYmluZGFibGUgaGFzSW1hZ2U6Ym9vbGVhbjsvLyA9IGZhbHNlO1xuICAgIFxuICAgIEBiaW5kYWJsZSBuYXZiYXJDaGlsZDpib29sZWFuID0gZmFsc2U7XG4gICAgQGJpbmRhYmxlIGlzT3Blbjpib29sZWFuOy8vID0gZmFsc2U7XG4gICAgQGJpbmRhYmxlIG11bHRpU2VsZWN0OmJvb2xlYW47Ly8gPSBmYWxzZTtcblxuICAgIGRhcmtUZXh0Q3NzOnN0cmluZz1cImxpZ2h0VGV4dFwiIC8vZGFya1RleHRcbiAgICBzaG93UHJlc2VuY2U6Ym9vbGVhbiA9IGZhbHNlO1xuICAgIHNob3dUaXRsZTpib29sZWFuID0gZmFsc2U7XG4gICAgc2hvd1N0YXR1czpib29sZWFuID0gZmFsc2U7XG4gICAgc2hvd0RldGFpbDpib29sZWFuID0gZmFsc2U7XG4gICAgc2hvd0ltYWdlOmJvb2xlYW4gPSBmYWxzZTtcbiAgICBzZWxlY3RhYmxlQ3NzOnN0cmluZyA9IG51bGw7XG4gICAgXG4gICAgY3R4TWVudVJvb3Q6RWxlbWVudDtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6RWxlbWVudCl7XG4gICAgICAgIFxuICAgIH1cbiAgXG5cbiAgICBjbGlja0hhbmRsZXIoKXtcbiAgICAgICAgLy90aGlzLmVsZW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NsaWNrJykpO1xuICAgICAgICBjb25zb2xlLmxvZyhcImNsaWNrZWQgdG9nZ2xlclwiKTtcbiAgICB9XG4gICAgYXR0YWNoZWQoKXtcbiAgICAgICAgaWYodGhpcy5uYXZiYXJDaGlsZCkgXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIFxuICAgICAgICQodGhpcy5jdHhNZW51Um9vdCkuQ29udGV4dHVhbE1lbnUoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBlbnVtIExpc3RJdGVtVHlwZSB7XG4gICAgZGVmYXVsdCxcbiAgICBkb2N1bWVudCAgICBcbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
