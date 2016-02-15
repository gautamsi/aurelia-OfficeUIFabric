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
    var OfficeList = (function () {
        function OfficeList() {
            this.type = ListType[ListType.list];
        }
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], OfficeList.prototype, "type", void 0);
        OfficeList = __decorate([
            aurelia_framework_1.customElement('office-list'), 
            __metadata('design:paramtypes', [])
        ], OfficeList);
        return OfficeList;
    })();
    exports.OfficeList = OfficeList;
    (function (ListType) {
        ListType[ListType["list"] = 0] = "list";
        ListType[ListType["grid"] = 1] = "grid";
    })(exports.ListType || (exports.ListType = {}));
    var ListType = exports.ListType;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkxpc3QvTGlzdC50cyJdLCJuYW1lcyI6WyJPZmZpY2VMaXN0IiwiT2ZmaWNlTGlzdC5jb25zdHJ1Y3RvciIsIkxpc3RUeXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBR0E7UUFBQUE7WUFFY0MsU0FBSUEsR0FBV0EsUUFBUUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7UUFDckRBLENBQUNBO1FBREdEO1lBQUNBLDRCQUFRQTs7V0FBQ0EsNEJBQUlBLFVBQW1DQTtRQUZyREE7WUFBQ0EsaUNBQWFBLENBQUNBLGFBQWFBLENBQUNBOzt1QkFHNUJBO1FBQURBLGlCQUFDQTtJQUFEQSxDQUhBLEFBR0NBLElBQUE7SUFGWSxrQkFBVSxhQUV0QixDQUFBO0lBRUQsV0FBWSxRQUFRO1FBQ2hCRSx1Q0FBSUEsQ0FBQUE7UUFDSkEsdUNBQUlBLENBQUFBO0lBQ1JBLENBQUNBLEVBSFcsZ0JBQVEsS0FBUixnQkFBUSxRQUduQjtJQUhELElBQVksUUFBUSxHQUFSLGdCQUdYLENBQUEiLCJmaWxlIjoiTGlzdC9MaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjdXN0b21FbGVtZW50LCBiaW5kYWJsZSwgaW5qZWN0fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcblxyXG4vL0BpbmplY3QoRWxlbWVudClcclxuQGN1c3RvbUVsZW1lbnQoJ29mZmljZS1saXN0JylcclxuZXhwb3J0IGNsYXNzIE9mZmljZUxpc3Qge1xyXG4gICAgQGJpbmRhYmxlIHR5cGU6IHN0cmluZyA9IExpc3RUeXBlW0xpc3RUeXBlLmxpc3RdO1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBMaXN0VHlwZSB7XHJcbiAgICBsaXN0LFxyXG4gICAgZ3JpZCAgICBcclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
