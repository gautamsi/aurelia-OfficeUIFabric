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
    var Overlay = (function () {
        function Overlay() {
            this.type = OverlayType[OverlayType.default];
        }
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], Overlay.prototype, "type", void 0);
        Overlay = __decorate([
            aurelia_framework_1.customElement('office-overlay'), 
            __metadata('design:paramtypes', [])
        ], Overlay);
        return Overlay;
    })();
    exports.Overlay = Overlay;
    (function (OverlayType) {
        OverlayType[OverlayType["default"] = 0] = "default";
        OverlayType[OverlayType["none"] = 1] = "none";
        OverlayType[OverlayType["dark"] = 2] = "dark";
    })(exports.OverlayType || (exports.OverlayType = {}));
    var OverlayType = exports.OverlayType;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk92ZXJsYXkvT3ZlcmxheS50cyJdLCJuYW1lcyI6WyJPdmVybGF5IiwiT3ZlcmxheS5jb25zdHJ1Y3RvciIsIk92ZXJsYXlUeXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBRUE7UUFBQUE7WUFFY0MsU0FBSUEsR0FBVUEsV0FBV0EsQ0FBQ0EsV0FBV0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0E7UUFDN0RBLENBQUNBO1FBREdEO1lBQUNBLDRCQUFRQTs7V0FBQ0EseUJBQUlBLFVBQTJDQTtRQUY3REE7WUFBQ0EsaUNBQWFBLENBQUNBLGdCQUFnQkEsQ0FBQ0E7O29CQUcvQkE7UUFBREEsY0FBQ0E7SUFBREEsQ0FIQSxBQUdDQSxJQUFBO0lBRlksZUFBTyxVQUVuQixDQUFBO0lBRUQsV0FBWSxXQUFXO1FBQ25CRSxtREFBT0EsQ0FBQUE7UUFDUEEsNkNBQUlBLENBQUFBO1FBQ0pBLDZDQUFJQSxDQUFBQTtJQUNSQSxDQUFDQSxFQUpXLG1CQUFXLEtBQVgsbUJBQVcsUUFJdEI7SUFKRCxJQUFZLFdBQVcsR0FBWCxtQkFJWCxDQUFBIiwiZmlsZSI6Ik92ZXJsYXkvT3ZlcmxheS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3VzdG9tRWxlbWVudCwgYmluZGFibGV9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcblxuQGN1c3RvbUVsZW1lbnQoJ29mZmljZS1vdmVybGF5JylcbmV4cG9ydCBjbGFzcyBPdmVybGF5IHtcbiAgICBAYmluZGFibGUgdHlwZTpzdHJpbmcgPSBPdmVybGF5VHlwZVtPdmVybGF5VHlwZS5kZWZhdWx0XTtcbn1cblxuZXhwb3J0IGVudW0gT3ZlcmxheVR5cGUge1xuICAgIGRlZmF1bHQsXG4gICAgbm9uZSxcbiAgICBkYXJrLCAgICBcbn1cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
