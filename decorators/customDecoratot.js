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
Object.defineProperty(exports, "__esModule", { value: true });
function Template(template, elementId) {
    return function (target) {
        console.log('logging');
        const user1 = new target();
        const container = document.getElementById(elementId);
        if (container) {
            container.innerHTML = template;
            const h1 = container.querySelector('h1');
            if (h1) {
                h1.innerText = 'hey ' + user1.name + '!';
            }
        }
    };
}
let User = class User {
    constructor() {
        this.name = 'Chandan';
        this.age = 22;
        console.log('constructor is called!');
    }
};
User = __decorate([
    Template('<h1>Dynamic heading...</h1>', 'container'),
    __metadata("design:paramtypes", [])
], User);
