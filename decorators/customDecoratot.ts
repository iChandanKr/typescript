function Template(template:string, elementId:string){
    return function(target:any){
        console.log('logging')
        const user1 = new target();
        const container = document.getElementById(elementId)
        if(container){
            container.innerHTML = template;
            const h1 = container.querySelector('h1');
            if(h1){
                h1.innerText = 'hey '+user1.name+'!'
            }
        }
    }
}

@Template('<h1>Dynamic heading...</h1>','container')
class User {
    name: string = 'Chandan';
    age: number = 22;
    constructor() {
        console.log('constructor is called!');
    }

}

// const u1 = new User();
export{}
