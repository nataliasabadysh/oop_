function Car(_, initialFuelCapacity = 0) {
    this.fuel = initialFuelCapacity;

    this._isEnabled = false;

    const self = this;

    this.enable = function() {
        // используем внешнюю переменную вместо this
        self._isEnabled = true;
    };
    this.disable = function() {
        self._isEnabled = false;
    };
    
    this.setEnabled = function () {
        self._isEnabled = true;
    }
    
    this.getEnabled = function () {
        return self._isEnabled;
    }
}

function Audi(model) {
    Car.apply(this, arguments);

    this.model = model;

    /* Сохраняем метод enable родительского класса в переменную. */
    const parentEnable = this.enable;

    /* Сохраняем новый метод enable для класса-потомка. */
    this.enable = function() {
        /* Теперь можно вызывать метод enable родителя внутри нового метода enable потомка. */
        parentEnable();
        this.ride();
    };

    this.ride = () => {
        console.log(`${Audi.name} ${this.model}: drive started. ${this.getEnabled()}`);
    };
}

const audi = new Audi('A8', 75);
audi.setEnabled();
console.log(audi._isEnabled);
