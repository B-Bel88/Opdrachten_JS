// const minAgeCheck = function (theAge){
//     console.log('Checking age input!')
//     let result = theAge;
    
//     if (theAge >= 18){
//         result = true;
//     }
//     if (theAge < 18){
//         result = false;
//     }
//     console.log(result);    
//     return result;
// };

// const ageverification = function (theAge){
//     const age = minAgeCheck(theAge);
//     console.log('Verifying your age one moment please');
//     const result = theAge;

//     if (theAge == true){
//         return 'Hi Kiddo';
//     }
//     if (theAge === false){
//         return 'come on in';
//     }
// };

// console.log(ageverification(9))

/* VAT exercise 1 */

// const priceCal = function (base) {
//         total = base * 1.21;
//     return  total;
// };

// const vatTotaal = function (base) {
//     const vatIncl = priceCal(base);
//     return total;
// };

// console.log(vatTotaal(2000));

/* VAT exercise 2 */

const priceCal = function (price) {
    let priceAndVat = price / 1.21;
    let result = price - priceAndVat;
    return result;
};

const knowingPrice = function (price) {
    const vat = priceCal(price);
    console.log('the 21% VAT is',vat);
    console.log('prive excl VAT');
    return price - vat;
};
console.log(knowingPrice(1210));