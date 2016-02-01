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
    var OfPersona, PersonaSize, PersonaShape, PersonaPresence;
    return {
        setters:[
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            }],
        execute: function() {
            OfPersona = (function () {
                function OfPersona(element) {
                    this.element = element;
                    this.shape = PersonaShape[PersonaShape.round];
                    this.bgIcon = "person";
                    this.presence = PersonaPresence[PersonaPresence.none];
                    this.name = null;
                    this.title = null;
                    this.status = null;
                    this.detail = null;
                    this.image = null;
                    this.tooltip = null;
                    this.size = PersonaSize[PersonaSize.reg];
                    this.darkTextCss = "lightText";
                    this.showPresence = false;
                    this.showTitle = false;
                    this.showStatus = false;
                    this.showDetail = false;
                    this.showImage = false;
                    this.selectableCss = null;
                }
                OfPersona.prototype.sizeChanged = function (newValue) {
                    this.showImage = PersonaSize[newValue] !== PersonaSize.tiny;
                    this.showTitle = !(PersonaSize[newValue] === PersonaSize.tiny || PersonaSize[newValue] === PersonaSize.xs);
                    this.showStatus = PersonaSize[newValue] === PersonaSize.lg || PersonaSize[newValue] === PersonaSize.xl;
                    this.showDetail = PersonaSize[newValue] === PersonaSize.xl;
                };
                OfPersona.prototype.presenceChanged = function (newValue) {
                    this.showPresence = PersonaPresence[newValue] !== PersonaPresence.none;
                };
                OfPersona.prototype.darkTextChanged = function (newValue) {
                    this.darkTextCss = newValue ? "darkText" : "lightText";
                };
                OfPersona.prototype.selectableChanged = function (newValue) {
                    this.selectableCss = newValue ? "selectable" : "non-selectable";
                };
                OfPersona.prototype.clickHandler = function () {
                    console.log("event dispatched");
                };
                __decorate([
                    aurelia_framework_1.bindable, 
                    __metadata('design:type', String)
                ], OfPersona.prototype, "shape", void 0);
                __decorate([
                    aurelia_framework_1.bindable, 
                    __metadata('design:type', String)
                ], OfPersona.prototype, "bgIcon", void 0);
                __decorate([
                    aurelia_framework_1.bindable, 
                    __metadata('design:type', String)
                ], OfPersona.prototype, "presence", void 0);
                __decorate([
                    aurelia_framework_1.bindable, 
                    __metadata('design:type', String)
                ], OfPersona.prototype, "name", void 0);
                __decorate([
                    aurelia_framework_1.bindable, 
                    __metadata('design:type', String)
                ], OfPersona.prototype, "title", void 0);
                __decorate([
                    aurelia_framework_1.bindable, 
                    __metadata('design:type', String)
                ], OfPersona.prototype, "status", void 0);
                __decorate([
                    aurelia_framework_1.bindable, 
                    __metadata('design:type', String)
                ], OfPersona.prototype, "detail", void 0);
                __decorate([
                    aurelia_framework_1.bindable, 
                    __metadata('design:type', String)
                ], OfPersona.prototype, "image", void 0);
                __decorate([
                    aurelia_framework_1.bindable, 
                    __metadata('design:type', String)
                ], OfPersona.prototype, "tooltip", void 0);
                __decorate([
                    aurelia_framework_1.bindable, 
                    __metadata('design:type', String)
                ], OfPersona.prototype, "size", void 0);
                __decorate([
                    aurelia_framework_1.bindable, 
                    __metadata('design:type', Boolean)
                ], OfPersona.prototype, "darkText", void 0);
                __decorate([
                    aurelia_framework_1.bindable, 
                    __metadata('design:type', Boolean)
                ], OfPersona.prototype, "selectable", void 0);
                OfPersona = __decorate([
                    aurelia_framework_1.inject(Element),
                    aurelia_framework_1.customElement('of-persona'), 
                    __metadata('design:paramtypes', [Element])
                ], OfPersona);
                return OfPersona;
            })();
            exports_1("OfPersona", OfPersona);
            (function (PersonaSize) {
                PersonaSize[PersonaSize["tiny"] = 0] = "tiny";
                PersonaSize[PersonaSize["xs"] = 1] = "xs";
                PersonaSize[PersonaSize["sm"] = 2] = "sm";
                PersonaSize[PersonaSize["reg"] = 3] = "reg";
                PersonaSize[PersonaSize["lg"] = 4] = "lg";
                PersonaSize[PersonaSize["xl"] = 5] = "xl";
            })(PersonaSize || (PersonaSize = {}));
            exports_1("PersonaSize", PersonaSize);
            (function (PersonaShape) {
                PersonaShape[PersonaShape["square"] = 0] = "square";
                PersonaShape[PersonaShape["round"] = 1] = "round";
            })(PersonaShape || (PersonaShape = {}));
            exports_1("PersonaShape", PersonaShape);
            (function (PersonaPresence) {
                PersonaPresence[PersonaPresence["none"] = 0] = "none";
                PersonaPresence[PersonaPresence["available"] = 1] = "available";
                PersonaPresence[PersonaPresence["away"] = 2] = "away";
                PersonaPresence[PersonaPresence["blocked"] = 3] = "blocked";
                PersonaPresence[PersonaPresence["busy"] = 4] = "busy";
                PersonaPresence[PersonaPresence["dnd"] = 5] = "dnd";
                PersonaPresence[PersonaPresence["offline"] = 6] = "offline";
            })(PersonaPresence || (PersonaPresence = {}));
            exports_1("PersonaPresence", PersonaPresence);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlcnNvbmEvb2YtcGVyc29uYS50cyJdLCJuYW1lcyI6WyJPZlBlcnNvbmEiLCJPZlBlcnNvbmEuY29uc3RydWN0b3IiLCJPZlBlcnNvbmEuc2l6ZUNoYW5nZWQiLCJPZlBlcnNvbmEucHJlc2VuY2VDaGFuZ2VkIiwiT2ZQZXJzb25hLmRhcmtUZXh0Q2hhbmdlZCIsIk9mUGVyc29uYS5zZWxlY3RhYmxlQ2hhbmdlZCIsIk9mUGVyc29uYS5jbGlja0hhbmRsZXIiLCJQZXJzb25hU2l6ZSIsIlBlcnNvbmFTaGFwZSIsIlBlcnNvbmFQcmVzZW5jZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBRUE7Z0JBeUJJQSxtQkFBb0JBLE9BQWVBO29CQUFmQyxZQUFPQSxHQUFQQSxPQUFPQSxDQUFRQTtvQkF0QnpCQSxVQUFLQSxHQUFXQSxZQUFZQSxDQUFDQSxZQUFZQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTtvQkFDakRBLFdBQU1BLEdBQVVBLFFBQVFBLENBQUNBO29CQUN6QkEsYUFBUUEsR0FBVUEsZUFBZUEsQ0FBQ0EsZUFBZUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7b0JBQ3hEQSxTQUFJQSxHQUFVQSxJQUFJQSxDQUFDQTtvQkFDbkJBLFVBQUtBLEdBQVVBLElBQUlBLENBQUNBO29CQUNwQkEsV0FBTUEsR0FBVUEsSUFBSUEsQ0FBQ0E7b0JBQ3JCQSxXQUFNQSxHQUFVQSxJQUFJQSxDQUFDQTtvQkFDckJBLFVBQUtBLEdBQVVBLElBQUlBLENBQUNBO29CQUNwQkEsWUFBT0EsR0FBVUEsSUFBSUEsQ0FBQ0E7b0JBQ3RCQSxTQUFJQSxHQUFVQSxXQUFXQSxDQUFDQSxXQUFXQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTtvQkFLckRBLGdCQUFXQSxHQUFRQSxXQUFXQSxDQUFBQTtvQkFDOUJBLGlCQUFZQSxHQUFXQSxLQUFLQSxDQUFDQTtvQkFDN0JBLGNBQVNBLEdBQVdBLEtBQUtBLENBQUNBO29CQUMxQkEsZUFBVUEsR0FBV0EsS0FBS0Es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O2dCQUNGQSx5Q0FBRUEsQ0FBQUE7Z0JBQ0ZBLDJDQUFHQSxDQUFBQTtnQkFDSEEseUNBQUVBLENBQUFBO2dCQUNGQSx5Q0FBRUEsQ0FBQUE7WUFDTkEsQ0FBQ0EsRUFQVyxXQUFXLEtBQVgsV0FBVyxRQU90QjtrREFBQTtZQUNELFdBQVksWUFBWTtnQkFDcEJDLG1EQUFNQSxDQUFBQTtnQkFDTkEsaURBQUtBLENBQUFBO1lBQ1RBLENBQUNBLEVBSFcsWUFBWSxLQUFaLFlBQVksUUFHdkI7b0RBQUE7WUFDRCxXQUFZLGVBQWU7Z0JBQ3ZCQyxxREFBSUEsQ0FBQUE7Z0JBQ0pBLCtEQUFTQSxDQUFBQTtnQkFDVEEscURBQUlBLENBQUFBO2dCQUNKQSwyREFBT0EsQ0FBQUE7Z0JBQ1BBLHFEQUFJQSxDQUFBQTtnQkFDSkEsbURBQUdBLENBQUFBO2dCQUNIQSwyREFBT0EsQ0FBQUE7WUFDWEEsQ0FBQ0EsRUFSVyxlQUFlLEtBQWYsZUFBZSxRQVExQjswREFBQSIsImZpbGUiOiJwZXJzb25hL29mLXBlcnNvbmEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2N1c3RvbUVsZW1lbnQsIGJpbmRhYmxlLCBpbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcblxuQGluamVjdChFbGVtZW50KVxuQGN1c3RvbUVsZW1lbnQoJ29mLXBlcnNvbmEnKVxuZXhwb3J0IGNsYXNzIE9mUGVyc29uYSB7XG4gICAgQGJpbmRhYmxlIHNoYXBlOiBzdHJpbmcgPSBQZXJzb25hU2hhcGVbUGVyc29uYVNoYXBlLnJvdW5kXTtcbiAgICBAYmluZGFibGUgYmdJY29uOnN0cmluZyA9IFwicGVyc29uXCI7XG4gICAgQGJpbmRhYmxlIHByZXNlbmNlOnN0cmluZyA9IFBlcnNvbmFQcmVzZW5jZVtQZXJzb25hUHJlc2VuY2Uubm9uZV07XG4gICAgQGJpbmRhYmxlIG5hbWU6c3RyaW5nID0gbnVsbDtcbiAgICBAYmluZGFibGUgdGl0bGU6c3RyaW5nID0gbnVsbDtcbiAgICBAYmluZGFibGUgc3RhdHVzOnN0cmluZyA9IG51bGw7XG4gICAgQGJpbmRhYmxlIGRldGFpbDpzdHJpbmcgPSBudWxsO1xuICAgIEBiaW5kYWJsZSBpbWFnZTpzdHJpbmcgPSBudWxsO1xuICAgIEBiaW5kYWJsZSB0b29sdGlwOnN0cmluZyA9IG51bGw7XG4gICAgQGJpbmRhYmxlIHNpemU6c3RyaW5nID0gUGVyc29uYVNpemVbUGVyc29uYVNpemUucmVnXTtcbiAgICBAYmluZGFibGUgZGFya1RleHQ6Ym9vbGVhbjsvLyA9IGZhbHNlO1xuICAgIEBiaW5kYWJsZSBzZWxlY3RhYmxlOmJvb2xlYW47Ly8gPSBmYWxzZTtcbiAgICBcbiAgICBcbiAgICBkYXJrVGV4dENzczpzdHJpbmc9XCJsaWdodFRleHRcIiAvL2RhcmtUZXh0XG4gICAgc2hvd1ByZXNlbmNlOmJvb2xlYW4gPSBmYWxzZTtcbiAgICBzaG93VGl0bGU6Ym9vbGVhbiA9IGZhbHNlO1xuICAgIHNob3dTdGF0dXM6Ym9vbGVhbiA9IGZhbHNlO1xuICAgIHNob3dEZXRhaWw6Ym9vbGVhbiA9IGZhbHNlO1xuICAgIHNob3dJbWFnZTpib29sZWFuID0gZmFsc2U7XG4gICAgc2VsZWN0YWJsZUNzczpzdHJpbmcgPSBudWxsO1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDpFbGVtZW50KXtcbiAgICAgICAgXG4gICAgfVxuICAgIHNpemVDaGFuZ2VkKG5ld1ZhbHVlOnN0cmluZyl7ICAgICAgICBcbiAgICAgICAgdGhpcy5zaG93SW1hZ2UgPSAgUGVyc29uYVNpemVbbmV3VmFsdWVdICE9PSBQZXJzb25hU2l6ZS50aW55O1xuICAgICAgICB0aGlzLnNob3dUaXRsZSA9ICAhKFBlcnNvbmFTaXplW25ld1ZhbHVlXSA9PT0gUGVyc29uYVNpemUudGlueSB8fCBQZXJzb25hU2l6ZVtuZXdWYWx1ZV0gPT09IFBlcnNvbmFTaXplLnhzKTtcbiAgICAgICAgdGhpcy5zaG93U3RhdHVzID0gIFBlcnNvbmFTaXplW25ld1ZhbHVlXSA9PT0gUGVyc29uYVNpemUubGcgfHwgUGVyc29uYVNpemVbbmV3VmFsdWVdID09PSBQZXJzb25hU2l6ZS54bDtcbiAgICAgICAgdGhpcy5zaG93RGV0YWlsID0gUGVyc29uYVNpemVbbmV3VmFsdWVdID09PSBQZXJzb25hU2l6ZS54bDtcbiAgICB9XG4gICAgcHJlc2VuY2VDaGFuZ2VkKG5ld1ZhbHVlOnN0cmluZyl7XG4gICAgICAgIHRoaXMuc2hvd1ByZXNlbmNlID0gUGVyc29uYVByZXNlbmNlW25ld1ZhbHVlXSAhPT0gUGVyc29uYVByZXNlbmNlLm5vbmU7Ly8gfHwgUGVyc29uYVByZXNlbmNlW25ld1ZhbHVlXSAhPT0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBkYXJrVGV4dENoYW5nZWQobmV3VmFsdWU6Ym9vbGVhbil7XG4gICAgICAgIHRoaXMuZGFya1RleHRDc3MgPSBuZXdWYWx1ZT9cImRhcmtUZXh0XCI6XCJsaWdodFRleHRcIjtcbiAgICB9XG4gICAgc2VsZWN0YWJsZUNoYW5nZWQobmV3VmFsdWU6Ym9vbGVhbil7XG4gICAgICAgIHRoaXMuc2VsZWN0YWJsZUNzcyA9IG5ld1ZhbHVlP1wic2VsZWN0YWJsZVwiOlwibm9uLXNlbGVjdGFibGVcIjtcbiAgICB9XG4gICAgXG4gICAgY2xpY2tIYW5kbGVyKCl7XG4gICAgICAgIC8vdGhpcy5lbGVtZW50LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdjbGljaycpKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJldmVudCBkaXNwYXRjaGVkXCIpO1xuICAgIH1cbn1cblxuZXhwb3J0IGVudW0gUGVyc29uYVNpemUge1xuICAgIHRpbnksXG4gICAgeHMsXG4gICAgc20sXG4gICAgcmVnLFxuICAgIGxnLFxuICAgIHhsLCAgICBcbn1cbmV4cG9ydCBlbnVtIFBlcnNvbmFTaGFwZSB7XG4gICAgc3F1YXJlLFxuICAgIHJvdW5kLCAgICAgICBcbn1cbmV4cG9ydCBlbnVtIFBlcnNvbmFQcmVzZW5jZSB7XG4gICAgbm9uZSxcbiAgICBhdmFpbGFibGUsXG4gICAgYXdheSxcbiAgICBibG9ja2VkLFxuICAgIGJ1c3ksXG4gICAgZG5kLFxuICAgIG9mZmxpbmUsICAgIFxufVxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
