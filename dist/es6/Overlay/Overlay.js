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
export let Overlay = class {
    constructor() {
        this.type = OverlayType[OverlayType.default];
    }
};
__decorate([
    bindable, 
    __metadata('design:type', String)
], Overlay.prototype, "type", void 0);
Overlay = __decorate([
    customElement('office-overlay'), 
    __metadata('design:paramtypes', [])
], Overlay);
export var OverlayType;
(function (OverlayType) {
    OverlayType[OverlayType["default"] = 0] = "default";
    OverlayType[OverlayType["none"] = 1] = "none";
    OverlayType[OverlayType["dark"] = 2] = "dark";
})(OverlayType || (OverlayType = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk92ZXJsYXkvT3ZlcmxheS50cyJdLCJuYW1lcyI6WyJPdmVybGF5IiwiT3ZlcmxheS5jb25zdHJ1Y3RvciIsIk92ZXJsYXlUeXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7T0FBTyxFQUFDLGFBQWEsRUFBRSxRQUFRLEVBQUMsTUFBTSxtQkFBbUI7QUFFekQ7SUFBQUE7UUFFY0MsU0FBSUEsR0FBVUEsV0FBV0EsQ0FBQ0EsV0FBV0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0E7SUFDN0RBLENBQUNBO0FBQURELENBQUNBO0FBREc7SUFBQyxRQUFROztHQUFDLHlCQUFJLFVBQTJDO0FBRjdEO0lBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDOztZQUcvQjtBQUVELFdBQVksV0FJWDtBQUpELFdBQVksV0FBVztJQUNuQkUsbURBQU9BLENBQUFBO0lBQ1BBLDZDQUFJQSxDQUFBQTtJQUNKQSw2Q0FBSUEsQ0FBQUE7QUFDUkEsQ0FBQ0EsRUFKVyxXQUFXLEtBQVgsV0FBVyxRQUl0QiIsImZpbGUiOiJPdmVybGF5L092ZXJsYXkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2N1c3RvbUVsZW1lbnQsIGJpbmRhYmxlfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5cbkBjdXN0b21FbGVtZW50KCdvZmZpY2Utb3ZlcmxheScpXG5leHBvcnQgY2xhc3MgT3ZlcmxheSB7XG4gICAgQGJpbmRhYmxlIHR5cGU6c3RyaW5nID0gT3ZlcmxheVR5cGVbT3ZlcmxheVR5cGUuZGVmYXVsdF07XG59XG5cbmV4cG9ydCBlbnVtIE92ZXJsYXlUeXBlIHtcbiAgICBkZWZhdWx0LFxuICAgIG5vbmUsXG4gICAgZGFyaywgICAgXG59XG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
