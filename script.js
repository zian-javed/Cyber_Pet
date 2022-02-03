class Pet {
    constructor(name){
        this._name = name;
        this._hunger = 100;
        this._thirst = 100;
        this._happy = 50;
    }
    
    get name(){
        return this._name;
    }
    get hunger(){
        return this._hunger;
    }
    get thirst(){
        return this._thirst;
    }
    increaseHunger(){
        this._hunger--;
    }
    increaseThirst(){
        this._thirst--;
    }
    increaseHappy(){
        this._happy++;
    }
    decreaseHappy(){
        this._happy--;
    }
}


class Cat extends Pet {
    constructor(name, lovesChicken){
        super(name);
        this._lovesChicken = lovesChicken;
 
    }
    get lovesChicken(){
        return this._lovesChicken;
    }

}

class Dog extends Pet {
    constructor(name, lovesWalks){
        super(name);
        this._lovesWalks = lovesWalks;
 
    }
    get lovesWalks(){
        return this._lovesWalks;
    }

}

const jimmy = new Cat ("Zian", true)
const bobby = new Dog ("Javed", true)

console.log(jimmy)
console.log(bobby)










