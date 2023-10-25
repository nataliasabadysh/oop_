function Car() {
    let isEnabled = false;
    
    this.enable = () => {
        isEnabled = true;
    };
    this.disable = () => {
        isEnabled = false;
    };
    this.getIsEnabled = () => {
        return isEnabled;
    };
}

function Audi(model) {
    Car.call(this);

    this.model = model;

    this.enable();

    /* ошибка, переменная не определена! */
    // console.log(isEnabled);
}

const audi = new Audi('A8');
console.log(audi.getIsEnabled());
