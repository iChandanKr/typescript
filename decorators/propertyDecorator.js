"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function Capitalize(target, propertyKey) {
    // console.log('CAPITALIZE DECORATOR IS CALLED');
    // console.log('PROPERTY KEY',propertyKey);
    // console.log("TARGET",target);
    let value;
    const getter = function () {
        return value.charAt(0).toUpperCase() + value.slice(1);
    };
    const setter = function (newValue) {
        value = newValue.toLocaleLowerCase();
    };
    return {
        set: setter,
        get: getter
    };
}
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
__decorate([
    Capitalize,
    __metadata("design:type", String)
], Product.prototype, "name", void 0);
const p1 = new Product('amsung', 4000);
console.log(p1);
