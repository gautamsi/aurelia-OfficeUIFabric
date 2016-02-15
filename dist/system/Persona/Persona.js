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
    var Persona, PersonaSize, PersonaShape, PersonaPresence;
    return {
        setters:[
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            }],
        execute: function() {
            Persona = (function () {
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
            exports_1("Persona", Persona);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlBlcnNvbmEvUGVyc29uYS50cyJdLCJuYW1lcyI6WyJQZXJzb25hIiwiUGVyc29uYS5jb25zdHJ1Y3RvciIsIlBlcnNvbmEuc2l6ZUNoYW5nZWQiLCJQZXJzb25hLnByZXNlbmNlQ2hhbmdlZCIsIlBlcnNvbmEuZGFya1RleHRDaGFuZ2VkIiwiUGVyc29uYS5zZWxlY3RhYmxlQ2hhbmdlZCIsIlBlcnNvbmEuYXR0YWNoZWQiLCJQZXJzb25hU2l6ZSIsIlBlcnNvbmFTaGFwZSIsIlBlcnNvbmFQcmVzZW5jZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBRUE7Z0JBQUFBO29CQUdjQyxVQUFLQSxHQUFXQSxZQUFZQSxDQUFDQSxZQUFZQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTtvQkFDakRBLFdBQU1BLEdBQVVBLFFBQVFBLENBQUNBO29CQUN6QkEsYUFBUUEsR0FBVUEsZUFBZUEsQ0FBQ0EsZUFBZUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7b0JBQ3hEQSxTQUFJQSxHQUFVQSxJQUFJQSxDQUFDQTtvQkFDbkJBLFVBQUtBLEdBQVVBLElBQUlBLENBQUNBO29CQUNwQkEsV0FBTUEsR0FBVUEsSUFBSUEsQ0FBQ0E7b0JBQ3JCQSxXQUFNQSxHQUFVQSxJQUFJQSxDQUFDQTtvQkFDckJBLFVBQUtBLEdBQVVBLElBQUlBLENBQUNBO29CQUNwQkEsWUFBT0EsR0FBVUEsSUFBSUEsQ0FBQ0E7b0JBQ3RCQSxTQUFJQSxHQUFVQSxXQUFXQSxDQUFDQSxXQUFXQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTtvQkFNckRBLGdCQUFXQSxHQUFRQSxXQUFXQSxDQUFBQTtvQkFDOUJBLGlCQUFZQSxHQUFXQSxLQUFLQSxDQUFDQTtvQkFDN0JBLGNBQVNBLEdBQVdBLEtBQUtBLENBQUNBO29CQUMxQkEsZUFBVUEsR0FBV0EsS0FBS0EsQ0FBQ0E7b0JBQzNCQSxlQUFVQSxHQUFXQSxLQUFLQSxDQUFDQTtvQkFDM0JBLGNBQVNBLEdBQVdBLEtBQUtBLENBQUNBO29CQUMxQkEsa0JBQWFBLEdBQVVBLElBQUlBLENBQUNBO2dCQXlCaENBLENBQUNBO2dCQXBCR0QsNkJBQVdBLEdBQVhBLFVBQVlBLFFBQWVBO29CQUN2QkUsSUFBSUEsQ0FBQ0EsU0FBU0EsR0FBSUEsV0FBV0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsS0FBS0EsV0FBV0EsQ0FBQ0EsSUFBSUEsQ0FBQ0E7b0JBQzdEQSxJQUFJQSxDQUFDQSxTQUFTQSxHQUFJQSxDQUFDQSxDQUFDQSxXQUFXQSxDQUFDQSxRQUFRQSxDQUFDQSxLQUFLQSxXQUFXQSxDQUFDQSxJQUFJQSxJQUFJQSxXQUFXQSxDQUFDQSxRQUFRQSxDQUFDQSxLQUFLQSxXQUFXQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQTtvQkFDNUdBLElBQUlBLENBQUNBLFVBQVVBLEdBQUlBLFdBQVdBLENBQUNBLFFBQVFBLENBQUNBLEtBQUtBLFdBQVdBLENBQUNBLEVBQUVBLElBQUlBLFdBQVdBLENBQUNBLFFBQVFBLENBQUNBLEtBQUtBLFdBQVdBLENBQUNBLEVBQUVBLENBQUNBO29CQUN4R0EsSUFBSUEsQ0FBQ0EsVUFBVUEsR0FBR0EsV0FBV0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsS0FBS0EsV0FBV0EsQ0FBQ0EsRUFBRUEsQ0FBQ0E7Z0JBQy9EQSxDQUFDQTtnQkFDREYsaUNBQWVBLEdBQWZBLFVBQWdCQSxRQUFlQTtvQkFDM0JHLElBQUlBLENBQUNBLFlBQVlBLEdBQUdBLGVBQWVBLENBQUNBLFFBQVFBLENBQUNBLEtBQUtBLGVBQWVBLENBQUNBLElBQUlBLENBQUNBO2dCQUMzRUEsQ0FBQ0E7Z0JBQ0RILGlDQUFlQSxHQUFmQSxVQUFnQkEsUUFBZ0JBO29CQUM1QkksSUFBSUEsQ0FBQ0EsV0FBV0EsR0FBR0EsUUFBUUEsR0FBQ0EsVUFBVUEsR0FBQ0EsV0FBV0EsQ0FBQ0E7Z0JBQ3ZEQSxDQUFDQTtnQkFDREosbUNBQWlCQSxHQUFqQkEsVUFBa0JBLFFBQWdCQTtvQkFDOUJLLElBQUlBLENBQUNBLGFBQWFBLEdBQUdBLFFBQVFBLEdBQUNBLFlBQVlBLEdBQUNBLGdCQUFnQkEsQ0FBQ0E7Z0JBQ2hFQSxDQUFDQTtnQkFFREwsMEJBQVFBLEdBQVJBO29CQUVJTSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxVQUFVQSxDQUFDQSxDQUFDQTtnQkFDNUJBLENBQUNBO2dCQTdDRE47b0JBQUNBLDRCQUFRQTs7bUJBQUNBLDBCQUFLQSxVQUE0Q0E7Z0JBQzNEQTtvQkFBQ0EsNEJBQVFBOzttQkFBQ0EsMkJBQU1BLFVBQW1CQTtnQkFDbkNBO29CQUFDQSw0QkFBUUE7O21CQUFDQSw2QkFBUUEsVUFBZ0RBO2dCQUNsRUE7b0JBQUNBLDRCQUFRQTs7bUJBQUNBLHlCQUFJQSxVQUFlQTtnQkFDN0JBO29CQUFDQSw0QkFBUUE7O21CQUFDQSwwQkFBS0EsVUFBZUE7Z0JBQzlCQTtvQkFBQ0EsNEJBQVFBOzttQkFBQ0EsMkJBQU1BLFVBQWVBO2dCQUMvQkE7b0JBQUNBLDRCQUFRQTs7bUJBQUNBLDJCQUFNQSxVQUFlQTtnQkFDL0JBO29CQUFDQSw0QkFBUUE7O21CQUFDQSwwQkFBS0EsVUFBZUE7Z0JBQzlCQTtvQkFBQ0EsNEJBQVFBOzttQkFBQ0EsNEJBQU9BLFVBQWVBO2dCQUNoQ0E7b0JBQUNBLDRCQUFRQTs7bUJBQUNBLHlCQUFJQSxVQUF1Q0E7Z0JBQ3JEQTtvQkFBQ0EsNEJBQVFBOzttQkFBQ0EsNkJBQVFBLFVBQVNBO2dCQUMzQkE7b0JBQUNBLDRCQUFRQTs7bUJBQUNBLCtCQUFVQSxVQUFTQTtnQkFkakNBO29CQUFDQSwwQkFBTUEsQ0FBQ0EsT0FBT0EsQ0FBQ0E7b0JBQ2ZBLGlDQUFhQSxDQUFDQSxnQkFBZ0JBLENBQUNBOzs0QkFnRC9CQTtnQkFBREEsY0FBQ0E7WUFBREEsQ0FqREEsQUFpRENBLElBQUE7WUFqREQsNkJBaURDLENBQUE7WUFFRCxXQUFZLFdBQVc7Z0JBQ25CTyw2Q0FBSUEsQ0FBQUE7Z0JBQ0pBLHlDQUFFQSxDQUFBQTtnQkFDRkEseUNBQUVBLENBQUFBO2dCQUNGQSwyQ0FBR0EsQ0FBQUE7Z0JBQ0hBLHlDQUFFQSxDQUFBQTtnQkFDRkEseUNBQUVBLENBQUFBO1lBQ05BLENBQUNBLEVBUFcsV0FBVyxLQUFYLFdBQVcsUUFPdEI7a0RBQUE7WUFDRCxXQUFZLFlBQVk7Z0JBQ3BCQyxtREFBTUEsQ0FBQUE7Z0JBQ05BLGlEQUFLQSxDQUFBQTtZQUNUQSxDQUFDQSxFQUhXLFlBQVksS0FBWixZQUFZLFFBR3ZCO29EQUFBO1lBQ0QsV0FBWSxlQUFlO2dCQUN2QkMscURBQUlBLENBQUFBO2dCQUNKQSwrREFBU0EsQ0FBQUE7Z0JBQ1RBLHFEQUFJQSxDQUFBQTtnQkFDSkEsMkRBQU9BLENBQUFBO2dCQUNQQSxxREFBSUEsQ0FBQUE7Z0JBQ0pBLG1EQUFHQSxDQUFBQTtnQkFDSEEsMkRBQU9BLENBQUFBO1lBQ1hBLENBQUNBLEVBUlcsZUFBZSxLQUFmLGVBQWUsUUFRMUI7MERBQUEiLCJmaWxlIjoiUGVyc29uYS9QZXJzb25hLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjdXN0b21FbGVtZW50LCBiaW5kYWJsZSwgaW5qZWN0IH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5cclxuQGluamVjdChFbGVtZW50KVxyXG5AY3VzdG9tRWxlbWVudCgnb2ZmaWNlLXBlcnNvbmEnKVxyXG5leHBvcnQgY2xhc3MgUGVyc29uYSB7XHJcbiAgICBAYmluZGFibGUgc2hhcGU6IHN0cmluZyA9IFBlcnNvbmFTaGFwZVtQZXJzb25hU2hhcGUucm91bmRdO1xyXG4gICAgQGJpbmRhYmxlIGJnSWNvbjpzdHJpbmcgPSBcInBlcnNvblwiO1xyXG4gICAgQGJpbmRhYmxlIHByZXNlbmNlOnN0cmluZyA9IFBlcnNvbmFQcmVzZW5jZVtQZXJzb25hUHJlc2VuY2Uubm9uZV07XHJcbiAgICBAYmluZGFibGUgbmFtZTpzdHJpbmcgPSBudWxsO1xyXG4gICAgQGJpbmRhYmxlIHRpdGxlOnN0cmluZyA9IG51bGw7XHJcbiAgICBAYmluZGFibGUgc3RhdHVzOnN0cmluZyA9IG51bGw7XHJcbiAgICBAYmluZGFibGUgZGV0YWlsOnN0cmluZyA9IG51bGw7XHJcbiAgICBAYmluZGFibGUgaW1hZ2U6c3RyaW5nID0gbnVsbDtcclxuICAgIEBiaW5kYWJsZSB0b29sdGlwOnN0cmluZyA9IG51bGw7XHJcbiAgICBAYmluZGFibGUgc2l6ZTpzdHJpbmcgPSBQZXJzb25hU2l6ZVtQZXJzb25hU2l6ZS5yZWddO1xyXG4gICAgQGJpbmRhYmxlIGRhcmtUZXh0OmJvb2xlYW47Ly8gPSBmYWxzZTtcclxuICAgIEBiaW5kYWJsZSBzZWxlY3RhYmxlOmJvb2xlYW47Ly8gPSBmYWxzZTtcclxuICAgIFxyXG4gICAgZWxlOkVsZW1lbnQ7XHJcbiAgICBcclxuICAgIGRhcmtUZXh0Q3NzOnN0cmluZz1cImxpZ2h0VGV4dFwiIC8vZGFya1RleHRcclxuICAgIHNob3dQcmVzZW5jZTpib29sZWFuID0gZmFsc2U7XHJcbiAgICBzaG93VGl0bGU6Ym9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc2hvd1N0YXR1czpib29sZWFuID0gZmFsc2U7XHJcbiAgICBzaG93RGV0YWlsOmJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHNob3dJbWFnZTpib29sZWFuID0gZmFsc2U7XHJcbiAgICBzZWxlY3RhYmxlQ3NzOnN0cmluZyA9IG51bGw7XHJcbiAgICBcclxuICAgIC8vIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDpFbGVtZW50KXtcclxuICAgICAgICBcclxuICAgIC8vIH1cclxuICAgIHNpemVDaGFuZ2VkKG5ld1ZhbHVlOnN0cmluZyl7ICAgICAgICBcclxuICAgICAgICB0aGlzLnNob3dJbWFnZSA9ICBQZXJzb25hU2l6ZVtuZXdWYWx1ZV0gIT09IFBlcnNvbmFTaXplLnRpbnk7XHJcbiAgICAgICAgdGhpcy5zaG93VGl0bGUgPSAgIShQZXJzb25hU2l6ZVtuZXdWYWx1ZV0gPT09IFBlcnNvbmFTaXplLnRpbnkgfHwgUGVyc29uYVNpemVbbmV3VmFsdWVdID09PSBQZXJzb25hU2l6ZS54cyk7XHJcbiAgICAgICAgdGhpcy5zaG93U3RhdHVzID0gIFBlcnNvbmFTaXplW25ld1ZhbHVlXSA9PT0gUGVyc29uYVNpemUubGcgfHwgUGVyc29uYVNpemVbbmV3VmFsdWVdID09PSBQZXJzb25hU2l6ZS54bDtcclxuICAgICAgICB0aGlzLnNob3dEZXRhaWwgPSBQZXJzb25hU2l6ZVtuZXdWYWx1ZV0gPT09IFBlcnNvbmFTaXplLnhsO1xyXG4gICAgfVxyXG4gICAgcHJlc2VuY2VDaGFuZ2VkKG5ld1ZhbHVlOnN0cmluZyl7XHJcbiAgICAgICAgdGhpcy5zaG93UHJlc2VuY2UgPSBQZXJzb25hUHJlc2VuY2VbbmV3VmFsdWVdICE9PSBQZXJzb25hUHJlc2VuY2Uubm9uZTsvLyB8fCBQZXJzb25hUHJlc2VuY2VbbmV3VmFsdWVdICE9PSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgICBkYXJrVGV4dENoYW5nZWQobmV3VmFsdWU6Ym9vbGVhbil7XHJcbiAgICAgICAgdGhpcy5kYXJrVGV4dENzcyA9IG5ld1ZhbHVlP1wiZGFya1RleHRcIjpcImxpZ2h0VGV4dFwiO1xyXG4gICAgfVxyXG4gICAgc2VsZWN0YWJsZUNoYW5nZWQobmV3VmFsdWU6Ym9vbGVhbil7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RhYmxlQ3NzID0gbmV3VmFsdWU/XCJzZWxlY3RhYmxlXCI6XCJub24tc2VsZWN0YWJsZVwiO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBhdHRhY2hlZCgpe1xyXG4gICAgICAgIC8vdGhpcy5lbGVtZW50LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdjbGljaycpKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImF0dGFjaGVkXCIpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZW51bSBQZXJzb25hU2l6ZSB7XHJcbiAgICB0aW55LFxyXG4gICAgeHMsXHJcbiAgICBzbSxcclxuICAgIHJlZyxcclxuICAgIGxnLFxyXG4gICAgeGwsICAgIFxyXG59XHJcbmV4cG9ydCBlbnVtIFBlcnNvbmFTaGFwZSB7XHJcbiAgICBzcXVhcmUsXHJcbiAgICByb3VuZCwgICAgICAgXHJcbn1cclxuZXhwb3J0IGVudW0gUGVyc29uYVByZXNlbmNlIHtcclxuICAgIG5vbmUsXHJcbiAgICBhdmFpbGFibGUsXHJcbiAgICBhd2F5LFxyXG4gICAgYmxvY2tlZCxcclxuICAgIGJ1c3ksXHJcbiAgICBkbmQsXHJcbiAgICBvZmZsaW5lLCAgICBcclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
