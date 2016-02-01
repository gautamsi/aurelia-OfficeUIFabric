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
    var OfButton, ButtonType;
    return {
        setters:[
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            }],
        execute: function() {
            OfButton = (function () {
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
            exports_1("OfButton", OfButton);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1dHRvbi9vZi1idXR0b24udHMiXSwibmFtZXMiOlsiT2ZCdXR0b24iLCJPZkJ1dHRvbi5jb25zdHJ1Y3RvciIsIk9mQnV0dG9uLnR5cGVDaGFuZ2VkIiwiT2ZCdXR0b24uY2xpY2tIYW5kbGVyIiwiQnV0dG9uVHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBRUE7Z0JBVUlBLGtCQUFvQkEsT0FBZUE7b0JBQWZDLFlBQU9BLEdBQVBBLE9BQU9BLENBQVFBO29CQVB6QkEsU0FBSUEsR0FBZUEsVUFBVUEsQ0FBQ0EsS0FBS0EsQ0FBQ0E7b0JBQ3BDQSxTQUFJQSxHQUFVQSxNQUFNQSxDQUFDQTtvQkFJL0JBLGtCQUFhQSxHQUFVQSxFQUFFQSxDQUFDQTtnQkFJMUJBLENBQUNBO2dCQUNERCw4QkFBV0EsR0FBWEEsVUFBWUEsUUFBZUE7b0JBQ3ZCRSxJQUFJQSxDQUFDQSxhQUFhQSxHQUFHQSxRQUFRQSxLQUFJQSxFQUFFQSxJQUFJQSxRQUFRQSxLQUFLQSxVQUFVQSxDQUFDQSxVQUFVQSxDQUFDQSxLQUFLQSxDQUFDQSxHQUFHQSxFQUFFQSxHQUFHQSxhQUFhQSxHQUFHQSxRQUFRQSxDQUFDQTtnQkFDckhBLENBQUNBO2dCQUVERiwrQkFBWUEsR0FBWkE7b0JBRUlHLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLGtCQUFrQkEsQ0FBQ0EsQ0FBQ0E7Z0JBQ3BDQSxDQUFDQTtnQkFqQkRIO29CQUFDQSw0QkFBUUE7O21CQUFDQSwwQkFBSUEsVUFBZ0NBO2dCQUM5Q0E7b0JBQUNBLDRCQUFRQTs7bUJBQUNBLDBCQUFJQSxVQUFpQkE7Z0JBQy9CQTtvQkFBQ0EsNEJBQVFBOzttQkFBQ0EsMkJBQUtBLFVBQVFBO2dCQUN2QkE7b0JBQUNBLDRCQUFRQTs7bUJBQUNBLGlDQUFXQSxVQUFRQTtnQkFOakNBO29CQUFDQSwwQkFBTUEsQ0FBQ0EsT0FBT0EsQ0FBQ0E7b0JBQ2ZBLGlDQUFhQSxDQUFDQSxXQUFXQSxDQUFDQTs7NkJBb0IxQkE7Z0JBQURBLGVBQUNBO1lBQURBLENBckJBLEFBcUJDQSxJQUFBO1lBckJELCtCQXFCQyxDQUFBO1lBRUQsV0FBWSxVQUFVO2dCQUNsQkksNkNBQUtBLENBQUFBO2dCQUNMQSxpREFBT0EsQ0FBQUE7Z0JBQ1BBLGlEQUFPQSxDQUFBQTtnQkFDUEEsbURBQVFBLENBQUFBO2dCQUNSQSwyQ0FBSUEsQ0FBQUE7WUFFUkEsQ0FBQ0EsRUFQVyxVQUFVLEtBQVYsVUFBVSxRQU9yQjtnREFBQSIsImZpbGUiOiJidXR0b24vb2YtYnV0dG9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjdXN0b21FbGVtZW50LCBiaW5kYWJsZSwgaW5qZWN0fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5cbkBpbmplY3QoRWxlbWVudClcbkBjdXN0b21FbGVtZW50KCdvZi1idXR0b24nKVxuZXhwb3J0IGNsYXNzIE9mQnV0dG9uIHtcbiAgICBAYmluZGFibGUgdHlwZTogQnV0dG9uVHlwZSA9IEJ1dHRvblR5cGUuYmFzaWM7XG4gICAgQGJpbmRhYmxlIGljb246c3RyaW5nID0gXCJwbHVzXCI7XG4gICAgQGJpbmRhYmxlIGxhYmVsOnN0cmluZztcbiAgICBAYmluZGFibGUgZGVzY3JpcHRpb246c3RyaW5nO1xuICAgIFxuICAgIGJ1dHRvblR5cGVDc3M6c3RyaW5nID0gJyc7XG4gICAgXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OkVsZW1lbnQpe1xuICAgICAgICBcbiAgICB9XG4gICAgdHlwZUNoYW5nZWQobmV3VmFsdWU6c3RyaW5nKXtcbiAgICAgICAgdGhpcy5idXR0b25UeXBlQ3NzID0gbmV3VmFsdWUgPT09JycgfHwgbmV3VmFsdWUgPT09IEJ1dHRvblR5cGVbQnV0dG9uVHlwZS5iYXNpY10gPyAnJyA6IFwibXMtQnV0dG9uLS1cIiArIG5ld1ZhbHVlOyAgICAgICAgICAgXG4gICAgfVxuICAgIFxuICAgIGNsaWNrSGFuZGxlcigpe1xuICAgICAgICAvL3RoaXMuZWxlbWVudC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2xpY2snKSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZXZlbnQgZGlzcGF0Y2hlZFwiKTtcbiAgICB9XG59XG5cbmV4cG9ydCBlbnVtIEJ1dHRvblR5cGUge1xuICAgIGJhc2ljLFxuICAgIHByaW1hcnksXG4gICAgY29tbWFuZCxcbiAgICBjb21wb3VuZCxcbiAgICBoZXJvXG4gICAgXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
