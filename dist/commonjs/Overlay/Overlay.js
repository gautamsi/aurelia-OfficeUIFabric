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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk92ZXJsYXkvT3ZlcmxheS50cyJdLCJuYW1lcyI6WyJPdmVybGF5IiwiT3ZlcmxheS5jb25zdHJ1Y3RvciIsIk92ZXJsYXlUeXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxrQ0FBc0MsbUJBQW1CLENBQUMsQ0FBQTtBQUUxRDtJQUFBQTtRQUVjQyxTQUFJQSxHQUFVQSxXQUFXQSxDQUFDQSxXQUFXQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQTtJQUM3REEsQ0FBQ0E7SUFER0Q7UUFBQ0EsNEJBQVFBOztPQUFDQSx5QkFBSUEsVUFBMkNBO0lBRjdEQTtRQUFDQSxpQ0FBYUEsQ0FBQ0EsZ0JBQWdCQSxDQUFDQTs7Z0JBRy9CQTtJQUFEQSxjQUFDQTtBQUFEQSxDQUhBLEFBR0NBLElBQUE7QUFGWSxlQUFPLFVBRW5CLENBQUE7QUFFRCxXQUFZLFdBQVc7SUFDbkJFLG1EQUFPQSxDQUFBQTtJQUNQQSw2Q0FBSUEsQ0FBQUE7SUFDSkEsNkNBQUlBLENBQUFBO0FBQ1JBLENBQUNBLEVBSlcsbUJBQVcsS0FBWCxtQkFBVyxRQUl0QjtBQUpELElBQVksV0FBVyxHQUFYLG1CQUlYLENBQUEiLCJmaWxlIjoiT3ZlcmxheS9PdmVybGF5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjdXN0b21FbGVtZW50LCBiaW5kYWJsZX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5cclxuQGN1c3RvbUVsZW1lbnQoJ29mZmljZS1vdmVybGF5JylcclxuZXhwb3J0IGNsYXNzIE92ZXJsYXkge1xyXG4gICAgQGJpbmRhYmxlIHR5cGU6c3RyaW5nID0gT3ZlcmxheVR5cGVbT3ZlcmxheVR5cGUuZGVmYXVsdF07XHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIE92ZXJsYXlUeXBlIHtcclxuICAgIGRlZmF1bHQsXHJcbiAgICBub25lLFxyXG4gICAgZGFyaywgICAgXHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
