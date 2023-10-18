function Car(model) {
    //public
    this.model = model;
    this.fuel = 0;


    // privet in this LE
    const FUEL_CONSUMPTION_RATIO = 5;

    this.getRemainingRideDistance = function(){
        return (this.fuel / FUEL_CONSUMPTION_RATIO) * 100;
    }
}


const bmw = new Car('BMW'); 
// Car { model: 'BMW', fuel: 0, getRemainingRideDistance: [Function (anonymous)] }

bmw.model = 'Audi'
bmw.fuel = 40

console.log(bmw);
// Car { model: 'Audi', fuel: 40, getRemainingRideDistance: [Function (anonymous)] }