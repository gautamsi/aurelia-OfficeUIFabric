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
    var Panel = (function () {
        function Panel() {
            this.headerText = null;
            this.tooltip = null;
            this.size = PanelSize[PanelSize.small];
            this.open = false;
            this.closing = false;
            this.opening = false;
            this.isOpen = false;
        }
        Panel.prototype.openPanel = function () {
            this.isOpen = true;
            this.opening = true;
        };
        Panel.prototype.attached = function () {
            var _this = this;
            Panel.prefixedEvent(this.$panelMain, 'AnimationEnd', function (event) {
                if (event.animationName.indexOf('Out') > -1) {
                    _this.isOpen = false;
                    _this.closing = false;
                    _this.opening = false;
                    _this.open = false;
                }
            });
        };
        Panel.prototype.closeHandler = function () {
            this.closing = true;
        };
        Panel.prototype.openChanged = function (newValue) {
            if (newValue == true) {
                this.openPanel();
            }
        };
        Panel.prefixedEvent = function (element, type, callback) {
            for (var p = 0; p < this.pfx.length; p++) {
                if (!this.pfx[p])
                    type = type.toLowerCase();
                element.addEventListener(this.pfx[p] + type, callback, false);
            }
        };
        Panel.pfx = ["webkit", "moz", "MS", "o", ""];
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], Panel.prototype, "headerText", void 0);
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], Panel.prototype, "tooltip", void 0);
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], Panel.prototype, "size", void 0);
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Boolean)
        ], Panel.prototype, "open", void 0);
        Panel = __decorate([
            aurelia_framework_1.inject(Element),
            aurelia_framework_1.customElement('office-panel'), 
            __metadata('design:paramtypes', [])
        ], Panel);
        return Panel;
    })();
    exports.Panel = Panel;
    (function (PanelSize) {
        PanelSize[PanelSize["small"] = 0] = "small";
        PanelSize[PanelSize["medium"] = 1] = "medium";
        PanelSize[PanelSize["large"] = 2] = "large";
        PanelSize[PanelSize["extraLarge"] = 3] = "extraLarge";
    })(exports.PanelSize || (exports.PanelSize = {}));
    var PanelSize = exports.PanelSize;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlBhbmVsL1BhbmVsLnRzIl0sIm5hbWVzIjpbIlBhbmVsIiwiUGFuZWwuY29uc3RydWN0b3IiLCJQYW5lbC5vcGVuUGFuZWwiLCJQYW5lbC5hdHRhY2hlZCIsIlBhbmVsLmNsb3NlSGFuZGxlciIsIlBhbmVsLm9wZW5DaGFuZ2VkIiwiUGFuZWwucHJlZml4ZWRFdmVudCIsIlBhbmVsU2l6ZSIsIlBlcnNvbmFTaGFwZSIsIlBlcnNvbmFQcmVzZW5jZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUVBO1FBQUFBO1lBR2NDLGVBQVVBLEdBQVdBLElBQUlBLENBQUNBO1lBQzFCQSxZQUFPQSxHQUFXQSxJQUFJQSxDQUFDQTtZQUN2QkEsU0FBSUEsR0FBV0EsU0FBU0EsQ0FBQ0EsU0FBU0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7WUFDMUNBLFNBQUlBLEdBQVlBLEtBQUtBLENBQUNBO1lBSWhDQSxZQUFPQSxHQUFZQSxLQUFLQSxDQUFDQTtZQUN6QkEsWUFBT0EsR0FBWUEsS0FBS0EsQ0FBQ0E7WUFDekJBLFdBQU1BLEdBQVlBLEtBQUtBLENBQUNBO1FBNEM1QkEsQ0FBQ0E7UUExQ0dELHlCQUFTQSxHQUFUQTtZQUVJRSxJQUFJQSxDQUFDQSxNQUFNQSxHQUFHQSxJQUFJQSxDQUFDQTtZQUduQkEsSUFBSUEsQ0FBQ0EsT0FBT0EsR0FBR0EsSUFBSUEsQ0FBQ0E7UUFDeEJBLENBQUNBO1FBRURGLHdCQUFRQSxHQUFSQTtZQUFBRyxpQkFnQkNBO1lBZEdBLEtBQUtBLENBQUNBLGFBQWFBLENBQUNBLElBQUlBLENBQUNBLFVBQVVBLEVBQUVBLGNBQWNBLEVBQUVBLFVBQUNBLEtBQUtBO2dCQUN2REEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsYUFBYUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7b0JBSTFDQSxLQUFJQSxDQUFDQSxNQUFNQSxHQUFHQSxLQUFLQSxDQUFDQTtv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Y2VzQ29udGVudCI6WyJpbXBvcnQge2N1c3RvbUVsZW1lbnQsIGJpbmRhYmxlLCBpbmplY3QgfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcblxyXG5AaW5qZWN0KEVsZW1lbnQpXHJcbkBjdXN0b21FbGVtZW50KCdvZmZpY2UtcGFuZWwnKVxyXG5leHBvcnQgY2xhc3MgUGFuZWwge1xyXG4gICAgQGJpbmRhYmxlIGhlYWRlclRleHQ6IHN0cmluZyA9IG51bGw7XHJcbiAgICBAYmluZGFibGUgdG9vbHRpcDogc3RyaW5nID0gbnVsbDtcclxuICAgIEBiaW5kYWJsZSBzaXplOiBzdHJpbmcgPSBQYW5lbFNpemVbUGFuZWxTaXplLnNtYWxsXTtcclxuICAgIEBiaW5kYWJsZSBvcGVuOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgJGNsb3NlT3ZlcmxheTogRWxlbWVudDtcclxuICAgICRwYW5lbE1haW46IEVsZW1lbnQ7XHJcbiAgICBjbG9zaW5nOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBvcGVuaW5nOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBpc09wZW46IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBvcGVuUGFuZWwoKSB7XHJcbiAgICAgICAgLy8gRGlzcGxheSBQYW5lbCBmaXJzdCwgdG8gYWxsb3cgYW5pbWF0aW9uc1xyXG4gICAgICAgIHRoaXMuaXNPcGVuID0gdHJ1ZTsgLy8kcGFuZWwuYWRkQ2xhc3MoXCJpcy1vcGVuXCIpO1xyXG5cclxuICAgICAgICAvLyBBZGQgYW5pbWF0aW9uIGNsYXNzXHJcbiAgICAgICAgdGhpcy5vcGVuaW5nID0gdHJ1ZTsgLy8kcGFuZWwuYWRkQ2xhc3MoXCJtcy1QYW5lbC1hbmltYXRlSW5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgYXR0YWNoZWQoKSB7XHJcbiAgICAgICAgLy90aGlzLmVsZW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NsaWNrJykpO1xyXG4gICAgICAgIFBhbmVsLnByZWZpeGVkRXZlbnQodGhpcy4kcGFuZWxNYWluLCAnQW5pbWF0aW9uRW5kJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChldmVudC5hbmltYXRpb25OYW1lLmluZGV4T2YoJ091dCcpID4gLTEpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBIaWRlIGFuZCBQcmV2ZW50IG1zLVBhbmVsLW1haW4gZnJvbSBiZWluZyBpbnRlcmFjdGl2ZVxyXG4gICAgICAgICAgICAgICAgLy8kcGFuZWwucmVtb3ZlQ2xhc3MoJ2lzLW9wZW4nKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNPcGVuID0gZmFsc2U7IFxyXG5cclxuICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBhbmltYXRpbmcgY2xhc3NlcyBmb3IgdGhlIG5leHQgdGltZSB3ZSBvcGVuIHBhbmVsXHJcbiAgICAgICAgICAgICAgICAvLyRwYW5lbC5yZW1vdmVDbGFzcygnbXMtUGFuZWwtYW5pbWF0ZUluIG1zLVBhbmVsLWFuaW1hdGVPdXQnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2luZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vcGVuaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9wZW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlSGFuZGxlcigpIHtcclxuICAgICAgICB0aGlzLmNsb3NpbmcgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgb3BlbkNoYW5nZWQobmV3VmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICBpZiAobmV3VmFsdWUgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLm9wZW5QYW5lbCgpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc3RhdGljIHBmeDogc3RyaW5nW10gPSBbXCJ3ZWJraXRcIiwgXCJtb3pcIiwgXCJNU1wiLCBcIm9cIiwgXCJcIl07XHJcbiAgICAvLyBQcmVmaXggZnVuY3Rpb25cclxuICAgIHN0YXRpYyBwcmVmaXhlZEV2ZW50KGVsZW1lbnQ6IEVsZW1lbnQsIHR5cGU6IHN0cmluZywgY2FsbGJhY2s6IChldmVudDogQW5pbWF0aW9uRXZlbnQpID0+IHZvaWQpIHtcclxuICAgICAgICBmb3IgKHZhciBwID0gMDsgcCA8IHRoaXMucGZ4Lmxlbmd0aDsgcCsrKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5wZnhbcF0pIHR5cGUgPSB0eXBlLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0aGlzLnBmeFtwXSArIHR5cGUsIGNhbGxiYWNrLCBmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZW51bSBQYW5lbFNpemUge1xyXG4gICAgc21hbGwsXHJcbiAgICBtZWRpdW0sXHJcbiAgICBsYXJnZSxcclxuICAgIGV4dHJhTGFyZ2VcclxufVxyXG5leHBvcnQgZW51bSBQZXJzb25hU2hhcGUge1xyXG4gICAgc3F1YXJlLFxyXG4gICAgcm91bmQsXHJcbn1cclxuZXhwb3J0IGVudW0gUGVyc29uYVByZXNlbmNlIHtcclxuICAgIG5vbmUsXHJcbiAgICBhdmFpbGFibGUsXHJcbiAgICBhd2F5LFxyXG4gICAgYmxvY2tlZCxcclxuICAgIGJ1c3ksXHJcbiAgICBkbmQsXHJcbiAgICBvZmZsaW5lLFxyXG59XHJcblxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
