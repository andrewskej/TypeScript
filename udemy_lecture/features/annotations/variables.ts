let apples: number = 5;
let speed: string = 'fast'
let hasName: boolean = true;

let nothingMuch: null = null;
let now: Date = new Date()

//Array
let colors: string[] = ['red','green','blue']
let myNumbers: number[] = [1,2,3]
let truths: boolean[] = [true, false, true]

//Classes
// class Car {

// }
// let car: Car = new Car() //type of let car is class Car

//Object literal
let point: {x:number; y:number} = {
    x:10,
    y:20
}

//Function     //innotation until here//
const logNumber: (i:number) => void = (i:number) => {
    console.log(i)
}

//when to use annotations

//1) Function that returns the 'any' type
//avoid variables with 'any' at all costs...if you use 'Type'script
const json = '{"x":10,"y":20}';
const coordinates:{x:number; y:number} = JSON.parse(json);  //add type annotation to avoid 'any' type
console.log(coordinates) //{x:10, y:20}

//2) when we declare a variable on one line, and initialize it later
let words = ['red', 'green', 'blue']
let foundWord:boolean;

for(let i=0; i<words.length; i++){
    if(words[i]==='green'){
        foundWord = true;
    }
}

//3) Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12]
let numberAboveZero:boolean | number = false;

for(let i = 0; i<numbers.length; i++){
    if(numbers[i]>0){
        numberAboveZero = numbers[i];
    }
}



//
const add = (a:number, b:number): number => {
    return a + b
}

const substract = (a:number, b:number): number => {
    return a - b;
}

function divide(a:number, b:number): number {
    return a / b;
}

const multiply = function(a:number, b:number): number{
    return a * b
}

const logger = (message: string): void => {
    console.log(message)
}

const throwError = (message: string): never => {
    throw new Error(message)
}

const todaysWeather = {
    date:new Date(),
    weather: 'sunny'
}

const logWeather = ({date,weather}: {date:Date, weather:string}) : void => {
    console.log(date)
    console.log(weather)
}


logWeather(todaysWeather)


const profile = {
    name: 'alex',
    age:20,
    coords: {
        lat:0,
        long:15
    },
    setAge(age:number):void{
        this.age = age;
    }
}

//for destructuring, you should type it like below:
const {age}:{age:number} = profile;
const {coords:{lat, long}}:{coords:{lat:number; long:number}} = profile;


