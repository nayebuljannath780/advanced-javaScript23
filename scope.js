const bonus = 15;
function add(num1, num2) {
    let result = num1 + num2 + bonus;
    if (result > 4) {
        var mood = "happy";
    }
    console.log(mood);
    return result;
}
const output = add(3, 7);
console.log(output);