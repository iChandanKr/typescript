function logger(target: Function) {     // target is function because behind the scene js classes use concept of constructor function
    console.log('Logging...');
}

@logger

class User {
    name: string = 'john';
    age: number = 22;
    constructor() {
        console.log('constructor is called!');
    }

}

const u1 = new User();

export{}