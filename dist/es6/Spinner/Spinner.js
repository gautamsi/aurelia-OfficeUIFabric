var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { customElement, bindable } from 'aurelia-framework';
import * as Fabric from './SpinnerComponent';
export let Spinner = class {
    constructor() {
        this.showText = false;
        this.size = false;
        this.defaultText = "Loading...";
    }
    attached() {
        var spinned = Fabric.Spinner(this.$spinner);
        this.text = this.text || this.defaultText;
    }
};
__decorate([
    bindable, 
    __metadata('design:type', String)
], Spinner.prototype, "text", void 0);
__decorate([
    bindable, 
    __metadata('design:type', Boolean)
], Spinner.prototype, "showText", void 0);
__decorate([
    bindable, 
    __metadata('design:type', Boolean)
], Spinner.prototype, "size", void 0);
Spinner = __decorate([
    customElement('office-spinner'), 
    __metadata('design:paramtypes', [])
], Spinner);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNwaW5uZXIvU3Bpbm5lci50cyJdLCJuYW1lcyI6WyJTcGlubmVyIiwiU3Bpbm5lci5jb25zdHJ1Y3RvciIsIlNwaW5uZXIuYXR0YWNoZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztPQUFPLEVBQUMsYUFBYSxFQUFFLFFBQVEsRUFBUyxNQUFNLG1CQUFtQjtPQUMxRCxLQUFLLE1BQU0sTUFBTSxvQkFBb0I7QUFHNUM7SUFRSUE7UUFMVUMsYUFBUUEsR0FBV0EsS0FBS0EsQ0FBQ0E7UUFDekJBLFNBQUlBLEdBQVdBLEtBQUtBLENBQUNBO1FBRS9CQSxnQkFBV0EsR0FBVUEsWUFBWUEsQ0FBQ0E7SUFJbENBLENBQUNBO0lBQ0RELFFBQVFBO1FBQ0pFLElBQUlBLE9BQU9BLEdBQUdBLE1BQU1BLENBQUNBLE9BQU9BLENBQUNBLElBQUlBLENBQUNBLFFBQVFBLENBQUNBLENBQUNBO1FBQzVDQSxJQUFJQSxDQUFDQSxJQUFJQSxHQUFHQSxJQUFJQSxDQUFDQSxJQUFJQSxJQUFJQSxJQUFJQSxDQUFDQSxXQUFXQSxDQUFDQTtJQUM5Q0EsQ0FBQ0E7QUFDTEYsQ0FBQ0E7QUFiRztJQUFDLFFBQVE7O0dBQUMseUJBQUksVUFBUTtBQUN0QjtJQUFDLFFBQVE7O0dBQUMsNkJBQVEsVUFBaUI7QUFDbkM7SUFBQyxRQUFROztHQUFDLHlCQUFJLFVBQWlCO0FBSm5DO0lBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDOztZQWUvQjtBQUFBIiwiZmlsZSI6IlNwaW5uZXIvU3Bpbm5lci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3VzdG9tRWxlbWVudCwgYmluZGFibGUsIGluamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQgKiBhcyBGYWJyaWMgZnJvbSAnLi9TcGlubmVyQ29tcG9uZW50JztcclxuXHJcbi8vQGluamVjdChFbGVtZW50KVxyXG5AY3VzdG9tRWxlbWVudCgnb2ZmaWNlLXNwaW5uZXInKVxyXG5leHBvcnQgY2xhc3MgU3Bpbm5lciB7XHJcbiAgICBAYmluZGFibGUgdGV4dDpzdHJpbmc7XHJcbiAgICBAYmluZGFibGUgc2hvd1RleHQ6Ym9vbGVhbiA9IGZhbHNlO1xyXG4gICAgQGJpbmRhYmxlIHNpemU6Ym9vbGVhbiA9IGZhbHNlO1xyXG4gICAgXHJcbiAgICBkZWZhdWx0VGV4dDpzdHJpbmcgPSBcIkxvYWRpbmcuLi5cIjtcclxuICAgICRzcGlubmVyOkVsZW1lbnQ7XHJcbiAgICBjb25zdHJ1Y3RvcigpXHJcbiAgICB7ICAgICAgICAgICAgICAgIFxyXG4gICAgfVxyXG4gICAgYXR0YWNoZWQoKXtcclxuICAgICAgICB2YXIgc3Bpbm5lZCA9IEZhYnJpYy5TcGlubmVyKHRoaXMuJHNwaW5uZXIpO1xyXG4gICAgICAgIHRoaXMudGV4dCA9IHRoaXMudGV4dCB8fCB0aGlzLmRlZmF1bHRUZXh0O1xyXG4gICAgfVxyXG59XHJcblxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
