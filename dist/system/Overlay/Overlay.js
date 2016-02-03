System.register(['aurelia-framework'], function(exports_1) {
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
    var Overlay, OverlayType;
    return {
        setters:[
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            }],
        execute: function() {
            Overlay = (function () {
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
            exports_1("Overlay", Overlay);
            (function (OverlayType) {
                OverlayType[OverlayType["default"] = 0] = "default";
                OverlayType[OverlayType["none"] = 1] = "none";
                OverlayType[OverlayType["dark"] = 2] = "dark";
            })(OverlayType || (OverlayType = {}));
            exports_1("OverlayType", OverlayType);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk92ZXJsYXkvT3ZlcmxheS50cyJdLCJuYW1lcyI6WyJPdmVybGF5IiwiT3ZlcmxheS5jb25zdHJ1Y3RvciIsIk92ZXJsYXlUeXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFFQTtnQkFBQUE7b0JBRWNDLFNBQUlBLEdBQVVBLFdBQVdBLENBQUNBLFdBQVdBLENBQUNBLE9BQU9BLENBQUNBLENBQUNBO2dCQUM3REEsQ0FBQ0E7Z0JBREdEO29CQUFDQSw0QkFBUUE7O21CQUFDQSx5QkFBSUEsVUFBMkNBO2dCQUY3REE7b0JBQUNBLGlDQUFhQSxDQUFDQSxnQkFBZ0JBLENBQUNBOzs0QkFHL0JBO2dCQUFEQSxjQUFDQTtZQUFEQSxDQUhBLEFBR0NBLElBQUE7WUFIRCw2QkFHQyxDQUFBO1lBRUQsV0FBWSxXQUFXO2dCQUNuQkUsbURBQU9BLENBQUFBO2dCQUNQQSw2Q0FBSUEsQ0FBQUE7Z0JBQ0pBLDZDQUFJQSxDQUFBQTtZQUNSQSxDQUFDQSxFQUpXLFdBQVcsS0FBWCxXQUFXLFFBSXRCO2tEQUFBIiwiZmlsZSI6Ik92ZXJsYXkvT3ZlcmxheS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3VzdG9tRWxlbWVudCwgYmluZGFibGV9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcblxuQGN1c3RvbUVsZW1lbnQoJ29mZmljZS1vdmVybGF5JylcbmV4cG9ydCBjbGFzcyBPdmVybGF5IHtcbiAgICBAYmluZGFibGUgdHlwZTpzdHJpbmcgPSBPdmVybGF5VHlwZVtPdmVybGF5VHlwZS5kZWZhdWx0XTtcbn1cblxuZXhwb3J0IGVudW0gT3ZlcmxheVR5cGUge1xuICAgIGRlZmF1bHQsXG4gICAgbm9uZSxcbiAgICBkYXJrLCAgICBcbn1cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
