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
    var Persona = (function () {
        function Persona() {
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
        Persona.prototype.sizeChanged = function (newValue) {
            this.showImage = PersonaSize[newValue] !== PersonaSize.tiny;
            this.showTitle = !(PersonaSize[newValue] === PersonaSize.tiny || PersonaSize[newValue] === PersonaSize.xs);
            this.showStatus = PersonaSize[newValue] === PersonaSize.lg || PersonaSize[newValue] === PersonaSize.xl;
            this.showDetail = PersonaSize[newValue] === PersonaSize.xl;
        };
        Persona.prototype.presenceChanged = function (newValue) {
            this.showPresence = PersonaPresence[newValue] !== PersonaPresence.none;
        };
        Persona.prototype.darkTextChanged = function (newValue) {
            this.darkTextCss = newValue ? "darkText" : "lightText";
        };
        Persona.prototype.selectableChanged = function (newValue) {
            this.selectableCss = newValue ? "selectable" : "non-selectable";
        };
        Persona.prototype.attached = function () {
            console.log("attached");
        };
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], Persona.prototype, "shape", void 0);
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], Persona.prototype, "bgIcon", void 0);
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], Persona.prototype, "presence", void 0);
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], Persona.prototype, "name", void 0);
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], Persona.prototype, "title", void 0);
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], Persona.prototype, "status", void 0);
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], Persona.prototype, "detail", void 0);
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], Persona.prototype, "image", void 0);
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], Persona.prototype, "tooltip", void 0);
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], Persona.prototype, "size", void 0);
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Boolean)
        ], Persona.prototype, "darkText", void 0);
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Boolean)
        ], Persona.prototype, "selectable", void 0);
        Persona = __decorate([
            aurelia_framework_1.inject(Element),
            aurelia_framework_1.customElement('office-persona'), 
            __metadata('design:paramtypes', [])
        ], Persona);
        return Persona;
    })();
    exports.Persona = Persona;
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
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlBlcnNvbmEvUGVyc29uYS50cyJdLCJuYW1lcyI6WyJQZXJzb25hIiwiUGVyc29uYS5jb25zdHJ1Y3RvciIsIlBlcnNvbmEuc2l6ZUNoYW5nZWQiLCJQZXJzb25hLnByZXNlbmNlQ2hhbmdlZCIsIlBlcnNvbmEuZGFya1RleHRDaGFuZ2VkIiwiUGVyc29uYS5zZWxlY3RhYmxlQ2hhbmdlZCIsIlBlcnNvbmEuYXR0YWNoZWQiLCJQZXJzb25hU2l6ZSIsIlBlcnNvbmFTaGFwZSIsIlBlcnNvbmFQcmVzZW5jZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUVBO1FBQUFBO1lBR2NDLFVBQUtBLEdBQVdBLFlBQVlBLENBQUNBLFlBQVlBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBO1lBQ2pEQSxXQUFNQSxHQUFVQSxRQUFRQSxDQUFDQTtZQUN6QkEsYUFBUUEsR0FBVUEsZUFBZUEsQ0FBQ0EsZUFBZUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7WUFDeERBLFNBQUlBLEdBQVVBLElBQUlBLENBQUNBO1lBQ25CQSxVQUFLQSxHQUFVQSxJQUFJQSxDQUFDQTtZQUNwQkEsV0FBTUEsR0FBVUEsSUFBSUEsQ0FBQ0E7WUFDckJBLFdBQU1BLEdBQVVBLElBQUlBLENBQUNBO1lBQ3JCQSxVQUFLQSxHQUFVQSxJQUFJQSxDQUFDQTtZQUNwQkEsWUFBT0EsR0FBVUEsSUFBSUEsQ0FBQ0E7WUFDdEJBLFNBQUlBLEdBQVVBLFdBQVdBLENBQUNBLFdBQVdBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO1lBTXJEQSxnQkFBV0EsR0FBUUEsV0FBV0EsQ0FBQUE7WUFDOUJBLGlCQUFZQSxHQUFXQSxLQUFLQSxDQUFDQTtZQUM3QkEsY0FBU0EsR0FBV0EsS0FBS0EsQ0FBQ0E7WUFDMUJBLGVBQVVBLEdBQVdBLEtBQUtBLENBQUNBO1lBQzNCQSxlQUFVQSxHQUFXQSxLQUFLQSxDQUFDQTtZQUMzQkEsY0FBU0EsR0FBV0EsS0FBS0EsQ0FBQ0E7WUFDMUJBLGtCQUFhQSxHQUFVQSxJQUFJ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Q0QsV0FBWSxZQUFZO1FBQ3BCQyxtREFBTUEsQ0FBQUE7UUFDTkEsaURBQUtBLENBQUFBO0lBQ1RBLENBQUNBLEVBSFcsb0JBQVksS0FBWixvQkFBWSxRQUd2QjtJQUhELElBQVksWUFBWSxHQUFaLG9CQUdYLENBQUE7SUFDRCxXQUFZLGVBQWU7UUFDdkJDLHFEQUFJQSxDQUFBQTtRQUNKQSwrREFBU0EsQ0FBQUE7UUFDVEEscURBQUlBLENBQUFBO1FBQ0pBLDJEQUFPQSxDQUFBQTtRQUNQQSxxREFBSUEsQ0FBQUE7UUFDSkEsbURBQUdBLENBQUFBO1FBQ0hBLDJEQUFPQSxDQUFBQTtJQUNYQSxDQUFDQSxFQVJXLHVCQUFlLEtBQWYsdUJBQWUsUUFRMUI7SUFSRCxJQUFZLGVBQWUsR0FBZix1QkFRWCxDQUFBIiwiZmlsZSI6IlBlcnNvbmEvUGVyc29uYS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3VzdG9tRWxlbWVudCwgYmluZGFibGUsIGluamVjdCB9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcblxuQGluamVjdChFbGVtZW50KVxuQGN1c3RvbUVsZW1lbnQoJ29mZmljZS1wZXJzb25hJylcbmV4cG9ydCBjbGFzcyBQZXJzb25hIHtcbiAgICBAYmluZGFibGUgc2hhcGU6IHN0cmluZyA9IFBlcnNvbmFTaGFwZVtQZXJzb25hU2hhcGUucm91bmRdO1xuICAgIEBiaW5kYWJsZSBiZ0ljb246c3RyaW5nID0gXCJwZXJzb25cIjtcbiAgICBAYmluZGFibGUgcHJlc2VuY2U6c3RyaW5nID0gUGVyc29uYVByZXNlbmNlW1BlcnNvbmFQcmVzZW5jZS5ub25lXTtcbiAgICBAYmluZGFibGUgbmFtZTpzdHJpbmcgPSBudWxsO1xuICAgIEBiaW5kYWJsZSB0aXRsZTpzdHJpbmcgPSBudWxsO1xuICAgIEBiaW5kYWJsZSBzdGF0dXM6c3RyaW5nID0gbnVsbDtcbiAgICBAYmluZGFibGUgZGV0YWlsOnN0cmluZyA9IG51bGw7XG4gICAgQGJpbmRhYmxlIGltYWdlOnN0cmluZyA9IG51bGw7XG4gICAgQGJpbmRhYmxlIHRvb2x0aXA6c3RyaW5nID0gbnVsbDtcbiAgICBAYmluZGFibGUgc2l6ZTpzdHJpbmcgPSBQZXJzb25hU2l6ZVtQZXJzb25hU2l6ZS5yZWddO1xuICAgIEBiaW5kYWJsZSBkYXJrVGV4dDpib29sZWFuOy8vID0gZmFsc2U7XG4gICAgQGJpbmRhYmxlIHNlbGVjdGFibGU6Ym9vbGVhbjsvLyA9IGZhbHNlO1xuICAgIFxuICAgIGVsZTpFbGVtZW50O1xuICAgIFxuICAgIGRhcmtUZXh0Q3NzOnN0cmluZz1cImxpZ2h0VGV4dFwiIC8vZGFya1RleHRcbiAgICBzaG93UHJlc2VuY2U6Ym9vbGVhbiA9IGZhbHNlO1xuICAgIHNob3dUaXRsZTpib29sZWFuID0gZmFsc2U7XG4gICAgc2hvd1N0YXR1czpib29sZWFuID0gZmFsc2U7XG4gICAgc2hvd0RldGFpbDpib29sZWFuID0gZmFsc2U7XG4gICAgc2hvd0ltYWdlOmJvb2xlYW4gPSBmYWxzZTtcbiAgICBzZWxlY3RhYmxlQ3NzOnN0cmluZyA9IG51bGw7XG4gICAgXG4gICAgLy8gY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OkVsZW1lbnQpe1xuICAgICAgICBcbiAgICAvLyB9XG4gICAgc2l6ZUNoYW5nZWQobmV3VmFsdWU6c3RyaW5nKXsgICAgICAgIFxuICAgICAgICB0aGlzLnNob3dJbWFnZSA9ICBQZXJzb25hU2l6ZVtuZXdWYWx1ZV0gIT09IFBlcnNvbmFTaXplLnRpbnk7XG4gICAgICAgIHRoaXMuc2hvd1RpdGxlID0gICEoUGVyc29uYVNpemVbbmV3VmFsdWVdID09PSBQZXJzb25hU2l6ZS50aW55IHx8IFBlcnNvbmFTaXplW25ld1ZhbHVlXSA9PT0gUGVyc29uYVNpemUueHMpO1xuICAgICAgICB0aGlzLnNob3dTdGF0dXMgPSAgUGVyc29uYVNpemVbbmV3VmFsdWVdID09PSBQZXJzb25hU2l6ZS5sZyB8fCBQZXJzb25hU2l6ZVtuZXdWYWx1ZV0gPT09IFBlcnNvbmFTaXplLnhsO1xuICAgICAgICB0aGlzLnNob3dEZXRhaWwgPSBQZXJzb25hU2l6ZVtuZXdWYWx1ZV0gPT09IFBlcnNvbmFTaXplLnhsO1xuICAgIH1cbiAgICBwcmVzZW5jZUNoYW5nZWQobmV3VmFsdWU6c3RyaW5nKXtcbiAgICAgICAgdGhpcy5zaG93UHJlc2VuY2UgPSBQZXJzb25hUHJlc2VuY2VbbmV3VmFsdWVdICE9PSBQZXJzb25hUHJlc2VuY2Uubm9uZTsvLyB8fCBQZXJzb25hUHJlc2VuY2VbbmV3VmFsdWVdICE9PSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGRhcmtUZXh0Q2hhbmdlZChuZXdWYWx1ZTpib29sZWFuKXtcbiAgICAgICAgdGhpcy5kYXJrVGV4dENzcyA9IG5ld1ZhbHVlP1wiZGFya1RleHRcIjpcImxpZ2h0VGV4dFwiO1xuICAgIH1cbiAgICBzZWxlY3RhYmxlQ2hhbmdlZChuZXdWYWx1ZTpib29sZWFuKXtcbiAgICAgICAgdGhpcy5zZWxlY3RhYmxlQ3NzID0gbmV3VmFsdWU/XCJzZWxlY3RhYmxlXCI6XCJub24tc2VsZWN0YWJsZVwiO1xuICAgIH1cbiAgICBcbiAgICBhdHRhY2hlZCgpe1xuICAgICAgICAvL3RoaXMuZWxlbWVudC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2xpY2snKSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiYXR0YWNoZWRcIik7XG4gICAgfVxufVxuXG5leHBvcnQgZW51bSBQZXJzb25hU2l6ZSB7XG4gICAgdGlueSxcbiAgICB4cyxcbiAgICBzbSxcbiAgICByZWcsXG4gICAgbGcsXG4gICAgeGwsICAgIFxufVxuZXhwb3J0IGVudW0gUGVyc29uYVNoYXBlIHtcbiAgICBzcXVhcmUsXG4gICAgcm91bmQsICAgICAgIFxufVxuZXhwb3J0IGVudW0gUGVyc29uYVByZXNlbmNlIHtcbiAgICBub25lLFxuICAgIGF2YWlsYWJsZSxcbiAgICBhd2F5LFxuICAgIGJsb2NrZWQsXG4gICAgYnVzeSxcbiAgICBkbmQsXG4gICAgb2ZmbGluZSwgICAgXG59XG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
