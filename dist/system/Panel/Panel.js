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
    var Panel, PanelSize, PersonaShape, PersonaPresence;
    return {
        setters:[
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            }],
        execute: function() {
            Panel = (function () {
                function Panel() {
                    this.headerText = null;
                    this.tooltip = null;
                    this.size = PanelSize[PanelSize.small];
                    this.open = false;
                    this.closing = false;
                    this.opening = false;
                    this.isOpen = false;
                }
                Panel.prototype.openPanel = function () {
                    this.isOpen = true;
                    this.opening = true;
                };
                Panel.prototype.attached = function () {
                    var _this = this;
                    Panel.prefixedEvent(this.$panelMain, 'AnimationEnd', function (event) {
                        if (event.animationName.indexOf('Out') > -1) {
                            _this.isOpen = false;
                            _this.closing = false;
                            _this.opening = false;
                            _this.open = false;
                        }
                    });
                };
                Panel.prototype.closeHandler = function () {
                    this.closing = true;
                };
                Panel.prototype.openChanged = function (newValue) {
                    if (newValue == true) {
                        this.openPanel();
                    }
                };
                Panel.prefixedEvent = function (element, type, callback) {
                    for (var p = 0; p < this.pfx.length; p++) {
                        if (!this.pfx[p])
                            type = type.toLowerCase();
                        element.addEventListener(this.pfx[p] + type, callback, false);
                    }
                };
                Panel.pfx = ["webkit", "moz", "MS", "o", ""];
                __decorate([
                    aurelia_framework_1.bindable, 
                    __metadata('design:type', String)
                ], Panel.prototype, "headerText", void 0);
                __decorate([
                    aurelia_framework_1.bindable, 
                    __metadata('design:type', String)
                ], Panel.prototype, "tooltip", void 0);
                __decorate([
                    aurelia_framework_1.bindable, 
                    __metadata('design:type', String)
                ], Panel.prototype, "size", void 0);
                __decorate([
                    aurelia_framework_1.bindable, 
                    __metadata('design:type', Boolean)
                ], Panel.prototype, "open", void 0);
                Panel = __decorate([
                    aurelia_framework_1.inject(Element),
                    aurelia_framework_1.customElement('office-panel'), 
                    __metadata('design:paramtypes', [])
                ], Panel);
                return Panel;
            })();
            exports_1("Panel", Panel);
            (function (PanelSize) {
                PanelSize[PanelSize["small"] = 0] = "small";
                PanelSize[PanelSize["medium"] = 1] = "medium";
                PanelSize[PanelSize["large"] = 2] = "large";
                PanelSize[PanelSize["extraLarge"] = 3] = "extraLarge";
            })(PanelSize || (PanelSize = {}));
            exports_1("PanelSize", PanelSize);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlBhbmVsL1BhbmVsLnRzIl0sIm5hbWVzIjpbIlBhbmVsIiwiUGFuZWwuY29uc3RydWN0b3IiLCJQYW5lbC5vcGVuUGFuZWwiLCJQYW5lbC5hdHRhY2hlZCIsIlBhbmVsLmNsb3NlSGFuZGxlciIsIlBhbmVsLm9wZW5DaGFuZ2VkIiwiUGFuZWwucHJlZml4ZWRFdmVudCIsIlBhbmVsU2l6ZSIsIlBlcnNvbmFTaGFwZSIsIlBlcnNvbmFQcmVzZW5jZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBRUE7Z0JBQUFBO29CQUdjQyxlQUFVQSxHQUFXQSxJQUFJQSxDQUFDQTtvQkFDMUJBLFlBQU9BLEdBQVdBLElBQUlBLENBQUNBO29CQUN2QkEsU0FBSUEsR0FBV0EsU0FBU0EsQ0FBQ0EsU0FBU0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7b0JBQzFDQSxTQUFJQSxHQUFZQSxLQUFLQSxDQUFDQTtvQkFJaENBLFlBQU9BLEdBQVlBLEtBQUtBLENBQUNBO29CQUN6QkEsWUFBT0EsR0FBWUEsS0FBS0EsQ0FBQ0E7b0JBQ3pCQSxXQUFNQSxHQUFZQSxLQUFLQSxDQUFDQTtnQkE0QzVCQSxDQUFDQTtnQkExQ0dELHlCQUFTQSxHQUFUQTtvQkFFSUUsSUFBSUEsQ0FBQ0EsTUFBTUEsR0FBR0EsSUFBSUEsQ0FBQ0E7b0JBR25CQSxJQUFJQSxDQUFDQSxPQUFPQSxHQUFHQSxJQUFJQSxDQUFDQTtnQkFDeEJBLENBQUNBO2dCQUVERix3QkFBUUEsR0FBUkE7b0JBQUFHLGlCQWdCQ0E7b0JBZEdBLEtBQUtBLENBQUNBLGFBQWFBLENBQUNBLElBQUlBLENBQUNBLFVBQVVBLEVBQUVBLGNBQWNBLEVBQUVBLFVBQUNBLEtBQUtBO3dCQUN2REEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsYUFBYUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7NEJBSTFDQSxLQUFJQSxDQUFDQSxN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dCB7Y3VzdG9tRWxlbWVudCwgYmluZGFibGUsIGluamVjdCB9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuXHJcbkBpbmplY3QoRWxlbWVudClcclxuQGN1c3RvbUVsZW1lbnQoJ29mZmljZS1wYW5lbCcpXHJcbmV4cG9ydCBjbGFzcyBQYW5lbCB7XHJcbiAgICBAYmluZGFibGUgaGVhZGVyVGV4dDogc3RyaW5nID0gbnVsbDtcclxuICAgIEBiaW5kYWJsZSB0b29sdGlwOiBzdHJpbmcgPSBudWxsO1xyXG4gICAgQGJpbmRhYmxlIHNpemU6IHN0cmluZyA9IFBhbmVsU2l6ZVtQYW5lbFNpemUuc21hbGxdO1xyXG4gICAgQGJpbmRhYmxlIG9wZW46IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICAkY2xvc2VPdmVybGF5OiBFbGVtZW50O1xyXG4gICAgJHBhbmVsTWFpbjogRWxlbWVudDtcclxuICAgIGNsb3Npbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIG9wZW5pbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIGlzT3BlbjogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIG9wZW5QYW5lbCgpIHtcclxuICAgICAgICAvLyBEaXNwbGF5IFBhbmVsIGZpcnN0LCB0byBhbGxvdyBhbmltYXRpb25zXHJcbiAgICAgICAgdGhpcy5pc09wZW4gPSB0cnVlOyAvLyRwYW5lbC5hZGRDbGFzcyhcImlzLW9wZW5cIik7XHJcblxyXG4gICAgICAgIC8vIEFkZCBhbmltYXRpb24gY2xhc3NcclxuICAgICAgICB0aGlzLm9wZW5pbmcgPSB0cnVlOyAvLyRwYW5lbC5hZGRDbGFzcyhcIm1zLVBhbmVsLWFuaW1hdGVJblwiKTtcclxuICAgIH1cclxuXHJcbiAgICBhdHRhY2hlZCgpIHtcclxuICAgICAgICAvL3RoaXMuZWxlbWVudC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2xpY2snKSk7XHJcbiAgICAgICAgUGFuZWwucHJlZml4ZWRFdmVudCh0aGlzLiRwYW5lbE1haW4sICdBbmltYXRpb25FbmQnLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgaWYgKGV2ZW50LmFuaW1hdGlvbk5hbWUuaW5kZXhPZignT3V0JykgPiAtMSkge1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIEhpZGUgYW5kIFByZXZlbnQgbXMtUGFuZWwtbWFpbiBmcm9tIGJlaW5nIGludGVyYWN0aXZlXHJcbiAgICAgICAgICAgICAgICAvLyRwYW5lbC5yZW1vdmVDbGFzcygnaXMtb3BlbicpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc09wZW4gPSBmYWxzZTsgXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gUmVtb3ZlIGFuaW1hdGluZyBjbGFzc2VzIGZvciB0aGUgbmV4dCB0aW1lIHdlIG9wZW4gcGFuZWxcclxuICAgICAgICAgICAgICAgIC8vJHBhbmVsLnJlbW92ZUNsYXNzKCdtcy1QYW5lbC1hbmltYXRlSW4gbXMtUGFuZWwtYW5pbWF0ZU91dCcpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9wZW5pbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMub3BlbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2VIYW5kbGVyKCkge1xyXG4gICAgICAgIHRoaXMuY2xvc2luZyA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBvcGVuQ2hhbmdlZChuZXdWYWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIGlmIChuZXdWYWx1ZSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMub3BlblBhbmVsKClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgcGZ4OiBzdHJpbmdbXSA9IFtcIndlYmtpdFwiLCBcIm1velwiLCBcIk1TXCIsIFwib1wiLCBcIlwiXTtcclxuICAgIC8vIFByZWZpeCBmdW5jdGlvblxyXG4gICAgc3RhdGljIHByZWZpeGVkRXZlbnQoZWxlbWVudDogRWxlbWVudCwgdHlwZTogc3RyaW5nLCBjYWxsYmFjazogKGV2ZW50OiBBbmltYXRpb25FdmVudCkgPT4gdm9pZCkge1xyXG4gICAgICAgIGZvciAodmFyIHAgPSAwOyBwIDwgdGhpcy5wZngubGVuZ3RoOyBwKyspIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLnBmeFtwXSkgdHlwZSA9IHR5cGUudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHRoaXMucGZ4W3BdICsgdHlwZSwgY2FsbGJhY2ssIGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFBhbmVsU2l6ZSB7XHJcbiAgICBzbWFsbCxcclxuICAgIG1lZGl1bSxcclxuICAgIGxhcmdlLFxyXG4gICAgZXh0cmFMYXJnZVxyXG59XHJcbmV4cG9ydCBlbnVtIFBlcnNvbmFTaGFwZSB7XHJcbiAgICBzcXVhcmUsXHJcbiAgICByb3VuZCxcclxufVxyXG5leHBvcnQgZW51bSBQZXJzb25hUHJlc2VuY2Uge1xyXG4gICAgbm9uZSxcclxuICAgIGF2YWlsYWJsZSxcclxuICAgIGF3YXksXHJcbiAgICBibG9ja2VkLFxyXG4gICAgYnVzeSxcclxuICAgIGRuZCxcclxuICAgIG9mZmxpbmUsXHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
