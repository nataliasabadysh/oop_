function Car() {
    this._isEnabled = false;

    this.enable = () => {
        this._isEnabled = true;
    };
    this.disable = () => {
        this._isEnabled = false;
    };
}

function Audi(model) {
    Car.call(this);

    this.model = model;

    this.enable();

    console.log(this._isEnabled);
}

const audi = new Audi('A8');
console.log(audi);
console.log(audi._isEnabled);
