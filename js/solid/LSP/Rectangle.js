class Rectangle {
    constructor() {
        this._width = 0;
        this._height = 0;
    }

    setWidth(width) {
        this._width = width;
    }

    setHeight(height) {
        this._height = height;
    }

    get width() {
        return this._width;
    }

    get height() {
        return this._height;
    }

    area() {
        return this._width * this._height;
    }
}

class Square extends Rectangle {
    setWidth(width) {
        this._width = width;
        this._height = width;
    }

    setHeight(height) {
        this._width = height;
        this._height = height;
    }
}

// Usage
const rect = new Rectangle();
rect.setWidth(5);
rect.setHeight(4);
console.log(rect.area());  // Outputs: 20

const sq = new Square();
sq.setWidth(5);
console.log(sq.area());  // Outputs: 25
