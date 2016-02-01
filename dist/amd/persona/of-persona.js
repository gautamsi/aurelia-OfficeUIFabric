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
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlcnNvbmEvb2YtcGVyc29uYS50cyJdLCJuYW1lcyI6WyJPZlBlcnNvbmEiLCJPZlBlcnNvbmEuY29uc3RydWN0b3IiLCJPZlBlcnNvbmEuc2l6ZUNoYW5nZWQiLCJPZlBlcnNvbmEucHJlc2VuY2VDaGFuZ2VkIiwiT2ZQZXJzb25hLmRhcmtUZXh0Q2hhbmdlZCIsIk9mUGVyc29uYS5zZWxlY3RhYmxlQ2hhbmdlZCIsIk9mUGVyc29uYS5jbGlja0hhbmRsZXIiLCJQZXJzb25hU2l6ZSIsIlBlcnNvbmFTaGFwZSIsIlBlcnNvbmFQcmVzZW5jZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUVBO1FBeUJJQSxtQkFBb0JBLE9BQWVBO1lBQWZDLFlBQU9BLEdBQVBBLE9BQU9BLENBQVFBO1lBdEJ6QkEsVUFBS0EsR0FBV0EsWUFBWUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7WUFDakRBLFdBQU1BLEdBQVVBLFFBQVFBLENBQUNBO1lBQ3pCQSxhQUFRQSxHQUFVQSxlQUFlQSxDQUFDQSxlQUFlQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtZQUN4REEsU0FBSUEsR0FBVUEsSUFBSUEsQ0FBQ0E7WUFDbkJBLFVBQUtBLEdBQVVBLElBQUlBLENBQUNBO1lBQ3BCQSxXQUFNQSxHQUFVQSxJQUFJQSxDQUFDQTtZQUNyQkEsV0FBTUEsR0FBVUEsSUFBSUEsQ0FBQ0E7WUFDckJBLFVBQUtBLEdBQVVBLElBQUlBLENBQUNBO1lBQ3BCQSxZQUFPQSxHQUFVQSxJQUFJQSxDQUFDQTtZQUN0QkEsU0FBSUEsR0FBVUEsV0FBV0EsQ0FBQ0EsV0FBV0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7WUFLckRBLGdCQUFXQSxHQUFRQSxXQUFXQSxDQUFBQTtZQUM5QkEsaUJBQVlBLEdBQVdBLEtBQUtBLENBQUNBO1lBQzdCQSxjQUFTQSxHQUFXQSxLQUFLQSxDQUFDQTtZQUMxQkEsZUFBVUEsR0FBV0EsS0FBS0EsQ0FBQ0E7WUFDM0JBLGVBQVVBLEdBQVdB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LENBQUNBLEVBUFcsbUJBQVcsS0FBWCxtQkFBVyxRQU90QjtJQVBELElBQVksV0FBVyxHQUFYLG1CQU9YLENBQUE7SUFDRCxXQUFZLFlBQVk7UUFDcEJDLG1EQUFNQSxDQUFBQTtRQUNOQSxpREFBS0EsQ0FBQUE7SUFDVEEsQ0FBQ0EsRUFIVyxvQkFBWSxLQUFaLG9CQUFZLFFBR3ZCO0lBSEQsSUFBWSxZQUFZLEdBQVosb0JBR1gsQ0FBQTtJQUNELFdBQVksZUFBZTtRQUN2QkMscURBQUlBLENBQUFBO1FBQ0pBLCtEQUFTQSxDQUFBQTtRQUNUQSxxREFBSUEsQ0FBQUE7UUFDSkEsMkRBQU9BLENBQUFBO1FBQ1BBLHFEQUFJQSxDQUFBQTtRQUNKQSxtREFBR0EsQ0FBQUE7UUFDSEEsMkRBQU9BLENBQUFBO0lBQ1hBLENBQUNBLEVBUlcsdUJBQWUsS0FBZix1QkFBZSxRQVExQjtJQVJELElBQVksZUFBZSxHQUFmLHVCQVFYLENBQUEiLCJmaWxlIjoicGVyc29uYS9vZi1wZXJzb25hLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjdXN0b21FbGVtZW50LCBiaW5kYWJsZSwgaW5qZWN0fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5cbkBpbmplY3QoRWxlbWVudClcbkBjdXN0b21FbGVtZW50KCdvZi1wZXJzb25hJylcbmV4cG9ydCBjbGFzcyBPZlBlcnNvbmEge1xuICAgIEBiaW5kYWJsZSBzaGFwZTogc3RyaW5nID0gUGVyc29uYVNoYXBlW1BlcnNvbmFTaGFwZS5yb3VuZF07XG4gICAgQGJpbmRhYmxlIGJnSWNvbjpzdHJpbmcgPSBcInBlcnNvblwiO1xuICAgIEBiaW5kYWJsZSBwcmVzZW5jZTpzdHJpbmcgPSBQZXJzb25hUHJlc2VuY2VbUGVyc29uYVByZXNlbmNlLm5vbmVdO1xuICAgIEBiaW5kYWJsZSBuYW1lOnN0cmluZyA9IG51bGw7XG4gICAgQGJpbmRhYmxlIHRpdGxlOnN0cmluZyA9IG51bGw7XG4gICAgQGJpbmRhYmxlIHN0YXR1czpzdHJpbmcgPSBudWxsO1xuICAgIEBiaW5kYWJsZSBkZXRhaWw6c3RyaW5nID0gbnVsbDtcbiAgICBAYmluZGFibGUgaW1hZ2U6c3RyaW5nID0gbnVsbDtcbiAgICBAYmluZGFibGUgdG9vbHRpcDpzdHJpbmcgPSBudWxsO1xuICAgIEBiaW5kYWJsZSBzaXplOnN0cmluZyA9IFBlcnNvbmFTaXplW1BlcnNvbmFTaXplLnJlZ107XG4gICAgQGJpbmRhYmxlIGRhcmtUZXh0OmJvb2xlYW47Ly8gPSBmYWxzZTtcbiAgICBAYmluZGFibGUgc2VsZWN0YWJsZTpib29sZWFuOy8vID0gZmFsc2U7XG4gICAgXG4gICAgXG4gICAgZGFya1RleHRDc3M6c3RyaW5nPVwibGlnaHRUZXh0XCIgLy9kYXJrVGV4dFxuICAgIHNob3dQcmVzZW5jZTpib29sZWFuID0gZmFsc2U7XG4gICAgc2hvd1RpdGxlOmJvb2xlYW4gPSBmYWxzZTtcbiAgICBzaG93U3RhdHVzOmJvb2xlYW4gPSBmYWxzZTtcbiAgICBzaG93RGV0YWlsOmJvb2xlYW4gPSBmYWxzZTtcbiAgICBzaG93SW1hZ2U6Ym9vbGVhbiA9IGZhbHNlO1xuICAgIHNlbGVjdGFibGVDc3M6c3RyaW5nID0gbnVsbDtcbiAgICBcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6RWxlbWVudCl7XG4gICAgICAgIFxuICAgIH1cbiAgICBzaXplQ2hhbmdlZChuZXdWYWx1ZTpzdHJpbmcpeyAgICAgICAgXG4gICAgICAgIHRoaXMuc2hvd0ltYWdlID0gIFBlcnNvbmFTaXplW25ld1ZhbHVlXSAhPT0gUGVyc29uYVNpemUudGlueTtcbiAgICAgICAgdGhpcy5zaG93VGl0bGUgPSAgIShQZXJzb25hU2l6ZVtuZXdWYWx1ZV0gPT09IFBlcnNvbmFTaXplLnRpbnkgfHwgUGVyc29uYVNpemVbbmV3VmFsdWVdID09PSBQZXJzb25hU2l6ZS54cyk7XG4gICAgICAgIHRoaXMuc2hvd1N0YXR1cyA9ICBQZXJzb25hU2l6ZVtuZXdWYWx1ZV0gPT09IFBlcnNvbmFTaXplLmxnIHx8IFBlcnNvbmFTaXplW25ld1ZhbHVlXSA9PT0gUGVyc29uYVNpemUueGw7XG4gICAgICAgIHRoaXMuc2hvd0RldGFpbCA9IFBlcnNvbmFTaXplW25ld1ZhbHVlXSA9PT0gUGVyc29uYVNpemUueGw7XG4gICAgfVxuICAgIHByZXNlbmNlQ2hhbmdlZChuZXdWYWx1ZTpzdHJpbmcpe1xuICAgICAgICB0aGlzLnNob3dQcmVzZW5jZSA9IFBlcnNvbmFQcmVzZW5jZVtuZXdWYWx1ZV0gIT09IFBlcnNvbmFQcmVzZW5jZS5ub25lOy8vIHx8IFBlcnNvbmFQcmVzZW5jZVtuZXdWYWx1ZV0gIT09IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZGFya1RleHRDaGFuZ2VkKG5ld1ZhbHVlOmJvb2xlYW4pe1xuICAgICAgICB0aGlzLmRhcmtUZXh0Q3NzID0gbmV3VmFsdWU/XCJkYXJrVGV4dFwiOlwibGlnaHRUZXh0XCI7XG4gICAgfVxuICAgIHNlbGVjdGFibGVDaGFuZ2VkKG5ld1ZhbHVlOmJvb2xlYW4pe1xuICAgICAgICB0aGlzLnNlbGVjdGFibGVDc3MgPSBuZXdWYWx1ZT9cInNlbGVjdGFibGVcIjpcIm5vbi1zZWxlY3RhYmxlXCI7XG4gICAgfVxuICAgIFxuICAgIGNsaWNrSGFuZGxlcigpe1xuICAgICAgICAvL3RoaXMuZWxlbWVudC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2xpY2snKSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZXZlbnQgZGlzcGF0Y2hlZFwiKTtcbiAgICB9XG59XG5cbmV4cG9ydCBlbnVtIFBlcnNvbmFTaXplIHtcbiAgICB0aW55LFxuICAgIHhzLFxuICAgIHNtLFxuICAgIHJlZyxcbiAgICBsZyxcbiAgICB4bCwgICAgXG59XG5leHBvcnQgZW51bSBQZXJzb25hU2hhcGUge1xuICAgIHNxdWFyZSxcbiAgICByb3VuZCwgICAgICAgXG59XG5leHBvcnQgZW51bSBQZXJzb25hUHJlc2VuY2Uge1xuICAgIG5vbmUsXG4gICAgYXZhaWxhYmxlLFxuICAgIGF3YXksXG4gICAgYmxvY2tlZCxcbiAgICBidXN5LFxuICAgIGRuZCxcbiAgICBvZmZsaW5lLCAgICBcbn1cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
