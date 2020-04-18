class ArrayOfNumbers{
    constructor(public collection: number[]){}

    get(index: number) : number {
        return this.collection[index]
    }
}

class ArrayOfStrings {
    constructor(public collection: string[]){}

    get(index: number) : string {
        return this.collection[index]
    }
}

class ArrayOfAnything<T>{
    constructor(public collection : T[]){}

    get(index: number):T {
        return this.collection[index]
    }
}


const arr = new ArrayOfAnything<string>(['a','b','c']);


//example of generics with functions

function printStrings(arr: string[]): void{
    for(let i =0; i<arr.length; i++){
        console.log(arr[i])
    }
}

function printNumbers(arr: number[]): void{
    for(let i =0; i<arr.length; i++){
        console.log(arr[i])
    }
}

function printAnything<T>(arr: T[]): void{
    for(let i =0; i<arr.length; i++){
        console.log(arr[i])
    }
}

printAnything(['a','b','c']) //TS will decide what type to use, when we use <T> ...hm
printAnything([1,2,3,4])  //TS will decide what type to use, when we use <T> ...hm


//Generic Constraints
class Car {
    print(){
        console.log("I am a car")
    }
}

class House {
    print(){
        console.log('I am a house')
    }
}

interface Printable { 
    print(): void;
}

function printHouseOrCars<T extends Printable>(arr: T[]): void{
    for(let i =0; i<arr.length; i++){
        arr[i].print()
    }
}

printHouseOrCars([new House(), new Car()])
printHouseOrCars<House>([new House(), new House()])
printHouseOrCars<Car>([new Car(), new Car()])