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
var OfPersona = (function () {
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
exports.OfPersona = OfPersona;
(function (PersonaSize) {
    PersonaSize[PersonaSize["tiny"] = 0] = "tiny";
    PersonaSize[PersonaSize["xs"] = 1] = "xs";
    PersonaSize[PersonaSize["sm"] = 2] = "sm";
    PersonaSize[PersonaSize["reg"] = 3] = "reg";
    PersonaSize[PersonaSize["lg"] = 4] = "lg";
    PersonaSize[PersonaSize["xl"] = 5] = "xl";
})(exports.PersonaSize || (exports.PersonaSize = {}));
var PersonaSize = exports.PersonaSize;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlcnNvbmEvb2YtcGVyc29uYS50cyJdLCJuYW1lcyI6WyJPZlBlcnNvbmEiLCJPZlBlcnNvbmEuY29uc3RydWN0b3IiLCJPZlBlcnNvbmEuc2l6ZUNoYW5nZWQiLCJPZlBlcnNvbmEucHJlc2VuY2VDaGFuZ2VkIiwiT2ZQZXJzb25hLmRhcmtUZXh0Q2hhbmdlZCIsIk9mUGVyc29uYS5zZWxlY3RhYmxlQ2hhbmdlZCIsIk9mUGVyc29uYS5jbGlja0hhbmRsZXIiLCJQZXJzb25hU2l6ZSIsIlBlcnNvbmFTaGFwZSIsIlBlcnNvbmFQcmVzZW5jZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsa0NBQThDLG1CQUFtQixDQUFDLENBQUE7QUFFbEU7SUF5QklBLG1CQUFvQkEsT0FBZUE7UUFBZkMsWUFBT0EsR0FBUEEsT0FBT0EsQ0FBUUE7UUF0QnpCQSxVQUFLQSxHQUFXQSxZQUFZQSxDQUFDQSxZQUFZQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTtRQUNqREEsV0FBTUEsR0FBVUEsUUFBUUEsQ0FBQ0E7UUFDekJBLGFBQVFBLEdBQVVBLGVBQWVBLENBQUNBLGVBQWVBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO1FBQ3hEQSxTQUFJQSxHQUFVQSxJQUFJQSxDQUFDQTtRQUNuQkEsVUFBS0EsR0FBVUEsSUFBSUEsQ0FBQ0E7UUFDcEJBLFdBQU1BLEdBQVVBLElBQUlBLENBQUNBO1FBQ3JCQSxXQUFNQSxHQUFVQSxJQUFJQSxDQUFDQTtRQUNyQkEsVUFBS0EsR0FBVUEsSUFBSUEsQ0FBQ0E7UUFDcEJBLFlBQU9BLEdBQVVBLElBQUlBLENBQUNBO1FBQ3RCQSxTQUFJQSxHQUFVQSxXQUFXQSxDQUFDQSxXQUFXQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTtRQUtyREEsZ0JBQVdBLEdBQVFBLFdBQVdBLENBQUFBO1FBQzlCQSxpQkFBWUEsR0FBV0EsS0FBS0EsQ0FBQ0E7UUFDN0JBLGNBQVNBLEdBQVdBLEtBQUtBLENBQUNBO1FBQzFCQSxlQUFVQSxHQUFXQSxL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QUFBQTtJQUNGQSx5Q0FBRUEsQ0FBQUE7QUFDTkEsQ0FBQ0EsRUFQVyxtQkFBVyxLQUFYLG1CQUFXLFFBT3RCO0FBUEQsSUFBWSxXQUFXLEdBQVgsbUJBT1gsQ0FBQTtBQUNELFdBQVksWUFBWTtJQUNwQkMsbURBQU1BLENBQUFBO0lBQ05BLGlEQUFLQSxDQUFBQTtBQUNUQSxDQUFDQSxFQUhXLG9CQUFZLEtBQVosb0JBQVksUUFHdkI7QUFIRCxJQUFZLFlBQVksR0FBWixvQkFHWCxDQUFBO0FBQ0QsV0FBWSxlQUFlO0lBQ3ZCQyxxREFBSUEsQ0FBQUE7SUFDSkEsK0RBQVNBLENBQUFBO0lBQ1RBLHFEQUFJQSxDQUFBQTtJQUNKQSwyREFBT0EsQ0FBQUE7SUFDUEEscURBQUlBLENBQUFBO0lBQ0pBLG1EQUFHQSxDQUFBQTtJQUNIQSwyREFBT0EsQ0FBQUE7QUFDWEEsQ0FBQ0EsRUFSVyx1QkFBZSxLQUFmLHVCQUFlLFFBUTFCO0FBUkQsSUFBWSxlQUFlLEdBQWYsdUJBUVgsQ0FBQSIsImZpbGUiOiJwZXJzb25hL29mLXBlcnNvbmEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2N1c3RvbUVsZW1lbnQsIGJpbmRhYmxlLCBpbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcblxuQGluamVjdChFbGVtZW50KVxuQGN1c3RvbUVsZW1lbnQoJ29mLXBlcnNvbmEnKVxuZXhwb3J0IGNsYXNzIE9mUGVyc29uYSB7XG4gICAgQGJpbmRhYmxlIHNoYXBlOiBzdHJpbmcgPSBQZXJzb25hU2hhcGVbUGVyc29uYVNoYXBlLnJvdW5kXTtcbiAgICBAYmluZGFibGUgYmdJY29uOnN0cmluZyA9IFwicGVyc29uXCI7XG4gICAgQGJpbmRhYmxlIHByZXNlbmNlOnN0cmluZyA9IFBlcnNvbmFQcmVzZW5jZVtQZXJzb25hUHJlc2VuY2Uubm9uZV07XG4gICAgQGJpbmRhYmxlIG5hbWU6c3RyaW5nID0gbnVsbDtcbiAgICBAYmluZGFibGUgdGl0bGU6c3RyaW5nID0gbnVsbDtcbiAgICBAYmluZGFibGUgc3RhdHVzOnN0cmluZyA9IG51bGw7XG4gICAgQGJpbmRhYmxlIGRldGFpbDpzdHJpbmcgPSBudWxsO1xuICAgIEBiaW5kYWJsZSBpbWFnZTpzdHJpbmcgPSBudWxsO1xuICAgIEBiaW5kYWJsZSB0b29sdGlwOnN0cmluZyA9IG51bGw7XG4gICAgQGJpbmRhYmxlIHNpemU6c3RyaW5nID0gUGVyc29uYVNpemVbUGVyc29uYVNpemUucmVnXTtcbiAgICBAYmluZGFibGUgZGFya1RleHQ6Ym9vbGVhbjsvLyA9IGZhbHNlO1xuICAgIEBiaW5kYWJsZSBzZWxlY3RhYmxlOmJvb2xlYW47Ly8gPSBmYWxzZTtcbiAgICBcbiAgICBcbiAgICBkYXJrVGV4dENzczpzdHJpbmc9XCJsaWdodFRleHRcIiAvL2RhcmtUZXh0XG4gICAgc2hvd1ByZXNlbmNlOmJvb2xlYW4gPSBmYWxzZTtcbiAgICBzaG93VGl0bGU6Ym9vbGVhbiA9IGZhbHNlO1xuICAgIHNob3dTdGF0dXM6Ym9vbGVhbiA9IGZhbHNlO1xuICAgIHNob3dEZXRhaWw6Ym9vbGVhbiA9IGZhbHNlO1xuICAgIHNob3dJbWFnZTpib29sZWFuID0gZmFsc2U7XG4gICAgc2VsZWN0YWJsZUNzczpzdHJpbmcgPSBudWxsO1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDpFbGVtZW50KXtcbiAgICAgICAgXG4gICAgfVxuICAgIHNpemVDaGFuZ2VkKG5ld1ZhbHVlOnN0cmluZyl7ICAgICAgICBcbiAgICAgICAgdGhpcy5zaG93SW1hZ2UgPSAgUGVyc29uYVNpemVbbmV3VmFsdWVdICE9PSBQZXJzb25hU2l6ZS50aW55O1xuICAgICAgICB0aGlzLnNob3dUaXRsZSA9ICAhKFBlcnNvbmFTaXplW25ld1ZhbHVlXSA9PT0gUGVyc29uYVNpemUudGlueSB8fCBQZXJzb25hU2l6ZVtuZXdWYWx1ZV0gPT09IFBlcnNvbmFTaXplLnhzKTtcbiAgICAgICAgdGhpcy5zaG93U3RhdHVzID0gIFBlcnNvbmFTaXplW25ld1ZhbHVlXSA9PT0gUGVyc29uYVNpemUubGcgfHwgUGVyc29uYVNpemVbbmV3VmFsdWVdID09PSBQZXJzb25hU2l6ZS54bDtcbiAgICAgICAgdGhpcy5zaG93RGV0YWlsID0gUGVyc29uYVNpemVbbmV3VmFsdWVdID09PSBQZXJzb25hU2l6ZS54bDtcbiAgICB9XG4gICAgcHJlc2VuY2VDaGFuZ2VkKG5ld1ZhbHVlOnN0cmluZyl7XG4gICAgICAgIHRoaXMuc2hvd1ByZXNlbmNlID0gUGVyc29uYVByZXNlbmNlW25ld1ZhbHVlXSAhPT0gUGVyc29uYVByZXNlbmNlLm5vbmU7Ly8gfHwgUGVyc29uYVByZXNlbmNlW25ld1ZhbHVlXSAhPT0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBkYXJrVGV4dENoYW5nZWQobmV3VmFsdWU6Ym9vbGVhbil7XG4gICAgICAgIHRoaXMuZGFya1RleHRDc3MgPSBuZXdWYWx1ZT9cImRhcmtUZXh0XCI6XCJsaWdodFRleHRcIjtcbiAgICB9XG4gICAgc2VsZWN0YWJsZUNoYW5nZWQobmV3VmFsdWU6Ym9vbGVhbil7XG4gICAgICAgIHRoaXMuc2VsZWN0YWJsZUNzcyA9IG5ld1ZhbHVlP1wic2VsZWN0YWJsZVwiOlwibm9uLXNlbGVjdGFibGVcIjtcbiAgICB9XG4gICAgXG4gICAgY2xpY2tIYW5kbGVyKCl7XG4gICAgICAgIC8vdGhpcy5lbGVtZW50LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdjbGljaycpKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJldmVudCBkaXNwYXRjaGVkXCIpO1xuICAgIH1cbn1cblxuZXhwb3J0IGVudW0gUGVyc29uYVNpemUge1xuICAgIHRpbnksXG4gICAgeHMsXG4gICAgc20sXG4gICAgcmVnLFxuICAgIGxnLFxuICAgIHhsLCAgICBcbn1cbmV4cG9ydCBlbnVtIFBlcnNvbmFTaGFwZSB7XG4gICAgc3F1YXJlLFxuICAgIHJvdW5kLCAgICAgICBcbn1cbmV4cG9ydCBlbnVtIFBlcnNvbmFQcmVzZW5jZSB7XG4gICAgbm9uZSxcbiAgICBhdmFpbGFibGUsXG4gICAgYXdheSxcbiAgICBibG9ja2VkLFxuICAgIGJ1c3ksXG4gICAgZG5kLFxuICAgIG9mZmxpbmUsICAgIFxufVxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
