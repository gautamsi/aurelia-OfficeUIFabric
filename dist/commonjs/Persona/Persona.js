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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlBlcnNvbmEvUGVyc29uYS50cyJdLCJuYW1lcyI6WyJQZXJzb25hIiwiUGVyc29uYS5jb25zdHJ1Y3RvciIsIlBlcnNvbmEuc2l6ZUNoYW5nZWQiLCJQZXJzb25hLnByZXNlbmNlQ2hhbmdlZCIsIlBlcnNvbmEuZGFya1RleHRDaGFuZ2VkIiwiUGVyc29uYS5zZWxlY3RhYmxlQ2hhbmdlZCIsIlBlcnNvbmEuYXR0YWNoZWQiLCJQZXJzb25hU2l6ZSIsIlBlcnNvbmFTaGFwZSIsIlBlcnNvbmFQcmVzZW5jZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsa0NBQStDLG1CQUFtQixDQUFDLENBQUE7QUFFbkU7SUFBQUE7UUFHY0MsVUFBS0EsR0FBV0EsWUFBWUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7UUFDakRBLFdBQU1BLEdBQVVBLFFBQVFBLENBQUNBO1FBQ3pCQSxhQUFRQSxHQUFVQSxlQUFlQSxDQUFDQSxlQUFlQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtRQUN4REEsU0FBSUEsR0FBVUEsSUFBSUEsQ0FBQ0E7UUFDbkJBLFVBQUtBLEdBQVVBLElBQUlBLENBQUNBO1FBQ3BCQSxXQUFNQSxHQUFVQSxJQUFJQSxDQUFDQTtRQUNyQkEsV0FBTUEsR0FBVUEsSUFBSUEsQ0FBQ0E7UUFDckJBLFVBQUtBLEdBQVVBLElBQUlBLENBQUNBO1FBQ3BCQSxZQUFPQSxHQUFVQSxJQUFJQSxDQUFDQTtRQUN0QkEsU0FBSUEsR0FBVUEsV0FBV0EsQ0FBQ0EsV0FBV0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7UUFNckRBLGdCQUFXQSxHQUFRQSxXQUFXQSxDQUFBQTtRQUM5QkEsaUJBQVlBLEdBQVdBLEtBQUtBLENBQUNBO1FBQzdCQSxjQUFTQSxHQUFXQSxLQUFLQSxDQUFDQTtRQUMxQkEsZUFBVUEsR0FBV0EsS0FBS0EsQ0FBQ0E7UUFDM0JBLGVBQVVBLEdBQVdBLEtBQUtBLENBQUNBO1FBQzNCQSxjQUFTQSxHQUFXQSxLQUFLQSxD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LElBQVksV0FBVyxHQUFYLG1CQU9YLENBQUE7QUFDRCxXQUFZLFlBQVk7SUFDcEJDLG1EQUFNQSxDQUFBQTtJQUNOQSxpREFBS0EsQ0FBQUE7QUFDVEEsQ0FBQ0EsRUFIVyxvQkFBWSxLQUFaLG9CQUFZLFFBR3ZCO0FBSEQsSUFBWSxZQUFZLEdBQVosb0JBR1gsQ0FBQTtBQUNELFdBQVksZUFBZTtJQUN2QkMscURBQUlBLENBQUFBO0lBQ0pBLCtEQUFTQSxDQUFBQTtJQUNUQSxxREFBSUEsQ0FBQUE7SUFDSkEsMkRBQU9BLENBQUFBO0lBQ1BBLHFEQUFJQSxDQUFBQTtJQUNKQSxtREFBR0EsQ0FBQUE7SUFDSEEsMkRBQU9BLENBQUFBO0FBQ1hBLENBQUNBLEVBUlcsdUJBQWUsS0FBZix1QkFBZSxRQVExQjtBQVJELElBQVksZUFBZSxHQUFmLHVCQVFYLENBQUEiLCJmaWxlIjoiUGVyc29uYS9QZXJzb25hLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjdXN0b21FbGVtZW50LCBiaW5kYWJsZSwgaW5qZWN0IH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5AaW5qZWN0KEVsZW1lbnQpXG5AY3VzdG9tRWxlbWVudCgnb2ZmaWNlLXBlcnNvbmEnKVxuZXhwb3J0IGNsYXNzIFBlcnNvbmEge1xuICAgIEBiaW5kYWJsZSBzaGFwZTogc3RyaW5nID0gUGVyc29uYVNoYXBlW1BlcnNvbmFTaGFwZS5yb3VuZF07XG4gICAgQGJpbmRhYmxlIGJnSWNvbjpzdHJpbmcgPSBcInBlcnNvblwiO1xuICAgIEBiaW5kYWJsZSBwcmVzZW5jZTpzdHJpbmcgPSBQZXJzb25hUHJlc2VuY2VbUGVyc29uYVByZXNlbmNlLm5vbmVdO1xuICAgIEBiaW5kYWJsZSBuYW1lOnN0cmluZyA9IG51bGw7XG4gICAgQGJpbmRhYmxlIHRpdGxlOnN0cmluZyA9IG51bGw7XG4gICAgQGJpbmRhYmxlIHN0YXR1czpzdHJpbmcgPSBudWxsO1xuICAgIEBiaW5kYWJsZSBkZXRhaWw6c3RyaW5nID0gbnVsbDtcbiAgICBAYmluZGFibGUgaW1hZ2U6c3RyaW5nID0gbnVsbDtcbiAgICBAYmluZGFibGUgdG9vbHRpcDpzdHJpbmcgPSBudWxsO1xuICAgIEBiaW5kYWJsZSBzaXplOnN0cmluZyA9IFBlcnNvbmFTaXplW1BlcnNvbmFTaXplLnJlZ107XG4gICAgQGJpbmRhYmxlIGRhcmtUZXh0OmJvb2xlYW47Ly8gPSBmYWxzZTtcbiAgICBAYmluZGFibGUgc2VsZWN0YWJsZTpib29sZWFuOy8vID0gZmFsc2U7XG4gICAgXG4gICAgZWxlOkVsZW1lbnQ7XG4gICAgXG4gICAgZGFya1RleHRDc3M6c3RyaW5nPVwibGlnaHRUZXh0XCIgLy9kYXJrVGV4dFxuICAgIHNob3dQcmVzZW5jZTpib29sZWFuID0gZmFsc2U7XG4gICAgc2hvd1RpdGxlOmJvb2xlYW4gPSBmYWxzZTtcbiAgICBzaG93U3RhdHVzOmJvb2xlYW4gPSBmYWxzZTtcbiAgICBzaG93RGV0YWlsOmJvb2xlYW4gPSBmYWxzZTtcbiAgICBzaG93SW1hZ2U6Ym9vbGVhbiA9IGZhbHNlO1xuICAgIHNlbGVjdGFibGVDc3M6c3RyaW5nID0gbnVsbDtcbiAgICBcbiAgICAvLyBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6RWxlbWVudCl7XG4gICAgICAgIFxuICAgIC8vIH1cbiAgICBzaXplQ2hhbmdlZChuZXdWYWx1ZTpzdHJpbmcpeyAgICAgICAgXG4gICAgICAgIHRoaXMuc2hvd0ltYWdlID0gIFBlcnNvbmFTaXplW25ld1ZhbHVlXSAhPT0gUGVyc29uYVNpemUudGlueTtcbiAgICAgICAgdGhpcy5zaG93VGl0bGUgPSAgIShQZXJzb25hU2l6ZVtuZXdWYWx1ZV0gPT09IFBlcnNvbmFTaXplLnRpbnkgfHwgUGVyc29uYVNpemVbbmV3VmFsdWVdID09PSBQZXJzb25hU2l6ZS54cyk7XG4gICAgICAgIHRoaXMuc2hvd1N0YXR1cyA9ICBQZXJzb25hU2l6ZVtuZXdWYWx1ZV0gPT09IFBlcnNvbmFTaXplLmxnIHx8IFBlcnNvbmFTaXplW25ld1ZhbHVlXSA9PT0gUGVyc29uYVNpemUueGw7XG4gICAgICAgIHRoaXMuc2hvd0RldGFpbCA9IFBlcnNvbmFTaXplW25ld1ZhbHVlXSA9PT0gUGVyc29uYVNpemUueGw7XG4gICAgfVxuICAgIHByZXNlbmNlQ2hhbmdlZChuZXdWYWx1ZTpzdHJpbmcpe1xuICAgICAgICB0aGlzLnNob3dQcmVzZW5jZSA9IFBlcnNvbmFQcmVzZW5jZVtuZXdWYWx1ZV0gIT09IFBlcnNvbmFQcmVzZW5jZS5ub25lOy8vIHx8IFBlcnNvbmFQcmVzZW5jZVtuZXdWYWx1ZV0gIT09IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZGFya1RleHRDaGFuZ2VkKG5ld1ZhbHVlOmJvb2xlYW4pe1xuICAgICAgICB0aGlzLmRhcmtUZXh0Q3NzID0gbmV3VmFsdWU/XCJkYXJrVGV4dFwiOlwibGlnaHRUZXh0XCI7XG4gICAgfVxuICAgIHNlbGVjdGFibGVDaGFuZ2VkKG5ld1ZhbHVlOmJvb2xlYW4pe1xuICAgICAgICB0aGlzLnNlbGVjdGFibGVDc3MgPSBuZXdWYWx1ZT9cInNlbGVjdGFibGVcIjpcIm5vbi1zZWxlY3RhYmxlXCI7XG4gICAgfVxuICAgIFxuICAgIGF0dGFjaGVkKCl7XG4gICAgICAgIC8vdGhpcy5lbGVtZW50LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdjbGljaycpKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJhdHRhY2hlZFwiKTtcbiAgICB9XG59XG5cbmV4cG9ydCBlbnVtIFBlcnNvbmFTaXplIHtcbiAgICB0aW55LFxuICAgIHhzLFxuICAgIHNtLFxuICAgIHJlZyxcbiAgICBsZyxcbiAgICB4bCwgICAgXG59XG5leHBvcnQgZW51bSBQZXJzb25hU2hhcGUge1xuICAgIHNxdWFyZSxcbiAgICByb3VuZCwgICAgICAgXG59XG5leHBvcnQgZW51bSBQZXJzb25hUHJlc2VuY2Uge1xuICAgIG5vbmUsXG4gICAgYXZhaWxhYmxlLFxuICAgIGF3YXksXG4gICAgYmxvY2tlZCxcbiAgICBidXN5LFxuICAgIGRuZCxcbiAgICBvZmZsaW5lLCAgICBcbn1cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
