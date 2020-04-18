class Vehicle {
    constructor(public color: string){
        this.color = color;
    }

    protected honk():void{
        console.log('beep')
    }
}

const vehicle = new Vehicle('orange')

console.log(vehicle.color)

// inheritance by extends
class Car extends Vehicle {

    constructor(public wheels:number, color:string){
        super(color)    
    }

    private drive():void{
        console.log('vrooom')
    }

    startDrivingProcess():void{
        this.drive()
        this.honk()
    }
}

const car1 = new Car(4, 'red')
car1.startDrivingProcess()
console.log(car1)

//public: this method can be called any where, any time
//private: this method can only be called by other methods in 'this' class
//protected: this method can be called by other methods in 'this' class, or by other methods in child classes

