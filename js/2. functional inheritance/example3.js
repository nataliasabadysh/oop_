function Car(model, initialFuelCapacity = 0) {
    this.model = model;
    this.speed = 0;
    this.setFuelCapacity = setFuelCapacityFunction; // Hosting from down will be taking 

    let fuel = 0;
    const FUEL_CONSUMPTION_RATIO = 5;
    const MAX_FUEL_CAPACITY = 100;

    if (initialFuelCapacity) {
        setFuelCapacityFunction(initialFuelCapacity);
    }

    function setFuelCapacityFunction(newFuelCapacity) {
        if (newFuelCapacity < 0) {
            throw new Error('Fuel capacity can not be less than 0.');
        }
        if (newFuelCapacity > MAX_FUEL_CAPACITY) {
            throw new Error(
                `It is not possible to set current fuel capacity more than ${MAX_FUEL_CAPACITY}.`,
            );
        }

        fuel = newFuelCapacity;
    }

    this.getRemainingRideDistance = function() {
        return (fuel / FUEL_CONSUMPTION_RATIO) * 100;
    };

    this.getRemainingDriveTime = function() {
        const remainingHoursToRide =
            this.getRemainingRideDistance() / this.speed;

        return Number.parseInt(remainingHoursToRide);
    };

    this.stop = function() {
        console.log(
            `Drive finished after ${this.getRemainingDriveTime()} hours.`,
        );
        this.speed = 0;
        setFuelCapacity(0);
    }.bind(this);

    this.ride = function(speed) {
        console.log(`Drive started with speed: ${speed} km/h.`);
        this.speed = speed;
        setTimeout(this.stop, 3000);
    };
}

const audi = new Car('A8');

audi.setFuelCapacity(50);
audi.ride(75);