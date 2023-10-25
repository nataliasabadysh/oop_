function Car(model, initialFuelCapacity = 0) {
    this.model = model;
    this.speed = 0;
    this.fuelCapacity = fuelCapacity;

    let fuel = 0;
    const FUEL_CONSUMPTION_RATIO = 5;
    const MAX_FUEL_CAPACITY = 100;

    this.fuelCapacity(initialFuelCapacity);

    /* Функция в виде геттера/сеттера. */
    function fuelCapacity(newFuelCapacity) {
        /* Если вызов был произведён без аргумента, то ф-ция работает как геттер. */
        if (!newFuelCapacity) {
            return fuel;
        }

        /* Иначе режим сеттера. */
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
        fuelCapacity(0);
    }.bind(this);

    this.ride = function(speed) {
        console.log(`Drive started with speed: ${speed} km/h.`);
        this.speed = speed;
        setTimeout(this.stop, 3000);
    };
}

const audi = new Car('A8');

console.log(audi.fuelCapacity());
audi.fuelCapacity(50);
console.log(audi.fuelCapacity());
audi.ride(75);

setTimeout(() => {
    console.log(audi.fuelCapacity());
}, 4000);
