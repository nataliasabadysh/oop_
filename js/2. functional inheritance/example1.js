
// function constructor start from UpperCase 

function Car(model){
    this.model = model;
    this.fuel = 0;
    
    console.log(model) // A8
}

const audi = new Car('A8'); // Car { model: 'A8', fuel: 0 }
const bmw = new Car('M6'); //Car { model: 'M6', fuel: 0 }

console.log(bmw.fuel) // 0 
console.log(bmw.model) // M6