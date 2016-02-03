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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkJ1dHRvbi9CdXR0b24udHMiXSwibmFtZXMiOlsiQnV0dG9uIiwiQnV0dG9uLmNvbnN0cnVjdG9yIiwiQnV0dG9uLnR5cGVDaGFuZ2VkIiwiQnV0dG9uLmNsaWNrSGFuZGxlciIsIkJ1dHRvblR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLGtDQUE4QyxtQkFBbUIsQ0FBQyxDQUFBO0FBRWxFO0lBVUlBLGdCQUFvQkEsT0FBZUE7UUFBZkMsWUFBT0EsR0FBUEEsT0FBT0EsQ0FBUUE7UUFQekJBLFNBQUlBLEdBQWVBLFVBQVVBLENBQUNBLEtBQUtBLENBQUNBO1FBQ3BDQSxTQUFJQSxHQUFVQSxNQUFNQSxDQUFDQTtRQUkvQkEsa0JBQWFBLEdBQVVBLEVBQUVBLENBQUNBO0lBSTFCQSxDQUFDQTtJQUNERCw0QkFBV0EsR0FBWEEsVUFBWUEsUUFBZUE7UUFDdkJFLElBQUlBLENBQUNBLGFBQWFBLEdBQUdBLFFBQVFBLEtBQUlBLEVBQUVBLElBQUlBLFFBQVFBLEtBQUtBLFVBQVVBLENBQUNBLFVBQVVBLENBQUNBLEtBQUtBLENBQUNBLEdBQUdBLEVBQUVBLEdBQUdBLGFBQWFBLEdBQUdBLFFBQVFBLENBQUNBO0lBQ3JIQSxDQUFDQTtJQUVERiw2QkFBWUEsR0FBWkE7UUFFSUcsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0Esa0JBQWtCQSxDQUFDQSxDQUFDQTtJQUNwQ0EsQ0FBQ0E7SUFqQkRIO1FBQUNBLDRCQUFRQTs7T0FBQ0Esd0JBQUlBLFVBQWdDQTtJQUM5Q0E7UUFBQ0EsNEJBQVFBOztPQUFDQSx3QkFBSUEsVUFBaUJBO0lBQy9CQTtRQUFDQSw0QkFBUUE7O09BQUNBLHlCQUFLQSxVQUFRQTtJQUN2QkE7UUFBQ0EsNEJBQVFBOztPQUFDQSwrQkFBV0EsVUFBUUE7SUFOakNBO1FBQUNBLDBCQUFNQSxDQUFDQSxPQUFPQSxDQUFDQTtRQUNmQSxpQ0FBYUEsQ0FBQ0EsZUFBZUEsQ0FBQ0E7O2VBb0I5QkE7SUFBREEsYUFBQ0E7QUFBREEsQ0FyQkEsQUFxQkNBLElBQUE7QUFuQlksY0FBTSxTQW1CbEIsQ0FBQTtBQUVELFdBQVksVUFBVTtJQUNsQkksNkNBQUtBLENBQUFBO0lBQ0xBLGlEQUFPQSxDQUFBQTtJQUNQQSxpREFBT0EsQ0FBQUE7SUFDUEEsbURBQVFBLENBQUFBO0lBQ1JBLDJDQUFJQSxDQUFBQTtBQUVSQSxDQUFDQSxFQVBXLGtCQUFVLEtBQVYsa0JBQVUsUUFPckI7QUFQRCxJQUFZLFVBQVUsR0FBVixrQkFPWCxDQUFBIiwiZmlsZSI6IkJ1dHRvbi9CdXR0b24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2N1c3RvbUVsZW1lbnQsIGJpbmRhYmxlLCBpbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcblxuQGluamVjdChFbGVtZW50KVxuQGN1c3RvbUVsZW1lbnQoJ29mZmljZS1idXR0b24nKVxuZXhwb3J0IGNsYXNzIEJ1dHRvbiB7XG4gICAgQGJpbmRhYmxlIHR5cGU6IEJ1dHRvblR5cGUgPSBCdXR0b25UeXBlLmJhc2ljO1xuICAgIEBiaW5kYWJsZSBpY29uOnN0cmluZyA9IFwicGx1c1wiO1xuICAgIEBiaW5kYWJsZSBsYWJlbDpzdHJpbmc7XG4gICAgQGJpbmRhYmxlIGRlc2NyaXB0aW9uOnN0cmluZztcbiAgICBcbiAgICBidXR0b25UeXBlQ3NzOnN0cmluZyA9ICcnO1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDpFbGVtZW50KXtcbiAgICAgICAgXG4gICAgfVxuICAgIHR5cGVDaGFuZ2VkKG5ld1ZhbHVlOnN0cmluZyl7XG4gICAgICAgIHRoaXMuYnV0dG9uVHlwZUNzcyA9IG5ld1ZhbHVlID09PScnIHx8IG5ld1ZhbHVlID09PSBCdXR0b25UeXBlW0J1dHRvblR5cGUuYmFzaWNdID8gJycgOiBcIm1zLUJ1dHRvbi0tXCIgKyBuZXdWYWx1ZTsgICAgICAgICAgIFxuICAgIH1cbiAgICBcbiAgICBjbGlja0hhbmRsZXIoKXtcbiAgICAgICAgLy90aGlzLmVsZW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NsaWNrJykpO1xuICAgICAgICBjb25zb2xlLmxvZyhcImV2ZW50IGRpc3BhdGNoZWRcIik7XG4gICAgfVxufVxuXG5leHBvcnQgZW51bSBCdXR0b25UeXBlIHtcbiAgICBiYXNpYyxcbiAgICBwcmltYXJ5LFxuICAgIGNvbW1hbmQsXG4gICAgY29tcG91bmQsXG4gICAgaGVyb1xuICAgIFxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
