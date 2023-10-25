class Bird {
    fly() {
        console.log("I can fly");
    }
}

class Ostrich extends Bird { // LSP 
    fly() {
        throw new Error("I can't fly");
    }
}

function makeBirdFly(bird) {
    bird.fly();
}

const myBird = new Bird();
makeBirdFly(myBird); // Outputs: "I can fly"

const myOstrich = new Ostrich();
makeBirdFly(myOstrich); // Error: "I can't fly"
