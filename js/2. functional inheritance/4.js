function Car(_, initialFuelCapacity = 0) {
    this.fuel = initialFuelCapacity;

    this._isEnabled = false;

    this.enable = () => {
        this._isEnabled = true;
    };
    this.disable = () => {
        this._isEnabled = false;
    };
}

function Audi(model) {
    Car.apply(this, arguments);

    this.model = model;

    console.log(this._isEnabled);
    console.log(this.fuel);
}

const audi = new Audi('A8');
console.log(audi);
