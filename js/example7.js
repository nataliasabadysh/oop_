function Car(initialFuelCapacity = 0) {
    this.fuel = 0
    this.setFuelCapacity = setFuelCapacity;


    this.setFuelCapacity(initialFuelCapacity);

    function setFuelCapacity(newFuelCapacity) {
        if (newFuelCapacity < 0) {
            throw new Error('Fuel capacity can not be less than 0.');
        }

        this.fuel = newFuelCapacity;
    }

}

const bmw = new Car(); 

bmw.setFuelCapacity(300);

console.log(bmw);
