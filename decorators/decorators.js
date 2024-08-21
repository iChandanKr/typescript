function logger(target) {
    console.log('Logging...');
}
var User = /** @class */ (function () {
    function class_1() {
        this.name = 'john';
        this.age = 22;
        console.log('constructor is called!');
    }
    return class_1;
}());
var u1 = new User();
