const numbers = [2, 4, 8, 5, 6, 17];
// const output = [];
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }
// console.log(output);



// function square(element) {
//     return element * element;
// }

// const square = element => element * element;
// const square = x = x * x;

// const result = numbers.map(function (element, index, array) {
//     return element * element;
// })

const result = numbers.map(x => x * x);
console.log(result);

const bigger = numbers.filter(y => y > 5);
console.log("Bigger then five= ", bigger);

const isThree = numbers.find(x => x > 5);
console.log(isThree);