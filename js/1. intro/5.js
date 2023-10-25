function Car(model, fuel = 0) {
    this.model = model;
    this.fuel = fuel;
    this.speed = 0;

    console.log(this);

    const FUEL_CONSUMPTION_RATIO = 5;

    this.getRemainingRideDistance = function() {
        return (this.fuel / FUEL_CONSUMPTION_RATIO) * 100;
    };

    this.getRemainingDriveTime = function() {
        const remainingHoursToRide =
            this.getRemainingRideDistance() / this.speed;

        return remainingHoursToRide;
    };

    this.stop = function() {
        console.log(
            `Drive finished after ${this.getRemainingDriveTime()} hours.`,
        );
        this.speed = 0;
        this.fuel = 0;
    }.bind(this);

    this.ride = function(speed) {
        console.log(`Drive started with speed: ${speed} km/h.`);
        this.speed = speed;
        setTimeout(this.stop, 3000);
    };
}

const audi = new Car('A8');
audi.fuel = 100;

console.log(audi);

audi.ride(100);
