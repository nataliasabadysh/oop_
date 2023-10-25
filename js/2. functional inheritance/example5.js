function Car(model, initialFuelCapacity = 0) {
    this.model = model;
    this.speed = 0;
    this.setFuelCapacity = setFuelCapacity;

    let fuel = null;
    const FUEL_CONSUMPTION_RATIO = 5;
    const MAX_FUEL_CAPACITY = 100;

    this.setFuelCapacity(initialFuelCapacity);

    /* Сеттер — функция, которая устанавливает нужное значение. */
    /* В данном случае — приватное. */
    function setFuelCapacity(newFuelCapacity) {
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

    /* Геттер — функция, которая возвращает нужное значение. */
    /* В данном случае — приватное свойство fuel. */
    this.getFuelCapacity = () => fuel;

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

console.log(audi.getFuelCapacity());
audi.setFuelCapacity(50);
console.log(audi.getFuelCapacity());
audi.ride(75);

setTimeout(() => {
    console.log(audi.getFuelCapacity());
}, 4000);