var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { customElement, bindable } from 'aurelia-framework';
export let OfficeList = class {
    constructor() {
        this.type = ListType[ListType.list];
    }
};
__decorate([
    bindable, 
    __metadata('design:type', String)
], OfficeList.prototype, "type", void 0);
OfficeList = __decorate([
    customElement('office-list'), 
    __metadata('design:paramtypes', [])
], OfficeList);
export var ListType;
(function (ListType) {
    ListType[ListType["list"] = 0] = "list";
    ListType[ListType["grid"] = 1] = "grid";
})(ListType || (ListType = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkxpc3QvTGlzdC50cyJdLCJuYW1lcyI6WyJPZmZpY2VMaXN0IiwiT2ZmaWNlTGlzdC5jb25zdHJ1Y3RvciIsIkxpc3RUeXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7T0FBTyxFQUFDLGFBQWEsRUFBRSxRQUFRLEVBQVMsTUFBTSxtQkFBbUI7QUFHakU7SUFBQUE7UUFFY0MsU0FBSUEsR0FBV0EsUUFBUUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7SUFDckRBLENBQUNBO0FBQURELENBQUNBO0FBREc7SUFBQyxRQUFROztHQUFDLDRCQUFJLFVBQW1DO0FBRnJEO0lBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQzs7ZUFHNUI7QUFFRCxXQUFZLFFBR1g7QUFIRCxXQUFZLFFBQVE7SUFDaEJFLHVDQUFJQSxDQUFBQTtJQUNKQSx1Q0FBSUEsQ0FBQUE7QUFDUkEsQ0FBQ0EsRUFIVyxRQUFRLEtBQVIsUUFBUSxRQUduQiIsImZpbGUiOiJMaXN0L0xpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2N1c3RvbUVsZW1lbnQsIGJpbmRhYmxlLCBpbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcblxuLy9AaW5qZWN0KEVsZW1lbnQpXG5AY3VzdG9tRWxlbWVudCgnb2ZmaWNlLWxpc3QnKVxuZXhwb3J0IGNsYXNzIE9mZmljZUxpc3Qge1xuICAgIEBiaW5kYWJsZSB0eXBlOiBzdHJpbmcgPSBMaXN0VHlwZVtMaXN0VHlwZS5saXN0XTtcbn1cblxuZXhwb3J0IGVudW0gTGlzdFR5cGUge1xuICAgIGxpc3QsXG4gICAgZ3JpZCAgICBcbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
