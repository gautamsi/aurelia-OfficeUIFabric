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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkJ1dHRvbi9CdXR0b24udHMiXSwibmFtZXMiOlsiQnV0dG9uIiwiQnV0dG9uLmNvbnN0cnVjdG9yIiwiQnV0dG9uLnR5cGVDaGFuZ2VkIiwiQnV0dG9uLmNsaWNrSGFuZGxlciIsIkJ1dHRvblR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLGtDQUE4QyxtQkFBbUIsQ0FBQyxDQUFBO0FBRWxFO0lBVUlBLGdCQUFvQkEsT0FBZUE7UUFBZkMsWUFBT0EsR0FBUEEsT0FBT0EsQ0FBUUE7UUFQekJBLFNBQUlBLEdBQWVBLFVBQVVBLENBQUNBLEtBQUtBLENBQUNBO1FBQ3BDQSxTQUFJQSxHQUFVQSxNQUFNQSxDQUFDQTtRQUkvQkEsa0JBQWFBLEdBQVVBLEVBQUVBLENBQUNBO0lBSTFCQSxDQUFDQTtJQUNERCw0QkFBV0EsR0FBWEEsVUFBWUEsUUFBZUE7UUFDdkJFLElBQUlBLENBQUNBLGFBQWFBLEdBQUdBLFFBQVFBLEtBQUlBLEVBQUVBLElBQUlBLFFBQVFBLEtBQUtBLFVBQVVBLENBQUNBLFVBQVVBLENBQUNBLEtBQUtBLENBQUNBLEdBQUdBLEVBQUVBLEdBQUdBLGFBQWFBLEdBQUdBLFFBQVFBLENBQUNBO0lBQ3JIQSxDQUFDQTtJQUVERiw2QkFBWUEsR0FBWkE7UUFFSUcsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0Esa0JBQWtCQSxDQUFDQSxDQUFDQTtJQUNwQ0EsQ0FBQ0E7SUFqQkRIO1FBQUNBLDRCQUFRQTs7T0FBQ0Esd0JBQUlBLFVBQWdDQTtJQUM5Q0E7UUFBQ0EsNEJBQVFBOztPQUFDQSx3QkFBSUEsVUFBaUJBO0lBQy9CQTtRQUFDQSw0QkFBUUE7O09BQUNBLHlCQUFLQSxVQUFRQTtJQUN2QkE7UUFBQ0EsNEJBQVFBOztPQUFDQSwrQkFBV0EsVUFBUUE7SUFOakNBO1FBQUNBLDBCQUFNQSxDQUFDQSxPQUFPQSxDQUFDQTtRQUNmQSxpQ0FBYUEsQ0FBQ0EsZUFBZUEsQ0FBQ0E7O2VBb0I5QkE7SUFBREEsYUFBQ0E7QUFBREEsQ0FyQkEsQUFxQkNBLElBQUE7QUFuQlksY0FBTSxTQW1CbEIsQ0FBQTtBQUVELFdBQVksVUFBVTtJQUNsQkksNkNBQUtBLENBQUFBO0lBQ0xBLGlEQUFPQSxDQUFBQTtJQUNQQSxpREFBT0EsQ0FBQUE7SUFDUEEsbURBQVFBLENBQUFBO0lBQ1JBLDJDQUFJQSxDQUFBQTtBQUVSQSxDQUFDQSxFQVBXLGtCQUFVLEtBQVYsa0JBQVUsUUFPckI7QUFQRCxJQUFZLFVBQVUsR0FBVixrQkFPWCxDQUFBIiwiZmlsZSI6IkJ1dHRvbi9CdXR0b24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2N1c3RvbUVsZW1lbnQsIGJpbmRhYmxlLCBpbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuXHJcbkBpbmplY3QoRWxlbWVudClcclxuQGN1c3RvbUVsZW1lbnQoJ29mZmljZS1idXR0b24nKVxyXG5leHBvcnQgY2xhc3MgQnV0dG9uIHtcclxuICAgIEBiaW5kYWJsZSB0eXBlOiBCdXR0b25UeXBlID0gQnV0dG9uVHlwZS5iYXNpYztcclxuICAgIEBiaW5kYWJsZSBpY29uOnN0cmluZyA9IFwicGx1c1wiO1xyXG4gICAgQGJpbmRhYmxlIGxhYmVsOnN0cmluZztcclxuICAgIEBiaW5kYWJsZSBkZXNjcmlwdGlvbjpzdHJpbmc7XHJcbiAgICBcclxuICAgIGJ1dHRvblR5cGVDc3M6c3RyaW5nID0gJyc7XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDpFbGVtZW50KXtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIHR5cGVDaGFuZ2VkKG5ld1ZhbHVlOnN0cmluZyl7XHJcbiAgICAgICAgdGhpcy5idXR0b25UeXBlQ3NzID0gbmV3VmFsdWUgPT09JycgfHwgbmV3VmFsdWUgPT09IEJ1dHRvblR5cGVbQnV0dG9uVHlwZS5iYXNpY10gPyAnJyA6IFwibXMtQnV0dG9uLS1cIiArIG5ld1ZhbHVlOyAgICAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNsaWNrSGFuZGxlcigpe1xyXG4gICAgICAgIC8vdGhpcy5lbGVtZW50LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdjbGljaycpKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImV2ZW50IGRpc3BhdGNoZWRcIik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEJ1dHRvblR5cGUge1xyXG4gICAgYmFzaWMsXHJcbiAgICBwcmltYXJ5LFxyXG4gICAgY29tbWFuZCxcclxuICAgIGNvbXBvdW5kLFxyXG4gICAgaGVyb1xyXG4gICAgXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
