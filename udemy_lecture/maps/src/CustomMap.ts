import 'googlemaps';  // 이걸 안하면 google namespace 가 안떠...

// Instructions to every other class on how they can be an argument to 'addMarker'
// this interface & implementing it is a killer feature of Typescript! so they say..!
export interface Mappable {
    location:{
        lat:number;
        lng:number;
    }
    markerContent():string;
    color:string;
}


export class CustomMap {
    private googleMap: google.maps.Map;

    constructor(divId:string){
        this.googleMap = new google.maps.Map(document.getElementById(divId), {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0
            }
        })
    }

    addMarker(mappable: Mappable):void{
        const marker = new google.maps.Marker({
            map:this.googleMap,
            position:{
                lat:mappable.location.lat,
                lng:mappable.location.lng
            }
        })
        
        marker.addListener('click', () => {
            const infoWindow = new google.maps.InfoWindow({
                content:mappable.markerContent()
            })

            infoWindow.open(this.googleMap, marker)
        })

    }

}