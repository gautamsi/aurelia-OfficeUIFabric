var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-framework', 'aurelia-fetch-client', 'fetch'], function (require, exports, aurelia_framework_1, aurelia_fetch_client_1) {
    var Users = (function () {
        function Users(http) {
            this.http = http;
            this.heading = 'Github Users';
            this.users = [];
            http.configure(function (config) {
                config
                    .useStandardConfiguration()
                    .withBaseUrl('https://api.github.com/');
            });
        }
        Users.prototype.activate = function () {
            var _this = this;
            return this.http.fetch('users')
                .then(function (response) { return response.json(); })
                .then(function (users) { return _this.users = users; });
        };
        Users = __decorate([
            aurelia_framework_1.autoinject, 
            __metadata('design:paramtypes', [aurelia_fetch_client_1.HttpClient])
        ], Users);
        return Users;
    })();
    exports.Users = Users;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJzLnRzIl0sIm5hbWVzIjpbIlVzZXJzIiwiVXNlcnMuY29uc3RydWN0b3IiLCJVc2Vycy5hY3RpdmF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUlBO1FBS0VBLGVBQW9CQSxJQUFnQkE7WUFBaEJDLFNBQUlBLEdBQUpBLElBQUlBLENBQVlBO1lBSHBDQSxZQUFPQSxHQUFHQSxjQUFjQSxDQUFDQTtZQUN6QkEsVUFBS0EsR0FBR0EsRUFBRUEsQ0FBQ0E7WUFHVEEsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsVUFBQUEsTUFBTUE7Z0JBQ25CQSxNQUFNQTtxQkFDSEEsd0JBQXdCQSxFQUFFQTtxQkFDMUJBLFdBQVdBLENBQUNBLHlCQUF5QkEsQ0FBQ0EsQ0FBQ0E7WUFDNUNBLENBQUNBLENBQUNBLENBQUNBO1FBQ0xBLENBQUNBO1FBRURELHdCQUFRQSxHQUFSQTtZQUFBRSxpQkFJQ0E7WUFIQ0EsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsT0FBT0EsQ0FBQ0E7aUJBQzVCQSxJQUFJQSxDQUFDQSxVQUFBQSxRQUFRQSxJQUFJQSxPQUFBQSxRQUFRQSxDQUFDQSxJQUFJQSxFQUFFQSxFQUFmQSxDQUFlQSxDQUFDQTtpQkFDakNBLElBQUlBLENBQUNBLFVBQUFBLEtBQUtBLElBQUlBLE9BQUFBLEtBQUlBLENBQUNBLEtBQUtBLEdBQUdBLEtBQUtBLEVBQWxCQSxDQUFrQkEsQ0FBQ0EsQ0FBQ0E7UUFDdkNBLENBQUNBO1FBakJIRjtZQUFDQSw4QkFBVUE7O2tCQWtCVkE7UUFBREEsWUFBQ0E7SUFBREEsQ0FsQkEsQUFrQkNBLElBQUE7SUFqQlksYUFBSyxRQWlCakIsQ0FBQSIsImZpbGUiOiJ1c2Vycy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YXV0b2luamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQge0h0dHBDbGllbnR9IGZyb20gJ2F1cmVsaWEtZmV0Y2gtY2xpZW50JztcclxuaW1wb3J0ICdmZXRjaCc7XHJcblxyXG5AYXV0b2luamVjdFxyXG5leHBvcnQgY2xhc3MgVXNlcnMge1xyXG4gIGhlYWRpbmcgPSAnR2l0aHViIFVzZXJzJztcclxuICB1c2VycyA9IFtdO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHtcclxuICAgIGh0dHAuY29uZmlndXJlKGNvbmZpZyA9PiB7XHJcbiAgICAgIGNvbmZpZ1xyXG4gICAgICAgIC51c2VTdGFuZGFyZENvbmZpZ3VyYXRpb24oKVxyXG4gICAgICAgIC53aXRoQmFzZVVybCgnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS8nKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgYWN0aXZhdGUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmZldGNoKCd1c2VycycpXHJcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgLnRoZW4odXNlcnMgPT4gdGhpcy51c2VycyA9IHVzZXJzKTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
