function Car(model, fuel = 0) {
    this.model = model;
    this.fuel = fuel;
    this.speed = 0;

    const FUEL_CONSUMPTION_RATIO = 5;

    this.getRemainingRideDistance = function() {
        return (this.fuel / FUEL_CONSUMPTION_RATIO) * 100;
    };

    this.getRemainingDriveTime = function() {
        const remainingHoursToRide =
            this.getRemainingRideDistance() / this.speed;

        return remainingHoursToRide;
    };

    this.stop = () => {
        // console.log(this);
        console.log(
            `Drive finished after ${this.getRemainingDriveTime()} hours.`,
        );
        this.speed = 0;
        this.fuel = 0;
    }/*.bind(this)*/; // 1 variant

    this.ride = function(speed) {
        console.log(`Drive started with speed: ${speed} km/h.`);
        this.speed = speed;
        setTimeout(this.stop, 3000);
    };
}

const audi = new Car('A8', 25);

// console.log(audi);

audi.ride(100);
