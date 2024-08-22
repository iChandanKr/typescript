

function Capitalize(target: any, propertyKey: string):any {
    // console.log('CAPITALIZE DECORATOR IS CALLED');
    // console.log('PROPERTY KEY',propertyKey);
    // console.log("TARGET",target);
    let value: string;
    const getter = function () {
        return value.charAt(0).toUpperCase() + value.slice(1);
    }
    const setter = function(newValue:string){
        value = newValue.toLocaleLowerCase();
    }

    return {
        set:setter,
        get:getter
    }
}

class Product {
    @Capitalize
    name: string;
    price: number;
    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

}

const p1 = new Product('amsung', 4000)
console.log(p1)