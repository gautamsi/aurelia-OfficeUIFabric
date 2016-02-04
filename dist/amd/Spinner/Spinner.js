var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-framework', './SpinnerComponent.js'], function (require, exports, aurelia_framework_1, Fabric) {
    var Spinner = (function () {
        function Spinner() {
            this.text = "Loading...";
            this.hasText = false;
            this.large = false;
        }
        Spinner.prototype.attached = function () {
            var spinned = Fabric.Spinner(this.element);
        };
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], Spinner.prototype, "text", void 0);
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Boolean)
        ], Spinner.prototype, "hasText", void 0);
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Boolean)
        ], Spinner.prototype, "large", void 0);
        Spinner = __decorate([
            aurelia_framework_1.customElement('office-spinner'), 
            __metadata('design:paramtypes', [])
        ], Spinner);
        return Spinner;
    })();
    exports.Spinner = Spinner;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNwaW5uZXIvU3Bpbm5lci50cyJdLCJuYW1lcyI6WyJTcGlubmVyIiwiU3Bpbm5lci5jb25zdHJ1Y3RvciIsIlNwaW5uZXIuYXR0YWNoZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFJQTtRQU9JQTtZQUxVQyxTQUFJQSxHQUFVQSxZQUFZQSxDQUFDQTtZQUMzQkEsWUFBT0EsR0FBV0EsS0FBS0EsQ0FBQ0E7WUFDeEJBLFVBQUtBLEdBQVdBLEtBQUtBLENBQUNBO1FBS2hDQSxDQUFDQTtRQUNERCwwQkFBUUEsR0FBUkE7WUFDSUUsSUFBSUEsT0FBT0EsR0FBR0EsTUFBTUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0E7UUFDL0NBLENBQUNBO1FBVkRGO1lBQUNBLDRCQUFRQTs7V0FBQ0EseUJBQUlBLFVBQXVCQTtRQUNyQ0E7WUFBQ0EsNEJBQVFBOztXQUFDQSw0QkFBT0EsVUFBaUJBO1FBQ2xDQTtZQUFDQSw0QkFBUUE7O1dBQUNBLDBCQUFLQSxVQUFpQkE7UUFKcENBO1lBQUNBLGlDQUFhQSxDQUFDQSxnQkFBZ0JBLENBQUNBOztvQkFhL0JBO1FBQURBLGNBQUNBO0lBQURBLENBYkEsQUFhQ0EsSUFBQTtJQVpZLGVBQU8sVUFZbkIsQ0FBQSIsImZpbGUiOiJTcGlubmVyL1NwaW5uZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2N1c3RvbUVsZW1lbnQsIGJpbmRhYmxlLCBpbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCAqIGFzIEZhYnJpYyBmcm9tICcuL1NwaW5uZXJDb21wb25lbnQuanMnO1xuXG4vL0BpbmplY3QoRWxlbWVudClcbkBjdXN0b21FbGVtZW50KCdvZmZpY2Utc3Bpbm5lcicpXG5leHBvcnQgY2xhc3MgU3Bpbm5lciB7XG4gICAgQGJpbmRhYmxlIHRleHQ6c3RyaW5nID0gXCJMb2FkaW5nLi4uXCI7XG4gICAgQGJpbmRhYmxlIGhhc1RleHQ6Ym9vbGVhbiA9IGZhbHNlO1xuICAgIEBiaW5kYWJsZSBsYXJnZTpib29sZWFuID0gZmFsc2U7XG4gICAgXG4gICAgZWxlbWVudDpFbGVtZW50O1xuICAgIGNvbnN0cnVjdG9yKClcbiAgICB7ICAgICAgICAgICAgICAgIFxuICAgIH1cbiAgICBhdHRhY2hlZCgpe1xuICAgICAgICB2YXIgc3Bpbm5lZCA9IEZhYnJpYy5TcGlubmVyKHRoaXMuZWxlbWVudCk7XG4gICAgfVxufVxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=