/**
 * Наследование – это создание новых «классов» на основе существующих.
 */

function Car() {  // Audi context
    /* Car[[LexicalEnvironment]] = { isEnabled : false } */
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
    /* Отнаследовать */
    Car.call(this);

    this.model = model;
    this.speed = 200;
}

const audi = new Audi('A8');
// console.log(audi.getIsEnabled());
audi.enable();
// console.log(audi.getIsEnabled());
audi.disable();
// console.log(audi.getIsEnabled());
