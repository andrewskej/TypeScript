import faker from 'faker'
import { Mappable } from './CustomMap'

//this interface & implementing it is a killer feature of Typescript! so they say..!
export class Company implements Mappable {
    companyName: string;
    catchPhrase: string;
    location:{
        lat:number;
        lng:number;
    }
    color:string;

    constructor(){
        this.companyName = faker.company.companyName()
        this.catchPhrase = faker.company.catchPhrase()
        this.location = {
            lat:parseFloat(faker.address.latitude()),
            lng:parseFloat(faker.address.longitude())
        }
    }

    markerContent():string{
        return `
            <div>
                <h1>company name:${this.companyName}</h1>
                <h3>catchphrase: ${this.catchPhrase}</h3>
            </div>
        `;
    }


}