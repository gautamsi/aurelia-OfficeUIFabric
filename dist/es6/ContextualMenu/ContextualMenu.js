var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { customElement, bindable, inject, children } from 'aurelia-framework';
import "./Jquery.ContextualMenu";
import { OfficeNavBarItem } from "../Navbar/NavBarItem";
export let OfficeContextualMenu = class {
    constructor(element, $parentNavBarItem) {
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
    attached() {
        if (this.navbarChild)
            return;
        $(this.ctxMenuRoot).ContextualMenu();
    }
    closeDeselectChild(sourceMenuItem) {
        this.$menuItems.forEach((item, index) => {
            if (item != sourceMenuItem) {
                item.closeDeselectItem();
            }
        });
    }
};
__decorate([
    bindable, 
    __metadata('design:type', String)
], OfficeContextualMenu.prototype, "tooltip", void 0);
__decorate([
    children('office-contextualmenu-item'), 
    __metadata('design:type', Array)
], OfficeContextualMenu.prototype, "$menuItems", void 0);
__decorate([
    bindable, 
    __metadata('design:type', Boolean)
], OfficeContextualMenu.prototype, "navbarChild", void 0);
__decorate([
    bindable, 
    __metadata('design:type', Boolean)
], OfficeContextualMenu.prototype, "isOpen", void 0);
__decorate([
    bindable, 
    __metadata('design:type', Boolean)
], OfficeContextualMenu.prototype, "multiSelect", void 0);
OfficeContextualMenu = __decorate([
    inject(Element, OfficeNavBarItem),
    customElement('office-contextualmenu'), 
    __metadata('design:paramtypes', [Element, Object])
], OfficeContextualMenu);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbnRleHR1YWxNZW51L0NvbnRleHR1YWxNZW51LnRzIl0sIm5hbWVzIjpbIk9mZmljZUNvbnRleHR1YWxNZW51IiwiT2ZmaWNlQ29udGV4dHVhbE1lbnUuY29uc3RydWN0b3IiLCJPZmZpY2VDb250ZXh0dWFsTWVudS5hdHRhY2hlZCIsIk9mZmljZUNvbnRleHR1YWxNZW51LmNsb3NlRGVzZWxlY3RDaGlsZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O09BQU8sRUFBQyxhQUFhLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBUyxRQUFRLEVBQWUsTUFBTSxtQkFBbUI7T0F5Q3pGLHlCQUF5QjtPQUN6QixFQUFDLGdCQUFnQixFQUFDLE1BQU0sc0JBQXNCO0FBSXJEO0lBcUJJQSxZQUFvQkEsT0FBZUEsRUFBVUEsaUJBQWlCQTtRQUExQ0MsWUFBT0EsR0FBUEEsT0FBT0EsQ0FBUUE7UUFBVUEsc0JBQWlCQSxHQUFqQkEsaUJBQWlCQSxDQUFBQTtRQWxCcERBLFlBQU9BLEdBQVVBLElBQUlBLENBQUNBO1FBSXRCQSxnQkFBV0EsR0FBV0EsS0FBS0EsQ0FBQ0E7UUFLdENBLGdCQUFXQSxHQUFRQSxXQUFXQSxDQUFBQTtRQUM5QkEsaUJBQVlBLEdBQVdBLEtBQUtBLENBQUNBO1FBQzdCQSxjQUFTQSxHQUFXQSxLQUFLQSxDQUFDQTtRQUMxQkEsZUFBVUEsR0FBV0EsS0FBS0EsQ0FBQ0E7UUFDM0JBLGVBQVVBLEdBQVdBLEtBQUtBLENBQUNBO1FBQzNCQSxjQUFTQSxHQUFXQSxLQUFLQSxDQUFDQTtRQUMxQkEsa0JBQWFBLEdBQVVBLElBQUlBLENBQUNBO0lBSzVCQSxDQUFDQTtJQUVERCxRQUFRQTtRQUNKRSxFQUFFQSxDQUFBQSxDQUFDQSxJQUFJQSxDQUFDQSxXQUFXQSxDQUFDQTtZQUNoQkEsTUFBTUEsQ0FBQ0E7UUFFWkEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsQ0FBQ0EsY0FBY0EsRUFBRUEsQ0FBQ0E7SUFDeENBLENBQUNBO0lBQ0RGLGtCQUFrQkEsQ0FBQ0EsY0FBdUNBO1FBQ3RERyxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQSxJQUFJQSxFQUFDQSxLQUFLQTtZQUMvQkEsRUFBRUEsQ0FBQUEsQ0FBQ0EsSUFBSUEsSUFBSUEsY0FBY0EsQ0FBQ0EsQ0FBQUEsQ0FBQ0E7Z0JBQ3ZCQSxJQUFJQSxDQUFDQSxpQkFBaUJBLEVBQUVBLENBQUNBO1lBQzdCQSxDQUFDQTtRQUNMQSxDQUFDQSxDQUFDQSxDQUFDQTtJQUNQQSxDQUFDQTtBQUNMSCxDQUFDQTtBQW5DRztJQUFDLFFBQVE7O0dBQUMseUNBQU8sVUFBZTtBQUVoQztJQUFDLFFBQVEsQ0FBQyw0QkFBNEIsQ0FBQzs7R0FBQyw0Q0FBVSxVQUE0QjtBQUU5RTtJQUFDLFFBQVE7O0dBQUMsNkNBQVcsVUFBaUI7QUFDdEM7SUFBQyxRQUFROztHQUFDLHdDQUFNLFVBQVM7QUFDekI7SUFBQyxRQUFROztHQUFDLDZDQUFXLFVBQVM7QUFUbEM7SUFBQyxNQUFNLENBQUMsT0FBTyxFQUFFLGdCQUFnQixDQUFDO0lBQ2pDLGFBQWEsQ0FBQyx1QkFBdUIsQ0FBQzs7eUJBcUN0QztBQUFBIiwiZmlsZSI6IkNvbnRleHR1YWxNZW51L0NvbnRleHR1YWxNZW51LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjdXN0b21FbGVtZW50LCBiaW5kYWJsZSwgaW5qZWN0LCBjaGlsZCwgY2hpbGRyZW4sIHVzZVNoYWRvd0RPTX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5cclxuLyoqXHJcbiAqICB3b3JrYXJvdW5kIHdpdGggb2ZmaWNpYWwgZmFicmljIGpzIFxyXG4gICAgICAgIC8vIERlc2VsZWN0IGFsbCBvZiB0aGUgaXRlbXMgYW5kIGNsb3NlIGFueSBtZW51cy5cclxuICAgICAgICAgICQoJy5tcy1Db250ZXh0dWFsTWVudS1saW5rJylcclxuICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2lzLXNlbGVjdGVkJylcclxuICAgICAgICAgICAgICAuc2libGluZ3MoJy5tcy1Db250ZXh0dWFsTWVudScpXHJcbiAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdpcy1vcGVuJyk7XHJcblxyXG4gICAgICAgICAgLy8gU2VsZWN0IHRoaXMgaXRlbS5cclxuICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2lzLXNlbGVjdGVkJyk7XHJcblxyXG4gICAgICAgICAgLy8gSWYgdGhpcyBpdGVtIGhhcyBhIG1lbnUsIG9wZW4gaXQuXHJcbiAgICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcygnbXMtQ29udGV4dHVhbE1lbnUtbGluay0taGFzTWVudScpKSB7XHJcbiAgICAgICAgICAgICQodGhpcykuc2libGluZ3MoJy5tcy1Db250ZXh0dWFsTWVudTpmaXJzdCcpLmFkZENsYXNzKCdpcy1vcGVuJyk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJlcGxhY2Ugd2l0aCB3aXRoIFxyXG4gKiBcclxuICogXHJcbiAgICAgICAgICAvLyBEZXNlbGVjdCBhbGwgb2YgdGhlIGl0ZW1zIGFuZCBjbG9zZSBhbnkgbWVudXMuXHJcbiAgICAgICAgICAkKCcubXMtQ29udGV4dHVhbE1lbnUtbGluaycpXHJcbiAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdpcy1zZWxlY3RlZCcpXHJcbiAgICAgICAgICAgICAgLnNpYmxpbmdzKCcubXMtQ29udGV4dHVhbE1lbnUtY29udGFpbmVyJylcclxuICAgICAgICAgICAgICAuZmluZCgnLm1zLUNvbnRleHR1YWxNZW51JylcclxuICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2lzLW9wZW4nKTtcclxuXHJcbiAgICAgICAgICAvLyBTZWxlY3QgdGhpcyBpdGVtLlxyXG4gICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnaXMtc2VsZWN0ZWQnKTtcclxuXHJcbiAgICAgICAgICAvLyBJZiB0aGlzIGl0ZW0gaGFzIGEgbWVudSwgb3BlbiBpdC5cclxuICAgICAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKCdtcy1Db250ZXh0dWFsTWVudS1saW5rLS1oYXNNZW51JykpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5zaWJsaW5ncygnLm1zLUNvbnRleHR1YWxNZW51LWNvbnRhaW5lcicpLmZpbmQoJy5tcy1Db250ZXh0dWFsTWVudTpmaXJzdCcpLmFkZENsYXNzKCdpcy1vcGVuJyk7XHJcblxyXG4gKiBcclxuICovXHJcblxyXG4gXHJcblxyXG5pbXBvcnQgXCIuL0pxdWVyeS5Db250ZXh0dWFsTWVudVwiO1xyXG5pbXBvcnQge09mZmljZU5hdkJhckl0ZW19IGZyb20gXCIuLi9OYXZiYXIvTmF2QmFySXRlbVwiO1xyXG5pbXBvcnQge09mZmljZUNvbnRleHR1YWxNZW51SXRlbX0gZnJvbSBcIi4vQ29udGV4dHVhbE1lbnVJdGVtXCI7XHJcblxyXG4vL0B1c2VTaGFkb3dET00oKVxyXG5AaW5qZWN0KEVsZW1lbnQsIE9mZmljZU5hdkJhckl0ZW0pXHJcbkBjdXN0b21FbGVtZW50KCdvZmZpY2UtY29udGV4dHVhbG1lbnUnKVxyXG5leHBvcnQgY2xhc3MgT2ZmaWNlQ29udGV4dHVhbE1lbnUge1xyXG4gICAgQGJpbmRhYmxlIHRvb2x0aXA6c3RyaW5nID0gbnVsbDtcclxuICAgIFxyXG4gICAgQGNoaWxkcmVuKCdvZmZpY2UtY29udGV4dHVhbG1lbnUtaXRlbScpICRtZW51SXRlbXM6T2ZmaWNlQ29udGV4dHVhbE1lbnVJdGVtW107XHJcbiAgICBcclxuICAgIEBiaW5kYWJsZSBuYXZiYXJDaGlsZDpib29sZWFuID0gZmFsc2U7XHJcbiAgICBAYmluZGFibGUgaXNPcGVuOmJvb2xlYW47Ly8gPSBmYWxzZTtcclxuICAgIEBiaW5kYWJsZSBtdWx0aVNlbGVjdDpib29sZWFuOy8vID0gZmFsc2U7XHJcbiAgICBcclxuXHJcbiAgICBkYXJrVGV4dENzczpzdHJpbmc9XCJsaWdodFRleHRcIiAvL2RhcmtUZXh0XHJcbiAgICBzaG93UHJlc2VuY2U6Ym9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc2hvd1RpdGxlOmJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHNob3dTdGF0dXM6Ym9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc2hvd0RldGFpbDpib29sZWFuID0gZmFsc2U7XHJcbiAgICBzaG93SW1hZ2U6Ym9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc2VsZWN0YWJsZUNzczpzdHJpbmcgPSBudWxsO1xyXG4gICAgXHJcbiAgICBjdHhNZW51Um9vdDpFbGVtZW50O1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OkVsZW1lbnQsIHByaXZhdGUgJHBhcmVudE5hdkJhckl0ZW0pe1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGF0dGFjaGVkKCl7XHJcbiAgICAgICAgaWYodGhpcy5uYXZiYXJDaGlsZCkgXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBcclxuICAgICAgICQodGhpcy5jdHhNZW51Um9vdCkuQ29udGV4dHVhbE1lbnUoKTtcclxuICAgIH1cclxuICAgIGNsb3NlRGVzZWxlY3RDaGlsZChzb3VyY2VNZW51SXRlbTpPZmZpY2VDb250ZXh0dWFsTWVudUl0ZW0pe1xyXG4gICAgICAgIHRoaXMuJG1lbnVJdGVtcy5mb3JFYWNoKChpdGVtLGluZGV4KT0+e1xyXG4gICAgICAgICAgICBpZihpdGVtICE9IHNvdXJjZU1lbnVJdGVtKXtcclxuICAgICAgICAgICAgICAgIGl0ZW0uY2xvc2VEZXNlbGVjdEl0ZW0oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
