function Car(model) {
    this.model = model;
    this.fuel = 0;

    /* Расход в литрах на 100 км */
    const FUEL_CONSUMPTION_RATIO = 5;

    this.getRemainingRideDistance = function() {
        return (this.fuel / FUEL_CONSUMPTION_RATIO) * 100;
    };
}

const audi = new Car('A8');
console.log(audi.FUEL_CONSUMPTION_RATIO);

console.log(
    `${
        audi.fuel
    } liters of fuel is enough for ${audi.getRemainingRideDistance()} kilometers of driving.`,
);

audi.fuel = 100;

console.log(
    `${
        audi.fuel
    } liters of fuel is enough for ${audi.getRemainingRideDistance()} kilometers of driving.`,
);
