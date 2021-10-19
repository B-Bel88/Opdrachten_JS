/*function declaration */

// function numbers(number1, number2) {
//     const total1 = number1 * number1;
//     const total2 = number2 * number2;
//     const totalAmount = total1 + total2;
//     return totalAmount * 5;
// }


// console.log(numbers(1,2)); 

/* function expression */
// const numbers = function (number1, number2) {
//     const total1 = number1 * number1;
//     const total2 = number2 * number2;
//     const totalAmount = total1 + total2;
//     return totalAmount * 5;
// };


// console.log(numbers(1,2)); 

/* arrow function */
const numbers =  (number1, number2) => {
    const total1 = number1 * number1;
    const total2 = number2 * number2;
    const totalAmount = total1 + total2;
    return totalAmount * 5;
};

console.log(numbers(1,2)); 