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
    var Button, ButtonType;
    return {
        setters:[
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            }],
        execute: function() {
            Button = (function () {
                function Button(element) {
                    this.element = element;
                    this.type = ButtonType.basic;
                    this.icon = "plus";
                    this.buttonTypeCss = '';
                }
                Button.prototype.typeChanged = function (newValue) {
                    this.buttonTypeCss = newValue === '' || newValue === ButtonType[ButtonType.basic] ? '' : "ms-Button--" + newValue;
                };
                Button.prototype.clickHandler = function () {
                    console.log("event dispatched");
                };
                __decorate([
                    aurelia_framework_1.bindable, 
                    __metadata('design:type', Number)
                ], Button.prototype, "type", void 0);
                __decorate([
                    aurelia_framework_1.bindable, 
                    __metadata('design:type', String)
                ], Button.prototype, "icon", void 0);
                __decorate([
                    aurelia_framework_1.bindable, 
                    __metadata('design:type', String)
                ], Button.prototype, "label", void 0);
                __decorate([
                    aurelia_framework_1.bindable, 
                    __metadata('design:type', String)
                ], Button.prototype, "description", void 0);
                Button = __decorate([
                    aurelia_framework_1.inject(Element),
                    aurelia_framework_1.customElement('office-button'), 
                    __metadata('design:paramtypes', [Element])
                ], Button);
                return Button;
            })();
            exports_1("Button", Button);
            (function (ButtonType) {
                ButtonType[ButtonType["basic"] = 0] = "basic";
                ButtonType[ButtonType["primary"] = 1] = "primary";
                ButtonType[ButtonType["command"] = 2] = "command";
                ButtonType[ButtonType["compound"] = 3] = "compound";
                ButtonType[ButtonType["hero"] = 4] = "hero";
            })(ButtonType || (ButtonType = {}));
            exports_1("ButtonType", ButtonType);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkJ1dHRvbi9CdXR0b24udHMiXSwibmFtZXMiOlsiQnV0dG9uIiwiQnV0dG9uLmNvbnN0cnVjdG9yIiwiQnV0dG9uLnR5cGVDaGFuZ2VkIiwiQnV0dG9uLmNsaWNrSGFuZGxlciIsIkJ1dHRvblR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUVBO2dCQVVJQSxnQkFBb0JBLE9BQWVBO29CQUFmQyxZQUFPQSxHQUFQQSxPQUFPQSxDQUFRQTtvQkFQekJBLFNBQUlBLEdBQWVBLFVBQVVBLENBQUNBLEtBQUtBLENBQUNBO29CQUNwQ0EsU0FBSUEsR0FBVUEsTUFBTUEsQ0FBQ0E7b0JBSS9CQSxrQkFBYUEsR0FBVUEsRUFBRUEsQ0FBQ0E7Z0JBSTFCQSxDQUFDQTtnQkFDREQsNEJBQVdBLEdBQVhBLFVBQVlBLFFBQWVBO29CQUN2QkUsSUFBSUEsQ0FBQ0EsYUFBYUEsR0FBR0EsUUFBUUEsS0FBSUEsRUFBRUEsSUFBSUEsUUFBUUEsS0FBS0EsVUFBVUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsR0FBR0EsRUFBRUEsR0FBR0EsYUFBYUEsR0FBR0EsUUFBUUEsQ0FBQ0E7Z0JBQ3JIQSxDQUFDQTtnQkFFREYsNkJBQVlBLEdBQVpBO29CQUVJRyxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxrQkFBa0JBLENBQUNBLENBQUNBO2dCQUNwQ0EsQ0FBQ0E7Z0JBakJESDtvQkFBQ0EsNEJBQVFBOzttQkFBQ0Esd0JBQUlBLFVBQWdDQTtnQkFDOUNBO29CQUFDQSw0QkFBUUE7O21CQUFDQSx3QkFBSUEsVUFBaUJBO2dCQUMvQkE7b0JBQUNBLDRCQUFRQTs7bUJBQUNBLHlCQUFLQSxVQUFRQTtnQkFDdkJBO29CQUFDQSw0QkFBUUE7O21CQUFDQSwrQkFBV0EsVUFBUUE7Z0JBTmpDQTtvQkFBQ0EsMEJBQU1BLENBQUNBLE9BQU9BLENBQUNBO29CQUNmQSxpQ0FBYUEsQ0FBQ0EsZUFBZUEsQ0FBQ0E7OzJCQW9COUJBO2dCQUFEQSxhQUFDQTtZQUFEQSxDQXJCQSxBQXFCQ0EsSUFBQTtZQXJCRCwyQkFxQkMsQ0FBQTtZQUVELFdBQVksVUFBVTtnQkFDbEJJLDZDQUFLQSxDQUFBQTtnQkFDTEEsaURBQU9BLENBQUFBO2dCQUNQQSxpREFBT0EsQ0FBQUE7Z0JBQ1BBLG1EQUFRQSxDQUFBQTtnQkFDUkEsMkNBQUlBLENBQUFBO1lBRVJBLENBQUNBLEVBUFcsVUFBVSxLQUFWLFVBQVUsUUFPckI7Z0RBQUEiLCJmaWxlIjoiQnV0dG9uL0J1dHRvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3VzdG9tRWxlbWVudCwgYmluZGFibGUsIGluamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5cclxuQGluamVjdChFbGVtZW50KVxyXG5AY3VzdG9tRWxlbWVudCgnb2ZmaWNlLWJ1dHRvbicpXHJcbmV4cG9ydCBjbGFzcyBCdXR0b24ge1xyXG4gICAgQGJpbmRhYmxlIHR5cGU6IEJ1dHRvblR5cGUgPSBCdXR0b25UeXBlLmJhc2ljO1xyXG4gICAgQGJpbmRhYmxlIGljb246c3RyaW5nID0gXCJwbHVzXCI7XHJcbiAgICBAYmluZGFibGUgbGFiZWw6c3RyaW5nO1xyXG4gICAgQGJpbmRhYmxlIGRlc2NyaXB0aW9uOnN0cmluZztcclxuICAgIFxyXG4gICAgYnV0dG9uVHlwZUNzczpzdHJpbmcgPSAnJztcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OkVsZW1lbnQpe1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgdHlwZUNoYW5nZWQobmV3VmFsdWU6c3RyaW5nKXtcclxuICAgICAgICB0aGlzLmJ1dHRvblR5cGVDc3MgPSBuZXdWYWx1ZSA9PT0nJyB8fCBuZXdWYWx1ZSA9PT0gQnV0dG9uVHlwZVtCdXR0b25UeXBlLmJhc2ljXSA/ICcnIDogXCJtcy1CdXR0b24tLVwiICsgbmV3VmFsdWU7ICAgICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgY2xpY2tIYW5kbGVyKCl7XHJcbiAgICAgICAgLy90aGlzLmVsZW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NsaWNrJykpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZXZlbnQgZGlzcGF0Y2hlZFwiKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGVudW0gQnV0dG9uVHlwZSB7XHJcbiAgICBiYXNpYyxcclxuICAgIHByaW1hcnksXHJcbiAgICBjb21tYW5kLFxyXG4gICAgY29tcG91bmQsXHJcbiAgICBoZXJvXHJcbiAgICBcclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
