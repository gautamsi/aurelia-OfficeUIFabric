System.register(['aurelia-framework', "./Jquery.NavBar"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var aurelia_framework_1;
    var OfficeNavBar;
    return {
        setters:[
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (_1) {}],
        execute: function() {
            OfficeNavBar = (function () {
                function OfficeNavBar(element) {
                    this.element = element;
                    this.searchText = '';
                    this.searchTextRight = false;
                }
                OfficeNavBar.prototype.clickHandler = function () {
                    console.log("clicked toggler");
                };
                OfficeNavBar.prototype.attached = function () {
                    $(this.navBarRoot).NavBar();
                };
                OfficeNavBar.prototype.searchButtonClick = function (event) {
                    if (event.keyCode === 13) {
                        var e = new Event('search', { bubbles: true, cancelable: true });
                        this.element.dispatchEvent(e);
                        event.stopPropagation();
                    }
                };
                __decorate([
                    aurelia_framework_1.bindable({ defaultBindingMode: 2 }), 
                    __metadata('design:type', String)
                ], OfficeNavBar.prototype, "searchText", void 0);
                __decorate([
                    aurelia_framework_1.bindable, 
                    __metadata('design:type', Boolean)
                ], OfficeNavBar.prototype, "searchTextRight", void 0);
                OfficeNavBar = __decorate([
                    aurelia_framework_1.inject(Element),
                    aurelia_framework_1.customElement('office-navbar'), 
                    __metadata('design:paramtypes', [Element])
                ], OfficeNavBar);
                return OfficeNavBar;
            })();
            exports_1("OfficeNavBar", OfficeNavBar);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk5hdkJhci9OYXZCYXIudHMiXSwibmFtZXMiOlsiT2ZmaWNlTmF2QmFyIiwiT2ZmaWNlTmF2QmFyLmNvbnN0cnVjdG9yIiwiT2ZmaWNlTmF2QmFyLmNsaWNrSGFuZGxlciIsIk9mZmljZU5hdkJhci5hdHRhY2hlZCIsIk9mZmljZU5hdkJhci5zZWFyY2hCdXR0b25DbGljayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUtBO2dCQU9JQSxzQkFBb0JBLE9BQWdCQTtvQkFBaEJDLFlBQU9BLEdBQVBBLE9BQU9BLENBQVNBO29CQUp3QkEsZUFBVUEsR0FBV0EsRUFBRUEsQ0FBQ0E7b0JBQzFFQSxvQkFBZUEsR0FBWUEsS0FBS0EsQ0FBQ0E7Z0JBSzNDQSxDQUFDQTtnQkFHREQsbUNBQVlBLEdBQVpBO29CQUVJRSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxpQkFBaUJBLENBQUNBLENBQUNBO2dCQUNuQ0EsQ0FBQ0E7Z0JBQ0RGLCtCQUFRQSxHQUFSQTtvQkFDSUcsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsQ0FBQ0EsTUFBTUEsRUFBRUEsQ0FBQ0E7Z0JBQ2hDQSxDQUFDQTtnQkFFREgsd0NBQWlCQSxHQUFqQkEsVUFBa0JBLEtBQW9CQTtvQkFDbENJLEVBQUVBLENBQUNBLENBQUNBLEtBQUtBLENBQUNBLE9BQU9BLEtBQUtBLEVBQUVBLENBQUNBLENBQUFBLENBQUNBO3dCQUN0QkEsSUFBSUEsQ0FBQ0EsR0FBR0EsSUFBSUEsS0FBS0EsQ0FBQ0EsUUFBUUEsRUFBRUEsRUFBRUEsT0FBT0EsRUFBRUEsSUFBSUEsRUFBRUEsVUFBVUEsRUFBRUEsSUFBSUEsRUFBRUEsQ0FBQ0EsQ0FBQ0E7d0JBQ2pFQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxhQUFhQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTt3QkFDOUJBLEtBQUtBLENBQUNBLGVBQWVBLEVBQUVBLENBQUNBO29CQUM1QkEsQ0FBQ0E7Z0JBRUxBLENBQUNBO2dCQXhCREo7b0JBQUNBLDRCQUFRQSxDQUFDQSxFQUFDQSxrQkFBa0JBLEVBQUVBLENBQUNBLEVBQTBCQSxDQUFDQTs7bUJBQUNBLG9DQUFVQSxVQUFjQTtnQkFDcEZBO29CQUFDQSw0QkFBUUE7O21CQUFDQSx5Q0FBZUEsVUFBa0JBO2dCQUovQ0E7b0JBQUNBLDBCQUFNQSxDQUFDQSxPQUFPQSxDQUFDQTtvQkFDZkEsaUNBQWFBLENBQUNBLGVBQWVBLENBQUNBOztpQ0E2QjlCQTtnQkFBREEsbUJBQUNBO1lBQURBLENBOUJBLEFBOEJDQSxJQUFBO1lBOUJELHVDQThCQyxDQUFBIiwiZmlsZSI6Ik5hdkJhci9OYXZCYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2N1c3RvbUVsZW1lbnQsIGJpbmRhYmxlLCBpbmplY3QgfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcbi8vaW1wb3J0IHtiaW5kaW5nTW9kZSB9IGZyb20gJ2F1cmVsaWEtYmluZGluZyc7XHJcbi8qKiB3b3JrYXJvdW5kLCBmaXggbGluZSB3aXRoICQodGhpcykuY2hpbGRyZW4oJy5tcy1Db250ZXh0dWFsTWVudTpmaXJzdCcpLnRvZ2dsZUNsYXNzKCdpcy1vcGVuJyk7IHRvICQodGhpcykuZmluZCgnLm1zLUNvbnRleHR1YWxNZW51OmZpcnN0JykudG9nZ2xlQ2xhc3MoJ2lzLW9wZW4nKTsgKi9cclxuaW1wb3J0IFwiLi9KcXVlcnkuTmF2QmFyXCI7XHJcblxyXG5AaW5qZWN0KEVsZW1lbnQpXHJcbkBjdXN0b21FbGVtZW50KCdvZmZpY2UtbmF2YmFyJylcclxuZXhwb3J0IGNsYXNzIE9mZmljZU5hdkJhciB7XHJcbiAgICBAYmluZGFibGUoe2RlZmF1bHRCaW5kaW5nTW9kZTogMiAvKiBiaW5kaW5nTW9kZS50d29XYXkgKi99KSBzZWFyY2hUZXh0OiBzdHJpbmcgPSAnJztcclxuICAgIEBiaW5kYWJsZSBzZWFyY2hUZXh0UmlnaHQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBuYXZCYXJSb290OiBFbGVtZW50O1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50KSB7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjbGlja0hhbmRsZXIoKSB7XHJcbiAgICAgICAgLy90aGlzLmVsZW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NsaWNrJykpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2xpY2tlZCB0b2dnbGVyXCIpO1xyXG4gICAgfVxyXG4gICAgYXR0YWNoZWQoKSB7XHJcbiAgICAgICAgJCh0aGlzLm5hdkJhclJvb3QpLk5hdkJhcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHNlYXJjaEJ1dHRvbkNsaWNrKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XHJcbiAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDEzKXtcclxuICAgICAgICAgICAgbGV0IGUgPSBuZXcgRXZlbnQoJ3NlYXJjaCcsIHsgYnViYmxlczogdHJ1ZSwgY2FuY2VsYWJsZTogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmRpc3BhdGNoRXZlbnQoZSk7XHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICB9XHJcblxyXG5cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
