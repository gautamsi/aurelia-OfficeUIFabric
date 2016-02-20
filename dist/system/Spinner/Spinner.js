System.register(['aurelia-framework', './SpinnerComponent'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var aurelia_framework_1, Fabric;
    var Spinner;
    return {
        setters:[
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (Fabric_1) {
                Fabric = Fabric_1;
            }],
        execute: function() {
            Spinner = (function () {
                function Spinner() {
                    this.showText = false;
                    this.size = false;
                    this.defaultText = "Loading...";
                }
                Spinner.prototype.attached = function () {
                    var spinned = Fabric.Spinner(this.$spinner);
                    this.text = this.text || this.defaultText;
                };
                __decorate([
                    aurelia_framework_1.bindable, 
                    __metadata('design:type', String)
                ], Spinner.prototype, "text", void 0);
                __decorate([
                    aurelia_framework_1.bindable, 
                    __metadata('design:type', Boolean)
                ], Spinner.prototype, "showText", void 0);
                __decorate([
                    aurelia_framework_1.bindable, 
                    __metadata('design:type', Boolean)
                ], Spinner.prototype, "size", void 0);
                Spinner = __decorate([
                    aurelia_framework_1.customElement('office-spinner'), 
                    __metadata('design:paramtypes', [])
                ], Spinner);
                return Spinner;
            })();
            exports_1("Spinner", Spinner);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNwaW5uZXIvU3Bpbm5lci50cyJdLCJuYW1lcyI6WyJTcGlubmVyIiwiU3Bpbm5lci5jb25zdHJ1Y3RvciIsIlNwaW5uZXIuYXR0YWNoZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUlBO2dCQVFJQTtvQkFMVUMsYUFBUUEsR0FBV0EsS0FBS0EsQ0FBQ0E7b0JBQ3pCQSxTQUFJQSxHQUFXQSxLQUFLQSxDQUFDQTtvQkFFL0JBLGdCQUFXQSxHQUFVQSxZQUFZQSxDQUFDQTtnQkFJbENBLENBQUNBO2dCQUNERCwwQkFBUUEsR0FBUkE7b0JBQ0lFLElBQUlBLE9BQU9BLEdBQUdBLE1BQU1BLENBQUNBLE9BQU9BLENBQUNBLElBQUlBLENBQUNBLFFBQVFBLENBQUNBLENBQUNBO29CQUM1Q0EsSUFBSUEsQ0FBQ0EsSUFBSUEsR0FBR0EsSUFBSUEsQ0FBQ0EsSUFBSUEsSUFBSUEsSUFBSUEsQ0FBQ0EsV0FBV0EsQ0FBQ0E7Z0JBQzlDQSxDQUFDQTtnQkFaREY7b0JBQUNBLDRCQUFRQTs7bUJBQUNBLHlCQUFJQSxVQUFRQTtnQkFDdEJBO29CQUFDQSw0QkFBUUE7O21CQUFDQSw2QkFBUUEsVUFBaUJBO2dCQUNuQ0E7b0JBQUNBLDRCQUFRQTs7bUJBQUNBLHlCQUFJQSxVQUFpQkE7Z0JBSm5DQTtvQkFBQ0EsaUNBQWFBLENBQUNBLGdCQUFnQkEsQ0FBQ0E7OzRCQWUvQkE7Z0JBQURBLGNBQUNBO1lBQURBLENBZkEsQUFlQ0EsSUFBQTtZQWZELDZCQWVDLENBQUEiLCJmaWxlIjoiU3Bpbm5lci9TcGlubmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjdXN0b21FbGVtZW50LCBiaW5kYWJsZSwgaW5qZWN0fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcbmltcG9ydCAqIGFzIEZhYnJpYyBmcm9tICcuL1NwaW5uZXJDb21wb25lbnQnO1xyXG5cclxuLy9AaW5qZWN0KEVsZW1lbnQpXHJcbkBjdXN0b21FbGVtZW50KCdvZmZpY2Utc3Bpbm5lcicpXHJcbmV4cG9ydCBjbGFzcyBTcGlubmVyIHtcclxuICAgIEBiaW5kYWJsZSB0ZXh0OnN0cmluZztcclxuICAgIEBiaW5kYWJsZSBzaG93VGV4dDpib29sZWFuID0gZmFsc2U7XHJcbiAgICBAYmluZGFibGUgc2l6ZTpib29sZWFuID0gZmFsc2U7XHJcbiAgICBcclxuICAgIGRlZmF1bHRUZXh0OnN0cmluZyA9IFwiTG9hZGluZy4uLlwiO1xyXG4gICAgJHNwaW5uZXI6RWxlbWVudDtcclxuICAgIGNvbnN0cnVjdG9yKClcclxuICAgIHsgICAgICAgICAgICAgICAgXHJcbiAgICB9XHJcbiAgICBhdHRhY2hlZCgpe1xyXG4gICAgICAgIHZhciBzcGlubmVkID0gRmFicmljLlNwaW5uZXIodGhpcy4kc3Bpbm5lcik7XHJcbiAgICAgICAgdGhpcy50ZXh0ID0gdGhpcy50ZXh0IHx8IHRoaXMuZGVmYXVsdFRleHQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
