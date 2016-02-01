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
    var OfButton = (function () {
        function OfButton(element) {
            this.element = element;
            this.type = ButtonType.basic;
            this.icon = "plus";
            this.buttonTypeCss = '';
        }
        OfButton.prototype.typeChanged = function (newValue) {
            this.buttonTypeCss = newValue === '' || newValue === ButtonType[ButtonType.basic] ? '' : "ms-Button--" + newValue;
        };
        OfButton.prototype.clickHandler = function () {
            console.log("event dispatched");
        };
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Number)
        ], OfButton.prototype, "type", void 0);
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], OfButton.prototype, "icon", void 0);
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], OfButton.prototype, "label", void 0);
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], OfButton.prototype, "description", void 0);
        OfButton = __decorate([
            aurelia_framework_1.inject(Element),
            aurelia_framework_1.customElement('of-button'), 
            __metadata('design:paramtypes', [Element])
        ], OfButton);
        return OfButton;
    })();
    exports.OfButton = OfButton;
    (function (ButtonType) {
        ButtonType[ButtonType["basic"] = 0] = "basic";
        ButtonType[ButtonType["primary"] = 1] = "primary";
        ButtonType[ButtonType["command"] = 2] = "command";
        ButtonType[ButtonType["compound"] = 3] = "compound";
        ButtonType[ButtonType["hero"] = 4] = "hero";
    })(exports.ButtonType || (exports.ButtonType = {}));
    var ButtonType = exports.ButtonType;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1dHRvbi9vZi1idXR0b24udHMiXSwibmFtZXMiOlsiT2ZCdXR0b24iLCJPZkJ1dHRvbi5jb25zdHJ1Y3RvciIsIk9mQnV0dG9uLnR5cGVDaGFuZ2VkIiwiT2ZCdXR0b24uY2xpY2tIYW5kbGVyIiwiQnV0dG9uVHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUVBO1FBVUlBLGtCQUFvQkEsT0FBZUE7WUFBZkMsWUFBT0EsR0FBUEEsT0FBT0EsQ0FBUUE7WUFQekJBLFNBQUlBLEdBQWVBLFVBQVVBLENBQUNBLEtBQUtBLENBQUNBO1lBQ3BDQSxTQUFJQSxHQUFVQSxNQUFNQSxDQUFDQTtZQUkvQkEsa0JBQWFBLEdBQVVBLEVBQUVBLENBQUNBO1FBSTFCQSxDQUFDQTtRQUNERCw4QkFBV0EsR0FBWEEsVUFBWUEsUUFBZUE7WUFDdkJFLElBQUlBLENBQUNBLGFBQWFBLEdBQUdBLFFBQVFBLEtBQUlBLEVBQUVBLElBQUlBLFFBQVFBLEtBQUtBLFVBQVVBLENBQUNBLFVBQVVBLENBQUNBLEtBQUtBLENBQUNBLEdBQUdBLEVBQUVBLEdBQUdBLGFBQWFBLEdBQUdBLFFBQVFBLENBQUNBO1FBQ3JIQSxDQUFDQTtRQUVERiwrQkFBWUEsR0FBWkE7WUFFSUcsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0Esa0JBQWtCQSxDQUFDQSxDQUFDQTtRQUNwQ0EsQ0FBQ0E7UUFqQkRIO1lBQUNBLDRCQUFRQTs7V0FBQ0EsMEJBQUlBLFVBQWdDQTtRQUM5Q0E7WUFBQ0EsNEJBQVFBOztXQUFDQSwwQkFBSUEsVUFBaUJBO1FBQy9CQTtZQUFDQSw0QkFBUUE7O1dBQUNBLDJCQUFLQSxVQUFRQTtRQUN2QkE7WUFBQ0EsNEJBQVFBOztXQUFDQSxpQ0FBV0EsVUFBUUE7UUFOakNBO1lBQUNBLDBCQUFNQSxDQUFDQSxPQUFPQSxDQUFDQTtZQUNmQSxpQ0FBYUEsQ0FBQ0EsV0FBV0EsQ0FBQ0E7O3FCQW9CMUJBO1FBQURBLGVBQUNBO0lBQURBLENBckJBLEFBcUJDQSxJQUFBO0lBbkJZLGdCQUFRLFdBbUJwQixDQUFBO0lBRUQsV0FBWSxVQUFVO1FBQ2xCSSw2Q0FBS0EsQ0FBQUE7UUFDTEEsaURBQU9BLENBQUFBO1FBQ1BBLGlEQUFPQSxDQUFBQTtRQUNQQSxtREFBUUEsQ0FBQUE7UUFDUkEsMkNBQUlBLENBQUFBO0lBRVJBLENBQUNBLEVBUFcsa0JBQVUsS0FBVixrQkFBVSxRQU9yQjtJQVBELElBQVksVUFBVSxHQUFWLGtCQU9YLENBQUEiLCJmaWxlIjoiYnV0dG9uL29mLWJ1dHRvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3VzdG9tRWxlbWVudCwgYmluZGFibGUsIGluamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5AaW5qZWN0KEVsZW1lbnQpXG5AY3VzdG9tRWxlbWVudCgnb2YtYnV0dG9uJylcbmV4cG9ydCBjbGFzcyBPZkJ1dHRvbiB7XG4gICAgQGJpbmRhYmxlIHR5cGU6IEJ1dHRvblR5cGUgPSBCdXR0b25UeXBlLmJhc2ljO1xuICAgIEBiaW5kYWJsZSBpY29uOnN0cmluZyA9IFwicGx1c1wiO1xuICAgIEBiaW5kYWJsZSBsYWJlbDpzdHJpbmc7XG4gICAgQGJpbmRhYmxlIGRlc2NyaXB0aW9uOnN0cmluZztcbiAgICBcbiAgICBidXR0b25UeXBlQ3NzOnN0cmluZyA9ICcnO1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDpFbGVtZW50KXtcbiAgICAgICAgXG4gICAgfVxuICAgIHR5cGVDaGFuZ2VkKG5ld1ZhbHVlOnN0cmluZyl7XG4gICAgICAgIHRoaXMuYnV0dG9uVHlwZUNzcyA9IG5ld1ZhbHVlID09PScnIHx8IG5ld1ZhbHVlID09PSBCdXR0b25UeXBlW0J1dHRvblR5cGUuYmFzaWNdID8gJycgOiBcIm1zLUJ1dHRvbi0tXCIgKyBuZXdWYWx1ZTsgICAgICAgICAgIFxuICAgIH1cbiAgICBcbiAgICBjbGlja0hhbmRsZXIoKXtcbiAgICAgICAgLy90aGlzLmVsZW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NsaWNrJykpO1xuICAgICAgICBjb25zb2xlLmxvZyhcImV2ZW50IGRpc3BhdGNoZWRcIik7XG4gICAgfVxufVxuXG5leHBvcnQgZW51bSBCdXR0b25UeXBlIHtcbiAgICBiYXNpYyxcbiAgICBwcmltYXJ5LFxuICAgIGNvbW1hbmQsXG4gICAgY29tcG91bmQsXG4gICAgaGVyb1xuICAgIFxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
