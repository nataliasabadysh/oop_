function Car(model) {
    //public
    this.model = model;
    this.fuel = 0;
    this.speed = 0;

    // privet in this LE
    const FUEL_CONSUMPTION_RATIO = 5;

    this.getRemainingRideDistance = function(){
        return (this.fuel / FUEL_CONSUMPTION_RATIO) * 100;
    }
    this.stop = () => {
        this.speed = 0;
        this.fuel = 0;
        console.log('stop')
    }


    this.ride = (speed) => {
        this.speed = speed;
        console.log('ride')

        // this - возьмется с LE где она выполняется ( или родительский )
        setTimeout(this.stop, 3000)
    }

}

const bmw = new Car('BMW'); 

bmw.ride(300);
// bmw.stop();

console.log(bmw);
