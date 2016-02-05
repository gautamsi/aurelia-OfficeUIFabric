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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk5hdkJhci9OYXZCYXIudHMiXSwibmFtZXMiOlsiT2ZmaWNlTmF2QmFyIiwiT2ZmaWNlTmF2QmFyLmNvbnN0cnVjdG9yIiwiT2ZmaWNlTmF2QmFyLmNsaWNrSGFuZGxlciIsIk9mZmljZU5hdkJhci5hdHRhY2hlZCIsIk9mZmljZU5hdkJhci5zZWFyY2hCdXR0b25DbGljayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUtBO2dCQU9JQSxzQkFBb0JBLE9BQWdCQTtvQkFBaEJDLFlBQU9BLEdBQVBBLE9BQU9BLENBQVNBO29CQUp3QkEsZUFBVUEsR0FBV0EsRUFBRUEsQ0FBQ0E7b0JBQzFFQSxvQkFBZUEsR0FBWUEsS0FBS0EsQ0FBQ0E7Z0JBSzNDQSxDQUFDQTtnQkFHREQsbUNBQVlBLEdBQVpBO29CQUVJRSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxpQkFBaUJBLENBQUNBLENBQUNBO2dCQUNuQ0EsQ0FBQ0E7Z0JBQ0RGLCtCQUFRQSxHQUFSQTtvQkFDSUcsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsQ0FBQ0EsTUFBTUEsRUFBRUEsQ0FBQ0E7Z0JBQ2hDQSxDQUFDQTtnQkFFREgsd0NBQWlCQSxHQUFqQkEsVUFBa0JBLEtBQW9CQTtvQkFDbENJLEVBQUVBLENBQUNBLENBQUNBLEtBQUtBLENBQUNBLE9BQU9BLEtBQUtBLEVBQUVBLENBQUNBLENBQUFBLENBQUNBO3dCQUN0QkEsSUFBSUEsQ0FBQ0EsR0FBR0EsSUFBSUEsS0FBS0EsQ0FBQ0EsUUFBUUEsRUFBRUEsRUFBRUEsT0FBT0EsRUFBRUEsSUFBSUEsRUFBRUEsVUFBVUEsRUFBRUEsSUFBSUEsRUFBRUEsQ0FBQ0EsQ0FBQ0E7d0JBQ2pFQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxhQUFhQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTt3QkFDOUJBLEtBQUtBLENBQUNBLGVBQWVBLEVBQUVBLENBQUNBO29CQUM1QkEsQ0FBQ0E7Z0JBRUxBLENBQUNBO2dCQXhCREo7b0JBQUNBLDRCQUFRQSxDQUFDQSxFQUFDQSxrQkFBa0JBLEVBQUVBLENBQUNBLEVBQTBCQSxDQUFDQTs7bUJBQUNBLG9DQUFVQSxVQUFjQTtnQkFDcEZBO29CQUFDQSw0QkFBUUE7O21CQUFDQSx5Q0FBZUEsVUFBa0JBO2dCQUovQ0E7b0JBQUNBLDBCQUFNQSxDQUFDQSxPQUFPQSxDQUFDQTtvQkFDZkEsaUNBQWFBLENBQUNBLGVBQWVBLENBQUNBOztpQ0E2QjlCQTtnQkFBREEsbUJBQUNBO1lBQURBLENBOUJBLEFBOEJDQSxJQUFBO1lBOUJELHVDQThCQyxDQUFBIiwiZmlsZSI6Ik5hdkJhci9OYXZCYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2N1c3RvbUVsZW1lbnQsIGJpbmRhYmxlLCBpbmplY3QgfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG4vL2ltcG9ydCB7YmluZGluZ01vZGUgfSBmcm9tICdhdXJlbGlhLWJpbmRpbmcnO1xuLyoqIHdvcmthcm91bmQsIGZpeCBsaW5lIHdpdGggJCh0aGlzKS5jaGlsZHJlbignLm1zLUNvbnRleHR1YWxNZW51OmZpcnN0JykudG9nZ2xlQ2xhc3MoJ2lzLW9wZW4nKTsgdG8gJCh0aGlzKS5maW5kKCcubXMtQ29udGV4dHVhbE1lbnU6Zmlyc3QnKS50b2dnbGVDbGFzcygnaXMtb3BlbicpOyAqL1xuaW1wb3J0IFwiLi9KcXVlcnkuTmF2QmFyXCI7XG5cbkBpbmplY3QoRWxlbWVudClcbkBjdXN0b21FbGVtZW50KCdvZmZpY2UtbmF2YmFyJylcbmV4cG9ydCBjbGFzcyBPZmZpY2VOYXZCYXIge1xuICAgIEBiaW5kYWJsZSh7ZGVmYXVsdEJpbmRpbmdNb2RlOiAyIC8qIGJpbmRpbmdNb2RlLnR3b1dheSAqL30pIHNlYXJjaFRleHQ6IHN0cmluZyA9ICcnO1xuICAgIEBiaW5kYWJsZSBzZWFyY2hUZXh0UmlnaHQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIG5hdkJhclJvb3Q6IEVsZW1lbnQ7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50KSB7XG5cbiAgICB9XG5cblxuICAgIGNsaWNrSGFuZGxlcigpIHtcbiAgICAgICAgLy90aGlzLmVsZW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NsaWNrJykpO1xuICAgICAgICBjb25zb2xlLmxvZyhcImNsaWNrZWQgdG9nZ2xlclwiKTtcbiAgICB9XG4gICAgYXR0YWNoZWQoKSB7XG4gICAgICAgICQodGhpcy5uYXZCYXJSb290KS5OYXZCYXIoKTtcbiAgICB9XG5cbiAgICBzZWFyY2hCdXR0b25DbGljayhldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMpe1xuICAgICAgICAgICAgbGV0IGUgPSBuZXcgRXZlbnQoJ3NlYXJjaCcsIHsgYnViYmxlczogdHJ1ZSwgY2FuY2VsYWJsZTogdHJ1ZSB9KTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5kaXNwYXRjaEV2ZW50KGUpO1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgIH1cblxuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
