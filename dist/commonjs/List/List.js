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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkxpc3QvTGlzdC50cyJdLCJuYW1lcyI6WyJPZmZpY2VMaXN0IiwiT2ZmaWNlTGlzdC5jb25zdHJ1Y3RvciIsIkxpc3RUeXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxrQ0FBOEMsbUJBQW1CLENBQUMsQ0FBQTtBQUdsRTtJQUFBQTtRQUVjQyxTQUFJQSxHQUFXQSxRQUFRQSxDQUFDQSxRQUFRQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtJQUNyREEsQ0FBQ0E7SUFER0Q7UUFBQ0EsNEJBQVFBOztPQUFDQSw0QkFBSUEsVUFBbUNBO0lBRnJEQTtRQUFDQSxpQ0FBYUEsQ0FBQ0EsYUFBYUEsQ0FBQ0E7O21CQUc1QkE7SUFBREEsaUJBQUNBO0FBQURBLENBSEEsQUFHQ0EsSUFBQTtBQUZZLGtCQUFVLGFBRXRCLENBQUE7QUFFRCxXQUFZLFFBQVE7SUFDaEJFLHVDQUFJQSxDQUFBQTtJQUNKQSx1Q0FBSUEsQ0FBQUE7QUFDUkEsQ0FBQ0EsRUFIVyxnQkFBUSxLQUFSLGdCQUFRLFFBR25CO0FBSEQsSUFBWSxRQUFRLEdBQVIsZ0JBR1gsQ0FBQSIsImZpbGUiOiJMaXN0L0xpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2N1c3RvbUVsZW1lbnQsIGJpbmRhYmxlLCBpbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuXHJcbi8vQGluamVjdChFbGVtZW50KVxyXG5AY3VzdG9tRWxlbWVudCgnb2ZmaWNlLWxpc3QnKVxyXG5leHBvcnQgY2xhc3MgT2ZmaWNlTGlzdCB7XHJcbiAgICBAYmluZGFibGUgdHlwZTogc3RyaW5nID0gTGlzdFR5cGVbTGlzdFR5cGUubGlzdF07XHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIExpc3RUeXBlIHtcclxuICAgIGxpc3QsXHJcbiAgICBncmlkICAgIFxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
