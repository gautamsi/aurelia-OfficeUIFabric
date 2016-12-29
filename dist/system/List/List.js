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
    var OfficeList, ListType;
    return {
        setters:[
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            }],
        execute: function() {
            OfficeList = (function () {
                function OfficeList() {
                    this.type = ListType[ListType.list];
                }
                __decorate([
                    aurelia_framework_1.bindable, 
                    __metadata('design:type', String)
                ], OfficeList.prototype, "type", void 0);
                OfficeList = __decorate([
                    aurelia_framework_1.customElement('office-list'), 
                    __metadata('design:paramtypes', [])
                ], OfficeList);
                return OfficeList;
            })();
            exports_1("OfficeList", OfficeList);
            (function (ListType) {
                ListType[ListType["list"] = 0] = "list";
                ListType[ListType["grid"] = 1] = "grid";
            })(ListType || (ListType = {}));
            exports_1("ListType", ListType);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkxpc3QvTGlzdC50cyJdLCJuYW1lcyI6WyJPZmZpY2VMaXN0IiwiT2ZmaWNlTGlzdC5jb25zdHJ1Y3RvciIsIkxpc3RUeXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFHQTtnQkFBQUE7b0JBRWNDLFNBQUlBLEdBQVdBLFFBQVFBLENBQUNBLFFBQVFBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO2dCQUNyREEsQ0FBQ0E7Z0JBREdEO29CQUFDQSw0QkFBUUE7O21CQUFDQSw0QkFBSUEsVUFBbUNBO2dCQUZyREE7b0JBQUNBLGlDQUFhQSxDQUFDQSxhQUFhQSxDQUFDQTs7K0JBRzVCQTtnQkFBREEsaUJBQUNBO1lBQURBLENBSEEsQUFHQ0EsSUFBQTtZQUhELG1DQUdDLENBQUE7WUFFRCxXQUFZLFFBQVE7Z0JBQ2hCRSx1Q0FBSUEsQ0FBQUE7Z0JBQ0pBLHVDQUFJQSxDQUFBQTtZQUNSQSxDQUFDQSxFQUhXLFFBQVEsS0FBUixRQUFRLFFBR25COzRDQUFBIiwiZmlsZSI6Ikxpc3QvTGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3VzdG9tRWxlbWVudCwgYmluZGFibGUsIGluamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5cclxuLy9AaW5qZWN0KEVsZW1lbnQpXHJcbkBjdXN0b21FbGVtZW50KCdvZmZpY2UtbGlzdCcpXHJcbmV4cG9ydCBjbGFzcyBPZmZpY2VMaXN0IHtcclxuICAgIEBiaW5kYWJsZSB0eXBlOiBzdHJpbmcgPSBMaXN0VHlwZVtMaXN0VHlwZS5saXN0XTtcclxufVxyXG5cclxuZXhwb3J0IGVudW0gTGlzdFR5cGUge1xyXG4gICAgbGlzdCxcclxuICAgIGdyaWQgICAgXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
