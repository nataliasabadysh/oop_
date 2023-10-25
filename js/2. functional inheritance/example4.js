function Car(model, fuel = 0) {
    this.model = model;
    this.fuel = fuel;
    this.speed = 0;

    this.stop = () => {
        console.log(`Drive finished after 10 hours.`);
    }/*.bind(this)*/; // 1 variant


    const self = this; // 3 variant

    this.ride = function(speed) {
        console.log(`Drive started with speed: ${speed} km/h.`);
        // setTimeout(this.stop, 3000);

        // setTimeout(this.stop.call(this), 3000); // 2 variant

        setTimeout(self.stop, 3000); // 3 variant
    };
}

const audi = new Car('A8', 25);

// console.log(audi);
audi.ride(100);

//