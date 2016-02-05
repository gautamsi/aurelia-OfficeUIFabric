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
var OfficeNavBarItem = (function () {
    function OfficeNavBarItem(element) {
        this.element = element;
        this.linkText = '';
        this.icon = '';
        this.hasMenu = false;
        this.right = false;
        this.disabled = false;
    }
    OfficeNavBarItem.prototype.attached = function () {
        this.icon = this.hasMenu && this.icon === '' ? 'chevronDown' : this.icon;
    };
    __decorate([
        aurelia_framework_1.bindable, 
        __metadata('design:type', String)
    ], OfficeNavBarItem.prototype, "linkText", void 0);
    __decorate([
        aurelia_framework_1.bindable, 
        __metadata('design:type', String)
    ], OfficeNavBarItem.prototype, "icon", void 0);
    __decorate([
        aurelia_framework_1.bindable, 
        __metadata('design:type', Boolean)
    ], OfficeNavBarItem.prototype, "hasMenu", void 0);
    __decorate([
        aurelia_framework_1.bindable, 
        __metadata('design:type', Boolean)
    ], OfficeNavBarItem.prototype, "right", void 0);
    __decorate([
        aurelia_framework_1.bindable, 
        __metadata('design:type', Boolean)
    ], OfficeNavBarItem.prototype, "disabled", void 0);
    OfficeNavBarItem = __decorate([
        aurelia_framework_1.inject(Element),
        aurelia_framework_1.customElement('office-navbar-item'), 
        __metadata('design:paramtypes', [Element])
    ], OfficeNavBarItem);
    return OfficeNavBarItem;
})();
exports.OfficeNavBarItem = OfficeNavBarItem;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk5hdkJhci9OYXZCYXJJdGVtLnRzIl0sIm5hbWVzIjpbIk9mZmljZU5hdkJhckl0ZW0iLCJPZmZpY2VOYXZCYXJJdGVtLmNvbnN0cnVjdG9yIiwiT2ZmaWNlTmF2QmFySXRlbS5hdHRhY2hlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsa0NBQThDLG1CQUFtQixDQUFDLENBQUE7QUFFbEU7SUFRSUEsMEJBQW9CQSxPQUFlQTtRQUFmQyxZQUFPQSxHQUFQQSxPQUFPQSxDQUFRQTtRQUx6QkEsYUFBUUEsR0FBVUEsRUFBRUEsQ0FBQ0E7UUFDckJBLFNBQUlBLEdBQVVBLEVBQUVBLENBQUNBO1FBQ2pCQSxZQUFPQSxHQUFTQSxLQUFLQSxDQUFDQTtRQUN0QkEsVUFBS0EsR0FBU0EsS0FBS0EsQ0FBQ0E7UUFDcEJBLGFBQVFBLEdBQVNBLEtBQUtBLENBQUNBO0lBR2pDQSxDQUFDQTtJQUNERCxtQ0FBUUEsR0FBUkE7UUFDSUUsSUFBSUEsQ0FBQ0EsSUFBSUEsR0FBR0EsSUFBSUEsQ0FBQ0EsT0FBT0EsSUFBSUEsSUFBSUEsQ0FBQ0EsSUFBSUEsS0FBR0EsRUFBRUEsR0FBRUEsYUFBYUEsR0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0E7SUFDeEVBLENBQUNBO0lBVkRGO1FBQUNBLDRCQUFRQTs7T0FBQ0Esc0NBQVFBLFVBQWFBO0lBQy9CQTtRQUFDQSw0QkFBUUE7O09BQUNBLGtDQUFJQSxVQUFhQTtJQUMzQkE7UUFBQ0EsNEJBQVFBOztPQUFDQSxxQ0FBT0EsVUFBZUE7SUFDaENBO1FBQUNBLDRCQUFRQTs7T0FBQ0EsbUNBQUtBLFVBQWVBO0lBQzlCQTtRQUFDQSw0QkFBUUE7O09BQUNBLHNDQUFRQSxVQUFlQTtJQVByQ0E7UUFBQ0EsMEJBQU1BLENBQUNBLE9BQU9BLENBQUNBO1FBQ2ZBLGlDQUFhQSxDQUFDQSxvQkFBb0JBLENBQUNBOzt5QkFhbkNBO0lBQURBLHVCQUFDQTtBQUFEQSxDQWRBLEFBY0NBLElBQUE7QUFaWSx3QkFBZ0IsbUJBWTVCLENBQUEiLCJmaWxlIjoiTmF2QmFyL05hdkJhckl0ZW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2N1c3RvbUVsZW1lbnQsIGJpbmRhYmxlLCBpbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcblxuQGluamVjdChFbGVtZW50KVxuQGN1c3RvbUVsZW1lbnQoJ29mZmljZS1uYXZiYXItaXRlbScpXG5leHBvcnQgY2xhc3MgT2ZmaWNlTmF2QmFySXRlbSB7XG4gICAgQGJpbmRhYmxlIGxpbmtUZXh0OnN0cmluZyA9ICcnO1xuICAgIEBiaW5kYWJsZSBpY29uOnN0cmluZyA9ICcnO1xuICAgIEBiaW5kYWJsZSBoYXNNZW51OmJvb2xlYW49ZmFsc2U7XG4gICAgQGJpbmRhYmxlIHJpZ2h0OmJvb2xlYW49ZmFsc2U7XG4gICAgQGJpbmRhYmxlIGRpc2FibGVkOmJvb2xlYW49ZmFsc2U7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OkVsZW1lbnQpe1xuICAgICAgICBcbiAgICB9XG4gICAgYXR0YWNoZWQoKXtcbiAgICAgICAgdGhpcy5pY29uID0gdGhpcy5oYXNNZW51ICYmIHRoaXMuaWNvbj09PScnPyAnY2hldnJvbkRvd24nOnRoaXMuaWNvbjtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
