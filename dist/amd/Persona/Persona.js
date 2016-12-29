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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlBlcnNvbmEvUGVyc29uYS50cyJdLCJuYW1lcyI6WyJQZXJzb25hIiwiUGVyc29uYS5jb25zdHJ1Y3RvciIsIlBlcnNvbmEuc2l6ZUNoYW5nZWQiLCJQZXJzb25hLnByZXNlbmNlQ2hhbmdlZCIsIlBlcnNvbmEuZGFya1RleHRDaGFuZ2VkIiwiUGVyc29uYS5zZWxlY3RhYmxlQ2hhbmdlZCIsIlBlcnNvbmEuYXR0YWNoZWQiLCJQZXJzb25hU2l6ZSIsIlBlcnNvbmFTaGFwZSIsIlBlcnNvbmFQcmVzZW5jZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUVBO1FBQUFBO1lBR2NDLFVBQUtBLEdBQVdBLFlBQVlBLENBQUNBLFlBQVlBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBO1lBQ2pEQSxXQUFNQSxHQUFVQSxRQUFRQSxDQUFDQTtZQUN6QkEsYUFBUUEsR0FBVUEsZUFBZUEsQ0FBQ0EsZUFBZUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7WUFDeERBLFNBQUlBLEdBQVVBLElBQUlBLENBQUNBO1lBQ25CQSxVQUFLQSxHQUFVQSxJQUFJQSxDQUFDQTtZQUNwQkEsV0FBTUEsR0FBVUEsSUFBSUEsQ0FBQ0E7WUFDckJBLFdBQU1BLEdBQVVBLElBQUlBLENBQUNBO1lBQ3JCQSxVQUFLQSxHQUFVQSxJQUFJQSxDQUFDQTtZQUNwQkEsWUFBT0EsR0FBVUEsSUFBSUEsQ0FBQ0E7WUFDdEJBLFNBQUlBLEdBQVVBLFdBQVdBLENBQUNBLFdBQVdBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO1lBTXJEQSxnQkFBV0EsR0FBUUEsV0FBV0EsQ0FBQUE7WUFDOUJBLGlCQUFZQSxHQUFXQSxLQUFLQSxDQUFDQTtZQUM3QkEsY0FBU0EsR0FBV0EsS0FBS0EsQ0FBQ0E7WUFDMUJBLGVBQVVBLEdBQVdBLEtBQUtBLENBQUNBO1lBQzNCQSxlQUFVQSxHQUFXQSxLQUFLQSxDQUFDQTtZQUMzQkEsY0FBU0EsR0FBV0EsS0FBS0EsQ0FBQ0E7WUFDMUJBLGtCQUFhQSxHQUFVQSxJQUFJ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Q0QsV0FBWSxZQUFZO1FBQ3BCQyxtREFBTUEsQ0FBQUE7UUFDTkEsaURBQUtBLENBQUFBO0lBQ1RBLENBQUNBLEVBSFcsb0JBQVksS0FBWixvQkFBWSxRQUd2QjtJQUhELElBQVksWUFBWSxHQUFaLG9CQUdYLENBQUE7SUFDRCxXQUFZLGVBQWU7UUFDdkJDLHFEQUFJQSxDQUFBQTtRQUNKQSwrREFBU0EsQ0FBQUE7UUFDVEEscURBQUlBLENBQUFBO1FBQ0pBLDJEQUFPQSxDQUFBQTtRQUNQQSxxREFBSUEsQ0FBQUE7UUFDSkEsbURBQUdBLENBQUFBO1FBQ0hBLDJEQUFPQSxDQUFBQTtJQUNYQSxDQUFDQSxFQVJXLHVCQUFlLEtBQWYsdUJBQWUsUUFRMUI7SUFSRCxJQUFZLGVBQWUsR0FBZix1QkFRWCxDQUFBIiwiZmlsZSI6IlBlcnNvbmEvUGVyc29uYS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3VzdG9tRWxlbWVudCwgYmluZGFibGUsIGluamVjdCB9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuXHJcbkBpbmplY3QoRWxlbWVudClcclxuQGN1c3RvbUVsZW1lbnQoJ29mZmljZS1wZXJzb25hJylcclxuZXhwb3J0IGNsYXNzIFBlcnNvbmEge1xyXG4gICAgQGJpbmRhYmxlIHNoYXBlOiBzdHJpbmcgPSBQZXJzb25hU2hhcGVbUGVyc29uYVNoYXBlLnJvdW5kXTtcclxuICAgIEBiaW5kYWJsZSBiZ0ljb246c3RyaW5nID0gXCJwZXJzb25cIjtcclxuICAgIEBiaW5kYWJsZSBwcmVzZW5jZTpzdHJpbmcgPSBQZXJzb25hUHJlc2VuY2VbUGVyc29uYVByZXNlbmNlLm5vbmVdO1xyXG4gICAgQGJpbmRhYmxlIG5hbWU6c3RyaW5nID0gbnVsbDtcclxuICAgIEBiaW5kYWJsZSB0aXRsZTpzdHJpbmcgPSBudWxsO1xyXG4gICAgQGJpbmRhYmxlIHN0YXR1czpzdHJpbmcgPSBudWxsO1xyXG4gICAgQGJpbmRhYmxlIGRldGFpbDpzdHJpbmcgPSBudWxsO1xyXG4gICAgQGJpbmRhYmxlIGltYWdlOnN0cmluZyA9IG51bGw7XHJcbiAgICBAYmluZGFibGUgdG9vbHRpcDpzdHJpbmcgPSBudWxsO1xyXG4gICAgQGJpbmRhYmxlIHNpemU6c3RyaW5nID0gUGVyc29uYVNpemVbUGVyc29uYVNpemUucmVnXTtcclxuICAgIEBiaW5kYWJsZSBkYXJrVGV4dDpib29sZWFuOy8vID0gZmFsc2U7XHJcbiAgICBAYmluZGFibGUgc2VsZWN0YWJsZTpib29sZWFuOy8vID0gZmFsc2U7XHJcbiAgICBcclxuICAgIGVsZTpFbGVtZW50O1xyXG4gICAgXHJcbiAgICBkYXJrVGV4dENzczpzdHJpbmc9XCJsaWdodFRleHRcIiAvL2RhcmtUZXh0XHJcbiAgICBzaG93UHJlc2VuY2U6Ym9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc2hvd1RpdGxlOmJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHNob3dTdGF0dXM6Ym9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc2hvd0RldGFpbDpib29sZWFuID0gZmFsc2U7XHJcbiAgICBzaG93SW1hZ2U6Ym9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc2VsZWN0YWJsZUNzczpzdHJpbmcgPSBudWxsO1xyXG4gICAgXHJcbiAgICAvLyBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6RWxlbWVudCl7XHJcbiAgICAgICAgXHJcbiAgICAvLyB9XHJcbiAgICBzaXplQ2hhbmdlZChuZXdWYWx1ZTpzdHJpbmcpeyAgICAgICAgXHJcbiAgICAgICAgdGhpcy5zaG93SW1hZ2UgPSAgUGVyc29uYVNpemVbbmV3VmFsdWVdICE9PSBQZXJzb25hU2l6ZS50aW55O1xyXG4gICAgICAgIHRoaXMuc2hvd1RpdGxlID0gICEoUGVyc29uYVNpemVbbmV3VmFsdWVdID09PSBQZXJzb25hU2l6ZS50aW55IHx8IFBlcnNvbmFTaXplW25ld1ZhbHVlXSA9PT0gUGVyc29uYVNpemUueHMpO1xyXG4gICAgICAgIHRoaXMuc2hvd1N0YXR1cyA9ICBQZXJzb25hU2l6ZVtuZXdWYWx1ZV0gPT09IFBlcnNvbmFTaXplLmxnIHx8IFBlcnNvbmFTaXplW25ld1ZhbHVlXSA9PT0gUGVyc29uYVNpemUueGw7XHJcbiAgICAgICAgdGhpcy5zaG93RGV0YWlsID0gUGVyc29uYVNpemVbbmV3VmFsdWVdID09PSBQZXJzb25hU2l6ZS54bDtcclxuICAgIH1cclxuICAgIHByZXNlbmNlQ2hhbmdlZChuZXdWYWx1ZTpzdHJpbmcpe1xyXG4gICAgICAgIHRoaXMuc2hvd1ByZXNlbmNlID0gUGVyc29uYVByZXNlbmNlW25ld1ZhbHVlXSAhPT0gUGVyc29uYVByZXNlbmNlLm5vbmU7Ly8gfHwgUGVyc29uYVByZXNlbmNlW25ld1ZhbHVlXSAhPT0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgZGFya1RleHRDaGFuZ2VkKG5ld1ZhbHVlOmJvb2xlYW4pe1xyXG4gICAgICAgIHRoaXMuZGFya1RleHRDc3MgPSBuZXdWYWx1ZT9cImRhcmtUZXh0XCI6XCJsaWdodFRleHRcIjtcclxuICAgIH1cclxuICAgIHNlbGVjdGFibGVDaGFuZ2VkKG5ld1ZhbHVlOmJvb2xlYW4pe1xyXG4gICAgICAgIHRoaXMuc2VsZWN0YWJsZUNzcyA9IG5ld1ZhbHVlP1wic2VsZWN0YWJsZVwiOlwibm9uLXNlbGVjdGFibGVcIjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgYXR0YWNoZWQoKXtcclxuICAgICAgICAvL3RoaXMuZWxlbWVudC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2xpY2snKSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJhdHRhY2hlZFwiKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGVudW0gUGVyc29uYVNpemUge1xyXG4gICAgdGlueSxcclxuICAgIHhzLFxyXG4gICAgc20sXHJcbiAgICByZWcsXHJcbiAgICBsZyxcclxuICAgIHhsLCAgICBcclxufVxyXG5leHBvcnQgZW51bSBQZXJzb25hU2hhcGUge1xyXG4gICAgc3F1YXJlLFxyXG4gICAgcm91bmQsICAgICAgIFxyXG59XHJcbmV4cG9ydCBlbnVtIFBlcnNvbmFQcmVzZW5jZSB7XHJcbiAgICBub25lLFxyXG4gICAgYXZhaWxhYmxlLFxyXG4gICAgYXdheSxcclxuICAgIGJsb2NrZWQsXHJcbiAgICBidXN5LFxyXG4gICAgZG5kLFxyXG4gICAgb2ZmbGluZSwgICAgXHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
