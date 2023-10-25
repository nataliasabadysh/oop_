// Императивный подход
/*function double(array) { // Что сделать, что бы каждый елемент массива умножился на 2
    const result = [];
    
    for (let i = 0; i < array.length; i++) {
        result.push(array[i] * 2);
    }
    
    return result;
}*/

// Декларативный подход
function double (array) {  // Как сделать, что бы каждый елемент массива умножился на 2
    return array.map(item => item * 2)
}

console.log(double([1,2,3]));