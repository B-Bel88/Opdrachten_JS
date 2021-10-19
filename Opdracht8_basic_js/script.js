// const totalAmount = function (amount){
//     const height = amount;
//         if (height > 100){
//             return 'true';
//         }
//         return 'false';
//     };

// const height = totalAmount (120);
// console.log(height);

/* Brenda the bouncer bot*/

// const brenda = function (minAge, maxCapacity){
//     const age = minAge; 
//     const cap = maxCapacity;
//         if (age < 18){
//             return'this club is for adults only';
//         }
//         if (age >=18 && cap <=100){
//             return 'come on in';
//         }
//         if (age >=18 && cap >100){
//             return 'come back later we are full';
//         }
//         };

// const b = brenda(19, 110);
// console.log(b);

/* average calcutalion*/

const averageNumbers = function (numbers){
    const average = numbers.reduce((total, n) => total + n) / numbers.length;
        return average;
    };


const num =[1,2,1];
averageNumbers(num);




