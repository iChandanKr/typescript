
function sealed(a: Function) {
    console.log('decorator is called');
    console.log(a)
    // Object.seal(constructor);
    // Object.seal(constructor.prototype);
}


@sealed
class BugReport {
    type = "report";
    title: string;

    constructor(t: string) {
        this.title = t;
        console.log(this.title)
    }
}

// const b = new BugReport('hey');

export{}