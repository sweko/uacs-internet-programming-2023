// class design
class Animal{
    legs: number;
    fly: boolean;
    swim: boolean;

    constructor(legs: number, fly: boolean, swim:boolean){
        this.legs = legs;
        this.fly = fly;
        this.swim = swim;
    }

    describe(){
        return `This animal has ${this.legs} and it ${this.fly} fly , also ${this.swim} swim`;
    }
}

class Dog extends Animal{
    play: boolean;

    constructor (swim: boolean,play: boolean){
        super (4,false,swim);
        this.play = play;
    }

    describe(){
        return `This Dog has ${this.legs} and it ${this.fly} fly , also ${this.swim} swim and ${this.play} play`;
    }
}


// class usage
const animals: Animal[] = [];
const eagle = new Animal(2, true, false)
const duck = new Animal(2, true, true);
const labrador = new Dog(true,true);
const bishon = new Dog(false,true);
const elephant = new Animal(4, false, false);

animals.push(eagle, duck, labrador, bishon, elephant);

for (const animal of animals) {
    console.log(animal.describe());
}