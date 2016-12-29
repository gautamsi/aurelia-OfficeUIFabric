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
    var Button = (function () {
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
    exports.Button = Button;
    (function (ButtonType) {
        ButtonType[ButtonType["basic"] = 0] = "basic";
        ButtonType[ButtonType["primary"] = 1] = "primary";
        ButtonType[ButtonType["command"] = 2] = "command";
        ButtonType[ButtonType["compound"] = 3] = "compound";
        ButtonType[ButtonType["hero"] = 4] = "hero";
    })(exports.ButtonType || (exports.ButtonType = {}));
    var ButtonType = exports.ButtonType;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkJ1dHRvbi9CdXR0b24udHMiXSwibmFtZXMiOlsiQnV0dG9uIiwiQnV0dG9uLmNvbnN0cnVjdG9yIiwiQnV0dG9uLnR5cGVDaGFuZ2VkIiwiQnV0dG9uLmNsaWNrSGFuZGxlciIsIkJ1dHRvblR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFFQTtRQVVJQSxnQkFBb0JBLE9BQWVBO1lBQWZDLFlBQU9BLEdBQVBBLE9BQU9BLENBQVFBO1lBUHpCQSxTQUFJQSxHQUFlQSxVQUFVQSxDQUFDQSxLQUFLQSxDQUFDQTtZQUNwQ0EsU0FBSUEsR0FBVUEsTUFBTUEsQ0FBQ0E7WUFJL0JBLGtCQUFhQSxHQUFVQSxFQUFFQSxDQUFDQTtRQUkxQkEsQ0FBQ0E7UUFDREQsNEJBQVdBLEdBQVhBLFVBQVlBLFFBQWVBO1lBQ3ZCRSxJQUFJQSxDQUFDQSxhQUFhQSxHQUFHQSxRQUFRQSxLQUFJQSxFQUFFQSxJQUFJQSxRQUFRQSxLQUFLQSxVQUFVQSxDQUFDQSxVQUFVQSxDQUFDQSxLQUFLQSxDQUFDQSxHQUFHQSxFQUFFQSxHQUFHQSxhQUFhQSxHQUFHQSxRQUFRQSxDQUFDQTtRQUNySEEsQ0FBQ0E7UUFFREYsNkJBQVlBLEdBQVpBO1lBRUlHLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLGtCQUFrQkEsQ0FBQ0EsQ0FBQ0E7UUFDcENBLENBQUNBO1FBakJESDtZQUFDQSw0QkFBUUE7O1dBQUNBLHdCQUFJQSxVQUFnQ0E7UUFDOUNBO1lBQUNBLDRCQUFRQTs7V0FBQ0Esd0JBQUlBLFVBQWlCQTtRQUMvQkE7WUFBQ0EsNEJBQVFBOztXQUFDQSx5QkFBS0EsVUFBUUE7UUFDdkJBO1lBQUNBLDRCQUFRQTs7V0FBQ0EsK0JBQVdBLFVBQVFBO1FBTmpDQTtZQUFDQSwwQkFBTUEsQ0FBQ0EsT0FBT0EsQ0FBQ0E7WUFDZkEsaUNBQWFBLENBQUNBLGVBQWVBLENBQUNBOzttQkFvQjlCQTtRQUFEQSxhQUFDQTtJQUFEQSxDQXJCQSxBQXFCQ0EsSUFBQTtJQW5CWSxjQUFNLFNBbUJsQixDQUFBO0lBRUQsV0FBWSxVQUFVO1FBQ2xCSSw2Q0FBS0EsQ0FBQUE7UUFDTEEsaURBQU9BLENBQUFBO1FBQ1BBLGlEQUFPQSxDQUFBQTtRQUNQQSxtREFBUUEsQ0FBQUE7UUFDUkEsMkNBQUlBLENBQUFBO0lBRVJBLENBQUNBLEVBUFcsa0JBQVUsS0FBVixrQkFBVSxRQU9yQjtJQVBELElBQVksVUFBVSxHQUFWLGtCQU9YLENBQUEiLCJmaWxlIjoiQnV0dG9uL0J1dHRvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3VzdG9tRWxlbWVudCwgYmluZGFibGUsIGluamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5cclxuQGluamVjdChFbGVtZW50KVxyXG5AY3VzdG9tRWxlbWVudCgnb2ZmaWNlLWJ1dHRvbicpXHJcbmV4cG9ydCBjbGFzcyBCdXR0b24ge1xyXG4gICAgQGJpbmRhYmxlIHR5cGU6IEJ1dHRvblR5cGUgPSBCdXR0b25UeXBlLmJhc2ljO1xyXG4gICAgQGJpbmRhYmxlIGljb246c3RyaW5nID0gXCJwbHVzXCI7XHJcbiAgICBAYmluZGFibGUgbGFiZWw6c3RyaW5nO1xyXG4gICAgQGJpbmRhYmxlIGRlc2NyaXB0aW9uOnN0cmluZztcclxuICAgIFxyXG4gICAgYnV0dG9uVHlwZUNzczpzdHJpbmcgPSAnJztcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OkVsZW1lbnQpe1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgdHlwZUNoYW5nZWQobmV3VmFsdWU6c3RyaW5nKXtcclxuICAgICAgICB0aGlzLmJ1dHRvblR5cGVDc3MgPSBuZXdWYWx1ZSA9PT0nJyB8fCBuZXdWYWx1ZSA9PT0gQnV0dG9uVHlwZVtCdXR0b25UeXBlLmJhc2ljXSA/ICcnIDogXCJtcy1CdXR0b24tLVwiICsgbmV3VmFsdWU7ICAgICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgY2xpY2tIYW5kbGVyKCl7XHJcbiAgICAgICAgLy90aGlzLmVsZW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NsaWNrJykpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZXZlbnQgZGlzcGF0Y2hlZFwiKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGVudW0gQnV0dG9uVHlwZSB7XHJcbiAgICBiYXNpYyxcclxuICAgIHByaW1hcnksXHJcbiAgICBjb21tYW5kLFxyXG4gICAgY29tcG91bmQsXHJcbiAgICBoZXJvXHJcbiAgICBcclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
