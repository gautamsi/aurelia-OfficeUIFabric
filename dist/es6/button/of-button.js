var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { customElement, bindable, inject } from 'aurelia-framework';
export let OfButton = class {
    constructor(element) {
        this.element = element;
        this.type = ButtonType.basic;
        this.icon = "plus";
        this.buttonTypeCss = '';
    }
    typeChanged(newValue) {
        this.buttonTypeCss = newValue === '' || newValue === ButtonType[ButtonType.basic] ? '' : "ms-Button--" + newValue;
    }
    clickHandler() {
        console.log("event dispatched");
    }
};
__decorate([
    bindable, 
    __metadata('design:type', Number)
], OfButton.prototype, "type", void 0);
__decorate([
    bindable, 
    __metadata('design:type', String)
], OfButton.prototype, "icon", void 0);
__decorate([
    bindable, 
    __metadata('design:type', String)
], OfButton.prototype, "label", void 0);
__decorate([
    bindable, 
    __metadata('design:type', String)
], OfButton.prototype, "description", void 0);
OfButton = __decorate([
    inject(Element),
    customElement('of-button'), 
    __metadata('design:paramtypes', [Element])
], OfButton);
export var ButtonType;
(function (ButtonType) {
    ButtonType[ButtonType["basic"] = 0] = "basic";
    ButtonType[ButtonType["primary"] = 1] = "primary";
    ButtonType[ButtonType["command"] = 2] = "command";
    ButtonType[ButtonType["compound"] = 3] = "compound";
    ButtonType[ButtonType["hero"] = 4] = "hero";
})(ButtonType || (ButtonType = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1dHRvbi9vZi1idXR0b24udHMiXSwibmFtZXMiOlsiT2ZCdXR0b24iLCJPZkJ1dHRvbi5jb25zdHJ1Y3RvciIsIk9mQnV0dG9uLnR5cGVDaGFuZ2VkIiwiT2ZCdXR0b24uY2xpY2tIYW5kbGVyIiwiQnV0dG9uVHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O09BQU8sRUFBQyxhQUFhLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBQyxNQUFNLG1CQUFtQjtBQUVqRTtJQVVJQSxZQUFvQkEsT0FBZUE7UUFBZkMsWUFBT0EsR0FBUEEsT0FBT0EsQ0FBUUE7UUFQekJBLFNBQUlBLEdBQWVBLFVBQVVBLENBQUNBLEtBQUtBLENBQUNBO1FBQ3BDQSxTQUFJQSxHQUFVQSxNQUFNQSxDQUFDQTtRQUkvQkEsa0JBQWFBLEdBQVVBLEVBQUVBLENBQUNBO0lBSTFCQSxDQUFDQTtJQUNERCxXQUFXQSxDQUFDQSxRQUFlQTtRQUN2QkUsSUFBSUEsQ0FBQ0EsYUFBYUEsR0FBR0EsUUFBUUEsS0FBSUEsRUFBRUEsSUFBSUEsUUFBUUEsS0FBS0EsVUFBVUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsR0FBR0EsRUFBRUEsR0FBR0EsYUFBYUEsR0FBR0EsUUFBUUEsQ0FBQ0E7SUFDckhBLENBQUNBO0lBRURGLFlBQVlBO1FBRVJHLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLGtCQUFrQkEsQ0FBQ0EsQ0FBQ0E7SUFDcENBLENBQUNBO0FBQ0xILENBQUNBO0FBbEJHO0lBQUMsUUFBUTs7R0FBQywwQkFBSSxVQUFnQztBQUM5QztJQUFDLFFBQVE7O0dBQUMsMEJBQUksVUFBaUI7QUFDL0I7SUFBQyxRQUFROztHQUFDLDJCQUFLLFVBQVE7QUFDdkI7SUFBQyxRQUFROztHQUFDLGlDQUFXLFVBQVE7QUFOakM7SUFBQyxNQUFNLENBQUMsT0FBTyxDQUFDO0lBQ2YsYUFBYSxDQUFDLFdBQVcsQ0FBQzs7YUFvQjFCO0FBRUQsV0FBWSxVQU9YO0FBUEQsV0FBWSxVQUFVO0lBQ2xCSSw2Q0FBS0EsQ0FBQUE7SUFDTEEsaURBQU9BLENBQUFBO0lBQ1BBLGlEQUFPQSxDQUFBQTtJQUNQQSxtREFBUUEsQ0FBQUE7SUFDUkEsMkNBQUlBLENBQUFBO0FBRVJBLENBQUNBLEVBUFcsVUFBVSxLQUFWLFVBQVUsUUFPckIiLCJmaWxlIjoiYnV0dG9uL29mLWJ1dHRvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3VzdG9tRWxlbWVudCwgYmluZGFibGUsIGluamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5AaW5qZWN0KEVsZW1lbnQpXG5AY3VzdG9tRWxlbWVudCgnb2YtYnV0dG9uJylcbmV4cG9ydCBjbGFzcyBPZkJ1dHRvbiB7XG4gICAgQGJpbmRhYmxlIHR5cGU6IEJ1dHRvblR5cGUgPSBCdXR0b25UeXBlLmJhc2ljO1xuICAgIEBiaW5kYWJsZSBpY29uOnN0cmluZyA9IFwicGx1c1wiO1xuICAgIEBiaW5kYWJsZSBsYWJlbDpzdHJpbmc7XG4gICAgQGJpbmRhYmxlIGRlc2NyaXB0aW9uOnN0cmluZztcbiAgICBcbiAgICBidXR0b25UeXBlQ3NzOnN0cmluZyA9ICcnO1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDpFbGVtZW50KXtcbiAgICAgICAgXG4gICAgfVxuICAgIHR5cGVDaGFuZ2VkKG5ld1ZhbHVlOnN0cmluZyl7XG4gICAgICAgIHRoaXMuYnV0dG9uVHlwZUNzcyA9IG5ld1ZhbHVlID09PScnIHx8IG5ld1ZhbHVlID09PSBCdXR0b25UeXBlW0J1dHRvblR5cGUuYmFzaWNdID8gJycgOiBcIm1zLUJ1dHRvbi0tXCIgKyBuZXdWYWx1ZTsgICAgICAgICAgIFxuICAgIH1cbiAgICBcbiAgICBjbGlja0hhbmRsZXIoKXtcbiAgICAgICAgLy90aGlzLmVsZW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NsaWNrJykpO1xuICAgICAgICBjb25zb2xlLmxvZyhcImV2ZW50IGRpc3BhdGNoZWRcIik7XG4gICAgfVxufVxuXG5leHBvcnQgZW51bSBCdXR0b25UeXBlIHtcbiAgICBiYXNpYyxcbiAgICBwcmltYXJ5LFxuICAgIGNvbW1hbmQsXG4gICAgY29tcG91bmQsXG4gICAgaGVyb1xuICAgIFxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
