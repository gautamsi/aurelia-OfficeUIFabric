System.register(['aurelia-framework', './SpinnerComponent.js'], function(exports_1) {
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
            exports_1("Spinner", Spinner);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNwaW5uZXIvU3Bpbm5lci50cyJdLCJuYW1lcyI6WyJTcGlubmVyIiwiU3Bpbm5lci5jb25zdHJ1Y3RvciIsIlNwaW5uZXIuYXR0YWNoZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUlBO2dCQU9JQTtvQkFMVUMsU0FBSUEsR0FBVUEsWUFBWUEsQ0FBQ0E7b0JBQzNCQSxZQUFPQSxHQUFXQSxLQUFLQSxDQUFDQTtvQkFDeEJBLFVBQUtBLEdBQVdBLEtBQUtBLENBQUNBO2dCQUtoQ0EsQ0FBQ0E7Z0JBQ0RELDBCQUFRQSxHQUFSQTtvQkFDSUUsSUFBSUEsT0FBT0EsR0FBR0EsTUFBTUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0E7Z0JBQy9DQSxDQUFDQTtnQkFWREY7b0JBQUNBLDRCQUFRQTs7bUJBQUNBLHlCQUFJQSxVQUF1QkE7Z0JBQ3JDQTtvQkFBQ0EsNEJBQVFBOzttQkFBQ0EsNEJBQU9BLFVBQWlCQTtnQkFDbENBO29CQUFDQSw0QkFBUUE7O21CQUFDQSwwQkFBS0EsVUFBaUJBO2dCQUpwQ0E7b0JBQUNBLGlDQUFhQSxDQUFDQSxnQkFBZ0JBLENBQUNBOzs0QkFhL0JBO2dCQUFEQSxjQUFDQTtZQUFEQSxDQWJBLEFBYUNBLElBQUE7WUFiRCw2QkFhQyxDQUFBIiwiZmlsZSI6IlNwaW5uZXIvU3Bpbm5lci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3VzdG9tRWxlbWVudCwgYmluZGFibGUsIGluamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0ICogYXMgRmFicmljIGZyb20gJy4vU3Bpbm5lckNvbXBvbmVudC5qcyc7XG5cbi8vQGluamVjdChFbGVtZW50KVxuQGN1c3RvbUVsZW1lbnQoJ29mZmljZS1zcGlubmVyJylcbmV4cG9ydCBjbGFzcyBTcGlubmVyIHtcbiAgICBAYmluZGFibGUgdGV4dDpzdHJpbmcgPSBcIkxvYWRpbmcuLi5cIjtcbiAgICBAYmluZGFibGUgaGFzVGV4dDpib29sZWFuID0gZmFsc2U7XG4gICAgQGJpbmRhYmxlIGxhcmdlOmJvb2xlYW4gPSBmYWxzZTtcbiAgICBcbiAgICBlbGVtZW50OkVsZW1lbnQ7XG4gICAgY29uc3RydWN0b3IoKVxuICAgIHsgICAgICAgICAgICAgICAgXG4gICAgfVxuICAgIGF0dGFjaGVkKCl7XG4gICAgICAgIHZhciBzcGlubmVkID0gRmFicmljLlNwaW5uZXIodGhpcy5lbGVtZW50KTtcbiAgICB9XG59XG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
