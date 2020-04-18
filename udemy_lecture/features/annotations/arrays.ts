const carMakers = ['ford', 'toyota', 'bmw'];
const dates = [new Date(), new Date()]

const carsByMake: string[][] = [
    ['f150'],
    ['corolla'],
    ['camaro']
]

//Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop()

//Prevent incompatible values
// carMakers.push(100)

carMakers.map((car:string):string => {
    return car.toUpperCase();
})

//Flexible types
const importantDates:(Date|string)[] = [new Date(), '2030-10-10']
importantDates.push('2020-10-10')
importantDates.push(new Date())

//Tuple
const drink = {
    color:'brown',
    carbonated:true,
    sugar: 40
}

//you can make 'type' to reuse -> type alias
type Drink = [string, boolean, number]

const pepsi:Drink = ['brown', true, 40]
const sprit:Drink = ['clear', true, 25]

const carSpecs:[number,number] = [400, 3354]
const carStates = {
    horsepower:400,
    weight:3354
}

//Interfaces + Classes -> really strong code reuse
interface Reportable {
    summary(): string;
}

const oldCivic = {
    name: 'civic',
    year: new Date(),
    broken: true,
    summary():string{
        return `Name:${this.name}`
    }
}

const drinks = {
    color:'brown',
    carbonated:true,
    sugar:40,
    summary():string{
        return `My drink has ${this.sugar} grams of sugar`
    }
}

const printSummary = (item: Reportable) : void => {
    console.log(item.summary())
}

printSummary(oldCivic)
printSummary(drinks)