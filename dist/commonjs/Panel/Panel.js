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
var Panel = (function () {
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
exports.Panel = Panel;
(function (PanelSize) {
    PanelSize[PanelSize["small"] = 0] = "small";
    PanelSize[PanelSize["medium"] = 1] = "medium";
    PanelSize[PanelSize["large"] = 2] = "large";
    PanelSize[PanelSize["extraLarge"] = 3] = "extraLarge";
})(exports.PanelSize || (exports.PanelSize = {}));
var PanelSize = exports.PanelSize;
(function (PersonaShape) {
    PersonaShape[PersonaShape["square"] = 0] = "square";
    PersonaShape[PersonaShape["round"] = 1] = "round";
})(exports.PersonaShape || (exports.PersonaShape = {}));
var PersonaShape = exports.PersonaShape;
(function (PersonaPresence) {
    PersonaPresence[PersonaPresence["none"] = 0] = "none";
    PersonaPresence[PersonaPresence["available"] = 1] = "available";
    PersonaPresence[PersonaPresence["away"] = 2] = "away";
    PersonaPresence[PersonaPresence["blocked"] = 3] = "blocked";
    PersonaPresence[PersonaPresence["busy"] = 4] = "busy";
    PersonaPresence[PersonaPresence["dnd"] = 5] = "dnd";
    PersonaPresence[PersonaPresence["offline"] = 6] = "offline";
})(exports.PersonaPresence || (exports.PersonaPresence = {}));
var PersonaPresence = exports.PersonaPresence;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlBhbmVsL1BhbmVsLnRzIl0sIm5hbWVzIjpbIlBhbmVsIiwiUGFuZWwuY29uc3RydWN0b3IiLCJQYW5lbC5vcGVuUGFuZWwiLCJQYW5lbC5hdHRhY2hlZCIsIlBhbmVsLmNsb3NlSGFuZGxlciIsIlBhbmVsLm9wZW5DaGFuZ2VkIiwiUGFuZWwucHJlZml4ZWRFdmVudCIsIlBhbmVsU2l6ZSIsIlBlcnNvbmFTaGFwZSIsIlBlcnNvbmFQcmVzZW5jZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsa0NBQStDLG1CQUFtQixDQUFDLENBQUE7QUFFbkU7SUFBQUE7UUFHY0MsZUFBVUEsR0FBV0EsSUFBSUEsQ0FBQ0E7UUFDMUJBLFlBQU9BLEdBQVdBLElBQUlBLENBQUNBO1FBQ3ZCQSxTQUFJQSxHQUFXQSxTQUFTQSxDQUFDQSxTQUFTQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTtRQUMxQ0EsU0FBSUEsR0FBWUEsS0FBS0EsQ0FBQ0E7UUFJaENBLFlBQU9BLEdBQVlBLEtBQUtBLENBQUNBO1FBQ3pCQSxZQUFPQSxHQUFZQSxLQUFLQSxDQUFDQTtRQUN6QkEsV0FBTUEsR0FBWUEsS0FBS0EsQ0FBQ0E7SUE0QzVCQSxDQUFDQTtJQTFDR0QseUJBQVNBLEdBQVRBO1FBRUlFLElBQUlBLENBQUNBLE1BQU1BLEdBQUdBLElBQUlBLENBQUNBO1FBR25CQSxJQUFJQSxDQUFDQSxPQUFPQSxHQUFHQSxJQUFJQSxDQUFDQTtJQUN4QkEsQ0FBQ0E7SUFFREYsd0JBQVFBLEdBQVJBO1FBQUFHLGlCQWdCQ0E7UUFkR0EsS0FBS0EsQ0FBQ0EsYUFBYUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsVUFBVUEsRUFBRUEsY0FBY0EsRUFBRUEsVUFBQ0EsS0FBS0E7WUFDdkRBLEVBQUVBLENBQUNBLENBQUNBLEtBQUtBLENBQUNBLGFBQWFBLENBQUNBLE9BQU9BLENBQUNBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO2dCQUkxQ0EsS0FBSUEsQ0FB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OiJQYW5lbC9QYW5lbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3VzdG9tRWxlbWVudCwgYmluZGFibGUsIGluamVjdCB9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuXHJcbkBpbmplY3QoRWxlbWVudClcclxuQGN1c3RvbUVsZW1lbnQoJ29mZmljZS1wYW5lbCcpXHJcbmV4cG9ydCBjbGFzcyBQYW5lbCB7XHJcbiAgICBAYmluZGFibGUgaGVhZGVyVGV4dDogc3RyaW5nID0gbnVsbDtcclxuICAgIEBiaW5kYWJsZSB0b29sdGlwOiBzdHJpbmcgPSBudWxsO1xyXG4gICAgQGJpbmRhYmxlIHNpemU6IHN0cmluZyA9IFBhbmVsU2l6ZVtQYW5lbFNpemUuc21hbGxdO1xyXG4gICAgQGJpbmRhYmxlIG9wZW46IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICAkY2xvc2VPdmVybGF5OiBFbGVtZW50O1xyXG4gICAgJHBhbmVsTWFpbjogRWxlbWVudDtcclxuICAgIGNsb3Npbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIG9wZW5pbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIGlzT3BlbjogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIG9wZW5QYW5lbCgpIHtcclxuICAgICAgICAvLyBEaXNwbGF5IFBhbmVsIGZpcnN0LCB0byBhbGxvdyBhbmltYXRpb25zXHJcbiAgICAgICAgdGhpcy5pc09wZW4gPSB0cnVlOyAvLyRwYW5lbC5hZGRDbGFzcyhcImlzLW9wZW5cIik7XHJcblxyXG4gICAgICAgIC8vIEFkZCBhbmltYXRpb24gY2xhc3NcclxuICAgICAgICB0aGlzLm9wZW5pbmcgPSB0cnVlOyAvLyRwYW5lbC5hZGRDbGFzcyhcIm1zLVBhbmVsLWFuaW1hdGVJblwiKTtcclxuICAgIH1cclxuXHJcbiAgICBhdHRhY2hlZCgpIHtcclxuICAgICAgICAvL3RoaXMuZWxlbWVudC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2xpY2snKSk7XHJcbiAgICAgICAgUGFuZWwucHJlZml4ZWRFdmVudCh0aGlzLiRwYW5lbE1haW4sICdBbmltYXRpb25FbmQnLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgaWYgKGV2ZW50LmFuaW1hdGlvbk5hbWUuaW5kZXhPZignT3V0JykgPiAtMSkge1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIEhpZGUgYW5kIFByZXZlbnQgbXMtUGFuZWwtbWFpbiBmcm9tIGJlaW5nIGludGVyYWN0aXZlXHJcbiAgICAgICAgICAgICAgICAvLyRwYW5lbC5yZW1vdmVDbGFzcygnaXMtb3BlbicpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc09wZW4gPSBmYWxzZTsgXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gUmVtb3ZlIGFuaW1hdGluZyBjbGFzc2VzIGZvciB0aGUgbmV4dCB0aW1lIHdlIG9wZW4gcGFuZWxcclxuICAgICAgICAgICAgICAgIC8vJHBhbmVsLnJlbW92ZUNsYXNzKCdtcy1QYW5lbC1hbmltYXRlSW4gbXMtUGFuZWwtYW5pbWF0ZU91dCcpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9wZW5pbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMub3BlbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2VIYW5kbGVyKCkge1xyXG4gICAgICAgIHRoaXMuY2xvc2luZyA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBvcGVuQ2hhbmdlZChuZXdWYWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIGlmIChuZXdWYWx1ZSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMub3BlblBhbmVsKClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgcGZ4OiBzdHJpbmdbXSA9IFtcIndlYmtpdFwiLCBcIm1velwiLCBcIk1TXCIsIFwib1wiLCBcIlwiXTtcclxuICAgIC8vIFByZWZpeCBmdW5jdGlvblxyXG4gICAgc3RhdGljIHByZWZpeGVkRXZlbnQoZWxlbWVudDogRWxlbWVudCwgdHlwZTogc3RyaW5nLCBjYWxsYmFjazogKGV2ZW50OiBBbmltYXRpb25FdmVudCkgPT4gdm9pZCkge1xyXG4gICAgICAgIGZvciAodmFyIHAgPSAwOyBwIDwgdGhpcy5wZngubGVuZ3RoOyBwKyspIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLnBmeFtwXSkgdHlwZSA9IHR5cGUudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHRoaXMucGZ4W3BdICsgdHlwZSwgY2FsbGJhY2ssIGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFBhbmVsU2l6ZSB7XHJcbiAgICBzbWFsbCxcclxuICAgIG1lZGl1bSxcclxuICAgIGxhcmdlLFxyXG4gICAgZXh0cmFMYXJnZVxyXG59XHJcbmV4cG9ydCBlbnVtIFBlcnNvbmFTaGFwZSB7XHJcbiAgICBzcXVhcmUsXHJcbiAgICByb3VuZCxcclxufVxyXG5leHBvcnQgZW51bSBQZXJzb25hUHJlc2VuY2Uge1xyXG4gICAgbm9uZSxcclxuICAgIGF2YWlsYWJsZSxcclxuICAgIGF3YXksXHJcbiAgICBibG9ja2VkLFxyXG4gICAgYnVzeSxcclxuICAgIGRuZCxcclxuICAgIG9mZmxpbmUsXHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
