var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-framework', "../Navbar/NavBarItem", "./Jquery.ContextualMenu"], function (require, exports, aurelia_framework_1, NavBarItem_1) {
    var OfficeContextualMenu = (function () {
        function OfficeContextualMenu(element, $parentNavBarItem) {
            this.element = element;
            this.$parentNavBarItem = $parentNavBarItem;
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
        OfficeContextualMenu.prototype.attached = function () {
            if (this.navbarChild)
                return;
            $(this.ctxMenuRoot).ContextualMenu();
        };
        OfficeContextualMenu.prototype.closeDeselectChild = function (sourceMenuItem) {
            this.$menuItems.forEach(function (item, index) {
                if (item != sourceMenuItem) {
                    item.closeDeselectItem();
                }
            });
        };
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], OfficeContextualMenu.prototype, "tooltip", void 0);
        __decorate([
            aurelia_framework_1.children('office-contextualmenu-item'), 
            __metadata('design:type', Array)
        ], OfficeContextualMenu.prototype, "$menuItems", void 0);
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
            aurelia_framework_1.inject(Element, NavBarItem_1.OfficeNavBarItem),
            aurelia_framework_1.customElement('office-contextualmenu'), 
            __metadata('design:paramtypes', [Element, Object])
        ], OfficeContextualMenu);
        return OfficeContextualMenu;
    })();
    exports.OfficeContextualMenu = OfficeContextualMenu;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbnRleHR1YWxNZW51L0NvbnRleHR1YWxNZW51LnRzIl0sIm5hbWVzIjpbIk9mZmljZUNvbnRleHR1YWxNZW51IiwiT2ZmaWNlQ29udGV4dHVhbE1lbnUuY29uc3RydWN0b3IiLCJPZmZpY2VDb250ZXh0dWFsTWVudS5hdHRhY2hlZCIsIk9mZmljZUNvbnRleHR1YWxNZW51LmNsb3NlRGVzZWxlY3RDaGlsZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQThDQTtRQXFCSUEsOEJBQW9CQSxPQUFlQSxFQUFVQSxpQkFBaUJBO1lBQTFDQyxZQUFPQSxHQUFQQSxPQUFPQSxDQUFRQTtZQUFVQSxzQkFBaUJBLEdBQWpCQSxpQkFBaUJBLENBQUFBO1lBbEJwREEsWUFBT0EsR0FBVUEsSUFBSUEsQ0FBQ0E7WUFJdEJBLGdCQUFXQSxHQUFXQSxLQUFLQSxDQUFDQTtZQUt0Q0EsZ0JBQVdBLEdBQVFBLFdBQVdBLENBQUFBO1lBQzlCQSxpQkFBWUEsR0FBV0EsS0FBS0EsQ0FBQ0E7WUFDN0JBLGNBQVNBLEdBQVdBLEtBQUtBLENBQUNBO1lBQzFCQSxlQUFVQSxHQUFXQSxLQUFLQSxDQUFDQTtZQUMzQkEsZUFBVUEsR0FBV0EsS0FBS0EsQ0FBQ0E7WUFDM0JBLGNBQVNBLEdBQVdBLEtBQUtBLENBQUNBO1lBQzFCQSxrQkFBYUEsR0FBVUEsSUFBSUEsQ0FBQ0E7UUFLNUJBLENBQUNBO1FBRURELHVDQUFRQSxHQUFSQTtZQUNJRSxFQUFFQSxDQUFBQSxDQUFDQSxJQUFJQSxDQUFDQSxXQUFXQSxDQUFDQTtnQkFDaEJBLE1BQU1BLENBQUNBO1lBRVpBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLFdBQVdBLENBQUNBLENBQUNBLGNBQWNBLEVBQUVBLENBQUNBO1FBQ3hDQSxDQUFDQTtRQUNERixpREFBa0JBLEdBQWxCQSxVQUFtQkEsY0FBdUNBO1lBQ3RERyxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxPQUFPQSxDQUFDQSxVQUFDQSxJQUFJQSxFQUFDQSxLQUFLQTtnQkFDL0JBLEVBQUVBLENBQUFBLENBQUNBLElBQUlBLElBQUlBLGNBQWNBLENBQUNBLENBQUFBLENBQUNBO29CQUN2QkEsSUFBSUEsQ0FBQ0EsaUJBQWlCQSxFQUFFQSxDQUFDQTtnQkFDN0JBLENBQUNBO1lBQ0xBLENBQUNBLENBQUNBLENBQUNBO1FBQ1BBLENBQUNBO1FBbENESDtZQUFDQSw0QkFBUUE7O1dBQUNBLHlDQUFPQSxVQUFlQTtRQUVoQ0E7WUFBQ0EsNEJBQVFBLENBQUNBLDRCQUE0QkEsQ0FBQ0E7O1dBQUNBLDRDQUFVQSxVQUE0QkE7UUFFOUVBO1lBQUNBLDRCQUFRQTs7V0FBQ0EsNkNBQVdBLFVBQWlCQTtRQUN0Q0E7WUFBQ0EsNEJBQVFBOztXQUFDQSx3Q0FBTUEsVUFBU0E7UUFDekJBO1lBQUNBLDRCQUFRQTs7V0FBQ0EsNkNBQVdBLFVBQVNBO1FBVGxDQTtZQUFDQSwwQkFBTUEsQ0FBQ0EsT0FBT0EsRUFBRUEsNkJBQWdCQSxDQUFDQTtZQUNqQ0EsaUNBQWFBLENBQUNBLHVCQUF1QkEsQ0FBQ0E7O2lDQXFDdENBO1FBQURBLDJCQUFDQTtJQUFEQSxDQXRDQSxBQXNDQ0EsSUFBQTtJQXBDWSw0QkFBb0IsdUJBb0NoQyxDQUFBIiwiZmlsZSI6IkNvbnRleHR1YWxNZW51L0NvbnRleHR1YWxNZW51LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjdXN0b21FbGVtZW50LCBiaW5kYWJsZSwgaW5qZWN0LCBjaGlsZCwgY2hpbGRyZW4sIHVzZVNoYWRvd0RPTX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5cclxuLyoqXHJcbiAqICB3b3JrYXJvdW5kIHdpdGggb2ZmaWNpYWwgZmFicmljIGpzIFxyXG4gICAgICAgIC8vIERlc2VsZWN0IGFsbCBvZiB0aGUgaXRlbXMgYW5kIGNsb3NlIGFueSBtZW51cy5cclxuICAgICAgICAgICQoJy5tcy1Db250ZXh0dWFsTWVudS1saW5rJylcclxuICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2lzLXNlbGVjdGVkJylcclxuICAgICAgICAgICAgICAuc2libGluZ3MoJy5tcy1Db250ZXh0dWFsTWVudScpXHJcbiAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdpcy1vcGVuJyk7XHJcblxyXG4gICAgICAgICAgLy8gU2VsZWN0IHRoaXMgaXRlbS5cclxuICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2lzLXNlbGVjdGVkJyk7XHJcblxyXG4gICAgICAgICAgLy8gSWYgdGhpcyBpdGVtIGhhcyBhIG1lbnUsIG9wZW4gaXQuXHJcbiAgICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcygnbXMtQ29udGV4dHVhbE1lbnUtbGluay0taGFzTWVudScpKSB7XHJcbiAgICAgICAgICAgICQodGhpcykuc2libGluZ3MoJy5tcy1Db250ZXh0dWFsTWVudTpmaXJzdCcpLmFkZENsYXNzKCdpcy1vcGVuJyk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJlcGxhY2Ugd2l0aCB3aXRoIFxyXG4gKiBcclxuICogXHJcbiAgICAgICAgICAvLyBEZXNlbGVjdCBhbGwgb2YgdGhlIGl0ZW1zIGFuZCBjbG9zZSBhbnkgbWVudXMuXHJcbiAgICAgICAgICAkKCcubXMtQ29udGV4dHVhbE1lbnUtbGluaycpXHJcbiAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdpcy1zZWxlY3RlZCcpXHJcbiAgICAgICAgICAgICAgLnNpYmxpbmdzKCcubXMtQ29udGV4dHVhbE1lbnUtY29udGFpbmVyJylcclxuICAgICAgICAgICAgICAuZmluZCgnLm1zLUNvbnRleHR1YWxNZW51JylcclxuICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2lzLW9wZW4nKTtcclxuXHJcbiAgICAgICAgICAvLyBTZWxlY3QgdGhpcyBpdGVtLlxyXG4gICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnaXMtc2VsZWN0ZWQnKTtcclxuXHJcbiAgICAgICAgICAvLyBJZiB0aGlzIGl0ZW0gaGFzIGEgbWVudSwgb3BlbiBpdC5cclxuICAgICAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKCdtcy1Db250ZXh0dWFsTWVudS1saW5rLS1oYXNNZW51JykpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5zaWJsaW5ncygnLm1zLUNvbnRleHR1YWxNZW51LWNvbnRhaW5lcicpLmZpbmQoJy5tcy1Db250ZXh0dWFsTWVudTpmaXJzdCcpLmFkZENsYXNzKCdpcy1vcGVuJyk7XHJcblxyXG4gKiBcclxuICovXHJcblxyXG4gXHJcblxyXG5pbXBvcnQgXCIuL0pxdWVyeS5Db250ZXh0dWFsTWVudVwiO1xyXG5pbXBvcnQge09mZmljZU5hdkJhckl0ZW19IGZyb20gXCIuLi9OYXZiYXIvTmF2QmFySXRlbVwiO1xyXG5pbXBvcnQge09mZmljZUNvbnRleHR1YWxNZW51SXRlbX0gZnJvbSBcIi4vQ29udGV4dHVhbE1lbnVJdGVtXCI7XHJcblxyXG4vL0B1c2VTaGFkb3dET00oKVxyXG5AaW5qZWN0KEVsZW1lbnQsIE9mZmljZU5hdkJhckl0ZW0pXHJcbkBjdXN0b21FbGVtZW50KCdvZmZpY2UtY29udGV4dHVhbG1lbnUnKVxyXG5leHBvcnQgY2xhc3MgT2ZmaWNlQ29udGV4dHVhbE1lbnUge1xyXG4gICAgQGJpbmRhYmxlIHRvb2x0aXA6c3RyaW5nID0gbnVsbDtcclxuICAgIFxyXG4gICAgQGNoaWxkcmVuKCdvZmZpY2UtY29udGV4dHVhbG1lbnUtaXRlbScpICRtZW51SXRlbXM6T2ZmaWNlQ29udGV4dHVhbE1lbnVJdGVtW107XHJcbiAgICBcclxuICAgIEBiaW5kYWJsZSBuYXZiYXJDaGlsZDpib29sZWFuID0gZmFsc2U7XHJcbiAgICBAYmluZGFibGUgaXNPcGVuOmJvb2xlYW47Ly8gPSBmYWxzZTtcclxuICAgIEBiaW5kYWJsZSBtdWx0aVNlbGVjdDpib29sZWFuOy8vID0gZmFsc2U7XHJcbiAgICBcclxuXHJcbiAgICBkYXJrVGV4dENzczpzdHJpbmc9XCJsaWdodFRleHRcIiAvL2RhcmtUZXh0XHJcbiAgICBzaG93UHJlc2VuY2U6Ym9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc2hvd1RpdGxlOmJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHNob3dTdGF0dXM6Ym9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc2hvd0RldGFpbDpib29sZWFuID0gZmFsc2U7XHJcbiAgICBzaG93SW1hZ2U6Ym9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc2VsZWN0YWJsZUNzczpzdHJpbmcgPSBudWxsO1xyXG4gICAgXHJcbiAgICBjdHhNZW51Um9vdDpFbGVtZW50O1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OkVsZW1lbnQsIHByaXZhdGUgJHBhcmVudE5hdkJhckl0ZW0pe1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGF0dGFjaGVkKCl7XHJcbiAgICAgICAgaWYodGhpcy5uYXZiYXJDaGlsZCkgXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBcclxuICAgICAgICQodGhpcy5jdHhNZW51Um9vdCkuQ29udGV4dHVhbE1lbnUoKTtcclxuICAgIH1cclxuICAgIGNsb3NlRGVzZWxlY3RDaGlsZChzb3VyY2VNZW51SXRlbTpPZmZpY2VDb250ZXh0dWFsTWVudUl0ZW0pe1xyXG4gICAgICAgIHRoaXMuJG1lbnVJdGVtcy5mb3JFYWNoKChpdGVtLGluZGV4KT0+e1xyXG4gICAgICAgICAgICBpZihpdGVtICE9IHNvdXJjZU1lbnVJdGVtKXtcclxuICAgICAgICAgICAgICAgIGl0ZW0uY2xvc2VEZXNlbGVjdEl0ZW0oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
