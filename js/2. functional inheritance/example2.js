function Car(model, fuel = 0) {
    this.speed = 0;

    this.stop = () => {
        console.log(`Drive finished after 10 hours.`);
    }

    this.ride = function(speed) {
        console.log(`Drive started with speed: ${speed} km/h.`);
        setTimeout(()=> this.stop.call(this), 3000);
        // setTimeout(this.stop.bind(this), 2000); // bind
    };
}
const audi = new Car('A8', 25);
audi.ride(100);
