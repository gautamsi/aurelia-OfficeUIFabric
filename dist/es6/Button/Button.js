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
export let Button = class {
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
], Button.prototype, "type", void 0);
__decorate([
    bindable, 
    __metadata('design:type', String)
], Button.prototype, "icon", void 0);
__decorate([
    bindable, 
    __metadata('design:type', String)
], Button.prototype, "label", void 0);
__decorate([
    bindable, 
    __metadata('design:type', String)
], Button.prototype, "description", void 0);
Button = __decorate([
    inject(Element),
    customElement('office-button'), 
    __metadata('design:paramtypes', [Element])
], Button);
export var ButtonType;
(function (ButtonType) {
    ButtonType[ButtonType["basic"] = 0] = "basic";
    ButtonType[ButtonType["primary"] = 1] = "primary";
    ButtonType[ButtonType["command"] = 2] = "command";
    ButtonType[ButtonType["compound"] = 3] = "compound";
    ButtonType[ButtonType["hero"] = 4] = "hero";
})(ButtonType || (ButtonType = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkJ1dHRvbi9CdXR0b24udHMiXSwibmFtZXMiOlsiQnV0dG9uIiwiQnV0dG9uLmNvbnN0cnVjdG9yIiwiQnV0dG9uLnR5cGVDaGFuZ2VkIiwiQnV0dG9uLmNsaWNrSGFuZGxlciIsIkJ1dHRvblR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztPQUFPLEVBQUMsYUFBYSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUMsTUFBTSxtQkFBbUI7QUFFakU7SUFVSUEsWUFBb0JBLE9BQWVBO1FBQWZDLFlBQU9BLEdBQVBBLE9BQU9BLENBQVFBO1FBUHpCQSxTQUFJQSxHQUFlQSxVQUFVQSxDQUFDQSxLQUFLQSxDQUFDQTtRQUNwQ0EsU0FBSUEsR0FBVUEsTUFBTUEsQ0FBQ0E7UUFJL0JBLGtCQUFhQSxHQUFVQSxFQUFFQSxDQUFDQTtJQUkxQkEsQ0FBQ0E7SUFDREQsV0FBV0EsQ0FBQ0EsUUFBZUE7UUFDdkJFLElBQUlBLENBQUNBLGFBQWFBLEdBQUdBLFFBQVFBLEtBQUlBLEVBQUVBLElBQUlBLFFBQVFBLEtBQUtBLFVBQVVBLENBQUNBLFVBQVVBLENBQUNBLEtBQUtBLENBQUNBLEdBQUdBLEVBQUVBLEdBQUdBLGFBQWFBLEdBQUdBLFFBQVFBLENBQUNBO0lBQ3JIQSxDQUFDQTtJQUVERixZQUFZQTtRQUVSRyxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxrQkFBa0JBLENBQUNBLENBQUNBO0lBQ3BDQSxDQUFDQTtBQUNMSCxDQUFDQTtBQWxCRztJQUFDLFFBQVE7O0dBQUMsd0JBQUksVUFBZ0M7QUFDOUM7SUFBQyxRQUFROztHQUFDLHdCQUFJLFVBQWlCO0FBQy9CO0lBQUMsUUFBUTs7R0FBQyx5QkFBSyxVQUFRO0FBQ3ZCO0lBQUMsUUFBUTs7R0FBQywrQkFBVyxVQUFRO0FBTmpDO0lBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQztJQUNmLGFBQWEsQ0FBQyxlQUFlLENBQUM7O1dBb0I5QjtBQUVELFdBQVksVUFPWDtBQVBELFdBQVksVUFBVTtJQUNsQkksNkNBQUtBLENBQUFBO0lBQ0xBLGlEQUFPQSxDQUFBQTtJQUNQQSxpREFBT0EsQ0FBQUE7SUFDUEEsbURBQVFBLENBQUFBO0lBQ1JBLDJDQUFJQSxDQUFBQTtBQUVSQSxDQUFDQSxFQVBXLFVBQVUsS0FBVixVQUFVLFFBT3JCIiwiZmlsZSI6IkJ1dHRvbi9CdXR0b24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2N1c3RvbUVsZW1lbnQsIGJpbmRhYmxlLCBpbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcblxuQGluamVjdChFbGVtZW50KVxuQGN1c3RvbUVsZW1lbnQoJ29mZmljZS1idXR0b24nKVxuZXhwb3J0IGNsYXNzIEJ1dHRvbiB7XG4gICAgQGJpbmRhYmxlIHR5cGU6IEJ1dHRvblR5cGUgPSBCdXR0b25UeXBlLmJhc2ljO1xuICAgIEBiaW5kYWJsZSBpY29uOnN0cmluZyA9IFwicGx1c1wiO1xuICAgIEBiaW5kYWJsZSBsYWJlbDpzdHJpbmc7XG4gICAgQGJpbmRhYmxlIGRlc2NyaXB0aW9uOnN0cmluZztcbiAgICBcbiAgICBidXR0b25UeXBlQ3NzOnN0cmluZyA9ICcnO1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDpFbGVtZW50KXtcbiAgICAgICAgXG4gICAgfVxuICAgIHR5cGVDaGFuZ2VkKG5ld1ZhbHVlOnN0cmluZyl7XG4gICAgICAgIHRoaXMuYnV0dG9uVHlwZUNzcyA9IG5ld1ZhbHVlID09PScnIHx8IG5ld1ZhbHVlID09PSBCdXR0b25UeXBlW0J1dHRvblR5cGUuYmFzaWNdID8gJycgOiBcIm1zLUJ1dHRvbi0tXCIgKyBuZXdWYWx1ZTsgICAgICAgICAgIFxuICAgIH1cbiAgICBcbiAgICBjbGlja0hhbmRsZXIoKXtcbiAgICAgICAgLy90aGlzLmVsZW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NsaWNrJykpO1xuICAgICAgICBjb25zb2xlLmxvZyhcImV2ZW50IGRpc3BhdGNoZWRcIik7XG4gICAgfVxufVxuXG5leHBvcnQgZW51bSBCdXR0b25UeXBlIHtcbiAgICBiYXNpYyxcbiAgICBwcmltYXJ5LFxuICAgIGNvbW1hbmQsXG4gICAgY29tcG91bmQsXG4gICAgaGVyb1xuICAgIFxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
