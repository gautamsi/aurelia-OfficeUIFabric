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
import * as Fabric from './SpinnerComponent.js';
export let Spinner = class {
    constructor() {
        this.text = "Loading...";
        this.hasText = false;
        this.large = false;
    }
    attached() {
        var spinned = Fabric.Spinner(this.element);
    }
};
__decorate([
    bindable, 
    __metadata('design:type', String)
], Spinner.prototype, "text", void 0);
__decorate([
    bindable, 
    __metadata('design:type', Boolean)
], Spinner.prototype, "hasText", void 0);
__decorate([
    bindable, 
    __metadata('design:type', Boolean)
], Spinner.prototype, "large", void 0);
Spinner = __decorate([
    customElement('office-spinner'), 
    __metadata('design:paramtypes', [])
], Spinner);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNwaW5uZXIvU3Bpbm5lci50cyJdLCJuYW1lcyI6WyJTcGlubmVyIiwiU3Bpbm5lci5jb25zdHJ1Y3RvciIsIlNwaW5uZXIuYXR0YWNoZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztPQUFPLEVBQUMsYUFBYSxFQUFFLFFBQVEsRUFBUyxNQUFNLG1CQUFtQjtPQUMxRCxLQUFLLE1BQU0sTUFBTSx1QkFBdUI7QUFHL0M7SUFPSUE7UUFMVUMsU0FBSUEsR0FBVUEsWUFBWUEsQ0FBQ0E7UUFDM0JBLFlBQU9BLEdBQVdBLEtBQUtBLENBQUNBO1FBQ3hCQSxVQUFLQSxHQUFXQSxLQUFLQSxDQUFDQTtJQUtoQ0EsQ0FBQ0E7SUFDREQsUUFBUUE7UUFDSkUsSUFBSUEsT0FBT0EsR0FBR0EsTUFBTUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0E7SUFDL0NBLENBQUNBO0FBQ0xGLENBQUNBO0FBWEc7SUFBQyxRQUFROztHQUFDLHlCQUFJLFVBQXVCO0FBQ3JDO0lBQUMsUUFBUTs7R0FBQyw0QkFBTyxVQUFpQjtBQUNsQztJQUFDLFFBQVE7O0dBQUMsMEJBQUssVUFBaUI7QUFKcEM7SUFBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUM7O1lBYS9CO0FBQUEiLCJmaWxlIjoiU3Bpbm5lci9TcGlubmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjdXN0b21FbGVtZW50LCBiaW5kYWJsZSwgaW5qZWN0fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5pbXBvcnQgKiBhcyBGYWJyaWMgZnJvbSAnLi9TcGlubmVyQ29tcG9uZW50LmpzJztcblxuLy9AaW5qZWN0KEVsZW1lbnQpXG5AY3VzdG9tRWxlbWVudCgnb2ZmaWNlLXNwaW5uZXInKVxuZXhwb3J0IGNsYXNzIFNwaW5uZXIge1xuICAgIEBiaW5kYWJsZSB0ZXh0OnN0cmluZyA9IFwiTG9hZGluZy4uLlwiO1xuICAgIEBiaW5kYWJsZSBoYXNUZXh0OmJvb2xlYW4gPSBmYWxzZTtcbiAgICBAYmluZGFibGUgbGFyZ2U6Ym9vbGVhbiA9IGZhbHNlO1xuICAgIFxuICAgIGVsZW1lbnQ6RWxlbWVudDtcbiAgICBjb25zdHJ1Y3RvcigpXG4gICAgeyAgICAgICAgICAgICAgICBcbiAgICB9XG4gICAgYXR0YWNoZWQoKXtcbiAgICAgICAgdmFyIHNwaW5uZWQgPSBGYWJyaWMuU3Bpbm5lcih0aGlzLmVsZW1lbnQpO1xuICAgIH1cbn1cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
